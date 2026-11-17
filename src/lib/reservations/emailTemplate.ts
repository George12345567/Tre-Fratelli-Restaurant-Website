import { restaurantOfficialInfo } from '@/data/restaurantDetails';
import {
  format12h,
  formatReservationDate,
  formatReservationDateLong,
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
            <a href="mailto:${escapeHtml(restaurantOfficialInfo.email)}" style="color:#7A2E2A;text-decoration:none;font-weight:600;white-space:nowrap;">${escapeHtml(restaurantOfficialInfo.email)}</a>
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

function buildStructuredTranslatePayloads(
  reservation: ValidatedReservation,
  referenceId: string,
): { italianSource: string; englishSource: string } {
  const dateLongIt = formatReservationDateLong(reservation.date, 'it');
  const dateLongEn = formatReservationDateLong(reservation.date, 'en');
  const time12 = format12h(reservation.time);
  const serviceIt = reservation.service === 'lunch' ? 'Pranzo' : 'Cena';
  const serviceEn = reservation.service === 'lunch' ? 'Lunch' : 'Dinner';
  const occasionIt = getOccasionLabel(reservation.occasion, 'it');
  const occasionEn = getOccasionLabel(reservation.occasion, 'en');
  const cleanNotes = reservation.notes?.trim();

  const italianSource = [
    `=== TRE FRATELLI · RIEPILOGO PRENOTAZIONE ===`,
    `Codice Riferimento: ${referenceId}`,
    ``,
    `[ DETTAGLI PRINCIPALI DELLA PRENOTAZIONE ]`,
    `• Data: ${dateLongIt} (${reservation.date})`,
    `• Orario e Servizio: ${reservation.time} (${time12}) — ${serviceIt}`,
    `• Numero di Ospiti: ${reservation.guests} Ospiti`,
    `• Occasione / Motivo: ${occasionIt}`,
    `• Richieste Particolari / Allergie: ${cleanNotes || 'Nessuna richiesta particolare'}`,
    ``,
    `[ DATI DELL'OSPITE ]`,
    `• Nome e Cognome: ${reservation.name}`,
    `• Telefono: ${reservation.phone}`,
    `• Email: ${reservation.email || 'Non indicata'}`,
  ].join('\n');

  const englishSource = [
    `=== TRE FRATELLI · RESERVATION SUMMARY ===`,
    `Reference Code: ${referenceId}`,
    ``,
    `[ MAIN RESERVATION DETAILS ]`,
    `• Date: ${dateLongEn} (${reservation.date})`,
    `• Time & Service: ${reservation.time} (${time12}) — ${serviceEn}`,
    `• Number of Guests: ${reservation.guests} Guests`,
    `• Occasion / Reason: ${occasionEn}`,
    `• Special Requests / Allergies: ${cleanNotes || 'No special requests'}`,
    ``,
    `[ GUEST CONTACT DETAILS ]`,
    `• Full Name: ${reservation.name}`,
    `• Phone: ${reservation.phone}`,
    `• Email: ${reservation.email || 'Not provided'}`,
  ].join('\n');

  return { italianSource, englishSource };
}

function renderTranslateButtonsRow(
  reservation: ValidatedReservation,
  referenceId: string,
): string {
  const { italianSource, englishSource } = buildStructuredTranslatePayloads(
    reservation,
    referenceId,
  );
  const encodedIt = encodeURIComponent(italianSource);
  const encodedEn = encodeURIComponent(englishSource);

  const urlArabic = `https://translate.google.com/?sl=auto&tl=ar&text=${encodedIt}&op=translate`;
  const urlEnglish = `https://translate.google.com/?sl=auto&tl=en&text=${encodedIt}&op=translate`;
  const urlItalian = `https://translate.google.com/?sl=auto&tl=it&text=${encodedEn}&op=translate`;

  const pillStyle =
    'display:inline-block;padding:7px 12px;margin:3px 5px 2px 0;border-radius:999px;background:#FFFFFF;border:1px solid #C8AE86;color:#2B1F1A;font-size:11.5px;font-weight:700;text-decoration:none;';

  return `
          <div style="margin-top:16px;padding:12px 16px;background:#FAF6EF;border:1px solid #DECBB0;border-radius:14px;">
            <div style="font-size:10.5px;text-transform:uppercase;letter-spacing:0.08em;color:#7A2E2A;font-weight:700;margin-bottom:6px;">
              Google Translate · Traduzione Organizzata con 1 Clic
            </div>
            <div>
              <a href="${escapeHtml(urlArabic)}" target="_blank" rel="noopener noreferrer" style="${pillStyle}">🌐 Translate to Arabic</a>
              <a href="${escapeHtml(urlEnglish)}" target="_blank" rel="noopener noreferrer" style="${pillStyle}">🌐 Translate to English</a>
              <a href="${escapeHtml(urlItalian)}" target="_blank" rel="noopener noreferrer" style="${pillStyle}">🌐 Translate to Italian</a>
            </div>
          </div>`;
}

export function buildRestaurantNotificationEmail(
  reservation: ValidatedReservation,
  referenceId: string,
  options?: { useCidLogo?: boolean },
): RenderedEmailContent {
  const dateShortIt = formatReservationDate(reservation.date, 'it');
  const dateLongIt = formatReservationDateLong(reservation.date, 'it');
  const dateLongEn = formatReservationDateLong(reservation.date, 'en');
  const time12 = format12h(reservation.time);
  const serviceLabel = reservation.service === 'lunch' ? 'Pranzo · Lunch' : 'Cena · Dinner';
  const occasionIt = getOccasionLabel(reservation.occasion, 'it');
  const occasionEn = getOccasionLabel(reservation.occasion, 'en');
  const submittedAt = formatRomeTimestamp();
  const telHref = sanitizeTelHref(reservation.phone);

  const subject = `[Tre Fratelli] Nuova Prenotazione · ${reservation.guests} Ospiti · ${dateShortIt} ${reservation.time} — ${reservation.name}`;

  const cleanNotes = reservation.notes?.trim();
  const notesDisplayHtml = cleanNotes
    ? `<div style="font-size:15px;font-weight:700;line-height:1.55;color:#2B1F1A;white-space:pre-line;">${escapeHtml(cleanNotes)}</div>`
    : `<div style="font-size:13.5px;color:#6B5A4E;font-style:italic;">Nessuna richiesta particolare o allergia segnalata · None</div>`;

  const emailCellHtml = reservation.email
    ? `<a href="mailto:${escapeHtml(reservation.email)}" style="color:#7A2E2A;text-decoration:none;font-weight:700;">${escapeHtml(reservation.email)}</a>`
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
        <td style="padding:22px 26px 24px;">
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border:2px solid #D6C3A3;border-radius:16px;overflow:hidden;background:#FFFFFF;">
            <tr>
              <td colspan="2" style="padding:12px 18px;background:#FAF6EF;border-bottom:2px solid #D6C3A3;">
                <span style="font-size:11px;text-transform:uppercase;letter-spacing:0.1em;color:#7A2E2A;font-weight:800;">
                  Dettagli Principali della Prenotazione · Main Booking Details
                </span>
              </td>
            </tr>
            <tr>
              <td style="padding:15px 18px;width:36%;font-size:12px;text-transform:uppercase;letter-spacing:0.05em;color:#6B5A4E;font-weight:700;vertical-align:middle;background:#FCF9F4;">
                Data · Date
              </td>
              <td style="padding:15px 18px;vertical-align:middle;background:#FCF9F4;">
                <div style="font-size:17px;font-weight:800;color:#2B1F1A;line-height:1.3;">${escapeHtml(dateLongIt)}</div>
                <div style="font-size:12px;color:#6B5A4E;margin-top:2px;">${escapeHtml(dateLongEn)} &nbsp;·&nbsp; ${escapeHtml(reservation.date)}</div>
              </td>
            </tr>
            <tr>
              <td style="padding:15px 18px;border-top:1px solid #EADBC6;font-size:12px;text-transform:uppercase;letter-spacing:0.05em;color:#6B5A4E;font-weight:700;vertical-align:middle;background:#FDF7F5;">
                Orario e Servizio · Time
              </td>
              <td style="padding:15px 18px;border-top:1px solid #EADBC6;vertical-align:middle;background:#FDF7F5;">
                <span style="font-size:19px;font-weight:800;color:#7A2E2A;vertical-align:middle;">${escapeHtml(reservation.time)} (${escapeHtml(time12)})</span>
                <span style="display:inline-block;margin-left:8px;padding:3px 10px;border-radius:999px;background:#FFFFFF;border:1px solid #E2C5C2;color:#7A2E2A;font-size:11.5px;font-weight:700;vertical-align:middle;">${escapeHtml(serviceLabel)}</span>
              </td>
            </tr>
            <tr>
              <td style="padding:15px 18px;border-top:1px solid #EADBC6;font-size:12px;text-transform:uppercase;letter-spacing:0.05em;color:#6B5A4E;font-weight:700;vertical-align:middle;background:#FCF9F4;">
                Ospiti · Guests
              </td>
              <td style="padding:15px 18px;border-top:1px solid #EADBC6;vertical-align:middle;background:#FCF9F4;">
                <span style="font-size:17px;font-weight:800;color:#2B1F1A;">${escapeHtml(reservation.guests)} Ospiti</span>
                <span style="font-size:13px;color:#6B5A4E;font-weight:600;"> &nbsp;(${escapeHtml(reservation.guests)} Guests)</span>
              </td>
            </tr>
            <tr>
              <td style="padding:15px 18px;border-top:1px solid #EADBC6;font-size:12px;text-transform:uppercase;letter-spacing:0.05em;color:#6B5A4E;font-weight:700;vertical-align:middle;background:#FFFFFF;">
                Occasione · Reason
              </td>
              <td style="padding:15px 18px;border-top:1px solid #EADBC6;vertical-align:middle;background:#FFFFFF;">
                <div style="font-size:16px;font-weight:800;color:#7A2E2A;">${escapeHtml(occasionIt)}</div>
                <div style="font-size:12px;color:#6B5A4E;margin-top:2px;">${escapeHtml(occasionEn)}</div>
              </td>
            </tr>
            <tr>
              <td colspan="2" style="padding:15px 18px;border-top:1px solid #EADBC6;background:#FCF9F4;border-left:4px solid #B08A57;">
                <div style="font-size:11px;text-transform:uppercase;letter-spacing:0.08em;color:#B08A57;font-weight:800;margin-bottom:5px;">
                  Richieste Particolari / Allergie · Special Requests &amp; Notes
                </div>
                ${notesDisplayHtml}
              </td>
            </tr>
            <tr>
              <td colspan="2" style="padding:10px 18px;background:#FAF6EF;border-top:2px solid #D6C3A3;border-bottom:1px solid #E8D9C0;">
                <span style="font-size:10.5px;text-transform:uppercase;letter-spacing:0.1em;color:#6B5A4E;font-weight:800;">
                  Dati dell&rsquo;Ospite · Guest Contact Information
                </span>
              </td>
            </tr>
            <tr>
              <td style="padding:13px 18px;font-size:12px;color:#6B5A4E;font-weight:700;">Ospite · Full Name</td>
              <td style="padding:13px 18px;font-size:16px;font-weight:800;color:#2B1F1A;">${escapeHtml(reservation.name)}</td>
            </tr>
            <tr>
              <td style="padding:13px 18px;border-top:1px solid #F1E9DC;font-size:12px;color:#6B5A4E;font-weight:700;">Telefono · Phone</td>
              <td style="padding:13px 18px;border-top:1px solid #F1E9DC;font-size:16px;font-weight:800;">
                <a href="tel:${escapeHtml(telHref)}" style="color:#7A2E2A;text-decoration:none;white-space:nowrap;">${escapeHtml(reservation.phone)}</a>
              </td>
            </tr>
            <tr>
              <td style="padding:13px 18px;border-top:1px solid #F1E9DC;font-size:12px;color:#6B5A4E;font-weight:700;">Email &amp; Lingua</td>
              <td style="padding:13px 18px;border-top:1px solid #F1E9DC;font-size:14px;">
                ${emailCellHtml}
                <span style="font-size:12px;color:#6B5A4E;"> &nbsp;·&nbsp; Lingua: ${escapeHtml(reservation.locale.toUpperCase())}</span>
              </td>
            </tr>
          </table>
          ${renderTranslateButtonsRow(reservation, referenceId)}
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
    `==================================================`,
    `DETTAGLI PRINCIPALI DELLA PRENOTAZIONE:`,
    `• Data / Date: ${dateLongIt} (${reservation.date})`,
    `• Orario e Servizio / Time: ${reservation.time} (${time12}) — ${serviceLabel}`,
    `• Ospiti / Guests: ${reservation.guests} Ospiti`,
    `• Occasione / Reason: ${occasionIt} (${occasionEn})`,
    `• Richieste Particolari / Allergie: ${cleanNotes || 'Nessuna'}`,
    ``,
    `DATI DELL'OSPITE:`,
    `• Nome / Guest: ${reservation.name}`,
    `• Telefono / Phone: ${reservation.phone}`,
    `• Email: ${reservation.email || 'Non indicata'}`,
    `• Lingua sito: ${reservation.locale.toUpperCase()}`,
    `• Inviata il: ${submittedAt} (Europe/Rome)`,
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
  const dateLabelLong = formatReservationDateLong(reservation.date, reservation.locale);
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

  const cleanNotes = reservation.notes?.trim();
  const notesDisplay = cleanNotes
    ? escapeHtml(cleanNotes)
    : isItalian
      ? 'Nessuna richiesta particolare indicata'
      : 'No special requests indicated';

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
        <td style="padding:22px 26px;font-size:14px;line-height:1.65;color:#2B1F1A;">
          <p style="margin:0 0 18px;">${escapeHtml(intro)}</p>
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border:2px solid #D6C3A3;border-radius:16px;overflow:hidden;background:#FFFFFF;">
            <tr>
              <td colspan="2" style="padding:11px 18px;background:#FAF6EF;border-bottom:2px solid #D6C3A3;font-size:11px;text-transform:uppercase;letter-spacing:0.1em;color:#7A2E2A;font-weight:800;">
                ${isItalian ? 'Dettagli Principali della Prenotazione' : 'Main Reservation Details'} · ${escapeHtml(referenceId)}
              </td>
            </tr>
            <tr>
              <td style="padding:13px 18px;width:36%;font-size:12px;color:#6B5A4E;font-weight:700;background:#FCF9F4;">
                ${isItalian ? 'Data' : 'Date'}
              </td>
              <td style="padding:13px 18px;font-size:16px;font-weight:800;color:#2B1F1A;background:#FCF9F4;">
                ${escapeHtml(dateLabelLong)} <span style="font-size:12px;font-weight:500;color:#6B5A4E;">(${escapeHtml(reservation.date)})</span>
              </td>
            </tr>
            <tr>
              <td style="padding:13px 18px;border-top:1px solid #EADBC6;font-size:12px;color:#6B5A4E;font-weight:700;background:#FDF7F5;">
                ${isItalian ? 'Orario e Servizio' : 'Time & Service'}
              </td>
              <td style="padding:13px 18px;border-top:1px solid #EADBC6;font-size:17px;font-weight:800;color:#7A2E2A;background:#FDF7F5;">
                ${escapeHtml(reservation.time)} (${escapeHtml(time12)}) &nbsp;·&nbsp; ${escapeHtml(serviceLabel)}
              </td>
            </tr>
            <tr>
              <td style="padding:13px 18px;border-top:1px solid #EADBC6;font-size:12px;color:#6B5A4E;font-weight:700;background:#FCF9F4;">
                ${isItalian ? 'Ospiti' : 'Guests'}
              </td>
              <td style="padding:13px 18px;border-top:1px solid #EADBC6;font-size:16px;font-weight:800;color:#2B1F1A;background:#FCF9F4;">
                ${escapeHtml(guestsText)}
              </td>
            </tr>
            <tr>
              <td style="padding:13px 18px;border-top:1px solid #EADBC6;font-size:12px;color:#6B5A4E;font-weight:700;">
                ${isItalian ? 'Occasione' : 'Occasion'}
              </td>
              <td style="padding:13px 18px;border-top:1px solid #EADBC6;font-size:15px;font-weight:700;color:#7A2E2A;">
                ${escapeHtml(occasionLabel)}
              </td>
            </tr>
            <tr>
              <td style="padding:13px 18px;border-top:1px solid #EADBC6;font-size:12px;color:#6B5A4E;font-weight:700;background:#FCF9F4;">
                ${isItalian ? 'Richieste / Allergie' : 'Special Requests'}
              </td>
              <td style="padding:13px 18px;border-top:1px solid #EADBC6;font-size:14px;font-weight:600;color:#2B1F1A;background:#FCF9F4;">
                ${notesDisplay}
              </td>
            </tr>
            <tr>
              <td style="padding:12px 18px;border-top:1px solid #EADBC6;font-size:12px;color:#6B5A4E;font-weight:700;">
                ${isItalian ? 'Ospite e Telefono' : 'Guest & Phone'}
              </td>
              <td style="padding:12px 18px;border-top:1px solid #EADBC6;font-size:14px;font-weight:700;color:#2B1F1A;">
                ${escapeHtml(reservation.name)} &nbsp;·&nbsp; <span style="color:#7A2E2A;">${escapeHtml(reservation.phone)}</span>
              </td>
            </tr>
          </table>
          ${renderTranslateButtonsRow(reservation, referenceId)}
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
    `${isItalian ? 'Data' : 'Date'}: ${dateLabelLong} (${reservation.date})`,
    `${isItalian ? 'Orario e Servizio' : 'Time & Service'}: ${reservation.time} (${time12}) · ${serviceLabel}`,
    `${isItalian ? 'Ospiti' : 'Guests'}: ${guestsText}`,
    `${isItalian ? 'Occasione' : 'Occasion'}: ${occasionLabel}`,
    `${isItalian ? 'Richieste / Allergie' : 'Special Requests'}: ${cleanNotes || (isItalian ? 'Nessuna' : 'None')}`,
    `${isItalian ? 'Ospite' : 'Guest'}: ${reservation.name} (${reservation.phone})`,
    '',
    `${urgentHelp} ${restaurantOfficialInfo.phoneDisplay}`,
    '',
    `--`,
    `Tre Fratelli · ${restaurantOfficialInfo.address}`,
    `Mail infrastructure by Lumos Digital Studio (getlumos.studio)`,
  ].join('\n');

  return { subject, html, text };
}
