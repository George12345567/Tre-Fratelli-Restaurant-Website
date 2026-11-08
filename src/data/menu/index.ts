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
    ar: 'البيتزا والكالتزوني وبيتزا المتر على الحطب',
  },
  Antipasti: {
    it: 'Antipasti di Terra & Tradizione',
    en: 'Antipasti (Starters)',
    ar: 'مقبلات الأرض والأطباق التراثية',
  },
  'Raw Seafood': {
    it: 'Antipasti di Mare & Crudité',
    en: 'Seafood Starters & Raw Bar',
    ar: 'مقبلات ثمار البحر والأسماك الطازجة',
  },
  'Primi Piatti': {
    it: 'Primi Piatti (Pasta, Risotti & In Crosta)',
    en: 'Primi Piatti (Pasta, Risotto & Baked Crust)',
    ar: 'الباستا الإيطالية والريزوتو وأطباق الفرن',
  },
  'Secondi Piatti': {
    it: 'Secondi, Grigliate & Barche di 3 Fratelli',
    en: 'Secondi (Grill, Seafood & Grand Ships)',
    ar: 'الأطباق الرئيسية والمشاوي وسفن المأكولات البحرية الكبرى',
  },
  'Contorni & Salads': {
    it: 'Insalatone & Contorni Sfiziosi',
    en: 'Grand Meal Salads & Side Dishes',
    ar: 'السلطات الملكية والمقبلات الجانبية الشهية',
  },
  Desserts: {
    it: 'La Carta dei Dolci (Bindi)',
    en: 'Dessert Menu (Bindi)',
    ar: 'قائمة الحلويات الإيطالية (بيندي)',
  },
};

export const shortCategoryLabels: Record<DishCategory, LocalizedText> = {
  'Pizza & Calzoni': {
    it: 'Pizze a Legna',
    en: 'Wood-Fired Pizza',
    ar: 'بيتزا الحطب',
  },
  Antipasti: {
    it: 'Antipasti',
    en: 'Antipasti',
    ar: 'المقبلات',
  },
  'Raw Seafood': {
    it: 'Crudi & Mare',
    en: 'Seafood Starters',
    ar: 'ثمار البحر',
  },
  'Primi Piatti': {
    it: 'Primi & Risotti',
    en: 'Pasta & Primi',
    ar: 'الباستا والريزوتو',
  },
  'Secondi Piatti': {
    it: 'Secondi & Barche',
    en: 'Mains & Grand Ships',
    ar: 'الرئيسية وسفن البحر',
  },
  'Contorni & Salads': {
    it: 'Insalate & Contorni',
    en: 'Salads & Sides',
    ar: 'السلطات والمقبلات',
  },
  Desserts: {
    it: 'Dolci',
    en: 'Desserts',
    ar: 'الحلويات',
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
