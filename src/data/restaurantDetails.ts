import type { LocalizedText } from './types';

export interface CulinaryPillar {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  badge: LocalizedText;
  iconName: 'Flame' | 'Fish' | 'Sparkles' | 'Cake';
}

export interface AmenityPillar {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  tag: LocalizedText;
  iconName: 'Car' | 'Accessibility' | 'Users' | 'Mic' | 'Coins';
}

export const restaurantOfficialInfo = {
  phone: '+393917692836',
  phoneDisplay: '+39 391 769 2836',
  address: 'Viale Leonardo da Vinci, 97, 20090 Trezzano sul Naviglio (MI), Italia',
  cityRegion: {
    it: 'Trezzano sul Naviglio (Milano), Lombardia',
    en: 'Trezzano sul Naviglio (Milan Metro), Lombardy',
  } as LocalizedText,
  plusCode: 'C3C6+PH Trezzano sul Naviglio',
  googleMapsUrl: 'https://maps.app.goo.gl/y3JwycapRcKYWivF9',
  averagePrice: '10–20 €',
};

export const sectionOneContent = {
  subtitle: {
    it: 'TREZZANO SUL NAVIGLIO (MILANO) • TRADIZIONE MEDITERRANEA',
    en: 'TREZZANO SUL NAVIGLIO (MILAN) • MEDITERRANEAN HERITAGE',
  } as LocalizedText,
  headline: {
    it: 'Tre Fratelli',
    en: 'Tre Fratelli',
  } as LocalizedText,
  tagline: {
    it: 'Passione di famiglia, il profumo del forno a legna e il calore della vera tavola italiana.',
    en: 'Family devotion, the aroma of the wood-fired hearth, and true Italian dining warmth.',
  } as LocalizedText,
  storyLead: {
    it: 'Tre Fratelli nasce dal legame indissolubile di tre fratelli cresciuti tra il profumo del ragù cotto a fuoco lento e del pane caldo nel Sud Italia. Oggi portiamo a Trezzano sul Naviglio la stessa dedizione autentica: farine macinate a pietra, lievitazioni pazienti e l’abbraccio sincero dell’ospitalità italiana.',
    en: 'Tre Fratelli was born from the bond of three brothers raised amidst the comforting aromas of slow-simmered sauces and warm baked bread in southern Italy. Today, we bring to Trezzano sul Naviglio (Milan) that exact heartfelt devotion: stone-ground flours, unhurried fermentation, and genuine Italian warmth.',
  } as LocalizedText,
  storyHearth: {
    it: 'Al centro del nostro ristorante arde il forno a legna tradizionale, cuore pulsante della nostra pizzeria, mentre la cucina celebra ogni giorno il pescato fresco del Mediterraneo, paste tradizionali abbondanti, la nostra amata paella e tagli scelti cotti alla brace.',
    en: 'At the heart of our restaurant burns the traditional beechwood oven, the beating hearth of our pizzeria, while our kitchen honors fresh Mediterranean seafood, abundant classic pasta, our beloved paella, and embers-grilled prime meats.',
  } as LocalizedText,
};

export const sectionTwoContent = {
  kicker: {
    it: 'ESPERIENZA & OSPITALITÀ',
    en: 'EXPERIENCE & HOSPITALITY',
  } as LocalizedText,
  headline: {
    it: 'Sapori Generosi, Grandi Spazi & Serate di Festa',
    en: 'Generous Flavors, Spacious Rooms & Festive Evenings',
  } as LocalizedText,
  subhead: {
    it: 'Dalle porzioni abbondanti all’ottimo rapporto qualità-prezzo (10–20 € a persona), sale ampie con 400 posti a sedere, parcheggio privato riservato sul posto e serata Karaoke ogni sabato sera.',
    en: 'From generous, hearty portions to exceptional value (€10–€20 per person), featuring spacious halls with 400 seats, on-site dedicated private parking, and a Karaoke party every Saturday night.',
  } as LocalizedText,
  bookingAdvisory: {
    it: 'Consiglio per gli ospiti: Nei fine settimana o in caso di grandi tavolate, si raccomanda la prenotazione anticipata telefonica o online.',
    en: 'Guest Recommendation: For weekends or larger group gatherings, advance booking by phone or online is warmly recommended.',
  } as LocalizedText,
};

