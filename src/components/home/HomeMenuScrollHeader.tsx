'use client';

import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Sparkles, Utensils } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';

// Motion values update styles directly, without rendering React on every scroll.
function useRevealStyle(
  progress: ReturnType<typeof useScroll>['scrollYProgress'],
  start: number,
  end: number,
  reduceMotion: boolean,
) {
  const y = useTransform(progress, [start, end], [36, 0]);
  const opacity = useTransform(progress, [start, end], [0.25, 1]);
  return reduceMotion ? { y: 0, opacity: 1 } : { y, opacity };
}

export function HomeMenuScrollHeader({ locale }: { locale: Locale }) {
  const headerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion() !== false;
  const isRtl = locale === 'ar';
  // Measure the stationary header, independently of the animated children.
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ['start end', 'end center'],
  });
  const eyebrowStyle = useRevealStyle(scrollYProgress, 0, 0.4, reduceMotion);
  const titleStyle = useRevealStyle(scrollYProgress, 0.08, 0.52, reduceMotion);
  const introStyle = useRevealStyle(scrollYProgress, 0.16, 0.64, reduceMotion);
  const actionStyle = useRevealStyle(scrollYProgress, 0.24, 0.76, reduceMotion);

  const sectionEyebrow =
    locale === 'ar'
      ? 'فنون الطهي الإيطالي الأصيل'
      : locale === 'it'
      ? 'Tradizione & Maestria Culinaria'
      : 'Authentic Italian Culinary Arts';

  const sectionTitle =
    locale === 'ar'
      ? 'قائمة طعام تري فراتيلي'
      : locale === 'it'
      ? 'Il Nostro Menù'
      : 'Our Culinary Menu';

  const sectionIntro =
    locale === 'ar'
      ? 'من خيرات الأرض الإيطالية والمشاوي العريقة، إلى الباستا الطازجة والبيتزا النابولية وخمور القبو المعتقة: اختر قسماً لاكتشاف أطباقنا الحقيقية.'
      : locale === 'it'
      ? 'Dalla terra alla brace viva, dalla pasta all’uovo trafilata al bronzo ai grandi dolci e ai vini di cantina: seleziona un capitolo per scoprire le nostre creazioni.'
      : 'From rustic cured meats to wood-fired grills, fresh bronze-cut pasta, signature pizzas, and fine cellar labels: choose a chapter to explore.';

  const viewAllText =
    locale === 'ar'
      ? 'عرض القائمة الكاملة'
      : locale === 'it'
      ? 'Vedi Tutto il Menù'
      : 'Explore Complete Menu';

  return (
    <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-[var(--palette-stone-beige)]/35">
      <div className="space-y-3 max-w-2xl">
        <motion.div style={eyebrowStyle} className="flex items-center gap-2">
          <span className="w-6 h-[1.5px] bg-[var(--palette-italian-red)] rounded-full" aria-hidden="true" />
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.22em] uppercase text-[var(--palette-aged-brass)] flex items-center gap-1.5">
            <Sparkles size={13} className="text-[var(--palette-aged-brass)]" />
            {sectionEyebrow}
          </span>
        </motion.div>

        <motion.h2 style={titleStyle} className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-wide text-[var(--palette-espresso)] leading-tight">
          {sectionTitle}
        </motion.h2>

        <motion.p style={introStyle} className="text-sm sm:text-base text-[var(--palette-espresso)]/75 font-serif italic leading-relaxed">
          {sectionIntro}
        </motion.p>
      </div>

      {/* Action Link to Full Menu Directory */}
      <motion.div
        style={actionStyle}
        className="shrink-0"
      >
        <Link
          href="/menu"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--palette-espresso)] text-white hover:bg-[var(--palette-italian-red)] transition-all duration-300 font-semibold text-xs sm:text-sm shadow-md hover:shadow-lg group cursor-pointer"
        >
          <Utensils size={15} aria-hidden="true" />
          <span>{viewAllText}</span>
          <ArrowRight
            size={15}
            className={`transition-transform duration-300 group-hover:translate-x-1 ${
              isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''
            }`}
            aria-hidden="true"
          />
        </Link>
      </motion.div>
    </div>
  );
}
