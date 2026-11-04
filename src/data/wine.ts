import type { Drink, LocalizedText, WineCategory } from './types';

export const wineCategoryLabels: Record<WineCategory, LocalizedText> = {
  glass: {
    it: 'Vino della Casa & Calice',
    en: 'House Wine & By the Glass',
    ar: 'نبيذ الدار ومشروبات بالكأس',
  },
  sparkling: {
    it: 'Spumanti & Bollicine',
    en: 'Sparkling & Spumanti',
    ar: 'النبيذ الفوار والبروسيكو',
  },
  white: {
    it: 'Vini Bianchi Selezionati',
    en: 'Selected White Wines',
    ar: 'مختارات النبيذ الأبيض',
  },
  red: {
    it: 'Vini Rossi & Grandi Riserve',
    en: 'Red Wines & Riserve',
    ar: 'مختارات النبيذ الأحمر',
  },
  rose: {
    it: 'Vini Rosati',
    en: 'Rosé Wines',
    ar: 'النبيذ الوردي',
  },
  dessert: {
    it: 'Vini da Dessert',
    en: 'Dessert Wines',
    ar: 'نبيذ الحلوى',
  },
  beer: {
    it: 'Birre alla Spina & Artigianali',
    en: 'Draft & Bottled Craft Beers',
    ar: 'البيرة الإيطالية الحرفية وعلى الصنبور',
  },
  soft: {
    it: 'Bibite & Acqua Minerale',
    en: 'Soft Drinks & Mineral Water',
    ar: 'المشروبات الغازية والمياه المعدنية',
  },
  coffee: {
    it: 'Caffetteria & Amari Nostrani',
    en: 'Espresso & Digestivi',
    ar: 'الإسبريسو والمشروبات الهضمية الإيطالية',
  },
};

