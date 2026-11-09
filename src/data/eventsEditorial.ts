import type { LocalizedText } from './types';

export const eventsEditorial = {
  eyebrow: { it: 'Tre Fratelli · Musica & momenti insieme', en: 'Tre Fratelli · Music & good company', ar: 'تري فراتيلي · موسيقى ولمة حلوة' },
  title: { it: 'Le serate belle si fanno insieme.', en: 'Good nights are better together.', ar: 'السهرات تحلى بوجودكم.' },
  intro: { it: 'Il sabato si canta, ci si ritrova a tavola e si festeggia. E nelle grandi feste italiane, c’è un motivo in più per stare insieme.', en: 'Saturday brings karaoke, dinner and a reason to get together. Italy’s favourite holidays give us even more occasions to celebrate.', ar: 'يوم السبت نغني ونتعشى ونحتفل معاً. ومع الأعياد المعروفة في إيطاليا، نجد دائماً مناسبة جديدة للمة والفرح.' },
  all: { it: 'Tutti i momenti', en: 'All occasions', ar: 'كل المناسبات' },
  music: { it: 'Musica & sabato sera', en: 'Music & Saturday nights', ar: 'الموسيقى وسهرات السبت' },
  seasonal: { it: 'Feste italiane', en: 'Italian holidays', ar: 'الأعياد في إيطاليا' },
  celebration: { it: 'Le vostre occasioni', en: 'Your celebrations', ar: 'مناسباتكم الخاصة' },
  programme: { it: 'Scegli il tuo prossimo momento.', en: 'Find your next reason to get together.', ar: 'اختاروا مناسبتكم القادمة.' },
  notice: { it: 'Date, orari, menù e disponibilità si confermano con il ristorante. Qui trovi le nostre occasioni ricorrenti, non un calendario di prenotazioni confermate.', en: 'Confirm dates, times, menus and availability with the restaurant. These are our recurring occasions, rather than a calendar of confirmed bookings.', ar: 'هذه مناسباتنا المتكررة؛ لتأكيد موعد كل حفلة ووقتها والقائمة والأماكن المتاحة، تواصلوا معنا قبل الحجز.' },
  reserve: { it: 'Organizziamo la tua serata', en: 'Plan your evening with us', ar: 'رتّبوا سهرتكم معنا' },
  call: { it: 'Chiedi il programma', en: 'Ask about the programme', ar: 'اسألوا عن برنامج الحفلات' },
  contactKicker: { it: 'Le vostre occasioni, insieme a noi', en: 'Your occasion, shared with us', ar: 'لمناسباتكم ولمّتكم' },
  contactTitle: { it: 'La prossima bella serata? Organizziamola insieme.', en: 'Let’s make an evening of it.', ar: 'خلّونا نرتّب سهرة على ذوقكم.' },
  contactCopy: { it: 'Una cena tra amici o una festa da ricordare: raccontaci la tua idea. Scegliamo insieme il giorno, il menù e i dettagli della serata.', en: 'Dinner with friends or a celebration to remember: tell us what you have in mind. We will plan the date, menu and details together.', ar: 'عشاء مع الأصدقاء أو حفلة لمناسبة غالية؟ احكوا لنا فكرتكم، ونرتّب معاً اليوم والقائمة وتفاصيل السهرة.' },
  heroAlt: { it: 'Atmosfera di festa con amici che cantano al karaoke', en: 'Friends singing karaoke at a festive restaurant evening', ar: 'أجواء احتفالية وأصدقاء يغنون الكاراوكي في سهرة بالمطعم' },
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
    title: { it: 'Il sabato ha un’altra voce.', en: 'Saturday has a soundtrack.', ar: 'السبت له صوت مختلف.' },
    copy: { it: 'Cena, musica e karaoke: scegli la tua canzone, porta gli amici e goditi la serata. Chiamaci per conoscere il programma del prossimo sabato.', en: 'Dinner, music and karaoke: choose a song, bring your friends and settle in for the evening. Call us for next Saturday’s programme.', ar: 'عشاء وموسيقى وكاراوكي: اختاروا أغنيتكم، واجمعوا أصحابكم، واستمتعوا بالسهرة. اتصلوا بنا لمعرفة برنامج السبت القادم.' },
    schedule: { it: 'Sabato sera · Programma da confermare', en: 'Saturday evenings · Confirm the programme', ar: 'مساء السبت · البرنامج بالتواصل معنا' },
  },
  {
    id: 'holidays', type: 'seasonal',
    title: { it: 'Le feste italiane, a tavola con noi.', en: 'Italian holidays, around our table.', ar: 'أعياد إيطاليا، على مائدتنا.' },
    copy: { it: 'Natale, Capodanno, Pasqua, Ferragosto e le altre ricorrenze più amate: organizziamo momenti di festa per ritrovarci. Il programma e le proposte di ogni occasione si confermano di volta in volta.', en: 'Christmas, New Year, Easter, Ferragosto and other favourite occasions: we celebrate with good food and good company. Each holiday’s programme and menu are confirmed separately.', ar: 'الكريسماس ورأس السنة وعيد الفصح وفيراغوستو وغيرها من المناسبات المعروفة: نحتفل بأكل نحبه وصحبة حلوة. برنامج كل مناسبة وقائمتها يتأكدان على حدة.' },
    schedule: { it: 'Durante le festività · Dettagli su richiesta', en: 'Holiday celebrations · Ask for details', ar: 'في الأعياد والمناسبات · التفاصيل بالاستفسار' },
  },
  {
    id: 'private', type: 'celebration',
    title: { it: 'La vostra festa, il vostro ritmo.', en: 'Your celebration, your kind of evening.', ar: 'حفلتكم، على ذوقكم.' },
    copy: { it: 'Compleanni, lauree, ricorrenze e cene tra colleghi. Raccontaci quante persone siete e come immagini la serata: concordiamo insieme menù, spazi e possibilità di intrattenimento.', en: 'Birthdays, graduations, anniversaries and dinners with colleagues. Tell us your group size and what you have in mind; we will discuss menus, seating and entertainment options together.', ar: 'أعياد ميلاد وتخرج وذكريات سنوية وعشاء مع الزملاء. أخبرونا بعدد الضيوف وشكل السهرة التي تتمنونها، ونرتب معاً القائمة والجلسات وخيارات الترفيه.' },
    schedule: { it: 'Su prenotazione · Da organizzare insieme', en: 'By arrangement · Let’s plan together', ar: 'بالحجز المسبق · نرتبها معاً' },
  },
];
