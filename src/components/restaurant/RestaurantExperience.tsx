import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';
import { getLocalized } from '@/data/types';
import { restaurantEditorial } from '@/data/restaurantEditorial';
import { culinarySpecialties, hospitalityAmenities } from '@/data/restaurantDetails';
import { RestaurantReveal } from './RestaurantReveal';
import { RestaurantVisitSection } from './RestaurantVisitSection';

export function RestaurantExperience({ locale }: { locale: Locale }) {
  const text = (key: keyof typeof restaurantEditorial) => getLocalized(restaurantEditorial[key], locale);
  const arrow = locale === 'ar' ? 'rotate-180' : '';

  return (
    <>
      <section id="experience" aria-labelledby="restaurant-kitchen-title" className="scroll-mt-28 bg-[var(--palette-stone-beige)]/15 px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <RestaurantReveal className="max-w-2xl">
            <p className="text-[10px] sm:text-xs tracking-widest uppercase text-[var(--palette-aged-brass)]">{text('kitchenLabel')}</p>
            <h2 id="restaurant-kitchen-title" className="mt-4 text-3xl sm:text-5xl font-serif leading-tight">{text('kitchenTitle')}</h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[var(--palette-espresso)]/70">{text('kitchenIntro')}</p>
          </RestaurantReveal>
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mt-8 sm:mt-12 items-start">
            <RestaurantReveal image className="lg:col-span-5 lg:sticky lg:top-28 overflow-hidden">
              <div className="relative aspect-[4/3] lg:aspect-[4/5]">
                <Image src="/images/dishes/pizza/pizza-margherita-crudo-cornicione.webp" alt={getLocalized(culinarySpecialties[0].title, locale)} fill sizes="(max-width: 1024px) 100vw, 480px" className="object-cover" />
              </div>
            </RestaurantReveal>
            <ol className="lg:col-span-7 border-t border-[var(--palette-aged-brass)]/25">
              {culinarySpecialties.map((item, index) => (
                <li key={item.id} className="py-6 sm:py-7 border-b border-[var(--palette-aged-brass)]/25">
                  <RestaurantReveal>
                    <div className="flex gap-4 sm:gap-6 items-start">
                      <span aria-hidden="true" className="text-[var(--palette-aged-brass)] font-serif text-sm pt-1">0{index + 1}</span>
                      <div>
                        <h3 className="font-serif text-xl sm:text-2xl leading-snug">{getLocalized(item.title, locale)}</h3>
                        <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[var(--palette-espresso)]/70">{getLocalized(item.description, locale)}</p>
                      </div>
                    </div>
                  </RestaurantReveal>
                </li>
              ))}
              <li className="pt-5">
                <Link href="/menu" className="inline-flex min-h-11 items-center gap-3 text-sm font-semibold text-[var(--palette-italian-red)] hover:underline underline-offset-8">
                  {text('menu')}<ArrowRight size={16} className={arrow} aria-hidden="true" />
                </Link>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section aria-labelledby="restaurant-hospitality-title" className="px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-8 lg:gap-20">
          <RestaurantReveal className="lg:col-span-5">
            <p className="text-[10px] sm:text-xs tracking-widest uppercase text-[var(--palette-aged-brass)]">{text('hospitalityLabel')}</p>
            <h2 id="restaurant-hospitality-title" className="mt-4 font-serif text-3xl sm:text-4xl leading-tight text-balance">{text('hospitalityTitle')}</h2>
            <p className="mt-5 text-sm leading-relaxed text-[var(--palette-espresso)]/70">{text('hospitalityIntro')}</p>
          </RestaurantReveal>
          <ul className="lg:col-span-7">
            {hospitalityAmenities.map((item) => (
              <li key={item.id} className="border-t border-[var(--palette-aged-brass)]/25 py-5 first:pt-0 first:border-t-0">
                <RestaurantReveal>
                  <h3 className="text-base sm:text-lg font-serif">{getLocalized(item.title, locale)}</h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[var(--palette-espresso)]/70">{getLocalized(item.description, locale)}</p>
                </RestaurantReveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <RestaurantVisitSection locale={locale} />
    </>
  );
}
