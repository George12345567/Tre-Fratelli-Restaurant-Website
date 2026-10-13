import type { LocalizedText } from './types';

export interface CulinaryPillar {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  badge: LocalizedText;
  iconName: 'Flame' | 'Fish' | 'Sparkles' | 'Cake';
}

export interface AmenityPillar {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  tag: LocalizedText;
  iconName: 'Car' | 'Accessibility' | 'Users' | 'Mic' | 'Coins';
}

export const restaurantOfficialInfo = {
  phone: '+390236557693',
  phoneDisplay: '+39 02 3655 7693',
  address: 'Viale Leonardo da Vinci, 97, 20090 Trezzano sul Naviglio (MI), Italia',
  cityRegion: {
    it: 'Trezzano sul Naviglio (Milano), Lombardia',
    en: 'Trezzano sul Naviglio (Milan Metro), Lombardy',
    ar: 'تريزانو سول نافيليو (ميلانو الكبرى)، إقليم لومبارديا',
  } as LocalizedText,
  plusCode: 'C3C6+PH Trezzano sul Naviglio',
  googleMapsUrl: 'https://maps.app.goo.gl/XtPWEL7wA6BwA8na7?g_st=ac',
  facebookUrl: 'https://www.facebook.com/p/Tre-Fratelli-61586553046515/',
  instagramUrl: 'https://www.instagram.com/ristorante3fratelli',
  averagePrice: '10–20 €',
};

export const sectionOneContent = {
  subtitle: {
    it: 'TREZZANO SUL NAVIGLIO (MILANO) • TRADIZIONE MEDITERRANEA',
    en: 'TREZZANO SUL NAVIGLIO (MILAN) • MEDITERRANEAN HERITAGE',
    ar: 'تريزانو سول نافيليو (ميلانو) • التراث والأصالة المتوسطية',
  } as LocalizedText,
  headline: {
    it: 'Tre Fratelli',
    en: 'Tre Fratelli',
    ar: 'مطعم تري فراتيلي',
  } as LocalizedText,
  tagline: {
    it: 'Passione di famiglia, il profumo del forno a legna e il calore della vera tavola italiana.',
    en: 'Family devotion, the aroma of the wood-fired hearth, and true Italian dining warmth.',
    ar: 'شغف عائلي متوارث، عبق فرن الحطب، ودفء المائدة الإيطالية الحقيقية.',
  } as LocalizedText,
  storyLead: {
    it: 'Tre Fratelli nasce dal legame indissolubile di tre fratelli cresciuti tra il profumo del ragù cotto a fuoco lento e del pane caldo nel Sud Italia. Oggi portiamo a Trezzano sul Naviglio la stessa dedizione autentica: farine macinate a pietra, lievitazioni pazienti e l’abbraccio sincero dell’ospitalità italiana.',
    en: 'Tre Fratelli was born from the bond of three brothers raised amidst the comforting aromas of slow-simmered sauces and warm baked bread in southern Italy. Today, we bring to Trezzano sul Naviglio (Milan) that exact heartfelt devotion: stone-ground flours, unhurried fermentation, and genuine Italian warmth.',
    ar: 'نشأ مطعم تري فراتيلي من رابطة لا تنفصم بين ثلاثة إخوة كبروا وسط عبق الصلصات الإيطالية التي تطهى على مهل والخبز الطازج في جنوب إيطاليا. واليوم نقدم في تريزانو سول نافيليو (ميلانو) نفس الشغف الصادق: طحين مطحون بالحجر، وتخمير صبور، ودفء الضيافة الإيطالية.',
  } as LocalizedText,
  storyHearth: {
    it: 'Al centro del nostro ristorante arde il forno a legna tradizionale, cuore pulsante della nostra pizzeria, mentre la cucina celebra ogni giorno il pescato fresco del Mediterraneo, paste tradizionali abbondanti, la nostra amata paella e tagli scelti cotti alla brace.',
    en: 'At the heart of our restaurant burns the traditional beechwood oven, the beating hearth of our pizzeria, while our kitchen honors fresh Mediterranean seafood, abundant classic pasta, our beloved paella, and embers-grilled prime meats.',
    ar: 'في قلب مطعمنا يتوهج فرن الحطب التقليدي، القلب النابض لبيتزانا الأصيلة، بينما يحتفي مطبخنا يومياً بالأسماك وثمار البحر الطازجة، وأطباق المعكرونة الوفيرة، وطبق الباييلا الشهير، وأجود اللحوم المشوية على الجمر.',
  } as LocalizedText,
};

