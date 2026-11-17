import { restaurantOfficialInfo } from '@/data/restaurantDetails';
import {
  format12h,
  formatReservationDate,
  getOccasionLabel,
  RESTAURANT_TIMEZONE,
} from './constants';
import type { ValidatedReservation } from './schema';

export interface RenderedEmailContent {
  subject: string;
  html: string;
  text: string;
}

export const TRE_FRATELLI_LOGO_CID = 'tre-fratelli-logo';
const LUMOS_SIGNATURE_LOGO_URL = 'https://getlumos.studio/brand/lumos-email-logo.png';
const LUMOS_WEBSITE_URL = 'https://getlumos.studio';

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function sanitizeTelHref(phone: string): string {
  const cleaned = phone.replace(/[^\d+]/g, '');
  return cleaned || phone;
}

function formatRomeTimestamp(date = new Date()): string {
  return new Intl.DateTimeFormat('it-IT', {
    timeZone: RESTAURANT_TIMEZONE,
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(date);
}

function resolvePublicSiteUrl(): string | null {
  const raw = process.env.SITE_URL?.trim();
  if (!raw) return null;
  try {
    const parsed = new URL(raw);
    const isLocal =
      parsed.hostname === 'localhost' ||
      parsed.hostname === '127.0.0.1' ||
      parsed.hostname.endsWith('.local');
    if (parsed.protocol !== 'https:' || isLocal) return null;
    return parsed.origin;
  } catch {
    return null;
  }
}

function renderRestaurantHeader(params: {
  eyebrow: string;
  title: string;
  badgeText: string;
  badgeVariant: 'internal' | 'pending';
  useCidLogo: boolean;
}): string {
  const publicOrigin = resolvePublicSiteUrl();
  const logoSrc = params.useCidLogo
    ? `cid:${TRE_FRATELLI_LOGO_CID}`
    : publicOrigin
      ? `${publicOrigin}/images/brand/tre-fratelli-email-logo.png`
      : null;

  const logoHtml = logoSrc
    ? `<img src="${escapeHtml(logoSrc)}" alt="Tre Fratelli" width="145" style="display:block;width:145px;max-width:145px;height:auto;margin:0 auto 12px;border:0;" />`
    : `<div style="display:inline-block;padding:6px 14px;border-radius:999px;background:#FAF6EF;border:1px solid #D6C3A3;font-family:Georgia,serif;font-size:14px;font-weight:700;letter-spacing:0.06em;color:#2B1F1A;margin-bottom:10px;">TRE FRATELLI</div>`;

  const badgeStyle =
    params.badgeVariant === 'internal'
      ? 'background:#FDF6F5;color:#7A2E2A;border:1px solid #E2C5C2;'
      : 'background:#F3F5EE;color:#6B6F46;border:1px solid #CBD2BA;';

  return `
      <tr>
        <td style="height:4px;background-color:#B08A57;background:linear-gradient(90deg,#D6C3A3 0%,#B08A57 45%,#7A2E2A 100%);font-size:0;line-height:0;">&nbsp;</td>
      </tr>
      <tr>
        <td style="padding:26px 28px 18px;background:#FFFFFF;border-bottom:1px solid #EFE5D5;text-align:center;">
          ${logoHtml}
          <div style="font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#B08A57;font-weight:700;">${escapeHtml(params.eyebrow)}</div>
          <h1 style="margin:6px 0 10px;font-size:22px;line-height:1.25;font-family:Georgia,serif;color:#2B1F1A;">${escapeHtml(params.title)}</h1>
          <span style="display:inline-block;padding:5px 13px;border-radius:999px;font-size:11px;font-weight:700;${badgeStyle}">${escapeHtml(params.badgeText)}</span>
        </td>
      </tr>`;
}

export function renderRestaurantSignature(locale: 'it' | 'en'): string {
  const publicOrigin = resolvePublicSiteUrl();
  const roleLabel =
    locale === 'it'
      ? 'Ristorante Italiano &amp; Pizzeria al Forno a Legna'
      : 'Authentic Italian Restaurant &amp; Wood-Fired Pizzeria';
  const hoursSummary =
    locale === 'it'
      ? 'Mar–Sab 12–15 / 18:30–00 · Dom 12–00 · Lun 12–15'
      : 'Tue–Sat 12–15 / 18:30–00 · Sun 12–00 · Mon 12–15';
  const websiteLink = publicOrigin
    ? ` &nbsp;·&nbsp; <a href="${escapeHtml(publicOrigin)}" style="color:#6B5A4E;text-decoration:underline;">${escapeHtml(publicOrigin.replace(/^https?:\/\//, ''))}</a>`
    : '';

  return `
      <tr>
        <td style="padding:18px 28px;background:#FAF6EF;border-top:1px solid #E8D9C0;">
          <div style="font-family:Georgia,serif;font-size:15px;font-weight:700;color:#2B1F1A;">Tre Fratelli</div>
          <div style="font-size:11px;color:#B08A57;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;margin-top:2px;">${roleLabel}</div>
          <div style="font-size:12px;line-height:1.65;color:#6B5A4E;margin-top:6px;">
            ${escapeHtml(restaurantOfficialInfo.address)}<br />
            <a href="tel:${escapeHtml(restaurantOfficialInfo.phone)}" style="color:#7A2E2A;text-decoration:none;font-weight:700;white-space:nowrap;">${escapeHtml(restaurantOfficialInfo.phoneDisplay)}</a>
            &nbsp;·&nbsp;
            <a href="${escapeHtml(restaurantOfficialInfo.googleMapsUrl)}" style="color:#2B1F1A;text-decoration:underline;">Google Maps</a>
            &nbsp;·&nbsp;
            <span style="color:#6B5A4E;">${escapeHtml(hoursSummary)}</span>${websiteLink}
          </div>
        </td>
      </tr>`;
}

export function renderLumosSubtleFooter(): string {
  return `
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:580px;margin:10px auto 0;">
      <tr>
        <td style="padding:4px 10px;text-align:left;vertical-align:middle;font-size:10px;color:#9B8F84;letter-spacing:0.03em;">
          Mail infrastructure by
          <a href="${LUMOS_WEBSITE_URL}" style="color:#6B5A4E;text-decoration:none;font-weight:600;">Lumos Digital Studio</a>
        </td>
        <td style="padding:4px 10px;text-align:right;vertical-align:middle;width:36px;">
          <a href="${LUMOS_WEBSITE_URL}" style="text-decoration:none;">
            <img src="${LUMOS_SIGNATURE_LOGO_URL}" alt="Lumos" width="26" style="display:inline-block;width:26px;max-width:26px;height:auto;opacity:0.48;border:0;" />
          </a>
        </td>
      </tr>
    </table>`;
}

function renderTranslateButtonsRow(translatableSummary: string): string {
  const encoded = encodeURIComponent(translatableSummary);
  const urlArabic = `https://translate.google.com/?sl=auto&tl=ar&text=${encoded}`;
  const urlEnglish = `https://translate.google.com/?sl=auto&tl=en&text=${encoded}`;
  const urlItalian = `https://translate.google.com/?sl=auto&tl=it&text=${encoded}`;

  const pillStyle =
    'display:inline-block;padding:6px 12px;margin:0 4px 4px 0;border-radius:999px;background:#FAF6EF;border:1px solid #D6C3A3;color:#2B1F1A;font-size:11px;font-weight:700;text-decoration:none;';

  return `
          <div style="margin-top:14px;padding:10px 14px;background:#FCF9F4;border:1px solid #E8D9C0;border-radius:12px;">
            <div style="font-size:10px;text-transform:uppercase;letter-spacing:0.08em;color:#6B5A4E;font-weight:700;margin-bottom:6px;">
              Instant Translation (1-Click Google Translate)
            </div>
            <div>
              <a href="${escapeHtml(urlArabic)}" target="_blank" rel="noopener noreferrer" style="${pillStyle}">Translate to Arabic</a>
              <a href="${escapeHtml(urlEnglish)}" target="_blank" rel="noopener noreferrer" style="${pillStyle}">Translate to English</a>
              <a href="${escapeHtml(urlItalian)}" target="_blank" rel="noopener noreferrer" style="${pillStyle}">Translate to Italian</a>
            </div>
          </div>`;
}

export function buildRestaurantNotificationEmail(
  reservation: ValidatedReservation,
  referenceId: string,
  options?: { useCidLogo?: boolean },
): RenderedEmailContent {
  const dateLabelIt = formatReservationDate(reservation.date, 'it');
  const time12 = format12h(reservation.time);
  const serviceLabel = reservation.service === 'lunch' ? 'Pranzo (Lunch)' : 'Cena (Dinner)';
  const occasionLabel = getOccasionLabel(reservation.occasion, 'it');
  const submittedAt = formatRomeTimestamp();
  const telHref = sanitizeTelHref(reservation.phone);

  const subject = `[Tre Fratelli] Nuova Prenotazione · ${reservation.guests} Ospiti · ${dateLabelIt} ${reservation.time} — ${reservation.name}`;

  const translatableSummary = [
    `Tre Fratelli Reservation (${referenceId})`,
    `Guest: ${reservation.name}`,
    `Phone: ${reservation.phone}`,
    `Date: ${dateLabelIt} (${reservation.date})`,
    `Time: ${reservation.time} (${time12}) - ${serviceLabel}`,
    `Guests: ${reservation.guests}`,
    `Occasion: ${occasionLabel}`,
    `Notes / Allergies: ${reservation.notes || 'None'}`,
  ].join('\n');

  const notesHtml = reservation.notes
    ? `
            <tr>
              <td colspan="2" style="padding:12px 16px;border-top:1px solid #F1E9DC;background:#FCF9F4;border-left:3px solid #B08A57;">
                <div style="font-size:10px;text-transform:uppercase;letter-spacing:0.08em;color:#B08A57;font-weight:700;margin-bottom:4px;">Note / Allergie · Special Requests</div>
                <div style="font-size:13.5px;line-height:1.5;color:#2B1F1A;white-space:pre-line;">${escapeHtml(reservation.notes)}</div>
              </td>
            </tr>`
    : '';

  const emailCellHtml = reservation.email
    ? `<a href="mailto:${escapeHtml(reservation.email)}" style="color:#7A2E2A;text-decoration:none;font-weight:600;">${escapeHtml(reservation.email)}</a>`
    : '<span style="color:#6B5A4E;">Non indicata</span>';

  const html = `<!doctype html>
<html lang="it">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>${escapeHtml(subject)}</title>
  </head>
  <body style="margin:0;padding:28px 14px;background:#F5EFE6;font-family:'Segoe UI',Arial,Helvetica,sans-serif;color:#2B1F1A;">
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:580px;margin:0 auto;background:#FFFFFF;border-radius:20px;overflow:hidden;border:1px solid #E8D9C0;">
      ${renderRestaurantHeader({
        eyebrow: 'Prenotazioni Online · Trezzano sul Naviglio',
        title: 'Nuova Richiesta di Prenotazione',
        badgeText: `Riferimento ${referenceId}`,
        badgeVariant: 'internal',
        useCidLogo: Boolean(options?.useCidLogo),
      })}
      <tr>
        <td style="padding:20px 28px 8px;">
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#FAF6EF;border:1px solid #E8D9C0;border-radius:14px;">
            <tr>
              <td style="width:34%;padding:13px 15px;vertical-align:top;">
                <div style="font-size:10px;text-transform:uppercase;letter-spacing:0.08em;color:#6B5A4E;font-weight:700;">Data · Date</div>
                <div style="font-size:15px;font-weight:700;color:#2B1F1A;margin-top:3px;">${escapeHtml(dateLabelIt)}</div>
                <div style="font-size:11px;color:#6B5A4E;margin-top:1px;">${escapeHtml(reservation.date)}</div>
              </td>
              <td style="width:34%;padding:13px 15px;border-left:1px solid #E8D9C0;vertical-align:top;">
                <div style="font-size:10px;text-transform:uppercase;letter-spacing:0.08em;color:#6B5A4E;font-weight:700;">Orario · Time</div>
                <div style="font-size:15px;font-weight:700;color:#7A2E2A;margin-top:3px;">${escapeHtml(reservation.time)} (${escapeHtml(time12)})</div>
                <div style="font-size:11px;color:#6B5A4E;margin-top:1px;">${escapeHtml(serviceLabel)}</div>
              </td>
              <td style="width:32%;padding:13px 15px;border-left:1px solid #E8D9C0;vertical-align:top;">
                <div style="font-size:10px;text-transform:uppercase;letter-spacing:0.08em;color:#6B5A4E;font-weight:700;">Ospiti · Guests</div>
                <div style="font-size:15px;font-weight:700;color:#2B1F1A;margin-top:3px;">${escapeHtml(reservation.guests)} Ospiti</div>
                <div style="font-size:11px;color:#6B5A4E;margin-top:1px;">Lingua: ${escapeHtml(reservation.locale.toUpperCase())}</div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:12px 28px 22px;">
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border:1px solid #E8D9C0;border-radius:14px;overflow:hidden;background:#FFFFFF;">
            <tr>
              <td style="padding:12px 16px;font-size:12px;color:#6B5A4E;font-weight:700;width:36%;">Ospite · Guest</td>
              <td style="padding:12px 16px;font-size:15px;font-weight:700;color:#2B1F1A;">${escapeHtml(reservation.name)}</td>
            </tr>
            <tr>
              <td style="padding:12px 16px;border-top:1px solid #F1E9DC;font-size:12px;color:#6B5A4E;font-weight:700;">Telefono · Phone</td>
              <td style="padding:12px 16px;border-top:1px solid #F1E9DC;font-size:15px;font-weight:700;">
                <a href="tel:${escapeHtml(telHref)}" style="color:#7A2E2A;text-decoration:none;white-space:nowrap;">${escapeHtml(reservation.phone)}</a>
              </td>
            </tr>
            <tr>
              <td style="padding:12px 16px;border-top:1px solid #F1E9DC;font-size:12px;color:#6B5A4E;font-weight:700;">Email</td>
              <td style="padding:12px 16px;border-top:1px solid #F1E9DC;font-size:14px;">${emailCellHtml}</td>
            </tr>
            <tr>
              <td style="padding:12px 16px;border-top:1px solid #F1E9DC;font-size:12px;color:#6B5A4E;font-weight:700;">Occasione · Occasion</td>
              <td style="padding:12px 16px;border-top:1px solid #F1E9DC;font-size:14px;font-weight:600;color:#2B1F1A;">${escapeHtml(occasionLabel)}</td>
            </tr>
            ${notesHtml}
          </table>
          ${renderTranslateButtonsRow(translatableSummary)}
          <div style="margin-top:14px;font-size:12px;line-height:1.5;color:#6B5A4E;">
            Ricevuta il ${escapeHtml(submittedAt)} (Milano).${reservation.email ? ' Rispondi direttamente a questa email per confermare al cliente.' : ''}
          </div>
        </td>
      </tr>
      ${renderRestaurantSignature('it')}
    </table>
    ${renderLumosSubtleFooter()}
  </body>
</html>`;

  const text = [
    `TRE FRATELLI — NUOVA PRENOTAZIONE TAVOLO (${referenceId})`,
    `--------------------------------------------------`,
    `Data / Date: ${dateLabelIt} (${reservation.date})`,
    `Servizio & Orario / Time: ${serviceLabel} - ${reservation.time} (${time12})`,
    `Ospiti / Guests: ${reservation.guests}`,
    `Nome / Guest: ${reservation.name}`,
    `Telefono / Phone: ${reservation.phone}`,
    `Email: ${reservation.email || 'Non indicata'}`,
    `Occasione / Occasion: ${occasionLabel}`,
    `Note / Allergie: ${reservation.notes || 'Nessuna'}`,
    `Lingua sito: ${reservation.locale.toUpperCase()}`,
    `Inviata il: ${submittedAt} (Europe/Rome)`,
    '',
    `--`,
    `Tre Fratelli · ${restaurantOfficialInfo.address}`,
    `Tel: ${restaurantOfficialInfo.phoneDisplay}`,
    `Mail infrastructure by Lumos Digital Studio (getlumos.studio)`,
  ].join('\n');

  return { subject, html, text };
}

export function buildGuestAcknowledgementEmail(
  reservation: ValidatedReservation,
  referenceId: string,
  options?: { useCidLogo?: boolean },
): RenderedEmailContent {
  const isItalian = reservation.locale === 'it';
  const dateLabel = formatReservationDate(reservation.date, reservation.locale);
  const time12 = format12h(reservation.time);
  const occasionLabel = getOccasionLabel(reservation.occasion, reservation.locale);
  const serviceLabel = isItalian
    ? reservation.service === 'lunch'
      ? 'Pranzo'
      : 'Cena'
    : reservation.service === 'lunch'
      ? 'Lunch'
      : 'Dinner';

  const subject = isItalian
    ? `Richiesta di prenotazione ricevuta (${referenceId}) — Tre Fratelli`
    : `Reservation Request Received (${referenceId}) — Tre Fratelli`;

  const title = isItalian ? 'Richiesta Ricevuta' : 'Reservation Request Received';
  const badgeText = isItalian
    ? `In Attesa di Conferma · ${referenceId}`
    : `Pending Confirmation · ${referenceId}`;
  const intro = isItalian
    ? `Gentile ${reservation.name}, grazie per aver scelto Tre Fratelli. Abbiamo ricevuto la tua richiesta di prenotazione e il nostro maître la confermerà al più presto via telefono o email.`
    : `Dear ${reservation.name}, thank you for choosing Tre Fratelli. We have received your reservation request and our maître d' will confirm it shortly by phone or email.`;
  const guestsText = isItalian
    ? `${reservation.guests} Ospiti`
    : `${reservation.guests} Guests`;
  const urgentHelp = isItalian
    ? 'Hai bisogno di modificare l’orario o aggiungere dettagli? Chiamaci direttamente al'
    : 'Need to update your booking or share urgent details? Call us directly at';

  const notesRow = reservation.notes
    ? `
            <tr>
              <td style="padding:11px 16px;border-top:1px solid #E8D9C0;font-size:13px;background:#FCF9F4;">
                <strong style="color:#B08A57;">${isItalian ? 'Note' : 'Notes'}:</strong> ${escapeHtml(reservation.notes)}
              </td>
            </tr>`
    : '';

  const html = `<!doctype html>
<html lang="${reservation.locale}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>${escapeHtml(subject)}</title>
  </head>
  <body style="margin:0;padding:28px 14px;background:#F5EFE6;font-family:'Segoe UI',Arial,Helvetica,sans-serif;color:#2B1F1A;">
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:580px;margin:0 auto;background:#FFFFFF;border-radius:20px;overflow:hidden;border:1px solid #E8D9C0;">
      ${renderRestaurantHeader({
        eyebrow: 'Trezzano sul Naviglio · Milano',
        title,
        badgeText,
        badgeVariant: 'pending',
        useCidLogo: Boolean(options?.useCidLogo),
      })}
      <tr>
        <td style="padding:22px 28px;font-size:14px;line-height:1.65;color:#2B1F1A;">
          <p style="margin:0 0 18px;">${escapeHtml(intro)}</p>
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#FAF6EF;border:1px solid #E8D9C0;border-radius:14px;overflow:hidden;">
            <tr>
              <td style="padding:11px 16px;font-size:13px;">
                <strong style="color:#6B5A4E;">${isItalian ? 'Data' : 'Date'}:</strong> ${escapeHtml(dateLabel)} (${escapeHtml(reservation.date)})
              </td>
            </tr>
            <tr>
              <td style="padding:11px 16px;border-top:1px solid #E8D9C0;font-size:13px;">
                <strong style="color:#6B5A4E;">${isItalian ? 'Orario e Servizio' : 'Service & Time'}:</strong> ${escapeHtml(serviceLabel)} · <span style="color:#7A2E2A;font-weight:700;">${escapeHtml(reservation.time)} (${escapeHtml(time12)})</span>
              </td>
            </tr>
            <tr>
              <td style="padding:11px 16px;border-top:1px solid #E8D9C0;font-size:13px;">
                <strong style="color:#6B5A4E;">${isItalian ? 'Ospiti' : 'Guests'}:</strong> ${escapeHtml(guestsText)}
              </td>
            </tr>
            <tr>
              <td style="padding:11px 16px;border-top:1px solid #E8D9C0;font-size:13px;">
                <strong style="color:#6B5A4E;">${isItalian ? 'Occasione' : 'Occasion'}:</strong> ${escapeHtml(occasionLabel)}
              </td>
            </tr>
            ${notesRow}
          </table>
          <p style="margin:18px 0 0;font-size:13px;color:#6B5A4E;">
            ${escapeHtml(urgentHelp)}
            <a href="tel:${escapeHtml(restaurantOfficialInfo.phone)}" style="color:#7A2E2A;text-decoration:none;font-weight:700;white-space:nowrap;">${escapeHtml(restaurantOfficialInfo.phoneDisplay)}</a>.
          </p>
        </td>
      </tr>
      ${renderRestaurantSignature(reservation.locale)}
    </table>
    ${renderLumosSubtleFooter()}
  </body>
</html>`;

  const text = [
    `TRE FRATELLI — ${title.toUpperCase()}`,
    badgeText,
    '',
    intro,
    '',
    `${isItalian ? 'Data' : 'Date'}: ${dateLabel} (${reservation.date})`,
    `${isItalian ? 'Orario' : 'Time'}: ${serviceLabel} · ${reservation.time} (${time12})`,
    `${isItalian ? 'Ospiti' : 'Guests'}: ${guestsText}`,
    `${isItalian ? 'Occasione' : 'Occasion'}: ${occasionLabel}`,
    ...(reservation.notes ? [`${isItalian ? 'Note' : 'Notes'}: ${reservation.notes}`] : []),
    '',
    `${urgentHelp} ${restaurantOfficialInfo.phoneDisplay}`,
    '',
    `--`,
    `Tre Fratelli · ${restaurantOfficialInfo.address}`,
    `Mail infrastructure by Lumos Digital Studio (getlumos.studio)`,
  ].join('\n');

  return { subject, html, text };
}
