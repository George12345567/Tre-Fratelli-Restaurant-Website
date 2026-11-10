export type PageKey =
  | 'home'
  | 'restaurant'
  | 'pizzeria'
  | 'menu'
  | 'wineDrinks'
  | 'sweets'
  | 'newsPromo'
  | 'location';

export interface NavItem {
  key: PageKey;
  href: (locale: string) => string;
  translationKey: `nav.${string}`;
}

export const navItems: NavItem[] = [
  {
    key: 'home',
    href: (locale: string) => `/${locale}`,
    translationKey: 'nav.home',
  },
  {
    key: 'restaurant',
    href: (locale: string) => `/${locale}/restaurant`,
    translationKey: 'nav.restaurant',
  },
  {
    key: 'menu',
    href: (locale: string) => `/${locale}/menu`,
    translationKey: 'nav.menu',
  },
  {
    key: 'sweets',
    href: (locale: string) => `/${locale}/sweets`,
    translationKey: 'nav.sweets',
  },
  {
    key: 'wineDrinks',
    href: (locale: string) => `/${locale}/wine-drinks`,
    translationKey: 'nav.wineDrinks',
  },
  {
    key: 'newsPromo',
    href: (locale: string) => `/${locale}/news-promo`,
    translationKey: 'nav.newsPromo',
  },
  {
    key: 'location',
    href: (locale: string) => `/${locale}/location`,
    translationKey: 'nav.location',
  },
];
