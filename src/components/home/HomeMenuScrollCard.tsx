'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';
import type { MenuCategoryConfig } from '@/data/menu/menuCategories';
import { getLocalized } from '@/data/types';

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
  const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion() !== false;

  const isRtl = locale === 'ar';
  const categoryTitle = getLocalized(config.title, locale);
  const categorySubtitle = getLocalized(config.subtitle, locale);
  const categoryIntro = getLocalized(config.intro, locale);

  // ── Scroll-Linked Parallax Animation ──
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  // Smooth vertical parallax for the image inside the card container
  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ['0%', '0%'] : ['-3%', '3%']
  );

  // Subtle scale breath effect as the card moves through the viewport
  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    shouldReduceMotion ? [1, 1, 1] : [1.06, 1.02, 1.06]
  );

  // Each column opens from its inner edge, like a spread in a menu book.
  const isRightColumn = index % 2 === 1;
  const opensFromLeft = isRightColumn !== isRtl;
  const direction = opensFromLeft ? 1 : -1;
  const revealEnd = isRightColumn ? 0.38 : 0.34;
  const cardOpacity = useTransform(
    scrollYProgress,
    [0, revealEnd],
    shouldReduceMotion ? [1, 1] : [0.7, 1]
  );
  const cardScale = useTransform(
    scrollYProgress,
    [0, revealEnd],
    shouldReduceMotion ? [1, 1] : [0.97, 1]
  );
  const cardY = useTransform(
    scrollYProgress,
    [0, revealEnd],
    shouldReduceMotion ? [0, 0] : [48, 0]
  );
  const pageTurn = useTransform(
    scrollYProgress,
    [0, revealEnd],
    shouldReduceMotion ? [0, 0] : [direction * 16, 0]
  );
  const pageTilt = useTransform(
    scrollYProgress,
    [0, revealEnd],
    shouldReduceMotion ? [0, 0] : [4, 0]
  );
  const pageRoll = useTransform(
    scrollYProgress,
    [0, revealEnd],
    shouldReduceMotion ? [0, 0] : [direction * 1.5, 0]
  );
  const foldOpacity = useTransform(
    scrollYProgress,
    [0, revealEnd],
    shouldReduceMotion ? [0, 0] : [0.18, 0]
  );

  const columnOffsetClass = isRightColumn ? 'lg:translate-y-12' : '';

  return (
    // Measure a stationary wrapper so animated transforms cannot alter scroll progress.
    <div
      ref={cardRef}
      className={`w-full ${columnOffsetClass}`}
      style={{ perspective: 1200 }}
    >
      <motion.div
        style={{
          opacity: cardOpacity,
          scale: cardScale,
          y: cardY,
          rotateY: pageTurn,
          rotateX: pageTilt,
          rotateZ: pageRoll,
          transformOrigin: opensFromLeft ? '0% 50%' : '100% 50%',
        }}
        className="w-full group"
      >
        <Link
          href={`/menu/${config.slug}`}
          className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--palette-aged-brass)] rounded-3xl"
          aria-label={`${categoryTitle} - ${categorySubtitle}`}
        >
          <article className="space-y-4">
            {/* ── Visual Frame: Parallax Image + Vignette + Floating Badges ── */}
            <div className="relative aspect-[16/11] sm:aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden bg-stone-200 shadow-md group-hover:shadow-[0_24px_48px_rgba(43,31,26,0.18)] transition-all duration-700 border border-black/5">
              {/* Parallax Image Layer */}
              <motion.div
                style={{
                  y: imageY,
                  scale: imageScale,
                }}
                className="absolute inset-[-10%] w-[120%] h-[120%]"
              >
                <img
                  src={config.image}
                  alt={categoryTitle}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none"
                  loading="lazy"
                />
              </motion.div>

              {/* A soft crease disappears as the page settles flat. */}
              <motion.div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{
                  opacity: foldOpacity,
                  background: `linear-gradient(${opensFromLeft ? '90deg' : '270deg'}, #2b1f1a, transparent 65%)`,
                }}
              />

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
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono font-bold tracking-widest uppercase bg-black/50 backdrop-blur-md text-amber-200/90 border border-white/15 shadow-xs">
                  {romanNumerals[index] || `0${index + 1}`}
                </span>

                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-sans font-semibold tracking-wide bg-black/50 backdrop-blur-md text-white border border-white/15 shadow-xs">
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
                  className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shrink-0 group-hover:bg-[var(--palette-italian-red)] group-hover:border-[var(--palette-italian-red)] group-hover:scale-110 transition-all duration-300 shadow-md ${
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
