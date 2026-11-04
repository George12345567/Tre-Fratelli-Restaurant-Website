'use client';

import { useState } from 'react';
import { ArrowRight, Utensils, Wine } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';
import {
  homeFoodCategories,
  homeWineCategories,
} from '@/data/homeCategoryShowcase';
import { MenuCategoryHeroCard } from './MenuCategoryHeroCard';
import { MenuCategoryNavPills } from './MenuCategoryNavPills';
import { MenuPdfShowcaseBanner } from './MenuPdfShowcaseBanner';
import { MenuPdfViewerModal } from '@/components/menu/MenuPdfViewerModal';

interface Props {
  locale: string;
  isRtl: boolean;
  translations: {
    viewMenu: string;
  };
}

export function MenuCategoriesSection({
  locale,
  isRtl,
  translations,
}: Props) {
  const [activeMode, setActiveMode] = useState<'food' | 'wine'>('food');
  const [activeFoodId, setActiveFoodId] = useState('primi');
  const [activeWineId, setActiveWineId] = useState('red-wine');
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);

  const currentCategories =
    activeMode === 'food' ? homeFoodCategories : homeWineCategories;
  const activeCategoryId =
    activeMode === 'food' ? activeFoodId : activeWineId;

  const handleSelectCategory = (id: string) => {
    if (activeMode === 'food') {
      setActiveFoodId(id);
    } else {
      setActiveWineId(id);
    }
  };

  const activeCategory =
    currentCategories.find((c) => c.id === activeCategoryId) ||
    currentCategories[0];

  return (
    <section className="relative pt-12 sm:pt-16 pb-16 sm:pb-20 overflow-hidden bg-gradient-to-b from-transparent via-[var(--palette-stone-beige-light)]/25 to-transparent">
      {/* ── Soft Ambient Glow ── */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(176,138,87,0.1),transparent_70%)] pointer-events-none blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-3">
          <div className="flex items-center justify-center gap-2">
            <span className="w-6 h-px bg-[var(--palette-aged-brass)]/70" aria-hidden="true" />
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.22em] uppercase text-[var(--palette-italian-red)]">
              {locale === 'it'
                ? 'La Nostra Offerta Gastronomica'
                : locale === 'ar'
                ? 'تشكيلات المطبخ والقبو الإيطالي'
                : 'Artisanal Kitchen & Cellar'}
            </span>
            <span className="w-6 h-px bg-[var(--palette-aged-brass)]/70" aria-hidden="true" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[var(--palette-espresso)] leading-tight">
            {locale === 'it'
              ? 'Esplora il Menu & La Cantina'
              : locale === 'ar'
              ? 'استكشف قائمة الطعام وقبو المشروبات'
              : 'Explore the Menu & Cellar'}
          </h2>

          <p className="text-xs sm:text-base text-[var(--palette-espresso)]/80 max-w-2xl mx-auto leading-relaxed font-light">
            {locale === 'it'
              ? 'Dalle creazioni artigianali dei fratelli ai calici più pregiati: seleziona una sezione per scoprirne le specialità.'
              : locale === 'ar'
              ? 'من إبداعات الأطباق الطازجة إلى أعتق أصناف النبيذ والمشروبات: اختر القسم لتصفح تفاصيله وصوره بوضوح.'
              : 'From fresh culinary masterworks to fine cellar labels: choose a chapter to explore unobstructed photos and highlights.'}
          </p>
        </div>

        {/* ── Main Mode Switcher: La Cucina vs La Cantina ── */}
        <div className="flex items-center justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-full bg-white/90 backdrop-blur-md border border-black/10 shadow-sm">
            <button
              type="button"
              onClick={() => setActiveMode('food')}
              className={`inline-flex items-center gap-2 px-5 sm:px-7 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                activeMode === 'food'
                  ? 'bg-[var(--palette-espresso)] text-[var(--palette-warm-ivory)] shadow-md'
                  : 'text-[var(--palette-espresso)]/70 hover:text-[var(--palette-espresso)]'
              }`}
            >
              <Utensils size={15} />
              <span>
                {locale === 'it'
                  ? 'La Cucina dei Fratelli (6 Sezioni)'
                  : locale === 'ar'
                  ? 'مطبخ الإخوة الثلاثة (6 أقسام)'
                  : 'The Brothers’ Kitchen (6 Chapters)'}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveMode('wine')}
              className={`inline-flex items-center gap-2 px-5 sm:px-7 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                activeMode === 'wine'
                  ? 'bg-[var(--palette-espresso)] text-[var(--palette-warm-ivory)] shadow-md'
                  : 'text-[var(--palette-espresso)]/70 hover:text-[var(--palette-espresso)]'
              }`}
            >
              <Wine size={15} className="text-[var(--palette-italian-red)]" />
              <span>
                {locale === 'it'
                  ? 'La Cantina & Mixology (3 Sezioni)'
                  : locale === 'ar'
                  ? 'قبو المشروبات والبار (3 أقسام)'
                  : 'Cellar & Mixology (3 Chapters)'}
              </span>
            </button>
          </div>
        </div>

        {/* ── Interactive Category Pills Navigator ── */}
        <MenuCategoryNavPills
          categories={currentCategories}
          activeCategoryId={activeCategoryId}
          onSelectCategory={handleSelectCategory}
          locale={locale}
          isRtl={isRtl}
        />

        {/* ── Spotlight Hero Card ── */}
        <MenuCategoryHeroCard
          category={activeCategory}
          locale={locale}
          isRtl={isRtl}
          activeMode={activeMode}
          onOpenPdfModal={() => setIsPdfModalOpen(true)}
        />

        {/* ── Official PDF Menu Showcase Banner ── */}
        <MenuPdfShowcaseBanner
          locale={locale}
          onOpenPdfModal={() => setIsPdfModalOpen(true)}
        />

        {/* ── Section Footer CTA to Full Menu ── */}
        <div className="text-center mt-10 sm:mt-12">
          <Link
            href="/menu"
            className="group inline-flex items-center gap-2.5 px-8 py-3 rounded-full bg-[var(--palette-italian-red)] hover:bg-[var(--palette-italian-red-dark)] text-white font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
          >
            <span>{translations.viewMenu}</span>
            <ArrowRight
              size={16}
              className={`transition-transform duration-300 group-hover:translate-x-1 ${
                isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''
              }`}
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>

      {/* ── Fullscreen Interactive PDF Menu Modal ── */}
      <MenuPdfViewerModal
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
        locale={locale as Locale}
      />
    </section>
  );
}
