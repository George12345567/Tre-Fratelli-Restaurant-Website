export type LocaleCode = 'it' | 'en' | 'ar';

export type LocalizedText = {
  it: string;
  en: string;
  ar: string;
};

export type DishCategory =
  | 'Antipasti'
  | 'Raw Seafood'
  | 'Primi Piatti'
  | 'Secondi Piatti'
  | 'Pizza & Calzoni'
  | 'Contorni & Salads'
  | 'Desserts';

export type DishTag =
  | 'seafood'
  | 'meat'
  | 'vegetarian'
  | 'signature'
  | 'raw'
  | 'pasta'
  | 'pizza'
  | 'dessert';

export interface Dish {
  id: string;
  category: DishCategory;
  name: LocalizedText;
  description: LocalizedText;
  price: string;
  tags: DishTag[];
  allergens: string[];
  image?: string;
}

export type WineCategory =
  | 'glass'
  | 'sparkling'
  | 'white'
  | 'red'
  | 'rose'
  | 'dessert'
  | 'beer'
  | 'soft'
  | 'coffee';

export interface Drink {
  id: string;
  category: WineCategory;
  name: string;
  region?: string;
  price: string;
  pairing?: LocalizedText;
  image?: string;
  description?: LocalizedText;
}

export type EventCategoryKey =
  | 'music'
  | 'tasting'
  | 'masterclass'
  | 'seasonal'
  | 'celebration';

export interface NewsPost {
  id: string;
  date: string;
  category: LocalizedText;
  title: LocalizedText;
  excerpt: LocalizedText;
  image: string;
  type?: EventCategoryKey;
  scheduleBadge?: LocalizedText;
  highlights?: LocalizedText[];
  badge?: LocalizedText;
  featured?: boolean;
}

export interface VisualCard {
  id: string;
  title: LocalizedText;
  copy: LocalizedText;
  image: string;
  alt: LocalizedText;
  price?: string;
  badge?: LocalizedText;
  categoryLabel?: LocalizedText;
  winePairing?: LocalizedText;
  tags?: LocalizedText[];
}

export interface ProcessStep {
  number: string;
  title: LocalizedText;
  description: LocalizedText;
}

export function getLocalized(text: LocalizedText, locale: string): string {
  if (locale === 'it' || locale === 'en' || locale === 'ar') {
    return text[locale] || text.it || text.en || '';
  }
  return text.it || text.en || '';
}
