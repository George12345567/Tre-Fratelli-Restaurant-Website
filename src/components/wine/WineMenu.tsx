'use client';

import { useState } from 'react';
import Image from 'next/image';
import { BookOpen, ShieldAlert, ArrowRight } from 'lucide-react';
import type { Locale } from '@/i18n/routing';
import { Link } from '@/i18n/navigation';
import { getLocalized, type Drink, type LocalizedText } from '@/data/types';
import { getCategoryData, getMenuCategoryConfig } from '@/data/menu/menuCategories';
import { DrinkRowItem } from '@/components/menu/DrinkRowItem';
import { MenuPdfViewerModal } from '@/components/menu/MenuPdfViewerModal';
import { MenuAllergenLegendModal } from '@/components/menu/MenuAllergenLegendModal';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { DrinkLightboxModal } from './DrinkLightboxModal';

const copy = {
  title: { it: 'Un calice, e il tempo di scegliere.', en: 'A glass, and a moment to choose.', ar: 'على مهلكم، اختاروا ما تحبّون.' },
  label: { it: 'La Cantina & Il Bar', en: 'The Cellar & The Bar', ar: 'القبو والمشروبات' },
  intro: { it: 'Bollicine per cominciare, un rosso da accompagnare alla cena o una birra tra amici. Sfoglia la carta: qui trovi ogni proposta, con il suo prezzo.', en: 'Bubbles to start, a red with dinner or a beer with friends. Take a look through the list: every choice and its price, all in one place.', ar: 'نبيذ فوار للبداية، أو أحمر مع العشاء، أو بيرة مع الأصدقاء. تصفحوا القائمة؛ كل الاختيارات وأسعارها هنا، في مكان واحد.' },
  photo: { it: 'Bottiglie e calici nella cantina', en: 'Bottles and glasses in the wine cellar', ar: 'زجاجات وكؤوس في قبو النبيذ' },
  pdf: { it: 'Menù PDF', en: 'PDF menu', ar: 'القائمة PDF' },
  allergens: { it: 'Allergeni', en: 'Allergens', ar: 'مسببات الحساسية' },
  navigate: { it: 'Sfoglia la carta', en: 'Browse the list', ar: 'تصفحوا الأقسام' },
  food: { it: 'E da mangiare?', en: 'And something to eat?', ar: 'وماذا نختار للأكل؟' },
  foodLink: { it: 'Esplora il menù della cucina', en: 'Explore the food menu', ar: 'اكتشفوا قائمة الطعام' },
} satisfies Record<string, LocalizedText>;

// Read the same category/subsection data as the food menu's drink pages.
const chapters = (['carta-vini', 'bevande'] as const).map((slug) => ({
  config: getMenuCategoryConfig(slug)!,
  data: getCategoryData(slug),
}));

