import { randomBytes } from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { getReservationDeliveryConfig } from '@/lib/email/config';
import { sendTransactionalEmail } from '@/lib/email/providers';
import type {
  EmailAddress,
  EmailInlineImage,
  EmailProviderCredentials,
} from '@/lib/email/types';
import {
  buildGuestAcknowledgementEmail,
  buildRestaurantNotificationEmail,
  TRE_FRATELLI_LOGO_CID,
} from './emailTemplate';
import {
  buildReservationErrorAlertEmail,
  type ReservationAlertStage,
} from './errorAlertTemplate';
import type { ValidatedReservation } from './schema';

export type SubmitReservationResult =
  | {
      status: 'delivered';
      referenceId: string;
      delivery: 'email' | 'preview';
      guestCopySent: boolean;
    }
  | {
      status: 'unconfigured';
      missing: string[];
    };

function generateReferenceId(dateIso: string): string {
  const compactDate = dateIso.replace(/-/g, '').slice(2);
  const randomSuffix = randomBytes(2).toString('hex').toUpperCase();
  return `TF-${compactDate}-${randomSuffix}`;
}

function resolveInlineLogoAttachment(
  credentials: EmailProviderCredentials,
): EmailInlineImage[] | undefined {
  if (credentials.provider !== 'smtp') return undefined;
  const logoPath = path.join(
    process.cwd(),
    'public',
    'images',
    'brand',
    'tre-fratelli-email-logo.png',
  );
  if (!fs.existsSync(logoPath)) return undefined;
  return [
    {
      cid: TRE_FRATELLI_LOGO_CID,
      filePath: logoPath,
      filename: 'tre-fratelli-email-logo.png',
      contentType: 'image/png',
    },
  ];
}

async function sendAlertEmailSafely(params: {
  credentials: EmailProviderCredentials;
  from: EmailAddress;
  alertTo: EmailAddress | null;
  stage: ReservationAlertStage;
  referenceId: string;
  targetEmails: string[];
  error: unknown;
  reservation: ValidatedReservation;
}): Promise<void> {
  if (!params.alertTo) return;
  const errorMessage =
    params.error instanceof Error ? params.error.message : 'Unknown delivery failure';

  try {
    const alertMail = buildReservationErrorAlertEmail({
      stage: params.stage,
      referenceId: params.referenceId,
      provider: params.credentials.provider,
      targetEmails: params.targetEmails,
      errorMessage,
      reservation: params.reservation,
    });

    await sendTransactionalEmail(params.credentials, {
      from: params.from,
      to: [params.alertTo],
      subject: alertMail.subject,
      html: alertMail.html,
      text: alertMail.text,
      idempotencyKey: `reservation-${params.referenceId}-alert-${params.stage}`,
    });
  } catch (alertError) {
    console.error('[reservation:alert-email-failed]', {
      referenceId: params.referenceId,
      stage: params.stage,
      error: alertError instanceof Error ? alertError.message : 'Alert send failed',
    });
  }
}

export async function submitReservationRequest(
  reservation: ValidatedReservation,
): Promise<SubmitReservationResult> {
  const referenceId = generateReferenceId(reservation.date);
  const config = getReservationDeliveryConfig();

  if (config.mode === 'unconfigured') {
    return { status: 'unconfigured', missing: config.missing };
  }

  if (config.mode === 'preview') {
    const previewMail = buildRestaurantNotificationEmail(reservation, referenceId);
    console.info('[reservation:preview]', {
      referenceId,
      reason: config.reason,
      subject: previewMail.subject,
      reservation: {
        date: reservation.date,
        service: reservation.service,
        time: reservation.time,
        guests: reservation.guests,
        occasion: reservation.occasion,
        locale: reservation.locale,
      },
    });
    return {
      status: 'delivered',
      referenceId,
      delivery: 'preview',
      guestCopySent: false,
    };
  }

  const inlineImages = resolveInlineLogoAttachment(config.credentials);
  const useCidLogo = Boolean(inlineImages && inlineImages.length > 0);
  const restaurantMail = buildRestaurantNotificationEmail(reservation, referenceId, {
    useCidLogo,
  });

  try {
    await sendTransactionalEmail(config.credentials, {
      from: config.from,
      to: config.to,
      ...(reservation.email
        ? { replyTo: { email: reservation.email, name: reservation.name } }
        : {}),
      subject: restaurantMail.subject,
      html: restaurantMail.html,
      text: restaurantMail.text,
      idempotencyKey: `reservation-${referenceId}-restaurant`,
      inlineImages,
    });
  } catch (primaryError) {
    await sendAlertEmailSafely({
      credentials: config.credentials,
      from: config.from,
      alertTo: config.alertTo,
      stage: 'primary_delivery_failed',
      referenceId,
      targetEmails: config.to.map((recipient) => recipient.email),
      error: primaryError,
      reservation,
    });
    throw primaryError;
  }

  let guestCopySent = false;
  if (config.sendGuestCopy && reservation.email) {
    try {
      const guestMail = buildGuestAcknowledgementEmail(reservation, referenceId, {
        useCidLogo,
      });
      await sendTransactionalEmail(config.credentials, {
        from: config.from,
        to: [{ email: reservation.email, name: reservation.name }],
        replyTo: config.to[0],
        subject: guestMail.subject,
        html: guestMail.html,
        text: guestMail.text,
        idempotencyKey: `reservation-${referenceId}-guest`,
        inlineImages,
      });
      guestCopySent = true;
    } catch (guestError) {
      console.warn('[reservation:guest-copy-failed]', {
        referenceId,
        error: guestError instanceof Error ? guestError.message : 'Unknown error',
      });
      await sendAlertEmailSafely({
        credentials: config.credentials,
        from: config.from,
        alertTo: config.alertTo,
        stage: 'guest_copy_failed',
        referenceId,
        targetEmails: [reservation.email],
        error: guestError,
        reservation,
      });
    }
  }

  return {
    status: 'delivered',
    referenceId,
    delivery: 'email',
    guestCopySent,
  };
}
