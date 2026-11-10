import type { LucideIcon } from 'lucide-react';
import {
  Utensils,
  Fish,
  Flame,
  Pizza,
  Sparkles,
  Coffee,
  Wine,
  PartyPopper,
  GlassWater,
} from 'lucide-react';

export interface CategoryDishHighlight {
  name: { it: string; en: string;  };
  price: string;
  tag?: { it: string; en: string;  };
}

export interface HomeCategoryItem {
  id: string;
  slug: string;
  icon: LucideIcon;
  title: { it: string; en: string;  };
  subtitle: { it: string; en: string;  };
  tagline: { it: string; en: string;  };
  badge: { it: string; en: string;  };
  craftTag: { it: string; en: string;  };
  image: string;
  targetAnchor: string;
  dishes: CategoryDishHighlight[];
}

export const homeFoodCategories: HomeCategoryItem[] = [
  {
    id: 'antipasti',
    slug: 'antipasti',
    icon: Utensils,
    title: {
      it: 'Antipasti & Taglieri D.O.P.',
      en: 'Antipasti & D.O.P. Boards',
    },
    subtitle: {
      it: 'Salumi Nostrani, Burrata Pugliese & Gnocco Fritto',
      en: 'Artisanal Charcuterie, Pugliese Burrata & Warm Gnocco',
    },
    tagline: {
      it: 'Prosciutto di Parma stagionato 24 mesi, burrata fresca di Andria, gnocco fritto caldo e formaggi D.O.P. selezionati da piccoli produttori italiani.',
      en: '24-month aged Parma prosciutto, fresh Pugliese burrata, warm airy gnocco fritto, and selected Italian artisanal cheeses.',
    },
    badge: {
      it: 'Tradizione Artigianale',
      en: 'Artisanal Starters',
    },
    craftTag: {
      it: 'Stagionatura 24 Mesi',
      en: '24-Month Aged Cures',
    },
    image: '/images/dishes/antipasti/tagliere-salumi-parma.webp',
    targetAnchor: '/menu/antipasti',
    dishes: [
      {
        name: {
          it: 'Gran Antipasto di Terra con Gnocco Fritto',
          en: 'Grand Cured Meats Platter with Warm Gnocco Fritto',
        },
        price: '€15,00',
        tag: { it: 'I Nostri Salumi', en: 'House Favorite' },
      },
      {
        name: {
          it: 'Burrata Pugliese con Crudo di Parma 24 Mesi',
          en: 'Creamy Pugliese Burrata with 24-Month Parma Ham',
        },
        price: '€14,00',
        tag: { it: 'D.O.P. Fresca', en: 'D.O.P. Fresh' },
      },
      {
        name: {
          it: 'Tartare di Manzo Fassona Piemontese',
          en: 'Piedmontese Fassona Beef Tartare with Quail Egg',
        },
        price: '€16,00',
        tag: { it: 'Battuta a Coltello', en: 'Hand-Cut' },
      },
    ],
  },
  {
    id: 'crudi',
    slug: 'raw-seafood',
    icon: Fish,
    title: {
      it: 'Crudi & Pescato di Mare',
      en: 'Raw Bar & Fresh Seafood',
    },
    subtitle: {
      it: 'Ostriche Fine de Claire, Tartare & Carpacci del Giorno',
      en: 'Fine de Claire Oysters, Pristine Tartares & Carpaccios',
    },
    tagline: {
      it: 'Pescato purissimo selezionato ogni mattina: ostriche di Bretagna, tartare di tonno rosso e salmone selvaggio, scampi e gamberi rossi freschi.',
      en: 'Pristine daily sea harvest: French Brittany oysters, Mediterranean red tuna tartare, wild salmon, and sweet red prawns.',
    },
    badge: {
      it: 'Pescato Fresco del Giorno',
      en: 'Pristine Daily Catch',
    },
    craftTag: {
      it: 'Ostriche & Crudité',
      en: 'Oysters & Raw Crudo',
    },
    image: '/images/dishes/raw-seafood/crudo-di-mare-misto.webp',
    targetAnchor: '/menu/antipasti',
    dishes: [
      {
        name: {
          it: 'Gran Antipasto di Mare 3 Fratelli (Caldo & Freddo)',
          en: 'Tre Fratelli Royal Seafood Medley (Warm & Chilled)',
        },
        price: '€20,00',
        tag: { it: 'Piatto Firma', en: 'Signature Dish' },
      },
      {
        name: {
          it: 'Gran Plateau Crudité con Ostriche Fine de Claire',
          en: 'Royal Crudo Plateau with Fine de Claire Oysters',
        },
        price: '€32,00',
        tag: { it: 'Crudo Reale', en: 'Royal Raw' },
      },
      {
        name: {
          it: 'Tartare di Salmone o Tonno con Frutti Rossi',
          en: 'Citrus Red Tuna or Salmon Tartare with Wild Berries',
        },
        price: '€16,00',
        tag: { it: 'Agli Agrumi', en: 'Citrus Infused' },
      },
    ],
  },
  {
    id: 'primi',
    slug: 'primi-piatti',
    icon: Sparkles,
    title: {
      it: 'Primi Piatti & Paste al Forno',
      en: 'Handmade Pasta & Baked Specialties',
    },
    subtitle: {
      it: 'Pasta Trafilata al Bronzo & Cotta in Crosta di Pane',
      en: 'Bronze-Extruded Pasta & Signature Oven Bread Crust',
    },
    tagline: {
      it: 'Le celebri ricette dei tre fratelli: pasta all’uovo lavorata a mano, crosta di pane croccante cotta al forno a legna e sughi ricchi di pesce e carni nobili.',
      en: 'The three brothers’ iconic recipes: hand-kneaded egg pasta, oven-baked pizza bread crust, and rich Mediterranean sauces.',
    },
    badge: {
      it: 'Pasta Fresca Fatta a Mano',
      en: 'Handmade Pasta Daily',
    },
    craftTag: {
      it: 'Cottura in Crosta',
      en: 'Baked in Bread Crust',
    },
    image: '/images/dishes/primi-piatti/spaghetti-chitarra-allo-scoglio.webp',
    targetAnchor: '/menu/primi-piatti',
    dishes: [
      {
        name: {
          it: 'Spaghetti allo Scoglio in Crosta di Pane',
          en: 'Seafood Spaghetti Sealed in Baked Bread Crust',
        },
        price: '€16,00',
        tag: { it: 'Specialità Casa', en: 'Iconic Dish' },
      },
      {
        name: {
          it: 'Paccheri Tre Fratelli con Ricciola & Vongole',
          en: 'Tre Fratelli Paccheri with Amberjack & Clams',
        },
        price: '€16,00',
        tag: { it: 'Ricetta Storica', en: 'Family Classic' },
      },
      {
        name: {
          it: 'Spaghetti alla Carbonara con Guanciale Croccante',
          en: 'Classic Roman Carbonara with Crispy Guanciale',
        },
        price: '€12,00',
        tag: { it: 'Pecorino D.O.P.', en: 'Aged Pecorino' },
      },
    ],
  },
  {
    id: 'secondi',
    slug: 'secondi-piatti',
    icon: Flame,
    title: {
      it: 'Secondi & Barche dei 3 Fratelli',
      en: 'Secondi & Grand Seafood Ships',
    },
    subtitle: {
      it: 'Carni alla Brace di Quercia & Pescato Reale al Metro',
      en: 'Oak Wood-Fired Steaks & Meter-Long Seafood Platters',
    },
    tagline: {
      it: 'Dalla celebre Barca di Pesce fino a 1 metro per grandi tavolate, alla Bistecca alla Fiorentina di razza Chianina con frollatura dry-aged di oltre 30 giorni.',
      en: 'From our famous 1-meter Seafood Boat for shared feasts to Tuscan Chianina Fiorentina T-Bone dry-aged for over 30 days.',
    },
    badge: {
      it: 'Brace Viva & Grandi Barche',
      en: 'Live Oak Coals & Ships',
    },
    craftTag: {
      it: 'Barche da 1 Metro',
      en: '1-Meter Seafood Boats',
    },
    image: '/images/dishes/secondi-piatti/bistecca-fiorentina-chianina.webp',
    targetAnchor: '/menu/secondi-piatti',
    dishes: [
      {
        name: {
          it: 'Gran Barca di Pesce Tre Fratelli (1m / 0.5m)',
          en: 'Tre Fratelli 1-Meter / Half-Meter Seafood Ship',
        },
        price: 'da €45,00',
        tag: { it: 'Per Condividere', en: 'For Sharing' },
      },
      {
        name: {
          it: 'Bistecca alla Fiorentina di Chianina alla Brace',
          en: 'Tuscan Chianina Fiorentina T-Bone on Oak Coals',
        },
        price: '€5,50 / hg',
        tag: { it: 'Frollata 35gg', en: '35-Day Aged' },
      },
      {
        name: {
          it: 'Frittura Mista Reale di Calamari & Gamberi',
          en: 'Golden Calamari & Mediterranean Prawns Fritto',
        },
        price: '€16,00',
        tag: { it: 'Dorata & Fragrante', en: 'Crispy & Tender' },
      },
    ],
  },
  {
    id: 'pizza',
    slug: 'pizza-calzoni',
    icon: Pizza,
    title: {
      it: 'Pizze a Legna & Al Metro',
      en: 'Wood-Fired Pizza & By The Meter',
    },
    subtitle: {
      it: 'Forno Vulcanico 450°C & Impasto a 48 Ore di Lievitazione',
      en: '450°C Wood Oven & 48-Hour Slow Fermented Sourdough',
    },
    tagline: {
      it: 'Autentica pizza artigianale con farina macinata a pietra, pomodoro San Marzano D.O.P. e fior di latte. Da gustare tonda classica o nel formato al metro fino a tre gusti.',
      en: 'Authentic sourdough pizza with stone-ground flour, San Marzano tomatoes, and artisanal cheeses. Enjoy traditional round or shared meter-long slabs.',
    },
    badge: {
      it: 'Forno a Legna 450°C',
      en: '450°C Wood-Fired Oven',
    },
    craftTag: {
      it: 'Pizza al Metro',
      en: 'Pizza by the Meter',
    },
    image: '/images/dishes/pizza/pizza-margherita-crudo-cornicione.webp',
    targetAnchor: '/menu/pizze',
    dishes: [
      {
        name: {
          it: 'Pizza Tre Fratelli (Salame, Gorgonzola, Porcini)',
          en: 'Tre Fratelli Signature (Salami, Gorgonzola, Porcini)',
        },
        price: '€12,00',
        tag: { it: 'Ricetta di Famiglia', en: 'Family Creation' },
      },
      {
        name: {
          it: 'Pizza al Metro & Mezzo Metro (Fino a 3 Gusti)',
          en: 'Meter & Half-Meter Sourdough Pizza (Up to 3 Toppings)',
        },
        price: 'da €22,00',
        tag: { it: 'Formato Tavolata', en: 'Grand Sharing' },
      },
      {
        name: {
          it: 'Margherita Verace con Bufala Campana D.O.P.',
          en: 'Authentic Margherita with Campanian Buffalo Mozzarella',
        },
        price: '€9,00',
        tag: { it: 'Bufala D.O.P.', en: 'Buffalo D.O.P.' },
      },
    ],
  },
  {
    id: 'dolci',
    slug: 'desserts',
    icon: Coffee,
    title: {
      it: 'La Carta dei Dolci (Bindi)',
      en: 'Bindi Dessert Masterworks',
    },
    subtitle: {
      it: 'Semifreddi d’Autore, Coppe Gelato & Pasticceria',
      en: 'Signature Semifreddi, Gelato Cups & Artisan Cakes',
    },
    tagline: {
      it: 'Per voi selezioniamo i celebri dessert Bindi: croccanti all’amarena e cioccolato, tartufi gelato, zuccotto e torte tradizionali.',
      en: 'We select the celebrated masterworks by Bindi: crunchy amarena and chocolate semifreddi, gelato tartufi, and classic cakes.',
    },
    badge: {
      it: 'Bindi Maestri del Dessert',
      en: 'Bindi Dessert Masters',
    },
    craftTag: {
      it: 'Pasticceria d’Autore',
      en: 'Artisan Confectionery',
    },
    image: '/images/dishes/dolci-tiramisu-cannoli.jpg',
    targetAnchor: '/menu/dolci',
    dishes: [
      {
        name: {
          it: 'Coppa ai Pistacchi di Sicilia',
          en: 'Sicilian Pistachio Gelato Coppa',
        },
        price: '€6,00',
        tag: { it: '100% Sicilia', en: '100% Sicilian' },
      },
      {
        name: {
          it: 'Croccante all’Amarena',
          en: 'Amarena Cherry Crunch Semifreddo',
        },
        price: '€6,00',
        tag: { it: 'Semifreddo', en: 'Semifreddo' },
      },
      {
        name: {
          it: 'Torta della Nonna con Pinoli & Mandorle',
          en: 'Torta della Nonna with Pine Nuts',
        },
        price: '€6,00',
        tag: { it: 'Classico', en: 'Classic' },
      },
    ],
  },
];

