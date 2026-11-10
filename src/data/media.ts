import type { LocalizedText } from './types';

export interface VideoAsset {
  id: string;
  src: string;
  poster: string;
  title: LocalizedText;
  description: LocalizedText;
  durationSeconds: number;
  aspectRatio: '16:9';
}

export interface DishMediaAsset {
  id: string;
  category: 'antipasti' | 'raw-seafood' | 'primi-piatti' | 'secondi-piatti' | 'pizza' | 'contorni-insalate' | 'hero';
  title: LocalizedText;
  src: string;
  webpSrc: string;
  alt: LocalizedText;
}

export const restaurantVideos: VideoAsset[] = [
  {
    id: 'vid-dishes-showcase',
    src: '/video/tre-fratelli-dishes-showcase.mp4',
    poster: '/images/dishes/primi-piatti/calamarata-astice-mediterraneo.webp',
    title: {
      it: 'I Piatti della Tradizione — Viaggio Gastronomico',
      en: 'Traditional Dishes Showcase — Culinary Journey',
    },
    description: {
      it: 'Dai crudi di mare alla tartare di Fassona fino alla calamarata all astice e grigliata di pesce.',
      en: 'From raw seafood plateau and Fassona tartare to fresh lobster calamarata and sizzling grilled seafood.',
    },
    durationSeconds: 6,
    aspectRatio: '16:9',
  },
  {
    id: 'vid-delicacies-montage',
    src: '/video/tre-fratelli-delicacies-montage.mp4',
    poster: '/images/dishes/raw-seafood/crudo-di-mare-misto.webp',
    title: {
      it: 'Eccellenze e Sapori d Italia — Montaggio Sapori',
      en: 'Italian Flavors & Delicacies — Gourmet Montage',
    },
    description: {
      it: 'Ostriche fresche su ghiaccio, taglieri di formaggi artigianali con burrata e straccetti di manzo scottati.',
      en: 'Fine oysters on crushed ice, artisanal cheese boards with fresh burrata, and tender seared beef strips.',
    },
    durationSeconds: 6,
    aspectRatio: '16:9',
  },
  {
    id: 'vid-feast-cinematic',
    src: '/video/tre-fratelli-feast-cinematic.mp4',
    poster: '/images/hero/lavish-mediterranean-feast.webp',
    title: {
      it: 'Il Banchetto Tre Fratelli — Gran Tavola',
      en: 'The Grand Tre Fratelli Banquet Table',
    },
    description: {
      it: 'Una panoramica immersiva sulla nostra tavola imbandita: carni alla brace, paste fresche e crudi di mare.',
      en: 'An immersive cinematic view of our grand feast table: wood-fired meats, fresh pastas, and raw Mediterranean seafood.',
    },
    durationSeconds: 6,
    aspectRatio: '16:9',
  },
];

export const restaurantHeroMedia: DishMediaAsset[] = [
  {
    id: 'hero-feast-table',
    category: 'hero',
    title: {
      it: 'La Grande Tavola Tre Fratelli',
      en: 'The Grand Tre Fratelli Banquet Table',
    },
    src: '/images/hero/lavish-mediterranean-feast.png',
    webpSrc: '/images/hero/lavish-mediterranean-feast.webp',
    alt: {
      it: 'Grande banchetto mediterraneo con pasta all astice, grigliata di pesce, tartare e formaggi',
      en: 'Grand Mediterranean feast table with lobster pasta, grilled seafood, beef tartare, and cheeses',
    },
  },
  {
    id: 'hero-restaurant-ambiance',
    category: 'hero',
    title: {
      it: 'Atmosfera e Calore della Sala',
      en: 'Dining Room Ambiance & Warmth',
    },
    src: '/images/hero/restaurant-table-ambiance.png',
    webpSrc: '/images/hero/restaurant-table-ambiance.webp',
    alt: {
      it: 'Tavola apparecchiata con pasta fresca all astice e calici di vino',
      en: 'Set dining table with fresh lobster pasta and fine wine glasses',
    },
  },
];

