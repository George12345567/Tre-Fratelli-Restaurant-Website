import type { LocalizedText, ProcessStep, VisualCard } from './types';

export const signatureDishes: VisualCard[] = [
  {
    id: 'sig-calamarata',
    title: {
      it: 'Calamarata con Astice Mediterraneo',
      en: 'Lobster Calamarata Tre Fratelli',
    },
    copy: {
      it: 'Pasta al bronzo, astice fresco del Mediterraneo e bisque ricca e vellutata.',
      en: 'Bronze-cut pasta, fresh Mediterranean lobster, and rich velvet bisque.',
    },
    image: '/images/dishes/primi-piatti/calamarata-astice-mediterraneo.webp',
    alt: {
      it: 'Piatto di calamarata fresca con astice servito in piatto di ceramica',
      en: 'Fresh calamarata pasta with lobster served in ceramic dish',
    },
    price: '€28',
    categoryLabel: {
      it: 'Primi di Mare',
      en: 'Seafood Pasta',
    },
    badge: {
      it: 'Piatto della Casa',
      en: 'House Specialty',
    },
    winePairing: {
      it: 'Vermentino di Gallura D.O.C.G.',
      en: 'Vermentino di Gallura D.O.C.G.',
    },
    tags: [
      { it: 'Trafilata al Bronzo', en: 'Bronze-Cut' },
      { it: 'Astice Mediterraneo', en: 'Fresh Lobster' },
    ],
  },
  {
    id: 'sig-crudo-mare',
    title: {
      it: 'Gran Crudo di Mare con Ostriche',
      en: 'Royal Raw Mediterranean Plateau',
    },
    copy: {
      it: 'Ostriche Fine de Claire, salmone e gamberi rossi su ghiaccio tritato e agrumi.',
      en: 'Fine de Claire oysters, wild salmon, and red prawns over crushed ice and citrus.',
    },
    image: '/images/dishes/raw-seafood/crudo-di-mare-misto.webp',
    alt: {
      it: 'Plateau di frutti di mare crudi con ostriche e gamberi rossi',
      en: 'Raw seafood plateau with oysters and red prawns',
    },
    price: '€32',
    categoryLabel: {
      it: 'Crudi di Mare',
      en: 'Raw Seafood',
    },
    badge: {
      it: 'Pescato del Giorno',
      en: 'Catch of the Day',
    },
    winePairing: {
      it: 'Franciacorta Brut D.O.C.G.',
      en: 'Franciacorta Brut D.O.C.G.',
    },
    tags: [
      { it: 'Ostriche Fine de Claire', en: 'Fine de Claire' },
      { it: 'Gamberi Rossi', en: 'Red Prawns' },
    ],
  },
  {
    id: 'sig-fiorentina',
    title: {
      it: 'Bistecca alla Fiorentina di Chianina',
      en: 'Chianina Fiorentina T-Bone',
    },
    copy: {
      it: 'Razza Chianina cotta sulla brace ardente di quercia viva, frollatura 35 giorni.',
      en: 'Certified Chianina seared over living oak embers, 35-day dry aged.',
    },
    image: '/images/dishes/secondi-piatti/bistecca-fiorentina-chianina.webp',
    alt: {
      it: 'Fiorentina alla brace servita su tagliere di legno antico',
      en: 'Grilled Fiorentina T-bone on rustic wooden board',
    },
    price: '€75',
    categoryLabel: {
      it: 'Secondi alla Brace',
      en: 'Wood-Fired Grill',
    },
    badge: {
      it: 'Brace di Quercia',
      en: 'Oak Embers',
    },
    winePairing: {
      it: 'Brunello di Montalcino D.O.C.G.',
      en: 'Brunello di Montalcino D.O.C.G.',
    },
    tags: [
      { it: 'Razza Chianina', en: 'Certified Chianina' },
      { it: 'Frollatura 35gg', en: '35-Day Dry Aged' },
    ],
  },
  {
    id: 'sig-margherita',
    title: {
      it: 'Margherita Verace D.O.P.',
      en: 'Authentic Margherita D.O.P.',
    },
    copy: {
      it: 'Pomodoro San Marzano, mozzarella di bufala e basilico in forno a 450°C.',
      en: 'San Marzano tomatoes, buffalo mozzarella, and basil baked in 90s at 450°C.',
    },
    image: '/images/dishes/pizza/pizza-margherita-crudo-cornicione.webp',
    alt: {
      it: 'Pizza Margherita napoletana con cornicione alto e alveolato',
      en: 'Neapolitan Margherita pizza with airy charred crust',
    },
    price: '€14',
    categoryLabel: {
      it: 'Pizzeria Verace',
      en: 'Neapolitan Pizza',
    },
    badge: {
      it: 'Forno a Legna',
      en: 'Wood-Fired',
    },
    winePairing: {
      it: 'Greco di Tufo D.O.C.G.',
      en: 'Greco di Tufo D.O.C.G.',
    },
    tags: [
      { it: 'Lievitazione 48h', en: '48h Fermentation' },
      { it: 'San Marzano D.O.P.', en: 'San Marzano D.O.P.' },
    ],
  },
];