export const culinarySpecialties: CulinaryPillar[] = [
  {
    id: 'spec-pizza',
    title: {
      it: 'Pizza al Forno a Legna',
      en: 'Pizza from the Wood-Fired Oven',
    },
    description: {
      it: 'Il profumo del forno, il bordo dorato, gli ingredienti che preferisci. Dalla Margherita alle pizze più ricche, scegli quella che ti va stasera.',
      en: 'The scent of the oven, a golden crust, your favourite toppings. From a Margherita to something more generous, choose what you feel like tonight.',
    },
    badge: {
      it: 'Forno a Legna',
      en: 'Wood-Fired',
    },
    iconName: 'Flame',
  },
  {
    id: 'spec-seafood',
    title: {
      it: 'Il Mare a Tavola',
      en: 'A Taste of the Sea',
    },
    description: {
      it: 'Un primo ai frutti di mare, una frittura da passarsi, una grigliata al centro del tavolo. Il mare si gusta ancora meglio in compagnia.',
      en: 'Seafood pasta, a plate of crisp fritto to pass around, a mixed grill in the middle of the table. Some flavours are even better shared.',
    },
    badge: {
      it: 'Porzioni Generose',
      en: 'Generous Portions',
    },
    iconName: 'Fish',
  },
  {
    id: 'spec-paella',
    title: {
      it: 'Paella & Brace, da Condividere',
      en: 'Paella & Grills to Share',
    },
    description: {
      it: 'La paella porta colore e profumo alla tavola; la brace aggiunge il suo carattere. Piatti per chi ama assaggiare e dividere qualcosa di buono.',
      en: 'Paella brings colour and aroma to the table; the grill adds its own character. Dishes for those who like to try a little and share a little.',
    },
    badge: {
      it: 'Piatto di Festa',
      en: 'Celebration Dish',
    },
    iconName: 'Sparkles',
  },
  {
    id: 'spec-dolci',
    title: {
      it: 'Per Finire, Qualcosa di Dolce',
      en: 'Something Sweet to Finish',
    },
    description: {
      it: 'Uno sguardo alla carta dei dolci, magari due cucchiaini. La nostra selezione Bindi è un buon motivo per fermarsi ancora un po’.',
      en: 'A look at the dessert menu, perhaps two spoons. Our Bindi selection is a good reason to linger a little longer.',
    },
    badge: {
      it: 'Selezione Bindi',
      en: 'Bindi Selection',
    },
    iconName: 'Cake',
  },
];

export const hospitalityAmenities: AmenityPillar[] = [
  {
    id: 'amenity-parking',
    title: {
      it: 'Parcheggio Privato Riservato',
      en: 'Dedicated Private Parking',
    },
    description: {
      it: 'Ampio parcheggio privato disponibile gratuitamente direttamente sul posto per una sosta comoda e sicura.',
      en: 'Spacious on-site private parking free for our dining guests, ensuring effortless arrival.',
    },
    tag: {
      it: 'In loco & Gratuito',
      en: 'On-site & Free',
    },
    iconName: 'Car',
  },
  {
    id: 'amenity-access',
    title: {
      it: 'Accessibile in Sedia a Rotelle',
      en: 'Wheelchair Accessible',
    },
    description: {
      it: 'Ingresso agevole senza barriere architettoniche e spazi comodi per ospiti con mobilità ridotta.',
      en: 'Step-free entrance and spacious pathways comfortably accommodating guests with mobility needs.',
    },
    tag: {
      it: 'Senza barriere',
      en: 'Step-free access',
    },
    iconName: 'Accessibility',
  },
  {
    id: 'amenity-groups',
    title: {
      it: 'Sale Spaziose · 400 Posti a Sedere',
      en: 'Spacious Halls · 400 Seats',
    },
    description: {
      it: 'Ambienti ampi fino a 400 posti a sedere, perfetti per accogliere famiglie, tavolate numerose, compleanni e celebrazioni in allegria.',
      en: 'Large dining halls with 400 seats, configured for family dinners, birthdays, and lively group celebrations.',
    },
    tag: {
      it: '400 posti · Grandi tavolate',
      en: '400 seats · Group seating',
    },
    iconName: 'Users',
  },
  {
    id: 'amenity-music',
    title: {
      it: 'Ogni Sabato Sera: Festa Karaoke & Musica',
      en: 'Every Saturday Night: Karaoke & Music Party',
    },
    description: {
      it: 'Ogni sabato sera il ristorante si anima con la nostra serata Karaoke e musica per cantare, cenare e festeggiare insieme.',
      en: 'Every Saturday night we host a lively Karaoke and music party for guests who love to sing, dine, and celebrate together.',
    },
    tag: {
      it: 'Ogni sabato sera',
      en: 'Every Saturday night',
    },
    iconName: 'Mic',
  },
  {
    id: 'amenity-value',
    title: {
      it: '10–20 € • Ottimo Valore & Carta',
      en: '€10–€20 • Outstanding Value',
    },
    description: {
      it: 'Media 10–20 € a persona con porzioni abbondanti, pagamenti con carta di credito e servizio al tavolo attento.',
      en: 'Average €10–€20 per person with generous food, credit card payments accepted, and dedicated table service.',
    },
    tag: {
      it: 'Ottimo rapporto Q/P',
      en: 'Fair & Generous',
    },
    iconName: 'Coins',
  },
];
