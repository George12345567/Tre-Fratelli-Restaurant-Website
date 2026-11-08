'use client';

import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Sparkles, ZoomIn } from 'lucide-react';
import type { Dish } from '@/data/types';
import { getLocalized } from '@/data/types';
import type { Locale } from '@/i18n/routing';

interface DishRowItemProps {
  dish: Dish;
  locale: Locale;
  isExpanded: boolean;
  onToggle: () => void;
  onOpenLightbox?: (dish: Dish) => void;
}

export function DishRowItem({
  dish,
  locale,
  isExpanded,
  onToggle,
  onOpenLightbox,
}: DishRowItemProps) {
  const hasImage = Boolean(dish.image && dish.image.trim() !== '');

  const italianName = dish.name.it;
  const localizedName = getLocalized(dish.name, locale);
  const localizedDescription = getLocalized(dish.description, locale);

  const isSignature = dish.tags.includes('signature');
  const hasDetails = Boolean(
    (localizedDescription && localizedDescription.trim() !== '') ||
    dish.allergens.length > 0 ||
    hasImage
  );

  return (
    <div className="border-b border-black/[0.08] transition-colors hover:bg-black/[0.015]">
      {/* ── Main Clean Horizontal Dish Row: Name ....... € Price ── */}
      <div
        role={hasDetails ? 'button' : undefined}
        tabIndex={hasDetails ? 0 : undefined}
        aria-expanded={hasDetails ? isExpanded : undefined}
        onClick={hasDetails ? onToggle : undefined}
        onKeyDown={
          hasDetails
            ? (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onToggle();
                }
              }
            : undefined
        }
        className={`py-2.5 sm:py-3 px-1 sm:px-2 flex items-baseline justify-between gap-3 sm:gap-6 select-none group ${
          hasDetails ? 'cursor-pointer' : ''
        }`}
      >
        {/* Left / Right (in RTL): Dish Name */}
        <div className="flex-1 min-w-0 flex items-baseline gap-2">
          <span className="font-serif text-[14px] sm:text-[16px] font-semibold text-[var(--palette-espresso)] group-hover:text-[var(--palette-italian-red)] transition-colors leading-snug">
            {locale === 'it' ? (
              italianName
            ) : locale === 'ar' ? (
              <>
                <span>{localizedName}</span>
                <span className="text-[12px] font-sans font-normal text-stone-400 ms-2" dir="ltr">
                  ({italianName})
                </span>
              </>
            ) : (
              <>
                <span>{italianName}</span>
                {localizedName !== italianName && (
                  <span className="text-[12px] font-sans font-normal text-stone-400 ms-1.5">
                    — {localizedName}
                  </span>
                )}
              </>
            )}
          </span>

          {/* Subtle star mark for signature dishes */}
          {isSignature && (
            <span
              title={
                locale === 'ar'
                  ? 'طبق الدار المميز'
                  : locale === 'it'
                  ? 'Specialità della Casa'
                  : 'House Specialty'
              }
              className="text-[var(--palette-aged-brass)] shrink-0 inline-flex items-center"
              aria-label="Signature"
            >
              <Sparkles size={12} className="fill-[var(--palette-aged-brass)]/40" />
            </span>
          )}

          {/* Tiny toggle chevron: only when item has details or image */}
          {hasDetails && (
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
            {dish.price}
          </span>
        </div>
      </div>

      {/* ── Smooth Accordion Details (Single open item at a time) ── */}
      <AnimatePresence initial={false}>
        {hasDetails && isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden px-1 sm:px-2 pb-3 pt-0.5 space-y-2 text-xs sm:text-[13px]"
          >
            {/* Ingredient Description */}
            {localizedDescription && (
              <p className="font-serif italic text-[var(--palette-espresso)]/80 leading-relaxed max-w-3xl">
                {localizedDescription}
              </p>
            )}

            {/* Allergens & Photo Trigger */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-[11px] text-stone-500">
              {dish.allergens.length > 0 ? (
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="font-sans font-semibold uppercase tracking-wider text-[10px] text-stone-400">
                    {locale === 'ar' ? 'مسببات الحساسية:' : locale === 'it' ? 'Allergeni:' : 'Allergens:'}
                  </span>
                  <span className="font-mono text-stone-600 font-bold">
                    {dish.allergens
                      .map((alg) => {
                        const match = alg.match(/^\d+/);
                        return match ? match[0] : alg;
                      })
                      .join(', ')}
                  </span>
                </div>
              ) : (
                <div />
              )}

              {/* Optional Thumbnail Photo */}
              {hasImage && onOpenLightbox && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenLightbox(dish);
                  }}
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-[var(--palette-italian-red)] hover:underline cursor-pointer"
                >
                  <ZoomIn size={12} />
                  <span>
                    {locale === 'ar' ? 'عرض صورة الطبق' : locale === 'it' ? 'Vedi foto' : 'View photo'}
                  </span>
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
