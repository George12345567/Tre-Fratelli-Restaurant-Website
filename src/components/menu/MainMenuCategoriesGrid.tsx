'use client';

import { useState, useEffect } from 'react';
import { BookOpen, ShieldAlert } from 'lucide-react';
import { Link, useRouter } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';
import { menuCategoryConfigs, getCategoryData } from '@/data/menu/menuCategories';
import { getLocalized, type LocalizedText } from '@/data/types';
import { MenuCategoryCard } from './MenuCategoryCard';
import { MenuPdfViewerModal } from './MenuPdfViewerModal';
import { MenuAllergenLegendModal } from './MenuAllergenLegendModal';

interface MainMenuCategoriesGridProps {
  locale: Locale;
  scope?: 'all' | 'drinks';
}

const drinksDirectory = {
  title: { it: 'Vini & Bevande', en: 'Wines & Drinks', ar: 'النبيذ والمشروبات' },
  intro: {
    it: 'Dalle bibite e dalle birre al vino della casa, fino alle bottiglie della nostra cantina: scegli una sezione per esplorare la carta e i prezzi.',
    en: 'From soft drinks and beers to house wine and bottles from our cellar: choose a section to explore the selection and prices.',
    ar: 'من المشروبات الغازية والبيرة إلى نبيذ الدار وزجاجات القبو: اختاروا القسم لتصفح الأصناف والأسعار.',
  },
} satisfies Record<string, LocalizedText>;

export function MainMenuCategoriesGrid({ locale, scope = 'all' }: MainMenuCategoriesGridProps) {
  const router = useRouter();
  const drinksOnly = scope === 'drinks';
  const categories = menuCategoryConfigs.filter((config) => !drinksOnly || config.kind === 'drink');
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  const [isAllergenModalOpen, setIsAllergenModalOpen] = useState(false);

  // Preserve backward compatibility with legacy anchor bookmarks (e.g. #pizzeria, #antipasti)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const rawHash = window.location.hash.toLowerCase().replace('#', '');
    if (!rawHash) return;

    const legacyHashMap: Record<string, string> = {
      pizzeria: 'pizze',
      pizza: 'pizze',
      'pizza-calzoni': 'pizze',
      antipasti: 'antipasti',
      'raw-seafood': 'antipasti',
      'primi-piatti': 'primi-piatti',
      primi: 'primi-piatti',
      'secondi-piatti': 'secondi-piatti',
      secondi: 'secondi-piatti',
      contorni: 'contorni',
      'contorni-insalate': 'contorni',
      dolci: 'dolci',
      desserts: 'dolci',
      bevande: 'bevande',
      'carta-vini': 'carta-vini',
      wine: 'carta-vini',
    };

    const target = legacyHashMap[rawHash];
    if (target) {
      router.replace(`/menu/${target}`);
    }
  }, [router]);

  return (
    <div className="space-y-8 sm:space-y-12">
      {/* ── 1. Breadcrumbs & Compact Header ── */}
      <header className="space-y-3 sm:space-y-4 text-center max-w-2xl mx-auto pb-1">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center justify-center gap-2 text-xs text-[var(--palette-espresso)]/70 pb-0.5"
        >
          <Link
            href="/"
            className="hover:text-[var(--palette-italian-red)] transition-colors font-medium"
          >
            {locale === 'ar' ? 'الرئيسية' : locale === 'it' ? 'Home' : 'Home'}
          </Link>
          <span className="text-stone-300" aria-hidden="true">/</span>
          <span className="text-[var(--palette-espresso)] font-bold" aria-current="page">
            {drinksOnly ? getLocalized(drinksDirectory.title, locale) : locale === 'ar' ? 'قائمة الطعام' : locale === 'it' ? 'Menù' : 'Menu'}
          </span>
        </nav>

        {/* Eyebrow Label */}
        <span className="text-[11px] sm:text-xs font-bold tracking-[0.22em] uppercase text-[var(--palette-aged-brass)] block">
          Tre Fratelli · Milano
        </span>

        {/* Large Italian Heading */}
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-wide text-[var(--palette-espresso)]">
          {drinksOnly ? getLocalized(drinksDirectory.title, locale) : 'Il Nostro Menù'}
        </h1>

        <div className="w-12 h-0.5 bg-[var(--palette-italian-red)] mx-auto rounded-full" aria-hidden="true" />

        {/* Short Introductory Description */}
        <p className="text-xs sm:text-sm md:text-base text-[var(--palette-espresso)]/80 leading-relaxed font-serif italic max-w-xl mx-auto">
          {drinksOnly
            ? getLocalized(drinksDirectory.intro, locale)
            : locale === 'ar'
            ? 'استكشف إبداعات مطبخنا الإيطالي الأصيل: مقبلات التراث، باستا طازجة مصنوعة يدوياً، أطباق اللحوم والأسماك، بيتزا الحطب، ومختارات القبو.'
            : locale === 'it'
            ? 'Scopri le specialità della nostra cucina: antipasti della tradizione, pasta fresca fatta a mano, secondi di carne e pesce, pizze cotte nel forno a legna e la nostra accurata selezione di vini.'
            : 'Discover the culinary specialties of our kitchen: traditional starters, handmade fresh pasta, prime meat and seafood mains, wood-fired pizzas, and our curated wine cellar.'}
        </p>

        {/* Action Buttons: PDF Menu & Allergens Guide */}
        <div className="pt-1.5 flex flex-wrap items-center justify-center gap-2.5">
          <button
            type="button"
            onClick={() => setIsPdfModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[var(--palette-italian-red)] hover:bg-[var(--palette-italian-red-dark)] text-white text-xs sm:text-[13px] font-bold shadow-xs hover:shadow-md transition-all cursor-pointer active:scale-95"
          >
            <BookOpen size={14} aria-hidden="true" />
            <span>
              {locale === 'ar'
                ? 'عرض وتحميل القائمة PDF الرسمية'
                : locale === 'it'
                ? 'Visualizza il Menù PDF'
                : 'View Official PDF Menu'}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setIsAllergenModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/80 hover:bg-white text-[var(--palette-espresso)] border border-stone-200 text-xs sm:text-[13px] font-semibold shadow-2xs hover:shadow-xs transition-all cursor-pointer active:scale-95"
          >
            <ShieldAlert size={14} className="text-amber-600" aria-hidden="true" />
            <span>
              {locale === 'ar'
                ? 'دليل مسببات الحساسية [1-14]'
                : locale === 'it'
                ? 'Tabella Allergeni'
                : 'Allergens Guide'}
            </span>
          </button>
        </div>
      </header>

      {/* ── 2. Responsive Category Photography Grid (Scroll-Animated) ── */}
      <section
        aria-label={drinksOnly ? getLocalized(drinksDirectory.title, locale) : 'Menu Categories'}
        className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-9 lg:gap-11"
      >
        {categories.map((config, index) => {
          const categoryData = getCategoryData(config.slug);
          const count =
            categoryData.kind === 'food'
              ? categoryData.dishes.length
              : categoryData.drinks.length;

          return (
            <MenuCategoryCard
              key={config.slug}
              config={config}
              locale={locale}
              itemCount={count}
              index={index}
            />
          );
        })}
      </section>

      {/* ── 3. Modals ── */}
      <MenuPdfViewerModal
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
        locale={locale}
      />

      <MenuAllergenLegendModal
        isOpen={isAllergenModalOpen}
        onClose={() => setIsAllergenModalOpen(false)}
        locale={locale}
      />
    </div>
  );
}
