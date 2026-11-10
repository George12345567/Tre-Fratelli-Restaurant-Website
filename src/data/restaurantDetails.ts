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
  googleMapsUrl: 'https://maps.app.goo.gl/y3JwycapRcKYWivF9',
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
    it: 'Dalle porzioni abbondanti all’ottimo rapporto qualità-prezzo (10–20 € a persona), sale ampie con 400 posti a sedere, parcheggio privato riservato sul posto e serata Karaoke ogni sabato sera.',
    en: 'From generous, hearty portions to exceptional value (€10–€20 per person), featuring spacious halls with 400 seats, on-site dedicated private parking, and a Karaoke party every Saturday night.',
    ar: 'أطباق وفيرة بمتوسط أسعار ممتاز (10–20 يورو للشخص)، مع صالات واسعة تتسع لـ 400 كرسي، وجراج سيارات خاص ومجاني بالمطعم، وحفلة كاريوكي وموسيقى كل ليلة سبت.',
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
      en: 'Pizza from the Wood-Fired Oven',
      ar: 'بيتزا فرن الحطب الإيطالي',
    },
    description: {
      it: 'Il profumo del forno, il bordo dorato, gli ingredienti che preferisci. Dalla Margherita alle pizze più ricche, scegli quella che ti va stasera.',
      en: 'The scent of the oven, a golden crust, your favourite toppings. From a Margherita to something more generous, choose what you feel like tonight.',
      ar: 'رائحة الفرن، وحواف ذهبية، والمكونات التي تحبونها. من المارغريتا الكلاسيكية إلى اختيارات أغنى، اختاروا البيتزا التي تشتهونها الليلة.',
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
      it: 'Il Mare a Tavola',
      en: 'A Taste of the Sea',
      ar: 'نكهات البحر على المائدة',
    },
    description: {
      it: 'Un primo ai frutti di mare, una frittura da passarsi, una grigliata al centro del tavolo. Il mare si gusta ancora meglio in compagnia.',
      en: 'Seafood pasta, a plate of crisp fritto to pass around, a mixed grill in the middle of the table. Some flavours are even better shared.',
      ar: 'باستا بثمار البحر، ومقليات نتشاركها، وطبق مشاوي بحرية في وسط المائدة. نكهات يزيد جمالها مع الصحبة.',
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
      it: 'Paella & Brace, da Condividere',
      en: 'Paella & Grills to Share',
      ar: 'باييلا ومشاوي للمشاركة',
    },
    description: {
      it: 'La paella porta colore e profumo alla tavola; la brace aggiunge il suo carattere. Piatti per chi ama assaggiare e dividere qualcosa di buono.',
      en: 'Paella brings colour and aroma to the table; the grill adds its own character. Dishes for those who like to try a little and share a little.',
      ar: 'الباييلا تضيف لوناً ورائحة للمائدة، والمشاوي لها نكهتها الخاصة. أطباق لمن يحبون تجربة أكثر من طعم ومشاركة ما يحبونه.',
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
      it: 'Per Finire, Qualcosa di Dolce',
      en: 'Something Sweet to Finish',
      ar: 'وللختام، شيء حلو',
    },
    description: {
      it: 'Uno sguardo alla carta dei dolci, magari due cucchiaini. La nostra selezione Bindi è un buon motivo per fermarsi ancora un po’.',
      en: 'A look at the dessert menu, perhaps two spoons. Our Bindi selection is a good reason to linger a little longer.',
      ar: 'نظرة على قائمة الحلويات، وربما ملعقتان للمشاركة. مختارات بيندي سبب لطيف لنطيل الجلسة قليلاً.',
    },
    badge: {
      it: 'Selezione Bindi',
      en: 'Bindi Selection',
      ar: 'مختارات بيندي',
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
      it: 'Sale Spaziose · 400 Posti a Sedere',
      en: 'Spacious Halls · 400 Seats',
      ar: 'صالات رحبة تتسع لـ 400 كرسي',
    },
    description: {
      it: 'Ambienti ampi fino a 400 posti a sedere, perfetti per accogliere famiglie, tavolate numerose, compleanni e celebrazioni in allegria.',
      en: 'Large dining halls with 400 seats, configured for family dinners, birthdays, and lively group celebrations.',
      ar: 'صالات طعام واسعة تتسع لـ 400 كرسي، مهيأة لاستيعاب العائلات والطاولات الكبيرة والاحتفالات واللقاءات الجماعية بكل راحة.',
    },
    tag: {
      it: '400 posti · Grandi tavolate',
      en: '400 seats · Group seating',
      ar: '400 كرسي · جلسات واسعة',
    },
    iconName: 'Users',
  },
  {
    id: 'amenity-music',
    title: {
      it: 'Ogni Sabato Sera: Festa Karaoke & Musica',
      en: 'Every Saturday Night: Karaoke & Music Party',
      ar: 'كل ليلة سبت: حفلة كاريوكي وموسيقى',
    },
    description: {
      it: 'Ogni sabato sera il ristorante si anima con la nostra serata Karaoke e musica per cantare, cenare e festeggiare insieme.',
      en: 'Every Saturday night we host a lively Karaoke and music party for guests who love to sing, dine, and celebrate together.',
      ar: 'كل ليلة سبت تقام حفلة كاريوكي وموسيقى مبهجة في المطعم لمن يحبون الغناء والعشاء والاحتفال مع الأصدقاء والعائلة.',
    },
    tag: {
      it: 'Ogni sabato sera',
      en: 'Every Saturday night',
      ar: 'كل ليلة سبت',
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
