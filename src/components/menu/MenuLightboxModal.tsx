'use client';

import { useEffect } from 'react';
import { X } from 'lucide-react';
import type { Dish } from '@/data/types';
import { getLocalized } from '@/data/types';
import type { Locale } from '@/i18n/routing';

interface MenuLightboxModalProps {
  dish: Dish | null;
  locale: Locale;
  onClose: () => void;
}

export function MenuLightboxModal({ dish, locale, onClose }: MenuLightboxModalProps) {
  useEffect(() => {
    if (!dish) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dish, onClose]);

  if (!dish || !dish.image) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={getLocalized(dish.name, locale)}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-sm transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full bg-[#FAF7F2] rounded-2xl overflow-hidden shadow-2xl border border-[var(--palette-aged-brass)]/40 text-[var(--palette-espresso)] flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button Top */}
        <button
          type="button"
          onClick={onClose}
          aria-label={locale === 'ar' ? 'إغلاق' : locale === 'it' ? 'Chiudi' : 'Close'}
          className="absolute top-3 right-3 rtl:right-auto rtl:left-3 z-10 w-9 h-9 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-white cursor-pointer"
        >
          <X size={18} />
        </button>

        {/* High-Resolution Image Preview */}
        <div className="relative w-full h-64 sm:h-80 bg-stone-900 overflow-hidden shrink-0">
          <img
            src={dish.image}
            alt={getLocalized(dish.name, locale)}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          
          <div className="absolute bottom-3 left-4 rtl:left-auto rtl:right-4">
            <span className="inline-block px-3 py-1 rounded-full bg-[var(--palette-italian-red)] text-white text-xs font-bold shadow">
              {dish.price}
            </span>
          </div>
        </div>

        {/* Content Details */}
        <div className="p-5 sm:p-6 space-y-4 overflow-y-auto">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-[var(--palette-aged-brass)]">
                {dish.category}
              </span>
            </div>
            <h3
              dir="ltr"
              className="font-serif text-xl sm:text-2xl font-bold text-[var(--palette-espresso)] mt-1 text-start"
            >
              {dish.name.it}
            </h3>
            {locale !== 'it' && (
              <p className="text-sm font-medium text-[var(--palette-espresso)]/80 mt-0.5">
                {getLocalized(dish.name, locale)}
              </p>
            )}
          </div>

          <p className="text-xs sm:text-sm text-[var(--palette-espresso)]/85 leading-relaxed font-serif italic">
            &ldquo;{getLocalized(dish.description, locale)}&rdquo;
          </p>

          {dish.allergens.length > 0 && (
            <div className="pt-2 border-t border-[var(--palette-stone-beige)]/40 flex items-center gap-2 text-[11px] text-[var(--palette-espresso)]/65">
              <span className="font-semibold text-[var(--palette-espresso)]">
                {locale === 'ar' ? 'مسببات الحساسية:' : locale === 'it' ? 'Allergeni:' : 'Allergens:'}
              </span>
              <span>{dish.allergens.join(', ')}</span>
            </div>
          )}

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
