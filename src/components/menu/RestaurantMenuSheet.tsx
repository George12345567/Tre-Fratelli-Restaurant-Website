'use client';

import { useState, useMemo } from 'react';
import {
  Cake,
  Fish,
  Flame,
  Leaf,
  Sparkles,
  UtensilsCrossed,
} from 'lucide-react';
import { categoryLabels, menuDishes } from '@/data/menu';
import type { Dish, DishCategory } from '@/data/types';
import { getLocalized } from '@/data/types';
import type { Locale } from '@/i18n/routing';
import { DishCard } from './DishCard';
import { MenuAllergenLegendModal } from './MenuAllergenLegendModal';
import { groupDishesBySubSections } from './menuGrouping';
import { MenuLightboxModal } from './MenuLightboxModal';
import { MenuPdfActionBanner } from './MenuPdfActionBanner';
import { MenuPdfViewerModal } from './MenuPdfViewerModal';
import { MenuStickyNav, type DietaryFilter } from './MenuStickyNav';
import { MenuSubSectionHeader } from './MenuSubSectionHeader';

interface RestaurantMenuSheetProps {
  locale: Locale;
}

const orderedCategories: DishCategory[] = [
  'Pizza & Calzoni',
  'Antipasti',
  'Raw Seafood',
  'Primi Piatti',
  'Secondi Piatti',
  'Contorni & Salads',
  'Desserts',
];

function getCategoryIcon(cat: DishCategory) {
  switch (cat) {
    case 'Pizza & Calzoni':
      return <Flame size={14} className="text-amber-600" aria-hidden="true" />;
    case 'Antipasti':
      return <UtensilsCrossed size={14} className="text-stone-600" aria-hidden="true" />;
    case 'Raw Seafood':
      return <Fish size={14} className="text-sky-600" aria-hidden="true" />;
    case 'Primi Piatti':
      return <UtensilsCrossed size={14} className="text-[var(--palette-italian-red)]" aria-hidden="true" />;
    case 'Secondi Piatti':
      return <Sparkles size={14} className="text-orange-600" aria-hidden="true" />;
    case 'Contorni & Salads':
      return <Leaf size={14} className="text-emerald-600" aria-hidden="true" />;
    case 'Desserts':
      return <Cake size={14} className="text-rose-500" aria-hidden="true" />;
    default:
      return <UtensilsCrossed size={14} className="text-stone-600" aria-hidden="true" />;
  }
}

