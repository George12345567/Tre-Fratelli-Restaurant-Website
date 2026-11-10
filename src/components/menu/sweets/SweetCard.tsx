'use client';

import Image from 'next/image';
import { Sparkles, ZoomIn, ArrowRight } from 'lucide-react';
import type { Dish } from '@/data/types';
import { getLocalized } from '@/data/types';
import type { Locale } from '@/i18n/routing';
import type { SweetsDictionary } from './sweetsI18n';

interface SweetCardProps {
  dish: Dish;
  locale: Locale;
  dict: SweetsDictionary;
  onSelect: (dish: Dish) => void;
}

export function SweetCard({ dish, locale, dict, onSelect }: SweetCardProps) {
  const isRtl = locale === 'ar';
  const localizedName = getLocalized(dish.name, locale);
  const localizedDesc = getLocalized(dish.description, locale);
  const isSignature = dish.tags?.includes('signature');
  const isKids =
    dish.id.includes('rabbit') ||
    dish.id.includes('pirata') ||
    dish.id.includes('principessa');

  // Format allergens cleanly for display
  const allergenChips = dish.allergens
    .map((a) => a.replace(/^\d+\s*-\s*/, '').trim())
    .slice(0, 2);

  return (
    <article
      data-dessert-id={dish.id}
      onClick={() => onSelect(dish)}
      className="group relative flex flex-col h-full rounded-2xl bg-white/95 border border-[var(--palette-stone-beige)]/50 shadow-2xs hover:shadow-xl hover:border-[var(--palette-aged-brass)]/60 hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden"
    >
      {/* ── Image Presentation Container ── */}
      <div className="relative w-full aspect-[4/3] bg-gradient-to-b from-[#FAF8F5] via-[#F6F1E7] to-[#ECE3D4] overflow-hidden">
        {dish.image && (
          <Image
            src={dish.image}
            alt={localizedName}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
            className="object-contain p-3 transition-transform duration-500 ease-out motion-safe:group-hover:scale-105"
          />
        )}

        {/* ── Top Badges ── */}
        <div className="absolute top-2.5 start-2.5 z-10 flex flex-wrap gap-1.5">
          {isSignature && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[var(--palette-espresso)]/85 backdrop-blur-xs text-[10px] font-bold uppercase tracking-wider text-amber-200 border border-amber-300/30 shadow-xs">
              <Sparkles size={11} className="text-amber-300 shrink-0" aria-hidden="true" />
              <span>{dict.signatureBadge}</span>
            </span>
          )}
          {isKids && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-rose-600/85 backdrop-blur-xs text-[10px] font-bold uppercase tracking-wider text-white shadow-xs">
              ★ {dict.kidsBadge}
            </span>
          )}
        </div>

        {/* ── Zoom Hint Pill ── */}
        <div className="absolute top-2.5 end-2.5 z-10 w-7 h-7 rounded-full bg-white/85 hover:bg-white text-[var(--palette-espresso)] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center shadow-xs">
          <ZoomIn size={14} aria-hidden="true" />
        </div>
      </div>

      {/* ── Card Content Body ── */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        <div className="space-y-1.5">
          {/* Header Row: Title & Price */}
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-serif text-base sm:text-lg font-bold text-[var(--palette-espresso)] group-hover:text-[var(--palette-italian-red)] transition-colors leading-snug line-clamp-2">
              {localizedName}
            </h3>
            <span className="font-serif text-base sm:text-lg font-extrabold text-[var(--palette-italian-red)] tabular-nums whitespace-nowrap shrink-0">
              {dish.price}
            </span>
          </div>

          {/* Subtitle original Italian name if locale is English or Arabic */}
          {locale !== 'it' && dish.name.it !== localizedName && (
            <p className="text-[11px] text-stone-400 font-serif italic line-clamp-1" dir="ltr">
              {dish.name.it}
            </p>
          )}

          {/* Description */}
          {localizedDesc && (
            <p className="text-xs sm:text-[13px] text-[var(--palette-espresso)]/70 font-sans leading-relaxed line-clamp-2 pt-0.5">
              {localizedDesc}
            </p>
          )}
        </div>

        {/* ── Card Footer: Allergens & Action Hint ── */}
        <div className="pt-3 border-t border-[var(--palette-stone-beige)]/30 flex items-center justify-between gap-2 text-[11px]">
          {/* Allergen chips */}
          <div className="flex items-center gap-1.5 overflow-hidden">
            {allergenChips.length > 0 ? (
              allergenChips.map((allergen, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded-md bg-[var(--palette-stone-beige)]/25 text-stone-600 text-[10px] font-medium truncate max-w-[100px]"
                >
                  {allergen}
                </span>
              ))
            ) : (
              <span className="text-[10px] text-stone-400 italic">Pasticceria Bindi</span>
            )}
          </div>

          {/* Details CTA Link */}
          <span className="inline-flex items-center gap-1 font-semibold text-[11px] text-[var(--palette-aged-brass)] group-hover:text-[var(--palette-italian-red)] transition-colors shrink-0">
            <span>{dict.details}</span>
            <ArrowRight
              size={12}
              className={`transition-transform duration-200 group-hover:translate-x-0.5 ${
                isRtl ? 'rotate-180 group-hover:-translate-x-0.5' : ''
              }`}
              aria-hidden="true"
            />
          </span>
        </div>
      </div>
    </article>
  );
}
