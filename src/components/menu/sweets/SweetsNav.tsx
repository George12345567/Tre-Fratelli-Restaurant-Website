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
  return (
    <div className="sticky top-16 z-30 py-3 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[var(--palette-stone-beige)]/30 space-y-3">
      <div className="grid min-w-0 grid-cols-1 gap-3 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
        {/* ── Category Pill Tabs ── */}
        <div
          role="tablist"
          aria-label={dict.title}
          className="flex min-w-0 items-center gap-2 overflow-x-auto px-1 py-1 lg:flex-wrap lg:overflow-visible"
        >
          {/* All Items Pill */}
          <button
            type="button"
            role="tab"
            aria-selected={activeCategoryId === 'all'}
            onClick={() => onSelectCategory('all')}
            className={`inline-flex min-h-11 shrink-0 items-center justify-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm leading-snug font-semibold whitespace-nowrap transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--palette-aged-brass)] ${
              activeCategoryId === 'all'
                ? 'bg-[var(--palette-espresso)] text-white shadow-xs'
                : 'bg-white/80 text-[var(--palette-espresso)]/80 hover:bg-white hover:text-[var(--palette-espresso)] border border-[var(--palette-stone-beige)]/50'
            }`}
          >
            {dict.allCategories}
            <span className={`shrink-0 text-[10px] tabular-nums font-bold ${
              activeCategoryId === 'all' ? 'text-amber-200' : 'text-stone-400'
            }`}>
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
                onClick={() => onSelectCategory(sec.id)}
                className={`inline-flex min-h-11 shrink-0 items-center justify-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm leading-snug font-semibold whitespace-nowrap transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--palette-aged-brass)] ${
                  isActive
                    ? 'bg-[var(--palette-espresso)] text-white shadow-xs'
                    : 'bg-white/80 text-[var(--palette-espresso)]/80 hover:bg-white hover:text-[var(--palette-espresso)] border border-[var(--palette-stone-beige)]/50'
                }`}
              >
                {getLocalized(sec.title, locale)}
                <span className={`shrink-0 text-[10px] tabular-nums font-bold ${
                  isActive ? 'text-amber-200' : 'text-stone-400'
                }`}>
                  {sec.dishes.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* ── Quick Search Input ── */}
        <div className="relative min-w-0 w-full lg:mt-1">
          <Search
            size={14}
            className="absolute start-3 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none"
            aria-hidden="true"
          />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={dict.searchPlaceholder}
            aria-label={dict.searchPlaceholder}
            className="min-h-11 w-full ps-9 pe-11 py-2 text-sm leading-snug rounded-full bg-white/90 border border-[var(--palette-stone-beige)]/60 text-[var(--palette-espresso)] placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[var(--palette-aged-brass)]/50 focus:border-[var(--palette-aged-brass)] transition-colors shadow-2xs"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange('')}
              aria-label={dict.clearSearch}
              className="absolute end-0.5 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center text-stone-400 hover:text-stone-600 rounded-full focus-visible:outline-2 focus-visible:outline-[var(--palette-aged-brass)]"
            >
              <X size={13} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
