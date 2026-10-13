'use client';

import { useState, useRef } from 'react';
import { ArrowRight, Wine, ChevronLeft, ChevronRight } from 'lucide-react';
import { signatureDishes } from '@/data/content';
import { getLocalized } from '@/data/types';
import { Link } from '@/i18n/navigation';

interface Props {
  locale: string;
  isRtl: boolean;
  translations: {
    signatureSubtitle: string;
    signatureDishes: string;
    viewMenu: string;
    reserveTable: string;
    askDish: string;
  };
}

export function SignatureDishesSection({
  locale,
  isRtl,
  translations,
}: Props) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const scrollLeft = Math.abs(container.scrollLeft);
    const itemWidth = container.offsetWidth * 0.84;
    if (itemWidth > 0) {
      const index = Math.round(scrollLeft / itemWidth);
      setActiveIndex(Math.min(Math.max(index, 0), signatureDishes.length - 1));
    }
  };

  const scrollToIndex = (index: number) => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const itemWidth = container.offsetWidth * 0.84;
    const targetScroll = isRtl ? -index * itemWidth : index * itemWidth;
    container.scrollTo({ left: targetScroll, behavior: 'smooth' });
    setActiveIndex(index);
  };

  const handlePrev = () => {
    const nextIdx = Math.max(0, activeIndex - 1);
    scrollToIndex(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = Math.min(signatureDishes.length - 1, activeIndex + 1);
    scrollToIndex(nextIdx);
  };

  return (
    <section className="relative pt-10 sm:pt-14 pb-6 sm:pb-8 overflow-hidden bg-gradient-to-b from-transparent via-[var(--palette-stone-beige-light)]/20 to-transparent">
      {/* ── Ambient Radial Warmth ── */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(176,138,87,0.12),transparent_70%)] pointer-events-none blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-3">
          {/* Refined Eyebrow */}
          <div className="flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-[var(--palette-aged-brass)]/40" aria-hidden="true" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[var(--palette-italian-red)]">
              {locale === 'it'
                ? 'Tre Fratelli · Specialità'
                : locale === 'ar'
                ? 'تري فراتيلي · مختارات المطبخ'
                : "Tre Fratelli · Chef's Selection"}
            </span>
            <span className="w-8 h-px bg-[var(--palette-aged-brass)]/40" aria-hidden="true" />
          </div>

          {/* Main Serif Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[var(--palette-espresso)] leading-[1.15]">
            {translations.signatureDishes}
          </h2>

          {/* Styled Subtitle Sentence: Poetic Italian Editorial Motto (Not a Pill Badge) */}
          <div className="py-0.5">
            <p className="font-serif italic text-base sm:text-lg lg:text-xl text-[var(--palette-espresso)]/85 max-w-2xl mx-auto leading-relaxed">
              <span className="text-[var(--palette-aged-brass)] font-normal text-xl select-none mr-1 rtl:ml-1 rtl:mr-0">“</span>
              {translations.signatureSubtitle}
              <span className="text-[var(--palette-aged-brass)] font-normal text-xl select-none ml-1 rtl:mr-1 rtl:ml-0">”</span>
            </p>
          </div>
        </div>

        {/* ── Cards Showcase: Mobile Horizontal Carousel / Desktop Grid ── */}
        <div className="relative">
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 px-4 sm:px-0 -mx-4 sm:mx-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 py-2 touch-pan-x"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {signatureDishes.map((dish) => (
              <article
                key={dish.id}
                className="group relative w-[84vw] max-w-[330px] shrink-0 snap-center sm:w-auto sm:max-w-none sm:shrink sm:snap-align-none h-[460px] sm:h-[480px] lg:h-[500px] rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between p-5 border border-black/10 select-none"
              >
                {/* ── 1. The Hero Image (Fills the entire card edge-to-edge) ── */}
                <img
                  src={dish.image}
                  alt={getLocalized(dish.alt, locale)}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* ── 2. Atmospheric Dual Vignette ── */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/30 pointer-events-none transition-opacity duration-300"
                  aria-hidden="true"
                />

                {/* ── 3. Top Corner Badges Inside Photo ── */}
                <div className="relative z-10 flex items-center justify-between gap-2">
                  {dish.categoryLabel && (
                    <span className="bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/25 text-white text-[11px] font-semibold px-3 py-1 rounded-full shadow-xs tracking-wide">
                      {getLocalized(dish.categoryLabel, locale)}
                    </span>
                  )}
                  {dish.price && (
                    <span className="bg-black/45 backdrop-blur-md border border-white/25 text-[var(--palette-warm-ivory)] px-3 py-1 rounded-full text-xs font-serif font-bold tracking-wide shadow-xs">
                      {dish.price}
                    </span>
                  )}
                </div>

                {/* ── 4. Bottom Content Overlaid Inside Photo (Subtle & Non-Intrusive) ── */}
                <div className="relative z-10 space-y-2">
                  {dish.badge && (
                    <div>
                      <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-[var(--palette-italian-red)]/90 backdrop-blur-md text-white shadow-xs">
                        {getLocalized(dish.badge, locale)}
                      </span>
                    </div>
                  )}

                  {/* Dish Title */}
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-[var(--palette-warm-ivory)] transition-colors leading-tight drop-shadow-sm">
                    {getLocalized(dish.title, locale)}
                  </h3>

                  {/* Concise Appetite-Whetting Hook */}
                  <p className="text-xs sm:text-[13px] text-white/80 leading-relaxed line-clamp-2 font-light">
                    {getLocalized(dish.copy, locale)}
                  </p>

                  {/* Streamlined Bottom Row: Wine Pairing + Link */}
                  <div className="pt-2.5 border-t border-white/15 flex items-center justify-between gap-2 text-[11px]">
                    {dish.winePairing && (
                      <div className="flex items-center gap-1.5 text-[var(--palette-warm-ivory)]/90 min-w-0 max-w-[65%]">
                        <Wine size={12} className="shrink-0 text-[var(--palette-aged-brass-light)]" aria-hidden="true" />
                        <span className="truncate font-light">
                          {getLocalized(dish.winePairing, locale)}
                        </span>
                      </div>
                    )}

                    <Link
                      href="/menu"
                      className="inline-flex items-center gap-1 font-semibold text-white hover:text-[var(--palette-warm-ivory)] transition-colors shrink-0 group/link"
                    >
                      <span>{translations.askDish}</span>
                      <ArrowRight
                        size={12}
                        className={`transition-transform duration-200 group-hover/link:translate-x-0.5 ${
                          isRtl ? 'rotate-180 group-hover/link:-translate-x-0.5' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* ── Mobile Carousel Controls & Indicators ── */}
          <div className="flex sm:hidden items-center justify-between px-2 pt-3">
            <button
              type="button"
              onClick={isRtl ? handleNext : handlePrev}
              disabled={activeIndex === 0}
              className="p-1.5 rounded-full bg-black/5 disabled:opacity-30 text-[var(--palette-espresso)]"
              aria-label="Previous dish"
            >
              <ChevronLeft size={16} className={isRtl ? 'rotate-180' : ''} />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-1.5">
              {signatureDishes.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => scrollToIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeIndex === i
                      ? 'w-6 bg-[var(--palette-italian-red)]'
                      : 'w-1.5 bg-black/20'
                  }`}
                  aria-label={`Dish ${i + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={isRtl ? handlePrev : handleNext}
              disabled={activeIndex === signatureDishes.length - 1}
              className="p-1.5 rounded-full bg-black/5 disabled:opacity-30 text-[var(--palette-espresso)]"
              aria-label="Next dish"
            >
              <ChevronRight size={16} className={isRtl ? 'rotate-180' : ''} />
            </button>
          </div>
        </div>

        {/* ── Section Footer CTA ── */}
        <div className="text-center mt-6 sm:mt-8">
          <Link
            href="/menu"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full liquid-glass-pill hover:bg-white text-[var(--palette-espresso)] font-semibold text-xs sm:text-sm shadow-xs hover:shadow-md transition-all duration-300"
          >
            <span>{translations.viewMenu}</span>
            <ArrowRight
              size={14}
              className={`transition-transform duration-300 group-hover:translate-x-1 ${
                isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''
              }`}
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

