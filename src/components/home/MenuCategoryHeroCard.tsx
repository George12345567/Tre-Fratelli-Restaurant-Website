'use client';

import { ArrowRight, BookOpen, Sparkles } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import type { HomeCategoryItem } from '@/data/homeCategoryShowcase';

interface MenuCategoryHeroCardProps {
  category: HomeCategoryItem;
  locale: string;
  isRtl: boolean;
  activeMode: 'food' | 'wine';
  onOpenPdfModal?: () => void;
}

export function MenuCategoryHeroCard({
  category,
  locale,
  isRtl,
  activeMode,
  onOpenPdfModal,
}: MenuCategoryHeroCardProps) {
  const getLoc = (obj: { it: string; en: string; ar: string }) => {
    return locale === 'ar' ? obj.ar : locale === 'en' ? obj.en : obj.it;
  };

  return (
    <article className="bg-white rounded-3xl overflow-hidden border border-black/8 shadow-xl transition-all duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
        {/* ── Visual Media Column (Left) ── */}
        <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-auto min-h-[260px] lg:min-h-[440px] overflow-hidden bg-stone-100 group">
          <img
            key={category.image}
            src={category.image}
            alt={getLoc(category.title)}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />

          {/* Luxury Ambient Gradient Overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none"
            aria-hidden="true"
          />

          {/* Top Corner Badges */}
          <div className="absolute top-4 start-4 end-4 flex items-center justify-between pointer-events-none gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase bg-black/65 backdrop-blur-md text-white border border-white/20 shadow-sm">
              <Sparkles size={12} className="text-[var(--palette-aged-brass)]" />
              <span>{getLoc(category.badge)}</span>
            </span>

            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[var(--palette-italian-red)]/90 backdrop-blur-md text-white shadow-xs">
              {getLoc(category.craftTag)}
            </span>
          </div>

          {/* Bottom Title Pill for Quick Confirmation */}
          <div className="absolute bottom-4 start-4 end-4 pointer-events-none">
            <span className="text-[11px] font-semibold tracking-wider uppercase text-stone-300 block mb-0.5">
              {activeMode === 'food'
                ? locale === 'it'
                  ? 'Specialità della Cucina'
                  : locale === 'ar'
                  ? 'من إبداعات المطبخ'
                  : 'Kitchen Special'
                : locale === 'it'
                ? 'Dalla Nostra Cantina'
                : locale === 'ar'
                ? 'من قبو المشروبات'
                : 'From the Cellar'}
            </span>
            <p className="font-serif text-lg sm:text-xl font-bold text-white drop-shadow-md">
              {getLoc(category.subtitle)}
            </p>
          </div>
        </div>

        {/* ── Information & Specialties Column (Right) ── */}
        <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-5 bg-gradient-to-br from-white via-white to-[var(--palette-warm-ivory)]/30">
          {/* Header Info */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-4 h-0.5 bg-[var(--palette-aged-brass)]" aria-hidden="true" />
              <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-[var(--palette-italian-red)]">
                {activeMode === 'food'
                  ? locale === 'it'
                    ? 'Autenticità & Materia Prima'
                    : locale === 'ar'
                    ? 'أصالة المكونات الإيطالية'
                    : 'Authentic Provenance'
                  : locale === 'it'
                  ? 'Selezione D.O.C.G. & Territorio'
                  : locale === 'ar'
                  ? 'أعرق المزارع الإيطالية'
                  : 'Curated Italian Terroirs'}
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--palette-espresso)] tracking-tight">
              {getLoc(category.title)}
            </h3>

            <p className="text-xs sm:text-sm text-[var(--palette-espresso)]/80 leading-relaxed font-light">
              {getLoc(category.tagline)}
            </p>
          </div>

          {/* Featured Dishes List */}
          <div className="space-y-2 bg-[var(--palette-stone-beige-light)]/35 rounded-2xl p-4 sm:p-4.5 border border-black/5">
            <div className="flex items-center justify-between pb-1.5 border-b border-black/8">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--palette-espresso)]/75">
                {locale === 'it'
                  ? 'Specialità in Evidenza:'
                  : locale === 'ar'
                  ? 'أبرز الأطباق والمختارات:'
                  : 'Signature Selections:'}
              </span>
              <span className="text-[10px] text-[var(--palette-aged-brass)] font-semibold">
                {locale === 'it'
                  ? 'Menu 3 Fratelli'
                  : locale === 'ar'
                  ? 'قائمة تري فراتيلي'
                  : 'Tre Fratelli Menu'}
              </span>
            </div>

            <div className="divide-y divide-black/5">
              {category.dishes.map((dish, idx) => (
                <div
                  key={idx}
                  className="py-2 flex items-center justify-between gap-3 text-xs sm:text-sm group/dish"
                >
                  <div className="min-w-0 space-y-0.5">
                    <p className="text-[var(--palette-espresso)] font-semibold truncate group-hover/dish:text-[var(--palette-italian-red)] transition-colors">
                      {getLoc(dish.name)}
                    </p>
                    {dish.tag && (
                      <span className="inline-block text-[10px] font-medium text-[var(--palette-aged-brass)] bg-black/5 px-2 py-0.5 rounded-full">
                        {getLoc(dish.tag)}
                      </span>
                    )}
                  </div>

                  <span className="font-serif font-bold text-[var(--palette-italian-red)] text-sm sm:text-base shrink-0">
                    {dish.price}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-t border-black/8">
            {onOpenPdfModal ? (
              <button
                type="button"
                onClick={onOpenPdfModal}
                className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-[var(--palette-espresso)]/70 hover:text-[var(--palette-espresso)] transition-colors cursor-pointer py-1"
              >
                <BookOpen size={14} className="text-[var(--palette-aged-brass)]" />
                <span>
                  {locale === 'it'
                    ? 'Sfoglia PDF Ufficiale'
                    : locale === 'ar'
                    ? 'تصفح ملف PDF الرسمي'
                    : 'Browse Official PDF'}
                </span>
              </button>
            ) : (
              <div />
            )}

            <Link
              href={category.targetAnchor}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[var(--palette-espresso)] hover:bg-black text-[var(--palette-warm-ivory)] text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all group/btn"
            >
              <span>
                {activeMode === 'food'
                  ? locale === 'it'
                    ? 'Apri Questa Sezione nel Menù'
                    : locale === 'ar'
                    ? 'عرض هذا القسم في القائمة'
                    : 'View in Full Menu'
                  : locale === 'it'
                  ? 'Esplora la Carta dei Vini'
                  : locale === 'ar'
                  ? 'عرض قائمة المشروبات'
                  : 'View Cellar List'}
              </span>
              <ArrowRight
                size={14}
                className={`transition-transform duration-200 group-hover/btn:translate-x-1 ${
                  isRtl ? 'rotate-180 group-hover/btn:-translate-x-1' : ''
                }`}
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
