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
  name: { it: string; en: string; ar: string };
  price: string;
  tag?: { it: string; en: string; ar: string };
}

export interface HomeCategoryItem {
  id: string;
  slug: string;
  icon: LucideIcon;
  title: { it: string; en: string; ar: string };
  subtitle: { it: string; en: string; ar: string };
  tagline: { it: string; en: string; ar: string };
  badge: { it: string; en: string; ar: string };
  craftTag: { it: string; en: string; ar: string };
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
      ar: 'المقبلات ومختارات الأجبان واللحوم D.O.P.',
    },
    subtitle: {
      it: 'Salumi Nostrani, Burrata Pugliese & Gnocco Fritto',
      en: 'Artisanal Charcuterie, Pugliese Burrata & Warm Gnocco',
      ar: 'لحوم بارما المعتقة، جبن البوراتا والخبز المقلي الساخن',
    },
    tagline: {
      it: 'Prosciutto di Parma stagionato 24 mesi, burrata fresca di Andria, gnocco fritto caldo e formaggi D.O.P. selezionati da piccoli produttori italiani.',
      en: '24-month aged Parma prosciutto, fresh Pugliese burrata, warm airy gnocco fritto, and selected Italian artisanal cheeses.',
      ar: 'لحم بارما معتق 24 شهراً، جبن بوراتا طازج، خبز نيوكو فريتو مقرمش وأجبان إيطالية أصيلة من صغار المزارعين.',
    },
    badge: {
      it: 'Tradizione Artigianale',
      en: 'Artisanal Starters',
      ar: 'مقبلات إيطالية أصيلة',
    },
    craftTag: {
      it: 'Stagionatura 24 Mesi',
      en: '24-Month Aged Cures',
      ar: 'معتق 24 شهراً',
    },
    image: '/images/dishes/antipasti/tagliere-salumi-parma.webp',
    targetAnchor: '/menu#antipasti',
    dishes: [
      {
        name: {
          it: 'Gran Antipasto di Terra con Gnocco Fritto',
          en: 'Grand Cured Meats Platter with Warm Gnocco Fritto',
          ar: 'لوح اللحوم الإيطالية الباردة مع الخبز المقلي الساخن',
        },
        price: '€15,00',
        tag: { it: 'I Nostri Salumi', en: 'House Favorite', ar: 'مختاراتنا' },
      },
      {
        name: {
          it: 'Burrata Pugliese con Crudo di Parma 24 Mesi',
          en: 'Creamy Pugliese Burrata with 24-Month Parma Ham',
          ar: 'جبن بوراتا كريمي مع لحم بارما المعتق',
        },
        price: '€14,00',
        tag: { it: 'D.O.P. Fresca', en: 'D.O.P. Fresh', ar: 'طازج D.O.P.' },
      },
      {
        name: {
          it: 'Tartare di Manzo Fassona Piemontese',
          en: 'Piedmontese Fassona Beef Tartare with Quail Egg',
          ar: 'تارتار لحم فاسيونا البيمونتي مع بيض السمان',
        },
        price: '€16,00',
        tag: { it: 'Battuta a Coltello', en: 'Hand-Cut', ar: 'تقطيع يدوي' },
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
      ar: 'ثمار البحر الطازجة والمحار النيء',
    },
    subtitle: {
      it: 'Ostriche Fine de Claire, Tartare & Carpacci del Giorno',
      en: 'Fine de Claire Oysters, Pristine Tartares & Carpaccios',
      ar: 'محار فاين دي كلير، وتارتار الأسماك وكارباتشيو اليوم',
    },
    tagline: {
      it: 'Pescato purissimo selezionato ogni mattina: ostriche di Bretagna, tartare di tonno rosso e salmone selvaggio, scampi e gamberi rossi freschi.',
      en: 'Pristine daily sea harvest: French Brittany oysters, Mediterranean red tuna tartare, wild salmon, and sweet red prawns.',
      ar: 'صيد بحري طازج يومياً: محار فاين دي كلير، تارتار التونة الحمراء والسلمون البري، وروبيان البحر المتوسط الأحمر.',
    },
    badge: {
      it: 'Pescato Fresco del Giorno',
      en: 'Pristine Daily Catch',
      ar: 'صيد بحري طازج يومياً',
    },
    craftTag: {
      it: 'Ostriche & Crudité',
      en: 'Oysters & Raw Crudo',
      ar: 'محار وأسماك نيئة فاخرة',
    },
    image: '/images/dishes/raw-seafood/crudo-di-mare-misto.webp',
    targetAnchor: '/menu#raw-seafood',
    dishes: [
      {
        name: {
          it: 'Gran Antipasto di Mare 3 Fratelli (Caldo & Freddo)',
          en: 'Tre Fratelli Royal Seafood Medley (Warm & Chilled)',
          ar: 'تشكيلة ثمار البحر الملكية الثلاثية (بارد وساخن)',
        },
        price: '€20,00',
        tag: { it: 'Piatto Firma', en: 'Signature Dish', ar: 'طبق مميز' },
      },
      {
        name: {
          it: 'Gran Plateau Crudité con Ostriche Fine de Claire',
          en: 'Royal Crudo Plateau with Fine de Claire Oysters',
          ar: 'طبق المحار والأسماك النيئة الفاخر مع الروبيان',
        },
        price: '€32,00',
        tag: { it: 'Crudo Reale', en: 'Royal Raw', ar: 'طبق ملكي' },
      },
      {
        name: {
          it: 'Tartare di Salmone o Tonno con Frutti Rossi',
          en: 'Citrus Red Tuna or Salmon Tartare with Wild Berries',
          ar: 'تارتار التونة أو السلمون بالحمضيات والتوت البري',
        },
        price: '€16,00',
        tag: { it: 'Agli Agrumi', en: 'Citrus Infused', ar: 'بنكهة الحمضيات' },
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
      ar: 'الباستا الطازجة وأطباق الفرن الشهيرة',
    },
    subtitle: {
      it: 'Pasta Trafilata al Bronzo & Cotta in Crosta di Pane',
      en: 'Bronze-Extruded Pasta & Signature Oven Bread Crust',
      ar: 'باستا مسحوبة بقوالب البرونز وأطباق مخبوزة بغطاء العجين',
    },
    tagline: {
      it: 'Le celebri ricette dei tre fratelli: pasta all’uovo lavorata a mano, crosta di pane croccante cotta al forno a legna e sughi ricchi di pesce e carni nobili.',
      en: 'The three brothers’ iconic recipes: hand-kneaded egg pasta, oven-baked pizza bread crust, and rich Mediterranean sauces.',
      ar: 'وصفات الإخوة الثلاثة الشهيرة: باستا معجونة بالبيض يدوياً، أطباق مغطاة بعجين البيتزا المقرمش وصلصات غنية.',
    },
    badge: {
      it: 'Pasta Fresca Fatta a Mano',
      en: 'Handmade Pasta Daily',
      ar: 'باستا طازجة تُعجن يومياً',
    },
    craftTag: {
      it: 'Cottura in Crosta',
      en: 'Baked in Bread Crust',
      ar: 'مخبوزة بغطاء العجين',
    },
    image: '/images/dishes/primi-piatti/spaghetti-chitarra-allo-scoglio.webp',
    targetAnchor: '/menu#primi-piatti',
    dishes: [
      {
        name: {
          it: 'Spaghetti allo Scoglio in Crosta di Pane',
          en: 'Seafood Spaghetti Sealed in Baked Bread Crust',
          ar: 'سباغيتي ثمار البحر الشهيرة المخبوزة في غطاء العجين',
        },
        price: '€16,00',
        tag: { it: 'Specialità Casa', en: 'Iconic Dish', ar: 'تخصص الدار' },
      },
      {
        name: {
          it: 'Paccheri Tre Fratelli con Ricciola & Vongole',
          en: 'Tre Fratelli Paccheri with Amberjack & Clams',
          ar: 'باكيري تري فراتيلي بسمك العنبر والمحار الطازج',
        },
        price: '€16,00',
        tag: { it: 'Ricetta Storica', en: 'Family Classic', ar: 'وصفة عائلية' },
      },
      {
        name: {
          it: 'Spaghetti alla Carbonara con Guanciale Croccante',
          en: 'Classic Roman Carbonara with Crispy Guanciale',
          ar: 'سباغيتي كاربونارا الكلاسيكية مع الغوانشالي المقرمش',
        },
        price: '€12,00',
        tag: { it: 'Pecorino D.O.P.', en: 'Aged Pecorino', ar: 'بيكورينو رومانو' },
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
      ar: 'الأطباق الرئيسية وسفن ثمار البحر الكبرى',
    },
    subtitle: {
      it: 'Carni alla Brace di Quercia & Pescato Reale al Metro',
      en: 'Oak Wood-Fired Steaks & Meter-Long Seafood Platters',
      ar: 'اللحوم المشوية على جمر البلوط وسفن الأسماك بطول متر',
    },
    tagline: {
      it: 'Dalla celebre Barca di Pesce fino a 1 metro per grandi tavolate, alla Bistecca alla Fiorentina di razza Chianina con frollatura dry-aged di oltre 30 giorni.',
      en: 'From our famous 1-meter Seafood Boat for shared feasts to Tuscan Chianina Fiorentina T-Bone dry-aged for over 30 days.',
      ar: 'من سفينة الأسماك الشهيرة بطول متر للمجموعات، إلى شريحة فيورنتينا كيانينا الفاخرة المعتقة أكثر من 30 يوماً.',
    },
    badge: {
      it: 'Brace Viva & Grandi Barche',
      en: 'Live Oak Coals & Ships',
      ar: 'جمر البلوط وسفن المأكولات الكبرى',
    },
    craftTag: {
      it: 'Barche da 1 Metro',
      en: '1-Meter Seafood Boats',
      ar: 'سفن بحرية بطول متر',
    },
    image: '/images/dishes/secondi-piatti/bistecca-fiorentina-chianina.webp',
    targetAnchor: '/menu#secondi-piatti',
    dishes: [
      {
        name: {
          it: 'Gran Barca di Pesce Tre Fratelli (1m / 0.5m)',
          en: 'Tre Fratelli 1-Meter / Half-Meter Seafood Ship',
          ar: 'سفينة ثمار البحر الكبرى (طول متر أو نصف متر)',
        },
        price: 'da €45,00',
        tag: { it: 'Per Condividere', en: 'For Sharing', ar: 'للمشاركة' },
      },
      {
        name: {
          it: 'Bistecca alla Fiorentina di Chianina alla Brace',
          en: 'Tuscan Chianina Fiorentina T-Bone on Oak Coals',
          ar: 'شريحة لحم فيورنتينا كيانينا على جمر البلوط',
        },
        price: '€5,50 / hg',
        tag: { it: 'Frollata 35gg', en: '35-Day Aged', ar: 'معتق 35 يوماً' },
      },
      {
        name: {
          it: 'Frittura Mista Reale di Calamari & Gamberi',
          en: 'Golden Calamari & Mediterranean Prawns Fritto',
          ar: 'قلي مشكل ملكي من الكالاماري والروبيان الذهبي',
        },
        price: '€16,00',
        tag: { it: 'Dorata & Fragrante', en: 'Crispy & Tender', ar: 'مقرمش وشهي' },
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
      ar: 'بيتزا الحطب وبيتزا المتر الشهيرة',
    },
    subtitle: {
      it: 'Forno Vulcanico 450°C & Impasto a 48 Ore di Lievitazione',
      en: '450°C Wood Oven & 48-Hour Slow Fermented Sourdough',
      ar: 'فرن حطب 450°C وعجينة تخمير بطيء 48 ساعة',
    },
    tagline: {
      it: 'Autentica pizza artigianale con farina macinata a pietra, pomodoro San Marzano D.O.P. e fior di latte. Da gustare tonda classica o nel formato al metro fino a tre gusti.',
      en: 'Authentic sourdough pizza with stone-ground flour, San Marzano tomatoes, and artisanal cheeses. Enjoy traditional round or shared meter-long slabs.',
      ar: 'بيتزا نابولية أصيلة بدقيق مطحون حجرياً وطماطم سان مارزانو، متوفرة دائرية كلاسيكية أو على شكل ألواح بطول متر.',
    },
    badge: {
      it: 'Forno a Legna 450°C',
      en: '450°C Wood-Fired Oven',
      ar: 'فرن حطب نابولي 450°C',
    },
    craftTag: {
      it: 'Pizza al Metro',
      en: 'Pizza by the Meter',
      ar: 'بيتزا بالمتر',
    },
    image: '/images/dishes/pizza/pizza-margherita-crudo-cornicione.webp',
    targetAnchor: '/menu#pizza-calzoni',
    dishes: [
      {
        name: {
          it: 'Pizza Tre Fratelli (Salame, Gorgonzola, Porcini)',
          en: 'Tre Fratelli Signature (Salami, Gorgonzola, Porcini)',
          ar: 'بيتزا تري فراتيلي الخاصة (سلامي، جورجونزولا، بورشيني)',
        },
        price: '€12,00',
        tag: { it: 'Ricetta di Famiglia', en: 'Family Creation', ar: 'ابتكار العائلة' },
      },
      {
        name: {
          it: 'Pizza al Metro & Mezzo Metro (Fino a 3 Gusti)',
          en: 'Meter & Half-Meter Sourdough Pizza (Up to 3 Toppings)',
          ar: 'بيتزا المتر ونصف المتر (حتى 3 نكهات مختلفة)',
        },
        price: 'da €22,00',
        tag: { it: 'Formato Tavolata', en: 'Grand Sharing', ar: 'للمشاركة الكبرى' },
      },
      {
        name: {
          it: 'Margherita Verace con Bufala Campana D.O.P.',
          en: 'Authentic Margherita with Campanian Buffalo Mozzarella',
          ar: 'مارغريتا أصلية مع جبن البافلو كامبانا D.O.P.',
        },
        price: '€9,00',
        tag: { it: 'Bufala D.O.P.', en: 'Buffalo D.O.P.', ar: 'جبن البافلو الأصلي' },
      },
    ],
  },
  {
    id: 'dolci',
    slug: 'desserts',
    icon: Coffee,
    title: {
      it: 'Dolci Artigianali Fatti in Casa',
      en: 'Handmade Italian Desserts',
      ar: 'الحلويات الإيطالية المنزلية الصنع',
    },
    subtitle: {
      it: 'Tiramisù Tradizionale, Cannoli & Pasticceria di Famiglia',
      en: 'Historic Tiramisù, Sicilian Cannoli & Family Pastry',
      ar: 'تيراميسو تقليدي، كانولي صقلي وحلويات العائلة',
    },
    tagline: {
      it: 'I dessert della tradizione preparati freschi ogni mattina: mascarpone nobile montato con savoiardi imbevuti di espresso forte e granella di pistacchio siciliano.',
      en: 'Traditional desserts hand-whipped each morning: velvety mascarpone with espresso-soaked savoiardi and pure Bronte pistachios.',
      ar: 'حلويات إيطالية أصيلة تُحضر طازجة كل صباح: ماسكاربوني كريمي وبسكويت مشرب بالإسبريسو وفستق برونتي الصقلي.',
    },
    badge: {
      it: 'Fatti a Mano Ogni Alba',
      en: 'Handmade Every Morning',
      ar: 'صنع يدوي طازج يومياً',
    },
    craftTag: {
      it: 'Mascarpone & Pistacchio',
      en: 'Bronte Pistachio & Mascarpone',
      ar: 'ماسكاربوني وفستق برونتي',
    },
    image: '/images/dishes/dolci-tiramisu-cannoli.jpg',
    targetAnchor: '/menu#desserts',
    dishes: [
      {
        name: {
          it: 'Tiramisù Tradizionale Tre Fratelli',
          en: 'Tre Fratelli Classic Espresso Mascarpone Tiramisù',
          ar: 'تيراميسو تري فراتيلي الكلاسيكي بالإسبريسو والماسكاربوني',
        },
        price: '€6,50',
        tag: { it: 'Dolce Icona', en: 'House Icon', ar: 'أيقونة الحلويات' },
      },
      {
        name: {
          it: 'Cannoli Siciliani alla Ricotta & Pistacchio',
          en: 'Crispy Sicilian Cannoli with Ricotta & Pistachio',
          ar: 'كانولي صقلي مقرمش بجبن الريكوتا وفستق برونتي',
        },
        price: '€6,00',
        tag: { it: 'Ricotta Fresca', en: 'Fresh Ricotta', ar: 'ريكوتا طازجة' },
      },
      {
        name: {
          it: 'Babà Napoletano al Rum & Frutti di Bosco',
          en: 'Neapolitan Rum-Soaked Babà with Wild Berries',
          ar: 'بابا نابولي معتق بالروم والتوت البري الطازج',
        },
        price: '€7,00',
        tag: { it: 'Napoletano Doc', en: 'Traditional Babà', ar: 'أصلي نابولي' },
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
      ar: 'النبيذ الأحمر المعتق وأعرق المحاصيل الإيطالية',
    },
    subtitle: {
      it: 'Brunello di Montalcino, Barolo & Amarone D.O.C.G.',
      en: 'Brunello di Montalcino, Barolo & Amarone D.O.C.G.',
      ar: 'برونيللو دي مونتالتشينو، بارولو، وأماروني D.O.C.G.',
    },
    tagline: {
      it: 'Un caveau curato con oltre cento etichette delle più prestigiose cantine italiane: grandi riserve toscane e piemontesi ideali per accompagnare le carni alla brace.',
      en: 'A temperature-controlled cellar featuring over a hundred prestigious labels: iconic Tuscan and Piedmontese reserves pairing with oak-grilled meats.',
      ar: 'قبو مبرد يضم أكثر من مائة صنف من أعرق المزارع الإيطالية في توسكانا وبيمونتي لمرافقة أطباق اللحوم المشوية.',
    },
    badge: {
      it: 'Selezione D.O.C.G.',
      en: 'D.O.C.G. Reserves',
      ar: 'أصناف D.O.C.G. معتقة',
    },
    craftTag: {
      it: 'Grandi Annate',
      en: 'Historic Vintages',
      ar: 'محاصيل تاريخية',
    },
    image: '/images/wine/wine-cellar-tre-fratelli.jpg',
    targetAnchor: '/wine-drinks#red',
    dishes: [
      {
        name: {
          it: 'Brunello di Montalcino Riserva D.O.C.G.',
          en: 'Brunello di Montalcino Riserva D.O.C.G.',
          ar: 'برونيللو دي مونتالتشينو ريزيرفا D.O.C.G.',
        },
        price: '€85,00',
        tag: { it: 'Toscana', en: 'Tuscany', ar: 'توسكانا' },
      },
      {
        name: {
          it: 'Barolo Classico di Serralunga D.O.C.G.',
          en: 'Barolo Classico Serralunga D.O.C.G.',
          ar: 'بارولو كلاسيكو دي سيرالونغا D.O.C.G.',
        },
        price: '€78,00',
        tag: { it: 'Piemonte', en: 'Piedmont', ar: 'بيمونتي' },
      },
      {
        name: {
          it: 'Amarone della Valpolicella Classico D.O.C.G.',
          en: 'Amarone della Valpolicella Classico D.O.C.G.',
          ar: 'أماروني ديلا فالبوليتشيلا كلاسيكو',
        },
        price: '€72,00',
        tag: { it: 'Veneto', en: 'Veneto', ar: 'فينيتو' },
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
      ar: 'المشروبات الفوارة وفرانتشاكورتا والأبيض المنعش',
    },
    subtitle: {
      it: 'Metodo Classico della Franciacorta, Prosecco & Bianchi Nobili',
      en: 'Franciacorta Metodo Classico, Prosecco Superiore & Whites',
      ar: 'فرانتشاكورتا بالطريقة الكلاسيكية وبروسيكو سوبريوري',
    },
    tagline: {
      it: 'Dalla nobile effervescenza della Franciacorta ai bianchi freschi e sapidi delle colline friulane e campane, perfetti per esaltare il crudo e le fritture di mare.',
      en: 'From the fine mousse of Franciacorta to refreshing crisp whites from Friuli and Campania, designed to elevate fresh seafood and crudo platters.',
      ar: 'من فوار فرانتشاكورتا الراقي إلى أصناف النبيذ الأبيض المنعش، المتناسق بامتياز مع ثمار البحر والمقليات الذهبية.',
    },
    badge: {
      it: 'Metodo Classico',
      en: 'Metodo Classico',
      ar: 'طريقة كلاسيكية راقية',
    },
    craftTag: {
      it: 'Perlage Pregiato',
      en: 'Fine Perlage',
      ar: 'فقاعات فوارة نقية',
    },
    image: '/images/wine/wine-cellar-tre-fratelli.jpg',
    targetAnchor: '/wine-drinks#sparkling',
    dishes: [
      {
        name: {
          it: 'Franciacorta Brut D.O.C.G. Cuvée Royale',
          en: 'Franciacorta Brut D.O.C.G. Cuvée Royale',
          ar: 'فرانتشاكورتا بروت D.O.C.G. الملكي',
        },
        price: '€48,00',
        tag: { it: 'Lombardia', en: 'Lombardy', ar: 'لومبارديا' },
      },
      {
        name: {
          it: 'Valdobbiadene Prosecco Superiore D.O.C.G.',
          en: 'Valdobbiadene Prosecco Superiore D.O.C.G.',
          ar: 'فالدوبياديني بروسيكو سوبريوري D.O.C.G.',
        },
        price: '€34,00',
        tag: { it: 'Brut Millesimato', en: 'Vintage Brut', ar: 'محصول مميز' },
      },
      {
        name: {
          it: 'Gavi di Gavi D.O.C.G. La Scolca',
          en: 'Gavi di Gavi D.O.C.G. La Scolca',
          ar: 'غافي دي غافي الأبيض الإيطالي الفاخر',
        },
        price: '€38,00',
        tag: { it: 'Bianco Minerale', en: 'Crisp White', ar: 'أبيض معدني' },
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
      ar: 'الكوكتيلات الإيطالية ومشروبات الأبيريتيفو',
    },
    subtitle: {
      it: 'Aperol Spritz, Negroni Classico & Grappe Invecchiate',
      en: 'Aperol Spritz, Classic Milanese Negroni & Aged Grappa',
      ar: 'أبيرول سبريتز، نيغروني ميلانو الكلاسيكي والغرابا المعتقة',
    },
    tagline: {
      it: 'Il rito senza tempo dell’aperitivo all’italiana: cocktail miscelati a regola d’arte con bitter artigianali, vermouth piemontese, agrumi freschi e grappe di riserva.',
      en: 'The timeless ritual of the Italian aperitivo: masterfully shaken cocktails with artisanal bitters, Piedmontese vermouth, fresh citrus, and aged grappas.',
      ar: 'طقوس الأبيريتيفو الإيطالي الأصيل: كوكتيلات محضرة بحرفية مع الأعشاب والحمضيات الطازجة ومشروبات الهضم المعتقة.',
    },
    badge: {
      it: 'Aperitivo Italiano',
      en: 'Italian Aperitivo',
      ar: 'أبيريتيفو إيطالي أصيل',
    },
    craftTag: {
      it: 'Mixology Artigianale',
      en: 'Artisanal Mixology',
      ar: 'خلط عصري متقن',
    },
    image: '/images/wine/cocktails-aperitivo-tre-fratelli.jpg',
    targetAnchor: '/wine-drinks#cocktails',
    dishes: [
      {
        name: {
          it: 'Negroni Classico con Bitter Campari & Gin',
          en: 'Classic Milanese Negroni with Artisanal Gin',
          ar: 'نيغروني كلاسيكي بكامباري وفيرموث أحمر',
        },
        price: '€10,00',
        tag: { it: 'Icona Milanese', en: 'Milan Icon', ar: 'أيقونة ميلانو' },
      },
      {
        name: {
          it: 'Aperol Spritz con Prosecco D.O.C. & Arancia',
          en: 'Aperol Spritz with Prosecco D.O.C. & Fresh Orange',
          ar: 'أبيرول سبريتز مع البروسيكو وشرائح البرتقال',
        },
        price: '€8,00',
        tag: { it: 'Aperitivo Reale', en: 'Classic Aperitivo', ar: 'أبيريتيفو كلاسيكي' },
      },
      {
        name: {
          it: 'Grappa Invecchiata di Barolo & Amari Tradizionali',
          en: 'Aged Barolo Grappa & Handcrafted Digestifs',
          ar: 'غرابا بارولو المعتقة ومشروبات الأعشاب الهاضمة',
        },
        price: '€6,00',
        tag: { it: 'Fine Pasto', en: 'Digestif', ar: 'لمسك الختام' },
      },
    ],
  },
];
