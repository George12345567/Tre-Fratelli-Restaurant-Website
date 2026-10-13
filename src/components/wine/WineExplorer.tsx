'use client';

import { useState, useMemo, useRef, useEffect } from 'react';
import {
  Beer,
  Check,
  ChevronDown,
  Coffee,
  GlassWater,
  Search,
  Sparkles,
  Wine,
  X,
  ZoomIn,
} from 'lucide-react';
import { drinksData, wineCategoryLabels } from '@/data/wine';
import type { Drink, LocalizedText, WineCategory } from '@/data/types';
import { getLocalized } from '@/data/types';
import type { Locale } from '@/i18n/routing';
import { DrinkLightboxModal } from './DrinkLightboxModal';

interface WineExplorerProps {
  locale: Locale;
}

const orderedWineCategories: WineCategory[] = [
  'sparkling',
  'glass',
  'white',
  'red',
  'rose',
  'dessert',
  'beer',
  'coffee',
  'soft',
];

const shortWineCategoryLabels: Record<WineCategory, LocalizedText> = {
  sparkling: {
    it: 'Bollicine',
    en: 'Sparkling',
    ar: 'الفوار والبروسيكو',
  },
  glass: {
    it: 'Al Calice',
    en: 'By the Glass',
    ar: 'مشروبات بالكأس',
  },
  white: {
    it: 'Bianchi',
    en: 'White Wines',
    ar: 'النبيذ الأبيض',
  },
  red: {
    it: 'Rossi',
    en: 'Red Wines',
    ar: 'النبيذ الأحمر',
  },
  rose: {
    it: 'Rosati',
    en: 'Rosé',
    ar: 'النبيذ الوردي',
  },
  dessert: {
    it: 'Passiti',
    en: 'Dessert Wine',
    ar: 'نبيذ الحلوى',
  },
  beer: {
    it: 'Birre',
    en: 'Craft Beer',
    ar: 'البيرة الحرفية',
  },
  coffee: {
    it: 'Caffè & Amari',
    en: 'Coffee & Amari',
    ar: 'الإسبريسو والهضمية',
  },
  soft: {
    it: 'Bibite',
    en: 'Soft Drinks',
    ar: 'مشروبات منعشة',
  },
};

function getWineCategoryIcon(cat: WineCategory) {
  switch (cat) {
    case 'sparkling':
      return <Sparkles size={14} className="text-amber-500" aria-hidden="true" />;
    case 'glass':
      return <Wine size={14} className="text-[var(--palette-italian-red)]" aria-hidden="true" />;
    case 'white':
      return <Wine size={14} className="text-amber-500" aria-hidden="true" />;
    case 'red':
      return <Wine size={14} className="text-rose-700" aria-hidden="true" />;
    case 'rose':
      return <Wine size={14} className="text-pink-400" aria-hidden="true" />;
    case 'dessert':
      return <Sparkles size={14} className="text-amber-600" aria-hidden="true" />;
    case 'beer':
      return <Beer size={14} className="text-amber-700" aria-hidden="true" />;
    case 'coffee':
      return <Coffee size={14} className="text-amber-950" aria-hidden="true" />;
    case 'soft':
      return <GlassWater size={14} className="text-sky-500" aria-hidden="true" />;
    default:
      return <Wine size={14} className="text-[var(--palette-italian-red)]" aria-hidden="true" />;
  }
}

