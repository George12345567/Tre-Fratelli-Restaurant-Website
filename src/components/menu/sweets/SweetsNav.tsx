'use client';

import { Search, X } from 'lucide-react';
import type { Locale } from '@/i18n/routing';
import type { SweetsDictionary } from './sweetsI18n';
import type { MenuSubSection } from '@/components/menu/menuGrouping';
import { getLocalized } from '@/data/types';

interface SweetsNavProps {
  sections: MenuSubSection[];
  activeCategoryId: string;
  onSelectCategory: (id: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  locale: Locale;
  dict: SweetsDictionary;
  totalCount: number;
}

export function SweetsNav({
  sections,
  activeCategoryId,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  locale,
  dict,
  totalCount,
}: SweetsNavProps) {
  const handleSelectTab = (id: string, element: HTMLButtonElement) => {
    onSelectCategory(id);
    element.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    });
  };

  return (
    <div className="sticky top-14 sm:top-16 z-30 -mx-4 px-4 sm:mx-0 sm:px-0 py-1.5 sm:py-2 bg-[var(--palette-warm-ivory)]/95 backdrop-blur-xl border-b border-[var(--palette-stone-beige)]/40 shadow-[0_8px_20px_-14px_rgba(43,31,26,0.1)]">
      <div className="grid min-w-0 grid-cols-1 gap-2 lg:grid-cols-[minmax(0,1fr)_13.5rem] lg:items-center">
        {/* ── Compact Category Pill Tabs ── */}
        <div
          role="tablist"
          aria-label={dict.title}
          className="flex min-w-0 items-center gap-1.5 overflow-x-auto py-0.5 lg:flex-wrap lg:overflow-visible [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {/* All Items Pill */}
          <button
            type="button"
            role="tab"
            aria-selected={activeCategoryId === 'all'}
            onClick={(e) => handleSelectTab('all', e.currentTarget)}
            className={`inline-flex min-h-7 h-7 sm:min-h-8 sm:h-8 min-w-0 shrink-0 items-center justify-center gap-1.5 px-2.5 sm:px-3 py-0.5 rounded-full text-[11px] sm:text-xs leading-none font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--palette-aged-brass)] ${
              activeCategoryId === 'all'
                ? 'bg-[var(--palette-espresso)] text-[#FAF7F2] border border-[var(--palette-espresso)] shadow-2xs'
                : 'bg-white/90 text-[var(--palette-espresso)]/85 hover:bg-white hover:text-[var(--palette-espresso)] hover:border-[var(--palette-aged-brass)]/60 border border-[var(--palette-stone-beige)]/60'
            }`}
          >
            <span>{dict.allCategories}</span>
            <span
              className={`shrink-0 px-1.5 py-0.5 rounded-full text-[9px] sm:text-[10px] leading-none tabular-nums font-bold ${
                activeCategoryId === 'all'
                  ? 'bg-amber-300/20 text-amber-200'
                  : 'bg-[var(--palette-warm-ivory)] text-[var(--palette-espresso)]/65'
              }`}
            >
              {totalCount}
            </span>
          </button>

          {/* Section Pills */}
          {sections.map((sec) => {
            const isActive = activeCategoryId === sec.id;
            return (
              <button
                key={sec.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={(e) => handleSelectTab(sec.id, e.currentTarget)}
                className={`inline-flex min-h-7 h-7 sm:min-h-8 sm:h-8 min-w-0 shrink-0 items-center justify-center gap-1.5 px-2.5 sm:px-3 py-0.5 rounded-full text-[11px] sm:text-xs leading-none font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--palette-aged-brass)] ${
                  isActive
                    ? 'bg-[var(--palette-espresso)] text-[#FAF7F2] border border-[var(--palette-espresso)] shadow-2xs'
                    : 'bg-white/90 text-[var(--palette-espresso)]/85 hover:bg-white hover:text-[var(--palette-espresso)] hover:border-[var(--palette-aged-brass)]/60 border border-[var(--palette-stone-beige)]/60'
                }`}
              >
                <span>{getLocalized(sec.title, locale)}</span>
                <span
                  className={`shrink-0 px-1.5 py-0.5 rounded-full text-[9px] sm:text-[10px] leading-none tabular-nums font-bold ${
                    isActive
                      ? 'bg-amber-300/20 text-amber-200'
                      : 'bg-[var(--palette-warm-ivory)] text-[var(--palette-espresso)]/65'
                  }`}
                >
                  {sec.dishes.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* ── Compact Quick Search Input ── */}
        <div className="relative min-w-0 w-full">
          <Search
            size={13}
            className="absolute start-3 top-1/2 -translate-y-1/2 text-[var(--palette-aged-brass)] pointer-events-none"
            aria-hidden="true"
          />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={dict.searchPlaceholder}
            aria-label={dict.searchPlaceholder}
            className="min-h-7 h-7 sm:min-h-8 sm:h-8 w-full ps-8 pe-7 py-0.5 text-xs leading-none rounded-full bg-white/95 border border-[var(--palette-stone-beige)]/70 text-[var(--palette-espresso)] placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[var(--palette-aged-brass)]/45 focus:border-[var(--palette-aged-brass)] transition-all shadow-2xs"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange('')}
              aria-label={dict.clearSearch}
              className="absolute end-1 top-1/2 -translate-y-1/2 flex min-h-6 min-w-6 h-6 w-6 items-center justify-center text-stone-400 hover:text-[var(--palette-espresso)] rounded-full focus-visible:outline-2 focus-visible:outline-[var(--palette-aged-brass)] cursor-pointer"
            >
              <X size={12} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
