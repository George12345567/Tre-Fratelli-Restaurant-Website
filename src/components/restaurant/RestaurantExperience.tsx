import Image from 'next/image';
import { ArrowRight, MapPin, Phone, ExternalLink } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';
import { getLocalized } from '@/data/types';
import { restaurantEditorial } from '@/data/restaurantEditorial';
import { culinarySpecialties, hospitalityAmenities, restaurantOfficialInfo, sectionTwoContent } from '@/data/restaurantDetails';
import { RestaurantReveal } from './RestaurantReveal';

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

      <section id="visit" aria-labelledby="restaurant-visit-title" className="scroll-mt-28 px-4 sm:px-6 lg:px-8 py-12 sm:py-20 bg-[var(--palette-espresso)] text-[var(--palette-warm-ivory)]">
        <div className="max-w-6xl mx-auto">
          <RestaurantReveal>
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-20">
              <div className="lg:col-span-6">
                <p className="text-[10px] sm:text-xs uppercase tracking-widest text-amber-200/70">{text('visitLabel')}</p>
                <h2 id="restaurant-visit-title" className="mt-4 font-serif text-3xl sm:text-5xl leading-tight text-balance">{text('visitTitle')}</h2>
                <p className="mt-5 text-xs sm:text-sm leading-relaxed text-stone-300 max-w-md">{getLocalized(sectionTwoContent.bookingAdvisory, locale)}</p>
                <Link href="/location" className="inline-flex mt-6 min-h-11 items-center gap-3 bg-[var(--palette-warm-ivory)] text-[var(--palette-espresso)] px-6 py-3 rounded-full text-sm font-semibold hover:bg-white transition-colors">
                  {text('reserve')}<ArrowRight size={16} className={arrow} aria-hidden="true" />
                </Link>
              </div>
              <div className="lg:col-span-6 lg:pt-2 space-y-7">
                <div>
                  <p className="text-xs text-stone-400">{text('directions')}</p>
                  <address className="mt-3 text-sm leading-relaxed not-italic"><bdi>{restaurantOfficialInfo.address}</bdi></address>
                  <a href={restaurantOfficialInfo.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 text-sm underline underline-offset-4 decoration-stone-500 hover:decoration-white">
                    <MapPin size={14} aria-hidden="true" />{text('directions')}<ExternalLink size={12} aria-hidden="true" />
                  </a>
                </div>
                <div className="border-t border-white/15 pt-5">
                  <p className="text-xs text-stone-400">{text('phoneLabel')}</p>
                  <a href={`tel:${restaurantOfficialInfo.phone}`} className="inline-flex min-h-11 items-center gap-3 mt-1 font-serif text-xl sm:text-2xl hover:text-amber-200 transition-colors">
                    <Phone size={17} aria-hidden="true" /><bdi dir="ltr">{restaurantOfficialInfo.phoneDisplay}</bdi>
                  </a>
                </div>
              </div>
            </div>
          </RestaurantReveal>
          <div className="mt-10 sm:mt-14 pt-5 border-t border-white/15 flex flex-wrap items-center justify-between gap-x-8 gap-y-3 text-xs text-stone-300">
            <span>{text('socialLabel')}</span>
            <div className="flex gap-6">
              <a href={restaurantOfficialInfo.instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 hover:text-white">Instagram<ExternalLink size={11} aria-hidden="true" /></a>
              <a href={restaurantOfficialInfo.facebookUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 hover:text-white">Facebook<ExternalLink size={11} aria-hidden="true" /></a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
