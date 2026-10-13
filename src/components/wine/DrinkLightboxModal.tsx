'use client';

import { useEffect } from 'react';
import { X, Wine, MapPin } from 'lucide-react';
import type { Drink } from '@/data/types';
import { getLocalized } from '@/data/types';
import type { Locale } from '@/i18n/routing';

interface DrinkLightboxModalProps {
  drink: Drink | null;
  locale: Locale;
  onClose: () => void;
}

export function DrinkLightboxModal({ drink, locale, onClose }: DrinkLightboxModalProps) {

  useEffect(() => {
    if (!drink) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [drink, onClose]);

  if (!drink || !drink.image) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={drink.name}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-sm transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full bg-[#FAF7F2] rounded-2xl overflow-hidden shadow-2xl border border-[var(--palette-aged-brass)]/40 text-[var(--palette-espresso)] flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label={locale === 'ar' ? 'إغلاق' : locale === 'it' ? 'Chiudi' : 'Close'}
          className="absolute top-3 right-3 rtl:right-auto rtl:left-3 z-10 w-9 h-9 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-white"
        >
          <X size={18} />
        </button>

        {/* High-Resolution Image Preview */}
        <div className="relative w-full h-64 sm:h-80 bg-stone-900 overflow-hidden shrink-0">
          <img
            src={drink.image}
            alt={drink.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          
          <div className="absolute bottom-3 left-4 rtl:left-auto rtl:right-4">
            <span className="inline-block px-3 py-1 rounded-full bg-[var(--palette-italian-red)] text-white text-xs font-bold shadow">
              {drink.price}
            </span>
          </div>
        </div>

        {/* Content Details */}
        <div className="p-5 sm:p-6 space-y-4 overflow-y-auto">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 text-[11px] uppercase tracking-wider font-semibold text-[var(--palette-aged-brass)]">
                <Wine size={12} aria-hidden="true" />
                <span>{drink.category}</span>
              </span>
              {drink.region && (
                <span className="inline-flex items-center gap-1 text-[11px] text-[var(--palette-espresso)]/60 font-medium">
                  <MapPin size={11} aria-hidden="true" />
                  <span>{drink.region} · Italia</span>
                </span>
              )}
            </div>
            <h3
              dir="ltr"
              className="font-serif text-xl sm:text-2xl font-bold text-[var(--palette-espresso)] mt-1 text-start"
            >
              {drink.name}
            </h3>
          </div>

          <div className="pt-2 border-t border-[var(--palette-stone-beige)]/40 space-y-1">
            <span className="text-[11px] uppercase tracking-wider font-semibold text-[var(--palette-italian-red)] block">
              {locale === 'ar' ? 'توافق مقترح مع الأطباق:' : locale === 'it' ? 'Miglior Abbinamento:' : 'Recommended Food Pairing:'}
            </span>
            <p className="text-xs sm:text-sm text-[var(--palette-espresso)]/85 leading-relaxed font-serif italic">
              &ldquo;{getLocalized(drink.pairing, locale)}&rdquo;
            </p>
          </div>

          {/* Action Row - Clean Close */}
          <div className="pt-2 flex items-center justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 rounded-full bg-[var(--palette-espresso)] hover:bg-black text-white text-xs sm:text-sm font-semibold transition-all shadow-xs cursor-pointer"
            >
              {locale === 'ar' ? 'إغلاق' : locale === 'it' ? 'Chiudi' : 'Close'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
