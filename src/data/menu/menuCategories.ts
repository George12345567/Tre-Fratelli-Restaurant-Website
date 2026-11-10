import type { Dish, Drink, LocalizedText } from '../types';
import { menuDishes } from './index';
import { drinksData } from '../wine';
import { groupDishesBySubSections, type MenuSubSection } from '@/components/menu/menuGrouping';

export type MenuCategorySlug =
  | 'antipasti'
  | 'primi-piatti'
  | 'secondi-piatti'
  | 'contorni'
  | 'dolci'
  | 'pizze'
  | 'bevande'
  | 'carta-vini';

export interface DrinkSubSection {
  id: string;
  title: LocalizedText;
  subtitle: LocalizedText;
  badge?: LocalizedText;
  drinks: Drink[];
}

export interface MenuCategoryConfig {
  slug: MenuCategorySlug;
  title: LocalizedText;
  subtitle: LocalizedText;
  intro: LocalizedText;
  image: string;
  kind: 'food' | 'drink';
}

export const menuCategoryConfigs: MenuCategoryConfig[] = [
  {
    slug: 'antipasti',
    title: {
      it: 'Antipasti',
      en: 'Antipasti',
    },
    subtitle: {
      it: 'Terra, Mare & Crudité',
      en: 'Land, Sea & Raw Bar',
    },
    intro: {
      it: 'I nostri antipasti celebrano i migliori sapori della terra e del mare: taglieri di salumi D.O.P., burrata pugliese, gnocco fritto caldo e freschissime crudité di mare servite su ghiaccio.',
      en: 'Our antipasti celebrate the finest flavours of land and sea: D.O.P. cured meats, creamy Pugliese burrata, warm gnocco fritto, and pristine raw seafood on ice.',
    },
    image: '/images/dishes/antipasti/tagliere-salumi-parma.webp',
    kind: 'food',
  },
  {
    slug: 'primi-piatti',
    title: {
      it: 'Primi Piatti',
      en: 'Primi Piatti',
    },
    subtitle: {
      it: 'Pasta Fresca, Risotti & In Crosta',
      en: 'Fresh Pasta, Risotto & In Crust',
    },
    intro: {
      it: 'Pasta fresca all’uovo trafilata al bronzo, risotti cremosi mantecati all’onda e le nostre celebri ricette cotte nel forno a legna sotto una cupola dorata di pane.',
      en: 'Fresh bronze-extruded egg pasta, creamy mantecato risotti, and our iconic specialties baked in the wood-fired oven under a golden dome of dough.',
    },
    image: '/images/dishes/primi-piatti/paccheri-artigianali-frutti-mare.webp',
    kind: 'food',
  },
  {
    slug: 'secondi-piatti',
    title: {
      it: 'Secondi Piatti',
      en: 'Secondi Piatti',
    },
    subtitle: {
      it: 'Carni alla Brace, Pesce & Grandi Barche',
      en: 'Grilled Meats, Seafood & Royal Ships',
    },
    intro: {
      it: 'Dalle trionfali Grandi Barche cariche di astici e pescato fresco, ai tagli nobili di carne cotti sulla brace viva di quercia e alle fritture dorate e croccanti.',
      en: 'From our monumental Grand Seafood Ships laden with fresh lobsters, to prime oak-grilled steaks and golden crispy fritture.',
    },
    image: '/images/dishes/secondi-piatti/grigliata-carni-nobili-sfrigolante.webp',
    kind: 'food',
  },
  {
    slug: 'contorni',
    title: {
      it: 'Contorni e Insalatone',
      en: 'Sides & Grand Salads',
    },
    subtitle: {
      it: 'Insalatone Piatto Unico & Contorni Sfiziosi',
      en: 'Meal Salads & Traditional Sides',
    },
    intro: {
      it: 'Grandi insalatone ricche di ingredienti di prima scelta concepite come piatto unico, insieme ai contorni caldi della tradizione contadina italiana.',
      en: 'Abundant meal salads packed with prime ingredients as complete dishes, paired with hot crispy sides from Italian countryside tradition.',
    },
    image: '/images/dishes/contorni-insalate/insalata-mediterranea-parmigiano.webp',
    kind: 'food',
  },
  {
    slug: 'dolci',
    title: {
      it: 'La Carta dei Dolci',
      en: 'La Carta dei Dolci',
    },
    subtitle: {
      it: 'Bindi — Maestri del Dessert',
      en: 'Bindi — Maestri del Dessert',
    },
    intro: {
      it: 'Per voi selezioniamo i dessert Bindi: semifreddi d’autore, tartufi gelato, coppe speciali, sorbetti e grandi torte della tradizione pasticcera.',
      en: 'We curate the finest Bindi dessert masterworks: signature semifreddi, gelato tartufi, gourmet ice cream cups, sorbets, and artisan cakes.',
    },
    image: '/images/dishes/dolci-tiramisu-cannoli.jpg',
    kind: 'food',
  },
  {
    slug: 'pizze',
    title: {
      it: 'Pizze',
      en: 'Wood-Fired Pizzas',
    },
    subtitle: {
      it: 'Napoletane, Speciali, Al Metro & Calzoni',
      en: 'Neapolitan, Specials, Meter & Calzoni',
    },
    intro: {
      it: 'Vera pizza napoletana con impasto a lievitazione naturale di 48 ore, stesa a mano e cotta nel forno a legna a 450°C. Disponibile anche in formato Al Metro e con impasto integrale.',
      en: 'Authentic Neapolitan pizza with 48-hour cold-fermented dough, hand-stretched and baked at 450°C in our beechwood oven. Available in One-Meter format and whole wheat dough.',
    },
    image: '/images/dishes/pizza/pizza-margherita-crudo-cornicione.webp',
    kind: 'food',
  },
  {
    slug: 'bevande',
    title: {
      it: 'Bevande',
      en: 'Beverages & Beers',
    },
    subtitle: {
      it: 'Birre Artigianali, Bibite & Caffetteria',
      en: 'Craft Beers, Soft Drinks & Coffee',
    },
    intro: {
      it: 'Birre italiane alla spina e artigianali in bottiglia, bibite fresche, acque minerali selezionate e la nostra tradizionale caffetteria con digestivi e amari tipici.',
      en: 'Draft and bottled Italian craft beers, chilled soft drinks, mineral waters, and our traditional espresso coffee with regional Italian digestivi.',
    },
    image: '/images/wine/cocktails-aperitivo-tre-fratelli.jpg',
    kind: 'drink',
  },
  {
    slug: 'carta-vini',
    title: {
      it: 'Carta dei Vini',
      en: 'Wine List',
    },
    subtitle: {
      it: 'Bollicine, Bianchi, Rossi & Vini al Calice',
      en: 'Sparkling, White, Red & By the Glass',
    },
    intro: {
      it: 'Un viaggio enologico tra le più prestigiose cantine italiane: dal Prosecco Superiore di Valdobbiadene ai grandi rossi di Toscana e Piemonte, disponibili anche al calice.',
      en: 'An enological journey through Italy’s most prestigious terroirs: from Valdobbiadene Prosecco Superiore to great Tuscan and Piedmontese reds, available by the glass.',
    },
    image: '/images/wine/wine-cellar-tre-fratelli.jpg',
    kind: 'drink',
  },
];

