import type { Locale } from '@/i18n/routing';

export interface SweetsDictionary {
  breadcrumbHome: string;
  breadcrumbMenu: string;
  breadcrumbCurrent: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  allergenNotice: string;
  searchPlaceholder: string;
  allCategories: string;
  dessertCount: (count: number) => string;
  details: string;
  signatureBadge: string;
  kidsBadge: string;
  noResultsTitle: string;
  noResultsCopy: string;
  resetFilter: string;
  pairingTitle: string;
  pairingCopy: string;
  pairingActionWine: string;
  pairingActionReserve: string;
  chapter: string;
}

export const sweetsTranslations: Record<Locale, SweetsDictionary> = {
  it: {
    breadcrumbHome: 'Home',
    breadcrumbMenu: 'Menù & Pizzeria',
    breadcrumbCurrent: 'La Carta dei Dolci',
    eyebrow: 'Pasticceria & Maestri Gelatieri',
    title: 'La Carta dei Dolci',
    subtitle:
      'Una collezione di 36 capolavori dell’arte pasticcera italiana: dai semifreddi d’autore e le grandi torte della tradizione, ai tartufi gelato, alle coppe e ai dessert dedicati ai più piccoli.',
    allergenNotice:
      'Per la lista dettagliata degli ingredienti e degli allergeni, il nostro personale di sala è a vostra completa disposizione.',
    searchPlaceholder: 'Cerca un dolce (es. Pistacchio, Amarena, Cioccolato)...',
    allCategories: 'Tutti i Dolci',
    dessertCount: (count: number) => `${count} dolci`,
    details: 'Vedi Dettagli',
    signatureBadge: 'Specialità',
    kidsBadge: 'Bimbi',
    noResultsTitle: 'Nessun dolce trovato',
    noResultsCopy: 'Nessun dessert corrisponde alla ricerca. Prova con un termine diverso o azzera il filtro.',
    resetFilter: 'Mostra tutti i 36 dolci',
    pairingTitle: 'L’Abbinamento Perfetto per Concludere',
    pairingCopy:
      'Completa la tua esperienza con un autentico caffè espresso, un passito toscano o un bicchiere ghiacciato di Vecchio Amaro del Capo dalla nostra cantina.',
    pairingActionWine: 'Scopri Vini & Cantina',
    pairingActionReserve: 'Prenota un Tavolo',
    chapter: 'Capitolo',
  },
  en: {
    breadcrumbHome: 'Home',
    breadcrumbMenu: 'Menu & Pizzeria',
    breadcrumbCurrent: 'Dessert Menu',
    eyebrow: 'Pastry & Artisan Gelato Masters',
    title: 'The Dessert Menu',
    subtitle:
      'An exclusive collection of 36 artisan Italian creations: from signature semifreddi and classic heritage cakes, to gourmet tartufi, gelato cups, and kids favorites.',
    allergenNotice:
      'Please ask our serving team for detailed ingredient lists and allergen guidance before ordering.',
    searchPlaceholder: 'Search desserts (e.g., Pistachio, Cherry, Chocolate)...',
    allCategories: 'All Desserts',
    dessertCount: (count: number) => `${count} desserts`,
    details: 'View Details',
    signatureBadge: 'Signature',
    kidsBadge: 'Kids',
    noResultsTitle: 'No desserts found',
    noResultsCopy: 'No desserts match your search term. Try a different query or reset filters.',
    resetFilter: 'Show all 36 desserts',
    pairingTitle: 'The Perfect Dessert Pairing',
    pairingCopy:
      'Complete your dining experience with authentic espresso, Tuscan dessert wines, chilled limoncello, or fine Italian digestifs from our cellar.',
    pairingActionWine: 'Explore Wine & Cellar',
    pairingActionReserve: 'Reserve a Table',
    chapter: 'Chapter',
  },
  ar: {
    breadcrumbHome: 'الرئيسية',
    breadcrumbMenu: 'قائمة الطعام والبيتزا',
    breadcrumbCurrent: 'قائمة الحلويات',
    eyebrow: 'فنون الباستيتشيريا والجيلاتو الإيطالي',
    title: 'قائمة الحلويات الإيطالية',
    subtitle:
      'تشكيلة حصرية من 36 صنفاً من روائع الحلويات الإيطالية الأصيلة: من السيمفريدو الفاخر والكيك التراثي، إلى التارتوفو، كؤوس الجيلاتو وأصناف الأطفال المبهجة.',
    allergenNotice:
      'للاطلاع على المكونات ومسببات الحساسية، يُرجى التكرم بسؤال طاقم الضيافة قبل الطلب.',
    searchPlaceholder: 'ابحث عن حلوى (مثل: فستق، شوكولاتة، كرز)...',
    allCategories: 'جميع الحلويات',
    dessertCount: (count: number) => `${count} صنف`,
    details: 'التفاصيل والحساسية',
    signatureBadge: 'مميز',
    kidsBadge: 'للأطفال',
    noResultsTitle: 'لم نجد أي صنف مطابق',
    noResultsCopy: 'لا توجد حلويات تطابق بحثك الحالي. جرب كلمة أخرى أو أعد ضبط التصفية.',
    resetFilter: 'عرض جميع الـ 36 حلوى',
    pairingTitle: 'التناغم المثالي مع الحلوى',
    pairingCopy:
      'اختتم وجبتك بقهوة إسبريسو إيطالية فاخرة أو مشروبات معتقة مختارة بعناية من قبو تري فراتيلي.',
    pairingActionWine: 'استكشف قائمة المشروبات',
    pairingActionReserve: 'احجز طاولة',
    chapter: 'الفصل',
  },
};

export function getSweetsI18n(locale: Locale): SweetsDictionary {
  return sweetsTranslations[locale] || sweetsTranslations.it;
}
