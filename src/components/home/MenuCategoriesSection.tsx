'use client';

import { useState } from 'react';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Utensils,
  Fish,
  Flame,
  Pizza,
  Sparkles,
  Coffee,
  Wine,
  GlassWater,
  PartyPopper,
} from 'lucide-react';
import { Link } from '@/i18n/navigation';

interface Props {
  locale: string;
  isRtl: boolean;
  translations: {
    viewMenu: string;
  };
}

interface CategoryItem {
  id: string;
  slug: string;
  icon: typeof Utensils;
  title: { it: string; en: string; ar: string };
  tagline: { it: string; en: string; ar: string };
  badge: { it: string; en: string; ar: string };
  image: string;
  dishes: Array<{
    name: { it: string; en: string; ar: string };
    price: string;
  }>;
}

export function MenuCategoriesSection({
  locale,
  isRtl,
  translations,
}: Props) {
  const [activeMode, setActiveMode] = useState<'food' | 'wine'>('food');
  const [activeFoodId, setActiveFoodId] = useState('primi');
  const [activeWineId, setActiveWineId] = useState('red-wine');

  const foodCategories: CategoryItem[] = [
    {
      id: 'antipasti',
      slug: 'antipasti',
      icon: Utensils,
      title: {
        it: 'Antipasti & Taglieri',
        en: 'Antipasti & Boards',
        ar: 'المقبلات ومختارات الأجبان',
      },
      tagline: {
        it: 'Prosciutto di Parma 24 mesi, burrata pugliese e formaggi D.O.P.',
        en: '24-month aged Parma prosciutto, fresh Pugliese burrata & D.O.P. cheeses.',
        ar: 'لحم بارما المعتق 24 شهراً، جبن البوراتا، وتشكيلات الأجبان الإيطالية.',
      },
      badge: {
        it: 'Tradizione Artigianale',
        en: 'Artisanal Starters',
        ar: 'مقبلات إيطالية أصيلة',
      },
      image: '/images/dishes/antipasti/tagliere-salumi-parma.webp',
      dishes: [
        { name: { it: 'Burrata Pugliese con Prosciutto di Parma', en: 'Pugliese Burrata with Parma Prosciutto', ar: 'جبن بوراتا مع لحم بارما المعتق' }, price: '€18' },
        { name: { it: 'Tagliere Reale Salumi & Formaggi D.O.P.', en: 'Royal D.O.P. Cured Meats & Cheese Board', ar: 'لوح اللحوم الإيطالية الباردة والأجبان' }, price: '€24' },
        { name: { it: 'Tartare di Fassona Piemontese al Tartufo', en: 'Piedmontese Fassona Beef Tartare', ar: 'تارتار لحم فاسونا مع الكمأة' }, price: '€22' },
      ],
    },
    {
      id: 'crudi',
      slug: 'raw-seafood',
      icon: Fish,
      title: {
        it: 'Crudi di Mare & Ostriche',
        en: 'Raw Seafood & Oysters',
        ar: 'ثمار البحر النيئة والمحار',
      },
      tagline: {
        it: 'Pescato freschissimo del giorno, ostriche Fine de Claire e gamberi rossi.',
        en: 'Pristine daily Mediterranean catch, Fine de Claire oysters and red prawns.',
        ar: 'صيد اليوم الطازج، محار فاين دي كلير، وروبيان البحر المتوسط الأحمر.',
      },
      badge: {
        it: 'Freschezza Assoluta',
        en: 'Pristine Seafood',
        ar: 'ثمار بحر طازجة يومياً',
      },
      image: '/images/dishes/raw-seafood/crudo-di-mare-misto.webp',
      dishes: [
        { name: { it: 'Gran Crudo di Mare con Ostriche', en: 'Royal Raw Seafood & Oyster Plateau', ar: 'طبق ثمار البحر النيئة الفاخر مع المحار' }, price: '€32' },
        { name: { it: 'Plateau Ostriche Fine de Claire (6pz)', en: 'Fine de Claire Oysters Plateau (6 pcs)', ar: 'طبق محار فاين دي كلير الطازج (6 قطع)' }, price: '€26' },
        { name: { it: 'Tartare di Salmone Selvaggio agli Agrumi', en: 'Wild Salmon Citrus Tartare', ar: 'تارتار السلمون البري بالحمضيات' }, price: '€20' },
      ],
    },
    {
      id: 'primi',
      slug: 'primi-piatti',
      icon: Sparkles,
      title: {
        it: 'Primi Piatti & Paste Fresche',
        en: 'Fresh Handmade Pasta',
        ar: 'الباستا الطازجة والريزوتو',
      },
      tagline: {
        it: 'Pasta fresca tirata a mano al mattino e trafilata al bronzo.',
        en: 'Fresh pasta hand-kneaded every morning and extruded through bronze dies.',
        ar: 'باستا طازجة تُعجن يومياً وتُسحب بقوالب البرونز الخشنة لتشرب الصلصات.',
      },
      badge: {
        it: 'Fatta a Mano Ogni Alba',
        en: 'Hand-Rolled Daily',
        ar: 'عجن يدوي طازج يومياً',
      },
      image: '/images/dishes/primi-piatti/spaghetti-chitarra-allo-scoglio.webp',
      dishes: [
        { name: { it: 'Calamarata all’Astice Mediterraneo', en: 'Mediterranean Lobster Calamarata', ar: 'كالاماراتا بالكركند الطازج' }, price: '€28' },
        { name: { it: 'Spaghetti alla Chitarra allo Scoglio', en: 'Handmade Chitarra Seafood Spaghetti', ar: 'سباغيتي كيتارا بثمار البحر' }, price: '€22' },
        { name: { it: 'Risotto alla Pescatora con Zafferano', en: 'Seafood Risotto with Saffron', ar: 'ريزوتو ثمار البحر بالزعفران' }, price: '€24' },
      ],
    },
    {
      id: 'secondi',
      slug: 'secondi-piatti',
      icon: Flame,
      title: {
        it: 'Secondi alla Brace & Carni',
        en: 'Oak Wood Grill & Steaks',
        ar: 'المشويات على جمر البلوط',
      },
      tagline: {
        it: 'Razza Chianina frollata 35 giorni e carni nobili cotte su brace di quercia.',
        en: '35-day dry-aged Tuscan Chianina and prime cuts over glowing oak coals.',
        ar: 'سلالة كيانينا معتقة 35 يوماً ولحوم فاخرة مطهوة على جمر خشب البلوط.',
      },
      badge: {
        it: 'Brace Viva di Quercia',
        en: 'Live Oak Coals',
        ar: 'جمر خشب البلوط الطبيعي',
      },
      image: '/images/dishes/secondi-piatti/bistecca-fiorentina-chianina.webp',
      dishes: [
        { name: { it: 'Bistecca alla Fiorentina di Chianina (35gg)', en: 'Chianina Fiorentina T-Bone (35-day Dry Aged)', ar: 'شريحة لحم فيورنتينا كيانينا معتقة' }, price: '€75' },
        { name: { it: 'Tagliata di Fassona Piemontese al Rosmarino', en: 'Piedmontese Fassona Sliced Sirloin', ar: 'شريحة تالياتا فاسونا بإكليل الجبل' }, price: '€32' },
        { name: { it: 'Grigliata Mista di Carni Nobili alla Brace', en: 'Mixed Wood-Grilled Noble Meats Platter', ar: 'مشويات مشكلة من اللحوم الفاخرة' }, price: '€36' },
      ],
    },
    {
      id: 'pizza',
      slug: 'pizza-calzoni',
      icon: Pizza,
      title: {
        it: 'Pizze al Forno a Legna',
        en: 'Wood-Fired Neapolitan Pizza',
        ar: 'بيتزا الحطب النابولية',
      },
      tagline: {
        it: 'Impasto a lievitazione naturale di 48 ore cotto a 450°C in 90 secondi.',
        en: '48-hour slow-fermented sourdough baked in 90s at 450°C to airy perfection.',
        ar: 'عجينة تخمير بطيء 48 ساعة تخبز في 90 ثانية في فرن الحطب بدرجة 450 مئوية.',
      },
      badge: {
        it: 'Forno Vulcanico 450°C',
        en: '450°C Wood Oven',
        ar: 'فرن حطب نابولي 450°C',
      },
      image: '/images/dishes/pizza/pizza-margherita-crudo-cornicione.webp',
      dishes: [
        { name: { it: 'Margherita Verace D.O.P. con Bufala', en: 'Authentic Margherita D.O.P. Buffalo Mozzarella', ar: 'مارغريتا أصلية مع جبن البافلو' }, price: '€14' },
        { name: { it: 'Pizza Tre Fratelli (Parma, Burrata & Tartufo)', en: 'Tre Fratelli Pizza (Parma, Burrata, Truffle)', ar: 'بيتزا تري فراتيلي بلحم بارما والبوراتا' }, price: '€18' },
        { name: { it: 'Salsiccia Nostrana & Friarielli Napoletani', en: 'Artisanal Sausage & Sautéed Friarielli', ar: 'بيتزا السجق الإيطالي والأعشاب النابولية' }, price: '€16' },
      ],
    },
    {
      id: 'dolci',
      slug: 'desserts',
      icon: Coffee,
      title: {
        it: 'Dolci Fatti in Casa',
        en: 'Artisanal Desserts',
        ar: 'الحلويات الإيطالية المنزلية',
      },
      tagline: {
        it: 'Ricette storiche di famiglia con mascarpone fresco e pistacchio di Bronte.',
        en: 'Historic family recipes featuring fresh mascarpone and Bronte pistachios.',
        ar: 'حلويات إيطالية كلاسيكية تحضر يومياً بجبن الماسكاربوني وفستق برونتي.',
      },
      badge: {
        it: 'Pasticceria di Famiglia',
        en: 'Handcrafted Desserts',
        ar: 'حلويات إيطالية منزلية',
      },
      image: '/images/dishes/dolci-tiramisu-cannoli.jpg',
      dishes: [
        { name: { it: 'Tiramisù Tradizionale con Mascarpone & Cacao', en: 'Classic Italian Mascarpone Tiramisù', ar: 'تيراميسو إيطالي كلاسيكي بالماسكاربوني' }, price: '€9' },
        { name: { it: 'Cannoli Siciliani alla Ricotta & Pistacchio', en: 'Sicilian Cannoli with Pistachio & Ricotta', ar: 'كانولي صقلي بجبن الريكوتا والفستق' }, price: '€8' },
        { name: { it: 'Panna Cotta alla Vaniglia del Madagascar', en: 'Madagascar Vanilla Bean Panna Cotta', ar: 'بانا كوتا بفانيليا مدغشقر الطبيعية' }, price: '€8' },
      ],
    },
  ];

  const wineCategories: CategoryItem[] = [
    {
      id: 'red-wine',
      slug: 'red',
      icon: Wine,
      title: {
        it: 'Grandi Vini Rossi & Riserve',
        en: 'Fine Red Wines & Reserves',
        ar: 'النبيذ الأحمر المعتق والفخم',
      },
      tagline: {
        it: 'Brunello di Montalcino, Barolo e grandi riserve dai migliori terroir italiani.',
        en: 'Brunello di Montalcino, Barolo & iconic vintage reserves from top terroirs.',
        ar: 'برونيللو دي مونتالتشينو، بارولو، وأعرق أنواع النبيذ الإيطالي المعتق.',
      },
      badge: {
        it: 'Selezione D.O.C.G.',
        en: 'D.O.C.G. Reserves',
        ar: 'أصناف D.O.C.G. معتقة',
      },
      image: '/images/wine/wine-cellar-tre-fratelli.jpg',
      dishes: [
        { name: { it: 'Brunello di Montalcino Riserva D.O.C.G.', en: 'Brunello di Montalcino Riserva D.O.C.G.', ar: 'برونيللو دي مونتالتشينو ريزيرفا' }, price: '€85' },
        { name: { it: 'Barolo Classico di Serralunga D.O.C.G.', en: 'Barolo Classico Serralunga D.O.C.G.', ar: 'بارولو كلاسيكو دي سيرالونغا' }, price: '€78' },
        { name: { it: 'Amarone della Valpolicella Classico', en: 'Amarone della Valpolicella Classico', ar: 'أماروني ديلا فالبوليتشيلا الفاخر' }, price: '€72' },
      ],
    },
    {
      id: 'sparkling-wine',
      slug: 'sparkling',
      icon: PartyPopper,
      title: {
        it: 'Bollicine, Franciacorta & Bianchi',
        en: 'Franciacorta & Crisp Whites',
        ar: 'الفوار، فرانتشاكورتا والأبيض المنعش',
      },
      tagline: {
        it: 'Metodo Classico della Franciacorta, Prosecco Superiore e bianchi minerali.',
        en: 'Metodo Classico Franciacorta, Prosecco Superiore & mineral Italian whites.',
        ar: 'مشروبات فرانتشاكورتا الفوارة، بروسيكو سوبريوري ونبيذ أبيض منعش.',
      },
      badge: {
        it: 'Metodo Classico',
        en: 'Metodo Classico',
        ar: 'طريقة كلاسيكية راقية',
      },
      image: '/images/wine/wine-cellar-tre-fratelli.jpg',
      dishes: [
        { name: { it: 'Franciacorta Brut D.O.C.G. Cuvée Royale', en: 'Franciacorta Brut D.O.C.G. Cuvée Royale', ar: 'فرانتشاكورتا بروت D.O.C.G. الملكي' }, price: '€48' },
        { name: { it: 'Valdobbiadene Prosecco Superiore D.O.C.G.', en: 'Valdobbiadene Prosecco Superiore D.O.C.G.', ar: 'فالدوبياديني بروسيكو سوبريوري' }, price: '€34' },
        { name: { it: 'Gavi di Gavi D.O.C.G. La Scolca', en: 'Gavi di Gavi D.O.C.G. La Scolca', ar: 'غافي دي غافي الأبيض الإيطالي' }, price: '€38' },
      ],
    },
    {
      id: 'cocktails-bar',
      slug: 'cocktails',
      icon: GlassWater,
      title: {
        it: 'Cocktails d’Autore & Aperitivi',
        en: 'Signature Mixology & Aperitivi',
        ar: 'الكوكتيلات الإيطالية والمشروبات المنعشة',
      },
      tagline: {
        it: 'Icone della mixology milanese preparate al banco con bitter e agrumi freschi.',
        en: 'Milanese mixology icons crafted with artisanal bitters and fresh citrus.',
        ar: 'كوكتيلات ميلانو الكلاسيكية المحضرة بحرفية مع الأعشاب والحمضيات الطازجة.',
      },
      badge: {
        it: 'Aperitivo Italiano',
        en: 'Italian Aperitivo',
        ar: 'أبيريتيفو إيطالي أصيل',
      },
      image: '/images/wine/cocktails-aperitivo-tre-fratelli.jpg',
      dishes: [
        { name: { it: 'Negroni Classico con Bitter Campari & Gin', en: 'Classic Milanese Negroni', ar: 'نيغروني كلاسيكي بكامباري وجين' }, price: '€12' },
        { name: { it: 'Aperol Spritz con Prosecco D.O.C.', en: 'Aperol Spritz with Prosecco D.O.C.', ar: 'أبيرول سبريتز مع البروسيكو' }, price: '€10' },
        { name: { it: 'Grappa Invecchiata & Espresso Italiano', en: 'Aged Grappa & Italian Espresso', ar: 'غرابا معتقة وإسبريسو إيطالي' }, price: '€7' },
      ],
    },
  ];

  const currentCategories = activeMode === 'food' ? foodCategories : wineCategories;
  const activeCategoryId = activeMode === 'food' ? activeFoodId : activeWineId;
  const setActiveCategoryId = activeMode === 'food' ? setActiveFoodId : setActiveWineId;

  const activeCategory =
    currentCategories.find((c) => c.id === activeCategoryId) || currentCategories[0];
  const activeIdx = currentCategories.findIndex((c) => c.id === activeCategoryId);

  const getLoc = (obj: { it: string; en: string; ar: string }) => {
    return locale === 'ar' ? obj.ar : locale === 'en' ? obj.en : obj.it;
  };

  const handlePrevCategory = () => {
    const prevIdx = activeIdx <= 0 ? currentCategories.length - 1 : activeIdx - 1;
    setActiveCategoryId(currentCategories[prevIdx].id);
  };

  const handleNextCategory = () => {
    const nextIdx = activeIdx >= currentCategories.length - 1 ? 0 : activeIdx + 1;
    setActiveCategoryId(currentCategories[nextIdx].id);
  };

  const targetMenuUrl =
    activeMode === 'food'
      ? `/menu#${activeCategory.slug}`
      : `/wine-drinks#${activeCategory.slug}`;

  return (
    <section className="relative pt-8 sm:pt-12 pb-12 sm:pb-16 overflow-hidden bg-gradient-to-b from-transparent via-[var(--palette-stone-beige-light)]/20 to-transparent">
      {/* ── Soft Ambient Glow ── */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(176,138,87,0.08),transparent_70%)] pointer-events-none blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ── Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 space-y-2.5">
          <div className="flex items-center justify-center gap-2">
            <span className="w-5 h-px bg-[var(--palette-aged-brass)]/60" aria-hidden="true" />
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[var(--palette-italian-red)]">
              {locale === 'it'
                ? 'La Nostra Offerta Gastronomica'
                : locale === 'ar'
                ? 'تشكيلات المطبخ والقبو الإيطالي'
                : 'Artisanal Kitchen & Cellar'}
            </span>
            <span className="w-5 h-px bg-[var(--palette-aged-brass)]/60" aria-hidden="true" />
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-[var(--palette-espresso)] leading-tight">
            {locale === 'it'
              ? 'Esplora il Menu & La Cantina'
              : locale === 'ar'
              ? 'استكشف قائمة الطعام وقبو المشروبات'
              : 'Explore the Menu & Cellar'}
          </h2>

          <p className="text-xs sm:text-sm text-[var(--palette-espresso)]/75 max-w-xl mx-auto leading-relaxed">
            {locale === 'it'
              ? 'Dalle creazioni artigianali dei fratelli ai calici più pregiati: seleziona una sezione per scoprirne le specialità.'
              : locale === 'ar'
              ? 'من إبداعات الأطباق الطازجة إلى أعتق أصناف النبيذ والمشروبات: اختر القسم لتصفح تفاصيله وصوره بوضوح.'
              : 'From fresh culinary masterworks to fine cellar labels: choose a chapter to explore unobstructed photos and highlights.'}
          </p>
        </div>

        {/* ── Main Mode Switcher: Food vs Wine & Drinks (Dedicated Spotlight) ── */}
        <div className="flex items-center justify-center mb-6 sm:mb-8">
          <div className="inline-flex p-1 rounded-full bg-white/80 backdrop-blur-md border border-black/10 shadow-xs">
            <button
              type="button"
              onClick={() => setActiveMode('food')}
              className={`inline-flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                activeMode === 'food'
                  ? 'bg-[var(--palette-espresso)] text-[var(--palette-warm-ivory)] shadow-sm'
                  : 'text-[var(--palette-espresso)]/70 hover:text-[var(--palette-espresso)]'
              }`}
            >
              <Utensils size={14} />
              <span>
                {locale === 'it'
                  ? 'La Cucina (6 Sezioni)'
                  : locale === 'ar'
                  ? 'المأكولات والأطباق (6 أقسام)'
                  : 'The Kitchen (6 Chapters)'}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveMode('wine')}
              className={`inline-flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                activeMode === 'wine'
                  ? 'bg-[var(--palette-espresso)] text-[var(--palette-warm-ivory)] shadow-sm'
                  : 'text-[var(--palette-espresso)]/70 hover:text-[var(--palette-espresso)]'
              }`}
            >
              <Wine size={14} className="text-[var(--palette-italian-red)]" />
              <span>
                {locale === 'it'
                  ? 'La Cantina & Bar (3 Sezioni)'
                  : locale === 'ar'
                  ? 'قبو المشروبات والبار (3 أقسام)'
                  : 'Wine Cellar & Bar (3 Chapters)'}
              </span>
            </button>
          </div>
        </div>

        {/* ── Mobile Category Navigation Bar (< lg): Compact & Fast ── */}
        <div className="lg:hidden mb-5">
          {/* Active Step Indicator & Prev/Next Arrows */}
          <div className="flex items-center justify-between bg-white/80 backdrop-blur-sm p-2 rounded-2xl border border-black/5 shadow-2xs mb-2.5">
            <button
              type="button"
              onClick={isRtl ? handleNextCategory : handlePrevCategory}
              className="p-1.5 rounded-xl bg-black/5 hover:bg-black/10 text-[var(--palette-espresso)] transition-colors cursor-pointer"
              aria-label="Previous"
            >
              <ChevronLeft size={16} className={isRtl ? 'rotate-180' : ''} />
            </button>

            <div className="text-center min-w-0 px-2">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--palette-italian-red)] block truncate">
                {getLoc(activeCategory.badge)}
              </span>
              <span className="font-serif text-sm font-bold text-[var(--palette-espresso)] block truncate">
                {getLoc(activeCategory.title)}
              </span>
            </div>

            <button
              type="button"
              onClick={isRtl ? handlePrevCategory : handleNextCategory}
              className="p-1.5 rounded-xl bg-black/5 hover:bg-black/10 text-[var(--palette-espresso)] transition-colors cursor-pointer"
              aria-label="Next"
            >
              <ChevronRight size={16} className={isRtl ? 'rotate-180' : ''} />
            </button>
          </div>

          {/* Compact Category Chips (Natural Wrapping, Zero Horizontal Scroll Bug) */}
          <div className="flex flex-wrap items-center justify-center gap-1.5">
            {currentCategories.map((cat, idx) => {
              const Icon = cat.icon;
              const isCurrent = cat.id === activeCategoryId;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategoryId(cat.id)}
                  className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold transition-all duration-200 cursor-pointer ${
                    isCurrent
                      ? 'bg-[var(--palette-italian-red)] text-white shadow-2xs'
                      : 'bg-white/70 hover:bg-white text-[var(--palette-espresso)]/80 border border-black/5'
                  }`}
                >
                  <Icon size={11} className={isCurrent ? 'text-white' : 'text-[var(--palette-aged-brass)]'} />
                  <span>{idx + 1}. {getLoc(cat.title).split(' ')[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── The Master Showcase (Desktop & Mobile) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* ── Left Column (Desktop Only): Category Selector ── */}
          <div className="hidden lg:flex lg:col-span-4 flex-col justify-start space-y-2 bg-white/70 backdrop-blur-md p-3 rounded-3xl border border-white/80 shadow-xs">
            {currentCategories.map((cat) => {
              const Icon = cat.icon;
              const isCurrent = cat.id === activeCategoryId;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategoryId(cat.id)}
                  onMouseEnter={() => setActiveCategoryId(cat.id)}
                  className={`w-full text-start p-3 rounded-2xl transition-all duration-200 flex items-center justify-between group cursor-pointer ${
                    isCurrent
                      ? 'bg-[var(--palette-espresso)] text-white shadow-sm'
                      : 'hover:bg-white/90 text-[var(--palette-espresso)]/80 hover:text-[var(--palette-espresso)]'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`p-2 rounded-xl transition-colors ${
                        isCurrent
                          ? 'bg-white/15 text-[var(--palette-warm-ivory)]'
                          : 'bg-black/5 text-[var(--palette-italian-red)] group-hover:bg-[var(--palette-italian-red)]/10'
                      }`}
                    >
                      <Icon size={16} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-serif text-sm font-bold truncate leading-tight">
                        {getLoc(cat.title)}
                      </h3>
                      <p
                        className={`text-[11px] truncate mt-0.5 ${
                          isCurrent ? 'text-white/70' : 'text-[var(--palette-espresso)]/55'
                        }`}
                      >
                        {getLoc(cat.badge)}
                      </p>
                    </div>
                  </div>

                  <ArrowRight
                    size={14}
                    className={`shrink-0 transition-transform duration-200 ${
                      isCurrent
                        ? 'opacity-100 translate-x-0 rtl:-translate-x-0 text-[var(--palette-warm-ivory)]'
                        : 'opacity-0 -translate-x-1 rtl:translate-x-1 group-hover:opacity-60'
                    } ${isRtl ? 'rotate-180' : ''}`}
                  />
                </button>
              );
            })}
          </div>

          {/* ── Right Column (or Mobile Main Card): The Clean Split Showcase ── */}
          <div className="lg:col-span-8">
            <article className="bg-white rounded-3xl overflow-hidden border border-black/8 shadow-md transition-all duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">
                {/* ── Pure, Completely Clean, Unobstructed Photograph ── */}
                <div className="relative h-56 sm:h-64 md:h-full min-h-[220px] md:min-h-[400px] overflow-hidden bg-stone-100">
                  <img
                    key={activeCategory.image}
                    src={activeCategory.image}
                    alt={getLoc(activeCategory.title)}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle Badge Tag in Corner (Does NOT cover the food) */}
                  <div className="absolute top-3 start-3 z-10">
                    <span className="bg-black/60 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-xs">
                      {getLoc(activeCategory.badge)}
                    </span>
                  </div>
                </div>

                {/* ── Clean Information Panel (No text over the photo) ── */}
                <div className="p-5 sm:p-6 lg:p-7 flex flex-col justify-between space-y-4">
                  {/* Title & Tagline */}
                  <div className="space-y-1.5">
                    <span className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-[var(--palette-italian-red)] block">
                      {activeMode === 'food'
                        ? locale === 'it'
                          ? 'Materia Prima & Cucina'
                          : locale === 'ar'
                          ? 'جودة المطبخ والتراث'
                          : 'Artisanal Craft & Provenance'
                        : locale === 'it'
                        ? 'Cantina Selezionata'
                        : locale === 'ar'
                        ? 'مختارات القبو الفاخرة'
                        : 'Curated Cellar Selection'}
                    </span>

                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[var(--palette-espresso)] leading-snug">
                      {getLoc(activeCategory.title)}
                    </h3>

                    <p className="text-xs sm:text-sm text-[var(--palette-espresso)]/75 leading-relaxed font-light">
                      {getLoc(activeCategory.tagline)}
                    </p>
                  </div>

                  {/* Clean Dishes/Drinks Highlight List */}
                  <div className="bg-[var(--palette-stone-beige-light)]/40 rounded-2xl p-3 sm:p-3.5 border border-black/5 space-y-2">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--palette-espresso)]/80 block">
                      {locale === 'it'
                        ? 'Specialità in Evidenza:'
                        : locale === 'ar'
                        ? 'أبرز الأصناف في هذا القسم:'
                        : 'Featured Selections:'}
                    </span>

                    <div className="space-y-1.5">
                      {activeCategory.dishes.map((dish, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between gap-2 py-1 border-b border-black/5 last:border-0 text-xs"
                        >
                          <span className="text-[var(--palette-espresso)] font-medium truncate">
                            {getLoc(dish.name)}
                          </span>
                          <span className="font-serif font-bold text-[var(--palette-italian-red)] shrink-0">
                            {dish.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Link Button */}
                  <div className="pt-2 flex items-center justify-between border-t border-black/5">
                    <span className="text-[11px] text-[var(--palette-espresso)]/60 hidden sm:inline">
                      {activeMode === 'food'
                        ? locale === 'it'
                          ? 'Pranzo & Cena'
                          : locale === 'ar'
                          ? 'للغداء والعشاء'
                          : 'Lunch & Dinner'
                        : locale === 'it'
                        ? 'Servizio Sommelier'
                        : locale === 'ar'
                        ? 'خدمة الخبير المعتمد'
                        : 'Sommelier Service'}
                    </span>

                    <Link
                      href={targetMenuUrl}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[var(--palette-espresso)] hover:bg-black text-[var(--palette-warm-ivory)] text-xs font-bold transition-all shadow-xs group/btn ms-auto sm:ms-0"
                    >
                      <span>
                        {activeMode === 'food'
                          ? locale === 'it'
                            ? 'Esplora la Sezione'
                            : locale === 'ar'
                            ? 'تصفح هذا القسم'
                            : 'Explore Chapter'
                          : locale === 'it'
                          ? 'Vedi Tutti i Vini'
                          : locale === 'ar'
                          ? 'تصفح قائمة المشروبات'
                          : 'Explore Cellar'}
                      </span>
                      <ArrowRight
                        size={13}
                        className={`transition-transform duration-200 group-hover/btn:translate-x-1 ${
                          isRtl ? 'rotate-180 group-hover/btn:-translate-x-1' : ''
                        }`}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* ── Section Footer CTA ── */}
        <div className="text-center mt-7 sm:mt-9">
          <Link
            href="/menu"
            className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[var(--palette-italian-red)] hover:bg-[var(--palette-italian-red-dark)] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-300"
          >
            <span>{translations.viewMenu}</span>
            <ArrowRight
              size={14}
              className={`transition-transform duration-300 group-hover:translate-x-1 ${
                isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''
              }`}
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
