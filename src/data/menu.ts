import type { Dish, DishCategory, LocalizedText } from './types';

export const categoryLabels: Record<DishCategory, LocalizedText> = {
  Antipasti: {
    it: 'Antipasti',
    en: 'Antipasti',
    ar: 'المقبلات الإيطالية',
  },
  'Raw Seafood': {
    it: 'Crudi di Mare',
    en: 'Raw Seafood',
    ar: 'ثمار البحر الطازجة',
  },
  'Primi Piatti': {
    it: 'Primi Piatti',
    en: 'Primi Piatti (Pasta & Risotto)',
    ar: 'الباستا والأطباق الأولى',
  },
  'Secondi Piatti': {
    it: 'Secondi Piatti',
    en: 'Secondi Piatti (Mains & Grill)',
    ar: 'الأطباق الرئيسية واللحوم والأسماك',
  },
  'Pizza & Calzoni': {
    it: 'Pizze & Calzoni',
    en: 'Pizza & Calzoni',
    ar: 'البيتزا والكالتزوني على الحطب',
  },
  'Contorni & Salads': {
    it: 'Contorni & Insalate',
    en: 'Sides & Fresh Salads',
    ar: 'المقبلات الجانبية والسلطات',
  },
  Desserts: {
    it: 'Dolci Fatti in Casa',
    en: 'Homemade Desserts',
    ar: 'الحلويات الإيطالية المنزلية',
  },
};