export const pizzaProcessSteps: ProcessStep[] = [
  {
    number: '01',
    title: {
      it: 'Lenta Maturazione a 48 Ore',
      en: '48-Hour Cold Fermentation',
    },
    description: {
      it: 'Farine italiane macinate a pietra, lievito madre naturale e maturazione controllata a freddo per una digeribilità senza paragoni.',
      en: 'Stone-ground Italian wheat flour, natural sourdough starter, and controlled cold maturation for unparalleled lightness and digestion.',
    },
  },
  {
    number: '02',
    title: {
      it: 'Stesura Rigorosamente a Mano',
      en: 'Artisanal Hand Stretching',
    },
    description: {
      it: 'Nessun mattarello: le mani del pizzaiolo spingono delicatamente i gas verso il cornicione, preservando la struttura alveolata.',
      en: 'No mechanical rollers: skilled fingers gently push air bubbles outward toward the crust, protecting the fragile honeycomb interior.',
    },
  },
  {
    number: '03',
    title: {
      it: 'Solo Ingredienti D.O.P. Certificati',
      en: 'Certified D.O.P. Ingredients',
    },
    description: {
      it: 'Pomodoro San Marzano schiacciato a mano, fior di latte fresco del giorno, olio extravergine franto a freddo e basilico odoroso.',
      en: 'Hand-crushed San Marzano tomatoes, same-day fresh mozzarella fior di latte, cold-pressed olive oil, and sweet basil.',
    },
  },
  {
    number: '04',
    title: {
      it: '90 Secondi a 450°C nel Forno a Legna',
      en: '90 Seconds at 450°C in Beech Fire',
    },
    description: {
      it: 'Un forno in mattoni vulcanici e fiamma viva di faggio asciutto: calore istantaneo che sigilla gli aromi e dona la tipica maculatura.',
      en: 'Volcanic brick dome oven fired with dry beech logs: intense radiant heat seals flavors and creates the leopard-spotted crust.',
    },
  },
];

export const atmosphereGallery: VisualCard[] = [
  {
    id: 'atm-1',
    title: {
      it: 'La Sala Principale delle Botti',
      en: 'The Main Vault & Cellar Hall',
    },
    copy: {
      it: 'Mattoni a vista, luci calde soffuse e tavoli in massello di noce per un intimità senza tempo.',
      en: 'Exposed Roman bricks, gentle warm lighting, and solid walnut tables designed for slow conversations.',
    },
    image: '/images/hero/restaurant-table-ambiance.webp',
    alt: {
      it: 'Tavoli apparecchiati con pasta all astice e calici di vino',
      en: 'Elegant dining tables set with fresh lobster pasta and wine glasses',
    },
  },
  {
    id: 'atm-2',
    title: {
      it: 'La Spianatoia e il Laboratorio della Pasta',
      en: 'The Morning Pasta Counter',
    },
    copy: {
      it: 'Il luogo dove ogni mattina farina e uova fresche si trasformano in tagliolini, ravioli e calamarata.',
      en: 'Where fresh eggs and stone-milled flour become fragrant tagliolini, ravioli, and calamarata every dawn.',
    },
    image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&q=80&w=900',
    alt: {
      it: 'Cucina con pasta fresca appena tirata a mano',
      en: 'Kitchen counter with fresh handmade pasta',
    },
  },
  {
    id: 'atm-3',
    title: {
      it: 'Il Fuoco del Forno a Legna',
      en: 'The Beechwood Flame & Hearth',
    },
    copy: {
      it: 'Il cuore pulsante della nostra pizzeria, acceso all alba per raggiungere la temperatura perfetta.',
      en: 'The beating heart of our pizzeria, stoked at sunrise to reach glowing 450°C perfection.',
    },
    image: 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&q=80&w=900',
    alt: {
      it: 'Forno a legna acceso con pizza in cottura',
      en: 'Wood-fired oven glowing with flame and baking pizza',
    },
  },
  {
    id: 'atm-4',
    title: {
      it: 'La Corte Giardino Estiva',
      en: 'The Courtyard Garden Terrace',
    },
    copy: {
      it: 'Un oasi riservata tra piante di limone e gelsomino per cenare sotto le stelle nelle notti estive.',
      en: 'A private sanctuary nestled among lemon trees and jasmine for open-air dining under summer stars.',
    },
    image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&q=80&w=900',
    alt: {
      it: 'Tavoli all aperto illuminati da lanterne in corte fiorita',
      en: 'Outdoor dining patio lit by lanterns with flower garden',
    },
  },
];

export interface Testimonial {
  id: string;
  author: string;
  role: LocalizedText;
  quote: LocalizedText;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    author: 'Giulia & Alessandro Rossi',
    role: {
      it: 'Ospiti Abituali da Milano',
      en: 'Milano Locals & Food Enthusiasts',
    },
    quote: {
      it: 'La Calamarata con astice e la Margherita con bufala ti fanno sentire a casa fin dal primo boccone. Un accoglienza calda e sincera che non si dimentica.',
      en: 'The lobster calamarata and buffalo margherita make you feel instantly at home. Genuine warmth and care in every detail.',
    },
    rating: 5,
  },
  {
    id: 'test-2',
    author: 'Chef Davide Moretti',
    role: {
      it: 'Critico Enogastronomico',
      en: 'Culinary Writer & Critic',
    },
    quote: {
      it: 'Raramente si trova un impasto per pizza così leggero dopo 48 ore di fermentazione abbinato a una carta dei vini di questo livello.',
      en: 'Rarely do you experience pizza dough so feather-light after 48h fermentation paired with such an intelligent Italian wine list.',
    },
    rating: 5,
  },
  {
    id: 'test-3',
    author: 'Elena & Marcus Vance',
    role: {
      it: 'Viaggiatori Gastronomici',
      en: 'Gastronomy Travelers',
    },
    quote: {
      it: 'I tagliolini al tartufo fresco e la Fiorentina alla brace sono stati il momento clou del nostro soggiorno in Italia.',
      en: 'The fresh truffle tagliolini and oak-grilled Fiorentina steak were unequivocally the pinnacle of our entire Italian journey.',
    },
    rating: 5,
  },
];
