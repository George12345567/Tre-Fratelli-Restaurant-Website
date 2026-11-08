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
      ar: 'المقبلات الإيطالية',
    },
    subtitle: {
      it: 'Terra, Mare & Crudité',
      en: 'Land, Sea & Raw Bar',
      ar: 'أطباق الأرض وثمار البحر والمحار',
    },
    intro: {
      it: 'I nostri antipasti celebrano i migliori sapori della terra e del mare: taglieri di salumi D.O.P., burrata pugliese, gnocco fritto caldo e freschissime crudité di mare servite su ghiaccio.',
      en: 'Our antipasti celebrate the finest flavours of land and sea: D.O.P. cured meats, creamy Pugliese burrata, warm gnocco fritto, and pristine raw seafood on ice.',
      ar: 'تحتفي مقبلاتنا بأروع نكهات الأرض والبحر الإيطالية: أجبان ولحوم D.O.P. المعتقة، جبن البوراتا الطازج، الخبز المقلي الساخن، وثمار البحر النيئة على الثلج.',
    },
    image: '/images/dishes/antipasti/tagliere-salumi-parma.webp',
    kind: 'food',
  },
  {
    slug: 'primi-piatti',
    title: {
      it: 'Primi Piatti',
      en: 'Primi Piatti',
      ar: 'الباستا والريزوتو',
    },
    subtitle: {
      it: 'Pasta Fresca, Risotti & In Crosta',
      en: 'Fresh Pasta, Risotto & In Crust',
      ar: 'الباستا الطازجة والريزوتو وأطباق الفرن',
    },
    intro: {
      it: 'Pasta fresca all’uovo trafilata al bronzo, risotti cremosi mantecati all’onda e le nostre celebri ricette cotte nel forno a legna sotto una cupola dorata di pane.',
      en: 'Fresh bronze-extruded egg pasta, creamy mantecato risotti, and our iconic specialties baked in the wood-fired oven under a golden dome of dough.',
      ar: 'باستا طازجة مسحوبة بقوالب البرونز، أطباق ريزوتو كريمية، وأطباقنا الشهيرة المخبوزة في فرن الحطب داخل قبة ذهبية من عجين الخبز.',
    },
    image: '/images/dishes/primi-piatti/paccheri-artigianali-frutti-mare.webp',
    kind: 'food',
  },
  {
    slug: 'secondi-piatti',
    title: {
      it: 'Secondi Piatti',
      en: 'Secondi Piatti',
      ar: 'الأطباق الرئيسية',
    },
    subtitle: {
      it: 'Carni alla Brace, Pesce & Grandi Barche',
      en: 'Grilled Meats, Seafood & Royal Ships',
      ar: 'مشاوي الفحم والأسماك وسفن البحر الكبرى',
    },
    intro: {
      it: 'Dalle trionfali Grandi Barche cariche di astici e pescato fresco, ai tagli nobili di carne cotti sulla brace viva di quercia e alle fritture dorate e croccanti.',
      en: 'From our monumental Grand Seafood Ships laden with fresh lobsters, to prime oak-grilled steaks and golden crispy fritture.',
      ar: 'من سفن المأكولات البحرية الملكية الفاخرة المحملة بالكركند والمحار، إلى أرقى قطع اللحوم المشوية على جمر البلوط والمقليات الذهبية المقرمشة.',
    },
    image: '/images/dishes/secondi-piatti/grigliata-carni-nobili-sfrigolante.webp',
    kind: 'food',
  },
  {
    slug: 'contorni',
    title: {
      it: 'Contorni e Insalatone',
      en: 'Sides & Grand Salads',
      ar: 'السلطات والمقبلات الجانبية',
    },
    subtitle: {
      it: 'Insalatone Piatto Unico & Contorni Sfiziosi',
      en: 'Meal Salads & Traditional Sides',
      ar: 'سلطات الوجبة المتكاملة والمقبلات التراثية',
    },
    intro: {
      it: 'Grandi insalatone ricche di ingredienti di prima scelta concepite come piatto unico, insieme ai contorni caldi della tradizione contadina italiana.',
      en: 'Abundant meal salads packed with prime ingredients as complete dishes, paired with hot crispy sides from Italian countryside tradition.',
      ar: 'سلطات ملكية وفيرة المكونات معدة كوجبة رئيسية متكاملة، إلى جانب أشهى المقبلات الجانبية الساخنة من ريف إيطاليا الأصيل.',
    },
    image: '/images/dishes/contorni-insalate/insalata-mediterranea-parmigiano.webp',
    kind: 'food',
  },
  {
    slug: 'dolci',
    title: {
      it: 'La Carta dei Dolci',
      en: 'La Carta dei Dolci',
      ar: 'قائمة الحلويات الإيطالية',
    },
    subtitle: {
      it: 'Bindi — Maestri del Dessert',
      en: 'Bindi — Maestri del Dessert',
      ar: 'بيندي — خبراء الحلويات الإيطالية',
    },
    intro: {
      it: 'Per voi selezioniamo i dessert Bindi: semifreddi d’autore, tartufi gelato, coppe speciali, sorbetti e grandi torte della tradizione pasticcera.',
      en: 'We curate the finest Bindi dessert masterworks: signature semifreddi, gelato tartufi, gourmet ice cream cups, sorbets, and artisan cakes.',
      ar: 'نختار لكم أرقى حلويات بيندي الإيطالية: السميفريدو الفاخر، التارتوفو جيلاتو، كؤوس الآيس كريم الذواقة، السوربيه وتورتات الباستيتشيريا العريقة.',
    },
    image: '/images/dishes/dolci-tiramisu-cannoli.jpg',
    kind: 'food',
  },
  {
    slug: 'pizze',
    title: {
      it: 'Pizze',
      en: 'Wood-Fired Pizzas',
      ar: 'البيتزا النابولية',
    },
    subtitle: {
      it: 'Napoletane, Speciali, Al Metro & Calzoni',
      en: 'Neapolitan, Specials, Meter & Calzoni',
      ar: 'بيتزا الحطب، الخاصة، المتر والكالتزوني',
    },
    intro: {
      it: 'Vera pizza napoletana con impasto a lievitazione naturale di 48 ore, stesa a mano e cotta nel forno a legna a 450°C. Disponibile anche in formato Al Metro e con impasto integrale.',
      en: 'Authentic Neapolitan pizza with 48-hour cold-fermented dough, hand-stretched and baked at 450°C in our beechwood oven. Available in One-Meter format and whole wheat dough.',
      ar: 'بيتزا نابولية أصيلة بعجينة متخمرة طبيعياً لمدة 48 ساعة، مفرودة يدوياً ومخبوزة على حرارة 450°C في فرن الحطب الحجري، مع خيارات بيتزا المتر ودقيق القمح الكامل.',
    },
    image: '/images/dishes/pizza/pizza-margherita-crudo-cornicione.webp',
    kind: 'food',
  },
  {
    slug: 'bevande',
    title: {
      it: 'Bevande',
      en: 'Beverages & Beers',
      ar: 'المشروبات والبيرة',
    },
    subtitle: {
      it: 'Birre Artigianali, Bibite & Caffetteria',
      en: 'Craft Beers, Soft Drinks & Coffee',
      ar: 'البيرة الحرفية، المشروبات المنعشة والإسبريسو',
    },
    intro: {
      it: 'Birre italiane alla spina e artigianali in bottiglia, bibite fresche, acque minerali selezionate e la nostra tradizionale caffetteria con digestivi e amari tipici.',
      en: 'Draft and bottled Italian craft beers, chilled soft drinks, mineral waters, and our traditional espresso coffee with regional Italian digestivi.',
      ar: 'البيرة الإيطالية الحرفية وعلى الصنبور، المشروبات الغازية المنعشة، المياه المعدنية المختارة، والإسبريسو الإيطالي الفاخر والمشروبات الهضمية التقليدية.',
    },
    image: '/images/wine/cocktails-aperitivo-tre-fratelli.jpg',
    kind: 'drink',
  },
  {
    slug: 'carta-vini',
    title: {
      it: 'Carta dei Vini',
      en: 'Wine List',
      ar: 'قائمة النبيذ والمشروبات',
    },
    subtitle: {
      it: 'Bollicine, Bianchi, Rossi & Vini al Calice',
      en: 'Sparkling, White, Red & By the Glass',
      ar: 'النبيذ الفوار، الأبيض، الأحمر والمشروبات بالكأس',
    },
    intro: {
      it: 'Un viaggio enologico tra le più prestigiose cantine italiane: dal Prosecco Superiore di Valdobbiadene ai grandi rossi di Toscana e Piemonte, disponibili anche al calice.',
      en: 'An enological journey through Italy’s most prestigious terroirs: from Valdobbiadene Prosecco Superiore to great Tuscan and Piedmontese reds, available by the glass.',
      ar: 'رحلة استثنائية بين أعرق مزارع الكروم الإيطالية: من البروسيكو الفوار في فينيتو إلى أشهر أصناف النبيذ الأحمر التوسكاني، متوفرة أيضاً بالكأس.',
    },
    image: '/images/wine/wine-cellar-tre-fratelli.jpg',
    kind: 'drink',
  },
];

