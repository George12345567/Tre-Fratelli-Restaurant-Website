'use client';

import {
  Fish,
  Info,
  Leaf,
  Search,
  Sparkles,
  UtensilsCrossed,
  X,
} from 'lucide-react';
import type { DishCategory } from '@/data/types';
import type { Locale } from '@/i18n/routing';

export type DietaryFilter = 'all' | 'seafood' | 'meat' | 'vegetarian' | 'signature';

interface CategoryTabInfo {
  key: DishCategory | 'all';
  label: { it: string; en: string; ar: string };
  count: number;
  icon: React.ReactNode;
}

interface MenuStickyNavProps {
  locale: Locale;
  activeCategory: DishCategory | 'all';
  onSelectCategory: (cat: DishCategory | 'all') => void;
  activeDietary: DietaryFilter;
  onSelectDietary: (filter: DietaryFilter) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onOpenAllergens: () => void;
  matchCount: number;
  categoryTabs: CategoryTabInfo[];
}

export function MenuStickyNav({
  locale,
  activeCategory,
  onSelectCategory,
  activeDietary,
  onSelectDietary,
  searchQuery,
  onSearchChange,
  onOpenAllergens,
  matchCount,
  categoryTabs,
}: MenuStickyNavProps) {
  const isRtl = locale === 'ar';

  const dietaryFilters: Array<{
    id: DietaryFilter;
    label: { it: string; en: string; ar: string };
    icon?: React.ReactNode;
  }> = [
    {
      id: 'all',
      label: { it: 'Tutti', en: 'All', ar: 'الكل' },
    },
    {
      id: 'seafood',
      label: { it: 'Mare & Pesce', en: 'Seafood', ar: 'مأكولات بحرية' },
      icon: <Fish size={12} className="text-sky-600" aria-hidden="true" />,
    },
    {
      id: 'meat',
      label: { it: 'Terra & Carni', en: 'Meat & Land', ar: 'لحوم ومشاوي' },
      icon: <UtensilsCrossed size={12} className="text-orange-700" aria-hidden="true" />,
    },
    {
      id: 'vegetarian',
      label: { it: 'Vegetariano', en: 'Vegetarian', ar: 'نباتي' },
      icon: <Leaf size={12} className="text-emerald-600" aria-hidden="true" />,
    },
    {
      id: 'signature',
      label: { it: 'Specialità Casa', en: 'House Specialties', ar: 'أطباق الدار' },
      icon: <Sparkles size={12} className="text-amber-600" aria-hidden="true" />,
    },
  ];

  return (
    <div className="sticky top-16 sm:top-20 z-30 transition-all duration-300">
      <div className="rounded-2xl sm:rounded-3xl bg-white/95 backdrop-blur-md border border-[var(--palette-stone-beige)]/60 p-3 sm:p-4 shadow-md space-y-3">
        {/* Top Line: Search Input + Allergen Guide Button + Result Count */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-lg">
            <Search
              size={15}
              className={`absolute top-1/2 -translate-y-1/2 text-[var(--palette-espresso)]/50 ${
                isRtl ? 'right-3.5' : 'left-3.5'
              }`}
              aria-hidden="true"
            />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder={
                locale === 'ar'
                  ? 'ابحث عن طبق أو بيتزا أو مكون أو صلصة...'
                  : locale === 'it'
                  ? 'Cerca un piatto, pizza, pesce o ingrediente...'
                  : 'Search dish, pizza, seafood, or ingredient...'
              }
              className={`w-full py-2 sm:py-2.5 rounded-full border border-[var(--palette-stone-beige)]/70 bg-[var(--palette-warm-ivory)]/40 focus:bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[var(--palette-aged-brass)] text-[var(--palette-espresso)] transition-all ${
                isRtl ? 'pr-9 pl-9' : 'pl-9 pr-9'
              }`}
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => onSearchChange('')}
                className={`absolute top-1/2 -translate-y-1/2 text-[var(--palette-espresso)]/50 hover:text-black ${
                  isRtl ? 'left-3' : 'right-3'
                }`}
                aria-label="Clear search"
              >
                <X size={15} />
              </button>
            )}
          </div>

          {/* Quick Info & Allergen Trigger Pill */}
          <div className="flex items-center justify-between sm:justify-end gap-2 shrink-0">
            {/* Search Match Counter Badge */}
            {searchQuery && (
              <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-stone-100 text-[var(--palette-espresso)]">
                {locale === 'it'
                  ? `${matchCount} risultati`
                  : locale === 'ar'
                  ? `${matchCount} نتيجة`
                  : `${matchCount} matches`}
              </span>
            )}

            {/* Allergen Legend Trigger */}
            <button
              type="button"
              onClick={onOpenAllergens}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white border border-[var(--palette-aged-brass)]/40 text-[var(--palette-espresso)] hover:bg-[var(--palette-warm-ivory)] transition-colors shadow-2xs cursor-pointer"
            >
              <Info size={13} className="text-amber-700" aria-hidden="true" />
              <span>
                {locale === 'it'
                  ? 'Guida Allergeni [1-14]'
                  : locale === 'ar'
                  ? 'دليل الحساسية [1-14]'
                  : 'Allergen Guide [1-14]'}
              </span>
            </button>

            {/* Coperto Pill */}
            <span className="hidden md:inline-flex text-[11px] font-mono text-stone-500 bg-stone-50 px-2.5 py-1 rounded-full border border-stone-200">
              Coperto € 2,00
            </span>
          </div>
        </div>

        {/* Second Line: Category Navigation Tabs (Scrollable on small screens with clean indicators) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar -mx-1 px-1">
          {categoryTabs.map((tab) => {
            const isActive = activeCategory === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => onSelectCategory(tab.key)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                  isActive
                    ? 'bg-[var(--palette-italian-red)] text-white shadow-xs scale-102'
                    : 'bg-[var(--palette-warm-ivory)]/70 hover:bg-[var(--palette-warm-ivory)] text-[var(--palette-espresso)]/85 border border-[var(--palette-stone-beige)]/40'
                }`}
              >
                <span className={isActive ? 'text-white' : 'opacity-70'}>
                  {tab.icon}
                </span>
                <span>
                  {locale === 'it'
                    ? tab.label.it
                    : locale === 'ar'
                    ? tab.label.ar
                    : tab.label.en}
                </span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-white/20 text-white' : 'bg-black/5 text-stone-600'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Third Line: Dietary / Flavor Quick Filter Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto pt-1 border-t border-[var(--palette-stone-beige)]/30 no-scrollbar">
          <span className="text-[10px] uppercase font-bold text-[var(--palette-espresso)]/50 shrink-0 pe-1">
            {locale === 'it' ? 'Filtra:' : locale === 'ar' ? 'تصفية:' : 'Filter:'}
          </span>
          {dietaryFilters.map((flt) => {
            const isSelected = activeDietary === flt.id;
            return (
              <button
                key={flt.id}
                type="button"
                onClick={() => onSelectDietary(flt.id)}
                className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                  isSelected
                    ? 'bg-[var(--palette-espresso)] text-white font-semibold shadow-2xs'
                    : 'bg-white hover:bg-stone-100 text-stone-700 border border-stone-200/80'
                }`}
              >
                {flt.icon}
                <span>
                  {locale === 'it'
                    ? flt.label.it
                    : locale === 'ar'
                    ? flt.label.ar
                    : flt.label.en}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
