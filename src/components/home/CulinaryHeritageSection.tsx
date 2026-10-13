'use client';

import { useState, useRef } from 'react';
import { Utensils, Flame, Wine, ArrowRight, Sun, CalendarDays } from 'lucide-react';
import { Link } from '@/i18n/navigation';

interface Props {
  locale: string;
  isRtl: boolean;
  translations: {
    ourPhilosophy: string;
    philosophyTitle: string;
    philosophyCopy: string;
    pastaStory: string;
    pizzeriaHighlight: string;
    winePairings: string;
    exploreRestaurant: string;
    pillar1Copy: string;
    pillar2Copy: string;
    pillar3Copy: string;
  };
}

export function CulinaryHeritageSection({
  locale,
  isRtl,
  translations,
}: Props) {
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const craftSpaces = [
    {
      id: 'marco-pasta',
      brother: 'Marco Fratelli',
      role: locale === 'it' ? 'Il Pastaio' : locale === 'ar' ? 'صانع الباستا الحرفي' : 'The Pasta Artisan',
      spaceName:
        locale === 'it'
          ? 'La Spianatoia & Il Laboratorio'
          : locale === 'ar'
          ? 'ركن وعجن الباستا الصباحي'
          : 'The Morning Pasta Counter',
      craftTitle: translations.pastaStory,
      quote:
        locale === 'it'
          ? 'L anima della pasta nasce nella ruvidità del bronzo e nel calore delle mani.'
          : locale === 'ar'
          ? 'روح الباستا الحقيقية تولد في خشونة البرونز ودفء الأيدي التي تعجنها.'
          : 'The soul of fresh pasta is born in bronze friction and the warmth of patient hands.',
      image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&q=80&w=1000',
      icon: Utensils,
      badgeBg: 'bg-[var(--palette-aged-brass)]/90',
      pills: [
        locale === 'it' ? 'Semola 100% Italiana' : locale === 'ar' ? 'قمح إيطالي 100%' : '100% Italian Wheat',
        locale === 'it' ? 'Trafilatura al Bronzo' : locale === 'ar' ? 'سحب بقوالب البرونز' : 'Bronze-Extruded',
        locale === 'it' ? 'Tirata a Mano Ogni Giorno' : locale === 'ar' ? 'عجن يدوي يومياً' : 'Hand-Rolled Daily',
      ],
      link: '/restaurant',
    },
    {
      id: 'matteo-fire',
      brother: 'Matteo Fratelli',
      role: locale === 'it' ? 'Il Mastro Fornaio' : locale === 'ar' ? 'سيد اللهب وفرن الحطب' : 'Master of the Hearth',
      spaceName:
        locale === 'it'
          ? 'Il Fuoco del Forno a Legna'
          : locale === 'ar'
          ? 'فرن الحطب البركاني المتقد'
          : 'The Volcanic Beechwood Hearth',
      craftTitle: translations.pizzeriaHighlight,
      quote:
        locale === 'it'
          ? 'Il fuoco non è solo calore: è respiro, tempo e legno secco di faggio.'
          : locale === 'ar'
          ? 'النار ليست مجرد حرارة، بل هي صبر وتوقيت وخشب زان متقد.'
          : 'Fire is not merely heat; it is breath, patience, and seasoned beechwood embers.',
      image: 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&q=80&w=1000',
      icon: Flame,
      badgeBg: 'bg-[var(--palette-italian-red)]/90',
      pills: [
        locale === 'it' ? 'Forno a Legna a 450°C' : locale === 'ar' ? 'فرن حطب 450 مئوية' : '450°C Beechwood Oven',
        locale === 'it' ? '48h Lievito Madre' : locale === 'ar' ? 'تخمير طبيعي 48 ساعة' : '48h Slow Fermentation',
        locale === 'it' ? 'Cornicione Alveolato' : locale === 'ar' ? 'أطراف مقرمشة هوائية' : 'Airy Neapolitan Crust',
      ],
      link: '/pizzeria',
    },
    {
      id: 'luca-cellar',
      brother: 'Luca Fratelli',
      role: locale === 'it' ? 'Il Sommelier' : locale === 'ar' ? 'الساقي وخبير القبو' : 'The Sommelier',
      spaceName:
        locale === 'it'
          ? 'La Sala Principale delle Botti'
          : locale === 'ar'
          ? 'قاعة البراميل الأثرية والقبو'
          : 'The Historic Cellar & Vault Hall',
      craftTitle: translations.winePairings,
      quote:
        locale === 'it'
          ? 'Un grande vino non accompagna il piatto: ne risveglia la poesia nascosta.'
          : locale === 'ar'
          ? 'النبيذ العظيم لا يرافق الطبق فحسب، بل يوقظ أسراره ونكهاته الخفية.'
          : 'A rare wine does not merely accompany food; it unlocks its hidden terroir poetry.',
      image: '/images/hero/restaurant-table-ambiance.webp',
      icon: Wine,
      badgeBg: 'bg-[var(--palette-olive-green)]/90',
      pills: [
        locale === 'it' ? '350+ Etichette Italiane' : locale === 'ar' ? '350+ صنف إيطالي معتمد' : '350+ Curated Labels',
        locale === 'it' ? 'Vitigni Autoctoni Rari' : locale === 'ar' ? 'سلالات أعناب نادرة' : 'Indigenous Varietals',
        locale === 'it' ? 'Abbinamenti Sartoriali' : locale === 'ar' ? 'مواءمة خاصة لكل طبق' : 'Artisanal Pairings',
      ],
      link: '/wine-drinks',
    },
  ];

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const scrollLeft = Math.abs(container.scrollLeft);
    const itemWidth = container.offsetWidth * 0.84;
    if (itemWidth > 0) {
      const index = Math.round(scrollLeft / itemWidth);
      setActiveSlide(Math.min(Math.max(index, 0), craftSpaces.length - 1));
    }
  };

  const scrollToIndex = (index: number) => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const itemWidth = container.offsetWidth * 0.84;
    const targetScroll = isRtl ? -index * itemWidth : index * itemWidth;
    container.scrollTo({ left: targetScroll, behavior: 'smooth' });
    setActiveSlide(index);
  };

  return (
    <section className="relative pt-6 sm:pt-10 pb-16 sm:pb-20 overflow-hidden bg-gradient-to-b from-transparent via-[var(--palette-stone-beige-light)]/25 to-transparent">
      {/* ── Soft Ambient Warmth ── */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(176,138,87,0.09),transparent_70%)] pointer-events-none blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-3">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-[var(--palette-aged-brass)]/40" aria-hidden="true" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[var(--palette-italian-red)]">
              {locale === 'it'
                ? 'Artigiani & Spazi di Famiglia'
                : locale === 'ar'
                ? 'حِرف الإخوة وأجواء المطعم'
                : 'Living Craft & Authentic Spaces'}
            </span>
            <span className="w-8 h-px bg-[var(--palette-aged-brass)]/40" aria-hidden="true" />
          </div>

          {/* Main Title */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[var(--palette-espresso)] leading-[1.15]">
            {locale === 'it'
              ? "L'Anima di Tre Fratelli"
              : locale === 'ar'
              ? 'روح تري فراتيلي: الحرفة والمكان'
              : 'The Soul of Tre Fratelli'}
          </h2>

          {/* Concise Poetic Narrative */}
          <p className="font-serif italic text-base sm:text-lg text-[var(--palette-espresso)]/85 max-w-2xl mx-auto leading-relaxed">
            {locale === 'it'
              ? 'Dalle mani di Marco alla fiamma di Matteo e alla cantina di Luca: tre mestieri che si fondono nelle nostre sale storiche.'
              : locale === 'ar'
              ? 'من خيوط باستا ماركو إلى لهب ماتيو وقبو لوكا العتيق: ثلاثة حِرف تتناغم داخل قاعاتنا التاريخية.'
              : 'From Marco’s pasta hands to Matteo’s fire and Luca’s cellar: three crafts living inside our historic halls.'}
          </p>
        </div>

        {/* ── 3 Craft & Atmosphere Pillars (Mobile Carousel / Desktop 3-Cols) ── */}
        <div className="relative">
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 sm:gap-6 px-4 sm:px-0 -mx-4 sm:mx-0 sm:grid sm:grid-cols-3 pb-3 sm:pb-0 touch-pan-x"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {craftSpaces.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.id}
                  className="group relative w-[84vw] max-w-[340px] shrink-0 snap-center sm:w-auto sm:max-w-none sm:shrink sm:snap-align-none h-[470px] sm:h-[490px] lg:h-[510px] rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between p-5 border border-black/10 select-none"
                >
                  {/* Full-bleed Space & Craft Image */}
                  <img
                    src={item.image}
                    alt={`${item.brother} - ${item.spaceName}`}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                  {/* Dual Dark Gradient Vignette for clear text contrast */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/45 to-black/35 pointer-events-none transition-opacity duration-300"
                    aria-hidden="true"
                  />

                  {/* Top Bar: Brother Badge & Role */}
                  <div className="relative z-10 flex items-center justify-between gap-2">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${item.badgeBg} backdrop-blur-md text-white text-[11px] font-semibold tracking-wide shadow-xs`}>
                      <Icon size={12} aria-hidden="true" />
                      <span>{item.brother}</span>
                    </span>
                    <span className="bg-black/45 backdrop-blur-md border border-white/20 text-white/90 px-2.5 py-0.5 rounded-full text-[11px] font-medium shadow-xs">
                      {item.role}
                    </span>
                  </div>

                  {/* Bottom Content: Space Name, Quote & Craft Pills */}
                  <div className="relative z-10 space-y-2.5">
                    {/* Space Name */}
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--palette-warm-ivory)]/90">
                        {item.spaceName}
                      </span>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-[var(--palette-warm-ivory)] transition-colors leading-tight mt-0.5">
                        {item.craftTitle}
                      </h3>
                    </div>

                    {/* Poetic Quote */}
                    <p className="font-serif italic text-xs sm:text-[13px] text-white/85 leading-relaxed line-clamp-2">
                      &ldquo;{item.quote}&rdquo;
                    </p>

                    {/* Craft Pills Cloud */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {item.pills.map((pill, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded-full bg-white/15 backdrop-blur-md border border-white/15 text-[10px] text-white/90 font-medium"
                        >
                          {pill}
                        </span>
                      ))}
                    </div>

                    {/* Link */}
                    <div className="pt-2 border-t border-white/15 flex items-center justify-end">
                      <Link
                        href={item.link}
                        className="inline-flex items-center gap-1 font-semibold text-xs text-white hover:text-[var(--palette-warm-ivory)] transition-colors group/link"
                      >
                        <span>{translations.exploreRestaurant}</span>
                        <ArrowRight
                          size={12}
                          className={`transition-transform duration-200 group-hover/link:translate-x-0.5 ${
                            isRtl ? 'rotate-180 group-hover/link:-translate-x-0.5' : ''
                          }`}
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Mobile Dots */}
          <div className="flex sm:hidden items-center justify-center gap-1.5 pt-3">
            {craftSpaces.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollToIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeSlide === i
                    ? 'w-6 bg-[var(--palette-italian-red)]'
                    : 'w-1.5 bg-black/20'
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ── 4th Space: The Summer Garden Courtyard Panorama ── */}
        <div className="mt-8 sm:mt-10 relative rounded-3xl overflow-hidden shadow-lg border border-black/10 group">
          <div className="relative aspect-[16/8] sm:aspect-[21/8] lg:aspect-[28/9] min-h-[220px] w-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1400"
              alt={locale === 'it' ? 'La Corte Giardino Estiva' : locale === 'ar' ? 'شرفة الحديقة الصيفية' : 'The Courtyard Garden Terrace'}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/45 to-black/30 pointer-events-none" />

            {/* Content overlay inside courtyard banner */}
            <div className="absolute inset-0 p-5 sm:p-7 lg:p-8 flex flex-col justify-between z-10">
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/25 text-white text-[11px] font-semibold tracking-wider uppercase shadow-xs">
                  <Sun size={12} className="text-amber-300" aria-hidden="true" />
                  <span>
                    {locale === 'it'
                      ? 'Lo Spazio Aperto'
                      : locale === 'ar'
                      ? 'الفناء الصيفي المفتوح'
                      : 'The Open-Air Garden'}
                  </span>
                </span>
                <span className="text-[11px] text-white/75 font-medium hidden sm:inline">
                  {locale === 'it' ? 'Cene sotto le stelle' : locale === 'ar' ? 'سهرات تحت النجوم' : 'Dining Under the Stars'}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div className="space-y-1.5 max-w-xl">
                  <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight">
                    {locale === 'it'
                      ? 'La Corte Giardino Estiva'
                      : locale === 'ar'
                      ? 'شرفة الحديقة والفناء الصيفي'
                      : 'The Courtyard Garden Terrace'}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-light">
                    {locale === 'it'
                      ? 'Un oasi riservata tra piante di limone e gelsomino dove le creazioni dei tre fratelli si uniscono per cene indimenticabili sotto le stelle.'
                      : locale === 'ar'
                      ? 'واحة هادئة محاطة بأشجار الليمون والياسمين، تلتقي فيها إبداعات الإخوة الثلاثة لتستمتعوا بعشاء ساحر في الهواء الطلق.'
                      : 'A private retreat framed by fragrant lemon trees and jasmine, where all culinary crafts unite beneath summer stars.'}
                  </p>
                </div>

                <div className="flex items-center gap-2.5 shrink-0">
                  <Link
                    href="/location"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--palette-warm-ivory)] hover:bg-white text-[var(--palette-espresso)] text-xs font-bold transition-all shadow-md group/btn"
                  >
                    <CalendarDays size={14} aria-hidden="true" />
                    <span>{translations.exploreRestaurant}</span>
                    <ArrowRight
                      size={12}
                      className={`transition-transform duration-200 group-hover/btn:translate-x-0.5 ${
                        isRtl ? 'rotate-180 group-hover/btn:-translate-x-0.5' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