export function getMenuCategoryConfig(slug: string): MenuCategoryConfig | undefined {
  return menuCategoryConfigs.find((c) => c.slug === slug);
}

export function getAdjacentCategoryConfigs(slug: string): {
  prev: MenuCategoryConfig;
  next: MenuCategoryConfig;
} {
  const index = menuCategoryConfigs.findIndex((c) => c.slug === slug);
  const safeIndex = index === -1 ? 0 : index;
  const prevIndex = (safeIndex - 1 + menuCategoryConfigs.length) % menuCategoryConfigs.length;
  const nextIndex = (safeIndex + 1) % menuCategoryConfigs.length;

  return {
    prev: menuCategoryConfigs[prevIndex],
    next: menuCategoryConfigs[nextIndex],
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
            ar: 'مقبلات الأرض واللحوم التراثية',
          },
          subtitle: {
            it: 'Salumi artigianali, burrata pugliese, carpaccio di manzo e bruschette calde.',
            en: 'Artisan cold cuts, creamy burrata, beef carpaccio, and warm bruschette.',
            ar: 'لحوم إيطالية معتقة، جبن بوراتا، كارباتشيو العجل، وبروسكيتا ساخنة.',
          },
          dishes: terraDishes,
        },
        {
          id: 'anti-mare',
          title: {
            it: 'Antipasti di Mare & Tradizione Marina',
            en: 'Seafood Starters & Coastal Tradition',
            ar: 'مقبلات ثمار البحر والتقاليد الساحلية',
          },
          subtitle: {
            it: 'Zuppa di pesce ricca, impepata di cozze, polpo con patate e bruschette di mare.',
            en: 'Rich seafood soup, peppered mussels, tender octopus with potatoes, and seafood crostini.',
            ar: 'شوربة ثمار البحر، بلح البحر بالفلفل الأسود، أخطبوط بالبطاطس، وبروسكيتا بحرية.',
          },
          dishes: mareDishes,
        },
        {
          id: 'raw-crudite',
          title: {
            it: 'Crudité di Mare, Ostriche & Tartare Fresche',
            en: 'Raw Bar, Fresh Oysters & Seafood Tartare',
            ar: 'ثمار البحر النيئة والمحار الطازج والتارتار',
          },
          subtitle: {
            it: 'Pescato crudo freschissimo servito su ghiaccio: ostriche, gamberi rossi di Mazara e carpacci marinati.',
            en: 'Pristine raw seafood on ice: shucked oysters, Mazara red prawns, and citrus-cured carpaccios.',
            ar: 'ثمار بحر طازجة نيئة على الثلج المجروش: محار فاخر، روبيان أحمر صقلي، وكارباتشيو الأسماك.',
          },
          badge: {
            it: 'Pescato Freschissimo',
            en: 'Pristine Raw Bar',
            ar: 'صيد بحري طازج نيء',
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
            ar: 'المشروبات الغازية والمياه المعدنية',
          },
          subtitle: {
            it: 'In vetro, lattina da 33 cl e acqua minerale naturale o frizzante.',
            en: 'Glass bottles, 33 cl cans, still and sparkling mineral water.',
            ar: 'مشروبات غازية في زجاجات وعلب ومياه معدنية طبيعية وفوارة.',
          },
          drinks: softs,
        },
        {
          id: 'bev-house-wine',
          title: {
            it: 'Vino della Casa',
            en: 'House Wine',
            ar: 'نبيذ الدار',
          },
          subtitle: {
            it: 'Rosso o Bianco in caraffa da 1/4 L, 1/2 L e 1 Litro.',
            en: 'Red or White by the carafe: 1/4 L, 1/2 L, and 1 Litre.',
            ar: 'نبيذ أحمر أو أبيض بالدورق: ربع لتر، نصف لتر، ولتر كامل.',
          },
          drinks: houseWines,
        },
        {
          id: 'bev-beer',
          title: {
            it: 'Birre alla Spina & in Bottiglia',
            en: 'Draft & Bottled Beers',
            ar: 'البيرة على الصنبور وفي زجاجات',
          },
          subtitle: {
            it: 'Bionda e rossa alla spina, Menabrea, Moretti, Weissbier, Ichnusa e Franziskaner.',
            en: 'Blonde and red draft, Menabrea, Moretti, Weissbier, Ichnusa, and Franziskaner.',
            ar: 'بيرة شقراء وحمراء على الصنبور، ومختارات الزجاجات الإيطالية والحرفية.',
          },
          drinks: beers,
        },
        {
          id: 'bev-coffee',
          title: {
            it: 'Caffetteria & Amari',
            en: 'Coffee & Digestivi',
            ar: 'القهوة والمشروبات الهضمية الإيطالية',
          },
          subtitle: {
            it: 'Caffè espresso e amari tradizionali per fine pasto.',
            en: 'Espresso coffee and traditional after-dinner Italian amari.',
            ar: 'قهوة الإسبريسو ومشروبات الأمارو الإيطالية التقليدية بعد الوجبة.',
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
            ar: 'النبيذ الفوار والبروسيكو',
          },
          subtitle: {
            it: 'Valdobbiadene Bortolomiol e Spumante Rosé Vigneti Puglia.',
            en: 'Valdobbiadene Bortolomiol and Spumante Rosé Vigneti Puglia.',
            ar: 'فالدوبياديني بورتولوميول ونبيذ فوار وردي من بوليا.',
          },
          drinks: sparkling,
        },
        {
          id: 'vin-white',
          title: {
            it: 'Vini Bianchi',
            en: 'White Wines',
            ar: 'النبيذ الأبيض',
          },
          subtitle: {
            it: 'Falanghina, Greco di Tufo, Vermentino, Chardonnay, Sauvignon, Pinot Nero e Rosato.',
            en: 'Falanghina, Greco di Tufo, Vermentino, Chardonnay, Sauvignon, Pinot Nero, and Rosato.',
            ar: 'فالانغينا، غريكو دي توفو، فيرمينتينو، شاردونيه، سوفينيون، وبينو نيرو.',
          },
          drinks: white,
        },
        {
          id: 'vin-red',
          title: {
            it: 'Vini Rossi',
            en: 'Red Wines',
            ar: 'النبيذ الأحمر',
          },
          subtitle: {
            it: 'Chianti Riserva, Valpolicella, Barbera, Primitivo, Aglianico, Taurasi e grandi classici.',
            en: 'Chianti Riserva, Valpolicella, Barbera, Primitivo, Aglianico, Taurasi, and regional classics.',
            ar: 'كيانتي ريزيرفا، فالبوليتشيلا، باربيرا، بريميتيفو، أليانيكو، وتوراسي.',
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
