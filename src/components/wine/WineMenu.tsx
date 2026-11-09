'use client';

import { useState } from 'react';
import type { Locale } from '@/i18n/routing';
import { getLocalized, type Drink } from '@/data/types';
import { getCategoryData } from '@/data/menu/menuCategories';
import { DrinkRowItem } from '@/components/menu/DrinkRowItem';
import { DrinkLightboxModal } from './DrinkLightboxModal';

const sections = (['carta-vini', 'bevande'] as const).flatMap((slug) => {
  const data = getCategoryData(slug);
  return data.kind === 'drink' ? data.subSections : [];
});

export function WineMenu({ locale }: { locale: Locale }) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [activeDrink, setActiveDrink] = useState<Drink | null>(null);

  return (
    <div className="max-w-4xl mx-auto space-y-8 sm:space-y-10">
      <h1 className="sr-only">{locale === 'ar' ? 'قائمة المشروبات' : locale === 'it' ? 'Vini e Bevande' : 'Wines and Drinks'}</h1>
      {sections.map((section) => (
        <section key={section.id} id={section.id} aria-labelledby={`${section.id}-title`} className="scroll-mt-28">
          <h2 id={`${section.id}-title`} className="mb-3 font-serif text-base sm:text-lg font-bold uppercase tracking-[0.1em] text-[var(--palette-italian-red)]">
            {getLocalized(section.title, locale)}
          </h2>
          <div className="border-t border-black/[0.08]">
            {section.drinks.map((drink) => (
              <DrinkRowItem
                key={drink.id}
                drink={drink}
                locale={locale}
                isExpanded={expandedId === drink.id}
                onToggle={() => setExpandedId((current) => current === drink.id ? null : drink.id)}
                onOpenLightbox={setActiveDrink}
              />
            ))}
          </div>
        </section>
      ))}
      <DrinkLightboxModal drink={activeDrink} locale={locale} onClose={() => setActiveDrink(null)} />
    </div>
  );
}
