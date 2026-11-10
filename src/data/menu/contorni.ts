import type { Dish } from '../types';

export const contorniDishes: Dish[] = [
  // ── INSALATONE (PDF Pag. 6) ──
  {
    id: 'ins-amore',
    category: 'Contorni & Salads',
    name: {
      it: "Insalatone d'Amore",
      en: "Insalatone d'Amore",
    },
    description: {
      it: 'Gamberetti, salmone affumicato, avocado, mango, cipolla, cetrioli, rucola.',
      en: 'Shrimp, smoked salmon, avocado, mango, red onion, cucumbers, wild rocket.',
    },
    price: '€14,00',
    tags: ['signature', 'seafood'],
    allergens: ['2 - Crostacei', '4 - Pesce'],
    image: '/images/dishes/contorni/insalata-frutti-mare-calamari.webp',
  },
  {
    id: 'ins-greca',
    category: 'Contorni & Salads',
    name: {
      it: 'Insalatona Greca',
      en: 'Greek Salad',
    },
    description: {
      it: 'Feta, cetrioli, cipolla, olive nere, insalata verde, pomodorini.',
      en: 'Feta cheese, cucumbers, red onion, black olives, mixed greens, cherry tomatoes.',
    },
    price: '€12,00',
    tags: ['vegetarian'],
    allergens: ['7 - Latte'],
  },
  {
    id: 'ins-mare',
    category: 'Contorni & Salads',
    name: {
      it: 'Insalatona ai Frutti di Mare Tre Fratelli',
      en: 'Tre Fratelli Seafood Salad',
    },
    description: {
      it: 'Insalata mista, frutti di mare.',
      en: 'Mixed garden greens, assortment of tender seafood.',
    },
    price: '€14,00',
    tags: ['signature', 'seafood'],
    allergens: ['2 - Crostacei', '4 - Pesce', '14 - Molluschi'],
    image: '/images/dishes/contorni/insalata-mista-mediterranea.webp',
  },
  {
    id: 'ins-carne',
    category: 'Contorni & Salads',
    name: {
      it: 'Insalatona di Carne',
      en: 'Beef, Buffalo Mozzarella & Sesame Salad',
    },
    description: {
      it: 'Insalata mista, carne di manzo, glassa di aceto balsamico, sesamo, bufala, scaglie di grana.',
      en: 'Mixed greens, seared beef strips, balsamic glaze, toasted sesame, buffalo mozzarella, shaved grana.',
    },
    price: '€12,00',
    tags: ['meat'],
    allergens: ['7 - Latte', '11 - Semi di sesamo'],
  },
  {
    id: 'ins-pollo',
    category: 'Contorni & Salads',
    name: {
      it: 'Insalatona di Pollo',
      en: 'Chicken Teriyaki Salad with Shaved Grana',
    },
    description: {
      it: 'Insalata mista, pomodoro, scaglie di grana, pollo, salsa teriyaki.',
      en: 'Mixed greens, cherry tomatoes, shaved grana, grilled chicken breast, teriyaki glaze.',
    },
    price: '€13,00',
    tags: ['meat'],
    allergens: ['6 - Soia', '7 - Latte'],
  },

  // ── CONTORNI (PDF Pag. 6) ──
  {
    id: 'con-1',
    category: 'Contorni & Salads',
    name: {
      it: 'Insalata Mista',
      en: 'Mixed Garden Salad',
    },
    description: { it: '', en: '' },
    price: '€4,00',
    tags: ['vegetarian'],
    allergens: [],
  },
  {
    id: 'con-2',
    category: 'Contorni & Salads',
    name: {
      it: 'Patate al Forno',
      en: 'Rosemary Roasted Potatoes',
    },
    description: { it: '', en: '' },
    price: '€5,00',
    tags: ['vegetarian'],
    allergens: [],
    image: '/images/dishes/contorni/patate-forno-rosmarino.webp',
  },
  {
    id: 'con-3',
    category: 'Contorni & Salads',
    name: {
      it: 'Patatine Fritte',
      en: 'Golden French Fries',
    },
    description: { it: '', en: '' },
    price: '€6,00',
    tags: ['vegetarian'],
    allergens: [],
  },
  {
    id: 'con-4',
    category: 'Contorni & Salads',
    name: {
      it: 'Patatine Fritte con Salsa',
      en: 'French Fries with Dipping Sauce',
    },
    description: { it: '', en: '' },
    price: '€6,50',
    tags: ['vegetarian'],
    allergens: [],
  },
  {
    id: 'con-5',
    category: 'Contorni & Salads',
    name: {
      it: "Patate Fry'n Dip",
      en: "Crispy Fry'n Dip Scoop Potatoes",
    },
    description: { it: '', en: '' },
    price: '€6,00',
    tags: ['vegetarian'],
    allergens: [],
  },
  {
    id: 'con-6',
    category: 'Contorni & Salads',
    name: {
      it: 'Purè di Patate',
      en: 'Creamy Homemade Mashed Potatoes',
    },
    description: { it: '', en: '' },
    price: '€5,00',
    tags: ['vegetarian'],
    allergens: ['7 - Latte'],
  },
  {
    id: 'con-7',
    category: 'Contorni & Salads',
    name: {
      it: 'Verdure Grigliate',
      en: 'Seasonal Char-Grilled Vegetables',
    },
    description: { it: '', en: '' },
    price: '€5,00',
    tags: ['vegetarian'],
    allergens: [],
    image: '/images/dishes/contorni/verdure-griglia-stagione.webp',
  },
  {
    id: 'con-8',
    category: 'Contorni & Salads',
    name: {
      it: 'Broccoli Aglio, Olio e Peperoncino',
      en: 'Sautéed Broccoli with Garlic, Olive Oil & Chilli',
    },
    description: { it: '', en: '' },
    price: '€5,00',
    tags: ['vegetarian'],
    allergens: [],
  },
  {
    id: 'con-9',
    category: 'Contorni & Salads',
    name: {
      it: 'Zucchine e Fior di Zucca Fritti',
      en: 'Crispy Fried Zucchini & Squash Blossoms',
    },
    description: { it: '', en: '' },
    price: '€4,50',
    tags: ['vegetarian'],
    allergens: ['1 - Glutine'],
  },
  {
    id: 'con-10',
    category: 'Contorni & Salads',
    name: {
      it: 'Spinaci al Burro / Aglio Olio e Peperoncino',
      en: 'Fresh Spinach in Butter or Garlic, Oil & Chilli',
    },
    description: { it: '', en: '' },
    price: '€5,00',
    tags: ['vegetarian'],
    allergens: ['7 - Latte'],
  },
  {
    id: 'con-11',
    category: 'Contorni & Salads',
    name: {
      it: 'Friarielli Aglio, Olio e Peperoncino',
      en: 'Neapolitan Friarielli with Garlic & Chilli',
    },
    description: { it: '', en: '' },
    price: '€5,00',
    tags: ['vegetarian'],
    allergens: [],
    image: '/images/dishes/contorni/caponata-siciliana-agrodolce.webp',
  },
  {
    id: 'con-12',
    category: 'Contorni & Salads',
    name: {
      it: 'Insalata di Rucola, Noci, Pomodorini, Mais e Cetrioli',
      en: 'Rocket, Walnut, Cherry Tomato, Sweetcorn & Cucumber Salad',
    },
    description: { it: '', en: '' },
    price: '€4,50',
    tags: ['vegetarian'],
    allergens: ['8 - Frutta a guscio'],
  },
];
