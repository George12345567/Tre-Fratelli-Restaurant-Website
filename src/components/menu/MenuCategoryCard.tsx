'use client';

import { motion } from 'motion/react';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';
import type { MenuCategoryConfig } from '@/data/menu/menuCategories';
import { getLocalized } from '@/data/types';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

interface MenuCategoryCardProps {
  config: MenuCategoryConfig;
  locale: Locale;
  itemCount: number;
  index: number;
}

export function MenuCategoryCard({
  config,
  locale,
  itemCount,
  index,
}: MenuCategoryCardProps) {
  const shouldReduceMotion = usePrefersReducedMotion();
  const categoryTitle = getLocalized(config.title, locale);
  const categorySubtitle = getLocalized(config.subtitle, locale);

  // Stagger between cards in the same row (2-column layout: second card gets 120ms delay)
  const isSecondInRow = index % 2 === 1;
  const delay = isSecondInRow ? 0.12 : 0;

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : {
              duration: 0.65,
              delay,
              ease: [0.16, 1, 0.3, 1],
            }
      }
      className="w-full"
    >
      <Link
        href={`/menu/${config.slug}`}
        className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--palette-aged-brass)] rounded-3xl"
        aria-label={`${categoryTitle} - ${itemCount} ${
          locale === 'ar' ? 'أصناف متوفرة' : locale === 'it' ? 'proposte' : 'items'
        }`}
      >
        <article className="space-y-3 sm:space-y-4">
          {/* ── Category Image Container ── */}
          <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden bg-stone-100 shadow-sm group-hover:shadow-[0_20px_40px_rgba(43,31,26,0.14)] transition-all duration-500 border border-black/5">
            <img
              src={config.image}
              alt={categoryTitle}
              className="w-full h-full object-cover transition-transform duration-500 ease-out sm:group-hover:scale-105"
              loading="lazy"
            />

            {/* Subtle vignette gradient for photo depth */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10 opacity-60 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"
              aria-hidden="true"
            />

            {/* Specular Glint Line on Card Top Edge */}
            <div
              className="absolute inset-x-6 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              aria-hidden="true"
            />

            {/* Item Count Micro Badge in Top Corner */}
            <div className="absolute top-3.5 end-3.5 pointer-events-none transition-transform duration-300 group-hover:scale-105">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-black/65 backdrop-blur-md text-white border border-white/20 shadow-xs">
                {itemCount} {locale === 'ar' ? 'صنف' : locale === 'it' ? 'proposte' : 'items'}
              </span>
            </div>
          </div>

          {/* ── Centered Category Name & Subtitle ── */}
          <div className="text-center space-y-1 px-2">
            <h2 className="font-serif text-lg sm:text-xl lg:text-2xl font-bold tracking-wider uppercase text-[var(--palette-espresso)] group-hover:text-[var(--palette-italian-red)] transition-colors duration-250">
              {categoryTitle}
            </h2>

            <p className="text-xs sm:text-[13px] text-[var(--palette-espresso)]/70 font-sans tracking-wide">
              {categorySubtitle}
            </p>

            {/* Subtle Expanding Gold Accent Line on Hover */}
            <div
              className="w-0 group-hover:w-10 transition-all duration-300 h-0.5 bg-[var(--palette-italian-red)] mx-auto rounded-full mt-1.5"
              aria-hidden="true"
            />
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
