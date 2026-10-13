import type { NewsPost } from './types';

export const newsData: NewsPost[] = [
  {
    id: 'news-1',
    date: '2026-10-15',
    category: {
      it: 'Menu Stagionale',
      en: 'Seasonal Tasting',
      ar: 'قائمة الموسم الخاصة',
    },
    title: {
      it: 'La Settimana del Tartufo Bianco d Alba',
      en: 'Alba White Truffle Week at Tre Fratelli',
      ar: 'أسبوع الكمأة البيضاء من ألبا في تري فراتيلي',
    },
    excerpt: {
      it: 'Un percorso degustazione in cinque portate dedicato al pregiato tartufo bianco piemontese, con abbinamenti di Barolo e Nebbiolo selezionati da Luca.',
      en: 'A five-course tasting journey honoring Piedmont s prized white truffle, paired with rare vintages of Barolo and Nebbiolo handpicked by Luca.',
      ar: 'رحلة تذوق من خمسة أطباق مخصصة للكمأة البيضاء الفاخرة من بيدمونت، مع مواءمة راقية للمشروبات الإيطالية المختارة.',
    },
    image: 'https://images.unsplash.com/photo-1414235077428-33898f82204c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'news-2',
    date: '2026-10-02',
    category: {
      it: 'Maestria Artigianale',
      en: 'Kitchen Craft',
      ar: 'حرفة المطبخ والباستا',
    },
    title: {
      it: 'La Nostra Nuova Selezione di Pasta Tirata a Mano',
      en: 'New Handmade Bronze-Extruded Pasta Selection',
      ar: 'تشكيلة جديدة من الباستا الطازجة المسحوبة بالبرونز',
    },
    excerpt: {
      it: 'Marco introduce nuovi formati di pasta all uovo tirata a mano sulla spianatoia in legno, nel pieno rispetto dei tempi lenti della tradizione contadina.',
      en: 'Marco unveils new artisanal egg pasta shapes rolled fresh on the wooden board, staying true to slow, unhurried rural Italian traditions.',
      ar: 'يقدم الشيف ماركو أشكالاً جديدة من باستا البيض المصنوعة يدوياً على لوح العجن الخشبي ببطء وإتقان متوارث.',
    },
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'news-3',
    date: '2026-09-20',
    category: {
      it: 'Serata in Cantina',
      en: 'Wine & Cellar',
      ar: 'أمسية في قبو النبيذ',
    },
    title: {
      it: 'Serata Degustazione: Grandi Rossi di Toscana',
      en: 'Exclusive Tasting: The Great Tuscan Reserves',
      ar: 'أمسية تذوق حصرية: روائع المزارع التوسكانية المعتقة',
    },
    excerpt: {
      it: 'Una serata esclusiva a numero chiuso per scoprire le migliori annate di Brunello di Montalcino e Chianti Classico abbinate alla nostra Chianina.',
      en: 'An intimate evening discovering premier vintages of Brunello di Montalcino and Chianti Classico paired with our grilled Chianina cuts.',
      ar: 'أمسية دافئة لاستكشاف أرقى المزارع التوسكانية المعتقة، متناغمة مع لحم الكيانينا المشوي على جمر خشب البلوط.',
    },
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'news-4',
    date: '2026-09-05',
    category: {
      it: 'Pizzeria & Forno',
      en: 'Wood-Fired Pizza',
      ar: 'أسرار فرن الحطب',
    },
    title: {
      it: 'L Arte dell Impasto a 48 Ore con Farine Macinate a Pietra',
      en: 'The Secrets of 48-Hour Cold Dough Fermentation',
      ar: 'أسرار التخمير البطيء لمدة 48 ساعة وطحين الحجر',
    },
    excerpt: {
      it: 'Matteo condivide il segreto della digeribilità estrema della nostra pizza napoletana: lievito madre naturale, farina tipo 1 e maturazione paziente.',
      en: 'Matteo explains the secret behind our pizza s lightness and digestibility: natural sourdough starter, stone-ground flour, and patient cooling.',
      ar: 'يشرح ماتيو سر خفة وسهولة هضم البيتزا النابولية لدينا: خميرة طبيعية، طحين مطحون بالحجر، وتخمير بارد متأنٍ.',
    },
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'news-5',
    date: '2026-08-18',
    category: {
      it: 'Musica & Cena',
      en: 'Live Evenings',
      ar: 'موسيقى وأمسيات حية',
    },
    title: {
      it: 'Note Italiane: Serate di Jazz e Chitarra Acustica',
      en: 'Italian Notes: Acoustic Jazz & Dining Evenings',
      ar: 'نغمات إيطالية: أمسيات الجاز والموسيقى الحية الهادئة',
    },
    excerpt: {
      it: 'Ogni venerdì sera, il lume di candela e le note delicate del jazz acustico accompagnano la vostra cena nella nostra corte interna.',
      en: 'Every Friday evening, candlelight and soft acoustic Italian jazz set a warm, magical ambiance in our dining courtyard.',
      ar: 'في كل مساء جمعة، يمتزج ضوء الشموع الدافئ مع نغمات الجاز الصوتي الهادئ ليضفي سحراً خاصاً على مائدتكم.',
    },
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=800',
  },
];
