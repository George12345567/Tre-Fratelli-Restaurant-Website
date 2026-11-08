'use client';

import { motion, useReducedMotion } from 'motion/react';
import { ArrowLeft, ArrowRight, Grid } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';
import type { MenuCategoryConfig } from '@/data/menu/menuCategories';
import { getLocalized } from '@/data/types';

interface CategoryFooterNavProps {
  prev: MenuCategoryConfig;
  next: MenuCategoryConfig;
  locale: Locale;
}

export function CategoryFooterNav({ prev, next, locale }: CategoryFooterNavProps) {
  const shouldReduceMotion = useReducedMotion();
  const isRtl = locale === 'ar';
  const prevTitle = getLocalized(prev.title, locale);
  const nextTitle = getLocalized(next.title, locale);

  return (
    <motion.nav
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      aria-label="Category Navigation"
      className="pt-8 sm:pt-12 mt-10 sm:mt-14 border-t border-[var(--palette-stone-beige)]/50"
    >
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
        {/* Previous Category Button */}
        <Link
          href={`/menu/${prev.slug}`}
          className="w-full sm:w-auto inline-flex items-center justify-center sm:justify-start gap-2.5 px-5 py-3 rounded-2xl bg-white/80 hover:bg-white border border-[var(--palette-stone-beige)]/60 text-[var(--palette-espresso)] font-serif text-sm sm:text-base font-bold shadow-2xs hover:shadow-xs transition-all group"
        >
          <ArrowLeft
            size={16}
            className={`text-[var(--palette-italian-red)] transition-transform duration-200 group-hover:-translate-x-1 ${
              isRtl ? 'rotate-180 group-hover:translate-x-1' : ''
            }`}
            aria-hidden="true"
          />
          <div className="text-start">
            <span className="text-[10px] uppercase font-sans text-stone-400 block font-normal">
              {locale === 'ar' ? 'القسم السابق' : locale === 'it' ? 'Precedente' : 'Previous'}
            </span>
            <span>{prevTitle}</span>
          </div>
        </Link>

        {/* Center: Back to Main Menu Grid */}
        <Link
          href="/menu"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--palette-italian-red)] hover:bg-[var(--palette-italian-red-dark)] text-white text-xs sm:text-sm font-bold shadow-sm hover:shadow-md transition-all active:scale-95"
        >
          <Grid size={15} aria-hidden="true" />
          <span>
            {locale === 'ar'
              ? 'كل أقسام القائمة'
              : locale === 'it'
              ? 'Tutte le Categorie'
              : 'All Menu Categories'}
          </span>
        </Link>

        {/* Next Category Button */}
        <Link
          href={`/menu/${next.slug}`}
          className="w-full sm:w-auto inline-flex items-center justify-center sm:justify-end gap-2.5 px-5 py-3 rounded-2xl bg-white/80 hover:bg-white border border-[var(--palette-stone-beige)]/60 text-[var(--palette-espresso)] font-serif text-sm sm:text-base font-bold shadow-2xs hover:shadow-xs transition-all group text-end"
        >
          <div className="text-end">
            <span className="text-[10px] uppercase font-sans text-stone-400 block font-normal">
              {locale === 'ar' ? 'القسم التالي' : locale === 'it' ? 'Successivo' : 'Next'}
            </span>
            <span>{nextTitle}</span>
          </div>
          <ArrowRight
            size={16}
            className={`text-[var(--palette-italian-red)] transition-transform duration-200 group-hover:translate-x-1 ${
              isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''
            }`}
            aria-hidden="true"
          />
        </Link>
      </div>
    </motion.nav>
  );
}
