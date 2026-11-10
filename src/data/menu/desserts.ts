import type { Dish } from '../types';

export const dessertDishes: Dish[] = [
  // ── I SEMIFREDDI & MONOPORZIONI (Carta dei Dolci Bindi) ──
  {
    id: 'des-croccante-amarena',
    category: 'Desserts',
    name: {
      it: "Croccante all'Amarena",
      en: "Amarena Cherry Crunch Semifreddo",
    },
    description: {
      it: "Dessert semifreddo con crema al gusto vaniglia, cuore morbido all'amarena, decorato con mandorle caramellizzate.",
      en: "Vanilla cream semifreddo with a soft black cherry heart, decorated with caramelized almonds.",
    },
    price: '€6,00',
    image: '/images/sweet-menu/des-croccante-amarena.webp',
    tags: ['dessert', 'signature'],
    allergens: ['7 - Latte', '8 - Frutta a guscio'],
  },
  {
    id: 'des-croccante-cioccolato',
    category: 'Desserts',
    name: {
      it: 'Croccante al Cioccolato e Caramello',
      en: 'Chocolate & Caramel Crunch Dome',
    },
    description: {
      it: 'Elegante cupolina di semifreddo al cioccolato con cuore di salsa al caramello, mandorle pralinate e goccia di caramello.',
      en: 'Chocolate semifreddo dome with a caramel sauce center, decorated with praline almonds.',
    },
    price: '€6,00',
    image: '/images/sweet-menu/des-croccante-cioccolato.webp',
    tags: ['dessert', 'signature'],
    allergens: ['7 - Latte', '8 - Frutta a guscio'],
  },
  {
    id: 'des-cremoso-frutti-rossi',
    category: 'Desserts',
    name: {
      it: 'Cremoso ai Frutti Rossi',
      en: 'Red Berries Cream Delight',
    },
    description: {
      it: 'Pan di Spagna con crema al gusto vaniglia, cuore ai frutti rossi, decorato con cioccolato bianco e salsa ai frutti rossi.',
      en: 'Sponge cake with vanilla cream, red berry heart, decorated with white chocolate and berry sauce.',
    },
    price: '€6,00',
    tags: ['dessert'],
    allergens: ['1 - Glutine', '3 - Uova', '7 - Latte'],
  },
  {
    id: 'des-semifreddo-torroncino',
    category: 'Desserts',
    name: {
      it: 'Semifreddo al Torroncino',
      en: 'Nougat Torroncino Semifreddo',
    },
    description: {
      it: 'Gelato semifreddo al torroncino decorato con granella di nocciole pralinate.',
      en: 'Torroncino nougat semifreddo gelato decorated with crushed praline hazelnuts.',
    },
    price: '€6,00',
    image: '/images/sweet-menu/des-semifreddo-torroncino.webp',
    tags: ['dessert'],
    allergens: ['3 - Uova', '7 - Latte', '8 - Frutta a guscio'],
  },
  {
    id: 'des-semifreddo-amaro-capo',
    category: 'Desserts',
    name: {
      it: 'Semifreddo al Vecchio Amaro del Capo',
      en: 'Vecchio Amaro del Capo Semifreddo',
    },
    description: {
      it: "Iconico semifreddo Bindi con crema e cuore liquido al Vecchio Amaro del Capo decorato con crumble al burro.",
      en: "Iconic Bindi semifreddo with a liquid Vecchio Amaro del Capo center and butter crumble.",
    },
    price: '€6,00',
    image: '/images/sweet-menu/des-semifreddo-amaro-capo.webp',
    tags: ['dessert', 'signature'],
    allergens: ['1 - Glutine', '7 - Latte'],
  },
  {
    id: 'des-semifreddo-ciocco-nocciola',
    category: 'Desserts',
    name: {
      it: 'Semifreddo al Cioccolato e Nocciola',
      en: 'Chocolate & Hazelnut Semifreddo',
    },
    description: {
      it: 'Delizioso semifreddo al cioccolato e pasta di nocciole, decorato con granella di nocciole tostate.',
      en: 'Chocolate and Italian hazelnut semifreddo, garnished with toasted chopped hazelnuts.',
    },
    price: '€6,00',
    image: '/images/sweet-menu/des-semifreddo-ciocco-nocciola.webp',
    tags: ['dessert'],
    allergens: ['7 - Latte', '8 - Frutta a guscio'],
  },
  {
    id: 'des-cocco-nocciola',
    category: 'Desserts',
    name: {
      it: 'Cocco Nocciola',
      en: 'Coconut & Hazelnut Delight',
    },
    description: {
      it: 'Biscotto alla nocciola farcito con crema al gusto di cocco e crema alla nocciola, decorato con cocco rapè.',
      en: 'Hazelnut biscuit filled with coconut and hazelnut cream, finished with shredded coconut.',
    },
    price: '€6,00',
    image: '/images/sweet-menu/des-cocco-nocciola.webp',
    tags: ['dessert'],
    allergens: ['1 - Glutine', '7 - Latte', '8 - Frutta a guscio'],
  },
  {
    id: 'des-zuccotto',
    category: 'Desserts',
    name: {
      it: 'Zuccotto Fiorentino',
      en: 'Florentine Zuccotto Dome',
    },
    description: {
      it: 'Soffice biscuit con creme semifredde alla vaniglia, arancia candita e gocce di cioccolato fondente.',
      en: 'Tuscan dome sponge cake filled with vanilla semifreddo cream, candied orange, and dark chocolate drops.',
    },
    price: '€6,00',
    image: '/images/sweet-menu/des-zuccotto.webp',
    tags: ['dessert', 'signature'],
    allergens: ['1 - Glutine', '3 - Uova', '7 - Latte'],
  },
  {
    id: 'des-caramello-salato',
    category: 'Desserts',
    name: {
      it: 'Semifreddo al Caramello Salato e Cioccolato',
      en: 'Salted Caramel & Chocolate Semifreddo',
    },
    description: {
      it: 'Semifreddo con caramello salato, pepite di cioccolato e crumble croccante al burro.',
      en: 'Salted caramel semifreddo with chocolate chunks and crunchy butter crumble.',
    },
    price: '€6,00',
    image: '/images/sweet-menu/des-caramello-salato.webp',
    tags: ['dessert', 'signature'],
    allergens: ['1 - Glutine', '7 - Latte'],
  },
  {
    id: 'des-crema-catalana',
    category: 'Desserts',
    name: {
      it: 'Crema Catalana in Coccio',
      en: 'Crema Catalana in Terracotta Bowl',
    },
    description: {
      it: 'Crema catalana tradizionale con crosta di zucchero caramellato a fiamma.',
      en: 'Traditional custard dessert in a clay dish with a crisp caramelized sugar crust.',
    },
    price: '€5,00',
    image: '/images/sweet-menu/des-crema-catalana.webp',
    tags: ['dessert', 'signature'],
    allergens: ['3 - Uova', '7 - Latte'],
  },

  // ── I NOSTRI TARTUFI, FLÛTE & SORBETTI ──
  {
    id: 'des-tartufo-pistacchio',
    category: 'Desserts',
    name: {
      it: 'Tartufo Pistacchio',
      en: 'Pistachio Tartufo Gelato',
    },
    description: {
      it: 'Gelato semifreddo al pistacchio con cuore al pistacchio, decorato con nocciole pralinate e granella di pistacchio.',
      en: 'Pistachio semifreddo gelato with a pistachio heart, praline hazelnuts, and chopped pistachios.',
    },
    price: '€6,00',
    image: '/images/sweet-menu/des-tartufo-pistacchio.webp',
    tags: ['dessert', 'signature'],
    allergens: ['7 - Latte', '8 - Frutta a guscio'],
  },
  {
    id: 'des-tartufo-classico',
    category: 'Desserts',
    name: {
      it: 'Tartufo Classico',
      en: 'Classic Chocolate & Zabaione Tartufo',
    },
    description: {
      it: 'Gelato al cioccolato e zabaione con cuore al cioccolato, ricoperto con granella di nocciole e cacao.',
      en: 'Chocolate and zabaione gelato with a liquid chocolate heart, coated with crushed hazelnuts and cocoa.',
    },
    price: '€6,00',
    image: '/images/sweet-menu/des-tartufo-classico.webp',
    tags: ['dessert', 'signature'],
    allergens: ['3 - Uova', '7 - Latte', '8 - Frutta a guscio'],
  },
  {
    id: 'des-tartufo-bianco',
    category: 'Desserts',
    name: {
      it: 'Tartufo Bianco',
      en: 'White Coffee & Zabaione Tartufo',
    },
    description: {
      it: 'Gelato allo zabaione e gelato al caffè con cuore morbido al caffè, ricoperto con granella di meringa.',
      en: 'Zabaione and espresso gelato with a soft coffee heart, enrobed in crunchy crushed meringue.',
    },
    price: '€6,00',
    image: '/images/sweet-menu/des-tartufo-bianco.webp',
    tags: ['dessert'],
    allergens: ['3 - Uova', '7 - Latte'],
  },
  {
    id: 'des-flute-limoncello',
    category: 'Desserts',
    name: {
      it: 'Flûte Limoncello',
      en: 'Limoncello Flûte',
    },
    description: {
      it: 'Gelato al limone con variegatura al limoncello. Utilizziamo solo limoni italiani.',
      en: 'Italian lemon gelato rippled with authentic limoncello liqueur made with 100% Italian lemons.',
    },
    price: '€6,00',
    image: '/images/sweet-menu/des-flute-limoncello.webp',
    tags: ['dessert'],
    allergens: ['7 - Latte'],
  },
  {
    id: 'des-flute-mango',
    category: 'Desserts',
    name: {
      it: 'Flûte Mango e Passion Fruit',
      en: 'Mango & Passion Fruit Flûte',
    },
    description: {
      it: 'Gelato al mango con variegatura al frutto della passione.',
      en: 'Refreshing mango gelato swirled with tropical passion fruit puree.',
    },
    price: '€6,00',
    image: '/images/sweet-menu/des-flute-mango.webp',
    tags: ['dessert', 'vegetarian'],
    allergens: ['7 - Latte'],
  },
  {
    id: 'des-mandarino-ripieno',
    category: 'Desserts',
    name: {
      it: 'Mandarino Ripieno',
      en: 'Stuffed Frozen Mandarin Sorbet',
    },
    description: {
      it: 'Un profumato guscio di mandarino ripieno di sorbetto al mandarino tardivo di Ciaculli.',
      en: 'Natural whole frozen mandarin shell filled with late Ciaculli mandarin sorbet.',
    },
    price: '€6,00',
    image: '/images/sweet-menu/des-mandarino-ripieno.webp',
    tags: ['dessert', 'signature', 'vegetarian'],
    allergens: [],
  },
  {
    id: 'des-sorbetto',
    category: 'Desserts',
    name: {
      it: 'Sorbetto al Limone',
      en: 'Lemon Sorbet',
    },
    description: {
      it: 'Sorbetto al limone da bere.',
      en: 'Refreshing drinkable Italian lemon sorbet.',
    },
    price: '€5,00',
    image: '/images/sweet-menu/des-sorbetto.webp',
    tags: ['dessert', 'vegetarian'],
    allergens: [],
  },

  // ── LE COPPE GELATO D'AUTORE ──
  {
    id: 'des-coppa-pistacchi',
    category: 'Desserts',
    name: {
      it: 'Coppa ai Pistacchi di Sicilia',
      en: 'Sicilian Pistachio Coppa',
    },
    description: {
      it: 'Crema al pistacchio su wafer croccante di pistacchio e cioccolato bianco, cacao glitter e granella di pistacchio 100% Sicilia.',
      en: 'Gourmet Sicilian pistachio cream over crispy white chocolate pistachio wafer, glitter cocoa, and chopped pistachios.',
    },
    price: '€6,00',
    tags: ['dessert', 'signature'],
    allergens: ['1 - Glutine', '7 - Latte', '8 - Frutta a guscio'],
  },
  {
    id: 'des-coppa-dubai',
    category: 'Desserts',
    name: {
      it: 'Coppa Dubai Chocolate Style',
      en: 'Dubai Chocolate Style Coppa',
    },
    description: {
      it: 'Gelato al pistacchio con fondo cremoso al cioccolato e gelato al cioccolato decorato con variegatura al pistacchio arricchita con pasta kataifi.',
      en: 'Pistachio gelato over creamy chocolate fudge, paired with chocolate gelato, pistachio swirl, and crispy golden kataifi.',
    },
    price: '€6,00',
    image: '/images/sweet-menu/des-coppa-dubai.webp',
    tags: ['dessert', 'signature'],
    allergens: ['1 - Glutine', '7 - Latte', '8 - Frutta a guscio'],
  },
  {
    id: 'des-coppa-mascarpone',
    category: 'Desserts',
    name: {
      it: 'Coppa Mascarpone e Lamponi',
      en: 'Mascarpone & Fresh Raspberries Coppa',
    },
    description: {
      it: 'Pan di Spagna con crema al mascarpone, lamponi e decorata con granella di pistacchio.',
      en: 'Sponge cake layered with rich mascarpone cream, tart raspberries, and chopped pistachios.',
    },
    price: '€6,00',
    image: '/images/sweet-menu/des-coppa-mascarpone.webp',
    tags: ['dessert'],
    allergens: ['1 - Glutine', '3 - Uova', '7 - Latte', '8 - Frutta a guscio'],
  },
  {
    id: 'des-coppa-crema-amarena',
    category: 'Desserts',
    name: {
      it: 'Coppa Crema Amarena',
      en: 'Vanilla Cream & Amarena Cherry Coppa',
    },
    description: {
      it: "Pan di Spagna al cacao, crema al gusto vaniglia, ciliegie amarene e salsa all'amarena.",
      en: 'Cocoa sponge cake with smooth vanilla cream, sweet Amarena black cherries, and rich cherry coulis.',
    },
    price: '€6,00',
    image: '/images/sweet-menu/des-coppa-crema-amarena.webp',
    tags: ['dessert'],
    allergens: ['1 - Glutine', '3 - Uova', '7 - Latte'],
  },
  {
    id: 'des-coppa-mousse-caffe',
    category: 'Desserts',
    name: {
      it: 'Coppa Mousse Chantilly e Caffè',
      en: 'Chantilly & Espresso Mousse Coppa',
    },
    description: {
      it: 'Gelato semifreddo al caffè e chantilly con salsa al cioccolato e caffè e nocciole pralinate.',
      en: 'Coffee and Chantilly semifreddo gelato with dark chocolate & espresso sauce, topped with praline hazelnuts.',
    },
    price: '€6,00',
    tags: ['dessert'],
    allergens: ['7 - Latte', '8 - Frutta a guscio'],
  },
  {
    id: 'des-coppa-crema-fragole',
    category: 'Desserts',
    name: {
      it: 'Coppa Crema e Fragole',
      en: 'Sweet Cream & Candied Strawberries Coppa',
    },
    description: {
      it: 'Gelato al gusto crema e panna variegato alla fragola su fondo cremoso alla fragola, con fragole semicandite.',
      en: 'Crema and cream gelato swirled with sweet strawberry coulis over strawberry cream and candied strawberries.',
    },
    price: '€6,00',
    image: '/images/sweet-menu/des-coppa-crema-fragole.webp',
    tags: ['dessert'],
    allergens: ['7 - Latte'],
  },
  {
    id: 'des-coppa-mista',
    category: 'Desserts',
    name: {
      it: 'Coppa Gelato Mista',
      en: 'Mixed Gelato Cup',
    },
    description: { it: '', en: '' },
    price: '€5,00',
    image: '/images/sweet-menu/des-coppa-mista.webp',
    tags: ['dessert', 'vegetarian'],
    allergens: ['7 - Latte'],
  },

  // ── LE GRANDI TORTE & PASTICCERIA ──
  {
    id: 'des-torta-dubai',
    category: 'Desserts',
    name: {
      it: 'Torta Dubai Chocolate',
      en: 'Dubai Chocolate Cake',
    },
    description: {
      it: 'Torta con Pan di Spagna al cacao e pistacchio, creme al cioccolato e pistacchio, pasta kataifi e granella di pistacchio.',
      en: 'Layer cake with cocoa & pistachio sponge, chocolate and pistachio creams, crispy kataifi, and chopped pistachios.',
    },
    price: '€6,00',
    image: '/images/sweet-menu/des-torta-dubai.webp',
    tags: ['dessert', 'signature'],
    allergens: ['1 - Glutine', '3 - Uova', '7 - Latte', '8 - Frutta a guscio'],
  },
  {
    id: 'des-torta-nonna',
    category: 'Desserts',
    name: {
      it: 'Torta della Nonna',
      en: 'Tuscan Torta della Nonna',
    },
    description: {
      it: 'Pasta frolla con crema pasticcera al profumo di limone, ricoperta con pinoli e mandorle.',
      en: 'Traditional Tuscan shortcrust pie filled with lemon-infused pastry cream, topped with roasted pine nuts and almonds.',
    },
    price: '€6,00',
    image: '/images/sweet-menu/des-torta-nonna.webp',
    tags: ['dessert', 'signature'],
    allergens: ['1 - Glutine', '3 - Uova', '7 - Latte', '8 - Frutta a guscio'],
  },
  {
    id: 'des-torta-ciocco-pere',
    category: 'Desserts',
    name: {
      it: 'Torta Cioccolato e Pere',
      en: 'Dark Chocolate & Italian Pear Tart',
    },
    description: {
      it: 'Fragrante pasta frolla con crema al cioccolato fondente, cubetti di pera 100% italiana e riccioli di cioccolato.',
      en: 'Crisp shortcrust pastry with dark chocolate cream, 100% Italian diced pears, and delicate chocolate curls.',
    },
    price: '€6,00',
    image: '/images/sweet-menu/des-torta-ciocco-pere.webp',
    tags: ['dessert'],
    allergens: ['1 - Glutine', '3 - Uova', '7 - Latte'],
  },
  {
    id: 'des-torta-croccante',
    category: 'Desserts',
    name: {
      it: 'Torta al Croccante',
      en: 'Ecuadorian Cocoa & Almond Crunch Cake',
    },
    description: {
      it: "Pan di Spagna al cacao, crema alla nocciola e crema al cioccolato con cacao monorigine dell'Ecuador, decorata con mandorla pralinata.",
      en: 'Cocoa sponge with hazelnut and single-origin Ecuadorian chocolate cream, topped with crunchy praline almonds.',
    },
    price: '€6,00',
    image: '/images/sweet-menu/des-torta-croccante.webp',
    tags: ['dessert', 'signature'],
    allergens: ['1 - Glutine', '3 - Uova', '7 - Latte', '8 - Frutta a guscio'],
  },
  {
    id: 'des-profiterole-scuro',
    category: 'Desserts',
    name: {
      it: 'Profiterole Scuro',
      en: 'Classic Dark Chocolate Profiteroles',
    },
    description: {
      it: 'Bignè con crema al gusto vaniglia e ricoperti con crema al cioccolato.',
      en: 'Choux pastry puffs filled with vanilla cream and drenched in rich dark chocolate glaze.',
    },
    price: '€6,00',
    image: '/images/sweet-menu/des-profiterole-scuro.webp',
    tags: ['dessert', 'signature'],
    allergens: ['1 - Glutine', '3 - Uova', '7 - Latte'],
  },
  {
    id: 'des-profiterole-bianco',
    category: 'Desserts',
    name: {
      it: 'Profiterole Bianco',
      en: 'White Chocolate Profiteroles',
    },
    description: {
      it: 'Bignè con crema al cioccolato e ricoperti con crema al gusto vaniglia.',
      en: 'Choux pastry puffs filled with chocolate cream and covered in velvety vanilla cream.',
    },
    price: '€6,00',
    image: '/images/sweet-menu/des-profiterole-bianco.webp',
    tags: ['dessert'],
    allergens: ['1 - Glutine', '3 - Uova', '7 - Latte'],
  },
  {
    id: 'des-millefoglie',
    category: 'Desserts',
    name: {
      it: 'Millefoglie',
      en: 'Traditional Millefeuille',
    },
    description: {
      it: 'Pasta sfoglia farcita con crema pasticcera.',
      en: 'Crispy caramelized puff pastry layers filled with delicate Italian pastry cream.',
    },
    price: '€6,00',
    image: '/images/sweet-menu/des-millefoglie.webp',
    tags: ['dessert'],
    allergens: ['1 - Glutine', '3 - Uova', '7 - Latte'],
  },
  {
    id: 'des-meringa',
    category: 'Desserts',
    name: {
      it: 'Meringa',
      en: 'Crispy Vanilla Meringue',
    },
    description: {
      it: 'Meringa farcita con crema al gusto vaniglia.',
      en: 'Crisp baked meringue shells filled with smooth vanilla cream.',
    },
    price: '€6,00',
    image: '/images/sweet-menu/des-meringa.webp',
    tags: ['dessert'],
    allergens: ['3 - Uova', '7 - Latte'],
  },

  // ── I GELATI PER BAMBINI ──
  {
    id: 'des-rabbit',
    category: 'Desserts',
    name: {
      it: 'Rabbit',
      en: 'Rabbit Kids Gelato',
    },
    description: {
      it: 'Gelato al fiordilatte.',
      en: 'Creamy Italian fiordilatte milk gelato character for children.',
    },
    price: '€5,00',
    image: '/images/sweet-menu/des-rabbit.webp',
    tags: ['dessert'],
    allergens: ['7 - Latte'],
  },
  {
    id: 'des-pirata',
    category: 'Desserts',
    name: {
      it: 'Pirata',
      en: 'Pirate Kids Chocolate Gelato',
    },
    description: {
      it: 'Gelato al cioccolato.',
      en: 'Rich chocolate gelato character for children.',
    },
    price: '€5,00',
    image: '/images/sweet-menu/des-pirata.webp',
    tags: ['dessert'],
    allergens: ['7 - Latte'],
  },
  {
    id: 'des-principessa',
    category: 'Desserts',
    name: {
      it: 'Principessa',
      en: 'Princess Kids Strawberry Gelato',
    },
    description: {
      it: 'Gelato alla fragola.',
      en: 'Sweet natural strawberry gelato character for children.',
    },
    price: '€5,00',
    image: '/images/sweet-menu/des-principessa.webp',
    tags: ['dessert'],
    allergens: ['7 - Latte'],
  },

  // Additional items from the user-supplied sweet photo menu.
  {
    "id": "des-coppa-cioccolato-nocciola",
    "category": "Desserts",
    "name": {
      "it": "Coppa Cioccolato e Nocciola",
      "en": "Chocolate & Hazelnut Cup"
    },
    "description": {
      "it": "Coppa Cioccolato e Nocciola",
      "en": "Chocolate & Hazelnut Cup"
    },
    "price": "€6,00",
    "image": "/images/sweet-menu/des-coppa-cioccolato-nocciola.webp",
    "tags": [
      "dessert"
    ],
    "allergens": []
  },
  {
    "id": "des-torta-rubino",
    "category": "Desserts",
    "name": {
      "it": "Rubino Cheesecake",
      "en": "Rubino Cheesecake"
    },
    "description": {
      "it": "Rubino Cheesecake",
      "en": "Rubino Cheesecake"
    },
    "price": "€6,00",
    "image": "/images/sweet-menu/des-torta-rubino.webp",
    "tags": [
      "dessert"
    ],
    "allergens": []
  },
  {
    "id": "des-torta-tiramisu",
    "category": "Desserts",
    "name": {
      "it": "Tiramisù Tradizionale ai Savoiardi",
      "en": "Traditional Savoiardi Tiramisu"
    },
    "description": {
      "it": "Tiramisù Tradizionale ai Savoiardi",
      "en": "Traditional Savoiardi Tiramisu"
    },
    "price": "€5,00",
    "image": "/images/sweet-menu/des-torta-tiramisu.webp",
    "tags": [
      "dessert"
    ],
    "allergens": []
  },
  {
    "id": "des-coppa-crema-pistacchio",
    "category": "Desserts",
    "name": {
      "it": "Coppa Crema e Pistacchio",
      "en": "Cream & Pistachio Cup"
    },
    "description": {
      "it": "Coppa Crema e Pistacchio",
      "en": "Cream & Pistachio Cup"
    },
    "price": "€6,00",
    "image": "/images/sweet-menu/des-coppa-crema-pistacchio.webp",
    "tags": [
      "dessert"
    ],
    "allergens": []
  },
];
