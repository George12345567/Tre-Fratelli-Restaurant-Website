'use client';

import { useState, useMemo, useRef } from 'react';
import type { Locale } from '@/i18n/routing';
import type { Dish } from '@/data/types';
import { getLocalized } from '@/data/types';
import { sweetMenuDishes, sweetMenuSections } from '@/data/menu/sweets';
import { getSweetsI18n } from './sweets/sweetsI18n';
import { SweetsHeader } from './sweets/SweetsHeader';
import { SweetsNav } from './sweets/SweetsNav';
import { SweetCard } from './sweets/SweetCard';
import { SweetsFooterBanner } from './sweets/SweetsFooterBanner';
import { MenuLightboxModal } from './MenuLightboxModal';
import { SearchX, Sparkles, RotateCcw } from 'lucide-react';

const ROMAN_NUMERALS = ['I', 'II', 'III', 'IV', 'V', 'VI'];

export function SweetsMenu({ locale }: { locale: Locale }) {
  const [activeDish, setActiveDish] = useState<Dish | null>(null);
  const [activeCategoryId, setActiveCategoryId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const catalogTopRef = useRef<HTMLDivElement>(null);

  const dict = useMemo(() => getSweetsI18n(locale), [locale]);

  // Normalized search filter
  const filteredDishes = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return null;

    return sweetMenuDishes.filter((dish) => {
      const itName = dish.name.it?.toLowerCase() || '';
      const localizedName = getLocalized(dish.name, locale)?.toLowerCase() || '';
      const desc = getLocalized(dish.description, locale)?.toLowerCase() || '';
      return itName.includes(q) || localizedName.includes(q) || desc.includes(q);
    });
  }, [searchQuery, locale]);

  // Sections to display based on active tab
  const visibleSections = useMemo(() => {
    if (activeCategoryId === 'all') {
      return sweetMenuSections;
    }
    return sweetMenuSections.filter((sec) => sec.id === activeCategoryId);
  }, [activeCategoryId]);

  // Flat list of currently visible dishes for Lightbox Prev/Next navigation
  const displayedDishes = useMemo(() => {
    if (filteredDishes !== null) return filteredDishes;
    return visibleSections.flatMap((sec) => sec.dishes);
  }, [filteredDishes, visibleSections]);

  const activeDishIndex = useMemo(() => {
    if (!activeDish) return -1;
    return displayedDishes.findIndex((d) => d.id === activeDish.id);
  }, [activeDish, displayedDishes]);

  const handleSelectCategory = (id: string) => {
    setActiveCategoryId(id);
    setSearchQuery('');
    if (catalogTopRef.current) {
      const rect = catalogTopRef.current.getBoundingClientRect();
      if (rect.top < 60) {
        catalogTopRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div className="space-y-5 sm:space-y-8">
      {/* ── Fixed Top Navbar Backdrop Veil (prevents scrolling content from bleeding behind floating navbar) ── */}
      <div
        className="pointer-events-none fixed inset-x-0 top-0 z-30 h-14 sm:h-16 bg-[var(--palette-warm-ivory)]/95 backdrop-blur-xl"
        aria-hidden="true"
      />

      {/* ── Page Header & Wayfinding ── */}
      <SweetsHeader
        locale={locale}
        dict={dict}
        totalCount={sweetMenuDishes.length}
        sectionCount={sweetMenuSections.length}
      />

      <div ref={catalogTopRef} className="scroll-mt-24" />

      {/* ── Sticky Category Navigation & Search ── */}
      <SweetsNav
        sections={sweetMenuSections}
        activeCategoryId={activeCategoryId}
        onSelectCategory={handleSelectCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        locale={locale}
        dict={dict}
        totalCount={sweetMenuDishes.length}
      />

      {/* ── Search Results Mode ── */}
      {filteredDishes !== null ? (
        <section aria-label={dict.searchResults} className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--palette-stone-beige)]/45 pb-3.5">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[var(--palette-espresso)]">
              {dict.searchResults}: &ldquo;{searchQuery}&rdquo;
            </h2>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-[var(--palette-italian-red)]/10 border border-[var(--palette-italian-red)]/25 text-xs font-bold text-[var(--palette-italian-red)] tabular-nums">
              {dict.dessertCount(filteredDishes.length)}
            </span>
          </div>

          {filteredDishes.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
              {filteredDishes.map((dish) => (
                <SweetCard
                  key={dish.id}
                  dish={dish}
                  locale={locale}
                  dict={dict}
                  onSelect={setActiveDish}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 px-4 rounded-3xl bg-white/75 border border-[var(--palette-stone-beige)]/50 space-y-4 shadow-2xs">
              <SearchX size={36} className="mx-auto text-[var(--palette-aged-brass)]" aria-hidden="true" />
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[var(--palette-espresso)]">
                {dict.noResultsTitle}
              </h3>
              <p className="text-xs sm:text-sm text-[var(--palette-espresso)]/70 max-w-md mx-auto">
                {dict.noResultsCopy}
              </p>
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="inline-flex min-h-11 items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--palette-espresso)] text-white text-xs sm:text-sm font-semibold hover:bg-black transition-all cursor-pointer shadow-xs"
              >
                <RotateCcw size={14} aria-hidden="true" />
                <span>{dict.resetFilter}</span>
              </button>
            </div>
          )}
        </section>
      ) : (
        /* ── Standard Categorized Sections ── */
        <div className="space-y-12 sm:space-y-18">
          {visibleSections.map((section) => {
            const canonicalIdx = sweetMenuSections.findIndex((s) => s.id === section.id);
            const roman = ROMAN_NUMERALS[canonicalIdx >= 0 ? canonicalIdx : 0] || `${canonicalIdx + 1}`;
            return (
              <section
                key={section.id}
                id={section.id}
                aria-labelledby={`heading-${section.id}`}
                className="space-y-5 sm:space-y-7 scroll-mt-36"
              >
                {/* ── Sculpted Chapter Header Bar ── */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[var(--palette-stone-beige)]/50 pb-3.5">
                  <div className="flex items-start gap-3">
                    {/* Roman Numeral Medallion */}
                    <div
                      className="mt-0.5 flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--palette-espresso)] text-amber-200 font-serif text-xs sm:text-sm font-bold shadow-2xs border border-[var(--palette-aged-brass)]/40"
                      aria-hidden="true"
                    >
                      {roman}
                    </div>

                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-1.5 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-bold text-[var(--palette-aged-brass)]">
                        <span>{dict.chapter} {roman}</span>
                        {section.badge && (
                          <>
                            <span className="text-stone-300" aria-hidden="true">·</span>
                            <span className="text-[var(--palette-italian-red)] font-semibold inline-flex items-center gap-1">
                              <Sparkles size={10} aria-hidden="true" />
                              {getLocalized(section.badge, locale)}
                            </span>
                          </>
                        )}
                      </div>

                      <h2
                        id={`heading-${section.id}`}
                        className="font-serif text-xl sm:text-2xl font-bold text-[var(--palette-espresso)] tracking-tight leading-snug"
                      >
                        {getLocalized(section.title, locale)}
                      </h2>

                      {section.subtitle && (
                        <p className="text-xs sm:text-[13px] text-[var(--palette-espresso)]/70 font-sans italic max-w-3xl leading-relaxed">
                          {getLocalized(section.subtitle, locale)}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Section Count & Quick Reset (when filtered) */}
                  <div className="flex items-center gap-1.5 self-start sm:self-end shrink-0">
                    {activeCategoryId !== 'all' && (
                      <button
                        type="button"
                        onClick={() => handleSelectCategory('all')}
                        className="inline-flex min-h-7 h-7 min-w-0 items-center gap-1 px-2.5 py-0.5 rounded-full bg-white hover:bg-[var(--palette-warm-ivory)] border border-[var(--palette-stone-beige)]/70 text-[11px] font-semibold text-[var(--palette-espresso)] transition-colors cursor-pointer"
                      >
                        <RotateCcw size={11} aria-hidden="true" />
                        <span>{dict.resetFilter}</span>
                      </button>
                    )}
                    <span className="inline-flex h-7 items-center px-2.5 py-0.5 rounded-full bg-white/85 border border-[var(--palette-stone-beige)]/60 text-[11px] font-bold text-[var(--palette-aged-brass)] tabular-nums">
                      {dict.dessertCount(section.dishes.length)}
                    </span>
                  </div>
                </div>

                {/* ── 3-Column Luxury Dessert Grid ── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
                  {section.dishes.map((dish) => (
                    <SweetCard
                      key={dish.id}
                      dish={dish}
                      locale={locale}
                      dict={dict}
                      onSelect={setActiveDish}
                    />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      )}

      {/* ── Wine / Digestif Pairing Banner ── */}
      <SweetsFooterBanner locale={locale} dict={dict} />

      {/* ── High-Resolution Lightbox Modal ── */}
      <MenuLightboxModal
        dish={activeDish}
        locale={locale}
        onClose={() => setActiveDish(null)}
        showAllergens={false}
        categoryLabel={dict.title}
        currentIndex={activeDishIndex >= 0 ? activeDishIndex : undefined}
        totalItems={displayedDishes.length}
        onPrev={
          displayedDishes.length > 1
            ? () => {
                const prevIdx =
                  (activeDishIndex - 1 + displayedDishes.length) % displayedDishes.length;
                setActiveDish(displayedDishes[prevIdx]);
              }
            : undefined
        }
        onNext={
          displayedDishes.length > 1
            ? () => {
                const nextIdx = (activeDishIndex + 1) % displayedDishes.length;
                setActiveDish(displayedDishes[nextIdx]);
              }
            : undefined
        }
      />
    </div>
  );
}
