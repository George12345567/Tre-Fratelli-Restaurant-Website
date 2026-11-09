import type { LocalizedText } from './types';

export interface HomePillar {
  id: string;
  badge: LocalizedText;
  chapter: string;
  title: LocalizedText;
  subtitle: LocalizedText;
  description: LocalizedText;
  image: string;
  href: string;
  ctaText: LocalizedText;
  stats?: {
    it: string;
    en: string;
    ar: string;
  };
}

export const homeMenuPillars: HomePillar[] = [
  {
    id: 'cucina',
    chapter: '01',
    badge: {
      it: 'Capitolo I · Cucina',
      en: 'Chapter I · Cuisine',
      ar: 'الباب الأول · المطبخ الإيطالي',
    },
    title: {
      it: 'La Nostra Cucina',
      en: 'Restaurant Cuisine',
      ar: 'أطباق المطعم الإيطالي',
    },
    subtitle: {
      it: 'Pasta Fresca, Crudi & Brace',
      en: 'Fresh Pasta, Seafood & Wood Grills',
      ar: 'الباستا الطازجة، ثمار البحر والمشاوي',
    },
    description: {
      it: 'Pasta all’uovo trafilata al bronzo, sontuose crudité di mare servite su ghiaccio e tagli nobili di carne cotti sulla brace viva di quercia.',
      en: 'Handcrafted bronze-extruded pasta, opulent raw seafood on ice, and prime meat cuts grilled over live oak embers.',
      ar: 'باستا طازجة مسحوبة بقوالب البرونز، أطباق ثمار البحر الفاخرة على الثلج، وأرقى قطع اللحوم المشوية على جمر البلوط الطبيعي.',
    },
    image: '/images/hero/lavish-mediterranean-feast.webp',
    href: '/menu',
    ctaText: {
      it: 'Scopri i Piatti',
      en: 'Explore Dishes',
      ar: 'استكشف الأطباق',
    },
    stats: {
      it: '116+ Specialità',
      en: '116+ Specialties',
      ar: 'أكثر من 116 صنفاً',
    },
  },
  {
    id: 'pizzeria',
    chapter: '02',
    badge: {
      it: 'Capitolo II · Pizzeria',
      en: 'Chapter II · Pizzeria',
      ar: 'الباب الثاني · البيتزا النابولية',
    },
    title: {
      it: 'La Vera Pizza a Legna',
      en: 'Wood-Fired Pizza',
      ar: 'بيتزا الحطب النابولية',
    },
    subtitle: {
      it: 'Lievitazione 48h & Al Metro',
      en: '48h Fermentation & One-Meter',
      ar: 'تخمير 48 ساعة وبيتزا المتر',
    },
    description: {
      it: 'Impasto leggerissimo ad alta idratazione, cotto a 450°C nel forno a legna napoletano con San Marzano D.O.P. e fior di latte fresco.',
      en: 'Airy high-hydration dough cold-fermented 48 hours, baked at 450°C with San Marzano tomatoes and fresh Pugliese fior di latte.',
      ar: 'عجينة متخمرة 48 ساعة ومخبوزة في فرن الحطب على 450°C مع طماطم سان مارزانو وجبن فيور دي لاتي الطازج.',
    },
    image: '/images/dishes/pizza/pizza-margherita-crudo-cornicione.webp',
    href: '/menu/pizze',
    ctaText: {
      it: 'Esplora le Pizze',
      en: 'Explore Pizzas',
      ar: 'استكشف البيتزا',
    },
    stats: {
      it: '57 Pizze & Formati',
      en: '57 Pizzas & Formats',
      ar: '57 صنفاً ومقاساً',
    },
  },
  {
    id: 'cantina',
    chapter: '03',
    badge: {
      it: 'Capitolo III · Cantina & Dolci',
      en: 'Chapter III · Cellar & Desserts',
      ar: 'الباب الثالث · القبو والحلويات',
    },
    title: {
      it: 'Vini, Cantina & Dolci',
      en: 'Cellar, Drinks & Desserts',
      ar: 'المشروبات، الخمور والحلويات',
    },
    subtitle: {
      it: 'Vini Pregiati & Dolci Bindi',
      en: 'Fine Labels & Artisan Bindi Desserts',
      ar: 'خمور معتقة وحلويات بيندي الإيطالية',
    },
    description: {
      it: 'Una prestigiosa collezione enologica dalle migliori cantine italiane, cocktail d’autore e i celebri dolci e semifreddi dei maestri Bindi.',
      en: 'A prestigious enological selection from Italy’s top terroirs, signature cocktails, and iconic artisan desserts by Bindi.',
      ar: 'تشكيلة خمور مرموقة من أعرق مزارع إيطاليا، كوكتيلات إيطالية منعشة، وحلويات وتورتات دار بيندي الشهيرة.',
    },
    image: '/images/wine/wine-cellar-tre-fratelli.jpg',
    href: '/menu/carta-vini',
    ctaText: {
      it: 'Scopri Cantina & Dolci',
      en: 'Explore Cellar & Sweets',
      ar: 'استكشف القبو والحلويات',
    },
    stats: {
      it: '78 Proposte',
      en: '78 Labels & Sweets',
      ar: '78 صنفاً مختاراً',
    },
  },
];
