'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import type { Dish } from '@/data/types';
import { getLocalized } from '@/data/types';
import type { Locale } from '@/i18n/routing';

interface MenuLightboxModalProps {
  dish: Dish | null;
  locale: Locale;
  onClose: () => void;
  showAllergens?: boolean;
  onPrev?: () => void;
  onNext?: () => void;
  currentIndex?: number;
  totalItems?: number;
  categoryLabel?: string;
}

export function MenuLightboxModal({
  dish,
  locale,
  onClose,
  showAllergens = true,
  onPrev,
  onNext,
  currentIndex,
  totalItems,
  categoryLabel,
}: MenuLightboxModalProps) {
  const isRtl = locale === 'ar';

  useEffect(() => {
    if (!dish) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        if (isRtl) onNext?.();
        else onPrev?.();
      }
      if (e.key === 'ArrowRight') {
        if (isRtl) onPrev?.();
        else onNext?.();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dish, onClose, onPrev, onNext, isRtl]);

  if (!dish || !dish.image) return null;

  const localizedName = getLocalized(dish.name, locale);
  const localizedDesc = getLocalized(dish.description, locale);
  const isSignature = dish.tags?.includes('signature');
  const closeText = locale === 'ar' ? 'إغلاق' : locale === 'it' ? 'Chiudi' : 'Close';
  const prevText = locale === 'ar' ? 'السابق' : locale === 'it' ? 'Precedente' : 'Previous';
  const nextText = locale === 'ar' ? 'التالي' : locale === 'it' ? 'Successivo' : 'Next';
  const signatureText = locale === 'ar' ? 'مميز' : locale === 'it' ? 'Specialità' : 'Signature';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={localizedName}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full bg-[#FAF7F2] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-[var(--palette-aged-brass)]/45 text-[var(--palette-espresso)] flex flex-col max-h-[92dvh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button Top */}
        <button
          type="button"
          onClick={onClose}
          aria-label={closeText}
          className="absolute top-3 end-3 z-20 w-11 h-11 rounded-full bg-black/70 hover:bg-black text-white border border-white/20 flex items-center justify-center transition-all shadow-md focus-visible:outline-2 focus-visible:outline-white cursor-pointer"
        >
          <X size={19} />
        </button>

        {/* High-Resolution 16:9 Image Preview */}
        <div className="relative w-full aspect-[16/9] bg-[#1C1411] overflow-hidden shrink-0">
          <Image
            src={dish.image}
            alt={localizedName}
            fill
            sizes="(max-width: 768px) 100vw, 672px"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/20 pointer-events-none" />

          {/* Top-Start Badges & Index Counter */}
          <div className="absolute top-3 start-3 z-10 flex flex-wrap items-center gap-2">
            {typeof currentIndex === 'number' && typeof totalItems === 'number' && totalItems > 1 && (
              <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-md text-[11px] font-bold text-white/90 border border-white/15 tabular-nums">
                {currentIndex + 1} / {totalItems}
              </span>
            )}
            {isSignature && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[var(--palette-espresso)]/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-amber-200 border border-amber-300/35 shadow-sm">
                <Sparkles size={11} className="text-amber-300 shrink-0" aria-hidden="true" />
                <span>{signatureText}</span>
              </span>
            )}
          </div>

          {/* Bottom-Start Price Pill */}
          <div className="absolute bottom-3.5 start-4 z-10">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[var(--palette-italian-red)] text-white font-serif text-sm sm:text-base font-extrabold tabular-nums shadow-md border border-white/20">
              {dish.price}
            </span>
          </div>
        </div>

        {/* Content Details */}
        <div className="p-5 sm:p-6 space-y-4 overflow-y-auto">
          <div className="space-y-1">
            <span className="text-[11px] uppercase tracking-[0.18em] font-bold text-[var(--palette-aged-brass)] block">
              {categoryLabel || dish.category}
            </span>

            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[var(--palette-espresso)] leading-snug">
              {localizedName}
            </h3>

            {locale !== 'it' && dish.name.it !== localizedName && (
              <p dir="ltr" className="text-xs sm:text-sm font-serif italic text-[var(--palette-aged-brass)] text-start">
                {dish.name.it}
              </p>
            )}
          </div>

          {localizedDesc && (
            <p className="text-xs sm:text-sm text-[var(--palette-espresso)]/85 leading-relaxed font-serif italic">
              &ldquo;{localizedDesc}&rdquo;
            </p>
          )}

          {showAllergens && dish.allergens.length > 0 && (
            <div className="pt-2 border-t border-[var(--palette-stone-beige)]/40 flex items-center gap-2 text-[11px] text-[var(--palette-espresso)]/65">
              <span className="font-semibold text-[var(--palette-espresso)]">
                {locale === 'ar' ? 'مسببات الحساسية:' : locale === 'it' ? 'Allergeni:' : 'Allergens:'}
              </span>
              <span>{dish.allergens.join(', ')}</span>
            </div>
          )}

          {/* Action Row - Prev/Next Navigation & Close */}
          <div className="pt-3 border-t border-[var(--palette-stone-beige)]/40 flex items-center justify-between gap-3">
            {onPrev && onNext ? (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={onPrev}
                  aria-label={prevText}
                  className="inline-flex min-h-11 items-center gap-1.5 px-3.5 py-2 rounded-full bg-white hover:bg-[var(--palette-warm-ivory)] border border-[var(--palette-stone-beige)]/70 text-[var(--palette-espresso)] text-xs font-semibold transition-colors cursor-pointer"
                >
                  <ChevronLeft size={15} className={isRtl ? 'rotate-180' : ''} aria-hidden="true" />
                  <span>{prevText}</span>
                </button>
                <button
                  type="button"
                  onClick={onNext}
                  aria-label={nextText}
                  className="inline-flex min-h-11 items-center gap-1.5 px-3.5 py-2 rounded-full bg-white hover:bg-[var(--palette-warm-ivory)] border border-[var(--palette-stone-beige)]/70 text-[var(--palette-espresso)] text-xs font-semibold transition-colors cursor-pointer"
                >
                  <span>{nextText}</span>
                  <ChevronRight size={15} className={isRtl ? 'rotate-180' : ''} aria-hidden="true" />
                </button>
              </div>
            ) : (
              <span />
            )}

            <button
              type="button"
              onClick={onClose}
              className="inline-flex min-h-11 items-center justify-center px-6 py-2 rounded-full bg-[var(--palette-espresso)] hover:bg-black text-white text-xs sm:text-sm font-semibold transition-all shadow-xs cursor-pointer"
            >
              {closeText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
