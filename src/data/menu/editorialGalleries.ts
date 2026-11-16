export interface EditorialPhoto {
  src: string;
  caption: {
    it: string;
    en: string;
  };
}

const seafoodStartersGallery: EditorialPhoto[] = [
  {
    src: '/images/dishes/raw-seafood/crudo-di-mare-misto.webp',
    caption: {
      it: 'Gran Crudo di Mare Misto con Scampi & Gamberi Rossi',
      en: 'Grand Mixed Raw Seafood Platter with Langoustines & Red Prawns',
    },
  },
  {
    src: '/images/dishes/raw-seafood/plateau-ostriche-fine-de-claire.webp',
    caption: {
      it: 'Plateau di Ostriche Fine de Claire su Ghiaccio',
      en: 'Plateau of Fine de Claire Oysters on Shaved Ice',
    },
  },
  {
    src: '/images/dishes/raw-seafood/gran-plateau-reale-mare.webp',
    caption: {
      it: 'Gran Plateau Reale dei Tre Fratelli con Frutti di Mare',
      en: 'Tre Fratelli Royal Seafood Plateau on Ice',
    },
  },
];

export const subsectionEditorialGalleries: Record<string, EditorialPhoto[]> = {
  // ── Antipasti di Terra ──
  'anti-terra': [
    {
      src: '/images/dishes/antipasti/tagliere-salumi-parma.webp',
      caption: {
        it: 'Gran Tagliere di Salumi Nostrani con Gnocco Fritto',
        en: 'Artisanal Italian Cured Meats Platter with Warm Gnocco Fritto',
      },
    },
    {
      src: '/images/dishes/antipasti/tagliere-formaggi-burrata.webp',
      caption: {
        it: 'Burrata Pugliese Fresca & Formaggi Selezionati',
        en: 'Fresh Pugliese Burrata & Selected Artisanal Cheeses',
      },
    },
    {
      src: '/images/dishes/antipasti/bruschette-tradizionali-pomodoro.webp',
      caption: {
        it: 'Bruschette Tradizionali al Pomodoro San Marzano & Basilico',
        en: 'Traditional San Marzano Tomato & Fresh Basil Bruschette',
      },
    },
  ],

  // ── Antipasti di Mare & Crudité ──
  'anti-mare': seafoodStartersGallery,
  'raw-crudite': seafoodStartersGallery,

  // ── Primi di Mare ──
  'primi-mare': [
    {
      src: '/images/dishes/primi-piatti/paccheri-artigianali-frutti-mare.webp',
      caption: {
        it: 'Paccheri Artigianali ai Frutti di Mare Freschi',
        en: 'Artisanal Paccheri with Fresh Mediterranean Shellfish',
      },
    },
    {
      src: '/images/dishes/primi-piatti/spaghetti-chitarra-allo-scoglio.webp',
      caption: {
        it: 'Spaghetti alla Chitarra allo Scoglio Tradizionale',
        en: 'Chitarra Spaghetti with Coastal Shellfish & Calamari',
      },
    },
    {
      src: '/images/dishes/primi-piatti/calamarata-astice-mediterraneo.webp',
      caption: {
        it: 'Calamarata all’Astice del Mediterraneo & Datterini',
        en: 'Calamarata Pasta with Whole Lobster & Sweet Datterini',
      },
    },
  ],

  // ── Carni Pregiate ──
  'sec-terra': [
    {
      src: '/images/dishes/secondi-piatti/bistecca-fiorentina-chianina.webp',
      caption: {
        it: 'Bistecca alla Fiorentina di Chianina alla Brace di Quercia',
        en: 'Tuscan Chianina Fiorentina T-Bone on Oak Embers',
      },
    },
    {
      src: '/images/dishes/secondi-piatti/grigliata-carni-nobili-sfrigolante.webp',
      caption: {
        it: 'Grigliata Mista di Carni Nobili Selezionate',
        en: 'Mixed Grill of Prime Butcher Cuts and Sausages',
      },
    },
    {
      src: '/images/dishes/secondi-piatti/cotoletta-alla-milanese.webp',
      caption: {
        it: 'Cotoletta alla Milanese Tradizionale con Osso',
        en: 'Traditional Bone-In Milanese Veal Cutlet',
      },
    },
  ],

  // ── Pesce Fresco ──
  'sec-pesce': [
    {
      src: '/images/dishes/secondi-piatti/astice-gamberoni-alla-brace.webp',
      caption: {
        it: 'Astice & Gamberoni Reali alla Griglia',
        en: 'Grilled Royal Lobster & King Prawns',
      },
    },
    {
      src: '/images/dishes/secondi-piatti/grigliata-mista-pesce-calamari.webp',
      caption: {
        it: 'Grigliata Mista del Mare con Calamari & Gamberi',
        en: 'Mixed Catch Seafood Grill with Calamari & Prawns',
      },
    },
  ],

  // ── Pizze Tradizionali ──
  'piz-classiche': [
    {
      src: '/images/dishes/pizza/pizza-margherita-crudo-cornicione.webp',
      caption: {
        it: 'Pizza Margherita Verace con Cornicione a Canotto',
        en: 'Authentic Neapolitan Margherita with Puffy Crust',
      },
    },
    {
      src: '/images/dishes/pizza/pizza-tre-fratelli-parma.webp',
      caption: {
        it: 'Pizza Tre Fratelli con Prosciutto di Parma & Burrata',
        en: 'Tre Fratelli Signature Pizza with Parma Ham & Burrata',
      },
    },
    {
      src: '/images/dishes/pizza/pizza-salsiccia-friarielli.webp',
      caption: {
        it: 'Pizza con Salsiccia Nostrana & Friarielli Napoletani',
        en: 'Neapolitan Sourdough Pizza with Sausage & Wild Friarielli',
      },
    },
  ],

  // ── Grandi Insalatone ──
  'con-insalatone': [
    {
      src: '/images/dishes/contorni-insalate/insalata-mediterranea-parmigiano.webp',
      caption: {
        it: 'Insalata Mediterranea con Scaglie di Parmigiano Reggiano',
        en: 'Mediterranean Garden Salad with Parmigiano Flakes',
      },
    },
    {
      src: '/images/dishes/contorni-insalate/insalata-mare-adriatico.webp',
      caption: {
        it: 'Insalata di Mare Fresca con Calamari & Polpo',
        en: 'Fresh Seafood Salad with Squid and Marinated Octopus',
      },
    },
    {
      src: '/images/dishes/contorni-insalate/straccetti-manzo-misticanza.webp',
      caption: {
        it: 'Insalata con Straccetti di Manzo & Pomodorini',
        en: 'Warm Beef Strips Salad with Cherry Tomatoes and Greens',
      },
    },
  ],

  // ── Dolci Artigianali ──
  'des-dolci': [
    {
      src: '/images/dishes/dolci-tiramisu-cannoli.jpg',
      caption: {
        it: 'Tiramisù Tradizionale all’Espresso & Cannoli Siciliani',
        en: 'Traditional Espresso Tiramisù & Sicilian Cannoli',
      },
    },
  ],
};
