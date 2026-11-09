import type { LocalizedText } from './types';

// User-supplied Monday lunch-only hours, supported by the linked listing.
// Other directories disagree; holiday arrangements are confirmed directly.
export const restaurantSchedule = {
  sourceUrl: 'https://restaurantguru.it/Zime-Trezzano-sul-Naviglio',
  mondayNotice: {
    it: 'Lunedì aperti solo a pranzo, 12:00–15:00. Chiusi la sera. Per le festività, conferma gli orari con noi.',
    en: 'Monday: lunch only, 12:00–15:00. Closed in the evening. Please confirm holiday hours with us.',
    ar: 'الاثنين: غداء فقط من 12:00 إلى 15:00، ومغلق مساءً. مواعيد الأعياد تُؤكد بالتواصل معنا.',
  } satisfies LocalizedText,
};

export function isMonday(date: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return false;
  const [year, month, day] = date.split('-').map(Number);
  return new Date(Date.UTC(year, month - 1, day)).getUTCDay() === 1;
}