export function WineExplorer({ locale }: WineExplorerProps) {
  const isRtl = locale === 'ar';

  const [activeCategory, setActiveCategory] = useState<WineCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalDrink, setActiveModalDrink] = useState<Drink | null>(null);
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

  // Filter drinks based on search query and category
  const displayedCategories = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return orderedWineCategories.filter((cat) => {
      if (activeCategory !== 'all' && activeCategory !== cat) return false;

      if (!query) return true;

      return drinksData.some(
        (drink) =>
          drink.category === cat &&
          (drink.name.toLowerCase().includes(query) ||
            (drink.region && drink.region.toLowerCase().includes(query)) ||
            drink.pairing.it.toLowerCase().includes(query) ||
            drink.pairing.en.toLowerCase().includes(query) ||
            drink.pairing.ar.toLowerCase().includes(query))
      );
    });
  }, [activeCategory, searchQuery]);

  const getDrinksForCategory = (cat: WineCategory) => {
    const query = searchQuery.trim().toLowerCase();
    const drinks = drinksData.filter((drink) => drink.category === cat);

    if (!query) return drinks;

    return drinks.filter(
      (drink) =>
        drink.name.toLowerCase().includes(query) ||
        (drink.region && drink.region.toLowerCase().includes(query)) ||
        drink.pairing.it.toLowerCase().includes(query) ||
        drink.pairing.en.toLowerCase().includes(query) ||
        drink.pairing.ar.toLowerCase().includes(query)
    );
  };

  const isOtherCategoryActive =
    activeCategory !== 'all' &&
    activeCategory !== 'sparkling' &&
    activeCategory !== 'white' &&
    activeCategory !== 'red' &&
    activeCategory !== 'beer';

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
                ? 'ابحث عن نبيذ، منطقة، بيرة، أو قهوة...'
                : locale === 'it'
                ? 'Cerca un vino, regione, birra o caffè...'
                : 'Search wines, regions, beers, or coffee...'
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
          {/* 1. All Drinks Shortcut */}
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
            {locale === 'ar' ? 'جميع المشروبات' : locale === 'it' ? 'Tutti i Vini' : 'All Drinks'}
          </button>

          {/* 2. Sparkling / Bollicine Shortcut */}
          <button
            type="button"
            onClick={() => {
              setActiveCategory('sparkling');
              setDropdownOpen(false);
            }}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
              activeCategory === 'sparkling'
                ? 'bg-[var(--palette-italian-red)] text-white shadow-2xs'
                : 'bg-amber-100/70 text-amber-950 hover:bg-amber-100 border border-amber-300/50'
            }`}
          >
            <Sparkles
              size={13}
              className={activeCategory === 'sparkling' ? 'text-white' : 'text-amber-700'}
              aria-hidden="true"
            />
            <span>{getLocalized(shortWineCategoryLabels.sparkling, locale)}</span>
          </button>

          {/* 3. White Wine Shortcut */}
          <button
            type="button"
            onClick={() => {
              setActiveCategory('white');
              setDropdownOpen(false);
            }}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
              activeCategory === 'white'
                ? 'bg-[var(--palette-italian-red)] text-white font-semibold shadow-2xs'
                : 'bg-[var(--palette-warm-ivory)] text-[var(--palette-espresso)]/80 hover:bg-[var(--palette-stone-beige-light)]/60'
            }`}
          >
            <span>{getLocalized(shortWineCategoryLabels.white, locale)}</span>
          </button>

          {/* 4. Red Wine Shortcut */}
          <button
            type="button"
            onClick={() => {
              setActiveCategory('red');
              setDropdownOpen(false);
            }}
            className={`hidden sm:inline-flex px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
              activeCategory === 'red'
                ? 'bg-[var(--palette-italian-red)] text-white font-semibold shadow-2xs'
                : 'bg-[var(--palette-warm-ivory)] text-[var(--palette-espresso)]/80 hover:bg-[var(--palette-stone-beige-light)]/60'
            }`}
          >
            <span>{getLocalized(shortWineCategoryLabels.red, locale)}</span>
          </button>

          {/* 5. Craft Beer Shortcut */}
          <button
            type="button"
            onClick={() => {
              setActiveCategory('beer');
              setDropdownOpen(false);
            }}
            className={`hidden md:inline-flex px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
              activeCategory === 'beer'
                ? 'bg-[var(--palette-italian-red)] text-white font-semibold shadow-2xs'
                : 'bg-[var(--palette-warm-ivory)] text-[var(--palette-espresso)]/80 hover:bg-[var(--palette-stone-beige-light)]/60'
            }`}
          >
            <span>{getLocalized(shortWineCategoryLabels.beer, locale)}</span>
          </button>

          {/* 6. Smart Wine Index Dropdown Popover */}
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
                  ? getLocalized(shortWineCategoryLabels[activeCategory as WineCategory], locale)
                  : locale === 'ar'
                  ? 'فهرس القبو'
                  : locale === 'it'
                  ? 'Filtra Cantina'
                  : 'Cellar Index'}
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
                  {locale === 'ar' ? 'اختر تصنيفاً من القبو' : locale === 'it' ? 'Seleziona Categoria' : 'Select Category'}
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
                    <Wine size={14} className="text-stone-500" />
                    <span>{locale === 'ar' ? 'جميع المشروبات والقبو' : locale === 'it' ? 'Tutta la Cantina' : 'Full Wine Cellar'}</span>
                  </div>
                  {activeCategory === 'all' && <Check size={14} className="text-[var(--palette-italian-red)]" />}
                </button>

                {orderedWineCategories.map((cat) => {
                  const isSelected = activeCategory === cat;
                  const drinkCount = drinksData.filter((d) => d.category === cat).length;

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
                        {getWineCategoryIcon(cat)}
                        <span className="font-medium">{getLocalized(wineCategoryLabels[cat], locale)}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] text-stone-400 font-mono">({drinkCount})</span>
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

      {/* ── The Wine Sheet Container (Parchment PDF-Like Board) ── */}
      <div className="bg-[#FAF8F5] rounded-2xl border-2 border-[var(--palette-stone-beige)]/50 p-5 sm:p-8 lg:p-12 shadow-sm space-y-12">
        
        {/* Wine Sheet Top Banner */}
        <div className="text-center max-w-2xl mx-auto space-y-2 pb-6 border-b border-[var(--palette-stone-beige)]/40">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--palette-aged-brass)]/15 text-[var(--palette-espresso)] text-[11px] font-bold tracking-widest uppercase">
            <span>TRE FRATELLI • CARTA DEI VINI & CANTINA DI FAMIGLIA</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--palette-espresso)] tracking-tight">
            {locale === 'ar'
              ? 'قائمة المشروبات وقبو النبيذ'
              : locale === 'it'
              ? 'La Nostra Cantina & Bevande'
              : 'Our Wine Cellar & Drinks Menu'}
          </h2>

          <p className="text-xs sm:text-sm text-[var(--palette-espresso)]/75 leading-relaxed font-serif italic">
            {locale === 'ar'
              ? 'قبو أُعد بعناية وشغف: نبيذ توسكاني فاخر، فوار فرانشاكورتا، بيرة إيطالية حرفية، وإسبريسو محمص على الحطب.'
              : locale === 'it'
              ? 'Cantina curata con passione: grandi rossi toscani, bollicine Franciacorta, birre artigianali e caffè a legna.'
              : 'Passionate selection: noble Tuscan reds, Franciacorta sparkling, artisanal Italian beers, and wood-roasted espresso.'}
          </p>

          <p className="text-[11px] text-[var(--palette-espresso)]/60 pt-1">
            {locale === 'ar'
              ? '💡 يمكنك النقر على أي صورة صغيرة لتكبيرها واستعراض التفاصيل.'
              : locale === 'it'
              ? '💡 Clicca su qualsiasi miniatura per ingrandire la foto.'
              : '💡 Click any small photo thumbnail to enlarge and view details.'}
          </p>
        </div>

        {/* ── Render Each Category Section ── */}
        {displayedCategories.length > 0 ? (
          displayedCategories.map((cat) => {
            const drinks = getDrinksForCategory(cat);
            if (drinks.length === 0) return null;

            return (
              <section
                key={cat}
                className="space-y-6 pt-2"
              >
                {/* Category Header */}
                <div className="space-y-1 pb-2 border-b border-[var(--palette-stone-beige)]/40">
                  <div className="flex items-center gap-2">
                    <div className="p-1 rounded-md bg-[var(--palette-stone-beige-light)]/60 text-[var(--palette-espresso)]">
                      {getWineCategoryIcon(cat)}
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[var(--palette-espresso)]">
                      {getLocalized(wineCategoryLabels[cat], locale)}
                    </h3>
                  </div>
                </div>

                {/* Grid of Drinks (2 columns on desktop, 1 on mobile) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-5">
                  {drinks.map((drink) => {
                    const hasImage = Boolean(drink.image && drink.image.trim() !== '');

                    return (
                      <article
                        key={drink.id}
                        className="p-3 sm:p-4 rounded-xl bg-white/60 hover:bg-white border border-[var(--palette-stone-beige)]/30 hover:border-[var(--palette-stone-beige)]/70 transition-all flex items-start gap-3.5 group shadow-2xs hover:shadow-xs"
                      >
                        {/* Left / Main Content: Name, Region, Price, Food Pairing */}
                        <div className="flex-1 min-w-0 space-y-1.5">
                          {/* Name & Price Header Row */}
                          <div className="flex items-baseline justify-between gap-2">
                            <h4 className="font-serif text-sm sm:text-base font-bold text-[var(--palette-espresso)] group-hover:text-[var(--palette-italian-red)] transition-colors leading-snug">
                              {drink.name}
                            </h4>
                            <span className="font-serif text-sm sm:text-base font-extrabold text-[var(--palette-italian-red)] shrink-0">
                              {drink.price}
                            </span>
                          </div>

                          {/* Region */}
                          {drink.region && (
                            <p className="text-[11px] font-semibold text-[var(--palette-espresso)]/65">
                              {drink.region} · Italia
                            </p>
                          )}

                          {/* Food Pairing */}
                          <div className="text-xs text-[var(--palette-espresso)]/80 leading-relaxed font-serif italic pt-0.5">
                            <span className="text-[var(--palette-italian-red)] font-semibold not-italic text-[11px]">
                              {locale === 'ar' ? 'توافق مع الطبق: ' : locale === 'it' ? 'Abbinamento: ' : 'Pairing: '}
                            </span>
                            <span>{getLocalized(drink.pairing, locale)}</span>
                          </div>
                        </div>

                        {/* Thumbnail: ONLY if drink has an image */}
                        {hasImage && (
                          <button
                            type="button"
                            onClick={() => setActiveModalDrink(drink)}
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
                              src={drink.image}
                              alt={drink.name}
                              className="w-full h-full object-cover group-hover/thumb:scale-108 transition-transform duration-300"
                              loading="lazy"
                            />
                            {/* Zoom Magnifier Overlay */}
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
                ? 'لم يتم العثور على مشروبات تطابق بحثك.'
                : locale === 'it'
                ? 'Nessuna bevanda trovata per questa ricerca.'
                : 'No drinks found matching your search.'}
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="text-xs font-semibold text-[var(--palette-italian-red)] underline underline-offset-2 cursor-pointer"
            >
              {locale === 'ar' ? 'إعادة ضبط البحث' : locale === 'it' ? 'Mostra tutte le bevande' : 'Reset search'}
            </button>
          </div>
        )}

      </div>

      {/* ── Lightbox Image Modal (Enlarges clicked thumbnail) ── */}
      <DrinkLightboxModal
        drink={activeModalDrink}
        locale={locale}
        onClose={() => setActiveModalDrink(null)}
      />
    </div>
  );
}
