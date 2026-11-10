import { dessertDishes } from './desserts';
import { groupDishesBySubSections } from '@/components/menu/menuGrouping';

// The photo menu is a projection of the canonical dessert catalog, not new prices.
export const sweetMenuDishes = dessertDishes.filter((dish) => dish.image?.startsWith('/images/sweet-menu/'));
export const sweetMenuSections = groupDishesBySubSections('Desserts', sweetMenuDishes);
