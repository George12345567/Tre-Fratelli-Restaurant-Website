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

  return (
    <article
      data-dessert-id={dish.id}
      role="button"
      tabIndex={0}
      aria-label={`${localizedName} — ${dish.price}`}
      onClick={() => onSelect(dish)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(dish);
        }
      }}
      className="group relative flex flex-col h-full rounded-2xl sm:rounded-3xl bg-white/95 border border-[var(--palette-stone-beige)]/55 shadow-[0_6px_24px_-8px_rgba(43,31,26,0.08)] hover:shadow-[0_20px_40px_-14px_rgba(43,31,26,0.18)] hover:border-[var(--palette-aged-brass)]/75 motion-safe:hover:-translate-y-1 active:scale-[0.99] transition-all duration-300 cursor-pointer overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--palette-aged-brass)]"
    >
      {/* ── 16:9 Full-Bleed Editorial Photography Frame ── */}
      <div className="relative w-full aspect-[16/9] bg-[#2B1F1A]/5 overflow-hidden border-b border-black/[0.05]">
        {dish.image && (
          <Image
            src={dish.image}
            alt={localizedName}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
            className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:group-hover:scale-105"
          />
        )}

        {/* ── Subtle Editorial Depth Vignette ── */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/15 opacity-55 group-hover:opacity-30 transition-opacity duration-300"
          aria-hidden="true"
        />

        {/* ── Top Badges ── */}
        <div className="absolute top-3 start-3 z-10 flex flex-wrap gap-1.5">
          {isSignature && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[var(--palette-espresso)]/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-amber-200 border border-amber-300/35 shadow-sm">
              <Sparkles size={11} className="text-amber-300 shrink-0" aria-hidden="true" />
              <span>{dict.signatureBadge}</span>
            </span>
          )}
          {isKids && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-rose-600/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
              ★ {dict.kidsBadge}
            </span>
          )}
        </div>

        {/* ── Zoom / Lightbox Indicator Pill (Visible on Mobile & Desktop) ── */}
        <div
          className="absolute top-3 end-3 z-10 w-8 h-8 rounded-full bg-black/55 backdrop-blur-md border border-white/25 text-white opacity-90 sm:opacity-75 group-hover:opacity-100 group-hover:bg-[var(--palette-espresso)] group-hover:scale-105 transition-all duration-200 flex items-center justify-center shadow-sm"
          aria-hidden="true"
        >
          <ZoomIn size={14} />
        </div>
      </div>

      {/* ── Card Content Body ── */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between gap-3.5">
        <div className="space-y-2">
          {/* Header Row: Title & Sculpted Price Pill */}
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-serif text-[17px] sm:text-lg font-bold text-[var(--palette-espresso)] group-hover:text-[var(--palette-italian-red)] transition-colors leading-snug line-clamp-2">
              {localizedName}
            </h3>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[var(--palette-warm-ivory)] border border-[var(--palette-stone-beige)]/70 font-serif text-sm sm:text-[15px] font-extrabold text-[var(--palette-italian-red)] tabular-nums whitespace-nowrap shrink-0 shadow-2xs">
              {dish.price}
            </span>
          </div>

          {/* Subtitle original Italian name if locale is English or Arabic */}
          {locale !== 'it' && dish.name.it !== localizedName && (
            <p className="text-[11px] text-[var(--palette-aged-brass)] font-serif italic line-clamp-1" dir="ltr">
              {dish.name.it}
            </p>
          )}

          {/* Description */}
          {localizedDesc && (
            <p className="text-xs sm:text-[13.5px] text-[var(--palette-espresso)]/75 font-sans leading-relaxed line-clamp-2">
              {localizedDesc}
            </p>
          )}
        </div>

        {/* ── Card Footer: Details CTA ── */}
        <div className="pt-3 border-t border-[var(--palette-stone-beige)]/35 flex items-center justify-between gap-2 text-[11px]">
          <span
            className="h-1.5 w-1.5 rounded-full bg-[var(--palette-aged-brass)]/50 group-hover:bg-[var(--palette-italian-red)] transition-colors"
            aria-hidden="true"
          />
          <span className="inline-flex items-center gap-1.5 font-semibold text-xs text-[var(--palette-aged-brass)] group-hover:text-[var(--palette-italian-red)] transition-colors shrink-0">
            <span>{dict.details}</span>
            <ArrowRight
              size={13}
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
