import type { LocalizedText } from './types';

export const eventsEditorial = {
  eyebrow: { it: 'Tre Fratelli · Musica & momenti insieme', en: 'Tre Fratelli · Music & good company' },
  title: { it: 'Le serate belle si fanno insieme.', en: 'Good nights are better together.' },
  intro: { it: 'Il sabato si canta, ci si ritrova a tavola e si festeggia. E nelle grandi feste italiane, c’è un motivo in più per stare insieme.', en: 'Saturday brings karaoke, dinner and a reason to get together. Italy’s favourite holidays give us even more occasions to celebrate.' },
  all: { it: 'Tutti i momenti', en: 'All occasions' },
  music: { it: 'Musica & sabato sera', en: 'Music & Saturday nights' },
  seasonal: { it: 'Feste italiane', en: 'Italian holidays' },
  celebration: { it: 'Le vostre occasioni', en: 'Your celebrations' },
  programme: { it: 'Scegli il tuo prossimo momento.', en: 'Find your next reason to get together.' },
  notice: { it: 'Date, orari, menù e disponibilità si confermano con il ristorante. Qui trovi le nostre occasioni ricorrenti, non un calendario di prenotazioni confermate.', en: 'Confirm dates, times, menus and availability with the restaurant. These are our recurring occasions, rather than a calendar of confirmed bookings.' },
  reserve: { it: 'Organizziamo la tua serata', en: 'Plan your evening with us' },
  call: { it: 'Chiedi il programma', en: 'Ask about the programme' },
  contactKicker: { it: 'Le vostre occasioni, insieme a noi', en: 'Your occasion, shared with us' },
  contactTitle: { it: 'La prossima bella serata? Organizziamola insieme.', en: 'Let’s make an evening of it.' },
  contactCopy: { it: 'Una cena tra amici o una festa da ricordare: raccontaci la tua idea. Scegliamo insieme il giorno, il menù e i dettagli della serata.', en: 'Dinner with friends or a celebration to remember: tell us what you have in mind. We will plan the date, menu and details together.' },
} satisfies Record<string, LocalizedText>;

// Recurring occasions supplied by the restaurant; no invented dates or packages.
export const recurringEvents: {
  id: string;
  type: 'music' | 'seasonal' | 'celebration';
  title: LocalizedText;
  copy: LocalizedText;
  schedule: LocalizedText;
}[] = [
  {
    id: 'saturday', type: 'music',
    title: { it: 'Ogni sabato sera: Serata Karaoke.', en: 'Every Saturday night: Karaoke party.' },
    copy: { it: 'Ogni sabato sera cena, musica e karaoke: scegli la tua canzone, porta gli amici e goditi la serata nei nostri ampi spazi con 400 posti e parcheggio privato.', en: 'Every Saturday night brings dinner, music and karaoke: choose a song, bring your friends and enjoy the evening in our spacious 400-seat dining hall with private parking.' },
    schedule: { it: 'Ogni sabato sera · Prenotazione consigliata', en: 'Every Saturday evening · Booking recommended' },
  },
  {
    id: 'holidays', type: 'seasonal',
    title: { it: 'Le feste italiane, a tavola con noi.', en: 'Italian holidays, around our table.' },
    copy: { it: 'Natale, Capodanno, Pasqua, Ferragosto e le altre ricorrenze più amate: organizziamo momenti di festa per ritrovarci. Il programma e le proposte di ogni occasione si confermano di volta in volta.', en: 'Christmas, New Year, Easter, Ferragosto and other favourite occasions: we celebrate with good food and good company. Each holiday’s programme and menu are confirmed separately.' },
    schedule: { it: 'Durante le festività · Dettagli su richiesta', en: 'Holiday celebrations · Ask for details' },
  },
  {
    id: 'private', type: 'celebration',
    title: { it: 'La vostra festa, il vostro ritmo.', en: 'Your celebration, your kind of evening.' },
    copy: { it: 'Compleanni, lauree, ricorrenze e cene tra colleghi. Raccontaci quante persone siete e come immagini la serata: concordiamo insieme menù, spazi e possibilità di intrattenimento.', en: 'Birthdays, graduations, anniversaries and dinners with colleagues. Tell us your group size and what you have in mind; we will discuss menus, seating and entertainment options together.' },
    schedule: { it: 'Su prenotazione · Da organizzare insieme', en: 'By arrangement · Let’s plan together' },
  },
];
