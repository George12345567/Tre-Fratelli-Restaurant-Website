import type { NewsPost } from './types';

export const newsData: NewsPost[] = [
  {
    id: 'event-karaoke',
    type: 'music',
    featured: true,
    date: '2026-10-30',
    scheduleBadge: {
      it: 'Ogni Fine Settimana · Date & Artisti in arrivo',
      en: 'Every Weekend · Specific Dates Coming Soon',
      ar: 'كل عطلة نهاية أسبوع · المواعيد وقائمة الفنانين قريباً',
    },
    badge: {
      it: 'Grande Festa',
      en: 'Festive Night',
      ar: 'سهرة مبهجة',
    },
    category: {
      it: 'Musica & Karaoke',
      en: 'Music & Karaoke',
      ar: 'سهرات الكاراوكي والموسيقى',
    },
    title: {
      it: 'Serata Karaoke & Musica dal Vivo: La Grande Festa di Tre Fratelli',
      en: 'Live Music & Karaoke Night: The Big Tre Fratelli Celebration',
      ar: 'سهرة الكاراوكي والموسيقى الحية: احتفال وبهجة تري فراتيلي الإيطالية',
    },
    excerpt: {
      it: 'Canta i grandi classici italiani e internazionali tra pizze fumanti a legna, drink e allegria travolgente. Un appuntamento imperdibile per festeggiare in compagnia a Trezzano sul Naviglio.',
      en: 'Sing timeless Italian and international anthems amidst smoking wood-fired pizzas, craft drinks, and infectious cheer. Trezzano sul Naviglio’s ultimate festive dinner.',
      ar: 'غنّوا معاً أروع الكلاسيكيات الإيطالية والعالمية وسط أشهى بيتزا فرن الحطب والمشروبات والأجواء المبهجة. الوجهة المثالية للاحتفال والمرح في تريزانو سول نافيليو.',
    },
    highlights: [
      {
        it: 'Impianto audio e microfoni professionali per tutti',
        en: 'Pro sound system and wireless microphones for all guests',
        ar: 'معدات صوت وميكروفونات لاسلكية احترافية لجميع الضيوف',
      },
      {
        it: 'Grandi classici italiani, Sanremo e hit internazionali',
        en: 'Sanremo hits, Italian classics & global crowd-pleasers',
        ar: 'أغاني مهرجان سانريمو وروائع الكلاسيكيات والألحان العالمية',
      },
      {
        it: 'Pizze al forno a legna, piatti abbondanti e cocktail',
        en: 'Wood-fired pizzas, generous platters and craft drinks',
        ar: 'بيتزا فرن الحطب وأطباق وفيرة ومشروبات منعشة طوال السهرة',
      },
      {
        it: 'Parcheggio privato gratuito riservato sul posto',
        en: 'Spacious on-site private parking completely free',
        ar: 'موقف سيارات خاص ومجاني ملحق بالمطعم لراحة الضيوف',
      },
    ],
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'event-acoustic',
    type: 'music',
    date: '2026-11-06',
    scheduleBadge: {
      it: 'Serate Intime · Programmazione in corso',
      en: 'Intimate Evenings · Schedule in progress',
      ar: 'أمسيات رومانسية هادئة · المواعيد قريباً',
    },
    badge: {
      it: 'Al Lume di Candela',
      en: 'Candlelight',
      ar: 'على ضوء الشموع',
    },
    category: {
      it: 'Musica dal Vivo',
      en: 'Live Music',
      ar: 'موسيقى وأمسيات حية',
    },
    title: {
      it: 'Note Italiane: Serate di Jazz Acustico & Chitarra',
      en: 'Italian Notes: Acoustic Jazz & Candlelight Dining Evenings',
      ar: 'نغمات إيطالية: أمسيات الجاز الصوتي والجيتار على ضوء الشموع',
    },
    excerpt: {
      it: 'Il fascino del lume di candela e le note delicate della musica acustica italiana accompagnano cene romantiche e momenti speciali nella nostra sala accogliente.',
      en: 'Candlelight romance and gentle acoustic melodies accompany intimate dinners and fine wine pairings in our warm dining ambiance.',
      ar: 'سحر ضوء الشموع الدافئ مع نغمات الجاز الصوتي الإيطالي الهادئ يضفي رونقاً رومانسياً استثنائياً على عشاء شخصين أو اللقاءات الراقية.',
    },
    highlights: [
      {
        it: 'Chitarra acustica e jazz d autore dal vivo',
        en: 'Live acoustic guitar & Italian jazz standards',
        ar: 'عزف حي على الجيتار الصوتي وموسيقى الجاز الراقية',
      },
      {
        it: 'Abbinamento con vini selezionati dalla nostra cantina',
        en: 'Curated wine pairings from our cellar',
        ar: 'مواءمة مع أفضل أصول قبو المشروبات الإيطالية',
      },
    ],
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'event-pasta-masterclass',
    type: 'masterclass',
    date: '2026-11-14',
    scheduleBadge: {
      it: 'Posti Limitati · Calendario in aggiornamento',
      en: 'Limited Seats · Calendar updating soon',
      ar: 'مقاعد محدودة · جدول المواعيد قريباً',
    },
    badge: {
      it: 'Laboratorio Pratico',
      en: 'Hands-on Workshop',
      ar: 'ورشة تطبيقية عملية',
    },
    category: {
      it: 'Masterclass di Cucina',
      en: 'Cooking Masterclass',
      ar: 'ورش الطهي والباستا',
    },
    title: {
      it: 'L Arte della Pasta Tirata a Mano al Bronzo con Chef Marco',
      en: 'Handmade Bronze-Extruded Pasta Masterclass with Chef Marco',
      ar: 'ورشة عمل فنون الباستا الطازجة وسحب البرونز مع الشيف ماركو',
    },
    excerpt: {
      it: 'Impara i segreti dell impasto all uovo sulla spianatoia in legno, la stesura a matterello e la trafilatura al bronzo, seguita da una degustazione conviviale di tutti i piatti creati.',
      en: 'Learn the secrets of golden egg pasta dough rolled on the wooden board, followed by a celebratory communal dinner enjoying the fresh pasta creations.',
      ar: 'تعلموا أسرار عجينة البيض الذهبية على لوح الخشب التقليدي وفنون سحب البرونز، وتختتم الورشة بمائدة عشاء جماعية لتذوق ما صنعتموه.',
    },
    highlights: [
      {
        it: 'Postazione singola completa e ricettario dei fratelli',
        en: 'Individual work station, apron and secret brothers recipe booklet',
        ar: 'محطة عمل مجهزة ومريلة شيف وكتيب وصفات الإخوة الثلاثة',
      },
      {
        it: 'Cena degustazione finale con calice di vino incluso',
        en: 'Full tasting dinner with paired wine glass included',
        ar: 'عشاء تذوق ختامي مع مشروب مختار مشمول بالورشة',
      },
    ],
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'event-pizza-masterclass',
    type: 'masterclass',
    date: '2026-11-21',
    scheduleBadge: {
      it: 'Esperienza Pratica · Calendario in definizione',
      en: 'Practical Experience · Dates being finalized',
      ar: 'تجربة تطبيقية حية · المواعيد قيد الاعتماد',
    },
    badge: {
      it: 'Forno a Legna',
      en: 'Wood-Fired Hearth',
      ar: 'فرن الحطب المباشر',
    },
    category: {
      it: 'Forno & Pizzeria',
      en: 'Pizza Craft',
      ar: 'أسرار فرن الحطب',
    },
    title: {
      it: 'Pizzaiolo per un Giorno: Impasto a 48 Ore & Forno a Legna con Matteo',
      en: 'Pizzaiolo for a Day: 48-Hour Cold Dough & Wood Fire with Matteo',
      ar: 'بيتزايولو ليوم كامل: أسرار التخمير لـ 48 ساعة وفرن الحطب مع ماتيو',
    },
    excerpt: {
      it: 'Scopri come gestire il lievito madre naturale, la maturazione a freddo, la stesura a mano e la cottura nel forno a legna a oltre 400°C. Inforna e gusta la tua pizza.',
      en: 'Master natural sourdough starter, 48-hour cold fermentation, hand stretching, and baking inside our 400°C wood-fired oven.',
      ar: 'اكتشفوا التعامل مع الخميرة الطبيعية والتخمير البطيء لـ 48 ساعة وتقنية الفرد اليدوي والخبز داخل فرن الحطب بدرجة تفوق 400 مئوية.',
    },
    highlights: [
      {
        it: 'Tecniche di lievitazione naturale e idratazione avanzata',
        en: 'Natural sourdough culture & high hydration techniques',
        ar: 'تقنيات التخمير الطبيعي المتقدم ونسب الترطيب العالية',
      },
      {
        it: 'Cottura diretta nel forno a legna di Trezzano',
        en: 'Direct baking in our authentic wood oven',
        ar: 'تجربة خبز مباشرة وممتعة داخل فرن الحطب الأصلي',
      },
    ],
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'event-truffle',
    type: 'tasting',
    date: '2026-11-28',
    scheduleBadge: {
      it: 'Serata Esclusiva · Date autunnali in arrivo',
      en: 'Exclusive Evening · Autumn dates coming soon',
      ar: 'أمسية حصرية فاخرة · مواعيد الموسم قريباً',
    },
    badge: {
      it: 'Prestigio Gourmet',
      en: 'Gourmet Prestige',
      ar: 'تجربة ذواقة فاخرة',
    },
    category: {
      it: 'Menu Stagionale',
      en: 'Seasonal Tasting',
      ar: 'قائمة الموسم الخاصة',
    },
    title: {
      it: 'La Settimana del Tartufo Bianco d Alba & I Grandi Barolo',
      en: 'Alba White Truffle Week & Historic Barolo Pairings',
      ar: 'أسبوع الكمأة البيضاء من ألبا في تري فراتيلي وروائع البارولو',
    },
    excerpt: {
      it: 'Un percorso degustazione in cinque portate dedicato al pregiato tartufo bianco piemontese lamellato al momento, con grandi etichette selezionate da Luca.',
      en: 'A five-course tasting journey honoring Piedmont s prized white truffle shaved tableside, paired with prestigious vintages of Barolo and Nebbiolo.',
      ar: 'رحلة تذوق من خمسة أطباق مخصصة للكمأة البيضاء الفاخرة من بيدمونت تُبشر طازجة على طاولتكم، مع مواءمة راقية للمشروبات الإيطالية التاريخية.',
    },
    highlights: [
      {
        it: '5 portate gourmet con tartufo bianco fresco lamellato al tavolo',
        en: '5 gourmet courses with fresh white truffle shaved tableside',
        ar: '5 أطباق ذواقة فاخرة مع شرائح الكمأة البيضاء تبشر أمامكم',
      },
      {
        it: 'Abbinamento con prestigiose riserve piemontesi',
        en: 'Paired with renowned Piedmont reserve vintages',
        ar: 'مواءمة دقيقة مع أعرق المزارع المعتقة من إقليم بيدمونت',
      },
    ],
    image: 'https://images.unsplash.com/photo-1414235077428-33898f82204c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'event-tuscan',
    type: 'tasting',
    date: '2026-12-05',
    scheduleBadge: {
      it: 'Su Prenotazione · Dettagli in arrivo',
      en: 'By Reservation · Details coming soon',
      ar: 'بالحجز المسبق · تفاصيل المواعيد قريباً',
    },
    badge: {
      it: 'Brace & Riserve',
      en: 'Charcoal & Reserves',
      ar: 'جمر وخمائر معتقة',
    },
    category: {
      it: 'Degustazione & Cantina',
      en: 'Wine & Cellar',
      ar: 'أمسية في قبو النبيذ',
    },
    title: {
      it: 'Grandi Rossi di Toscana & Tagli Scelti di Chianina alla Brace',
      en: 'The Great Tuscan Reserves & Oak-Embers Grilled Chianina Cuts',
      ar: 'روائع المزارع التوسكانية المعتقة ولحوم الكيانينا على جمر البلوط',
    },
    excerpt: {
      it: 'Una serata esclusiva per scoprire le migliori annate di Brunello di Montalcino e Chianti Classico abbinate alla nostra Chianina cotta sul carbone di legna.',
      en: 'An intimate evening discovering premier vintages of Brunello di Montalcino and Chianti Classico paired with our oak-charcoal grilled prime cuts.',
      ar: 'أمسية دافئة لاستكشاف أرقى المزارع التوسكانية المعتقة، متناغمة مع لحم الكيانينا الفاخر المشوي على جمر خشب البلوط الحي.',
    },
    highlights: [
      {
        it: 'Tagli fiorentina e costata di razza Chianina certificata',
        en: 'Certified Chianina T-bone steaks and prime ribs on open embers',
        ar: 'قطع فلورنتينا ولحوم كيانينا إيطالية أصلية على الجمر',
      },
      {
        it: 'Degustazione guidata con verticali di Brunello e Chianti',
        en: 'Guided tasting with historic Tuscan vintages',
        ar: 'تذوق موجه لأعرق مزارع مونتالشينو وكيانتي الكلاسيكية',
      },
    ],
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'event-paella',
    type: 'seasonal',
    date: '2026-12-12',
    scheduleBadge: {
      it: 'Menu Speciale · Date in programmazione',
      en: 'Special Menu · Schedule coming soon',
      ar: 'قائمة طعام استثنائية · المواعيد قريباً',
    },
    badge: {
      it: 'Festa di Mare',
      en: 'Seafood Fiesta',
      ar: 'وليمة بحرية متوسطية',
    },
    category: {
      it: 'Specialità della Casa',
      en: 'House Specialty',
      ar: 'أطباق للمشاركة والبهجة',
    },
    title: {
      it: 'Gran Paella di Frutti di Mare & Fritto Misto Mediterraneo',
      en: 'Grand Seafood Paella & Crispy Mediterranean Fritto Misto Feast',
      ar: 'احتفالية الباييلا البحرية الكبرى والمقليات المتوسطية الذهبية المقرمشة',
    },
    excerpt: {
      it: 'Padelloni giganti di Paella tradizionale con gamberi rossi, cozze, calamari e zafferano profumato, anticipati da abbondanti fritture dorate per la tavola.',
      en: 'Huge pans of authentic seafood paella packed with Mediterranean prawns, mussels, squid and saffron, paired with crisp golden fritto misto.',
      ar: 'صواني الباييلا العائلية الضخمة بثمار البحر والروبيان والزعفران الأصيل، تسبقها مقليات المأكولات البحرية الذهبية المقرمشة والوفيرة.',
    },
    highlights: [
      {
        it: 'Porzioni abbondanti perfette per la condivisione in tavola',
        en: 'Abundant festive platters crafted for joyful sharing',
        ar: 'أطباق وفيرة وسخية مثالية للمشاركة والبهجة على المائدة',
      },
      {
        it: 'Pescato fresco del Mediterraneo cucinato espresso',
        en: 'Fresh daily Mediterranean catch prepared to order',
        ar: 'أسماك وثمار بحر طازجة تُطهى مباشرة عند الطلب',
      },
    ],
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'event-celebration',
    type: 'celebration',
    date: '2026-12-19',
    scheduleBadge: {
      it: 'Disponibile su Richiesta · Tutto l Anno',
      en: 'Available on Request · Year-Round',
      ar: 'متاح دائماً حسب الطلب · على مدار العام',
    },
    badge: {
      it: 'Per Gruppi & Feste',
      en: 'Groups & Parties',
      ar: 'للمجموعات والاحتفالات',
    },
    category: {
      it: 'Feste Private & Eventi',
      en: 'Private Events',
      ar: 'حفلات ومناسبات خاصة',
    },
    title: {
      it: 'Festeggia con Noi: Compleanni, Lauree e Cene Aziendali con Karaoke',
      en: 'Celebrate With Us: Birthdays, Graduations & Group Feasts with Karaoke',
      ar: 'احتفلوا معنا: أعياد الميلاد، حفلات التخرج، وعشاء الشركات مع الكاراوكي',
    },
    excerpt: {
      it: 'Sale spaziose, menu concordati a prezzo vantaggioso (10–20 €), torta artigianale su richiesta e opzione intrattenimento con karaoke per festeggiare alla grande.',
      en: 'Spacious halls accommodating large gatherings, customized fixed-price menus (€10–€20), homemade celebration cakes, and karaoke options.',
      ar: 'صالات واسعة للمجموعات الكبيرة، قوائم طعام مخصصة بأسعار ممتازة (10–20 يورو)، كعك منزلي وخيارات الترفيه والغناء مع الكاراوكي.',
    },
    highlights: [
      {
        it: 'Capienza per tavolate numerose e sale riservabili',
        en: 'Capacity for large parties and reservable dining areas',
        ar: 'استيعاب مريح للطاولات العائلية الكبيرة والصالات الخاصة',
      },
      {
        it: 'Ottimo rapporto qualità-prezzo da 10 a 20 euro a persona',
        en: 'Unbeatable value from €10 to €20 per person',
        ar: 'قيمة ممتازة من 10 إلى 20 يورو للشخص مع أطباق سخية',
      },
    ],
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=800',
  },
];
