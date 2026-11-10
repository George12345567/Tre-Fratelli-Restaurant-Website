'use client';

import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import type { Locale } from '@/i18n/routing';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

export function HomeMenuScrollHeader({ locale }: { locale: Locale }) {
  const reduceMotion = usePrefersReducedMotion();

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

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0.85, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-6 pb-6 sm:pb-16 border-b border-[var(--palette-stone-beige)]/35 motion-reduce:transform-none! motion-reduce:opacity-100!"
    >
      <div className="space-y-2 sm:space-y-3 max-w-2xl">
        <div className="flex items-center gap-2">
          <span className="w-6 h-[1.5px] bg-[var(--palette-italian-red)] rounded-full" aria-hidden="true" />
          <span className="text-[9px] sm:text-xs font-bold tracking-[0.14em] sm:tracking-[0.22em] uppercase text-[var(--palette-aged-brass)] flex items-center gap-1.5">
            <Sparkles size={13} className="text-[var(--palette-aged-brass)]" />
            {sectionEyebrow}
          </span>
        </div>

        <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-wide text-[var(--palette-espresso)] leading-tight">
          {sectionTitle}
        </h2>

        <p className="text-xs sm:text-base text-[var(--palette-espresso)]/75 font-serif italic leading-snug sm:leading-relaxed">
          {sectionIntro}
        </p>
      </div>

    </motion.div>
  );
}