export const categorizedDishesMedia: DishMediaAsset[] = [
  // ── Antipasti ──
  {
    id: 'dish-tartare-fassona',
    category: 'antipasti',
    title: {
      it: 'Tartare di Manzo Fassona con Crostini Rustici',
      en: 'Piedmontese Fassona Beef Tartare with Rustic Crostini',
    },
    src: '/images/dishes/antipasti/tartare-di-fassona-piemontese.png',
    webpSrc: '/images/dishes/antipasti/tartare-di-fassona-piemontese.webp',
    alt: {
      it: 'Battuta di fassona piemontese su ardesia con erbe e crostini',
      en: 'Fassona beef tartare on black slate with herbs and toasted crostini',
    },
  },
  {
    id: 'dish-tagliere-formaggi-burrata',
    category: 'antipasti',
    title: {
      it: 'Gran Tagliere di Formaggi Artigianali e Burrata Pugliese',
      en: 'Artisanal Italian Cheese Board & Pugliese Burrata',
    },
    src: '/images/dishes/antipasti/tagliere-formaggi-burrata.png',
    webpSrc: '/images/dishes/antipasti/tagliere-formaggi-burrata.webp',
    alt: {
      it: 'Tagliere di formaggi con burrata fresca, pecorino, frutta ed erbe',
      en: 'Wooden board with fresh burrata, aged pecorino, dried fruits and herbs',
    },
  },
  {
    id: 'dish-tagliere-salumi-parma',
    category: 'antipasti',
    title: {
      it: 'Tagliere della Casa con Prosciutto di Parma e Salumi Nobili',
      en: 'House Charcuterie Board with Parma Prosciutto & Cured Meats',
    },
    src: '/images/dishes/antipasti/tagliere-salumi-parma.png',
    webpSrc: '/images/dishes/antipasti/tagliere-salumi-parma.webp',
    alt: {
      it: 'Tagliere rustico di salumi italiani con prosciutto di Parma e olive',
      en: 'Rustic Italian charcuterie board with Parma prosciutto and olives',
    },
  },
  {
    id: 'dish-bruschette-pomodoro',
    category: 'antipasti',
    title: {
      it: 'Bruschette Tradizionali al Pomodoro di Collina e Basilico',
      en: 'Traditional Hilltop Tomato & Garden Basil Bruschetta',
    },
    src: '/images/dishes/antipasti/bruschette-tradizionali-pomodoro.png',
    webpSrc: '/images/dishes/antipasti/bruschette-tradizionali-pomodoro.webp',
    alt: {
      it: 'Pane tostato rustico con pomodorini freschi e basilico aromatico',
      en: 'Rustic toasted bread topped with fresh vine tomatoes and basil',
    },
  },

  // ── Raw Seafood (Crudi di Mare) ──
  {
    id: 'dish-plateau-ostriche',
    category: 'raw-seafood',
    title: {
      it: 'Plateau di Ostriche Fine de Claire su Ghiaccio Tritato',
      en: 'Fine de Claire Oysters Plateau on Crushed Ice',
    },
    src: '/images/dishes/raw-seafood/plateau-ostriche-fine-de-claire.png',
    webpSrc: '/images/dishes/raw-seafood/plateau-ostriche-fine-de-claire.webp',
    alt: {
      it: 'Ostriche fresche aperte servite su letto di ghiaccio con agrumi',
      en: 'Fresh shucked oysters served over crushed ice with citrus wedges',
    },
  },
  {
    id: 'dish-crudo-mare-misto',
    category: 'raw-seafood',
    title: {
      it: 'Crudo di Mare Misto: Ostriche, Salmone e Gamberi Rossi',
      en: 'Mixed Raw Seafood Plateau: Oysters, Wild Salmon & Red Prawns',
    },
    src: '/images/dishes/raw-seafood/crudo-di-mare-misto.png',
    webpSrc: '/images/dishes/raw-seafood/crudo-di-mare-misto.webp',
    alt: {
      it: 'Piatto ceramico con crudi di mare, carpaccio di salmone e gamberi',
      en: 'Ceramic platter with raw seafood, salmon carpaccio and red prawns',
    },
  },
  {
    id: 'dish-gran-plateau-reale',
    category: 'raw-seafood',
    title: {
      it: 'Gran Plateau Reale dei Due Mari',
      en: 'Royal Grand Plateau of the Two Seas',
    },
    src: '/images/dishes/raw-seafood/gran-plateau-reale-mare.png',
    webpSrc: '/images/dishes/raw-seafood/gran-plateau-reale-mare.webp',
    alt: {
      it: 'Trionfo di crostaci e conchiglie fresche su vassoio d argento con ghiaccio',
      en: 'Abundant raw shellfish and crustacean triumph on silver ice platter',
    },
  },
  {
    id: 'dish-boule-frutti-mare',
    category: 'raw-seafood',
    title: {
      it: 'Boule Glacée di Frutti di Mare e Agrumi di Sicilia',
      en: 'Iced Bowl of Fresh Shellfish & Sicilian Citrus',
    },
    src: '/images/dishes/raw-seafood/boule-frutti-di-mare-ghiaccio.png',
    webpSrc: '/images/dishes/raw-seafood/boule-frutti-di-mare-ghiaccio.webp',
    alt: {
      it: 'Boule di ghiaccio con gamberi, scampi e ostriche freschissime',
      en: 'Chilled ice bowl filled with fresh scampi, prawns and oysters',
    },
  },

  // ── Primi Piatti (Pasta & Risotto) ──
  {
    id: 'dish-calamarata-astice',
    category: 'primi-piatti',
    title: {
      it: 'Calamarata Tre Fratelli con Astice Fresco del Mediterraneo',
      en: 'Tre Fratelli Calamarata with Fresh Mediterranean Lobster',
    },
    src: '/images/dishes/primi-piatti/calamarata-astice-mediterraneo.png',
    webpSrc: '/images/dishes/primi-piatti/calamarata-astice-mediterraneo.webp',
    alt: {
      it: 'Pasta trafilata al bronzo con astice intero, pomodorini e bisque',
      en: 'Bronze-die calamarata pasta with whole lobster, cherry tomatoes and bisque',
    },
  },
  {
    id: 'dish-spaghetti-allo-scoglio',
    category: 'primi-piatti',
    title: {
      it: 'Spaghetti alla Chitarra allo Scoglio con Cozze e Vongole',
      en: 'Hand-Cut Chitarra Spaghetti allo Scoglio with Clams & Mussels',
    },
    src: '/images/dishes/primi-piatti/spaghetti-chitarra-allo-scoglio.png',
    webpSrc: '/images/dishes/primi-piatti/spaghetti-chitarra-allo-scoglio.webp',
    alt: {
      it: 'Spaghetti freschi tirati alla chitarra con cozze e frutti di mare',
      en: 'Fresh chitarra spaghetti tossed with mussels, clams and parsley',
    },
  },
  {
    id: 'dish-risotto-pescatora',
    category: 'primi-piatti',
    title: {
      it: 'Risotto alla Pescatora in Padella con Scampi e Frutti di Mare',
      en: 'Seafood Risotto alla Pescatora with Scampi & Shellfish',
    },
    src: '/images/dishes/primi-piatti/risotto-alla-pescatora-mare.png',
    webpSrc: '/images/dishes/primi-piatti/risotto-alla-pescatora-mare.webp',
    alt: {
      it: 'Risotto ai frutti di mare mantecato in padella d acciaio con scampi',
      en: 'Seafood risotto in stainless steel pan with scampi and mussels',
    },
  },
  {
    id: 'dish-paccheri-mare',
    category: 'primi-piatti',
    title: {
      it: 'Paccheri Artigianali di Gragnano con Sugo di Mare',
      en: 'Artisanal Gragnano Paccheri with Rich Seafood Reduction',
    },
    src: '/images/dishes/primi-piatti/paccheri-artigianali-frutti-mare.png',
    webpSrc: '/images/dishes/primi-piatti/paccheri-artigianali-frutti-mare.webp',
    alt: {
      it: 'Paccheri al dente con sugo denso di pesce e pomodorini confit',
      en: 'Paccheri al dente with rich seafood sugo and confit cherry tomatoes',
    },
  },

  // ── Secondi Piatti & Grill ──
  {
    id: 'dish-bistecca-fiorentina',
    category: 'secondi-piatti',
    title: {
      it: 'Bistecca alla Fiorentina di Chianina sulla Ghisa Sfrigolante',
      en: 'Certified Chianina Fiorentina T-Bone on Sizzling Cast Iron',
    },
    src: '/images/dishes/secondi-piatti/bistecca-fiorentina-chianina.png',
    webpSrc: '/images/dishes/secondi-piatti/bistecca-fiorentina-chianina.webp',
    alt: {
      it: 'Fiorentina di chianina alla brace su piatto in ghisa con rosmarino e patate',
      en: 'Charcoal-grilled Chianina T-bone on cast iron platter with rosemary and potatoes',
    },
  },
  {
    id: 'dish-grigliata-pesce',
    category: 'secondi-piatti',
    title: {
      it: 'Grigliata Mista di Mare: Pescato del Giorno, Calamari e Gamberoni',
      en: 'Mixed Catch of the Day Seafood Grill: Calamari & King Prawns',
    },
    src: '/images/dishes/secondi-piatti/grigliata-mista-pesce-calamari.png',
    webpSrc: '/images/dishes/secondi-piatti/grigliata-mista-pesce-calamari.webp',
    alt: {
      it: 'Grigliata di filetti di pesce, calamari e gamberoni con agrumi grigliati',
      en: 'Platter of grilled fish fillets, calamari and jumbo prawns with lemon',
    },
  },
  {
    id: 'dish-astice-gamberoni-brace',
    category: 'secondi-piatti',
    title: {
      it: 'Astice Reale e Gamberoni alla Brace di Legna di Quercia',
      en: 'Wood-Fired Oak Charcoal Mediterranean Lobster & Giant Prawns',
    },
    src: '/images/dishes/secondi-piatti/astice-gamberoni-alla-brace.png',
    webpSrc: '/images/dishes/secondi-piatti/astice-gamberoni-alla-brace.webp',
    alt: {
      it: 'Astice spaccato a meta e grigliato alla brace con pannocchie ed erbe',
      en: 'Split grilled lobster with giant prawns, sweet corn and fresh herbs',
    },
  },
  {
    id: 'dish-cotoletta-milanese',
    category: 'secondi-piatti',
    title: {
      it: 'Cotoletta alla Milanese Dorata Tre Fratelli',
      en: 'Tre Fratelli Golden Crispy Veal Cotoletta alla Milanese',
    },
    src: '/images/dishes/secondi-piatti/cotoletta-alla-milanese.png',
    webpSrc: '/images/dishes/secondi-piatti/cotoletta-alla-milanese.webp',
    alt: {
      it: 'Cotoletta di vitello dorata con panatura croccante e fette di agrumi',
      en: 'Golden breaded veal cutlet with crispy coating and orange/lemon slices',
    },
  },
  {
    id: 'dish-grigliata-carni-nobili',
    category: 'secondi-piatti',
    title: {
      it: 'Gran Grigliata di Carni Selezionate con Ossobuco e Rosmarino',
      en: 'Prime Selection Mixed Meat Grill with Bone Marrow & Rosemary',
    },
    src: '/images/dishes/secondi-piatti/grigliata-carni-nobili-sfrigolante.png',
    webpSrc: '/images/dishes/secondi-piatti/grigliata-carni-nobili-sfrigolante.webp',
    alt: {
      it: 'Piatto sfrigolante di tagliata di manzo con osso e patate dorate',
      en: 'Sizzling platter of sliced beef steak, bone marrow and golden roast potatoes',
    },
  },
  {
    id: 'dish-salsiccia-nostrana',
    category: 'secondi-piatti',
    title: {
      it: 'Salsiccia Nostrana Artigianale alla Brace con Chips Dorate',
      en: 'Housemade Spiral Italian Sausage on Wood Board with Chips',
    },
    src: '/images/dishes/secondi-piatti/salsiccia-nostrana-brace.png',
    webpSrc: '/images/dishes/secondi-piatti/salsiccia-nostrana-brace.webp',
    alt: {
      it: 'Salsiccia arrotolata grigliata servita su tagliere con cestino di patatine',
      en: 'Spiral grilled Italian sausage served on wooden board with fries basket',
    },
  },

  // ── Pizze al Forno a Legna ──
  {
    id: 'dish-pizza-parma',
    category: 'pizza',
    title: {
      it: 'Pizza Tre Fratelli: Prosciutto di Parma e Scaglie di Grana',
      en: 'Tre Fratelli Signature Pizza: Parma Prosciutto & Shaved Grana',
    },
    src: '/images/dishes/pizza/pizza-tre-fratelli-parma.png',
    webpSrc: '/images/dishes/pizza/pizza-tre-fratelli-parma.webp',
    alt: {
      it: 'Pizza cotta a legna con pomodoro, fior di latte, prosciutto crudo di Parma e rucola',
      en: 'Wood-fired pizza topped with tomato, mozzarella, Parma prosciutto and arugula',
    },
  },
  {
    id: 'dish-pizza-friarielli',
    category: 'pizza',
    title: {
      it: 'Pizza Tradizionale Napoletana con Salsiccia e Friarielli',
      en: 'Neapolitan Salsiccia & Friarielli Wood-Oven Pizza',
    },
    src: '/images/dishes/pizza/pizza-salsiccia-friarielli.png',
    webpSrc: '/images/dishes/pizza/pizza-salsiccia-friarielli.webp',
    alt: {
      it: 'Pizza napoletana con cornicione alveolato, salsiccia e friarielli campani',
      en: 'Neapolitan pizza with airy leopard-spotted crust, Italian sausage and greens',
    },
  },
  {
    id: 'dish-pizza-margherita-crudo',
    category: 'pizza',
    title: {
      it: 'Pizza Margherita Verace con Cornicione Alto e Prosciutto',
      en: 'Authentic High-Crust Margherita with Delicate Prosciutto',
    },
    src: '/images/dishes/pizza/pizza-margherita-crudo-cornicione.png',
    webpSrc: '/images/dishes/pizza/pizza-margherita-crudo-cornicione.webp',
    alt: {
      it: 'Dettaglio del cornicione alveolato e sottile impasto lievitato 48 ore',
      en: 'Close-up of airy 48-hour fermented pizza crust and melting mozzarella',
    },
  },

  // ── Contorni & Insalate ──
  {
    id: 'dish-straccetti-manzo',
    category: 'contorni-insalate',
    title: {
      it: 'Straccetti di Manzo Scottati su Misticanza Estiva e Agrumi',
      en: 'Warm Seared Beef Strips over Garden Greens & Citrus',
    },
    src: '/images/dishes/contorni-insalate/straccetti-manzo-misticanza.png',
    webpSrc: '/images/dishes/contorni-insalate/straccetti-manzo-misticanza.webp',
    alt: {
      it: 'Ciotola di insalata fresca con straccetti di manzo dorati e fette d arancia',
      en: 'Bowl of fresh garden salad with tender seared beef strips and orange wedges',
    },
  },
  {
    id: 'dish-insalata-parmigiano',
    category: 'contorni-insalate',
    title: {
      it: 'Insalata Mediterranea Croccante con Scaglie di Parmigiano 24 Mesi',
      en: 'Crisp Mediterranean Salad with 24-Month Aged Parmigiano Shavings',
    },
    src: '/images/dishes/contorni-insalate/insalata-mediterranea-parmigiano.png',
    webpSrc: '/images/dishes/contorni-insalate/insalata-mediterranea-parmigiano.webp',
    alt: {
      it: 'Insalata ricca di verdure fresche e abbondanti scaglie di Parmigiano Reggiano',
      en: 'Crispy vegetable salad topped generously with shaved Parmigiano Reggiano',
    },
  },
  {
    id: 'dish-insalata-mare-adriatico',
    category: 'contorni-insalate',
    title: {
      it: 'Insalata di Mare Tiepida dell Adriatico con Calamaretti e Gamberi',
      en: 'Warm Adriatic Seafood Salad with Baby Calamari & Shrimp',
    },
    src: '/images/dishes/contorni-insalate/insalata-mare-adriatico.png',
    webpSrc: '/images/dishes/contorni-insalate/insalata-mare-adriatico.webp',
    alt: {
      it: 'Ciotola con insalata di calamari, gamberi, carote julienne e prezzemolo',
      en: 'Bowl of marinated calamari and shrimp salad with carrots and lemon',
    },
  },
];