export const sectionTwoContent = {
  kicker: {
    it: 'ESPERIENZA & OSPITALITÀ',
    en: 'EXPERIENCE & HOSPITALITY',
    ar: 'التجربة والضيافة',
  } as LocalizedText,
  headline: {
    it: 'Sapori Generosi, Grandi Spazi & Serate di Festa',
    en: 'Generous Flavors, Spacious Rooms & Festive Evenings',
    ar: 'مذاق سخي، صالات رحبة، وأجواء احتفالية',
  } as LocalizedText,
  subhead: {
    it: 'Dalle porzioni abbondanti all’ottimo rapporto qualità-prezzo (10–20 € a persona), con parcheggio riservato sul posto e serate con musica e karaoke per festeggiare insieme.',
    en: 'From generous, hearty portions to exceptional value (€10–€20 per person), featuring on-site private parking and lively music & karaoke evenings.',
    ar: 'أطباق وفيرة بمتوسط أسعار ممتاز (10–20 يورو للشخص)، مع موقف سيارات خاص ومجاني، وأمسيات موسيقية وكاراوكي مبهجة للاحتفال.',
  } as LocalizedText,
  bookingAdvisory: {
    it: 'Consiglio per gli ospiti: Nei fine settimana o in caso di grandi tavolate, si raccomanda la prenotazione anticipata telefonica o online.',
    en: 'Guest Recommendation: For weekends or larger group gatherings, advance booking by phone or online is warmly recommended.',
    ar: 'نصيحة هامة للضيوف: يُفضّل الاتصال والحجز المسبق لعطلة نهاية الأسبوع والمجموعات الكبيرة لضمان أفضل استقبال وتأكيد المواعيد.',
  } as LocalizedText,
};

export const culinarySpecialties: CulinaryPillar[] = [
  {
    id: 'spec-pizza',
    title: {
      it: 'Pizza al Forno a Legna',
      en: 'Wood-Fired Hearth Pizza',
      ar: 'بيتزا فرن الحطب الإيطالي',
    },
    description: {
      it: 'Impasto leggero ad alta digeribilità cotto a legna: crosta dorata e alveolata, molto apprezzata per il gusto e il prezzo onesto.',
      en: 'Airy, slow-leavened dough baked in our traditional wood oven: golden crust praised for flavor and unbeatable value.',
      ar: 'عجينة خفيفة سهلة الهضم تُخبز على الحطب، وتتميز بحواف مقرمشة ومذاق رائع أشاد به الزوار.',
    },
    badge: {
      it: 'Forno a Legna',
      en: 'Wood-Fired',
      ar: 'فرن حطب أصلي',
    },
    iconName: 'Flame',
  },
  {
    id: 'spec-seafood',
    title: {
      it: 'Pesce & Frutti di Mare Abbondanti',
      en: 'Abundant Mediterranean Seafood',
      ar: 'الأسماك والمأكولات البحرية الوفيرة',
    },
    description: {
      it: 'Specialità di mare fresche servite in porzioni ricche e generose: fritture croccanti, grigliate miste e primi marinari.',
      en: 'Fresh seafood served in notably hearty portions: crispy golden fritto, grilled fish platters, and ocean-infused pasta.',
      ar: 'أطباق بحرية طازجة تشتهر بحجمها الوفير وسخائها: أسماك مشوية، مقليات ذهبية، ومأكولات بحرية شهية.',
    },
    badge: {
      it: 'Porzioni Generose',
      en: 'Generous Portions',
      ar: 'أطباق سخية ووفيرة',
    },
    iconName: 'Fish',
  },
  {
    id: 'spec-paella',
    title: {
      it: 'La Tradizionale Paella & Brace',
      en: 'Festive Paella & Charcoal Grills',
      ar: 'طبق الباييلا الشهير والمشاوي',
    },
    description: {
      it: 'Riso allo zafferano con frutti di mare per momenti conviviali di festa, insieme a carni scelte cotte sulla brace viva.',
      en: 'Fragrant saffron rice laden with seafood for celebratory table moments, accompanied by prime charcoal-grilled meats.',
      ar: 'أرز بالزعفران وثمار البحر الطازجة مثالي للمشاركة، إلى جانب قطع اللحم المشوية على الفحم الحي.',
    },
    badge: {
      it: 'Piatto di Festa',
      en: 'Celebration Dish',
      ar: 'أطباق للمشاركة والبهجة',
    },
    iconName: 'Sparkles',
  },
  {
    id: 'spec-dolci',
    title: {
      it: 'Dolci Fatti in Casa & Antipasti',
      en: 'Handcrafted Dolci & Antipasti',
      ar: 'الحلويات المنزلية والمقبلات',
    },
    description: {
      it: 'Dal classico Tiramisù ai cannoli artigianali e ricchi antipasti all’italiana per iniziare e chiudere in dolcezza.',
      en: 'From our classic homemade Tiramisù to crisp cannoli and rich antipasti platters to bookend your feast.',
      ar: 'من التيراميسو الكلاسيكي المحضر منزلياً إلى الكانولي والمقبلات الإيطالية لتدليل مائدتك.',
    },
    badge: {
      it: 'Fatti in Casa',
      en: 'Homemade Daily',
      ar: 'تحضير يدوي طازج',
    },
    iconName: 'Cake',
  },
];

