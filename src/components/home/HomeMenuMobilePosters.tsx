'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';
import { homeMenuPillars, type HomePillar } from '@/data/homePillars';
import { getLocalized } from '@/data/types';

interface HomeMenuMobilePostersProps {
  locale: Locale;
}

function MobilePosterCard({
  pillar,
  locale,
  index,
}: {
  pillar: HomePillar;
  locale: Locale;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const isRtl = locale === 'ar';

  const badgeText = getLocalized(pillar.badge, locale);
  const titleText = getLocalized(pillar.title, locale);
  const subtitleText = getLocalized(pillar.subtitle, locale);
  const descText = getLocalized(pillar.description, locale);
  const ctaLabel = getLocalized(pillar.ctaText, locale);
  const statsLabel = pillar.stats ? getLocalized(pillar.stats, locale) : undefined;

  // Gentle scroll parallax for mobile photo inside its container
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ['0%', '0%'] : ['-6%', '6%']
  );

  return (
    <motion.div
      ref={cardRef}
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="w-full relative"
    >
      <Link
        href={pillar.href}
        className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--palette-aged-brass)] rounded-3xl group"
        aria-label={`${titleText} — ${subtitleText}`}
      >
        <article className="relative w-full h-[62vh] min-h-[460px] max-h-[580px] rounded-3xl overflow-hidden bg-stone-900 shadow-xl border border-white/10 flex flex-col justify-between p-5 sm:p-6 text-white">
          {/* ── Background Poster Image with Smooth Parallax ── */}
          <motion.div
            style={{ y: imageY }}
            className="absolute inset-[-10%] w-[120%] h-[120%] pointer-events-none"
          >
            <img
              src={pillar.image}
              alt={titleText}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-active:scale-105"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          </motion.div>

          {/* Cinematic Vignette Gradients */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/40 to-black/35 pointer-events-none"
            aria-hidden="true"
          />

          {/* Top Edge Specular Glint */}
          <div
            className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none"
            aria-hidden="true"
          />

          {/* ── Top Bar: Chapter Pill & Stats ── */}
          <div className="relative z-10 flex items-center justify-between gap-2 pointer-events-none">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-black/60 backdrop-blur-md text-amber-200 border border-white/20 shadow-xs">
              <Sparkles size={11} className="text-amber-300" />
              {badgeText}
            </span>

            {statsLabel && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold bg-white/20 backdrop-blur-md text-white border border-white/25 shadow-xs">
                {statsLabel}
              </span>
            )}
          </div>

          {/* ── Bottom Content: Headline, Excerpt & Large Touch CTA ── */}
          <div className="relative z-10 space-y-3 pt-6">
            <div className="space-y-1">
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-amber-300 block">
                {subtitleText}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-extrabold uppercase tracking-wide text-white drop-shadow-sm leading-tight">
                {titleText}
              </h3>
            </div>

            <p className="text-xs sm:text-[13px] text-stone-200/90 font-serif italic line-clamp-2 leading-relaxed">
              {descText}
            </p>

            {/* Large Thumb-Friendly Tap Button (min 48px height) */}
            <div className="pt-1">
              <div
                className={`w-full min-h-[48px] rounded-2xl bg-[var(--palette-italian-red)] hover:bg-[var(--palette-italian-red-dark)] active:scale-[0.98] text-white flex items-center justify-between px-5 font-semibold text-xs sm:text-sm shadow-lg transition-all duration-200 border border-white/20`}
              >
                <span>{ctaLabel}</span>
                <div
                  className={`w-7 h-7 rounded-full bg-white/20 flex items-center justify-center shrink-0 ${
                    isRtl ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                >
                  <ArrowRight size={14} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}

export function HomeMenuMobilePosters({ locale }: HomeMenuMobilePostersProps) {
  const sectionEyebrow =
    locale === 'ar'
      ? 'فنون الطهي الإيطالي'
      : locale === 'it'
      ? 'Tradizione & Maestria'
      : 'Artisanal Italian Heritage';

  const sectionTitle =
    locale === 'ar'
      ? 'أبواب قائمة طعامنا'
      : locale === 'it'
      ? 'I Tre Capitoli del Menù'
      : 'The Three Menu Chapters';

  const sectionIntro =
    locale === 'ar'
      ? 'تصفح فصولنا الثلاثة: المطبخ الإيطالي، بيتزا الحطب، وأعرق الخمور والحلويات.'
      : locale === 'it'
      ? 'Esplora i nostri tre pilastri: la cucina artigianale, la pizza a legna e la cantina con i dolci Bindi.'
      : 'Explore our three culinary pillars: handcrafted cuisine, wood-fired pizza, and fine cellar with Bindi desserts.';

  return (
    <div className="lg:hidden py-12 px-4 sm:px-6 space-y-6">
      {/* ── Mobile Section Header ── */}
      <div className="space-y-2 text-start">
        <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-[var(--palette-aged-brass)] block">
          {sectionEyebrow}
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl font-extrabold uppercase tracking-wide text-[var(--palette-espresso)]">
          {sectionTitle}
        </h2>
        <p className="text-xs sm:text-sm text-[var(--palette-espresso)]/75 font-serif italic">
          {sectionIntro}
        </p>
      </div>

      {/* ── Vertical Poster Feed (Natural Thumb-Scroll, 60vh Each) ── */}
      <div className="space-y-5">
        {homeMenuPillars.map((pillar, index) => (
          <MobilePosterCard
            key={pillar.id}
            pillar={pillar}
            locale={locale}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
