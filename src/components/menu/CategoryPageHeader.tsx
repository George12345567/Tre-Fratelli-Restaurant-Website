'use client';

import { ArrowLeft, BookOpen, ShieldAlert } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';
import type { MenuCategoryConfig } from '@/data/menu/menuCategories';
import { getLocalized } from '@/data/types';

interface CategoryPageHeaderProps {
  config: MenuCategoryConfig;
  locale: Locale;
  itemCount: number;
  onOpenPdfModal?: () => void;
  onOpenAllergenModal?: () => void;
}

export function CategoryPageHeader({
  config,
  locale,
  itemCount,
  onOpenPdfModal,
  onOpenAllergenModal,
}: CategoryPageHeaderProps) {
  const isRtl = locale === 'ar';
  const categoryTitle = getLocalized(config.title, locale);
  const categorySubtitle = getLocalized(config.subtitle, locale);
  const categoryIntro = getLocalized(config.intro, locale);

  return (
    <header className="space-y-4 sm:space-y-5 pb-3 sm:pb-4 border-b border-[var(--palette-stone-beige)]/40">
      {/* ── Top Bar: Breadcrumbs & Back to Menu Link ── */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[var(--palette-espresso)]/70">
          <Link
            href="/"
            className="hover:text-[var(--palette-italian-red)] transition-colors font-medium"
          >
            {locale === 'ar' ? 'الرئيسية' : locale === 'it' ? 'Home' : 'Home'}
          </Link>
          <span className="text-stone-300" aria-hidden="true">/</span>
          <Link
            href="/menu"
            className="hover:text-[var(--palette-italian-red)] transition-colors font-medium"
          >
            {locale === 'ar' ? 'قائمة الطعام' : locale === 'it' ? 'Menù' : 'Menu'}
          </Link>
          <span className="text-stone-300" aria-hidden="true">/</span>
          <span className="text-[var(--palette-espresso)] font-bold" aria-current="page">
            {categoryTitle}
          </span>
        </nav>

        {/* Back to Menu Action Button */}
        <Link
          href="/menu"
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 hover:bg-white border border-[var(--palette-stone-beige)]/60 text-[var(--palette-espresso)] font-semibold text-xs transition-all shadow-2xs hover:shadow-xs group cursor-pointer"
        >
          <ArrowLeft
            size={13}
            className={`transition-transform duration-200 group-hover:-translate-x-0.5 ${
              isRtl ? 'rotate-180 group-hover:translate-x-0.5' : ''
            }`}
            aria-hidden="true"
          />
          <span>
            {locale === 'ar'
              ? 'العودة إلى القائمة الرئيسية'
              : locale === 'it'
              ? 'Torna al Menù'
              : 'Back to Menu'}
          </span>
        </Link>
      </div>

      {/* ── Main Category Headline & Introductory Copy ── */}
      <div className="text-center max-w-2xl mx-auto space-y-2 pt-1">
        <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[var(--palette-aged-brass)] block">
          {categorySubtitle}
        </span>

        <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-wide text-[var(--palette-espresso)]">
          {categoryTitle}
        </h1>

        <div className="w-10 h-0.5 bg-[var(--palette-italian-red)] mx-auto rounded-full" aria-hidden="true" />

        <p className="text-xs sm:text-sm text-[var(--palette-espresso)]/80 leading-relaxed font-serif italic max-w-xl mx-auto">
          {categoryIntro}
        </p>
      </div>

      {/* ── Utility Actions Bar: Item Count, Allergens Guide & Official PDF ── */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
        <span className="text-xs font-serif italic text-[var(--palette-espresso)]/70">
          {itemCount}{' '}
          {locale === 'it'
            ? 'proposte disponibili'
            : locale === 'ar'
            ? 'أصناف متوفرة'
            : 'items available'}
        </span>

        <div className="flex items-center gap-2">
          {/* Allergens Guide Modal Button */}
          {onOpenAllergenModal && (
            <button
              type="button"
              onClick={onOpenAllergenModal}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/70 hover:bg-white text-[var(--palette-espresso)]/85 border border-stone-200 shadow-2xs hover:shadow-xs transition-colors cursor-pointer"
            >
              <ShieldAlert size={13} className="text-amber-600" aria-hidden="true" />
              <span>
                {locale === 'ar' ? 'دليل مسببات الحساسية' : locale === 'it' ? 'Allergeni [1-14]' : 'Allergens Guide'}
              </span>
            </button>
          )}

          {/* Official PDF Action */}
          {onOpenPdfModal && (
            <button
              type="button"
              onClick={onOpenPdfModal}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[var(--palette-italian-red)]/10 hover:bg-[var(--palette-italian-red)]/15 text-[var(--palette-italian-red)] border border-[var(--palette-italian-red)]/20 shadow-2xs transition-colors cursor-pointer"
            >
              <BookOpen size={13} aria-hidden="true" />
              <span>
                {locale === 'ar' ? 'عرض PDF الرسمي' : locale === 'it' ? 'Menù PDF' : 'Official PDF'}
              </span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