export const mainMenuCategoryConfigs: MenuCategoryConfig[] = menuCategoryConfigs.filter(
  (c) => c.slug !== 'dolci' && c.slug !== 'bevande' && c.slug !== 'carta-vini'
);

export function getMenuCategoryConfig(slug: string): MenuCategoryConfig | undefined {
  return menuCategoryConfigs.find((c) => c.slug === slug);
}

export function getAdjacentCategoryConfigs(slug: string): {
  prev: MenuCategoryConfig;
  next: MenuCategoryConfig;
} {
  const index = mainMenuCategoryConfigs.findIndex((c) => c.slug === slug);
  const safeIndex = index === -1 ? 0 : index;
  const prevIndex =
    (safeIndex - 1 + mainMenuCategoryConfigs.length) % mainMenuCategoryConfigs.length;
  const nextIndex = (safeIndex + 1) % mainMenuCategoryConfigs.length;

  return {
    prev: mainMenuCategoryConfigs[prevIndex],
    next: mainMenuCategoryConfigs[nextIndex],
  };
}

export interface FoodCategoryData {
  kind: 'food';
  dishes: Dish[];
  subSections: MenuSubSection[];
}

export interface DrinkCategoryData {
  kind: 'drink';
  drinks: Drink[];
  subSections: DrinkSubSection[];
}

