import type { Dish, DishCategory, LocalizedText } from '../types';
import { antipastiDishes } from './antipasti';
import { primiDishes } from './primi';
import { secondiDishes } from './secondi';
import { pizzaDishes } from './pizza';
import { contorniDishes } from './contorni';
import { dessertDishes } from './desserts';

export { antipastiDishes } from './antipasti';
export { primiDishes } from './primi';
export { secondiDishes } from './secondi';
export { pizzaDishes } from './pizza';
export { contorniDishes } from './contorni';
export { dessertDishes } from './desserts';

export const categoryLabels: Record<DishCategory, LocalizedText> = {
  'Pizza & Calzoni': {
    it: 'Pizze a Legna, Calzoni & Al Metro',
    en: 'Wood-Fired Pizza, Calzoni & Meter',
  },
  Antipasti: {
    it: 'Antipasti di Terra & Tradizione',
    en: 'Antipasti (Starters)',
  },
  'Raw Seafood': {
    it: 'Antipasti di Mare & Crudité',
    en: 'Seafood Starters & Raw Bar',
  },
  'Primi Piatti': {
    it: 'Primi Piatti (Pasta, Risotti & In Crosta)',
    en: 'Primi Piatti (Pasta, Risotto & Baked Crust)',
  },
  'Secondi Piatti': {
    it: 'Secondi, Grigliate & Barche di 3 Fratelli',
    en: 'Secondi (Grill, Seafood & Grand Ships)',
  },
  'Contorni & Salads': {
    it: 'Insalatone & Contorni Sfiziosi',
    en: 'Grand Meal Salads & Side Dishes',
  },
  Desserts: {
    it: 'La Carta dei Dolci (Bindi)',
    en: 'Dessert Menu (Bindi)',
  },
};

export const shortCategoryLabels: Record<DishCategory, LocalizedText> = {
  'Pizza & Calzoni': {
    it: 'Pizze a Legna',
    en: 'Wood-Fired Pizza',
  },
  Antipasti: {
    it: 'Antipasti',
    en: 'Antipasti',
  },
  'Raw Seafood': {
    it: 'Crudi & Mare',
    en: 'Seafood Starters',
  },
  'Primi Piatti': {
    it: 'Primi & Risotti',
    en: 'Pasta & Primi',
  },
  'Secondi Piatti': {
    it: 'Secondi & Barche',
    en: 'Mains & Grand Ships',
  },
  'Contorni & Salads': {
    it: 'Insalate & Contorni',
    en: 'Salads & Sides',
  },
  Desserts: {
    it: 'Dolci',
    en: 'Desserts',
  },
};

// ── Master Menu Dishes Combined ──
export const menuDishes: Dish[] = [
  ...pizzaDishes,
  ...antipastiDishes,
  ...primiDishes,
  ...secondiDishes,
  ...contorniDishes,
  ...dessertDishes,
];
