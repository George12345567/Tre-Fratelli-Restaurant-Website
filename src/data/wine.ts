import type { Drink, LocalizedText, WineCategory } from './types';

export const wineCategoryLabels: Record<WineCategory, LocalizedText> = {
  glass: {
    it: 'Vini al Calice',
    en: 'By the Glass',
    ar: 'مشروبات بالكأس',
  },
  sparkling: {
    it: 'Bollicine & Spumanti',
    en: 'Sparkling & Champagne',
    ar: 'الفوار والبروسيكو',
  },
  white: {
    it: 'Vini Bianchi',
    en: 'White Wines',
    ar: 'النبيذ الأبيض',
  },
  red: {
    it: 'Vini Rossi',
    en: 'Red Wines',
    ar: 'النبيذ الأحمر',
  },
  rose: {
    it: 'Vini Rosati',
    en: 'Rosé Wines',
    ar: 'النبيذ الوردي',
  },
  dessert: {
    it: 'Vini da Dessert & Passiti',
    en: 'Dessert & Sweet Wines',
    ar: 'نبيذ الحلوى',
  },
  beer: {
    it: 'Birre Artigianali Italiane',
    en: 'Italian Craft Beer',
    ar: 'البيرة الحرفية الإيطالية',
  },
  soft: {
    it: 'Bibite & Acque Minerali',
    en: 'Soft Drinks & Waters',
    ar: 'مشروبات منعشة ومياه معدنية',
  },
  coffee: {
    it: 'Caffetteria & Amari',
    en: 'Espresso & Amari',
    ar: 'الإسبريسو والمشروبات الهضمية',
  },
};

