'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, ArrowUpRight, CakeSlice, Wine } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';
import {
  mainMenuCategoryConfigs,
  getCategoryData,
} from '@/data/menu/menuCategories';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { HomeMenuScrollCard } from './HomeMenuScrollCard';
import { HomeMenuScrollHeader } from './HomeMenuScrollHeader';

interface HomeMenuScrollSectionProps {
  locale: Locale;
}

export function HomeMenuScrollSection({ locale }: HomeMenuScrollSectionProps) {
  const isRtl = locale === 'ar';
  const arrowClass = isRtl ? 'rotate-180' : '';
  const companionRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = usePrefersReducedMotion();

  const { scrollYProgress } = useScroll({
    target: companionRef,
    offset: ['start 96%', 'end 8%'],
  });

  const horizontalDir = (true !== isRtl ? 1 : -1) * 14;
  const cardOpacity = useTransform(scrollYProgress, [0, 0.34, 0.78, 1], [0.2, 1, 1, 0.82]);
  const cardY = useTransform(scrollYProgress, [0, 0.34, 0.78, 1], [36, 0, 0, -14]);
  const cardX = useTransform(scrollYProgress, [0, 0.34], [horizontalDir, 0]);
  const cardScale = useTransform(scrollYProgress, [0, 0.34, 0.78, 1], [0.95, 1, 1, 0.985]);

  const companionItems = [
    {
      href: '/sweets',
      numeral: 'VI',
      icon: CakeSlice,
      image: '/images/dishes/dolci-tiramisu-cannoli.jpg',
      eyebrow:
        locale === 'ar'
          ? 'بيندي · حلويات وجيلاتو'
          : locale === 'it'
          ? 'Bindi — Maestri del Dessert'
          : 'Bindi — Artisan Desserts',
      title:
        locale === 'ar'
          ? 'قائمة الحلويات الإيطالية'
          : locale === 'it'
          ? 'La Carta dei Dolci'
          : 'Desserts & Sweets Menu',
      subtitle:
        locale === 'ar'
          ? 'مختارات Bindi: سميفريدو، تارتوفو جيلاتو، سوربيه وتورتات إيطالية.'
          : locale === 'it'
          ? 'Semifreddi d’autore, tartufi gelato, coppe speciali e grandi torte Bindi.'
          : 'Signature semifreddi, gelato tartufi, gourmet cups, and artisan cakes.',
      countLabel:
        locale === 'ar' ? '36 صنف' : locale === 'it' ? '36 proposte' : '36 items',
    },
    {
      href: '/wine-drinks',
      numeral: 'VII',
      icon: Wine,
      image: '/images/wine/wine-cellar-tre-fratelli.jpg',
      eyebrow:
        locale === 'ar'
          ? 'القبو الإيطالي والمشروبات'
          : locale === 'it'
          ? 'Cantina, Birre & Caffetteria'
          : 'Wine Cellar, Beers & Coffee',
      title:
        locale === 'ar'
          ? 'قائمة المشروبات والنبيذ'
          : locale === 'it'
          ? 'Vini & Bevande'
          : 'Wines & Beverages Menu',
      subtitle:
        locale === 'ar'
          ? 'تشكيلة النبيذ الإيطالي، البيرة الحرفية، المشروبات المنعشة والإسبريسو.'
          : locale === 'it'
          ? 'Vini rossi, bianchi e bollicine, birre alla spina, bibite e caffetteria.'
          : 'Sparkling, white and red Italian wines, craft beers, soft drinks & espresso.',
      countLabel:
        locale === 'ar' ? '43 صنف' : locale === 'it' ? '43 proposte' : '43 items',
    },
  ];

  return (
    <section
      id="home-menu-scroll"
      className="pt-8 pb-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      <HomeMenuScrollHeader locale={locale} />

      {/* ── Scroll-Animated Category Cards (Asymmetric 2-Column Luxury Grid) ── */}
      <div className="pt-6 sm:pt-14 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-x-12 lg:gap-y-16 lg:pb-12">
        {mainMenuCategoryConfigs.map((config, index) => {
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

        {/* ── DESKTOP (md+): 6th Grid Slot — Stacked Luxury Companion Cards for Sweets & Drinks ── */}
        <div ref={companionRef} className="hidden md:block w-full lg:translate-y-12">
          <motion.div
            style={
              shouldReduceMotion
                ? undefined
                : {
                    opacity: cardOpacity,
                    y: cardY,
                    x: cardX,
                    scale: cardScale,
                  }
            }
            className="h-full flex flex-col justify-between gap-5 will-change-transform motion-reduce:transform-none! motion-reduce:opacity-100!"
          >
            {companionItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative flex-1 min-h-[188px] lg:min-h-[210px] rounded-2xl sm:rounded-3xl overflow-hidden bg-[var(--palette-espresso)] border border-[var(--palette-aged-brass)]/35 shadow-md hover:shadow-[0_24px_48px_rgba(43,31,26,0.2)] transition-all duration-300 flex flex-col justify-between p-5 lg:p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--palette-aged-brass)]"
                >
                  {/* Background Culinary Image with Rich Espresso Vignette */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-55 transition-transform duration-500 ease-out group-hover:scale-[1.03] group-hover:opacity-65"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/35 pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* Top Row: Chapter Numeral Badge & Item Count */}
                  <div className="relative z-10 flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] lg:text-[11px] font-mono font-bold tracking-widest uppercase bg-black/55 backdrop-blur-md text-amber-200/95 border border-white/15">
                      <Icon size={12} className="text-[var(--palette-aged-brass)]" aria-hidden="true" />
                      <span>{item.numeral}</span>
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] lg:text-[11px] font-sans font-semibold tracking-wide bg-black/55 backdrop-blur-md text-white border border-white/15">
                      {item.countLabel}
                    </span>
                  </div>

                  {/* Bottom Row: Title, Subtitle & Circular Arrow */}
                  <div className="relative z-10 flex items-end justify-between gap-4 pt-4">
                    <div className="space-y-1 max-w-[82%] text-start">
                      <span className="text-[10px] lg:text-[11px] font-bold tracking-[0.18em] uppercase text-amber-300/95 block">
                        {item.eyebrow}
                      </span>
                      <h3 className="font-serif text-xl lg:text-2xl font-extrabold tracking-wide uppercase text-white group-hover:text-amber-100 transition-colors leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-xs text-stone-200/85 font-serif italic line-clamp-1 pt-0.5">
                        {item.subtitle}
                      </p>
                    </div>

                    <div
                      className={`w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shrink-0 group-hover:bg-[var(--palette-italian-red)] group-hover:border-[var(--palette-italian-red)] group-hover:scale-110 transition-all duration-300 shadow-md ${
                        isRtl ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    >
                      <ArrowUpRight
                        size={18}
                        className="text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </div>
                  </div>
                </Link>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* ── MOBILE (< md): Simple Stacked Buttons for Sweets & Drinks ── */}
      <div className="md:hidden mt-8 max-w-md mx-auto flex flex-col items-stretch gap-3">
        {companionItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="group min-h-0 min-w-0 flex items-center justify-between gap-3.5 px-5 py-3.5 rounded-2xl bg-white/85 hover:bg-white border border-[var(--palette-aged-brass)]/35 hover:border-[var(--palette-italian-red)]/55 shadow-xs hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--palette-italian-red)]/10 text-[var(--palette-italian-red)] group-hover:bg-[var(--palette-italian-red)] group-hover:text-white transition-colors">
                  <Icon size={18} aria-hidden="true" />
                </span>
                <div className="min-w-0 text-start">
                  <span className="font-serif text-base font-bold text-[var(--palette-espresso)] block leading-snug">
                    {item.title}
                  </span>
                  <span className="text-[11px] text-[var(--palette-espresso)]/65 block truncate">
                    {item.eyebrow}
                  </span>
                </div>
              </div>

              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--palette-warm-ivory)] text-[var(--palette-espresso)] group-hover:bg-[var(--palette-italian-red)] group-hover:text-white transition-colors">
                <ArrowRight size={15} className={arrowClass} aria-hidden="true" />
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
