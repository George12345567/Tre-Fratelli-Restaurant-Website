'use client';

import { useState, useMemo, useRef, useEffect } from 'react';
import {
  Cake,
  Check,
  ChevronDown,
  Fish,
  Flame,
  Leaf,
  Search,
  Sparkles,
  UtensilsCrossed,
  X,
  ZoomIn,
} from 'lucide-react';
import { categoryLabels, menuDishes } from '@/data/menu';
import type { Dish, DishCategory, LocalizedText } from '@/data/types';
import { getLocalized } from '@/data/types';
import type { Locale } from '@/i18n/routing';
import { MenuLightboxModal } from './MenuLightboxModal';

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

const shortCategoryLabels: Record<DishCategory, LocalizedText> = {
  'Pizza & Calzoni': {
    it: 'Pizze a Legna',
    en: 'Wood-Fired Pizza',
    ar: 'بيتزا الحطب',
  },
  Antipasti: {
    it: 'Antipasti',
    en: 'Antipasti',
    ar: 'المقبلات',
  },
  'Raw Seafood': {
    it: 'Crudi di Mare',
    en: 'Raw Seafood',
    ar: 'ثمار البحر',
  },
  'Primi Piatti': {
    it: 'Pasta & Primi',
    en: 'Pasta & Primi',
    ar: 'الباستا',
  },
  'Secondi Piatti': {
    it: 'Secondi & Brace',
    en: 'Mains & Grill',
    ar: 'الأسماك والمشاوي',
  },
  'Contorni & Salads': {
    it: 'Contorni',
    en: 'Sides & Salads',
    ar: 'السلطات',
  },
  Desserts: {
    it: 'Dolci',
    en: 'Desserts',
    ar: 'الحلويات',
  },
};

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
  const isRtl = locale === 'ar';

  const [activeCategory, setActiveCategory] = useState<DishCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalDish, setActiveModalDish] = useState<Dish | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownContainerRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownContainerRef.current &&
        !dropdownContainerRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  // Filter dishes based on search query and category
  const displayedCategories = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return orderedCategories.filter((cat) => {
      if (activeCategory !== 'all' && activeCategory !== cat) return false;

      if (!query) return true;

      return menuDishes.some(
        (dish) =>
          dish.category === cat &&
          (dish.name.it.toLowerCase().includes(query) ||
            dish.name.en.toLowerCase().includes(query) ||
            dish.name.ar.toLowerCase().includes(query) ||
            dish.description.it.toLowerCase().includes(query) ||
            dish.description.en.toLowerCase().includes(query) ||
            dish.description.ar.toLowerCase().includes(query))
      );
    });
  }, [activeCategory, searchQuery]);

  const getDishesForCategory = (cat: DishCategory) => {
    const query = searchQuery.trim().toLowerCase();
    const dishes = menuDishes.filter((dish) => dish.category === cat);

    if (!query) return dishes;

    return dishes.filter(
      (dish) =>
        dish.name.it.toLowerCase().includes(query) ||
        dish.name.en.toLowerCase().includes(query) ||
        dish.name.ar.toLowerCase().includes(query) ||
        dish.description.it.toLowerCase().includes(query) ||
        dish.description.en.toLowerCase().includes(query) ||
        dish.description.ar.toLowerCase().includes(query)
    );
  };

  const isOtherCategoryActive =
    activeCategory !== 'all' &&
    activeCategory !== 'Pizza & Calzoni' &&
    activeCategory !== 'Primi Piatti' &&
    activeCategory !== 'Secondi Piatti';

  return (
    <div className="space-y-8">
      {/* ── Search & Smart Category Navigation Bar (Zero Horizontal Scroll, Zero Clutter) ── */}
      <div className="bg-white/90 backdrop-blur-md rounded-2xl border border-[var(--palette-stone-beige)]/40 p-4 sm:p-5 shadow-xs space-y-3.5 relative">
        {/* Search Input */}
        <div className="relative max-w-md mx-auto">
          <Search
            size={16}
            className={`absolute top-1/2 -translate-y-1/2 text-[var(--palette-espresso)]/50 ${
              isRtl ? 'right-3.5' : 'left-3.5'
            }`}
            aria-hidden="true"
          />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              locale === 'ar'
                ? 'ابحث عن طبق أو بيتزا أو مكون...'
                : locale === 'it'
                ? 'Cerca un piatto, pizza o ingrediente...'
                : 'Search dishes, pizza, or ingredients...'
            }
            className={`w-full py-2.5 rounded-full border border-[var(--palette-stone-beige)]/70 bg-[var(--palette-warm-ivory)]/40 focus:bg-white text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-[var(--palette-aged-brass)] text-[var(--palette-espresso)] transition-all ${
              isRtl ? 'pr-9 pl-9' : 'pl-9 pr-9'
            }`}
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className={`absolute top-1/2 -translate-y-1/2 text-[var(--palette-espresso)]/50 hover:text-black ${
                isRtl ? 'left-3' : 'right-3'
              }`}
              aria-label="Clear search"
            >
              <X size={15} />
            </button>
          )}
        </div>

        {/* ── Category Segmented Bar with Direct Shortcuts & Smart Index Dropdown ── */}
        <div
          ref={dropdownContainerRef}
          className="flex flex-wrap items-center justify-center gap-2 pt-1 relative"
        >
          {/* 1. All Dishes Shortcut */}
          <button
            type="button"
            onClick={() => {
              setActiveCategory('all');
              setDropdownOpen(false);
            }}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-[var(--palette-italian-red)] text-white shadow-2xs'
                : 'bg-[var(--palette-warm-ivory)] text-[var(--palette-espresso)]/85 hover:bg-[var(--palette-stone-beige-light)]/60'
            }`}
          >
            {locale === 'ar' ? 'جميع الأطباق' : locale === 'it' ? 'Tutta la Carta' : 'All Dishes'}
          </button>

          {/* 2. Pizza Shortcut (Highlighted) */}
          <button
            type="button"
            onClick={() => {
              setActiveCategory('Pizza & Calzoni');
              setDropdownOpen(false);
            }}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
              activeCategory === 'Pizza & Calzoni'
                ? 'bg-[var(--palette-italian-red)] text-white shadow-2xs'
                : 'bg-amber-100/70 text-amber-950 hover:bg-amber-100 border border-amber-300/50'
            }`}
          >
            <Flame
              size={13}
              className={activeCategory === 'Pizza & Calzoni' ? 'text-white' : 'text-amber-700'}
              aria-hidden="true"
            />
            <span>{getLocalized(shortCategoryLabels['Pizza & Calzoni'], locale)}</span>
          </button>

          {/* 3. Pasta Shortcut */}
          <button
            type="button"
            onClick={() => {
              setActiveCategory('Primi Piatti');
              setDropdownOpen(false);
            }}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
              activeCategory === 'Primi Piatti'
                ? 'bg-[var(--palette-italian-red)] text-white font-semibold shadow-2xs'
                : 'bg-[var(--palette-warm-ivory)] text-[var(--palette-espresso)]/80 hover:bg-[var(--palette-stone-beige-light)]/60'
            }`}
          >
            <span>{getLocalized(shortCategoryLabels['Primi Piatti'], locale)}</span>
          </button>

          {/* 4. Secondi / Mains Shortcut */}
          <button
            type="button"
            onClick={() => {
              setActiveCategory('Secondi Piatti');
              setDropdownOpen(false);
            }}
            className={`hidden sm:inline-flex px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
              activeCategory === 'Secondi Piatti'
                ? 'bg-[var(--palette-italian-red)] text-white font-semibold shadow-2xs'
                : 'bg-[var(--palette-warm-ivory)] text-[var(--palette-espresso)]/80 hover:bg-[var(--palette-stone-beige-light)]/60'
            }`}
          >
            <span>{getLocalized(shortCategoryLabels['Secondi Piatti'], locale)}</span>
          </button>

          {/* 5. Smart Category Index Dropdown Popover */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setDropdownOpen((prev) => !prev)}
              aria-expanded={dropdownOpen}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs ${
                isOtherCategoryActive
                  ? 'bg-[var(--palette-italian-red)] text-white'
                  : 'bg-white border border-[var(--palette-stone-beige)]/70 text-[var(--palette-espresso)] hover:bg-[var(--palette-stone-beige-light)]/30'
              }`}
            >
              <span>
                {isOtherCategoryActive
                  ? getLocalized(shortCategoryLabels[activeCategory as DishCategory], locale)
                  : locale === 'ar'
                  ? 'فهرس الأقسام'
                  : locale === 'it'
                  ? 'Filtra Categoria'
                  : 'Category Index'}
              </span>
              <ChevronDown
                size={13}
                className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </button>

            {/* Dropdown Floating Menu */}
            {dropdownOpen && (
              <div className="absolute top-full mt-2 z-40 w-64 sm:w-72 rounded-2xl bg-white/98 backdrop-blur-md border border-[var(--palette-stone-beige)]/70 shadow-xl p-2.5 space-y-1 text-xs animate-in fade-in zoom-in-95 duration-150 right-0 sm:right-auto sm:left-1/2 sm:-translate-x-1/2 rtl:sm:right-1/2 rtl:sm:translate-x-1/2 rtl:right-auto rtl:left-0">
                <div className="px-2 py-1 text-[11px] font-bold text-[var(--palette-espresso)]/60 uppercase tracking-wider border-b border-[var(--palette-stone-beige)]/30">
                  {locale === 'ar' ? 'اختر قسماً من المنيو' : locale === 'it' ? 'Seleziona Categoria' : 'Select Category'}
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setActiveCategory('all');
                    setDropdownOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-start transition-colors cursor-pointer ${
                    activeCategory === 'all'
                      ? 'bg-[var(--palette-italian-red)]/10 text-[var(--palette-italian-red)] font-bold'
                      : 'hover:bg-black/5 text-[var(--palette-espresso)]'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <UtensilsCrossed size={14} className="text-stone-500" />
                    <span>{locale === 'ar' ? 'جميع الأطباق والبيتزا' : locale === 'it' ? 'Tutta la Carta' : 'All Dishes & Pizza'}</span>
                  </div>
                  {activeCategory === 'all' && <Check size={14} className="text-[var(--palette-italian-red)]" />}
                </button>

                {orderedCategories.map((cat) => {
                  const isSelected = activeCategory === cat;
                  const dishCount = menuDishes.filter((d) => d.category === cat).length;

                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => {
                        setActiveCategory(cat);
                        setDropdownOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-start transition-colors cursor-pointer ${
                        isSelected
                          ? 'bg-[var(--palette-italian-red)]/10 text-[var(--palette-italian-red)] font-bold'
                          : 'hover:bg-black/5 text-[var(--palette-espresso)]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {getCategoryIcon(cat)}
                        <span className="font-medium">{getLocalized(categoryLabels[cat], locale)}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] text-stone-400 font-mono">({dishCount})</span>
                        {isSelected && <Check size={14} className="text-[var(--palette-italian-red)]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── The Menu Sheet Container (Parchment PDF-Like Board) ── */}
      <div className="bg-[#FAF8F5] rounded-2xl border-2 border-[var(--palette-stone-beige)]/50 p-5 sm:p-8 lg:p-12 shadow-sm space-y-12">
        
        {/* Menu Sheet Top Banner */}
        <div className="text-center max-w-2xl mx-auto space-y-2 pb-6 border-b border-[var(--palette-stone-beige)]/40">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--palette-aged-brass)]/15 text-[var(--palette-espresso)] text-[11px] font-bold tracking-widest uppercase">
            <span>TRE FRATELLI • CARTA DEL RISTORANTE & PIZZERIA</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--palette-espresso)] tracking-tight">
            {locale === 'ar'
              ? 'قائمة الأطباق وبيتزا الحطب'
              : locale === 'it'
              ? 'La Nostra Carta & Pizzeria'
              : 'Our Restaurant & Pizzeria Menu'}
          </h2>

          <p className="text-xs sm:text-sm text-[var(--palette-espresso)]/75 leading-relaxed font-serif italic">
            {locale === 'ar'
              ? 'طهي أصيل بمكونات نقية، بيتزا مخبوزة في فرن الحطب على حرارة 450°C، وأطباق بحرية ولحوم وفيرة الحجم.'
              : locale === 'it'
              ? 'Materia prima eccellente, pizze veraci cotte a legna a 450°C, pesce fresco e porzioni generose.'
              : 'Honest ingredients, wood-fired artisan pizza baked at 450°C, fresh seafood, and generous portions.'}
          </p>

          <p className="text-[11px] text-[var(--palette-espresso)]/60 pt-1">
            {locale === 'ar'
              ? '💡 يمكنك النقر على أي صورة صغيرة لتكبيرها واستعراض التفاصيل.'
              : locale === 'it'
              ? '💡 Clicca su qualsiasi miniatura per ingrandire la foto del piatto.'
              : '💡 Click any small photo thumbnail to enlarge and view details.'}
          </p>
        </div>

        {/* ── Render Each Category Section ── */}
        {displayedCategories.length > 0 ? (
          displayedCategories.map((cat) => {
            const dishes = getDishesForCategory(cat);
            if (dishes.length === 0) return null;

            const isPizzaSection = cat === 'Pizza & Calzoni';

            return (
              <section
                key={cat}
                id={isPizzaSection ? 'pizzeria' : undefined}
                className="space-y-6 pt-2 scroll-mt-24"
              >
                {/* Category Header */}
                <div className="space-y-1.5 pb-2 border-b border-[var(--palette-stone-beige)]/40">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      {isPizzaSection ? (
                        <div className="p-1 rounded-md bg-amber-100 text-amber-800">
                          <Flame size={18} aria-hidden="true" />
                        </div>
                      ) : (
                        <div className="p-1 rounded-md bg-[var(--palette-stone-beige-light)]/60 text-[var(--palette-espresso)]">
                          <UtensilsCrossed size={16} aria-hidden="true" />
                        </div>
                      )}
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[var(--palette-espresso)]">
                        {getLocalized(categoryLabels[cat], locale)}
                      </h3>
                    </div>

                    {isPizzaSection && (
                      <span className="text-[11px] font-bold text-amber-800 bg-amber-100/80 px-2.5 py-1 rounded-full shrink-0 border border-amber-300/60">
                        450°C Forno a Legna
                      </span>
                    )}
                  </div>

                  {/* Contextual subtitle for specific categories */}
                  {isPizzaSection && (
                    <p className="text-xs text-amber-950/80 italic font-serif">
                      {locale === 'ar'
                        ? 'عجينة متخمرة ببطء 48 ساعة، طماطم سان مارزانو، ومخبوزة على لهب خشب الزان في فرننا الحجري.'
                        : locale === 'it'
                        ? 'Impasto a lenta lievitazione 48 ore, pomodoro San Marzano e cottura rapida su legno ardente.'
                        : 'Slow-fermented 48-hour dough baked over glowing beechwood embers in our traditional brick hearth.'}
                    </p>
                  )}
                </div>

                {/* Grid of Dishes (2 columns on desktop, 1 on mobile) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-5">
                  {dishes.map((dish) => {
                    const hasImage = Boolean(dish.image && dish.image.trim() !== '');

                    return (
                      <article
                        key={dish.id}
                        className="p-3 sm:p-4 rounded-xl bg-white/60 hover:bg-white border border-[var(--palette-stone-beige)]/30 hover:border-[var(--palette-stone-beige)]/70 transition-all flex items-start gap-3.5 group shadow-2xs hover:shadow-xs"
                      >
                        {/* Left / Main Content: Name, Price, Description, Badges */}
                        <div className="flex-1 min-w-0 space-y-1.5">
                          {/* Dish Name & Price Header Row */}
                          <div className="flex items-baseline justify-between gap-2">
                            <h4 className="font-serif text-sm sm:text-base font-bold text-[var(--palette-espresso)] group-hover:text-[var(--palette-italian-red)] transition-colors leading-snug">
                              {dish.name.it}
                            </h4>
                            <span className="font-serif text-sm sm:text-base font-extrabold text-[var(--palette-italian-red)] shrink-0">
                              {dish.price}
                            </span>
                          </div>

                          {/* Translated secondary name if not in Italian */}
                          {locale !== 'it' && (
                            <p className="text-[11px] font-semibold text-[var(--palette-espresso)]/75">
                              {getLocalized(dish.name, locale)}
                            </p>
                          )}

                          {/* Description */}
                          <p className="text-xs text-[var(--palette-espresso)]/75 leading-relaxed font-serif italic">
                            {getLocalized(dish.description, locale)}
                          </p>

                          {/* Micro-badges */}
                          {dish.tags.length > 0 && (
                            <div className="pt-1 flex flex-wrap items-center gap-1.5">
                              {dish.tags.includes('signature') && (
                                <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800">
                                  <Sparkles size={10} aria-hidden="true" />
                                  <span>{locale === 'ar' ? 'طبق الدار' : locale === 'it' ? 'Della Casa' : 'Signature'}</span>
                                </span>
                              )}
                              {dish.tags.includes('seafood') && (
                                <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-sky-50 text-sky-700">
                                  {locale === 'ar' ? 'بحري طازج' : locale === 'it' ? 'Mare' : 'Seafood'}
                                </span>
                              )}
                              {dish.tags.includes('vegetarian') && (
                                <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-emerald-50 text-emerald-700">
                                  {locale === 'ar' ? 'نباتي' : locale === 'it' ? 'Vegetariano' : 'Vegetarian'}
                                </span>
                              )}
                            </div>
                          )}
                        </div>

                        {/* Thumbnail: ONLY if dish has an image */}
                        {hasImage && (
                          <button
                            type="button"
                            onClick={() => setActiveModalDish(dish)}
                            title={
                              locale === 'ar'
                                ? 'اضغط لتكبير الصورة'
                                : locale === 'it'
                                ? 'Clicca per ingrandire'
                                : 'Click to enlarge photo'
                            }
                            className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden border border-[var(--palette-stone-beige)]/70 shrink-0 cursor-pointer group/thumb shadow-2xs hover:shadow-xs transition-transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-[var(--palette-aged-brass)]"
                          >
                            <img
                              src={dish.image}
                              alt={getLocalized(dish.name, locale)}
                              className="w-full h-full object-cover group-hover/thumb:scale-108 transition-transform duration-300"
                              loading="lazy"
                            />
                            {/* Zoom Magnifier Overlay Cue */}
                            <div className="absolute inset-0 bg-black/35 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-center justify-center text-white">
                              <ZoomIn size={16} />
                            </div>
                          </button>
                        )}
                      </article>
                    );
                  })}
                </div>
              </section>
            );
          })
        ) : (
          <div className="text-center py-12 space-y-3">
            <p className="text-sm text-[var(--palette-espresso)]/70">
              {locale === 'ar'
                ? 'لم يتم العثور على أطباق تطابق بحثك.'
                : locale === 'it'
                ? 'Nessun piatto trovato per questa ricerca.'
                : 'No dishes found matching your search.'}
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="text-xs font-semibold text-[var(--palette-italian-red)] underline underline-offset-2 cursor-pointer"
            >
              {locale === 'ar' ? 'إعادة ضبط البحث' : locale === 'it' ? 'Mostra tutti i piatti' : 'Reset search'}
            </button>
          </div>
        )}

      </div>

      {/* ── Lightbox Image Modal (Enlarges clicked thumbnail) ── */}
      <MenuLightboxModal
        dish={activeModalDish}
        locale={locale}
        onClose={() => setActiveModalDish(null)}
      />
    </div>
  );
}
