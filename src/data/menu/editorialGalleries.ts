export interface EditorialPhoto {
  src: string;
  caption: {
    it: string;
    en: string;
    ar: string;
  };
}

export const subsectionEditorialGalleries: Record<string, EditorialPhoto[]> = {
  // ── Antipasti di Terra ──
  'anti-terra': [
    {
      src: '/images/dishes/antipasti/tagliere-salumi-parma.webp',
      caption: {
        it: 'Gran Tagliere di Salumi Nostrani con Gnocco Fritto',
        en: 'Artisanal Italian Cured Meats Platter with Warm Gnocco Fritto',
        ar: 'لوح اللحوم الإيطالية المعتقة الفاخر مع الخبز المقلي الساخن',
      },
    },
    {
      src: '/images/dishes/antipasti/tagliere-formaggi-burrata.webp',
      caption: {
        it: 'Burrata Pugliese Fresca & Formaggi Selezionati',
        en: 'Fresh Pugliese Burrata & Selected Artisanal Cheeses',
        ar: 'جبن البوراتا البوليزي الطازج وتشكيلة الأجبان الإيطالية',
      },
    },
    {
      src: '/images/dishes/antipasti/bruschette-tradizionali-pomodoro.webp',
      caption: {
        it: 'Bruschette Tradizionali al Pomodoro San Marzano & Basilico',
        en: 'Traditional San Marzano Tomato & Fresh Basil Bruschette',
        ar: 'بروسكيتا تقليدية بطماطم سان مارزانو والريحان العطري',
      },
    },
  ],

  // ── Crudité di Mare ──
  'raw-crudite': [
    {
      src: '/images/dishes/raw-seafood/crudo-di-mare-misto.webp',
      caption: {
        it: 'Gran Crudo di Mare Misto con Scampi & Gamberi Rossi',
        en: 'Grand Mixed Raw Seafood Platter with Langoustines & Red Prawns',
        ar: 'تشكيلة ثمار البحر النيئة الفاخرة مع الروبيان الأحمر والاسكامبي',
      },
    },
    {
      src: '/images/dishes/raw-seafood/plateau-ostriche-fine-de-claire.webp',
      caption: {
        it: 'Plateau di Ostriche Fine de Claire su Ghiaccio',
        en: 'Plateau of Fine de Claire Oysters on Shaved Ice',
        ar: 'محار فاين دي كلير الطازج المفتوح على الثلج المجروش',
      },
    },
    {
      src: '/images/dishes/raw-seafood/gran-plateau-reale-mare.webp',
      caption: {
        it: 'Gran Plateau Reale dei Tre Fratelli con Frutti di Mare',
        en: 'Tre Fratelli Royal Seafood Plateau on Ice',
        ar: 'البلاتو الملكي لثمار البحر الطازجة والمحار',
      },
    },
  ],

  // ── Primi di Mare ──
  'primi-mare': [
    {
      src: '/images/dishes/primi-piatti/paccheri-artigianali-frutti-mare.webp',
      caption: {
        it: 'Paccheri Artigianali ai Frutti di Mare Freschi',
        en: 'Artisanal Paccheri with Fresh Mediterranean Shellfish',
        ar: 'باكيري حرفي مسحوب بالبرونز مع ثمار البحر الطازجة',
      },
    },
    {
      src: '/images/dishes/primi-piatti/spaghetti-chitarra-allo-scoglio.webp',
      caption: {
        it: 'Spaghetti alla Chitarra allo Scoglio Tradizionale',
        en: 'Chitarra Spaghetti with Coastal Shellfish & Calamari',
        ar: 'سباغيتي آلا كيتارا بثمار البحر والصلصة الخفيفة',
      },
    },
    {
      src: '/images/dishes/primi-piatti/calamarata-astice-mediterraneo.webp',
      caption: {
        it: 'Calamarata all’Astice del Mediterraneo & Datterini',
        en: 'Calamarata Pasta with Whole Lobster & Sweet Datterini',
        ar: 'كالاماراتا مع كركند البحر المتوسط وطماطم الداتيريني',
      },
    },
  ],

  // ── Carni Pregiate ──
  'sec-terra': [
    {
      src: '/images/dishes/secondi-piatti/bistecca-fiorentina-chianina.webp',
      caption: {
        it: 'Bistecca alla Fiorentina di Chianina alla Brace di Quercia',
        en: 'Tuscan Chianina Fiorentina T-Bone on Oak Embers',
        ar: 'شريحة لحم فيورنتينا كيانينا الفاخرة على جمر البلوط',
      },
    },
    {
      src: '/images/dishes/secondi-piatti/grigliata-carni-nobili-sfrigolante.webp',
      caption: {
        it: 'Grigliata Mista di Carni Nobili Selezionate',
        en: 'Mixed Grill of Prime Butcher Cuts and Sausages',
        ar: 'مشاوي مشكلة فاخرة من أجود قطع اللحم الإيطالية',
      },
    },
    {
      src: '/images/dishes/secondi-piatti/cotoletta-alla-milanese.webp',
      caption: {
        it: 'Cotoletta alla Milanese Tradizionale con Osso',
        en: 'Traditional Bone-In Milanese Veal Cutlet',
        ar: 'كوتوليتا آلا ميلانيزي التقليدية بالبقسماط الذهبي',
      },
    },
  ],

  // ── Pesce Fresco ──
  'sec-pesce': [
    {
      src: '/images/dishes/secondi-piatti/astice-gamberoni-alla-brace.webp',
      caption: {
        it: 'Astice & Gamberoni Reali alla Griglia',
        en: 'Grilled Royal Lobster & King Prawns',
        ar: 'كركند وروبيان ملكي مشوي على الفحم',
      },
    },
    {
      src: '/images/dishes/secondi-piatti/grigliata-mista-pesce-calamari.webp',
      caption: {
        it: 'Grigliata Mista del Mare con Calamari & Gamberi',
        en: 'Mixed Catch Seafood Grill with Calamari & Prawns',
        ar: 'مشاوي ثمار البحر المشكلة مع الكالاماري والروبيان',
      },
    },
  ],

  // ── Pizze Tradizionali ──
  'piz-classiche': [
    {
      src: '/images/dishes/pizza/pizza-margherita-crudo-cornicione.webp',
      caption: {
        it: 'Pizza Margherita Verace con Cornicione a Canotto',
        en: 'Authentic Neapolitan Margherita with Puffy Crust',
        ar: 'بيتزا مارغريتا نابولية أصيلة بأطراف منتفخة هشة',
      },
    },
    {
      src: '/images/dishes/pizza/pizza-tre-fratelli-parma.webp',
      caption: {
        it: 'Pizza Tre Fratelli con Prosciutto di Parma & Burrata',
        en: 'Tre Fratelli Signature Pizza with Parma Ham & Burrata',
        ar: 'بيتزا تري فراتيلي الخاصة بلحم بارما والبوراتا',
      },
    },
    {
      src: '/images/dishes/pizza/pizza-salsiccia-friarielli.webp',
      caption: {
        it: 'Pizza con Salsiccia Nostrana & Friarielli Napoletani',
        en: 'Neapolitan Sourdough Pizza with Sausage & Wild Friarielli',
        ar: 'بيتزا السجق الإيطالي النوستورانو مع أوراق الفرياريلي',
      },
    },
  ],

  // ── Grandi Insalatone ──
  'con-insalatone': [
    {
      src: '/images/dishes/contorni-insalate/insalata-mediterranea-parmigiano.webp',
      caption: {
        it: 'Insalata Mediterranea con Scaglie di Parmigiano Reggiano',
        en: 'Mediterranean Garden Salad with Parmigiano Flakes',
        ar: 'سلطة البحر المتوسط مع رقائق جبن البارميزان ريجيانو',
      },
    },
    {
      src: '/images/dishes/contorni-insalate/insalata-mare-adriatico.webp',
      caption: {
        it: 'Insalata di Mare Fresca con Calamari & Polpo',
        en: 'Fresh Seafood Salad with Squid and Marinated Octopus',
        ar: 'سلطة ثمار البحر المنعشة بالكالاماري والأخطبوط المتبل',
      },
    },
    {
      src: '/images/dishes/contorni-insalate/straccetti-manzo-misticanza.webp',
      caption: {
        it: 'Insalata con Straccetti di Manzo & Pomodorini',
        en: 'Warm Beef Strips Salad with Cherry Tomatoes and Greens',
        ar: 'سلطة شرائح لحم العجل الدافئة مع الطماطم الكرزية',
      },
    },
  ],

  // ── Dolci Artigianali ──
  'des-dolci': [
    {
      src: '/images/dishes/dolci-tiramisu-cannoli.jpg',
      caption: {
        it: 'Tiramisù Tradizionale all’Espresso & Cannoli Siciliani',
        en: 'Traditional Espresso Tiramisù & Sicilian Cannoli',
        ar: 'تيراميسو الإسبريسو المنزلي والكانولي الصقلي المقرمش',
      },
    },
  ],
};
