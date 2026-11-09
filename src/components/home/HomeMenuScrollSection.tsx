'use client';

import type { Locale } from '@/i18n/routing';
import {
  menuCategoryConfigs,
  getCategoryData,
} from '@/data/menu/menuCategories';
import { HomeMenuScrollCard } from './HomeMenuScrollCard';
import { HomeMenuScrollHeader } from './HomeMenuScrollHeader';

interface HomeMenuScrollSectionProps {
  locale: Locale;
}

export function HomeMenuScrollSection({ locale }: HomeMenuScrollSectionProps) {
  return (
    <section
      id="home-menu-scroll"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      <HomeMenuScrollHeader locale={locale} />

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
