import { isMonday } from '@/data/restaurantSchedule';
import type { Locale } from '@/i18n/routing';
import {
  DINNER_SLOTS,
  GUEST_PRESETS,
  LUNCH_SLOTS,
  RESERVATION_OCCASIONS,
  getRomeDateIso,
  type GuestPreset,
  type ReservationOccasion,
  type ReservationService,
} from './constants';

export interface ReservationInput {
  date: string;
  guests: string;
  service: ReservationService;
  time: string;
  name: string;
  phone: string;
  email?: string;
  occasion?: string;
  notes?: string;
  locale?: string;
  tf_rsv_check?: string;
}

export interface ValidatedReservation {
  date: string;
  guests: GuestPreset;
  service: ReservationService;
  time: string;
  name: string;
  phone: string;
  email: string;
  occasion: ReservationOccasion;
  notes: string;
  locale: Locale;
}

export type ReservationValidationErrorCode =
  | 'INVALID_PAYLOAD'
  | 'INVALID_DATE'
  | 'MONDAY_DINNER_CLOSED'
  | 'INVALID_GUESTS'
  | 'INVALID_TIME'
  | 'INVALID_NAME'
  | 'INVALID_PHONE'
  | 'INVALID_EMAIL'
  | 'INVALID_OCCASION'
  | 'INVALID_NOTES';

export type ReservationValidationResult =
  | { ok: true; data: ValidatedReservation; isHoneypotTriggered: boolean }
  | { ok: false; code: ReservationValidationErrorCode };

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DATE_ISO_REGEX = /^\d{4}-\d{2}-\d{2}$/;

function sanitizeSingleLine(value: unknown): string {
  if (typeof value !== 'string') return '';
  return value.replace(/[\r\n\t]+/g, ' ').trim();
}

function sanitizeMultiline(value: unknown): string {
  if (typeof value !== 'string') return '';
  return value.replace(/\r\n/g, '\n').replace(/\r/g, '\n').trim();
}

function isRealCalendarDate(dateIso: string): boolean {
  if (!DATE_ISO_REGEX.test(dateIso)) return false;
  const [year, month, day] = dateIso.split('-').map(Number);
  const utc = new Date(Date.UTC(year, month - 1, day));
  return (
    utc.getUTCFullYear() === year &&
    utc.getUTCMonth() === month - 1 &&
    utc.getUTCDate() === day
  );
}

export function validateReservationInput(raw: unknown): ReservationValidationResult {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) {
    return { ok: false, code: 'INVALID_PAYLOAD' };
  }

  const record = raw as Record<string, unknown>;
  const honeypot = sanitizeSingleLine(record.tf_rsv_check);
  const isHoneypotTriggered = honeypot.length > 0;

  const date = sanitizeSingleLine(record.date);
  if (!isRealCalendarDate(date)) {
    return { ok: false, code: 'INVALID_DATE' };
  }

  const todayIso = getRomeDateIso(0);
  const maxDateIso = getRomeDateIso(365);
  if (date < todayIso || date > maxDateIso) {
    return { ok: false, code: 'INVALID_DATE' };
  }

  const guests = sanitizeSingleLine(record.guests);
  if (!(GUEST_PRESETS as readonly string[]).includes(guests)) {
    return { ok: false, code: 'INVALID_GUESTS' };
  }

  const service = sanitizeSingleLine(record.service);
  if (service !== 'lunch' && service !== 'dinner') {
    return { ok: false, code: 'INVALID_TIME' };
  }

  const time = sanitizeSingleLine(record.time);
  const validSlots: readonly string[] = service === 'lunch' ? LUNCH_SLOTS : DINNER_SLOTS;

  if (isMonday(date) && (service === 'dinner' || !(LUNCH_SLOTS as readonly string[]).includes(time))) {
    return { ok: false, code: 'MONDAY_DINNER_CLOSED' };
  }

  if (!validSlots.includes(time)) {
    return { ok: false, code: 'INVALID_TIME' };
  }

  const name = sanitizeSingleLine(record.name);
  if (name.length < 2 || name.length > 100) {
    return { ok: false, code: 'INVALID_NAME' };
  }

  const phone = sanitizeSingleLine(record.phone);
  const phoneDigits = phone.replace(/\D/g, '');
  if (!phone || phone.length > 30 || phoneDigits.length < 8) {
    return { ok: false, code: 'INVALID_PHONE' };
  }

  const email = sanitizeSingleLine(record.email);
  if (email && (email.length > 254 || !EMAIL_REGEX.test(email))) {
    return { ok: false, code: 'INVALID_EMAIL' };
  }

  const rawOccasion = sanitizeSingleLine(record.occasion) || 'none';
  if (!(RESERVATION_OCCASIONS as readonly string[]).includes(rawOccasion)) {
    return { ok: false, code: 'INVALID_OCCASION' };
  }

  const notes = sanitizeMultiline(record.notes);
  if (notes.length > 1000) {
    return { ok: false, code: 'INVALID_NOTES' };
  }

  const locale: Locale = record.locale === 'en' ? 'en' : 'it';

  return {
    ok: true,
    isHoneypotTriggered,
    data: {
      date,
      guests: guests as GuestPreset,
      service,
      time,
      name,
      phone,
      email,
      occasion: rawOccasion as ReservationOccasion,
      notes,
      locale,
    },
  };
}
