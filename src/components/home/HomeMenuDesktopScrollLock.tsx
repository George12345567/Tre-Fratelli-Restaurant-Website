'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';
import { homeMenuPillars } from '@/data/homePillars';
import { getLocalized } from '@/data/types';

interface HomeMenuDesktopScrollLockProps {
  locale: Locale;
}

export function HomeMenuDesktopScrollLock({ locale }: HomeMenuDesktopScrollLockProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const isRtl = locale === 'ar';

  const sectionEyebrow =
    locale === 'ar'
      ? 'فنون الطهي الإيطالي الأصيل'
      : locale === 'it'
      ? 'Tradizione & Maestria Culinaria'
      : 'Authentic Italian Culinary Arts';

  const sectionTitle =
    locale === 'ar'
      ? 'أبواب قائمة طعام تري فراتيلي'
      : locale === 'it'
      ? 'I Tre Capitoli del Menù'
      : 'The Three Menu Chapters';

  const sectionSubtitle =
    locale === 'ar'
      ? 'المطبخ الإيطالي، بيتزا الحطب، وأعرق الخمور والحلويات في تجربة استثنائية.'
      : locale === 'it'
      ? 'Dalla pasta fresca al forno a legna, fino ai grandi calici di cantina.'
      : 'From handmade pasta to beechwood oven pizza, and prestigious cellar labels.';

  // ── Scroll Lock Progress (0 -> 1 over the 260vh container) ──
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // ── Phase 1: Headline Blur-Out & Fade (0.00 -> 0.22) ──
  const titleOpacity = useTransform(
    scrollYProgress,
    [0.02, 0.18],
    shouldReduceMotion ? [1, 1] : [1, 0]
  );
  const titleBlur = useTransform(
    scrollYProgress,
    [0.02, 0.18],
    shouldReduceMotion ? ['blur(0px)', 'blur(0px)'] : ['blur(0px)', 'blur(16px)']
  );
  const titleScale = useTransform(
    scrollYProgress,
    [0.02, 0.18],
    shouldReduceMotion ? [1, 1] : [1, 0.88]
  );
  const titleY = useTransform(
    scrollYProgress,
    [0.02, 0.18],
    shouldReduceMotion ? [0, 0] : [0, -40]
  );

  // ── Phase 2 & 3: Staggered Slide-In & Fly-Out for the 3 Cards ──
  // Card 1 (Cucina):
  const card1X = useTransform(
    scrollYProgress,
    [0, 0.12, 0.4, 0.72, 0.95],
    shouldReduceMotion
      ? ['0vw', '0vw', '0vw', '0vw', '0vw']
      : ['110vw', '110vw', '0vw', '0vw', '-85vw']
  );
  const card1Y = useTransform(
    scrollYProgress,
    [0, 0.72, 0.95],
    shouldReduceMotion ? ['0vh', '0vh', '0vh'] : ['0vh', '0vh', '-48vh']
  );
  const card1Rotate = useTransform(
    scrollYProgress,
    [0, 0.12, 0.4, 0.72, 0.95],
    shouldReduceMotion ? [0, 0, 0, 0, 0] : [5, 5, 0, 0, -8]
  );
  const card1Opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.32, 0.72, 0.94],
    shouldReduceMotion ? [1, 1, 1, 1, 1] : [0, 0, 1, 1, 0]
  );

  // Card 2 (Pizzeria):
  const card2X = useTransform(
    scrollYProgress,
    [0, 0.16, 0.46, 0.75, 0.98],
    shouldReduceMotion
      ? ['0vw', '0vw', '0vw', '0vw', '0vw']
      : ['125vw', '125vw', '0vw', '0vw', '-80vw']
  );
  const card2Y = useTransform(
    scrollYProgress,
    [0, 0.75, 0.98],
    shouldReduceMotion ? ['0vh', '0vh', '0vh'] : ['0vh', '0vh', '-52vh']
  );
  const card2Rotate = useTransform(
    scrollYProgress,
    [0, 0.16, 0.46, 0.75, 0.98],
    shouldReduceMotion ? [0, 0, 0, 0, 0] : [3, 3, 0, 0, -6]
  );
  const card2Opacity = useTransform(
    scrollYProgress,
    [0, 0.14, 0.38, 0.75, 0.97],
    shouldReduceMotion ? [1, 1, 1, 1, 1] : [0, 0, 1, 1, 0]
  );

  // Card 3 (Cantina):
  const card3X = useTransform(
    scrollYProgress,
    [0, 0.2, 0.52, 0.78, 1.0],
    shouldReduceMotion
      ? ['0vw', '0vw', '0vw', '0vw', '0vw']
      : ['140vw', '140vw', '0vw', '0vw', '-75vw']
  );
  const card3Y = useTransform(
    scrollYProgress,
    [0, 0.78, 1.0],
    shouldReduceMotion ? ['0vh', '0vh', '0vh'] : ['0vh', '0vh', '-56vh']
  );
  const card3Rotate = useTransform(
    scrollYProgress,
    [0, 0.2, 0.52, 0.78, 1.0],
    shouldReduceMotion ? [0, 0, 0, 0, 0] : [2, 2, 0, 0, -4]
  );
  const card3Opacity = useTransform(
    scrollYProgress,
    [0, 0.18, 0.44, 0.78, 0.99],
    shouldReduceMotion ? [1, 1, 1, 1, 1] : [0, 0, 1, 1, 0]
  );

  // Indicator bar progress (showing user when cards are centered)
  const indicatorProgress = useTransform(
    scrollYProgress,
    [0.2, 0.75],
    ['0%', '100%']
  );
  const indicatorOpacity = useTransform(
    scrollYProgress,
    [0.15, 0.25, 0.72, 0.8],
    [0, 1, 1, 0]
  );

  const cardTransforms = [
    { x: card1X, y: card1Y, rotate: card1Rotate, opacity: card1Opacity },
    { x: card2X, y: card2Y, rotate: card2Rotate, opacity: card2Opacity },
    { x: card3X, y: card3Y, rotate: card3Rotate, opacity: card3Opacity },
  ];

  return (
    <div
      ref={containerRef}
      className="hidden lg:block relative h-[270vh] w-full"
      id="desktop-menu-scroll-lock"
    >
      {/* ── Sticky Full-Viewport Stage ── */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center items-center px-6 xl:px-12 pointer-events-none">
        {/* Subtle Ambient Background Warmth Glow */}
        <div
          className="absolute inset-0 bg-radial from-amber-900/5 via-transparent to-transparent pointer-events-none"
          aria-hidden="true"
        />

        {/* ── 1. Section Title (Fades & Blurs Out on Initial Scroll) ── */}
        <motion.div
          style={{
            opacity: titleOpacity,
            filter: titleBlur,
            scale: titleScale,
            y: titleY,
          }}
          className="absolute inset-x-8 top-[18vh] text-center space-y-3 z-10 pointer-events-none"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-[var(--palette-stone-beige)]/60 shadow-xs text-[var(--palette-aged-brass)]">
            <Sparkles size={13} />
            <span className="text-xs font-bold tracking-[0.22em] uppercase">
              {sectionEyebrow}
            </span>
          </div>

          <h2 className="font-serif text-4xl xl:text-5xl font-extrabold uppercase tracking-wide text-[var(--palette-espresso)] leading-tight">
            {sectionTitle}
          </h2>

          <p className="text-base text-[var(--palette-espresso)]/75 font-serif italic max-w-2xl mx-auto">
            {sectionSubtitle}
          </p>
        </motion.div>

        {/* ── 2. The Three Cinematic Cards Stage (Side-by-Side Settle) ── */}
        <div className="relative z-20 w-full max-w-7xl mx-auto flex items-center justify-center gap-6 xl:gap-8 pointer-events-auto">
          {homeMenuPillars.map((pillar, i) => {
            const { x, y, rotate, opacity } = cardTransforms[i];
            const badgeText = getLocalized(pillar.badge, locale);
            const titleText = getLocalized(pillar.title, locale);
            const subtitleText = getLocalized(pillar.subtitle, locale);
            const descText = getLocalized(pillar.description, locale);
            const ctaLabel = getLocalized(pillar.ctaText, locale);
            const statsLabel = pillar.stats ? getLocalized(pillar.stats, locale) : undefined;

            return (
              <motion.div
                key={pillar.id}
                style={{
                  x,
                  y,
                  rotate,
                  opacity,
                }}
                className="w-[340px] xl:w-[380px] h-[520px] xl:h-[560px] shrink-0"
              >
                <Link
                  href={pillar.href}
                  className="block w-full h-full rounded-3xl group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--palette-aged-brass)]"
                  aria-label={`${titleText} — ${subtitleText}`}
                >
                  <article className="relative w-full h-full rounded-3xl overflow-hidden bg-stone-900 shadow-2xl border border-white/15 flex flex-col justify-between p-6 xl:p-7 text-white transition-shadow duration-500 group-hover:shadow-[0_28px_56px_rgba(43,31,26,0.28)]">
                    {/* Background Poster Image */}
                    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                      <img
                        src={pillar.image}
                        alt={titleText}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                        loading="lazy"
                      />
                    </div>

                    {/* Gradient Vignette for Readability */}
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/35 group-hover:from-black/92 transition-colors duration-500 pointer-events-none"
                      aria-hidden="true"
                    />

                    {/* Top Edge Specular Glint */}
                    <div
                      className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      aria-hidden="true"
                    />

                    {/* Top Bar: Chapter Pill & Stats */}
                    <div className="relative z-10 flex items-center justify-between gap-2 pointer-events-none">
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-black/60 backdrop-blur-md text-amber-200 border border-white/20 shadow-xs">
                        <Sparkles size={12} className="text-amber-300" />
                        {badgeText}
                      </span>

                      {statsLabel && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold bg-white/20 backdrop-blur-md text-white border border-white/25 shadow-xs">
                          {statsLabel}
                        </span>
                      )}
                    </div>

                    {/* Bottom Content Area */}
                    <div className="relative z-10 space-y-3.5 pt-6">
                      <div className="space-y-1">
                        <span className="text-xs font-bold tracking-[0.2em] uppercase text-amber-300 block">
                          {subtitleText}
                        </span>
                        <h3 className="font-serif text-2xl xl:text-3xl font-extrabold uppercase tracking-wide text-white drop-shadow-sm group-hover:text-amber-100 transition-colors">
                          {titleText}
                        </h3>
                      </div>

                      <p className="text-xs xl:text-sm text-stone-200/90 font-serif italic line-clamp-3 leading-relaxed">
                        {descText}
                      </p>

                      {/* Interactive Tap Pill Button */}
                      <div className="pt-2">
                        <div className="w-full min-h-[46px] rounded-2xl bg-[var(--palette-italian-red)] group-hover:bg-[var(--palette-italian-red-dark)] text-white flex items-center justify-between px-5 font-semibold text-xs xl:text-sm shadow-lg transition-all duration-300 border border-white/20 group-hover:shadow-[0_8px_20px_rgba(122,46,42,0.45)]">
                          <span>{ctaLabel}</span>
                          <div
                            className={`w-7 h-7 rounded-full bg-white/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform ${
                              isRtl ? 'rotate-180' : ''
                            }`}
                            aria-hidden="true"
                          >
                            <ArrowUpRight size={15} className="text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* ── 3. Subtle Bottom Scroll Progress Cue ── */}
        <motion.div
          style={{ opacity: indicatorOpacity }}
          className="absolute bottom-8 z-20 flex flex-col items-center gap-2 pointer-events-none"
        >
          <div className="w-48 h-1 bg-black/10 rounded-full overflow-hidden backdrop-blur-sm">
            <motion.div
              style={{ width: indicatorProgress }}
              className="h-full bg-[var(--palette-italian-red)] rounded-full"
            />
          </div>
          <span className="text-[11px] font-sans tracking-widest uppercase text-[var(--palette-espresso)]/60 font-semibold">
            {locale === 'ar' ? 'مرر للمتابعة' : locale === 'it' ? 'Scorri per esplorare' : 'Scroll to explore'}
          </span>
        </motion.div>
      </div>
    </div>
  );
}
