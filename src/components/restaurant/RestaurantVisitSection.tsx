import {
  ArrowRight,
  CalendarCheck,
  ExternalLink,
  MapPin,
  Phone,
  Sparkles,
  UtensilsCrossed,
} from 'lucide-react';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';
import { getLocalized } from '@/data/types';
import { restaurantEditorial } from '@/data/restaurantEditorial';
import { restaurantOfficialInfo, sectionTwoContent } from '@/data/restaurantDetails';
import { RestaurantReveal } from './RestaurantReveal';

export function RestaurantVisitSection({ locale }: { locale: Locale }) {
  const text = (key: keyof typeof restaurantEditorial) =>
    getLocalized(restaurantEditorial[key], locale);
  const arrow = locale === 'ar' ? 'rotate-180' : '';

  return (
    <section
      id="visit"
      aria-labelledby="restaurant-visit-title"
      className="scroll-mt-28 px-4 sm:px-6 lg:px-8 pt-4 sm:pt-8 pb-16 sm:pb-24 bg-gradient-to-b from-[var(--palette-warm-ivory)] via-[var(--palette-stone-beige-light)]/45 to-[var(--palette-warm-ivory)]"
    >
      <div className="max-w-6xl mx-auto">
        <RestaurantReveal>
          <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-[var(--palette-espresso)] text-[var(--palette-warm-ivory)] border border-[var(--palette-aged-brass)]/35 shadow-2xl">
            {/* Ambient warm brass glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[var(--palette-aged-brass)]/15 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[var(--palette-italian-red)]/20 blur-3xl"
            />

            <div className="relative grid lg:grid-cols-12 items-stretch">
              {/* Left / Top Column: Editorial Invitation & Primary Actions */}
              <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[var(--palette-aged-brass)]/35 bg-[var(--palette-warm-ivory)]/[0.06] px-3.5 py-1.5">
                    <Sparkles
                      size={13}
                      className="text-[var(--palette-aged-brass)] shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-[var(--palette-stone-beige-light)]">
                      {text('visitLabel')}
                    </span>
                  </div>

                  <h2
                    id="restaurant-visit-title"
                    className="mt-5 font-serif text-3xl sm:text-5xl lg:text-[3.15rem] leading-[1.1] tracking-tight text-balance text-[var(--palette-warm-ivory)]"
                  >
                    {text('visitTitle')}
                  </h2>

                  {/* Maître D' Booking Advisory Card */}
                  <div className="mt-6 sm:mt-7 rounded-2xl border border-[var(--palette-aged-brass)]/25 bg-[var(--palette-warm-ivory)]/[0.06] p-4 sm:p-5 flex items-start gap-3.5">
                    <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[var(--palette-aged-brass)]/20 text-[var(--palette-aged-brass)]">
                      <CalendarCheck size={16} aria-hidden="true" />
                    </span>
                    <p className="text-xs sm:text-sm leading-relaxed text-[var(--palette-stone-beige-light)]/90">
                      {getLocalized(sectionTwoContent.bookingAdvisory, locale)}
                    </p>
                  </div>
                </div>

                {/* Primary & Secondary CTAs */}
                <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                  <Link
                    href="/location"
                    className="group inline-flex min-h-12 items-center justify-between sm:justify-center gap-3.5 rounded-full bg-[var(--palette-italian-red)] hover:bg-[var(--palette-italian-red-light)] text-[var(--palette-warm-ivory)] px-6 py-3.5 text-sm font-semibold shadow-lg transition-all duration-200"
                  >
                    <span>{text('reserve')}</span>
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[var(--palette-warm-ivory)]/15 transition-transform duration-200 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5">
                      <ArrowRight size={14} className={arrow} aria-hidden="true" />
                    </span>
                  </Link>

                  <Link
                    href="/menu"
                    className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full border border-[var(--palette-aged-brass)]/35 bg-[var(--palette-warm-ivory)]/[0.05] hover:bg-[var(--palette-warm-ivory)]/[0.12] text-[var(--palette-warm-ivory)] px-6 py-3.5 text-sm font-medium transition-colors"
                  >
                    <UtensilsCrossed
                      size={15}
                      className="text-[var(--palette-aged-brass)]"
                      aria-hidden="true"
                    />
                    <span>{text('menu')}</span>
                  </Link>
                </div>
              </div>

              {/* Right / Bottom Column: Warm Ivory Concierge Card */}
              <div className="lg:col-span-5 m-2.5 sm:m-4 lg:m-5 rounded-[1.5rem] sm:rounded-[2rem] bg-[var(--palette-warm-ivory)] text-[var(--palette-espresso)] p-5 sm:p-7 lg:p-8 border border-[var(--palette-aged-brass)]/30 shadow-lg flex flex-col justify-between gap-5">
                {/* Address & Google Maps Card */}
                <div className="rounded-2xl border border-[var(--palette-aged-brass)]/25 bg-[var(--palette-stone-beige-light)]/45 p-4 sm:p-5">
                  <div className="flex items-start gap-3.5">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--palette-italian-red)]/10 text-[var(--palette-italian-red)]">
                      <MapPin size={18} aria-hidden="true" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] uppercase tracking-wider font-semibold text-[var(--palette-aged-brass)]">
                        {getLocalized(restaurantOfficialInfo.cityRegion, locale)}
                      </p>
                      <address className="mt-1.5 text-sm sm:text-[15px] font-medium leading-snug not-italic text-[var(--palette-espresso)]">
                        <bdi>{restaurantOfficialInfo.address}</bdi>
                      </address>
                    </div>
                  </div>

                  <div className="mt-4 pt-3.5 border-t border-[var(--palette-aged-brass)]/20 flex items-center justify-between gap-2">
                    <span className="text-[11px] text-[var(--palette-espresso)]/65 font-mono">
                      <bdi dir="ltr">{restaurantOfficialInfo.plusCode}</bdi>
                    </span>
                    <a
                      href={restaurantOfficialInfo.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-9 items-center gap-1.5 rounded-full bg-[var(--palette-espresso)] hover:bg-[var(--palette-espresso-light)] text-[var(--palette-warm-ivory)] px-3.5 py-1.5 text-xs font-semibold transition-colors"
                    >
                      <span>{text('directions')}</span>
                      <ExternalLink size={12} aria-hidden="true" />
                    </a>
                  </div>
                </div>

                {/* Direct Tap-to-Call Card */}
                <a
                  href={`tel:${restaurantOfficialInfo.phone}`}
                  className="group rounded-2xl border border-[var(--palette-aged-brass)]/25 bg-[var(--palette-stone-beige-light)]/45 hover:bg-[var(--palette-stone-beige-light)]/80 p-4 sm:p-5 transition-all flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--palette-aged-brass)]/20 text-[var(--palette-espresso)] group-hover:bg-[var(--palette-italian-red)] group-hover:text-[var(--palette-warm-ivory)] transition-colors">
                      <Phone size={18} aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[11px] uppercase tracking-wider font-semibold text-[var(--palette-espresso)]/65">
                        {text('phoneLabel')}
                      </p>
                      <p className="mt-0.5 font-serif text-lg sm:text-xl font-semibold text-[var(--palette-espresso)] group-hover:text-[var(--palette-italian-red)] transition-colors">
                        <bdi dir="ltr">{restaurantOfficialInfo.phoneDisplay}</bdi>
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--palette-aged-brass)]/35 text-[var(--palette-espresso)]/70 group-hover:border-[var(--palette-italian-red)] group-hover:text-[var(--palette-italian-red)] transition-colors">
                    <ArrowRight size={14} className={arrow} aria-hidden="true" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </RestaurantReveal>
      </div>
    </section>
  );
}
