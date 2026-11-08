'use client';

import { Sparkles, Wine, ZoomIn } from 'lucide-react';
import type { Drink } from '@/data/types';
import { getLocalized } from '@/data/types';
import type { Locale } from '@/i18n/routing';

interface DrinkCardProps {
  drink: Drink;
  locale: Locale;
  onOpenLightbox?: (drink: Drink) => void;
}

export function DrinkCard({ drink, locale, onOpenLightbox }: DrinkCardProps) {
  const hasImage = Boolean(drink.image && drink.image.trim() !== '');
  const isWine =
    drink.category === 'sparkling' ||
    drink.category === 'white' ||
    drink.category === 'red' ||
    drink.category === 'rose' ||
    drink.category === 'glass';

  return (
    <article className="relative p-3.5 sm:p-5 rounded-2xl transition-all duration-300 flex items-start gap-3.5 sm:gap-4 group bg-white/85 hover:bg-white border border-[var(--palette-stone-beige)]/40 hover:border-[var(--palette-aged-brass)]/40 shadow-2xs hover:shadow-xs">
      {/* Main Content Info */}
      <div className="flex-1 min-w-0 space-y-1.5">
        {/* Name and Price Header */}
        <div className="flex items-start justify-between gap-2.5">
          <div className="min-w-0">
            <h4 className="font-serif text-sm sm:text-base font-bold text-[var(--palette-espresso)] group-hover:text-[var(--palette-italian-red)] transition-colors leading-snug">
              {drink.name}
            </h4>

            {drink.region && (
              <p className="text-xs font-semibold text-[var(--palette-aged-brass)] pt-0.5 tracking-wide">
                {drink.region}
              </p>
            )}
          </div>

          <div className="text-end shrink-0">
            <span className="font-serif text-sm sm:text-base font-extrabold text-[var(--palette-italian-red)] tracking-tight block">
              {drink.price}
            </span>
          </div>
        </div>

        {/* Pairing or Description */}
        {drink.pairing && (
          <p className="text-xs text-[var(--palette-espresso)]/80 leading-relaxed font-serif italic">
            <span className="font-sans font-medium not-italic text-[11px] text-[var(--palette-aged-brass)] uppercase me-1">
              {locale === 'ar' ? 'المواءمة:' : locale === 'it' ? 'Abbinamento:' : 'Pairing:'}
            </span>
            {getLocalized(drink.pairing, locale)}
          </p>
        )}

        {drink.description && (
          <p className="text-xs text-[var(--palette-espresso)]/75 leading-relaxed">
            {getLocalized(drink.description, locale)}
          </p>
        )}

        {/* Category Tag */}
        <div className="pt-1 flex flex-wrap items-center gap-1.5">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-[var(--palette-stone-beige-light)]/60 text-[var(--palette-espresso)] border border-stone-200">
            {isWine ? <Wine size={10} className="text-[var(--palette-italian-red)]" /> : <Sparkles size={10} className="text-amber-600" />}
            <span className="capitalize">{drink.category}</span>
          </span>
        </div>
      </div>

      {/* Thumbnail with Zoom overlay */}
      {hasImage && onOpenLightbox && (
        <button
          type="button"
          onClick={() => onOpenLightbox(drink)}
          title={
            locale === 'ar'
              ? 'انقر لتكبير صورة المشروب'
              : locale === 'it'
              ? 'Clicca per ingrandire la foto'
              : 'Click to enlarge photo'
          }
          className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border border-[var(--palette-stone-beige)]/70 shrink-0 cursor-pointer group/thumb shadow-2xs hover:shadow-xs transition-transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-[var(--palette-aged-brass)]"
        >
          <img
            src={drink.image}
            alt={drink.name}
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
