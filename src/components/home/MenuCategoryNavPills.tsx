'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { HomeCategoryItem } from '@/data/homeCategoryShowcase';

interface MenuCategoryNavPillsProps {
  categories: HomeCategoryItem[];
  activeCategoryId: string;
  onSelectCategory: (id: string) => void;
  locale: string;
  isRtl: boolean;
}

export function MenuCategoryNavPills({
  categories,
  activeCategoryId,
  onSelectCategory,
  locale,
  isRtl,
}: MenuCategoryNavPillsProps) {
  const getLoc = (obj: { it: string; en: string; ar: string }) => {
    return locale === 'ar' ? obj.ar : locale === 'en' ? obj.en : obj.it;
  };

  const activeIdx = categories.findIndex((c) => c.id === activeCategoryId);
  const activeCategory = categories[activeIdx] || categories[0];

  const handlePrev = () => {
    const prevIdx = activeIdx <= 0 ? categories.length - 1 : activeIdx - 1;
    onSelectCategory(categories[prevIdx].id);
  };

  const handleNext = () => {
    const nextIdx = activeIdx >= categories.length - 1 ? 0 : activeIdx + 1;
    onSelectCategory(categories[nextIdx].id);
  };

  return (
    <div className="space-y-3 mb-6">
      {/* ── Mobile Header Navigator (< md) ── */}
      <div className="md:hidden flex items-center justify-between bg-white/90 backdrop-blur-md p-2 rounded-2xl border border-black/10 shadow-xs">
        <button
          type="button"
          onClick={isRtl ? handleNext : handlePrev}
          className="p-2 rounded-xl bg-black/5 hover:bg-black/10 text-[var(--palette-espresso)] transition-colors cursor-pointer"
          aria-label="Previous category"
        >
          <ChevronLeft size={16} className={isRtl ? 'rotate-180' : ''} />
        </button>

        <div className="text-center px-3 min-w-0">
          <span className="text-[10px] font-bold tracking-wider uppercase text-[var(--palette-italian-red)] block truncate">
            {getLoc(activeCategory.badge)}
          </span>
          <span className="font-serif text-sm font-bold text-[var(--palette-espresso)] block truncate">
            {getLoc(activeCategory.title)}
          </span>
        </div>

        <button
          type="button"
          onClick={isRtl ? handlePrev : handleNext}
          className="p-2 rounded-xl bg-black/5 hover:bg-black/10 text-[var(--palette-espresso)] transition-colors cursor-pointer"
          aria-label="Next category"
        >
          <ChevronRight size={16} className={isRtl ? 'rotate-180' : ''} />
        </button>
      </div>

      {/* ── Desktop & Tablet Grid / Pill Selector ── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-2.5">
        {categories.map((cat, idx) => {
          const Icon = cat.icon;
          const isCurrent = cat.id === activeCategoryId;

          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => onSelectCategory(cat.id)}
              className={`relative text-start p-3 rounded-2xl transition-all duration-200 flex flex-col justify-between group cursor-pointer border ${
                isCurrent
                  ? 'bg-[var(--palette-espresso)] text-white border-[var(--palette-espresso)] shadow-md scale-[1.02]'
                  : 'bg-white/85 hover:bg-white text-[var(--palette-espresso)] border-black/8 hover:border-black/20 shadow-2xs hover:shadow-xs'
              }`}
            >
              {/* Top Row: Icon + Index */}
              <div className="flex items-center justify-between w-full mb-2">
                <div
                  className={`p-1.5 rounded-xl transition-colors ${
                    isCurrent
                      ? 'bg-white/15 text-[var(--palette-warm-ivory)]'
                      : 'bg-black/5 text-[var(--palette-italian-red)] group-hover:bg-[var(--palette-italian-red)]/10'
                  }`}
                >
                  <Icon size={16} />
                </div>
                <span
                  className={`text-[10px] font-mono font-bold ${
                    isCurrent ? 'text-white/50' : 'text-black/35'
                  }`}
                >
                  0{idx + 1}
                </span>
              </div>

              {/* Title & Badge */}
              <div className="min-w-0 w-full">
                <p className="font-serif text-xs font-bold truncate leading-snug">
                  {getLoc(cat.title)}
                </p>
                <p
                  className={`text-[10px] truncate mt-0.5 font-medium ${
                    isCurrent ? 'text-white/70' : 'text-[var(--palette-espresso)]/55'
                  }`}
                >
                  {getLoc(cat.craftTag)}
                </p>
              </div>

              {/* Active Indicator Underline Bar */}
              {isCurrent && (
                <span
                  className="absolute bottom-0 inset-x-3 h-0.5 bg-[var(--palette-aged-brass)] rounded-full"
                  aria-hidden="true"
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
