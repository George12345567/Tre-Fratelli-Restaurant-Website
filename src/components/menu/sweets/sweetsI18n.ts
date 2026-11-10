import type { Locale } from '@/i18n/routing';

export interface SweetsDictionary {
  breadcrumbLabel: string;
  breadcrumbHome: string;
  breadcrumbMenu: string;
  breadcrumbCurrent: string;
  eyebrow: string;
  title: string;
  searchPlaceholder: string;
  searchResults: string;
  clearSearch: string;
  allCategories: string;
  dessertCount: (count: number) => string;
  chaptersCount: (count: number) => string;
  details: string;
  signatureBadge: string;
  kidsBadge: string;
  noResultsTitle: string;
  noResultsCopy: string;
  resetFilter: string;
  pairingEyebrow: string;
  pairingTitle: string;
  pairingCopy: string;
  pairingActionWine: string;
  pairingActionReserve: string;
  chapter: string;
  previousDessert: string;
  nextDessert: string;
}

export const sweetsTranslations: Record<Locale, SweetsDictionary> = {
  it: {
    breadcrumbLabel: 'Percorso di navigazione',
    breadcrumbHome: 'Home',
    breadcrumbMenu: 'Menù & Pizzeria',
    breadcrumbCurrent: 'La Carta dei Dolci',
    eyebrow: 'Pasticceria & Maestri Gelatieri',
    title: 'La Carta dei Dolci',
    searchResults: 'Risultati della ricerca',
    clearSearch: 'Cancella la ricerca',
    searchPlaceholder: 'Cerca un dolce…',
    allCategories: 'Tutti i Dolci',
    dessertCount: (count: number) => `${count} dolci`,
    chaptersCount: (count: number) => `${count} capitoli`,
    details: 'Vedi Dettagli',
    signatureBadge: 'Specialità',
    kidsBadge: 'Bimbi',
    noResultsTitle: 'Nessun dolce trovato',
    noResultsCopy: 'Nessun dessert corrisponde alla ricerca. Prova con un termine diverso o azzera il filtro.',
    resetFilter: 'Mostra tutti i dolci',
    pairingEyebrow: 'Fine Pasto & Cantina',
    pairingTitle: 'L’Abbinamento Perfetto per Concludere',
    pairingCopy:
      'Completa la tua esperienza con un autentico caffè espresso, un passito toscano o un bicchiere ghiacciato di Vecchio Amaro del Capo dalla nostra cantina.',
    pairingActionWine: 'Scopri Vini & Cantina',
    pairingActionReserve: 'Prenota un Tavolo',
    chapter: 'Capitolo',
    previousDessert: 'Dolce precedente',
    nextDessert: 'Dolce successivo',
  },
  en: {
    breadcrumbLabel: 'Breadcrumb',
    breadcrumbHome: 'Home',
    breadcrumbMenu: 'Menu & Pizzeria',
    breadcrumbCurrent: 'Dessert Menu',
    eyebrow: 'Pastry & Artisan Gelato Masters',
    title: 'The Dessert Menu',
    searchResults: 'Search results',
    clearSearch: 'Clear search',
    searchPlaceholder: 'Search desserts…',
    allCategories: 'All Desserts',
    dessertCount: (count: number) => `${count} desserts`,
    chaptersCount: (count: number) => `${count} chapters`,
    details: 'View Details',
    signatureBadge: 'Signature',
    kidsBadge: 'Kids',
    noResultsTitle: 'No desserts found',
    noResultsCopy: 'No desserts match your search term. Try a different query or reset filters.',
    resetFilter: 'Show all desserts',
    pairingEyebrow: 'After-Dinner & Cellar',
    pairingTitle: 'The Perfect Dessert Pairing',
    pairingCopy:
      'Complete your dining experience with authentic espresso, Tuscan dessert wines, chilled limoncello, or fine Italian digestifs from our cellar.',
    pairingActionWine: 'Explore Wine & Cellar',
    pairingActionReserve: 'Reserve a Table',
    chapter: 'Chapter',
    previousDessert: 'Previous dessert',
    nextDessert: 'Next dessert',
  },
  ar: {
    breadcrumbLabel: 'مسار التنقل',
    breadcrumbHome: 'الرئيسية',
    breadcrumbMenu: 'قائمة الطعام والبيتزا',
    breadcrumbCurrent: 'قائمة الحلويات',
    eyebrow: 'فنون الباستيتشيريا والجيلاتو الإيطالي',
    title: 'قائمة الحلويات الإيطالية',
    searchResults: 'نتائج البحث',
    clearSearch: 'مسح البحث',
    searchPlaceholder: 'ابحث عن حلوى…',
    allCategories: 'جميع الحلويات',
    dessertCount: (count: number) => `${count} صنف`,
    chaptersCount: (count: number) => `${count} أقسام`,
    details: 'عرض التفاصيل',
    signatureBadge: 'مميز',
    kidsBadge: 'للأطفال',
    noResultsTitle: 'لم نجد أي صنف مطابق',
    noResultsCopy: 'لا توجد حلويات تطابق بحثك الحالي. جرب كلمة أخرى أو أعد ضبط التصفية.',
    resetFilter: 'عرض جميع الحلويات',
    pairingEyebrow: 'ختام الوجبة والقبو',
    pairingTitle: 'التناغم المثالي مع الحلوى',
    pairingCopy:
      'اختتم وجبتك بقهوة إسبريسو إيطالية فاخرة أو مشروبات معتقة مختارة بعناية من قبو تري فراتيلي.',
    pairingActionWine: 'استكشف قائمة المشروبات',
    pairingActionReserve: 'احجز طاولة',
    chapter: 'الفصل',
    previousDessert: 'الحلوى السابقة',
    nextDessert: 'الحلوى التالية',
  },
};

export function getSweetsI18n(locale: Locale): SweetsDictionary {
  return sweetsTranslations[locale] || sweetsTranslations.it;
}
