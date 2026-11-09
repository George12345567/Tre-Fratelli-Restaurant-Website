import { ArrowDown, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';
import { getLocalized } from '@/data/types';
import { restaurantEditorial } from '@/data/restaurantEditorial';
import { RestaurantReveal } from './RestaurantReveal';

export function RestaurantStory({ locale }: { locale: Locale }) {
  const text = (key: keyof typeof restaurantEditorial) => getLocalized(restaurantEditorial[key], locale);
  const arrow = locale === 'ar' ? 'rotate-180' : '';

  return (
    <>
      <header className="px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 lg:pt-20">
        <div className="max-w-7xl mx-auto">
          <RestaurantReveal>
            <p className="text-[10px] sm:text-xs tracking-[0.18em] uppercase text-[var(--palette-aged-brass)] font-semibold">
              {text('eyebrow')}
            </p>
            <div className="mt-5 grid lg:grid-cols-12 gap-6 lg:gap-14 items-end">
              <h1 className="lg:col-span-7 font-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.12] tracking-tight font-medium text-balance">
                {text('headline')}
              </h1>
              <div className="lg:col-span-5">
                <p className="text-sm sm:text-base leading-relaxed text-[var(--palette-espresso)]/75 max-w-lg">
                  {text('introduction')}
                </p>
                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 items-center">
                  <Link href="/location" className="inline-flex items-center gap-3 min-h-11 px-5 py-3 bg-[var(--palette-italian-red)] text-white rounded-full text-sm font-semibold hover:bg-[var(--palette-italian-red-dark)] transition-colors">
                    {text('reserve')}<ArrowRight size={15} className={arrow} aria-hidden="true" />
                  </Link>
                  <Link href="/menu" className="inline-flex items-center min-h-11 gap-2 text-sm underline underline-offset-8 decoration-[var(--palette-aged-brass)]/50 hover:decoration-current">
                    {text('menu')}<ArrowRight size={15} className={arrow} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </RestaurantReveal>

          <figure className="mt-9 sm:mt-12">
            <div className="relative aspect-[4/3] sm:aspect-[16/7] lg:aspect-[21/8] overflow-hidden bg-[var(--palette-stone-beige)]">
              <Image src="/images/hero/restaurant-table-ambiance.webp" alt={text('tableAlt')} fill sizes="(max-width: 1280px) 100vw, 1280px" preload className="object-cover" />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
              <p className="absolute bottom-5 start-5 sm:bottom-8 sm:start-8 text-white font-serif text-xl sm:text-3xl italic">Tre Fratelli</p>
            </div>
            <figcaption className="flex justify-between items-center gap-4 mt-3 text-[10px] sm:text-xs text-[var(--palette-espresso)]/60">
              <span>{text('imageCaption')}</span><span lang="it">Trezzano sul Naviglio · Milano</span>
            </figcaption>
          </figure>

          <nav aria-label={text('storyNav')} className="mt-7 sm:mt-9 flex flex-wrap gap-x-7 gap-y-2 border-y border-[var(--palette-aged-brass)]/25 py-3 text-xs sm:text-sm">
            {([['heritage', 'storyNav'], ['experience', 'kitchenNav'], ['visit', 'visitNav']] as const).map(([id, label], index) => (
              <a key={id} href={`#${id}`} className="inline-flex items-center gap-3 min-h-11 hover:text-[var(--palette-italian-red)] transition-colors">
                <span aria-hidden="true" className="text-[var(--palette-aged-brass)] text-[10px]">0{index + 1}</span>{text(label)}<ArrowDown size={12} aria-hidden="true" />
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section id="heritage" aria-labelledby="restaurant-story-title" className="scroll-mt-28 px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-8 lg:gap-20 items-center">
          <RestaurantReveal className="lg:col-span-6">
            <p className="text-[10px] sm:text-xs tracking-widest uppercase text-[var(--palette-aged-brass)]">{text('storyLabel')}</p>
            <h2 id="restaurant-story-title" className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight text-balance">{text('storyTitle')}</h2>
            <p className="mt-5 text-sm sm:text-base leading-loose text-[var(--palette-espresso)]/75">{text('storyCopy')}</p>
            <span aria-hidden="true" className="block mt-7 h-px w-16 bg-[var(--palette-italian-red)]" />
          </RestaurantReveal>
          <RestaurantReveal image className="lg:col-span-6 overflow-hidden">
            <div className="relative aspect-[5/4] bg-[var(--palette-stone-beige)]">
              <Image src="/images/hero/lavish-mediterranean-feast.webp" alt={text('feastAlt')} fill sizes="(max-width: 1024px) 100vw, 560px" className="object-cover" />
            </div>
          </RestaurantReveal>
        </div>
      </section>
    </>
  );
}