export const drinksData: Drink[] = [
  // ── Spumanti / Bollicine ──
  {
    id: 'spk-1',
    category: 'sparkling',
    name: 'Valdobbiadene Prosecco Superiore - Bortolomiol',
    region: 'Veneto D.O.C.G.',
    price: '€25,00',
    pairing: {
      it: 'Crudité di pesce, ostriche e fritti misti dorati',
      en: 'Fresh oysters, raw seafood plateau and crispy fritto misto',
      ar: 'محار طازج، بلاتوه ثمار البحر النيئة، وفريتو ميستو مقرمش',
    },
    image: '/images/wine/wine-cellar-tre-fratelli.jpg',
  },
  {
    id: 'spk-2',
    category: 'sparkling',
    name: 'Spumante Rosé - Vigneti Puglia',
    region: 'Puglia',
    price: '€18,00',
    pairing: {
      it: 'Tartare di gamberi rossi e bruschette di mare',
      en: 'Red prawn tartare and seafood bruschette',
      ar: 'تارتار الروبيان الأحمر وبروسكيتا ثمار البحر',
    },
  },

  // ── Vini Bianchi ──
  {
    id: 'wht-1',
    category: 'white',
    name: 'Falanghina del Sannio D.O.C.',
    region: 'Campania',
    price: '€20,00',
    pairing: {
      it: 'Spaghetti allo scoglio e orata alla griglia',
      en: 'Spaghetti allo scoglio and grilled sea bream',
      ar: 'سباغيتي آلو سكوليو وسمك الدنيس المشوي',
    },
  },
  {
    id: 'wht-2',
    category: 'white',
    name: 'Greco di Tufo D.O.C.G.',
    region: 'Campania',
    price: '€20,00',
    pairing: {
      it: 'Paccheri all’astice e carpaccio di orata con lime',
      en: 'Lobster paccheri and sea bream carpaccio with lime',
      ar: 'باكيري الكركند وكارباتشيو الدنيس باللايم',
    },
  },
  {
    id: 'wht-3',
    category: 'white',
    name: 'Vermentino di San Santo D.O.C.',
    region: 'Sardegna',
    price: '€22,00',
    pairing: {
      it: 'Branzino sotto sale e fritto misto di mare',
      en: 'Salt-crusted sea bass and crispy mixed fried seafood',
      ar: 'سمك القاروص بملح البحر والمقليات البحرية الذهبية',
    },
  },
  {
    id: 'wht-4',
    category: 'white',
    name: 'Chardonnay I.G.T.',
    region: 'Trentino - Alto Adige',
    price: '€20,00',
    pairing: {
      it: 'Risotto con capesante e fior di zucca',
      en: 'Scallops and zucchini blossom risotto',
      ar: 'ريزوتو صدف الكابيسانتي وزهور الكوسا',
    },
  },
  {
    id: 'wht-5',
    category: 'white',
    name: 'Sauvignon Blanc D.O.C.',
    region: 'Friuli Venezia Giulia',
    price: '€20,00',
    pairing: {
      it: 'Tagliolini al salmone e scampi alla griglia',
      en: 'Salmon tagliolini and grilled langoustines',
      ar: 'تاليوليني السلمون والكركند المشوي على الفحم',
    },
  },
  {
    id: 'wht-6',
    category: 'white',
    name: 'Pinot Nero Vinificato in Bianco',
    region: 'Oltrepò Pavese',
    price: '€22,00',
    pairing: {
      it: 'Barca di fritti e antipasti caldi di mare',
      en: 'Crispy fried seafood boat and warm starters',
      ar: 'سفينة المقالي البحرية والمقبلات الدافئة',
    },
  },
  {
    id: 'wht-7',
    category: 'white',
    name: 'Fiano d’Avellino - San Nicola D.O.C.G.',
    region: 'Campania',
    price: '€20,00',
    pairing: {
      it: 'La Grande Barca di Pesce Tre Fratelli',
      en: 'The Grand Tre Fratelli Seafood Ship',
      ar: 'سفينة تري فراتيلي البحرية الملكية الكبرى',
    },
  },
  {
    id: 'wht-8',
    category: 'white',
    name: 'Sannio Greco - Janare D.O.P.',
    region: 'Campania',
    price: '€20,00',
    pairing: {
      it: 'Calamarata con granchio e gamberetti',
      en: 'Calamarata with crab and baby shrimp',
      ar: 'كالاماراتا السلطعون والروبيان والطماطم الكرزية',
    },
  },

  // ── Vini Rossi ──
  {
    id: 'red-1',
    category: 'red',
    name: 'Taurasi D.O.C.G. - Urciolo (Riserva Nobile)',
    region: 'Campania',
    price: '€45,00',
    pairing: {
      it: 'Fiorentina alla brace e tagliata ai porcini',
      en: 'Fiorentina T-bone steak and sliced porcini beef',
      ar: 'شريحة فيورنتينا تي بون وتالية اللحم بفطر البورشيني',
    },
  },
  {
    id: 'red-2',
    category: 'red',
    name: 'Irpinia Aglianico Barolo D.O.C.',
    region: 'Campania',
    price: '€35,00',
    pairing: {
      it: 'Grigliata mista di carne x2 e filetto al pepe verde',
      en: 'Grand butcher’s grill and green peppercorn tenderloin',
      ar: 'مشاوي اللحوم المشكلة لشخصين وفيليه الفلفل الأخضر',
    },
  },
  {
    id: 'red-3',
    category: 'red',
    name: 'Chianti Riserva D.O.C.G.',
    region: 'Toscana',
    price: '€21,00',
    pairing: {
      it: 'Orecchia d’elefante con mortadella e burrata, tagliata rucola e grana',
      en: 'Giant mortadella & burrata schnitzel, sliced sirloin with rocket',
      ar: 'أوريكيا ديليفانتي بالمورتاديلا والبوراتا وتالية اللحم بالجرجير',
    },
  },
  {
    id: 'red-4',
    category: 'red',
    name: 'Valpolicella D.O.C. Classico',
    region: 'Veneto',
    price: '€22,00',
    pairing: {
      it: 'Carbonara con guanciale e calamarata al ragù',
      en: 'Carbonara with crispy guanciale and Bolognese calamarata',
      ar: 'كاربونارا الغوانشالي وكالاماراتا الراغو البولوني',
    },
  },
  {
    id: 'red-5',
    category: 'red',
    name: 'Barbera d’Alba D.O.C.',
    region: 'Piemonte',
    price: '€20,00',
    pairing: {
      it: 'Costata alla griglia da 500g e salsiccia alla brace',
      en: '500g bone-in ribeye steak and grilled artisan sausage',
      ar: 'كوستاتا لحم بقري 500 غرام وسجق إيطالي مشوي',
    },
  },
  {
    id: 'red-6',
    category: 'red',
    name: 'Barbera d’Asti D.O.C.G.',
    region: 'Piemonte',
    price: '€20,00',
    pairing: {
      it: 'Arrosticini d’agnello e costelette alla brace',
      en: 'Abruzzese lamb skewers and grilled lamb chops',
      ar: 'أسياخ أروستيشيني لحم الضأن وريش الضأن المشوية',
    },
  },
  {
    id: 'red-7',
    category: 'red',
    name: 'Primitivo di Manduria D.O.P.',
    region: 'Puglia',
    price: '€20,00',
    pairing: {
      it: 'Pizza Tre Fratelli e Pizze con Salame Piccante / Diavola',
      en: 'Pizza Tre Fratelli, spicy salami diavola and nduja pizzas',
      ar: 'بيتزا تري فراتيلي وبيتزا ديافولا بالسلامي الحار والندوجا',
    },
  },
  {
    id: 'red-8',
    category: 'red',
    name: 'Nero d’Avola D.O.C.',
    region: 'Sicilia',
    price: '€23,00',
    pairing: {
      it: 'Gnocchi ai 4 formaggi e tartufo, tagliata con cipolle caramellate',
      en: 'Four-cheese truffle gnocchi and sliced beef with balsamic onions',
      ar: 'غنوكي الأجبان الأربعة والكمأة وتالية اللحم بالبصل المكرمل',
    },
  },
  {
    id: 'red-9',
    category: 'red',
    name: 'Dolcetto d’Alba D.O.C.',
    region: 'Piemonte',
    price: '€20,00',
    pairing: {
      it: 'Tagliere di salumi e formaggi con gnocco fritto',
      en: 'Cured meats and cheese sharing board with fried gnocco',
      ar: 'لوح اللحوم والأجبان الإيطالية مع خبز غنوكو المقلي',
    },
  },
  {
    id: 'red-10',
    category: 'red',
    name: 'Bonarda Frizzante - Le Cascine D.O.C.',
    region: 'Lombardia',
    price: '€20,00',
    pairing: {
      it: 'Pizza al Metro, salsiccia e patatine',
      en: 'One-meter family pizza and Italian sausage',
      ar: 'بيتزا المتر العائلية وسجق إيطالي بالبطاطس المقرمشة',
    },
  },
  {
    id: 'red-11',
    category: 'red',
    name: 'Lacryma Christi del Vesuvio Rosso D.O.C. - Nocerino',
    region: 'Campania',
    price: '€18,00',
    pairing: {
      it: 'Margherita Verace D.O.P. e pizze al forno a legna',
      en: 'Authentic Neapolitan wood-fired Margherita pizza',
      ar: 'بيتزا مارغريتا الأصلية وكافة أنواع بيتزا فرن الحطب',
    },
  },
  {
    id: 'red-12',
    category: 'red',
    name: 'Pompeiano Frizzante - Agustea I.G.T.',
    region: 'Campania',
    price: '€18,00',
    pairing: {
      it: 'Pizze saporite con scamorza, speck e porcini',
      en: 'Hearty pizzas with scamorza, speck and porcini',
      ar: 'البيتزا الغنية بجبن سكامورزا المدخن وفطر البورشيني',
    },
  },
  {
    id: 'red-13',
    category: 'red',
    name: 'Magliuolo - Casavecchia I.G.T.',
    region: 'Campania',
    price: '€18,00',
    pairing: {
      it: 'Filetto di manzo alla griglia e burger gourmet',
      en: 'Grilled beef tenderloin and gourmet Cicco burger',
      ar: 'فيليه لحم بقري مشوي وبرغر تشيكو الذواقة',
    },
  },

  // ── Vino Rosato ──
  {
    id: 'ros-1',
    category: 'rose',
    name: 'Rosato del Salento I.G.T.',
    region: 'Puglia',
    price: '€20,00',
    pairing: {
      it: 'Insalatona D’Amore e carpacci di mare freschi',
      en: 'Seafood Insalatona D’Amore and chilled carpaccios',
      ar: 'سلطة ديل أموري البحرية وكارباتشيو الأسماك الطازجة',
    },
  },

  // ── Vino della Casa (By the Glass / Carafe) ──
  {
    id: 'gls-1',
    category: 'glass',
    name: 'Vino della Casa Rosso o Bianco (1 Litro)',
    region: 'Cantina Tre Fratelli',
    price: '€12,00',
    pairing: {
      it: 'Ideale per cene conviviali e pizza in compagnia',
      en: 'Perfect for sharing with pizza and family dinners',
      ar: 'مثالي للمشاركة مع أطباق البيتزا ووجبات العائلة',
    },
  },
  {
    id: 'gls-2',
    category: 'glass',
    name: 'Vino della Casa Rosso o Bianco (1/2 Litro)',
    region: 'Cantina Tre Fratelli',
    price: '€6,00',
    pairing: {
      it: 'Accompagna primi piatti e antipasti di terra',
      en: 'Pairs nicely with pasta dishes and classic antipasti',
      ar: 'يناسب أطباق الباستا الإيطالية والمقبلات',
    },
  },
  {
    id: 'gls-3',
    category: 'glass',
    name: 'Vino della Casa Rosso o Bianco (1/4 Litro)',
    region: 'Cantina Tre Fratelli',
    price: '€3,00',
    pairing: {
      it: 'Ottimo per un pranzo o una cena leggera individuale',
      en: 'Great individual carafe for lunch or dinner',
      ar: 'إبريق فردي مثالي لوجبة الغداء أو العشاء الخفيف',
    },
  },

  // ── Birre (Draft & Craft Beers) ──
  {
    id: 'beer-1',
    category: 'beer',
    name: 'Birra alla Spina Bionda (Media)',
    region: 'Italia',
    price: '€5,00',
    pairing: {
      it: 'Inclusa nella formula Giro Pizza e perfetta con tutte le pizze',
      en: 'Included in Giro Pizza and ideal for any wood-fired pizza',
      ar: 'مشمولة في عرض جيرو بيتزا وتناسب جميع أنواع البيتزا',
    },
  },
  {
    id: 'beer-2',
    category: 'beer',
    name: 'Birra alla Spina Bionda (Piccola)',
    region: 'Italia',
    price: '€3,00',
    pairing: {
      it: 'Rinfrescante con cotoletta e patatine fry’n dip',
      en: 'Refreshing with veal cutlet and crispy fries',
      ar: 'منعشة مع شرائح اللحم والبطاطس المقرمشة',
    },
  },
  {
    id: 'beer-3',
    category: 'beer',
    name: 'Birra alla Spina Rossa Doppio Malto (40 cl)',
    region: 'Italia',
    price: '€7,00',
    pairing: {
      it: 'Corposa, eccellente con carni alla brace e pizza 4 Salumi',
      en: 'Full-bodied malt, excellent with charcoal grilled steaks and spicy meats',
      ar: 'غنية وقوية، ممتازة مع مشاوي الفحم وبيتزا اللحوم الأربعة',
    },
  },
  {
    id: 'beer-4',
    category: 'beer',
    name: 'Birra alla Spina Rossa (20 cl)',
    region: 'Italia',
    price: '€4,00',
    pairing: {
      it: 'Ottima con hamburger gourmet e salsiccia alla griglia',
      en: 'Great with artisan burgers and Italian grilled sausages',
      ar: 'رائعة مع البرغر الذواقة والسجق الإيطالي المشوي',
    },
  },
  {
    id: 'beer-5',
    category: 'beer',
    name: 'Franziskaner Weissbier (Bottiglia)',
    region: 'Germania / Tradizione',
    price: '€7,00',
    pairing: {
      it: 'Aromatica e torbida, sublime con fritture e pizze rustiche',
      en: 'Cloudy wheat beer, sublime with fritto misto and rustic pizza',
      ar: 'بيرة القمح العطرية، رائعة مع المقليات والبيتزا الريفية',
    },
  },
  {
    id: 'beer-6',
    category: 'beer',
    name: 'Birra Menabrea Strong Biella 33 cl (Alc. 8%)',
    region: 'Piemonte - Biella',
    price: '€6,00',
    pairing: {
      it: 'Doppio malto intensa, sposa tagliate di manzo e formaggi stagionati',
      en: 'Intense 8% double malt, pairs with prime beef steaks and aged cheese',
      ar: 'دوبل مالت إيطالية قوية 8%، تناسب شرائح اللحم والأجبان المعتقة',
    },
  },
  {
    id: 'beer-7',
    category: 'beer',
    name: 'Ichnusa Non Filtrata di Sardegna (Bottiglia)',
    region: 'Sardegna',
    price: '€6,00',
    pairing: {
      it: 'Cruda e dorata, amata con calzoni e grigliate di pesce',
      en: 'Unfiltered golden Sardinian lager, beloved with calzoni and grilled fish',
      ar: 'بيرة سردينيا الذهبية غير المفلترة، مثالية مع الكالتزوني ومشاوي الأسماك',
    },
  },
  {
    id: 'beer-8',
    category: 'beer',
    name: 'Birra Moretti Tradizionale (Bottiglia 66 cl)',
    region: 'Italia',
    price: '€4,00',
    pairing: {
      it: 'Formato classico conviviale da condividere con la pizza',
      en: 'Classic 66 cl bottle for sharing around the pizza table',
      ar: 'الزجاجة الكلاسيكية الكبيرة 66 سل للمشاركة مع البيتزا',
    },
  },

  // ── Soft Drinks & Acque Minerali ──
  {
    id: 'sft-1',
    category: 'soft',
    name: 'Bibita in Vetro (Coca Cola / Coca Zero / Fanta / Sprite)',
    region: 'Bottiglietta di Vetro',
    price: '€3,50',
    pairing: {
      it: 'Servita ghiacciata con fetta di limone',
      en: 'Served ice-cold with fresh lemon slice',
      ar: 'تُقدم مثلجة مع شريحة ليمون طازجة',
    },
  },
  {
    id: 'sft-2',
    category: 'soft',
    name: 'Bibita in Lattina 33 cl (Coca Cola / Zero / Fanta / Sprite)',
    region: 'Lattina 33 cl',
    price: '€2,50',
    pairing: {
      it: 'Dissetante e fresca con qualsiasi portata',
      en: 'Refreshing with any meal',
      ar: 'منعشة ولذيذة مع كافة الأطباق',
    },
  },
  {
    id: 'sft-3',
    category: 'soft',
    name: 'Acqua Minerale Naturale o Frizzante (75 cl)',
    region: 'Sorgente Italiana',
    price: '€4,00',
    pairing: {
      it: 'Acqua pura microfiltrata in bottiglia di vetro',
      en: 'Pure Italian mineral water in glass bottle',
      ar: 'مياه معدنية إيطالية نقية طبيعية أو فوارة (75 سل)',
    },
  },
  {
    id: 'sft-4',
    category: 'soft',
    name: 'Acqua Minerale Naturale o Frizzante (50 cl)',
    region: 'Sorgente Italiana',
    price: '€2,00',
    pairing: {
      it: 'Formato personale fresco',
      en: 'Personal fresh chilled bottle',
      ar: 'زجاجة مياه معدنية فردية منعشة (50 سل)',
    },
  },

  // ── Caffetteria & Amari Nostrani ──
  {
    id: 'cof-1',
    category: 'coffee',
    name: 'Caffè Espresso Tradizionale Napoletano',
    region: 'Torrefazione a Legna',
    price: '€1,50',
    pairing: {
      it: 'Miscela densa e cremosa, chiusura perfetta dopo il dessert',
      en: 'Rich creamy Neapolitan espresso, the perfect dessert conclusion',
      ar: 'إسبريسو نابولي كثيف ومخملي، الختام الأمثل بعد الحلوى',
    },
  },
  {
    id: 'cof-2',
    category: 'coffee',
    name: 'Selezione Amari & Digestivi della Tradizione',
    region: 'Erbe Alpine e Agrumi del Sud',
    price: '€4,00',
    pairing: {
      it: 'Limoncello artigianale di Sorrento, Amaro del Capo, Montenegro e Grappe',
      en: 'Sorrento limoncello, Amaro del Capo, Montenegro, Lucano, and Italian Grappa',
      ar: 'ليمونسيلو سورينتو الحرفي، أمارو ديل كابو، مونتينيغرو وغرابا إيطالية هاضمة',
    },
  },
];
