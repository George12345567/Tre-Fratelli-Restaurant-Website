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
      // Matches PDF Page 2: Antipasti di Terra (17) and Antipasti di Mare (17) = 34 dishes
      const antiDishes = menuDishes.filter(
        (d) => d.category === 'Antipasti' || d.category === 'Raw Seafood'
      );
      const terraDishes = antiDishes.filter((d) => d.id.startsWith('anti-terra'));
      const mareDishes = antiDishes.filter((d) => d.id.startsWith('anti-mare'));

      const subSections: MenuSubSection[] = [
        {
          id: 'anti-terra',
          title: {
            it: 'Antipasti di Terra',
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
            it: 'Antipasti di Mare',
            en: 'Antipasti di Mare (Seafood Starters)',
          },
          subtitle: {
            it: 'Zuppa di pesce ricca, carpacci, crudité di pesce, impepata di cozze e ostriche.',
            en: 'Rich seafood soup, carpaccios, raw seafood plateau, peppered mussels, and fresh oysters.',
          },
          dishes: mareDishes,
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
      // 21 drinks in exact PDF Page 10 order
      const drinks = drinksData.filter(
        (d) =>
          d.category === 'soft' ||
          d.category === 'glass' ||
          d.category === 'beer' ||
          d.category === 'coffee' ||
          d.category === 'aperitivo'
      );

      const subSections: DrinkSubSection[] = [
        {
          id: 'bev-all',
          title: {
            it: 'Bevande',
            en: 'Beverages & Drinks',
          },
          subtitle: {
            it: 'Bibite, acqua, caffè, vino della casa, birre alla spina e in bottiglia, amari e aperitivi.',
            en: 'Soft drinks, water, espresso, house wine, draft & bottled beers, amari, and aperitifs.',
          },
          drinks,
        },
      ];

      return {
        kind: 'drink',
        drinks,
        subSections,
      };
    }

    case 'carta-vini': {
      // 22 wines in exact PDF Page 9 section order: Vini Bianchi, Vini Rossi, Spumanti
      const drinks = drinksData.filter(
        (d) =>
          d.category === 'sparkling' ||
          d.category === 'white' ||
          d.category === 'red'
      );

      const white = drinks.filter((d) => d.category === 'white');
      const red = drinks.filter((d) => d.category === 'red');
      const sparkling = drinks.filter((d) => d.category === 'sparkling');

      const subSections: DrinkSubSection[] = [
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
            it: 'Chianti Riserva, Valpolicella, Barbera, Primitivo, Aglianico, Barolo e Amarone di Valpolicella.',
            en: 'Chianti Riserva, Valpolicella, Barbera, Primitivo, Aglianico, Barolo, and Amarone di Valpolicella.',
          },
          drinks: red,
        },
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
      ];

      return {
        kind: 'drink',
        drinks,
        subSections,
      };
    }
  }
}