export function RestaurantMenuSheet({ locale }: RestaurantMenuSheetProps) {
  const [activeCategory, setActiveCategory] = useState<DishCategory | 'all'>('all');
  const [activeDietary, setActiveDietary] = useState<DietaryFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalDish, setActiveModalDish] = useState<Dish | null>(null);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  const [isAllergenModalOpen, setIsAllergenModalOpen] = useState(false);

  // 1. Filter dishes globally based on search and dietary tags
  const filteredDishes = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return menuDishes.filter((dish) => {
      // Dietary filter check
      if (activeDietary !== 'all') {
        if (activeDietary === 'seafood' && !dish.tags.includes('seafood') && !dish.tags.includes('raw')) {
          return false;
        }
        if (activeDietary === 'meat' && !dish.tags.includes('meat')) {
          return false;
        }
        if (activeDietary === 'vegetarian' && !dish.tags.includes('vegetarian')) {
          return false;
        }
        if (activeDietary === 'signature' && !dish.tags.includes('signature')) {
          return false;
        }
      }

      // Search query check
      if (query) {
        const matchesName =
          dish.name.it.toLowerCase().includes(query) ||
          dish.name.en.toLowerCase().includes(query) ||
          dish.name.ar.toLowerCase().includes(query);
        const matchesDesc =
          dish.description.it.toLowerCase().includes(query) ||
          dish.description.en.toLowerCase().includes(query) ||
          dish.description.ar.toLowerCase().includes(query);
        const matchesAllergens = dish.allergens.some((alg) =>
          alg.toLowerCase().includes(query)
        );

        if (!matchesName && !matchesDesc && !matchesAllergens) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, activeDietary]);

  // 2. Prepare category tabs with live counts
  const categoryTabs = useMemo(() => {
    const allTab = {
      key: 'all' as const,
      label: {
        it: 'Tutta la Carta',
        en: 'All Menu',
        ar: 'كامل القائمة',
      },
      count: filteredDishes.length,
      icon: <UtensilsCrossed size={13} aria-hidden="true" />,
    };

    const tabs = orderedCategories.map((cat) => {
      const count = filteredDishes.filter((d) => d.category === cat).length;
      return {
        key: cat,
        label: {
          it:
            cat === 'Pizza & Calzoni'
              ? 'Pizze a Legna'
              : cat === 'Primi Piatti'
              ? 'Primi Piatti'
              : cat === 'Secondi Piatti'
              ? 'Secondi & Barche'
              : cat === 'Contorni & Salads'
              ? 'Insalate & Contorni'
              : categoryLabels[cat].it,
          en:
            cat === 'Pizza & Calzoni'
              ? 'Wood-Fired Pizza'
              : cat === 'Primi Piatti'
              ? 'Pasta & Primi'
              : cat === 'Secondi Piatti'
              ? 'Mains & Ships'
              : cat === 'Contorni & Salads'
              ? 'Salads & Sides'
              : categoryLabels[cat].en,
          ar:
            cat === 'Pizza & Calzoni'
              ? 'بيتزا الحطب'
              : cat === 'Primi Piatti'
              ? 'الباستا والريزوتو'
              : cat === 'Secondi Piatti'
              ? 'الرئيسية والسفن'
              : cat === 'Contorni & Salads'
              ? 'السلطات والمقبلات'
              : categoryLabels[cat].ar,
        },
        count,
        icon: getCategoryIcon(cat),
      };
    });

    return [allTab, ...tabs];
  }, [filteredDishes]);

  // 3. Filter displayed categories based on active category
  const categoriesToRender = useMemo(() => {
    return orderedCategories.filter((cat) => {
      if (activeCategory !== 'all' && activeCategory !== cat) return false;
      const count = filteredDishes.filter((d) => d.category === cat).length;
      return count > 0;
    });
  }, [activeCategory, filteredDishes]);

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* ── 1. Official PDF Menu Action Banner (Download & Interactive Viewer) ── */}
      <MenuPdfActionBanner
        locale={locale}
        onOpenViewer={() => setIsPdfModalOpen(true)}
      />

      {/* ── 2. Sticky Smart Wayfinding & Filter Navigation Bar ── */}
      <MenuStickyNav
        locale={locale}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        activeDietary={activeDietary}
        onSelectDietary={setActiveDietary}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onOpenAllergens={() => setIsAllergenModalOpen(true)}
        matchCount={filteredDishes.length}
        categoryTabs={categoryTabs}
      />

      {/* ── 3. Main Menu Sheet Canvas ── */}
      <div className="bg-[var(--palette-warm-ivory)]/40 border border-[var(--palette-stone-beige)]/50 rounded-2xl sm:rounded-3xl p-4 sm:p-8 space-y-12">
        {categoriesToRender.length > 0 ? (
          categoriesToRender.map((cat) => {
            const dishesInCat = filteredDishes.filter((d) => d.category === cat);
            const subSections = groupDishesBySubSections(cat, dishesInCat);
            const isPizza = cat === 'Pizza & Calzoni';

            return (
              <section
                key={cat}
                id={isPizza ? 'pizzeria' : undefined}
                className="space-y-6 pt-2 scroll-mt-28"
              >
                {/* Major Category Title Banner */}
                <div className="pb-3 border-b-2 border-[var(--palette-aged-brass)]/40 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-white shadow-2xs border border-[var(--palette-aged-brass)]/30 flex items-center justify-center">
                      {getCategoryIcon(cat)}
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-extrabold text-[var(--palette-espresso)] tracking-tight">
                      {getLocalized(categoryLabels[cat], locale)}
                    </h3>
                  </div>

                  <span className="text-xs font-serif italic text-[var(--palette-espresso)]/70">
                    {dishesInCat.length} {locale === 'it' ? 'proposte disponibili' : locale === 'ar' ? 'أطباق متوفرة' : 'dishes available'}
                  </span>
                </div>

                {/* Sub-sections within Category */}
                <div className="space-y-8">
                  {subSections.map((sub) => (
                    <div key={sub.id} className="space-y-4">
                      {/* Sub-Section Header */}
                      <MenuSubSectionHeader
                        title={sub.title}
                        subtitle={sub.subtitle}
                        badge={sub.badge}
                        count={sub.dishes.length}
                        locale={locale}
                      />

                      {/* 2-Column Responsive Dish Grid */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5 sm:gap-4">
                        {sub.dishes.map((dish) => (
                          <DishCard
                            key={dish.id}
                            dish={dish}
                            locale={locale}
                            onOpenLightbox={setActiveModalDish}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })
        ) : (
          /* Empty Search or Filter State */
          <div className="text-center py-16 space-y-4">
            <div className="w-12 h-12 rounded-full bg-stone-100 mx-auto flex items-center justify-center text-stone-400">
              <UtensilsCrossed size={20} />
            </div>
            <div className="space-y-1">
              <p className="font-serif text-base font-bold text-[var(--palette-espresso)]">
                {locale === 'ar'
                  ? 'لم يتم العثور على أطباق تطابق بحثك.'
                  : locale === 'it'
                  ? 'Nessun piatto trovato per questa ricerca.'
                  : 'No dishes found matching your search.'}
              </p>
              <p className="text-xs text-[var(--palette-espresso)]/65">
                {locale === 'ar'
                  ? 'جرب البحث باسم مكون آخر أو تغيير فلتر التصنيف.'
                  : locale === 'it'
                  ? 'Prova a cercare un altro ingrediente o a rimuovere i filtri attivi.'
                  : 'Try searching another ingredient or clearing active dietary filters.'}
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setActiveDietary('all');
                setActiveCategory('all');
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[var(--palette-italian-red)] text-white text-xs font-bold hover:bg-[var(--palette-italian-red-dark)] transition-colors shadow-2xs cursor-pointer"
            >
              {locale === 'ar' ? 'إعادة ضبط كل الفلاتر' : locale === 'it' ? 'Mostra tutta la carta' : 'Reset all filters'}
            </button>
          </div>
        )}
      </div>

      {/* ── 4. Modals ── */}
      {/* Lightbox Image Modal */}
      <MenuLightboxModal
        dish={activeModalDish}
        locale={locale}
        onClose={() => setActiveModalDish(null)}
      />

      {/* Interactive Official PDF Viewer Modal */}
      <MenuPdfViewerModal
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
        locale={locale}
      />

      {/* European Food Allergens Legend Modal [1-14] */}
      <MenuAllergenLegendModal
        isOpen={isAllergenModalOpen}
        onClose={() => setIsAllergenModalOpen(false)}
        locale={locale}
      />
    </div>
  );
}
