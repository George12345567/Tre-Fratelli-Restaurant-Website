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
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
        {/* ── Category Pill Tabs ── */}
        <div
          role="tablist"
          aria-label={dict.title}
          className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none"
        >
          {/* All Items Pill */}
          <button
            type="button"
            role="tab"
            aria-selected={activeCategoryId === 'all'}
            onClick={() => onSelectCategory('all')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
              activeCategoryId === 'all'
                ? 'bg-[var(--palette-espresso)] text-white shadow-xs'
                : 'bg-white/80 text-[var(--palette-espresso)]/80 hover:bg-white hover:text-[var(--palette-espresso)] border border-[var(--palette-stone-beige)]/50'
            }`}
          >
            {dict.allCategories}
            <span className={`ms-1.5 text-[10px] tabular-nums font-bold ${
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
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[var(--palette-espresso)] text-white shadow-xs'
                    : 'bg-white/80 text-[var(--palette-espresso)]/80 hover:bg-white hover:text-[var(--palette-espresso)] border border-[var(--palette-stone-beige)]/50'
                }`}
              >
                {getLocalized(sec.title, locale)}
                <span className={`ms-1.5 text-[10px] tabular-nums font-bold ${
                  isActive ? 'text-amber-200' : 'text-stone-400'
                }`}>
                  {sec.dishes.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* ── Quick Search Input ── */}
        <div className="relative min-w-[240px] md:w-72 shrink-0">
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
            className="w-full ps-9 pe-8 py-1.5 text-xs rounded-full bg-white/90 border border-[var(--palette-stone-beige)]/60 text-[var(--palette-espresso)] placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[var(--palette-aged-brass)]/50 focus:border-[var(--palette-aged-brass)] transition-all shadow-2xs"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange('')}
              aria-label="Clear search"
              className="absolute end-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 p-0.5 rounded-full"
            >
              <X size={13} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