export function WineMenu({ locale }: { locale: Locale }) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [activeDrink, setActiveDrink] = useState<Drink | null>(null);
  const [pdfOpen, setPdfOpen] = useState(false);
  const [allergensOpen, setAllergensOpen] = useState(false);
  const text = (key: keyof typeof copy) => getLocalized(copy[key], locale);

  return (
    <div className="space-y-10 sm:space-y-16">
      <header className="grid md:grid-cols-12 gap-7 sm:gap-10 lg:gap-16 items-center">
        <ScrollReveal className="md:col-span-7">
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.18em] font-semibold text-[var(--palette-aged-brass)]">Tre Fratelli · {text('label')}</p>
          <h1 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight text-balance text-[var(--palette-espresso)]">{text('title')}</h1>
          <span aria-hidden="true" className="block mt-5 w-12 h-px bg-[var(--palette-italian-red)]" />
          <p className="mt-5 max-w-xl font-serif italic text-sm sm:text-base leading-relaxed text-[var(--palette-espresso)]/75">{text('intro')}</p>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
            <button type="button" onClick={() => setPdfOpen(true)} className="inline-flex min-h-11 items-center gap-2 text-xs sm:text-sm text-[var(--palette-italian-red)] underline underline-offset-8 decoration-[var(--palette-aged-brass)]/40"><BookOpen size={14} aria-hidden="true" />{text('pdf')}</button>
            <button type="button" onClick={() => setAllergensOpen(true)} className="inline-flex min-h-11 items-center gap-2 text-xs sm:text-sm text-[var(--palette-espresso)]/75 underline underline-offset-8 decoration-[var(--palette-aged-brass)]/40"><ShieldAlert size={14} aria-hidden="true" />{text('allergens')}</button>
          </div>
        </ScrollReveal>
        <ScrollReveal image className="md:col-span-5 overflow-hidden">
          <div className="relative aspect-[16/8] md:aspect-[4/5] bg-[var(--palette-stone-beige)]">
            <Image src="/images/wine/wine-cellar-tre-fratelli.jpg" alt={text('photo')} fill sizes="(max-width: 768px) 100vw, 460px" preload className="object-cover" />
          </div>
        </ScrollReveal>
      </header>

      <nav aria-label={text('navigate')} className="border-y border-[var(--palette-aged-brass)]/25 py-3 flex flex-wrap gap-x-6 gap-y-1 text-xs sm:text-sm">
        {chapters.flatMap(({ data }) => data.kind === 'drink' ? data.subSections.map((sub) => (
          <a key={sub.id} href={`#${sub.id}`} className="inline-flex min-h-11 items-center text-[var(--palette-espresso)]/75 hover:text-[var(--palette-italian-red)] transition-colors">{getLocalized(sub.title, locale)}</a>
        )) : [])}
      </nav>

      {chapters.map(({ config, data }, chapterIndex) => data.kind === 'drink' && (
        <section key={config.slug} aria-labelledby={`chapter-${config.slug}`} className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-start">
          <ScrollReveal className="lg:col-span-4 lg:sticky lg:top-28">
            <span aria-hidden="true" className="font-serif text-4xl sm:text-5xl text-[var(--palette-aged-brass)]/55">0{chapterIndex + 1}</span>
            <h2 id={`chapter-${config.slug}`} className="mt-3 font-serif text-2xl sm:text-3xl font-semibold text-[var(--palette-espresso)]">{getLocalized(config.title, locale)}</h2>
            <p className="mt-3 max-w-sm text-xs sm:text-sm leading-relaxed text-[var(--palette-espresso)]/65">{getLocalized(config.subtitle, locale)}</p>
          </ScrollReveal>
          <div className="lg:col-span-8 space-y-8 sm:space-y-10">
            {data.subSections.map((sub) => (
              <section key={sub.id} id={sub.id} aria-labelledby={`${sub.id}-title`} className="scroll-mt-28">
                <ScrollReveal>
                  <h3 id={`${sub.id}-title`} className="font-serif text-base sm:text-lg font-bold uppercase tracking-[0.1em] text-[var(--palette-italian-red)]">{getLocalized(sub.title, locale)}</h3>
                  <p className="mt-1 mb-3 font-serif italic text-xs leading-relaxed text-[var(--palette-espresso)]/65">{getLocalized(sub.subtitle, locale)}</p>
                  <div className="border-t border-black/[0.08]">
                    {sub.drinks.map((drink) => (
                      <DrinkRowItem key={drink.id} drink={drink} locale={locale} isExpanded={expandedId === drink.id} onToggle={() => setExpandedId((current) => current === drink.id ? null : drink.id)} onOpenLightbox={setActiveDrink} />
                    ))}
                  </div>
                </ScrollReveal>
              </section>
            ))}
          </div>
        </section>
      ))}

      <footer className="border-t border-[var(--palette-aged-brass)]/25 pt-7 flex flex-wrap items-center justify-between gap-3">
        <p className="font-serif text-lg sm:text-xl text-[var(--palette-espresso)]">{text('food')}</p>
        <Link href="/menu" className="inline-flex min-h-11 items-center gap-3 text-sm font-semibold text-[var(--palette-italian-red)]">{text('foodLink')}<ArrowRight size={15} className={locale === 'ar' ? 'rotate-180' : ''} aria-hidden="true" /></Link>
      </footer>
      <DrinkLightboxModal drink={activeDrink} locale={locale} onClose={() => setActiveDrink(null)} />
      <MenuPdfViewerModal isOpen={pdfOpen} locale={locale} onClose={() => setPdfOpen(false)} />
      <MenuAllergenLegendModal isOpen={allergensOpen} locale={locale} onClose={() => setAllergensOpen(false)} />
    </div>
  );
}
