import type { Locale } from '@/i18n/routing';

export const RESTAURANT_TIMEZONE = 'Europe/Rome';

export const GUEST_PRESETS = ['1', '2', '3', '4', '5', '6', '7', '8+'] as const;
export type GuestPreset = (typeof GUEST_PRESETS)[number];

export const LUNCH_SLOTS = [
  '12:00',
  '12:30',
  '13:00',
  '13:30',
  '14:00',
  '14:30',
] as const;

export const DINNER_SLOTS = [
  '18:30',
  '19:00',
  '19:30',
  '20:00',
  '20:30',
  '21:00',
  '21:30',
  '22:00',
  '22:30',
] as const;

export type ReservationService = 'lunch' | 'dinner';

export const RESERVATION_OCCASIONS = [
  'none',
  'proposal',
  'romantic',
  'anniversary',
  'birthday',
  'graduation',
  'family',
  'business',
] as const;

export type ReservationOccasion = (typeof RESERVATION_OCCASIONS)[number];

const OCCASION_LABELS: Record<ReservationOccasion, Record<Locale, string>> = {
  none: { it: 'Pranzo o Cena Ordinaria', en: 'Regular Dining' },
  proposal: { it: 'Proposta di Matrimonio', en: 'Marriage Proposal' },
  romantic: { it: 'Cena Romantica', en: 'Romantic Dinner' },
  anniversary: { it: 'Anniversario Romantico', en: 'Romantic Anniversary' },
  birthday: { it: 'Festa di Compleanno', en: 'Birthday Celebration' },
  graduation: { it: 'Festa di Laurea', en: 'Graduation Celebration' },
  family: { it: 'Riunione di Famiglia', en: 'Family Gathering' },
  business: { it: 'Pranzo o Cena di Lavoro', en: 'Business Lunch / Dinner' },
};

export function getOccasionLabel(occasion: ReservationOccasion, locale: Locale): string {
  return OCCASION_LABELS[occasion][locale];
}

export function format12h(time24: string): string {
  const [hStr, mStr] = time24.split(':');
  const h = Number.parseInt(hStr, 10);
  if (Number.isNaN(h) || !mStr) return time24;
  const period = h >= 12 ? 'PM' : 'AM';
  const h12 = h % 12 || 12;
  return `${h12}:${mStr} ${period}`;
}

export function getRomeDateIso(offsetDays = 0): string {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: RESTAURANT_TIMEZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(new Date());

  const year = Number(parts.find((part) => part.type === 'year')?.value);
  const month = Number(parts.find((part) => part.type === 'month')?.value);
  const day = Number(parts.find((part) => part.type === 'day')?.value);

  const utcDate = new Date(Date.UTC(year, month - 1, day + offsetDays));
  const y = utcDate.getUTCFullYear();
  const m = String(utcDate.getUTCMonth() + 1).padStart(2, '0');
  const d = String(utcDate.getUTCDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export function formatReservationDate(dateIso: string, locale: Locale): string {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateIso)) return dateIso;
  const [year, month, day] = dateIso.split('-').map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  return new Intl.DateTimeFormat(locale === 'it' ? 'it-IT' : 'en-GB', {
    timeZone: 'UTC',
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  }).format(date);
}
