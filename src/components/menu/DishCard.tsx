'use client';

import { Sparkles, ZoomIn } from 'lucide-react';
import type { Dish } from '@/data/types';
import { getLocalized } from '@/data/types';
import type { Locale } from '@/i18n/routing';

interface DishCardProps {
  dish: Dish;
  locale: Locale;
  onOpenLightbox: (dish: Dish) => void;
}

export function DishCard({ dish, locale, onOpenLightbox }: DishCardProps) {
  const hasImage = Boolean(dish.image && dish.image.trim() !== '');
  const isShowpiece =
    dish.id.startsWith('barca-') ||
    dish.id === 'piz-metro' ||
    dish.id.includes('crosta');

  return (
    <article
      className={`relative p-3.5 sm:p-5 rounded-2xl transition-all duration-300 flex items-start gap-3.5 sm:gap-4 group ${
        isShowpiece
          ? 'bg-gradient-to-br from-[var(--palette-warm-ivory)] via-white to-amber-50/50 border-2 border-[var(--palette-aged-brass)]/50 shadow-xs hover:shadow-md hover:border-[var(--palette-aged-brass)]'
          : 'bg-white/80 hover:bg-white border border-[var(--palette-stone-beige)]/40 hover:border-[var(--palette-aged-brass)]/40 shadow-2xs hover:shadow-xs'
      }`}
    >
      {/* Main Content Info */}
      <div className="flex-1 min-w-0 space-y-1.5">
        {/* Name and Price Header */}
        <div className="flex items-start justify-between gap-2.5">
          <div className="min-w-0">
            <h4 className="font-serif text-sm sm:text-base font-bold text-[var(--palette-espresso)] group-hover:text-[var(--palette-italian-red)] transition-colors leading-snug">
              {dish.name.it}
            </h4>

            {/* Translated Title if viewing in English or Arabic */}
            {locale !== 'it' && (
              <p className="text-xs font-medium text-[var(--palette-espresso)]/75 pt-0.5">
                {getLocalized(dish.name, locale)}
              </p>
            )}
          </div>

          <div className="text-end shrink-0">
            <span className="font-serif text-sm sm:text-base font-extrabold text-[var(--palette-italian-red)] tracking-tight block">
              {dish.price}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-xs text-[var(--palette-espresso)]/80 leading-relaxed font-serif italic">
          {getLocalized(dish.description, locale)}
        </p>

        {/* Micro-Badges & Dietary Tags */}
        <div className="pt-1 flex flex-wrap items-center gap-1.5">
          {dish.tags.includes('signature') && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-300/50">
              <Sparkles size={10} aria-hidden="true" />
              <span>
                {locale === 'ar'
                  ? 'طبق الدار المميز'
                  : locale === 'it'
                  ? 'Della Casa'
                  : 'Signature'}
              </span>
            </span>
          )}

          {dish.tags.includes('seafood') && (
            <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-sky-50 text-sky-800 border border-sky-200/50">
              {locale === 'ar' ? 'بحري طازج' : locale === 'it' ? 'Mare' : 'Seafood'}
            </span>
          )}

          {dish.tags.includes('meat') && (
            <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-orange-50 text-orange-800 border border-orange-200/50">
              {locale === 'ar' ? 'لحوم مختارة' : locale === 'it' ? 'Terra' : 'Meat'}
            </span>
          )}

          {dish.tags.includes('vegetarian') && (
            <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-50 text-emerald-800 border border-emerald-200/50">
              {locale === 'ar' ? 'نباتي' : locale === 'it' ? 'Vegetariano' : 'Vegetarian'}
            </span>
          )}

          {dish.tags.includes('raw') && (
            <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-purple-50 text-purple-800 border border-purple-200/50">
              {locale === 'ar' ? 'طازج نيء' : locale === 'it' ? 'Crudo' : 'Raw Bar'}
            </span>
          )}

          {/* Allergen Codes */}
          {dish.allergens.length > 0 && (
            <div className="ms-auto flex items-center gap-1">
              <span className="text-[10px] text-stone-400 font-mono">Allerg:</span>
              {dish.allergens.map((alg) => {
                // Extracts the number e.g. "1" from "1 - Glutine"
                const codeMatch = alg.match(/^\d+/);
                const code = codeMatch ? codeMatch[0] : alg;
                return (
                  <span
                    key={alg}
                    title={alg}
                    className="w-4 h-4 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 text-[9px] font-mono font-bold flex items-center justify-center border border-stone-200 transition-colors cursor-help"
                  >
                    {code}
                  </span>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Thumbnail with Zoom overlay */}
      {hasImage && (
        <button
          type="button"
          onClick={() => onOpenLightbox(dish)}
          title={
            locale === 'ar'
              ? 'انقر لتكبير صورة الطبق'
              : locale === 'it'
              ? 'Clicca per ingrandire la foto'
              : 'Click to enlarge photo'
          }
          className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border border-[var(--palette-stone-beige)]/70 shrink-0 cursor-pointer group/thumb shadow-2xs hover:shadow-xs transition-transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-[var(--palette-aged-brass)]"
        >
          <img
            src={dish.image}
            alt={dish.name.it}
            className="w-full h-full object-cover group-hover/thumb:scale-108 transition-transform duration-300"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/35 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-center justify-center text-white">
            <ZoomIn size={18} />
          </div>
        </button>
      )}
    </article>
  );
}