export const drinksData: Drink[] = [
  // ── Bollicine / Sparkling ──
  {
    id: 'spk-1',
    category: 'sparkling',
    name: 'Franciacorta Cuvée Prestige D.O.C.G. (Ca del Bosco)',
    region: 'Lombardia',
    price: '€65',
    pairing: {
      it: 'Ostriche Fine de Claire e crudi di mare',
      en: 'Fine de Claire oysters and raw seafood plateau',
      ar: 'محار فاين دي كلير وثمار البحر الطازجة',
    },
    image: '/images/wine/wine-cellar-tre-fratelli.jpg',
  },
  {
    id: 'spk-2',
    category: 'sparkling',
    name: 'Prosecco Superiore di Valdobbiadene D.O.C.G.',
    region: 'Veneto',
    price: '€34',
    pairing: {
      it: 'Burrata pugliese e antipasti leggeri',
      en: 'Pugliese burrata and light antipasti',
      ar: 'جبن بوراتا والمقبلات الخفيفة',
    },
  },
  {
    id: 'spk-3',
    category: 'sparkling',
    name: 'Ferrari Trento Brut Metodo Classico',
    region: 'Trentino',
    price: '€48',
    pairing: {
      it: 'Polpo croccante su crema di patate',
      en: 'Crispy octopus over saffron potato velouté',
      ar: 'الأخطبوط المقرمش مع كريمة البطاطس بالزعفران',
    },
  },

  // ── Vini Bianchi / White Wines ──
  {
    id: 'wht-1',
    category: 'white',
    name: 'Greco di Tufo D.O.C.G. (Feudi di San Gregorio)',
    region: 'Campania',
    price: '€36',
    pairing: {
      it: 'Calamarata Tre Fratelli con astice e frutti di mare',
      en: 'Tre Fratelli lobster calamarata and rich shellfish',
      ar: 'باستا الكالاماراتا مع الكركند وثمار البحر',
    },
  },
  {
    id: 'wht-2',
    category: 'white',
    name: 'Vermentino di Gallura Superiore D.O.C.G.',
    region: 'Sardegna',
    price: '€32',
    pairing: {
      it: 'Spigola di mare all acqua pazza',
      en: 'Wild Mediterranean sea bass all acqua pazza',
      ar: 'سمك القاروص البري بصلصة أكوا باتزا',
    },
  },
  {
    id: 'wht-3',
    category: 'white',
    name: 'Gewürztraminer Alto Adige D.O.C.',
    region: 'Trentino-Alto Adige',
    price: '€38',
    pairing: {
      it: 'Diavola con nduja e formaggi saporiti',
      en: 'Spicy nduja pizza and rich cheeses',
      ar: 'بيتزا ديافولا الحارة والأجبان الغنية',
    },
  },
  {
    id: 'wht-4',
    category: 'white',
    name: 'Lugana D.O.C. San Benedetto',
    region: 'Lombardia / Veneto',
    price: '€30',
    pairing: {
      it: 'Tartare di tonno rosso e crudi',
      en: 'Bluefin tuna tartare and raw seafood',
      ar: 'تارتار التونة الحمراء وثمار البحر',
    },
  },

  // ── Vini Rossi / Red Wines ──
  {
    id: 'red-1',
    category: 'red',
    name: 'Brunello di Montalcino D.O.C.G. (Biondi-Santi)',
    region: 'Toscana',
    price: '€110',
    pairing: {
      it: 'Bistecca alla Fiorentina di Chianina',
      en: 'Chianina Fiorentina T-bone steak over oak embers',
      ar: 'شريحة لحم فيورنتينا الفاخرة المشوية على الحطب',
    },
  },
  {
    id: 'red-2',
    category: 'red',
    name: 'Barolo Tradizionale D.O.C.G. (Pio Cesare)',
    region: 'Piemonte',
    price: '€95',
    pairing: {
      it: 'Tagliolini al tartufo nero e carni brasate',
      en: 'Tagliolini with black truffle and braised meats',
      ar: 'باستا تاليوليني بالكمأة السوداء واللحوم المطهوة ببطء',
    },
  },
  {
    id: 'red-3',
    category: 'red',
    name: 'Chianti Classico Riserva D.O.C.G.',
    region: 'Toscana',
    price: '€42',
    pairing: {
      it: 'Pappardelle al ragù di cinghiale e pizza speciale',
      en: 'Wild boar pappardelle and signature pizzas',
      ar: 'بابارديلي براغو اللحم والبيتزا الخاصة',
    },
  },
  {
    id: 'red-4',
    category: 'red',
    name: 'Primitivo di Manduria D.O.P. Riserva',
    region: 'Puglia',
    price: '€38',
    pairing: {
      it: 'Filetto al pepe verde e formaggi erborinati',
      en: 'Beef tenderloin with green pepper and aged cheeses',
      ar: 'فيليه العجل بالفلفل الأخضر والأجبان المعتقة',
    },
  },

  // ── Rosati / Rosé ──
  {
    id: 'ros-1',
    category: 'rose',
    name: 'Cerasuolo d Abruzzo Superiore D.O.C.',
    region: 'Abruzzo',
    price: '€28',
    pairing: {
      it: 'Margherita Verace D.O.P. e antipasti di terra',
      en: 'Traditional Margherita D.O.P. and cured meats',
      ar: 'بيتزا مارغريتا الأصلية والمقبلات الإيطالية',
    },
  },

  // ── Vini da Dessert ──
  {
    id: 'des-1',
    category: 'dessert',
    name: 'Passito di Pantelleria D.O.C. Ben Ryé (Donnafugata)',
    region: 'Sicilia',
    price: '€55',
    pairing: {
      it: 'Cannolo siciliano scomposto e dolci al cioccolato',
      en: 'Deconstructed Sicilian cannolo and dark chocolate',
      ar: 'الكانولو الصقلي وحلويات الشوكولاتة الداكنة',
    },
  },
  {
    id: 'des-2',
    category: 'dessert',
    name: 'Moscato d Asti D.O.C.G.',
    region: 'Piemonte',
    price: '€26',
    pairing: {
      it: 'Panna cotta alla vaniglia bourbon',
      en: 'Bourbon vanilla panna cotta with wild berries',
      ar: 'بان كوتا فانيليا البوربون مع التوت البري',
    },
  },

  // ── Al Calice / By the Glass ──
  {
    id: 'gls-1',
    category: 'glass',
    name: 'Prosecco Superiore D.O.C.G. (Calice)',
    region: 'Veneto',
    price: '€7',
    pairing: {
      it: 'Aperitivo di benvenuto della casa',
      en: 'House welcoming aperitivo',
      ar: 'مشروب ترحيبي في بداية الوجبة',
    },
    image: '/images/wine/cocktails-aperitivo-tre-fratelli.jpg',
  },
  {
    id: 'gls-2',
    category: 'glass',
    name: 'Vermentino di Sardegna (Calice)',
    region: 'Sardegna',
    price: '€8',
    pairing: {
      it: 'Antipasti di mare e verdure',
      en: 'Seafood starters and fresh vegetables',
      ar: 'مقبلات ثمار البحر والخضار الطازجة',
    },
  },
  {
    id: 'gls-3',
    category: 'glass',
    name: 'Chianti Classico D.O.C.G. (Calice)',
    region: 'Toscana',
    price: '€9',
    pairing: {
      it: 'Primi piatti e pizze rustiche',
      en: 'Fresh pasta dishes and artisanal pizza',
      ar: 'أطباق الباستا الطازجة والبيتزا الريفية',
    },
  },

  // ── Birre Artigianali ──
  {
    id: 'bee-1',
    category: 'beer',
    name: 'Birra Artigianale Bionda Tre Fratelli (0.33L)',
    region: 'Lombardia',
    price: '€7',
    pairing: {
      it: 'Margherita Verace e pizza con salame',
      en: 'Margherita pizza and cured salami toppings',
      ar: 'بيتزا مارغريتا والبيتزا بأنواعها',
    },
  },
  {
    id: 'bee-2',
    category: 'beer',
    name: 'Birra Rossa Doppio Malto Tradizionale (0.33L)',
    region: 'Piemonte',
    price: '€8',
    pairing: {
      it: 'Calzone napoletano e carni alla brace',
      en: 'Neapolitan calzone and grilled meats',
      ar: 'الكالتزوني النابولي واللحوم المشوية',
    },
  },

  // ── Soft Drinks ──
  {
    id: 'sft-1',
    category: 'soft',
    name: 'Acqua San Pellegrino / Panna (0.75L)',
    region: 'Italia',
    price: '€4.5',
    pairing: {
      it: 'Perfetta per accompagnare ogni piatto',
      en: 'Ideal throughout every dining course',
      ar: 'مثالية طوال مراحل الوجبة',
    },
  },
  {
    id: 'sft-2',
    category: 'soft',
    name: 'Limonata Sanpellegrino Bio con Limoni Siciliani',
    region: 'Sicilia',
    price: '€5',
    pairing: {
      it: 'Rinfrescante e naturale',
      en: 'Refreshing and aromatic palate cleanser',
      ar: 'ليموناضة طبيعية منعشة ومثالية مع الطعام',
    },
  },

  // ── Caffetteria & Amari ──
  {
    id: 'cof-1',
    category: 'coffee',
    name: 'Espresso Italiano Artigianale Tostato a Legna',
    region: 'Torrefazione Napoletana',
    price: '€3',
    pairing: {
      it: 'Tiramisù della casa',
      en: 'Tre Fratelli house tiramisù',
      ar: 'تيراميسو تري فراتيلي المنزلي',
    },
  },
  {
    id: 'cof-2',
    category: 'coffee',
    name: 'Amaro del Capo / Limoncello di Sorrento Artigianale',
    region: 'Calabria / Campania',
    price: '€6',
    pairing: {
      it: 'Digestivo perfetto per chiudere il pasto',
      en: 'The classic Italian digestive conclusion',
      ar: 'المشروب الهضمي الإيطالي التقليدي بعد الوجبة',
    },
  },
];
