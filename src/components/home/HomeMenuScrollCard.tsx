'use client';

import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';
import type { MenuCategoryConfig } from '@/data/menu/menuCategories';
import { getLocalized } from '@/data/types';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

interface HomeMenuScrollCardProps {
  config: MenuCategoryConfig;
  locale: Locale;
  itemCount: number;
  index: number;
}

const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'];

export function HomeMenuScrollCard({
  config,
  locale,
  itemCount,
  index,
}: HomeMenuScrollCardProps) {
  const shouldReduceMotion = usePrefersReducedMotion();

  const isRtl = locale === 'ar';
  const categoryTitle = getLocalized(config.title, locale);
  const categorySubtitle = getLocalized(config.subtitle, locale);
  const categoryIntro = getLocalized(config.intro, locale);

  const isRightColumn = index % 2 === 1;

  const columnOffsetClass = isRightColumn ? 'lg:translate-y-12' : '';

  return (
    <div className={`w-full ${columnOffsetClass}`}>
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0.85, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="w-full group motion-reduce:transform-none! motion-reduce:opacity-100!"
      >
        <Link
          href={`/menu/${config.slug}`}
          className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--palette-aged-brass)] rounded-3xl"
          aria-label={`${categoryTitle} - ${categorySubtitle}`}
        >
          <article className="space-y-4">
            {/* ── Visual Frame: Image + Vignette + Floating Badges ── */}
            <div className="relative aspect-[16/11] sm:aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden bg-stone-200 shadow-md group-hover:shadow-[0_24px_48px_rgba(43,31,26,0.18)] transition-shadow duration-300 border border-black/5">
              {/* Keep the image stationary during touch scrolling. */}
              <div className="absolute inset-0">
                <img
                  src={config.image}
                  alt={categoryTitle}
                  className="w-full h-full object-cover transition-transform duration-300 ease-out [@media(hover:hover)_and_(pointer:fine)]:group-hover:scale-[1.02] motion-reduce:transform-none motion-reduce:transition-none"
                  loading="lazy"
                />
              </div>

              {/* Depth Gradients: Cinematic Vignette */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/15 group-hover:from-black/80 transition-colors duration-500 pointer-events-none"
                aria-hidden="true"
              />

              {/* Specular Top Glint Line */}
              <div
                className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                aria-hidden="true"
              />

              {/* Top Bar Badges: Roman Chapter Numeral & Item Counter */}
              <div className="absolute top-4 inset-x-4 flex items-center justify-between pointer-events-none">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono font-bold tracking-widest uppercase bg-black/50 [@media(hover:hover)_and_(pointer:fine)]:backdrop-blur-md text-amber-200/90 border border-white/15 shadow-xs">
                  {romanNumerals[index] || `0${index + 1}`}
                </span>

                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-sans font-semibold tracking-wide bg-black/50 [@media(hover:hover)_and_(pointer:fine)]:backdrop-blur-md text-white border border-white/15 shadow-xs">
                  {itemCount} {locale === 'ar' ? 'صنف' : locale === 'it' ? 'proposte' : 'items'}
                </span>
              </div>

              {/* Bottom In-Image Headline & Floating Action Pill */}
              <div className="absolute bottom-4 inset-x-4 sm:inset-x-6 flex items-end justify-between gap-3 text-white">
                <div className="space-y-1 max-w-[80%]">
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-amber-300/90 block">
                    {categorySubtitle}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-wide uppercase text-white drop-shadow-sm group-hover:text-amber-100 transition-colors">
                    {categoryTitle}
                  </h3>
                </div>

                {/* Circular Action Arrow Pill */}
                <div
                  className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/20 [@media(hover:hover)_and_(pointer:fine)]:backdrop-blur-md border border-white/30 flex items-center justify-center shrink-0 group-hover:bg-[var(--palette-italian-red)] group-hover:border-[var(--palette-italian-red)] group-hover:scale-110 transition-all duration-300 shadow-md ${
                    isRtl ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                >
                  <ArrowUpRight size={18} className="text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>

            {/* ── Editorial Excerpt Beneath Card ── */}
            <div className="px-1 sm:px-2 space-y-1">
              <p className="text-xs sm:text-[13px] text-[var(--palette-espresso)]/75 font-serif italic line-clamp-2 leading-relaxed">
                {categoryIntro}
              </p>

              {/* Subtle Expanding Red Accent Line */}
              <div
                className="w-8 group-hover:w-16 transition-all duration-300 h-0.5 bg-[var(--palette-italian-red)] rounded-full mt-2"
                aria-hidden="true"
              />
            </div>
          </article>
        </Link>
      </motion.div>
    </div>
  );
}
