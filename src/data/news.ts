import type { NewsPost } from './types';

export const newsData: NewsPost[] = [
  {
    id: 'event-karaoke',
    type: 'music',
    featured: true,
    date: '2026-10-30',
    scheduleBadge: {
      it: 'Ogni Fine Settimana · Date & Artisti in arrivo',
      en: 'Every Weekend · Specific Dates Coming Soon',
    },
    badge: {
      it: 'Grande Festa',
      en: 'Festive Night',
    },
    category: {
      it: 'Musica & Karaoke',
      en: 'Music & Karaoke',
    },
    title: {
      it: 'Serata Karaoke & Musica dal Vivo: La Grande Festa di Tre Fratelli',
      en: 'Live Music & Karaoke Night: The Big Tre Fratelli Celebration',
    },
    excerpt: {
      it: 'Canta i grandi classici italiani e internazionali tra pizze fumanti a legna, drink e allegria travolgente. Un appuntamento imperdibile per festeggiare in compagnia a Trezzano sul Naviglio.',
      en: 'Sing timeless Italian and international anthems amidst smoking wood-fired pizzas, craft drinks, and infectious cheer. Trezzano sul Naviglio’s ultimate festive dinner.',
    },
    highlights: [
      {
        it: 'Impianto audio e microfoni professionali per tutti',
        en: 'Pro sound system and wireless microphones for all guests',
      },
      {
        it: 'Grandi classici italiani, Sanremo e hit internazionali',
        en: 'Sanremo hits, Italian classics & global crowd-pleasers',
      },
      {
        it: 'Pizze al forno a legna, piatti abbondanti e cocktail',
        en: 'Wood-fired pizzas, generous platters and craft drinks',
      },
      {
        it: 'Parcheggio privato gratuito riservato sul posto',
        en: 'Spacious on-site private parking completely free',
      },
    ],
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'event-acoustic',
    type: 'music',
    date: '2026-11-06',
    scheduleBadge: {
      it: 'Serate Intime · Programmazione in corso',
      en: 'Intimate Evenings · Schedule in progress',
    },
    badge: {
      it: 'Al Lume di Candela',
      en: 'Candlelight',
    },
    category: {
      it: 'Musica dal Vivo',
      en: 'Live Music',
    },
    title: {
      it: 'Note Italiane: Serate di Jazz Acustico & Chitarra',
      en: 'Italian Notes: Acoustic Jazz & Candlelight Dining Evenings',
    },
    excerpt: {
      it: 'Il fascino del lume di candela e le note delicate della musica acustica italiana accompagnano cene romantiche e momenti speciali nella nostra sala accogliente.',
      en: 'Candlelight romance and gentle acoustic melodies accompany intimate dinners and fine wine pairings in our warm dining ambiance.',
    },
    highlights: [
      {
        it: 'Chitarra acustica e jazz d autore dal vivo',
        en: 'Live acoustic guitar & Italian jazz standards',
      },
      {
        it: 'Abbinamento con vini selezionati dalla nostra cantina',
        en: 'Curated wine pairings from our cellar',
      },
    ],
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'event-pasta-masterclass',
    type: 'masterclass',
    date: '2026-11-14',
    scheduleBadge: {
      it: 'Posti Limitati · Calendario in aggiornamento',
      en: 'Limited Seats · Calendar updating soon',
    },
    badge: {
      it: 'Laboratorio Pratico',
      en: 'Hands-on Workshop',
    },
    category: {
      it: 'Masterclass di Cucina',
      en: 'Cooking Masterclass',
    },
    title: {
      it: 'L Arte della Pasta Tirata a Mano al Bronzo con Chef Marco',
      en: 'Handmade Bronze-Extruded Pasta Masterclass with Chef Marco',
    },
    excerpt: {
      it: 'Impara i segreti dell impasto all uovo sulla spianatoia in legno, la stesura a matterello e la trafilatura al bronzo, seguita da una degustazione conviviale di tutti i piatti creati.',
      en: 'Learn the secrets of golden egg pasta dough rolled on the wooden board, followed by a celebratory communal dinner enjoying the fresh pasta creations.',
    },
    highlights: [
      {
        it: 'Postazione singola completa e ricettario dei fratelli',
        en: 'Individual work station, apron and secret brothers recipe booklet',
      },
      {
        it: 'Cena degustazione finale con calice di vino incluso',
        en: 'Full tasting dinner with paired wine glass included',
      },
    ],
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'event-pizza-masterclass',
    type: 'masterclass',
    date: '2026-11-21',
    scheduleBadge: {
      it: 'Esperienza Pratica · Calendario in definizione',
      en: 'Practical Experience · Dates being finalized',
    },
    badge: {
      it: 'Forno a Legna',
      en: 'Wood-Fired Hearth',
    },
    category: {
      it: 'Forno & Pizzeria',
      en: 'Pizza Craft',
    },
    title: {
      it: 'Pizzaiolo per un Giorno: Impasto a 48 Ore & Forno a Legna con Matteo',
      en: 'Pizzaiolo for a Day: 48-Hour Cold Dough & Wood Fire with Matteo',
    },
    excerpt: {
      it: 'Scopri come gestire il lievito madre naturale, la maturazione a freddo, la stesura a mano e la cottura nel forno a legna a oltre 400°C. Inforna e gusta la tua pizza.',
      en: 'Master natural sourdough starter, 48-hour cold fermentation, hand stretching, and baking inside our 400°C wood-fired oven.',
    },
    highlights: [
      {
        it: 'Tecniche di lievitazione naturale e idratazione avanzata',
        en: 'Natural sourdough culture & high hydration techniques',
      },
      {
        it: 'Cottura diretta nel forno a legna di Trezzano',
        en: 'Direct baking in our authentic wood oven',
      },
    ],
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'event-truffle',
    type: 'tasting',
    date: '2026-11-28',
    scheduleBadge: {
      it: 'Serata Esclusiva · Date autunnali in arrivo',
      en: 'Exclusive Evening · Autumn dates coming soon',
    },
    badge: {
      it: 'Prestigio Gourmet',
      en: 'Gourmet Prestige',
    },
    category: {
      it: 'Menu Stagionale',
      en: 'Seasonal Tasting',
    },
    title: {
      it: 'La Settimana del Tartufo Bianco d Alba & I Grandi Barolo',
      en: 'Alba White Truffle Week & Historic Barolo Pairings',
    },
    excerpt: {
      it: 'Un percorso degustazione in cinque portate dedicato al pregiato tartufo bianco piemontese lamellato al momento, con grandi etichette selezionate da Luca.',
      en: 'A five-course tasting journey honoring Piedmont s prized white truffle shaved tableside, paired with prestigious vintages of Barolo and Nebbiolo.',
    },
    highlights: [
      {
        it: '5 portate gourmet con tartufo bianco fresco lamellato al tavolo',
        en: '5 gourmet courses with fresh white truffle shaved tableside',
      },
      {
        it: 'Abbinamento con prestigiose riserve piemontesi',
        en: 'Paired with renowned Piedmont reserve vintages',
      },
    ],
    image: 'https://images.unsplash.com/photo-1414235077428-33898f82204c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'event-tuscan',
    type: 'tasting',
    date: '2026-12-05',
    scheduleBadge: {
      it: 'Su Prenotazione · Dettagli in arrivo',
      en: 'By Reservation · Details coming soon',
    },
    badge: {
      it: 'Brace & Riserve',
      en: 'Charcoal & Reserves',
    },
    category: {
      it: 'Degustazione & Cantina',
      en: 'Wine & Cellar',
    },
    title: {
      it: 'Grandi Rossi di Toscana & Tagli Scelti di Chianina alla Brace',
      en: 'The Great Tuscan Reserves & Oak-Embers Grilled Chianina Cuts',
    },
    excerpt: {
      it: 'Una serata esclusiva per scoprire le migliori annate di Brunello di Montalcino e Chianti Classico abbinate alla nostra Chianina cotta sul carbone di legna.',
      en: 'An intimate evening discovering premier vintages of Brunello di Montalcino and Chianti Classico paired with our oak-charcoal grilled prime cuts.',
    },
    highlights: [
      {
        it: 'Tagli fiorentina e costata di razza Chianina certificata',
        en: 'Certified Chianina T-bone steaks and prime ribs on open embers',
      },
      {
        it: 'Degustazione guidata con verticali di Brunello e Chianti',
        en: 'Guided tasting with historic Tuscan vintages',
      },
    ],
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'event-paella',
    type: 'seasonal',
    date: '2026-12-12',
    scheduleBadge: {
      it: 'Menu Speciale · Date in programmazione',
      en: 'Special Menu · Schedule coming soon',
    },
    badge: {
      it: 'Festa di Mare',
      en: 'Seafood Fiesta',
    },
    category: {
      it: 'Specialità della Casa',
      en: 'House Specialty',
    },
    title: {
      it: 'Gran Paella di Frutti di Mare & Fritto Misto Mediterraneo',
      en: 'Grand Seafood Paella & Crispy Mediterranean Fritto Misto Feast',
    },
    excerpt: {
      it: 'Padelloni giganti di Paella tradizionale con gamberi rossi, cozze, calamari e zafferano profumato, anticipati da abbondanti fritture dorate per la tavola.',
      en: 'Huge pans of authentic seafood paella packed with Mediterranean prawns, mussels, squid and saffron, paired with crisp golden fritto misto.',
    },
    highlights: [
      {
        it: 'Porzioni abbondanti perfette per la condivisione in tavola',
        en: 'Abundant festive platters crafted for joyful sharing',
      },
      {
        it: 'Pescato fresco del Mediterraneo cucinato espresso',
        en: 'Fresh daily Mediterranean catch prepared to order',
      },
    ],
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'event-celebration',
    type: 'celebration',
    date: '2026-12-19',
    scheduleBadge: {
      it: 'Disponibile su Richiesta · Tutto l Anno',
      en: 'Available on Request · Year-Round',
    },
    badge: {
      it: 'Per Gruppi & Feste',
      en: 'Groups & Parties',
    },
    category: {
      it: 'Feste Private & Eventi',
      en: 'Private Events',
    },
    title: {
      it: 'Festeggia con Noi: Compleanni, Lauree e Cene Aziendali con Karaoke',
      en: 'Celebrate With Us: Birthdays, Graduations & Group Feasts with Karaoke',
    },
    excerpt: {
      it: 'Sale spaziose, menu concordati a prezzo vantaggioso (10–20 €), torta artigianale su richiesta e opzione intrattenimento con karaoke per festeggiare alla grande.',
      en: 'Spacious halls accommodating large gatherings, customized fixed-price menus (€10–€20), homemade celebration cakes, and karaoke options.',
    },
    highlights: [
      {
        it: 'Capienza per tavolate numerose e sale riservabili',
        en: 'Capacity for large parties and reservable dining areas',
      },
      {
        it: 'Ottimo rapporto qualità-prezzo da 10 a 20 euro a persona',
        en: 'Unbeatable value from €10 to €20 per person',
      },
    ],
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=800',
  },
];
