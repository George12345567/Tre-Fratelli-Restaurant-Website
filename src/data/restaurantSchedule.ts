import type { LocalizedText } from './types';

export interface ScheduleRow {
  id: string;
  days: LocalizedText;
  shifts: {
    label: LocalizedText;
    time?: string;
    isClosed?: boolean;
    highlight?: boolean;
  }[];
}

export const restaurantSchedule = {
  mondayNotice: {
    it: 'Lunedì aperti solo a pranzo, 12:00–15:00. Chiusi la sera. Per le festività, conferma gli orari con noi.',
    en: 'Monday: lunch only, 12:00–15:00. Closed in the evening. Please confirm holiday hours with us.',
  } satisfies LocalizedText,
  rows: [
    {
      id: 'tue-sat',
      days: {
        it: 'Martedì – Sabato',
        en: 'Tuesday – Saturday',
      },
      shifts: [
        {
          label: { it: 'Pranzo', en: 'Lunch' },
          time: '12:00 – 15:00',
        },
        {
          label: { it: 'Cena', en: 'Dinner' },
          time: '18:30 – 00:00',
        },
      ],
    },
    {
      id: 'sun',
      days: {
        it: 'Domenica',
        en: 'Sunday',
      },
      shifts: [
        {
          label: {
            it: 'Orario continuato',
            en: 'Open all day',
          },
          time: '12:00 – 00:00',
          highlight: true,
        },
      ],
    },
    {
      id: 'mon',
      days: {
        it: 'Lunedì',
        en: 'Monday',
      },
      shifts: [
        {
          label: { it: 'Solo pranzo', en: 'Lunch only' },
          time: '12:00 – 15:00',
        },
        {
          label: { it: 'Sera chiuso', en: 'Evening closed' },
          isClosed: true,
        },
      ],
    },
  ] as ScheduleRow[],
};

export function isMonday(date: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return false;
  const [year, month, day] = date.split('-').map(Number);
  return new Date(Date.UTC(year, month - 1, day)).getUTCDay() === 1;
}