export const menuDishes: Dish[] = [
  // ── Antipasti ──
  {
    id: 'anti-1',
    category: 'Antipasti',
    name: {
      it: 'Burrata Pugliese con Prosciutto di Parma',
      en: 'Pugliese Burrata with Parma Prosciutto',
      ar: 'جبن بوراتا من بوليا مع لحم بروشوتو دي بارما',
    },
    description: {
      it: 'Burrata artigianale fresca, prosciutto crudo 24 mesi di Parma, pomodorini confit e olio extravergine pugliese.',
      en: 'Fresh artisanal burrata, 24-month aged Parma prosciutto, confit cherry tomatoes, and cold-pressed olive oil.',
      ar: 'جبن بوراتا طازج، لحم بروشوتو معتق 24 شهراً، طماطم كرزية مجففة، وزيت زيتون بكر معصور على البارد.',
    },
    price: '€18',
    tags: ['signature', 'meat'],
    allergens: ['Latte'],
    image: '/images/dishes/antipasti/tagliere-salumi-parma.webp',
  },
  {
    id: 'anti-2',
    category: 'Antipasti',
    name: {
      it: 'Parmigiana di Melanzane Tre Fratelli',
      en: 'Tre Fratelli Eggplant Parmigiana',
      ar: 'بارميجانا الباذنجان على طريقة تري فراتيلي',
    },
    description: {
      it: 'Melanzane cotte al forno a legna, sugo di pomodoro San Marzano, fior di latte e Parmigiano Reggiano 24 mesi.',
      en: 'Wood-oven roasted eggplant, San Marzano tomato reduction, fior di latte mozzarella, and 24-month Parmigiano.',
      ar: 'باذنجان مشوي في فرن الحطب، صلصة طماطم سان مارزانو، جبن فيور دي لاتي، وجبن بارميزان معتق.',
    },
    price: '€16',
    tags: ['signature', 'vegetarian'],
    allergens: ['Latte', 'Glutine'],
    image: 'https://images.unsplash.com/photo-1625938145744-e38051539994?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'anti-3',
    category: 'Antipasti',
    name: {
      it: 'Polpo Croccante su Crema di Patate',
      en: 'Crispy Octopus on Potato Velouté',
      ar: 'أخطبوط مقرمش على كريمة البطاطس',
    },
    description: {
      it: 'Tentacolo di polpo dorato alla griglia, purea soffice di patate allo zafferano e polvere di olive taggiasche.',
      en: 'Charred octopus tentacle over saffron potato puree, finished with dried Taggiasca olive dust.',
      ar: 'أذرع أخطبوط مشوية على اللهب، مهروس البطاطس بالزعفران، ومسحوق زيتون تاجياشكا.',
    },
    price: '€22',
    tags: ['seafood', 'signature'],
    allergens: ['Molluschi', 'Latte'],
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'anti-4',
    category: 'Antipasti',
    name: {
      it: 'Carpaccio di Manzo Fassona con Tartufo',
      en: 'Fassona Beef Carpaccio with Black Truffle',
      ar: 'كارباتشيو لحم الفاسونا مع الكمأة السوداء',
    },
    description: {
      it: 'Fettine sottili di filetto piemontese, scaglie di tartufo nero estivo, rucola selvatica e fonduta al Castelmagno.',
      en: 'Thinly sliced Piedmontese tenderloin, summer black truffle shavings, wild arugula, and Castelmagno fondue.',
      ar: 'شرائح رقيقة من فيليه العجل البيدمونتي، شرائح الكمأة السوداء، الجرجير البري، وجبن كاستلماجنو الذائب.',
    },
    price: '€20',
    tags: ['meat', 'raw'],
    allergens: ['Latte'],
    image: '/images/dishes/antipasti/tartare-di-fassona-piemontese.webp',
  },

  // ── Raw Seafood ──
  {
    id: 'raw-1',
    category: 'Raw Seafood',
    name: {
      it: 'Tartare di Tonno Rosso del Mediterraneo',
      en: 'Mediterranean Red Tuna Tartare',
      ar: 'تارتار التونة الحمراء المتوسطية',
    },
    description: {
      it: 'Tonno rosso battuto a coltello, crema di avocado siciliano, zeste di limone d Amalfi e cialda di riso al nero.',
      en: 'Hand-cut bluefin tuna, Sicilian avocado cream, Amalfi lemon zest, and squid ink rice crisp.',
      ar: 'تونة حمراء مقطعة بالسكين، كريمة أفوكادو صقلية، بشر ليمون أمالفي، ورقاقة أرز بحبر الحبار.',
    },
    price: '€24',
    tags: ['raw', 'seafood', 'signature'],
    allergens: ['Pesce'],
    image: '/images/dishes/raw-seafood/crudo-di-mare-misto.webp',
  },
  {
    id: 'raw-2',
    category: 'Raw Seafood',
    name: {
      it: 'Plateau di Ostriche Fine de Claire (6pz)',
      en: 'Fine de Claire Oysters Plateau (6 pcs)',
      ar: 'طبق محار فاين دي كلير الفاخر (6 حبات)',
    },
    description: {
      it: 'Sei ostriche freschissime servite su ghiaccio con vinaigrette allo scalogno e limoni di Sorrento.',
      en: 'Six freshly shucked oysters on crushed ice, served with shallot vinaigrette and Sorrento lemons.',
      ar: 'ست حبات محار طازجة على الثلج المجروش مع خل الكراث وليمون سورينتو العطري.',
    },
    price: '€32',
    tags: ['raw', 'seafood'],
    allergens: ['Molluschi'],
    image: '/images/dishes/raw-seafood/plateau-ostriche-fine-de-claire.webp',
  },

  // ── Primi Piatti ──
  {
    id: 'primi-1',
    category: 'Primi Piatti',
    name: {
      it: 'Calamarata Tre Fratelli con Astice e Frutti di Mare',
      en: 'Tre Fratelli Calamarata with Lobster & Seafood',
      ar: 'كالاماراتا تري فراتيلي مع الكركند وثمار البحر',
    },
    description: {
      it: 'Pasta trafilata al bronzo, mezzo astice fresco, gamberi rossi, calamaretti, pomodorini datterini e bisque profumata.',
      en: 'Bronze-extruded pasta rings, half fresh lobster, red prawns, baby calamari, sweet datterini, and rich seafood bisque.',
      ar: 'باستا مسحوبة بالبرونز، نصف كركند طازج، روبيان أحمر، كالاماري، طماطم كرزية ومرق الكركند الغني.',
    },
    price: '€28',
    tags: ['signature', 'pasta', 'seafood'],
    allergens: ['Glutine', 'Crostacei', 'Molluschi'],
    image: '/images/dishes/primi-piatti/calamarata-astice-mediterraneo.webp',
  },
  {
    id: 'primi-2',
    category: 'Primi Piatti',
    name: {
      it: 'Tagliolini al Tartufo Nero Pregiato di Norcia',
      en: 'Norcia Black Truffle Tagliolini',
      ar: 'تاليوليني بالكمأة السوداء من نورشا',
    },
    description: {
      it: 'Tagliolini freschi all uovo fatti in casa ogni mattina, mantecati con burro di malga e generose lamelle di tartufo.',
      en: 'Housemade fresh egg tagliolini spun daily, tossed in cultured alpine butter and shaved aromatic black truffle.',
      ar: 'باستا تاليوليني طازجة بالبيض تُعجن يومياً، تُقلب في زبدة المزارع الجبلية وشرائح الكمأة السوداء العطرية.',
    },
    price: '€26',
    tags: ['signature', 'pasta', 'vegetarian'],
    allergens: ['Glutine', 'Uova', 'Latte'],
    image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'primi-3',
    category: 'Primi Piatti',
    name: {
      it: 'Spaghetti alla Chitarra con Vongole Veraci',
      en: 'Spaghetti alla Chitarra with Fresh Clams',
      ar: 'سباغيتي آلا كيتارا مع محار الفونغولي الطازج',
    },
    description: {
      it: 'Pasta artigianale alla chitarra, vongole veraci dell Adriatico, aglio dolce, prezzemolo fresco e vino bianco secco.',
      en: 'Hand-cut chitarra spaghetti, Adriatic clams, sweet garlic, flat-leaf parsley, and crisp white wine emulsion.',
      ar: 'سباغيتي حرفي مقطع على أوتار الكيتارا، محار أدرياتيكي طازج، ثوم خفيف، بقدونس، ولمسة نبيذ أبيض.',
    },
    price: '€22',
    tags: ['pasta', 'seafood'],
    allergens: ['Glutine', 'Molluschi'],
    image: '/images/dishes/primi-piatti/spaghetti-chitarra-allo-scoglio.webp',
  },
  {
    id: 'primi-4',
    category: 'Primi Piatti',
    name: {
      it: 'Pappardelle al Ragù di Cinghiale Toscano',
      en: 'Wild Boar Ragù Tuscan Pappardelle',
      ar: 'بابارديلي مع راغو لحم الخنزير البري التوسكاني',
    },
    description: {
      it: 'Pappardelle rustiche all uovo con ragù lento di cinghiale marinato al Chianti, ginepro e rosmarino selvatico.',
      en: 'Broad egg ribbons with slow-braised wild boar ragù steeped in Chianti, juniper, and wild rosemary.',
      ar: 'شرائط باستا عريضة مع صلصة راغو مطهية على نار هادئة بالعرعر وإكليل الجبل البري.',
    },
    price: '€23',
    tags: ['pasta', 'meat'],
    allergens: ['Glutine', 'Uova'],
    image: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&q=80&w=800',
  },

  // ── Secondi Piatti ──
  {
    id: 'sec-1',
    category: 'Secondi Piatti',
    name: {
      it: 'Bistecca alla Fiorentina di Chianina (1.2 kg)',
      en: 'Chianina Fiorentina T-Bone Steak (1.2 kg)',
      ar: 'شريحة لحم فيورنتينا الفاخرة من سلالة كيانينا (1.2 كغ)',
    },
    description: {
      it: 'Taglio nobile di razza Chianina certificata cotto alla brace di legna di quercia, servito al sangue con sale dolce di Cervia.',
      en: 'Prime certified Chianina T-bone seared over oak wood coals, carved rare with Cervia sweet sea salt and rosemary oil.',
      ar: 'قطعة لحم فاخرة من سلالة كيانينا المعتمدة مشوية على فحم البلوط، تُقدم مع ملح تشيرفيا وزيت إكليل الجبل.',
    },
    price: '€75',
    tags: ['signature', 'meat'],
    allergens: [],
    image: '/images/dishes/secondi-piatti/bistecca-fiorentina-chianina.webp',
  },
  {
    id: 'sec-2',
    category: 'Secondi Piatti',
    name: {
      it: 'Spigola di Mare all Acqua Pazza',
      en: 'Wild Sea Bass all Acqua Pazza',
      ar: 'سمك القاروص البري بصلصة أكوا باتزا الإيطالية',
    },
    description: {
      it: 'Filetto di spigola selvatica in umido con pomodorini del Vesuvio, olive di Gaeta, capperi di Pantelleria e basilico.',
      en: 'Poached sea bass in aromatic broth of Vesuvius cherry tomatoes, Gaeta olives, Pantelleria capers, and basil.',
      ar: 'فيليه قاروص بحري مطهو بمرق خفيف من طماطم فيزوف الكرزية، زيتون جايتا، وكبر بانتيليريا.',
    },
    price: '€29',
    tags: ['seafood'],
    allergens: ['Pesce'],
    image: '/images/dishes/secondi-piatti/grigliata-mista-pesce-calamari.webp',
  },
  {
    id: 'sec-3',
    category: 'Secondi Piatti',
    name: {
      it: 'Filetto di Manzo al Pepe Verde e Cognac',
      en: 'Beef Tenderloin with Green Peppercorn & Cognac',
      ar: 'فيليه لحم العجل بالفلفل الأخضر والكونياك',
    },
    description: {
      it: 'Filetto tenerissimo scottato al burro chiarificato, salsa vellutata al pepe verde del Madagascar e cognac invecchiato.',
      en: 'Prime tenderloin medallion pan-seared with cultured butter, Madagascar green peppercorn reduction, and aged cognac.',
      ar: 'فيليه لحم عجل طري مشوح بالزبدة المصفاة، مع صلصة الفلفل الأخضر المدغشقري الغنية.',
    },
    price: '€32',
    tags: ['meat'],
    allergens: ['Latte'],
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'sec-paella',
    category: 'Secondi Piatti',
    name: {
      it: 'La Tradizionale Paella ai Frutti di Mare',
      en: 'Traditional Seafood Paella Tre Fratelli',
      ar: 'طبق الباييلا المتوسطي التقليدي بثمار البحر',
    },
    description: {
      it: 'Riso profumato allo zafferano con gamberi rossi, scampi, cozze, vongole e calamari freschi, perfetto per la condivisione a tavola.',
      en: 'Fragrant saffron rice laden with red prawns, scampi, mussels, clams, and fresh calamari, crafted for shared feasts.',
      ar: 'أرز متبل بالزعفران الأصيل مع الروبيان الأحمر، الكركند، المحار، وثمار البحر الطازجة، مثالي للمشاركة على المائدة.',
    },
    price: '€26',
    tags: ['signature', 'seafood'],
    allergens: ['Crostacei', 'Molluschi', 'Pesce'],
    image: '/images/dishes/raw-seafood/crudo-di-mare-misto.webp',
  },

  // ── Pizza & Calzoni ──
  {
    id: 'piz-1',
    category: 'Pizza & Calzoni',
    name: {
      it: 'Margherita Verace D.O.P.',
      en: 'Traditional Margherita D.O.P.',
      ar: 'بيتزا مارغريتا الأصلية D.O.P.',
    },
    description: {
      it: 'Pomodoro San Marzano D.O.P., mozzarella di bufala campana fresca, basilico biologico e olio extravergine d oliva.',
      en: 'San Marzano D.O.P. tomatoes, fresh Campanian buffalo mozzarella, sweet organic basil, and extra-virgin olive oil.',
      ar: 'طماطم سان مارزانو المعتمدة، جبن بافلو موزاريلا من كامبانيا، ريحان طازج، وزيت زيتون بكر.',
    },
    price: '€14',
    tags: ['signature', 'pizza', 'vegetarian'],
    allergens: ['Glutine', 'Latte'],
    image: '/images/dishes/pizza/pizza-margherita-crudo-cornicione.webp',
  },
  {
    id: 'piz-2',
    category: 'Pizza & Calzoni',
    name: {
      it: 'Pizza Tre Fratelli Speciale',
      en: 'Tre Fratelli Signature Pizza',
      ar: 'بيتزا تري فراتيلي الخاصة',
    },
    description: {
      it: 'Fior di latte, crema di tartufo nero, salsiccia fresca di maialino nero, funghi porcini trifolati e scaglie di Grana.',
      en: 'Fior di latte, black truffle velouté, artisanal black pork sausage, sautéed porcini mushrooms, and shaved Grana.',
      ar: 'جبن فيور دي لاتي، كريمة الكمأة السوداء، سجق اللحم الحرفي، فطر البورشيني المشوح، وشرائح جبن غرانا.',
    },
    price: '€20',
    tags: ['signature', 'pizza', 'meat'],
    allergens: ['Glutine', 'Latte'],
    image: '/images/dishes/pizza/pizza-tre-fratelli-parma.webp',
  },
  {
    id: 'piz-3',
    category: 'Pizza & Calzoni',
    name: {
      it: 'Diavola con Nduja di Spilinga',
      en: 'Diavola with Spilinga Nduja',
      ar: 'بيتزا ديافولا الحارة مع سجق الندوجا الكالابري',
    },
    description: {
      it: 'Pomodoro San Marzano, fior di latte, salame piccante napoletano, nduja calabrese artigianale e peperoncino fresco.',
      en: 'San Marzano tomatoes, fior di latte, spicy Neapolitan salami, melting Calabrian nduja, and fresh chili.',
      ar: 'طماطم سان مارزانو، جبن فيور دي لاتي، سلامي نابولي حار، وسجق ندوجا كالابري طازج.',
    },
    price: '€16',
    tags: ['pizza', 'meat'],
    allergens: ['Glutine', 'Latte'],
    image: '/images/dishes/pizza/pizza-salsiccia-friarielli.webp',
  },
  {
    id: 'piz-4',
    category: 'Pizza & Calzoni',
    name: {
      it: 'Calzone Classico Napoletano',
      en: 'Classic Neapolitan Calzone',
      ar: 'كالتزوني نابولي الكلاسيكي المحشو',
    },
    description: {
      it: 'Ripieno di ricotta fresca vaccina, salame dolce, fior di latte, pepe nero macinato e un velo di pomodoro all esterno.',
      en: 'Stuffed with fresh whole-milk ricotta, mild Italian salami, fior di latte, cracked pepper, brushed with tomato on top.',
      ar: 'محشو بجبن الريكوتا الطازج، سلامي إيطالي خفيف، جبن فيور دي لاتي، فلفل أسود، ومسحة صلصة طماطم.',
    },
    price: '€17',
    tags: ['pizza', 'meat'],
    allergens: ['Glutine', 'Latte'],
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&q=80&w=800',
  },

  // ── Contorni & Salads ──
  {
    id: 'con-1',
    category: 'Contorni & Salads',
    name: {
      it: 'Insalata Caprese Tradizionale',
      en: 'Traditional Caprese Salad',
      ar: 'سلطة كابريزي الإيطالية التقليدية',
    },
    description: {
      it: 'Pomodori cuore di bue maturi, mozzarella di bufala a fette spesse, foglie di basilico e gocce di balsamico di Modena.',
      en: 'Ripe heirloom oxheart tomatoes, thick-sliced buffalo mozzarella, garden basil leaves, and aged Modena balsamic drizzle.',
      ar: 'طماطم بلورية ناضجة، شرائح سميكة من بافلو موزاريلا، أوراق ريحان غضة، وخل بلسميك مودينو معتق.',
    },
    price: '€14',
    tags: ['vegetarian'],
    allergens: ['Latte'],
    image: '/images/dishes/contorni-insalate/insalata-mediterranea-parmigiano.webp',
  },
  {
    id: 'con-2',
    category: 'Contorni & Salads',
    name: {
      it: 'Verdure di Stagione Grigliate nel Forno a Legna',
      en: 'Wood-Oven Charred Seasonal Vegetables',
      ar: 'خضار موسمية مشوية في فرن الحطب',
    },
    description: {
      it: 'Zucchine, melanzane, peperoni dolci e radicchio tardivo marinati all aglio ed erbe mediterranee.',
      en: 'Zucchini, eggplant, sweet peppers, and Treviso radicchio charred over embers with garlic and Mediterranean herbs.',
      ar: 'كوسا وباذنجان وفلفل حلو وخس راديكيو متبل بالثوم والأعشاب المتوسطية العطرية.',
    },
    price: '€10',
    tags: ['vegetarian'],
    allergens: [],
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800',
  },

  // ── Desserts ──
  {
    id: 'des-1',
    category: 'Desserts',
    name: {
      it: 'Tiramisù Tradizionale Tre Fratelli',
      en: 'Tre Fratelli Housemade Tiramisù',
      ar: 'تيراميسو تري فراتيلي التراثي الفاخر',
    },
    description: {
      it: 'Savoiardi sardi bagnati nell espresso tostato a legna, morbida crema al mascarpone, zabaione al Marsala e cacao amaro.',
      en: 'Sardinian ladyfingers soaked in wood-roasted espresso, velvety mascarpone cream, hint of Marsala, and bitter cocoa.',
      ar: 'بسكويت سافوياردي مشرب بإسبريسو الحطب، كريمة ماسكاربوني المخملية، رشة مارسالا، وبودرة الكاكاو المرة.',
    },
    price: '€10',
    tags: ['signature', 'dessert', 'vegetarian'],
    allergens: ['Glutine', 'Uova', 'Latte'],
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'des-2',
    category: 'Desserts',
    name: {
      it: 'Panna Cotta alla Vaniglia Bourbon con Frutti di Bosco',
      en: 'Bourbon Vanilla Panna Cotta with Wild Berries',
      ar: 'بان كوتا فانيليا البوربون مع التوت البري',
    },
    description: {
      it: 'Crema cotta vellutata con bacche di vaniglia del Madagascar e coulis caldo di lamponi e mirtilli selvatici.',
      en: 'Silky cream infused with Madagascar bourbon vanilla bean, served with warm wild raspberry and blueberry coulis.',
      ar: 'كريمة مطهوة ناعمة كالحرير بنكهة حبوب فانيليا مدغشقر، مع صلصة التوت والكرز البري الدافئة.',
    },
    price: '€9',
    tags: ['dessert', 'vegetarian'],
    allergens: ['Latte'],
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'des-3',
    category: 'Desserts',
    name: {
      it: 'Cannolo Siciliano Scomposto con Pistacchio di Bronte',
      en: 'Deconstructed Sicilian Cannolo with Bronte Pistachio',
      ar: 'كانولو صقلي مفتت مع فستق برونتي الفاخر',
    },
    description: {
      it: 'Cialda croccante al cacao e cannella, ricotta di pecora zuccherata, gocce di cioccolato di Modica e granella di pistacchio.',
      en: 'Crispy cinnamon-cocoa wafer shards, sweetened sheep milk ricotta, Modica chocolate drops, and Bronte pistachio crumbs.',
      ar: 'رقائق كانولو مقرمشة بالقرفة والكاكاو، ريكوتا الأغنام الطازجة، شوكولاتة موديكا، وفستق برونتي الصقلي الأخضر.',
    },
    price: '€11',
    tags: ['dessert', 'vegetarian'],
    allergens: ['Glutine', 'Latte', 'Frutta a guscio'],
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=800',
  },
];