export const homeWineCategories: HomeCategoryItem[] = [
  {
    id: 'red-wine',
    slug: 'red',
    icon: Wine,
    title: {
      it: 'Grandi Vini Rossi & Riserve',
      en: 'Fine Red Wines & Historic Reserves',
    },
    subtitle: {
      it: 'Brunello di Montalcino, Barolo & Amarone D.O.C.G.',
      en: 'Brunello di Montalcino, Barolo & Amarone D.O.C.G.',
    },
    tagline: {
      it: 'Un caveau curato con oltre cento etichette delle più prestigiose cantine italiane: grandi riserve toscane e piemontesi ideali per accompagnare le carni alla brace.',
      en: 'A temperature-controlled cellar featuring over a hundred prestigious labels: iconic Tuscan and Piedmontese reserves pairing with oak-grilled meats.',
    },
    badge: {
      it: 'Selezione D.O.C.G.',
      en: 'D.O.C.G. Reserves',
    },
    craftTag: {
      it: 'Grandi Annate',
      en: 'Historic Vintages',
    },
    image: '/images/wine/wine-cellar-tre-fratelli.jpg',
    targetAnchor: '/menu/carta-vini',
    dishes: [
      {
        name: {
          it: 'Brunello di Montalcino Riserva D.O.C.G.',
          en: 'Brunello di Montalcino Riserva D.O.C.G.',
        },
        price: '€85,00',
        tag: { it: 'Toscana', en: 'Tuscany' },
      },
      {
        name: {
          it: 'Barolo Classico di Serralunga D.O.C.G.',
          en: 'Barolo Classico Serralunga D.O.C.G.',
        },
        price: '€78,00',
        tag: { it: 'Piemonte', en: 'Piedmont' },
      },
      {
        name: {
          it: 'Amarone della Valpolicella Classico D.O.C.G.',
          en: 'Amarone della Valpolicella Classico D.O.C.G.',
        },
        price: '€72,00',
        tag: { it: 'Veneto', en: 'Veneto' },
      },
    ],
  },
  {
    id: 'sparkling-wine',
    slug: 'sparkling',
    icon: PartyPopper,
    title: {
      it: 'Bollicine, Franciacorta & Bianchi',
      en: 'Franciacorta & Crisp Mineral Whites',
    },
    subtitle: {
      it: 'Metodo Classico della Franciacorta, Prosecco & Bianchi Nobili',
      en: 'Franciacorta Metodo Classico, Prosecco Superiore & Whites',
    },
    tagline: {
      it: 'Dalla nobile effervescenza della Franciacorta ai bianchi freschi e sapidi delle colline friulane e campane, perfetti per esaltare il crudo e le fritture di mare.',
      en: 'From the fine mousse of Franciacorta to refreshing crisp whites from Friuli and Campania, designed to elevate fresh seafood and crudo platters.',
    },
    badge: {
      it: 'Metodo Classico',
      en: 'Metodo Classico',
    },
    craftTag: {
      it: 'Perlage Pregiato',
      en: 'Fine Perlage',
    },
    image: '/images/wine/wine-cellar-tre-fratelli.jpg',
    targetAnchor: '/menu/carta-vini',
    dishes: [
      {
        name: {
          it: 'Franciacorta Brut D.O.C.G. Cuvée Royale',
          en: 'Franciacorta Brut D.O.C.G. Cuvée Royale',
        },
        price: '€48,00',
        tag: { it: 'Lombardia', en: 'Lombardy' },
      },
      {
        name: {
          it: 'Valdobbiadene Prosecco Superiore D.O.C.G.',
          en: 'Valdobbiadene Prosecco Superiore D.O.C.G.',
        },
        price: '€34,00',
        tag: { it: 'Brut Millesimato', en: 'Vintage Brut' },
      },
      {
        name: {
          it: 'Gavi di Gavi D.O.C.G. La Scolca',
          en: 'Gavi di Gavi D.O.C.G. La Scolca',
        },
        price: '€38,00',
        tag: { it: 'Bianco Minerale', en: 'Crisp White' },
      },
    ],
  },
  {
    id: 'cocktails-bar',
    slug: 'cocktails',
    icon: GlassWater,
    title: {
      it: 'Cocktails d’Autore & Aperitivi',
      en: 'Signature Cocktails & Aperitivi',
    },
    subtitle: {
      it: 'Aperol Spritz, Negroni Classico & Grappe Invecchiate',
      en: 'Aperol Spritz, Classic Milanese Negroni & Aged Grappa',
    },
    tagline: {
      it: 'Il rito senza tempo dell’aperitivo all’italiana: cocktail miscelati a regola d’arte con bitter artigianali, vermouth piemontese, agrumi freschi e grappe di riserva.',
      en: 'The timeless ritual of the Italian aperitivo: masterfully shaken cocktails with artisanal bitters, Piedmontese vermouth, fresh citrus, and aged grappas.',
    },
    badge: {
      it: 'Aperitivo Italiano',
      en: 'Italian Aperitivo',
    },
    craftTag: {
      it: 'Mixology Artigianale',
      en: 'Artisanal Mixology',
    },
    image: '/images/wine/cocktails-aperitivo-tre-fratelli.jpg',
    targetAnchor: '/menu/bevande',
    dishes: [
      {
        name: {
          it: 'Negroni Classico con Bitter Campari & Gin',
          en: 'Classic Milanese Negroni with Artisanal Gin',
        },
        price: '€10,00',
        tag: { it: 'Icona Milanese', en: 'Milan Icon' },
      },
      {
        name: {
          it: 'Aperol Spritz con Prosecco D.O.C. & Arancia',
          en: 'Aperol Spritz with Prosecco D.O.C. & Fresh Orange',
        },
        price: '€8,00',
        tag: { it: 'Aperitivo Reale', en: 'Classic Aperitivo' },
      },
      {
        name: {
          it: 'Grappa Invecchiata di Barolo & Amari Tradizionali',
          en: 'Aged Barolo Grappa & Handcrafted Digestifs',
        },
        price: '€6,00',
        tag: { it: 'Fine Pasto', en: 'Digestif' },
      },
    ],
  },
];
