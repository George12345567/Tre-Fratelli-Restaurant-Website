'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';
import { getLocalized } from '@/data/types';
import { recurringEvents } from '@/data/eventsEditorial';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

interface HomeEventsShowcaseSectionProps {
  locale: Locale;
}

const eventImages: Record<string, string> = {
  saturday: '/images/events/ai-karaoke-saturday.jpg',
  holidays: '/images/events/ai-italian-holidays.jpg',
  private: '/images/events/ai-private-celebrations.jpg',
};

interface FlipEventItemProps {
  id: string;
  index: number;
  locale: Locale;
  title: string;
  copy: string;
  schedule: string;
  imageSrc: string;
}

function FlipEventItem({
  index,
  locale,
  title,
  copy,
  schedule,
  imageSrc,
}: FlipEventItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = usePrefersReducedMotion();
  const isRtl = locale === 'ar';

  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ['start 95%', 'end 10%'],
  });

  // Smooth scroll-linked page-flip ("تجليب") animation
  const rotateX = useTransform(scrollYProgress, [0, 0.36, 0.75, 1], [28, 0, 0, -18]);
  const scale = useTransform(scrollYProgress, [0, 0.36, 0.75, 1], [0.9, 1, 1, 0.94]);
  const y = useTransform(scrollYProgress, [0, 0.36, 0.75, 1], [48, 0, 0, -28]);
  const opacity = useTransform(scrollYProgress, [0, 0.28, 0.78, 1], [0.15, 1, 1, 0.35]);

  return (
    <div
      ref={itemRef}
      style={{ perspective: '1200px' }}
      className="w-full"
    >
      <motion.div
        style={
          shouldReduceMotion
            ? undefined
            : {
                rotateX,
                scale,
                y,
                opacity,
                transformOrigin: 'center bottom',
              }
        }
        className="w-full will-change-transform motion-reduce:transform-none! motion-reduce:opacity-100!"
      >
        <Link
          href="/news-promo"
          className="group block focus-visible:outline-none"
        >
          {/* Pure unboxed image with minimal overlaid text */}
          <div className="relative aspect-[16/10] sm:aspect-[21/9] w-full rounded-2xl sm:rounded-3xl overflow-hidden">
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              loading="lazy"
            />

            {/* Soft cinematic bottom gradient for text legibility */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none"
            />

            {/* Simple overlaid typography inside image */}
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 lg:p-10 flex items-end justify-between gap-4 text-white">
              <div className="max-w-2xl space-y-1.5 text-start">
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-amber-300/95 block">
                  0{index + 1} · {schedule}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-white">
                  {title}
                </h3>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed line-clamp-2 max-w-xl">
                  {copy}
                </p>
              </div>

              <span
                aria-hidden="true"
                className={`inline-flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white group-hover:bg-[var(--palette-italian-red)] group-hover:border-[var(--palette-italian-red)] transition-all duration-300 ${
                  isRtl ? 'rotate-180' : ''
                }`}
              >
                <ArrowUpRight size={18} />
              </span>
            </div>
          </div>
        </Link>
      </motion.div>
    </div>
  );
}

export function HomeEventsShowcaseSection({ locale }: HomeEventsShowcaseSectionProps) {
  return (
    <section
      aria-label={
        locale === 'ar'
          ? 'فعاليات وسهرات المطعم'
          : locale === 'it'
          ? 'Serate ed Eventi'
          : 'Restaurant Evenings & Events'
      }
      className="py-6 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
    >
      <div className="flex flex-col gap-6 sm:gap-10">
        {recurringEvents.map((event, index) => (
          <FlipEventItem
            key={event.id}
            id={event.id}
            index={index}
            locale={locale}
            title={getLocalized(event.title, locale)}
            copy={getLocalized(event.copy, locale)}
            schedule={getLocalized(event.schedule, locale)}
            imageSrc={eventImages[event.id] ?? '/images/events/ai-karaoke-saturday.jpg'}
          />
        ))}
      </div>
    </section>
  );
}
