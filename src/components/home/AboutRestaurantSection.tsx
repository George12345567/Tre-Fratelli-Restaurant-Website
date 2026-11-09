'use client';

import { useRef, type ReactNode } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, CalendarDays } from 'lucide-react';
import { kitchenStory, kitchenStorySteps } from '@/data/homeKitchenStory';
import { getLocalized } from '@/data/types';
import { Link } from '@/i18n/navigation';

interface Props {
  locale: string;
  isRtl: boolean;
  translations: {
    reserveTable: string;
    exploreRestaurant: string;
  };
}

// Every passage follows its own position in the viewport; no scroll state or timers.
function StoryPassage({ children, isRtl, className = '' }: {
  children: ReactNode;
  isRtl: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion() !== false;
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.95', 'start 0.55'] });
  const y = useTransform(scrollYProgress, [0, 1], [24, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const scaleX = useTransform(scrollYProgress, [0, 1], [0.12, 1]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={reduceMotion ? undefined : { y, opacity }}>
        {children}
      </motion.div>
      <motion.div
        aria-hidden="true"
        className="mt-5 h-px bg-[var(--palette-aged-brass)]/25"
        style={{ scaleX: reduceMotion ? 1 : scaleX, transformOrigin: isRtl ? 'right' : 'left' }}
      />
    </div>
  );
}

export function AboutRestaurantSection({
  locale,
  isRtl,
  translations,
}: Props) {
  return (
    <section aria-labelledby="kitchen-story-title" className="relative py-10 sm:py-16 lg:py-24 overflow-clip bg-gradient-to-b from-transparent via-[var(--palette-stone-beige-light)]/20 to-transparent">
      {/* ── Soft Ambient Backlight ── */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[360px] bg-[radial-gradient(ellipse_at_center,rgba(176,138,87,0.08),transparent_70%)] pointer-events-none blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* ── 1. The Official Logo Emblem (Compact & Unclipped) ── */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 flex flex-col items-center justify-center shrink-0">
            <StoryPassage isRtl={isRtl} className="relative max-w-[140px] sm:max-w-[200px] lg:max-w-[270px] w-full">
              {/* Keep the original brand image at its natural aspect ratio. */}
              <div className="relative">
                <img
                  src="/images/brand/tre-fratelli-official-logo.png"
                  alt="Tre Fratelli - Ristorante Italiano"
                  className="w-full h-auto object-contain select-none p-2"
                />
              </div>

              {/* Italian Tricolore Brand Seal */}
              <div className="mt-2.5 flex items-center justify-center gap-2">
                <span className="hidden sm:block w-5 h-px bg-[var(--palette-aged-brass)]/40" aria-hidden="true" />
                <span className="inline-flex items-center gap-1 text-[8px] sm:text-[10px] font-bold sm:tracking-widest uppercase text-[var(--palette-espresso)]/75 whitespace-nowrap">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#009246]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d8d8d8]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CE2B37]" />
                  <span className="ms-1">Tre Fratelli · Milano</span>
                </span>
                <span className="hidden sm:block w-5 h-px bg-[var(--palette-aged-brass)]/40" aria-hidden="true" />
              </div>
            </StoryPassage>
          </div>

          {/* ── 2. The Culinary Process & Meat Provenance (Pure Text, No Cards) ── */}
          <div className="lg:col-span-8 text-start">
            <StoryPassage isRtl={isRtl}>
              <p className="text-[10px] sm:text-xs tracking-[0.16em] uppercase font-semibold text-[var(--palette-italian-red)]">
                {getLocalized(kitchenStory.eyebrow, locale)}
              </p>
              <h2 id="kitchen-story-title" className="mt-3 font-serif text-2xl sm:text-4xl lg:text-[42px] font-medium tracking-tight text-[var(--palette-espresso)] leading-tight text-balance">
                {getLocalized(kitchenStory.title, locale)}
              </h2>
              <p className="mt-4 max-w-xl text-sm sm:text-base text-[var(--palette-espresso)]/75 leading-relaxed">
                {getLocalized(kitchenStory.intro, locale)}
              </p>
            </StoryPassage>

            <ol className="mt-6 sm:mt-8 space-y-6 sm:space-y-8">
              {kitchenStorySteps.map((step, index) => (
                <li key={step.id}>
                  <StoryPassage isRtl={isRtl}>
                    <div className="flex items-start gap-4 sm:gap-6">
                      <span aria-hidden="true" className="font-serif text-3xl sm:text-4xl leading-none text-[var(--palette-aged-brass)]/65 tabular-nums">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h3 className="font-serif text-lg sm:text-xl font-medium text-[var(--palette-espresso)]">
                          {getLocalized(step.title, locale)}
                        </h3>
                        <p className="mt-2 max-w-xl text-xs sm:text-sm leading-relaxed text-[var(--palette-espresso)]/75">
                          {getLocalized(step.description, locale)}
                        </p>
                      </div>
                    </div>
                  </StoryPassage>
                </li>
              ))}
            </ol>

            <StoryPassage isRtl={isRtl} className="mt-7">
              <p className="font-serif italic text-sm text-[var(--palette-aged-brass)]">
                {getLocalized(kitchenStory.signature, locale)}
              </p>

            {/* ── Compact Action Buttons ── */}
            <div className="pt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
              <Link
                href="/location"
                className="inline-flex min-h-11 items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--palette-italian-red)] hover:bg-[var(--palette-italian-red-dark)] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-colors"
              >
                <CalendarDays size={14} aria-hidden="true" />
                <span>{translations.reserveTable}</span>
                <ArrowRight
                  size={13}
                  className={`transition-transform duration-200 ${isRtl ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </Link>

              <Link
                href="/restaurant"
                className="inline-flex min-h-11 items-center gap-2 py-2.5 text-[var(--palette-espresso)] text-xs sm:text-sm font-semibold underline underline-offset-8 decoration-[var(--palette-aged-brass)]/40 hover:decoration-[var(--palette-italian-red)] transition-colors"
              >
                <span>{translations.exploreRestaurant}</span>
                <ArrowRight
                  size={13}
                  className={`transition-transform duration-200 ${isRtl ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </Link>
            </div>
            </StoryPassage>
          </div>
        </div>
      </div>
    </section>
  );
}
