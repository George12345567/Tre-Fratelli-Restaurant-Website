'use client';

import { useState, useMemo } from 'react';
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
import { SearchX, Sparkles } from 'lucide-react';

const ROMAN_NUMERALS = ['I', 'II', 'III', 'IV', 'V', 'VI'];

export function SweetsMenu({ locale }: { locale: Locale }) {
  const [activeDish, setActiveDish] = useState<Dish | null>(null);
  const [activeCategoryId, setActiveCategoryId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

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

  return (
    <div className="space-y-8 sm:space-y-12">
      {/* ── Page Header & Wayfinding ── */}
      <SweetsHeader locale={locale} dict={dict} totalCount={sweetMenuDishes.length} />

      {/* ── Sticky Category Navigation & Search ── */}
      <SweetsNav
        sections={sweetMenuSections}
        activeCategoryId={activeCategoryId}
        onSelectCategory={(id) => {
          setActiveCategoryId(id);
          setSearchQuery('');
        }}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        locale={locale}
        dict={dict}
        totalCount={sweetMenuDishes.length}
      />

      {/* ── Search Results Mode ── */}
      {filteredDishes !== null ? (
        <section aria-label="Search results" className="space-y-6">
          <div className="flex items-baseline justify-between border-b border-[var(--palette-stone-beige)]/40 pb-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[var(--palette-espresso)]">
              Risultati della ricerca: &ldquo;{searchQuery}&rdquo;
            </h2>
            <span className="text-xs font-bold text-[var(--palette-italian-red)] tabular-nums">
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
            <div className="text-center py-16 px-4 rounded-3xl bg-white/60 border border-[var(--palette-stone-beige)]/40 space-y-4">
              <SearchX size={36} className="mx-auto text-stone-400" aria-hidden="true" />
              <h3 className="font-serif text-lg font-bold text-[var(--palette-espresso)]">
                {dict.noResultsTitle}
              </h3>
              <p className="text-xs sm:text-sm text-stone-500 max-w-md mx-auto">
                {dict.noResultsCopy}
              </p>
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[var(--palette-espresso)] text-white text-xs font-semibold hover:bg-black transition-all cursor-pointer shadow-xs"
              >
                {dict.resetFilter}
              </button>
            </div>
          )}
        </section>
      ) : (
        /* ── Standard Categorized Sections ── */
        <div className="space-y-14 sm:space-y-20">
          {visibleSections.map((section, sIdx) => {
            const roman = ROMAN_NUMERALS[sIdx] || `${sIdx + 1}`;
            return (
              <section
                key={section.id}
                id={section.id}
                aria-labelledby={`heading-${section.id}`}
                className="space-y-6 sm:space-y-8 scroll-mt-36"
              >
                {/* ── Section Title Bar ── */}
                <div className="border-b border-[var(--palette-stone-beige)]/40 pb-4 space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold text-[var(--palette-aged-brass)] flex items-center gap-1.5">
                      <span>{dict.chapter} {roman}</span>
                      {section.badge && (
                        <>
                          <span className="text-stone-300">·</span>
                          <span className="text-[var(--palette-italian-red)] font-semibold flex items-center gap-1">
                            <Sparkles size={11} aria-hidden="true" />
                            {getLocalized(section.badge, locale)}
                          </span>
                        </>
                      )}
                    </p>
                    <span className="text-xs font-semibold text-[var(--palette-aged-brass)] tabular-nums">
                      {dict.dessertCount(section.dishes.length)}
                    </span>
                  </div>

                  <h2
                    id={`heading-${section.id}`}
                    className="font-serif text-2xl sm:text-3xl font-bold text-[var(--palette-espresso)] tracking-tight"
                  >
                    {getLocalized(section.title, locale)}
                  </h2>

                  {section.subtitle && (
                    <p className="text-xs sm:text-sm text-[var(--palette-espresso)]/70 font-sans italic max-w-3xl leading-relaxed">
                      {getLocalized(section.subtitle, locale)}
                    </p>
                  )}
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
      />
    </div>
  );
}
