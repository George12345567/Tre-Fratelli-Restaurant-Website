'use client';

import { useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { Search, X } from 'lucide-react';
import { categoryLabels, menuDishes } from '@/data/menu';
import type { DishCategory, DishTag } from '@/data/types';
import { getLocalized } from '@/data/types';
import type { Locale } from '@/i18n/routing';

interface MenuExplorerProps {
  locale: Locale;
}

const categories = Object.keys(categoryLabels) as DishCategory[];
const dietaryFilters: Array<DishTag | 'all'> = [
  'all',
  'signature',
  'pasta',
  'pizza',
  'seafood',
  'meat',
  'vegetarian',
  'raw',
  'dessert',
];

export function MenuExplorer({ locale }: MenuExplorerProps) {
  const t = useTranslations();
  const [activeCategory, setActiveCategory] = useState<DishCategory | 'all'>('all');
  const [activeTag, setActiveTag] = useState<DishTag | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const isRtl = locale === 'ar';

  const filteredDishes = useMemo(() => {
    return menuDishes.filter((dish) => {
      const matchCategory = activeCategory === 'all' || dish.category === activeCategory;
      const matchTag = activeTag === 'all' || dish.tags.includes(activeTag);

      const query = searchQuery.trim().toLowerCase();
      const matchSearch =
        query === '' ||
        dish.name.it.toLowerCase().includes(query) ||
        dish.name.en.toLowerCase().includes(query) ||
        dish.name.ar.toLowerCase().includes(query) ||
        dish.description.it.toLowerCase().includes(query) ||
        dish.description.en.toLowerCase().includes(query) ||
        dish.description.ar.toLowerCase().includes(query);

      return matchCategory && matchTag && matchSearch;
    });
  }, [activeCategory, activeTag, searchQuery]);

  return (
    <div className="space-y-10">
      {/* ── Search & Filter Controls ── */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[var(--palette-stone-beige)]/50 shadow-sm space-y-6">
        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto">
          <Search
            size={18}
            className={`absolute top-1/2 -translate-y-1/2 text-[var(--palette-espresso)]/50 ${
              isRtl ? 'right-4' : 'left-4'
            }`}
            aria-hidden="true"
          />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t('menu.search')}
            className={`w-full py-3.5 rounded-full border border-[var(--palette-stone-beige)] bg-[var(--palette-warm-ivory)]/40 focus:bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[var(--palette-aged-brass)] text-[var(--palette-espresso)] transition-all ${
              isRtl ? 'pr-11 pl-10' : 'pl-11 pr-10'
            }`}
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className={`absolute top-1/2 -translate-y-1/2 text-[var(--palette-espresso)]/50 hover:text-black ${
                isRtl ? 'left-4' : 'right-4'
              }`}
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Categories Tabs */}
        <div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === 'all'
                  ? 'bg-[var(--palette-italian-red)] text-white shadow-sm'
                  : 'bg-[var(--palette-warm-ivory)] text-[var(--palette-espresso)] hover:bg-[var(--palette-stone-beige-light)]'
              }`}
            >
              {t('menu.filters.all')}
            </button>

            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-[var(--palette-italian-red)] text-white shadow-sm'
                    : 'bg-[var(--palette-warm-ivory)] text-[var(--palette-espresso)] hover:bg-[var(--palette-stone-beige-light)]'
                }`}
              >
                {getLocalized(categoryLabels[cat], locale)}
              </button>
            ))}
          </div>
        </div>

        {/* Dietary Filter Pills */}
        <div className="pt-2 border-t border-[var(--palette-stone-beige)]/30 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
          {dietaryFilters.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                activeTag === tag
                  ? 'bg-[var(--palette-espresso)] text-white font-semibold'
                  : 'border border-[var(--palette-stone-beige)] text-[var(--palette-espresso)]/80 hover:bg-black/5'
              }`}
            >
              {tag === 'all' ? t('menu.filters.all') : t(`menu.filters.${tag}`)}
            </button>
          ))}
        </div>
      </div>

      {/* ── Dishes Grid ── */}
      {filteredDishes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDishes.map((dish) => (
            <article
              key={dish.id}
              className="bg-white rounded-xl overflow-hidden border border-[var(--palette-stone-beige)]/40 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={dish.image}
                    alt={getLocalized(dish.name, locale)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-3 right-3 bg-[var(--palette-espresso)] text-white px-3 py-1 rounded-full text-xs font-bold shadow">
                    {dish.price}
                  </span>
                  {dish.tags.includes('signature') && (
                    <span className="absolute top-3 left-3 bg-[var(--palette-italian-red)] text-white px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow">
                      {t('menu.filters.signature')}
                    </span>
                  )}
                </div>

                <div className="p-6 space-y-3">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[var(--palette-espresso)] group-hover:text-[var(--palette-italian-red)] transition-colors">
                      {getLocalized(dish.name, locale)}
                    </h3>
                    <p className="text-xs text-[var(--palette-aged-brass)] italic mt-0.5 font-serif">
                      {dish.name.it}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[var(--palette-espresso)]/75 leading-relaxed">
                    {getLocalized(dish.description, locale)}
                  </p>

                  {dish.allergens.length > 0 && (
                    <div className="pt-2 flex flex-wrap gap-1">
                      {dish.allergens.map((all) => (
                        <span
                          key={all}
                          className="px-2 py-0.5 rounded bg-[var(--palette-stone-beige-light)] text-[10px] text-[var(--palette-espresso)]/70 font-mono"
                        >
                          {all}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-2xl border border-[var(--palette-stone-beige)]/40 p-8 space-y-3">
          <h3 className="font-serif text-2xl font-bold text-[var(--palette-espresso)]">
            {t('menu.emptyTitle')}
          </h3>
          <p className="text-sm text-[var(--palette-espresso)]/70 max-w-md mx-auto">
            {t('menu.emptyCopy')}
          </p>
          <button
            type="button"
            onClick={() => {
              setActiveCategory('all');
              setActiveTag('all');
              setSearchQuery('');
            }}
            className="mt-4 px-6 py-2 rounded-full bg-[var(--palette-italian-red)] text-white text-xs font-semibold"
          >
            {t('menu.filters.all')}
          </button>
        </div>
      )}
    </div>
  );
}