export const hospitalityAmenities: AmenityPillar[] = [
  {
    id: 'amenity-parking',
    title: {
      it: 'Parcheggio Privato Riservato',
      en: 'Dedicated Private Parking',
      ar: 'موقف سيارات خاص بالمطعم',
    },
    description: {
      it: 'Ampio parcheggio privato disponibile gratuitamente direttamente sul posto per una sosta comoda e sicura.',
      en: 'Spacious on-site private parking free for our dining guests, ensuring effortless arrival.',
      ar: 'موقف سيارات خاص وواسع ملحق بالمطعم ومجاني لراحة الضيوف وسهولة ركن السيارات.',
    },
    tag: {
      it: 'In loco & Gratuito',
      en: 'On-site & Free',
      ar: 'مجاني في الموقع',
    },
    iconName: 'Car',
  },
  {
    id: 'amenity-access',
    title: {
      it: 'Accessibile in Sedia a Rotelle',
      en: 'Wheelchair Accessible',
      ar: 'مهيأ للكراسي المتحركة وسهل الوصول',
    },
    description: {
      it: 'Ingresso agevole senza barriere architettoniche e spazi comodi per ospiti con mobilità ridotta.',
      en: 'Step-free entrance and spacious pathways comfortably accommodating guests with mobility needs.',
      ar: 'مدخل ميسر بدون عوائق وممرات مريحة مهيأة لاستقبال مستخدمي الكراسي المتحركة.',
    },
    tag: {
      it: 'Senza barriere',
      en: 'Step-free access',
      ar: 'وصول ميسر بالكامل',
    },
    iconName: 'Accessibility',
  },
  {
    id: 'amenity-groups',
    title: {
      it: 'Sale Spaziose per Famiglie & Gruppi',
      en: 'Spacious for Families & Groups',
      ar: 'صالات رحبة للعائلات والمجموعات',
    },
    description: {
      it: 'Ambienti ampi configurati per accogliere tavolate numerose, compleanni e celebrazioni in allegria.',
      en: 'Large dining halls configured for festive family dinners, birthdays, and lively group celebrations.',
      ar: 'صالات طعام واسعة مهيأة لاستيعاب الطاولات العائلية الكبيرة والاحتفالات واللقاءات الجماعية.',
    },
    tag: {
      it: 'Grandi tavolate',
      en: 'Group seating',
      ar: 'جلسات جماعية واسعة',
    },
    iconName: 'Users',
  },
  {
    id: 'amenity-music',
    title: {
      it: 'Serate di Musica & Karaoke',
      en: 'Music & Karaoke Evenings',
      ar: 'أمسيات كاراوكي وموسيقى حية',
    },
    description: {
      it: 'Atmosfera vivace e serate speciali con musica e karaoke per chi ama cantare e cenare in festa.',
      en: 'Vibrant celebratory atmosphere with karaoke and musical entertainment for festive nights out.',
      ar: 'أجواء احتفالية حيوية مع سهرات كاراوكي وموسيقى لمن يعشق الغناء والبهجة الإيطالية.',
    },
    tag: {
      it: 'Intrattenimento',
      en: 'Festive nights',
      ar: 'أجواء احتفالية مبهجة',
    },
    iconName: 'Mic',
  },
  {
    id: 'amenity-value',
    title: {
      it: '10–20 € • Ottimo Valore & Carta',
      en: '€10–€20 • Outstanding Value',
      ar: '10–20 € • قيمة ممتازة وخدمة بطاقات',
    },
    description: {
      it: 'Media 10–20 € a persona con porzioni abbondanti, pagamenti con carta di credito e servizio al tavolo attento.',
      en: 'Average €10–€20 per person with generous food, credit card payments accepted, and dedicated table service.',
      ar: 'متوسط 10–20 يورو للشخص مع أطباق وفيرة، وقبول بطاقات الائتمان، وخدمة تقديم وترحيب كاملة على الطاولة.',
    },
    tag: {
      it: 'Ottimo rapporto Q/P',
      en: 'Fair & Generous',
      ar: 'قيمة وسعر منصف',
    },
    iconName: 'Coins',
  },
];
