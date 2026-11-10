import fs from 'fs';
import path from 'path';
import {
  menuCategoryConfigs,
  getMenuCategoryConfig,
  getAdjacentCategoryConfigs,
  getCategoryData,
  type MenuCategorySlug,
} from '../src/data/menu/menuCategories';
import { menuDishes } from '../src/data/menu/index';
import { drinksData } from '../src/data/wine';

console.log('--- STARTING COMPREHENSIVE MENU VERIFICATION ---');

// 1. Verify 8 categories
const expectedSlugs: MenuCategorySlug[] = [
  'antipasti',
  'primi-piatti',
  'secondi-piatti',
  'contorni',
  'dolci',
  'pizze',
  'bevande',
  'carta-vini',
];

console.log(`Checking category count: ${menuCategoryConfigs.length} (Expected: 8)`);
if (menuCategoryConfigs.length !== 8) {
  throw new Error(`Expected 8 categories, got ${menuCategoryConfigs.length}`);
}

for (const slug of expectedSlugs) {
  const config = getMenuCategoryConfig(slug);
  if (!config) {
    throw new Error(`Missing category config for slug: ${slug}`);
  }
  // Check image exists in public folder
  const imgPath = path.join(process.cwd(), 'public', config.image.replace(/^\//, ''));
  if (!fs.existsSync(imgPath)) {
    throw new Error(`Category image does not exist on disk: ${imgPath}`);
  }
}
console.log('✓ All 8 category configs and images verified successfully.');

// 2. Verify total dishes & drinks preservation
let totalDishesCounted = 0;
let totalDrinksCounted = 0;
const seenDishIds = new Set<string>();
const seenDrinkIds = new Set<string>();

for (const config of menuCategoryConfigs) {
  const data = getCategoryData(config.slug);

  if (data.kind === 'food') {
    totalDishesCounted += data.dishes.length;
    for (const dish of data.dishes) {
      if (seenDishIds.has(dish.id)) {
        throw new Error(`Duplicate dish ID detected: ${dish.id}`);
      }
      seenDishIds.add(dish.id);

      if (!dish.name.it || !dish.name.en) {
        throw new Error(`Missing localized name in dish: ${dish.id}`);
      }
      if (!dish.price || !dish.price.includes('€')) {
        throw new Error(`Invalid price in dish: ${dish.id}: ${dish.price}`);
      }
    }
  } else {
    totalDrinksCounted += data.drinks.length;
    for (const drink of data.drinks) {
      if (seenDrinkIds.has(drink.id)) {
        throw new Error(`Duplicate drink ID detected: ${drink.id}`);
      }
      seenDrinkIds.add(drink.id);

      if (!drink.name) {
        throw new Error(`Missing name in drink: ${drink.id}`);
      }
      if (!drink.price || !drink.price.includes('€')) {
        throw new Error(`Invalid price in drink: ${drink.id}: ${drink.price}`);
      }
    }
  }
}

// Counts captured from the checkpoint before Arabic was removed.
const expectedDishCount = 229;
const expectedDrinkCount = 43;
console.log(`Dishes verified: ${totalDishesCounted} (Expected: ${expectedDishCount}, Master: ${menuDishes.length})`);
console.log(`Drinks verified: ${totalDrinksCounted} (Expected: ${expectedDrinkCount}, Master: ${drinksData.length})`);

if (totalDishesCounted !== expectedDishCount || menuDishes.length !== expectedDishCount) {
  throw new Error(`Dish count mismatch: counted ${totalDishesCounted}, master has ${menuDishes.length}`);
}

if (totalDrinksCounted !== expectedDrinkCount || drinksData.length !== expectedDrinkCount) {
  throw new Error(`Drink count mismatch: counted ${totalDrinksCounted}, master has ${drinksData.length}`);
}

console.log(`✓ All ${expectedDishCount} food dishes and ${expectedDrinkCount} beverage items preserved with zero duplicates.`);

// 3. Verify the main menu loop. Desserts and beverages have dedicated pages.
const mainCategorySlugs = ['antipasti', 'primi-piatti', 'secondi-piatti', 'contorni', 'pizze'];
for (let i = 0; i < mainCategorySlugs.length; i++) {
  const current = mainCategorySlugs[i];
  const { prev, next } = getAdjacentCategoryConfigs(current);
  const expectedPrev = mainCategorySlugs[(i - 1 + mainCategorySlugs.length) % mainCategorySlugs.length];
  const expectedNext = mainCategorySlugs[(i + 1) % mainCategorySlugs.length];

  if (prev.slug !== expectedPrev) {
    throw new Error(`For ${current}, expected prev ${expectedPrev}, got ${prev.slug}`);
  }
  if (next.slug !== expectedNext) {
    throw new Error(`For ${current}, expected next ${expectedNext}, got ${next.slug}`);
  }
}
console.log('✓ Next/Previous carousel navigation verified.');

console.log('--- ALL VERIFICATION CHECKS PASSED PERFECTLY ---');