export type CategoryData = FoodCategoryData | DrinkCategoryData;

export function getCategoryData(slug: MenuCategorySlug): CategoryData {
  switch (slug) {
    case 'antipasti': {
      // Combines Antipasti (28) and Raw Seafood (6) = 34 dishes
      const antiDishes = menuDishes.filter(
        (d) => d.category === 'Antipasti' || d.category === 'Raw Seafood'
      );
      const terraDishes = antiDishes.filter((d) => d.id.startsWith('anti-terra'));
      const mareDishes = antiDishes.filter(
        (d) => d.category === 'Antipasti' && !d.id.startsWith('anti-terra')
      );
      const rawDishes = antiDishes.filter((d) => d.category === 'Raw Seafood');

      const subSections: MenuSubSection[] = [
        {
          id: 'anti-terra',
          title: {
            it: 'Antipasti di Terra & Tradizione',
            en: 'Antipasti di Terra (Land & Tradition)',
          },
          subtitle: {
            it: 'Salumi artigianali, burrata pugliese, carpaccio di manzo e bruschette calde.',
            en: 'Artisan cold cuts, creamy burrata, beef carpaccio, and warm bruschette.',
          },
          dishes: terraDishes,
        },
        {
          id: 'anti-mare',
          title: {
            it: 'Antipasti di Mare & Tradizione Marina',
            en: 'Seafood Starters & Coastal Tradition',
          },
          subtitle: {
            it: 'Zuppa di pesce ricca, impepata di cozze, polpo con patate e bruschette di mare.',
            en: 'Rich seafood soup, peppered mussels, tender octopus with potatoes, and seafood crostini.',
          },
          dishes: mareDishes,
        },
        {
          id: 'raw-crudite',
          title: {
            it: 'Crudité di Mare, Ostriche & Tartare Fresche',
            en: 'Raw Bar, Fresh Oysters & Seafood Tartare',
          },
          subtitle: {
            it: 'Pescato crudo freschissimo servito su ghiaccio: ostriche, gamberi rossi di Mazara e carpacci marinati.',
            en: 'Pristine raw seafood on ice: shucked oysters, Mazara red prawns, and citrus-cured carpaccios.',
          },
          badge: {
            it: 'Pescato Freschissimo',
            en: 'Pristine Raw Bar',
          },
          dishes: rawDishes,
        },
      ];

      return {
        kind: 'food',
        dishes: antiDishes,
        subSections,
      };
    }

    case 'primi-piatti': {
      const dishes = menuDishes.filter((d) => d.category === 'Primi Piatti');
      return {
        kind: 'food',
        dishes,
        subSections: groupDishesBySubSections('Primi Piatti', dishes),
      };
    }

    case 'secondi-piatti': {
      const dishes = menuDishes.filter((d) => d.category === 'Secondi Piatti');
      return {
        kind: 'food',
        dishes,
        subSections: groupDishesBySubSections('Secondi Piatti', dishes),
      };
    }

    case 'contorni': {
      const dishes = menuDishes.filter((d) => d.category === 'Contorni & Salads');
      return {
        kind: 'food',
        dishes,
        subSections: groupDishesBySubSections('Contorni & Salads', dishes),
      };
    }

    case 'dolci': {
      const dishes = menuDishes.filter((d) => d.category === 'Desserts');
      return {
        kind: 'food',
        dishes,
        subSections: groupDishesBySubSections('Desserts', dishes),
      };
    }

    case 'pizze': {
      const dishes = menuDishes.filter((d) => d.category === 'Pizza & Calzoni');
      return {
        kind: 'food',
        dishes,
        subSections: groupDishesBySubSections('Pizza & Calzoni', dishes),
      };
    }

    case 'bevande': {
      // 19 drinks: soft (4), glass (3), beer (10), coffee (2)
      const drinks = drinksData.filter(
        (d) =>
          d.category === 'soft' ||
          d.category === 'glass' ||
          d.category === 'beer' ||
          d.category === 'coffee'
      );

      const softs = drinks.filter((d) => d.category === 'soft');
      const houseWines = drinks.filter((d) => d.category === 'glass');
      const beers = drinks.filter((d) => d.category === 'beer');
      const coffees = drinks.filter((d) => d.category === 'coffee');

      const subSections: DrinkSubSection[] = [
        {
          id: 'bev-soft',
          title: {
            it: 'Bibite & Acqua Minerale',
            en: 'Soft Drinks & Mineral Water',
          },
          subtitle: {
            it: 'In vetro, lattina da 33 cl e acqua minerale naturale o frizzante.',
            en: 'Glass bottles, 33 cl cans, still and sparkling mineral water.',
          },
          drinks: softs,
        },
        {
          id: 'bev-house-wine',
          title: {
            it: 'Vino della Casa',
            en: 'House Wine',
          },
          subtitle: {
            it: 'Rosso o Bianco in caraffa da 1/4 L, 1/2 L e 1 Litro.',
            en: 'Red or White by the carafe: 1/4 L, 1/2 L, and 1 Litre.',
          },
          drinks: houseWines,
        },
        {
          id: 'bev-beer',
          title: {
            it: 'Birre alla Spina & in Bottiglia',
            en: 'Draft & Bottled Beers',
          },
          subtitle: {
            it: 'Bionda e rossa alla spina, Menabrea, Moretti, Weissbier, Ichnusa e Franziskaner.',
            en: 'Blonde and red draft, Menabrea, Moretti, Weissbier, Ichnusa, and Franziskaner.',
          },
          drinks: beers,
        },
        {
          id: 'bev-coffee',
          title: {
            it: 'Caffetteria & Amari',
            en: 'Coffee & Digestivi',
          },
          subtitle: {
            it: 'Caffè espresso e amari tradizionali per fine pasto.',
            en: 'Espresso coffee and traditional after-dinner Italian amari.',
          },
          drinks: coffees,
        },
      ];

      return {
        kind: 'drink',
        drinks,
        subSections,
      };
    }

    case 'carta-vini': {
      // 24 wines: sparkling (2), white (9), red (13)
      const drinks = drinksData.filter(
        (d) =>
          d.category === 'sparkling' ||
          d.category === 'white' ||
          d.category === 'red'
      );

      const sparkling = drinks.filter((d) => d.category === 'sparkling');
      const white = drinks.filter((d) => d.category === 'white');
      const red = drinks.filter((d) => d.category === 'red');

      const subSections: DrinkSubSection[] = [
        {
          id: 'vin-sparkling',
          title: {
            it: 'Spumanti',
            en: 'Sparkling Wines',
          },
          subtitle: {
            it: 'Valdobbiadene Bortolomiol e Spumante Rosé Vigneti Puglia.',
            en: 'Valdobbiadene Bortolomiol and Spumante Rosé Vigneti Puglia.',
          },
          drinks: sparkling,
        },
        {
          id: 'vin-white',
          title: {
            it: 'Vini Bianchi',
            en: 'White Wines',
          },
          subtitle: {
            it: 'Falanghina, Greco di Tufo, Vermentino, Chardonnay, Sauvignon, Pinot Nero e Rosato.',
            en: 'Falanghina, Greco di Tufo, Vermentino, Chardonnay, Sauvignon, Pinot Nero, and Rosato.',
          },
          drinks: white,
        },
        {
          id: 'vin-red',
          title: {
            it: 'Vini Rossi',
            en: 'Red Wines',
          },
          subtitle: {
            it: 'Chianti Riserva, Valpolicella, Barbera, Primitivo, Aglianico, Taurasi e grandi classici.',
            en: 'Chianti Riserva, Valpolicella, Barbera, Primitivo, Aglianico, Taurasi, and regional classics.',
          },
          drinks: red,
        },
      ];

      return {
        kind: 'drink',
        drinks,
        subSections,
      };
    }
  }
}
