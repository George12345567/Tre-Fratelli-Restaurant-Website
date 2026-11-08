'use client';

import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ZoomIn } from 'lucide-react';
import type { Drink } from '@/data/types';
import { getLocalized } from '@/data/types';
import type { Locale } from '@/i18n/routing';

interface DrinkRowItemProps {
  drink: Drink;
  locale: Locale;
  isExpanded: boolean;
  onToggle: () => void;
  onOpenLightbox?: (drink: Drink) => void;
}

export function DrinkRowItem({
  drink,
  locale,
  isExpanded,
  onToggle,
  onOpenLightbox,
}: DrinkRowItemProps) {
  const hasImage = Boolean(drink.image && drink.image.trim() !== '');

  const localizedPairing = drink.pairing ? getLocalized(drink.pairing, locale) : '';
  const localizedDesc = drink.description ? getLocalized(drink.description, locale) : '';

  return (
    <div className="border-b border-black/[0.08] transition-colors hover:bg-black/[0.015]">
      {/* ── Main Clean Horizontal Drink Row: Name ....... € Price ── */}
      <div
        role="button"
        tabIndex={0}
        aria-expanded={isExpanded}
        onClick={onToggle}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onToggle();
          }
        }}
        className="py-2.5 sm:py-3 px-1 sm:px-2 flex items-baseline justify-between gap-3 sm:gap-6 cursor-pointer select-none group"
      >
        {/* Left / Right (in RTL): Drink Name & Region */}
        <div className="flex-1 min-w-0 flex items-baseline gap-2">
          <span className="font-serif text-[14px] sm:text-[16px] font-semibold text-[var(--palette-espresso)] group-hover:text-[var(--palette-italian-red)] transition-colors leading-snug">
            {drink.name}
          </span>

          {drink.region && (
            <span className="text-[11px] sm:text-[12px] font-sans font-medium text-[var(--palette-aged-brass)] shrink-0">
              ({drink.region})
            </span>
          )}

          {/* Tiny toggle chevron */}
          {(localizedPairing || localizedDesc || hasImage) && (
            <ChevronDown
              size={13}
              className={`text-stone-300 group-hover:text-[var(--palette-aged-brass)] transition-transform duration-200 shrink-0 ${
                isExpanded ? 'rotate-180 text-[var(--palette-aged-brass)]' : ''
              }`}
              aria-hidden="true"
            />
          )}
        </div>

        {/* Right / Left (in RTL): Price */}
        <div className="shrink-0 text-end">
          <span className="font-serif text-[14px] sm:text-[16px] font-bold text-[var(--palette-italian-red)] tracking-tight">
            {drink.price}
          </span>
        </div>
      </div>

      {/* ── Smooth Accordion Details (Single open item at a time) ── */}
      <AnimatePresence initial={false}>
        {isExpanded && (localizedPairing || localizedDesc || hasImage) && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden px-1 sm:px-2 pb-3 pt-0.5 space-y-1.5 text-xs sm:text-[13px]"
          >
            {localizedPairing && (
              <p className="font-serif italic text-[var(--palette-espresso)]/80 leading-relaxed">
                <span className="font-sans font-medium not-italic text-[11px] text-[var(--palette-aged-brass)] uppercase me-1">
                  {locale === 'ar' ? 'المواءمة:' : locale === 'it' ? 'Abbinamento:' : 'Pairing:'}
                </span>
                {localizedPairing}
              </p>
            )}

            {localizedDesc && (
              <p className="text-[var(--palette-espresso)]/75 leading-relaxed">
                {localizedDesc}
              </p>
            )}

            {hasImage && onOpenLightbox && (
              <div className="pt-1">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenLightbox(drink);
                  }}
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-[var(--palette-italian-red)] hover:underline cursor-pointer"
                >
                  <ZoomIn size={12} />
                  <span>
                    {locale === 'ar' ? 'عرض صورة المشروب' : locale === 'it' ? 'Vedi foto' : 'View photo'}
                  </span>
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
