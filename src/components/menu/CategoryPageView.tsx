'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import type { Locale } from '@/i18n/routing';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import type { Dish, Drink } from '@/data/types';
import { getLocalized } from '@/data/types';
import {
  type MenuCategorySlug,
  getMenuCategoryConfig,
  getAdjacentCategoryConfigs,
  getCategoryData,
} from '@/data/menu/menuCategories';
import { subsectionEditorialGalleries } from '@/data/menu/editorialGalleries';
import { CategoryPageHeader } from './CategoryPageHeader';
import { CategoryFooterNav } from './CategoryFooterNav';
import { DishRowItem } from './DishRowItem';
import { DrinkRowItem } from './DrinkRowItem';
import { MenuEditorialGallery } from './MenuEditorialGallery';
import { MenuLightboxModal } from './MenuLightboxModal';
import { DrinkLightboxModal } from '@/components/wine/DrinkLightboxModal';
import { MenuPdfViewerModal } from './MenuPdfViewerModal';
import { MenuAllergenLegendModal } from './MenuAllergenLegendModal';

interface CategoryPageViewProps {
  slug: MenuCategorySlug;
  locale: Locale;
}

const sectionVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
      staggerChildren: 0.035,
      delayChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export function CategoryPageView({ slug, locale }: CategoryPageViewProps) {
  const shouldReduceMotion = usePrefersReducedMotion();
  const config = getMenuCategoryConfig(slug);
  const { prev, next } = getAdjacentCategoryConfigs(slug);
  const data = getCategoryData(slug);

  const [activeModalDish, setActiveModalDish] = useState<Dish | null>(null);
  const [activeModalDrink, setActiveModalDrink] = useState<Drink | null>(null);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  const [isAllergenModalOpen, setIsAllergenModalOpen] = useState(false);
  const [expandedItemId, setExpandedItemId] = useState<string | null>(null);

  const handleToggleItem = (id: string) => {
    setExpandedItemId((prev) => (prev === id ? null : id));
  };

  if (!config) return null;

  const totalCount = data.kind === 'food' ? data.dishes.length : data.drinks.length;

  return (
    <div className="space-y-6 sm:space-y-8 max-w-4xl mx-auto">
      {/* ── 1. Page Header & Wayfinding ── */}
      <CategoryPageHeader
        config={config}
        locale={locale}
        itemCount={totalCount}
        onOpenPdfModal={() => setIsPdfModalOpen(true)}
        onOpenAllergenModal={() => setIsAllergenModalOpen(true)}
      />

      {/* ── 2. Editorial Menu List Presentation (Scroll-Animated) ── */}
      <div className="space-y-8 sm:space-y-10">
        {data.kind === 'food' ? (
          data.subSections.map((sub) => {
            const galleryPhotos = subsectionEditorialGalleries[sub.id];

            return (
              <motion.section
                key={sub.id}
                initial={shouldReduceMotion ? 'visible' : 'hidden'}
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={sectionVariants}
                className="space-y-1"
              >
                {/* Section Heading: Elegant Lightweight Italian Typography */}
                <div className="pt-4 sm:pt-6 pb-2">
                  <h2 className="font-serif text-base sm:text-lg font-bold tracking-[0.14em] uppercase text-[var(--palette-italian-red)]">
                    {getLocalized(sub.title, locale)}
                  </h2>
                  {sub.subtitle && (
                    <p className="text-[12px] sm:text-[13px] text-[var(--palette-espresso)]/65 font-serif italic pt-0.5">
                      {getLocalized(sub.subtitle, locale)}
                    </p>
                  )}
                </div>

                {/* Minimal Dish Rows: Name .............. Price */}
                <div className="divide-y divide-black/[0.08]">
                  {sub.dishes.map((dish) => (
                    <motion.div key={dish.id} variants={itemVariants}>
                      <DishRowItem
                        dish={dish}
                        locale={locale}
                        isExpanded={expandedItemId === dish.id}
                        onToggle={() => handleToggleItem(dish.id)}
                        onOpenLightbox={setActiveModalDish}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Editorial 3-Photo Gallery (Where suitable) */}
                {galleryPhotos && (
                  <MenuEditorialGallery photos={galleryPhotos} locale={locale} />
                )}
              </motion.section>
            );
          })
        ) : (
          data.subSections.map((sub) => {
            const galleryPhotos = subsectionEditorialGalleries[sub.id];

            return (
              <motion.section
                key={sub.id}
                initial={shouldReduceMotion ? 'visible' : 'hidden'}
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={sectionVariants}
                className="space-y-1"
              >
                {/* Section Heading */}
                <div className="pt-4 sm:pt-6 pb-2">
                  <h2 className="font-serif text-base sm:text-lg font-bold tracking-[0.14em] uppercase text-[var(--palette-italian-red)]">
                    {getLocalized(sub.title, locale)}
                  </h2>
                  {sub.subtitle && (
                    <p className="text-[12px] sm:text-[13px] text-[var(--palette-espresso)]/65 font-serif italic pt-0.5">
                      {getLocalized(sub.subtitle, locale)}
                    </p>
                  )}
                </div>

                {/* Minimal Drink Rows */}
                <div className="divide-y divide-black/[0.08]">
                  {sub.drinks.map((drink) => (
                    <motion.div key={drink.id} variants={itemVariants}>
                      <DrinkRowItem
                        drink={drink}
                        locale={locale}
                        isExpanded={expandedItemId === drink.id}
                        onToggle={() => handleToggleItem(drink.id)}
                        onOpenLightbox={setActiveModalDrink}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Editorial Photo Gallery if available */}
                {galleryPhotos && (
                  <MenuEditorialGallery photos={galleryPhotos} locale={locale} />
                )}
              </motion.section>
            );
          })
        )}
      </div>

      {/* ── Bindi Maestri del Dessert Quality Guarantee & Notice (Only on Dolci) ── */}
      {slug === 'dolci' && (
        <div className="p-4 sm:p-5 rounded-xl bg-black/[0.02] border border-black/[0.06] text-center space-y-1.5 max-w-2xl mx-auto">
          <p className="font-serif text-[13px] sm:text-[14px] font-bold text-[var(--palette-espresso)]">
            Per voi selezioniamo i dessert Bindi — Maestri del Dessert
          </p>
          <p className="text-[11px] sm:text-[12px] text-stone-500 font-serif italic leading-relaxed">
            {locale === 'it'
              ? 'Le informazioni relative agli ingredienti, stato fisico e allergeni sono disponibili rivolgendosi al personale di servizio. Le immagini hanno il solo scopo di illustrare il prodotto.'
              : locale === 'ar'
              ? 'تتوفر المعلومات المتعلقة بالمكونات والحالة الفيزيائية ومسببات الحساسية لدى طاقم الخدمة. الصور لغرض التوضيح فقط.'
              : 'Information regarding ingredients, physical state, and allergens is available from our serving staff. Images are for illustrative purposes only.'}
          </p>
        </div>
      )}

      {/* ── 3. Previous / Next / Back Navigation ── */}
      <CategoryFooterNav prev={prev} next={next} locale={locale} />

      {/* ── 4. Modals ── */}
      <MenuLightboxModal
        dish={activeModalDish}
        locale={locale}
        onClose={() => setActiveModalDish(null)}
      />

      <DrinkLightboxModal
        drink={activeModalDrink}
        locale={locale}
        onClose={() => setActiveModalDrink(null)}
      />

      <MenuPdfViewerModal
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
        locale={locale}
      />

      <MenuAllergenLegendModal
        isOpen={isAllergenModalOpen}
        onClose={() => setIsAllergenModalOpen(false)}
        locale={locale}
      />
    </div>
  );
}
