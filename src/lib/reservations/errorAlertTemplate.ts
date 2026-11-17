import { format12h, formatReservationDate, getOccasionLabel, RESTAURANT_TIMEZONE } from './constants';
import { renderLumosSubtleFooter, type RenderedEmailContent } from './emailTemplate';
import type { ValidatedReservation } from './schema';

export type ReservationAlertStage = 'primary_delivery_failed' | 'guest_copy_failed';

export interface ReservationAlertInput {
  stage: ReservationAlertStage;
  referenceId: string;
  provider: string;
  targetEmails: string[];
  errorMessage: string;
  reservation: ValidatedReservation;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function redactSecrets(raw: string): string {
  return raw
    .replace(/(Bearer|Zoho-enczapikey)\s+\S+/gi, '$1 [REDACTED]')
    .replace(/(password|pass|token|api[-_]?key|secret)\s*[:=]\s*\S+/gi, '$1=[REDACTED]')
    .slice(0, 800);
}

function formatRomeNow(): string {
  return new Intl.DateTimeFormat('it-IT', {
    timeZone: RESTAURANT_TIMEZONE,
    dateStyle: 'medium',
    timeStyle: 'medium',
  }).format(new Date());
}

export function buildReservationErrorAlertEmail(
  input: ReservationAlertInput,
): RenderedEmailContent {
  const isPrimaryFailure = input.stage === 'primary_delivery_failed';
  const safeError = redactSecrets(input.errorMessage || 'Unknown delivery error');
  const occurredAt = formatRomeNow();
  const dateLabel = formatReservationDate(input.reservation.date, 'en');
  const time12 = format12h(input.reservation.time);
  const occasion = getOccasionLabel(input.reservation.occasion, 'en');

  const headline = isPrimaryFailure
    ? 'Action Required: Table Reservation Email Failed'
    : 'Notice: Guest Confirmation Copy Failed';

  const summary = isPrimaryFailure
    ? 'The reservation notification could NOT be delivered to the restaurant inbox. Full guest details are included below so this booking is not lost.'
    : 'The restaurant inbox received this reservation, but sending the acknowledgement copy to the guest email failed.';

  const subject = isPrimaryFailure
    ? `[ALERT · Tre Fratelli] Delivery Failed (${input.referenceId}) — ${input.reservation.name}`
    : `[Notice · Tre Fratelli] Guest Copy Failed (${input.referenceId}) — ${input.reservation.email}`;

  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>${escapeHtml(subject)}</title>
  </head>
  <body style="margin:0;padding:24px 12px;background:#F5EFE6;font-family:Arial,Helvetica,sans-serif;color:#2B1F1A;">
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;margin:0 auto;background:#FFFFFF;border-radius:18px;overflow:hidden;border:1px solid #D6C3A3;">
      <tr>
        <td style="padding:22px 26px;background:#FDF7F5;border-bottom:1px solid #E8D9C0;">
          <div style="font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#7A2E2A;font-weight:700;">Tre Fratelli · System Diagnostics</div>
          <h1 style="margin:6px 0 8px;font-size:20px;line-height:1.3;font-family:Georgia,serif;color:#2B1F1A;">${escapeHtml(headline)}</h1>
          <span style="display:inline-block;padding:4px 10px;border-radius:999px;background:#FBEAE8;border:1px solid #E5B9B5;color:#7A2E2A;font-size:11px;font-weight:700;">
            ${escapeHtml(input.stage.toUpperCase())} · ${escapeHtml(input.referenceId)}
          </span>
        </td>
      </tr>
      <tr>
        <td style="padding:22px 26px;">
          <p style="margin:0 0 16px;font-size:14px;line-height:1.6;color:#2B1F1A;">${escapeHtml(summary)}</p>

          <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#FDF7F5;border:1px solid #E5B9B5;border-radius:12px;margin-bottom:18px;">
            <tr>
              <td style="padding:14px 16px;">
                <div style="font-size:11px;text-transform:uppercase;letter-spacing:0.08em;color:#7A2E2A;font-weight:700;margin-bottom:6px;">Error Details</div>
                <div style="font-size:13px;line-height:1.55;color:#2B1F1A;">
                  <strong>Provider:</strong> ${escapeHtml(input.provider)}<br />
                  <strong>Target Email(s):</strong> ${escapeHtml(input.targetEmails.join(', '))}<br />
                  <strong>Time (Rome):</strong> ${escapeHtml(occurredAt)}
                </div>
                <div style="margin-top:10px;padding:10px 12px;background:#FFFFFF;border:1px solid #E8D9C0;border-radius:8px;font-family:Consolas,monospace;font-size:12px;line-height:1.5;color:#5C2320;word-break:break-word;">
                  ${escapeHtml(safeError)}
                </div>
              </td>
            </tr>
          </table>

          <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#FBF8F3;border:1px solid #E8D9C0;border-radius:12px;">
            <tr>
              <td style="padding:14px 16px;border-bottom:1px solid #E8D9C0;font-size:11px;text-transform:uppercase;letter-spacing:0.08em;color:#B08A57;font-weight:700;">
                Saved Reservation Backup (${escapeHtml(input.referenceId)})
              </td>
            </tr>
            <tr>
              <td style="padding:14px 16px;font-size:13px;line-height:1.65;color:#2B1F1A;">
                <strong>Guest:</strong> ${escapeHtml(input.reservation.name)}<br />
                <strong>Phone:</strong> ${escapeHtml(input.reservation.phone)}<br />
                <strong>Guest Email:</strong> ${escapeHtml(input.reservation.email || 'Not provided')}<br />
                <strong>Date &amp; Time:</strong> ${escapeHtml(dateLabel)} (${escapeHtml(input.reservation.date)}) · ${escapeHtml(input.reservation.time)} (${escapeHtml(time12)}) · ${escapeHtml(input.reservation.service)}<br />
                <strong>Party Size:</strong> ${escapeHtml(input.reservation.guests)} Guests<br />
                <strong>Occasion:</strong> ${escapeHtml(occasion)}<br />
                <strong>Notes:</strong> ${escapeHtml(input.reservation.notes || 'None')}
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:14px 26px;background:#FAF6EF;border-top:1px solid #E8D9C0;font-size:12px;color:#6B5A4E;">
          Automated alert sent to the primary sender mailbox · Tre Fratelli Reservation Monitor
        </td>
      </tr>
    </table>
    ${renderLumosSubtleFooter()}
  </body>
</html>`;

  const text = [
    `TRE FRATELLI — ${headline.toUpperCase()}`,
    `Reference: ${input.referenceId}`,
    `Stage: ${input.stage}`,
    `Provider: ${input.provider}`,
    `Target Email(s): ${input.targetEmails.join(', ')}`,
    `Time (Rome): ${occurredAt}`,
    '',
    `Error: ${safeError}`,
    '',
    'RESERVATION BACKUP:',
    `Guest: ${input.reservation.name}`,
    `Phone: ${input.reservation.phone}`,
    `Guest Email: ${input.reservation.email || 'Not provided'}`,
    `Date & Time: ${dateLabel} (${input.reservation.date}) at ${input.reservation.time} (${time12}) [${input.reservation.service}]`,
    `Guests: ${input.reservation.guests}`,
    `Occasion: ${occasion}`,
    `Notes: ${input.reservation.notes || 'None'}`,
  ].join('\n');

  return { subject, html, text };
}
