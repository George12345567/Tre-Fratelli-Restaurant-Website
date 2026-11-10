import type { LocalizedText } from './types';

export const restaurantEditorial = {
  eyebrow: { it: 'Tre Fratelli · Trezzano sul Naviglio', en: 'Tre Fratelli · Trezzano sul Naviglio' },
  headline: { it: 'Il piacere di stare a tavola.', en: 'The pleasure of a shared table.' },
  introduction: {
    it: 'Una pizza appena sfornata, un piatto da condividere, una conversazione che continua. Ti aspettiamo a Trezzano sul Naviglio, con i sapori della cucina italiana e il piacere di accoglierti.',
    en: 'A pizza fresh from the oven, a dish to share, a conversation that carries on. Join us in Trezzano sul Naviglio for Italian cooking and a warm welcome.',
  },
  storyLabel: { it: 'Il nostro modo di accoglierti', en: 'A welcome, our way' },
  storyTitle: { it: 'Una cucina da vivere, insieme.', en: 'Good food. Even better company.' },
  storyCopy: {
    it: 'Ci piace una tavola dove ognuno trova qualcosa che ama: la pizza, un primo di mare, una grigliata da dividere. La nostra idea di ospitalità è semplice: farti sentire a tuo agio e lasciarti il tempo di goderti il pranzo o la serata.',
    en: 'We like a table where everyone finds something they love: pizza, seafood pasta, a grill to share. Our idea of hospitality is simple: make you feel at ease and give you time to enjoy your meal and your company.',
  },
  imageCaption: { it: 'Il gusto della condivisione.', en: 'Made for sharing.' },
  tableAlt: { it: 'Una tavola apparecchiata in un ambiente caldo e accogliente', en: 'A table set in a warm, welcoming dining space' },
  feastAlt: { it: 'Una selezione di piatti della cucina mediterranea', en: 'A selection of Mediterranean dishes' },
  kitchenLabel: { it: 'Dalla nostra cucina', en: 'From our kitchen' },
  kitchenTitle: { it: 'Segui il tuo appetito.', en: 'Follow your appetite.' },
  kitchenIntro: { it: 'Dal primo assaggio all’ultimo dolce, c’è sempre qualcosa da passarsi a tavola.', en: 'From the first bite to something sweet, there is always another dish to pass around.' },
  hospitalityLabel: { it: 'Il piacere di fermarsi', en: 'Make yourself at home' },
  hospitalityTitle: { it: 'C’è spazio per la tua occasione.', en: 'Room for your kind of occasion.' },
  hospitalityIntro: { it: 'Un pranzo in famiglia, un compleanno, una cena tra amici. Ecco qualche dettaglio utile per organizzare la tua visita.', en: 'A family lunch, a birthday, a dinner with friends. A few useful details to help you plan your visit.' },
  visitLabel: { it: 'Vieni a trovarci', en: 'Come over' },
  visitTitle: { it: 'Il prossimo posto a tavola è il tuo.', en: 'There is a place for you at the table.' },
  reserve: { it: 'Prenota un tavolo', en: 'Book a table' },
  menu: { it: 'Esplora il menù', en: 'Explore the menu' },
  storyNav: { it: 'Il ristorante', en: 'Our place' },
  kitchenNav: { it: 'La cucina', en: 'The kitchen' },
  visitNav: { it: 'La tua visita', en: 'Your visit' },
  directions: { it: 'Come arrivare', en: 'Get directions' },
  phoneLabel: { it: 'Parliamone al telefono', en: 'Give us a call' },
} satisfies Record<string, LocalizedText>;
