'use client';

import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, Sparkles, Utensils } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';
import {
  menuCategoryConfigs,
  getCategoryData,
} from '@/data/menu/menuCategories';
import { HomeMenuScrollCard } from './HomeMenuScrollCard';

interface HomeMenuScrollSectionProps {
  locale: Locale;
}

export function HomeMenuScrollSection({ locale }: HomeMenuScrollSectionProps) {
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
    <section
      id="home-menu-scroll"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* ── Section Header: Luxury Italian Typography & Intro ── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-[var(--palette-stone-beige)]/35">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-3 max-w-2xl"
        >
          <div className="flex items-center gap-2">
            <span className="w-6 h-[1.5px] bg-[var(--palette-italian-red)] rounded-full" aria-hidden="true" />
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.22em] uppercase text-[var(--palette-aged-brass)] flex items-center gap-1.5">
              <Sparkles size={13} className="text-[var(--palette-aged-brass)]" />
              {sectionEyebrow}
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-wide text-[var(--palette-espresso)] leading-tight">
            {sectionTitle}
          </h2>

          <p className="text-sm sm:text-base text-[var(--palette-espresso)]/75 font-serif italic leading-relaxed">
            {sectionIntro}
          </p>
        </motion.div>

        {/* Action Link to Full Menu Directory */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
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

      {/* ── Scroll-Animated Category Cards (Asymmetric 2-Column Luxury Grid) ── */}
      <div className="pt-10 sm:pt-14 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-x-12 lg:gap-y-16 lg:pb-12">
        {menuCategoryConfigs.map((config, index) => {
          const categoryData = getCategoryData(config.slug);
          const itemCount =
            categoryData.kind === 'food'
              ? categoryData.dishes.length
              : categoryData.drinks.length;

          return (
            <HomeMenuScrollCard
              key={config.slug}
              config={config}
              locale={locale}
              itemCount={itemCount}
              index={index}
            />
          );
        })}
      </div>
    </section>
  );
}
