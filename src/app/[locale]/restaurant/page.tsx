import type { Metadata } from 'next';
import { hasLocale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Link } from '@/i18n/navigation';
import {
  Accessibility,
  ArrowRight,
  Cake,
  CalendarDays,
  Car,
  Coins,
  ExternalLink,
  Fish,
  Flame,
  Info,
  MapPin,
  Mic,
  Phone,
  Sparkles,
  Users,
  UtensilsCrossed,
} from 'lucide-react';
import { getLocalized } from '@/data/types';
import {
  culinarySpecialties,
  hospitalityAmenities,
  restaurantOfficialInfo,
  sectionOneContent,
  sectionTwoContent,
  type CulinaryPillar,
  type AmenityPillar,
} from '@/data/restaurantDetails';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const t = await getTranslations({ locale });
  return {
    title: t('meta.restaurantTitle'),
    description: getLocalized(sectionOneContent.tagline, locale),
  };
}

function getCulinaryIcon(iconName: CulinaryPillar['iconName']) {
  switch (iconName) {
    case 'Flame':
      return <Flame size={16} className="text-amber-600" aria-hidden="true" />;
    case 'Fish':
      return <Fish size={16} className="text-sky-600" aria-hidden="true" />;
    case 'Sparkles':
      return <Sparkles size={16} className="text-amber-500" aria-hidden="true" />;
    case 'Cake':
      return <Cake size={16} className="text-rose-500" aria-hidden="true" />;
    default:
      return <UtensilsCrossed size={16} className="text-[var(--palette-italian-red)]" aria-hidden="true" />;
  }
}

function getAmenityIcon(iconName: AmenityPillar['iconName']) {
  switch (iconName) {
    case 'Car':
      return <Car size={16} className="text-emerald-600" aria-hidden="true" />;
    case 'Accessibility':
      return <Accessibility size={16} className="text-blue-600" aria-hidden="true" />;
    case 'Users':
      return <Users size={16} className="text-violet-600" aria-hidden="true" />;
    case 'Mic':
      return <Mic size={16} className="text-purple-600" aria-hidden="true" />;
    case 'Coins':
      return <Coins size={16} className="text-teal-600" aria-hidden="true" />;
    default:
      return <Info size={16} className="text-stone-600" aria-hidden="true" />;
  }
}

export default async function RestaurantPage({ params }: PageProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const isRtl = locale === 'ar';

  return (
    <main id="main-content" tabIndex={-1} className="focus:outline-none">
      
      {/* ── SECTION 1: Heritage & Story (Editorial Narrative & Hearth) ── */}
      <section
        id="heritage"
        className="relative py-10 sm:py-14 lg:py-16 bg-gradient-to-b from-[var(--palette-warm-ivory)] via-white to-[var(--palette-warm-ivory)]/70 text-[var(--palette-espresso)] px-4 sm:px-6 lg:px-8 border-b border-[var(--palette-stone-beige)]/40 overflow-hidden"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: The Narrative */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--palette-aged-brass)]/15 border border-[var(--palette-aged-brass)]/30 text-[var(--palette-espresso)] text-[11px] font-semibold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--palette-italian-red)]" />
              <span>{getLocalized(sectionOneContent.subtitle, locale)}</span>
            </div>

            <div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--palette-espresso)] tracking-tight leading-tight">
                {getLocalized(sectionOneContent.headline, locale)}
              </h1>
              <p className="font-serif italic text-sm sm:text-base text-[var(--palette-italian-red)] mt-1 font-medium">
                {getLocalized(sectionOneContent.tagline, locale)}
              </p>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-[var(--palette-espresso)]/85 leading-relaxed">
              <p>{getLocalized(sectionOneContent.storyLead, locale)}</p>
              <p>{getLocalized(sectionOneContent.storyHearth, locale)}</p>
            </div>

            {/* Quick Action Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/location"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--palette-italian-red)] text-white hover:bg-[var(--palette-italian-red-dark)] text-xs sm:text-sm font-semibold transition-all shadow-sm hover:shadow"
              >
                <CalendarDays size={15} aria-hidden="true" />
                <span>{locale === 'ar' ? 'احجز طاولتك' : locale === 'it' ? 'Prenota un Tavolo' : 'Reserve a Table'}</span>
                <ArrowRight size={14} className={isRtl ? 'rotate-180' : ''} aria-hidden="true" />
              </Link>

              <Link
                href="/menu"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-[var(--palette-stone-beige)] text-[var(--palette-espresso)] hover:bg-[var(--palette-stone-beige-light)]/40 text-xs sm:text-sm font-semibold transition-all shadow-2xs"
              >
                <UtensilsCrossed size={15} aria-hidden="true" />
                <span>{locale === 'ar' ? 'قائمة الطعام' : locale === 'it' ? 'Il Nostro Menu' : 'Our Menu'}</span>
              </Link>

              <a
                href={`tel:${restaurantOfficialInfo.phone}`}
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-full bg-white/90 border border-[var(--palette-stone-beige)]/70 text-[var(--palette-espresso)] hover:text-[var(--palette-italian-red)] text-xs sm:text-sm font-medium transition-colors"
                aria-label={`Call ${restaurantOfficialInfo.phoneDisplay}`}
              >
                <Phone size={14} aria-hidden="true" />
                <span dir="ltr">{restaurantOfficialInfo.phoneDisplay}</span>
              </a>

              <a
                href={restaurantOfficialInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-2.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs sm:text-sm font-medium transition-colors"
              >
                <MapPin size={14} className="text-[var(--palette-italian-red)]" aria-hidden="true" />
                <span>Maps</span>
                <ExternalLink size={12} className="opacity-60" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right Column: Editorial Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[var(--palette-aged-brass)]/40 bg-stone-900 group">
              <img
                src="/images/hero/lavish-mediterranean-feast.webp"
                alt="Tre Fratelli authentic Mediterranean dining feast"
                className="w-full h-[320px] sm:h-[380px] lg:h-[420px] object-cover group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              <div className="absolute top-3 right-3 rtl:right-auto rtl:left-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-semibold tracking-wide">
                  <Flame size={12} className="text-amber-400" aria-hidden="true" />
                  <span>Forno a Legna & Pizzeria</span>
                </span>
              </div>

              <div className="absolute bottom-3 inset-x-3 p-3.5 rounded-xl bg-black/65 backdrop-blur-md border border-white/15 text-white flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="font-serif text-sm font-bold truncate">Tre Fratelli</p>
                  <p className="text-[11px] text-white/80 truncate">
                    Viale Leonardo da Vinci, 97 • Trezzano s/N (MI)
                  </p>
                </div>
                <a
                  href={restaurantOfficialInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 px-2.5 py-1 rounded-lg bg-[var(--palette-italian-red)] hover:bg-[var(--palette-italian-red-dark)] text-white text-[11px] font-semibold transition-colors flex items-center gap-1"
                >
                  <MapPin size={12} aria-hidden="true" />
                  <span>Google Maps</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION 2: Dining Experience & Hospitality (Specialties, Amenities & Visiting Guide) ── */}
      <section
        id="experience"
        className="relative py-10 sm:py-14 lg:py-16 bg-white text-[var(--palette-espresso)] px-4 sm:px-6 lg:px-8 border-b border-[var(--palette-stone-beige)]/40 overflow-hidden"
      >
        <div className="max-w-6xl mx-auto space-y-10">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[11px] uppercase tracking-widest font-semibold text-[var(--palette-italian-red)]">
              {getLocalized(sectionTwoContent.kicker, locale)}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--palette-espresso)]">
              {getLocalized(sectionTwoContent.headline, locale)}
            </h2>
            <p className="text-xs sm:text-sm text-[var(--palette-espresso)]/75 leading-relaxed">
              {getLocalized(sectionTwoContent.subhead, locale)}
            </p>
          </div>

          {/* Two Balanced Columns: Specialties vs. Hospitality */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            
            {/* Column A: Culinary Specialties */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-1 border-b border-[var(--palette-stone-beige)]/40">
                <UtensilsCrossed size={16} className="text-[var(--palette-italian-red)]" aria-hidden="true" />
                <h3 className="font-serif text-base sm:text-lg font-bold text-[var(--palette-espresso)]">
                  {locale === 'ar' ? 'التخصصات والأطباق المحبوبة' : locale === 'it' ? 'Specialità & Piatti Amati' : 'Beloved Specialties'}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {culinarySpecialties.map((item) => (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-xl bg-[var(--palette-warm-ivory)]/40 border border-[var(--palette-stone-beige)]/40 hover:border-[var(--palette-aged-brass)]/60 transition-all flex flex-col justify-between space-y-2"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="p-1.5 rounded-md bg-white text-[var(--palette-espresso)] shadow-2xs">
                        {getCulinaryIcon(item.iconName)}
                      </div>
                      <span className="text-[10px] font-bold text-[var(--palette-italian-red)] bg-white px-2 py-0.5 rounded shadow-2xs">
                        {getLocalized(item.badge, locale)}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-serif text-sm font-bold text-[var(--palette-espresso)]">
                        {getLocalized(item.title, locale)}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-[var(--palette-espresso)]/75 leading-relaxed mt-1">
                        {getLocalized(item.description, locale)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column B: Hospitality & Amenities */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-1 border-b border-[var(--palette-stone-beige)]/40">
                <Users size={16} className="text-[var(--palette-italian-red)]" aria-hidden="true" />
                <h3 className="font-serif text-base sm:text-lg font-bold text-[var(--palette-espresso)]">
                  {locale === 'ar' ? 'الراحة، المواقف والخدمات' : locale === 'it' ? 'Accoglienza, Parcheggio & Comfort' : 'Hospitality, Parking & Comfort'}
                </h3>
              </div>

              <div className="space-y-2.5">
                {hospitalityAmenities.map((amenity) => (
                  <div
                    key={amenity.id}
                    className="p-3 rounded-xl bg-[var(--palette-warm-ivory)]/30 border border-[var(--palette-stone-beige)]/40 flex items-start gap-3 hover:bg-[var(--palette-warm-ivory)]/60 transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-white shadow-2xs shrink-0 text-[var(--palette-espresso)]">
                      {getAmenityIcon(amenity.iconName)}
                    </div>
                    <div className="min-w-0 flex-1 space-y-0.5">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="font-serif text-xs sm:text-sm font-bold text-[var(--palette-espresso)]">
                          {getLocalized(amenity.title, locale)}
                        </h4>
                        <span className="text-[10px] font-semibold text-[var(--palette-italian-red)] shrink-0">
                          {getLocalized(amenity.tag, locale)}
                        </span>
                      </div>
                      <p className="text-[11px] text-[var(--palette-espresso)]/75 leading-relaxed">
                        {getLocalized(amenity.description, locale)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Guest Advisory Banner */}
          <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200/80 text-amber-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs leading-relaxed">
            <div className="flex items-center gap-2.5">
              <Info size={16} className="text-amber-800 shrink-0" aria-hidden="true" />
              <span>{getLocalized(sectionTwoContent.bookingAdvisory, locale)}</span>
            </div>
            <a
              href={`tel:${restaurantOfficialInfo.phone}`}
              className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-800 text-white hover:bg-amber-900 font-semibold transition-colors shadow-2xs"
            >
              <Phone size={12} aria-hidden="true" />
              <span>{locale === 'ar' ? 'اتصل للحجز' : locale === 'it' ? 'Chiama per Prenotare' : 'Call to Reserve'}</span>
            </a>
          </div>

          {/* Direct Channels Bar */}
          <div className="pt-2 border-t border-[var(--palette-stone-beige)]/40 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[var(--palette-espresso)]/75">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
              <span className="font-semibold text-[var(--palette-espresso)]">
                {locale === 'ar' ? 'قنوات التواصل:' : locale === 'it' ? 'Canali Ufficiali:' : 'Official Channels:'}
              </span>
              <a
                href={restaurantOfficialInfo.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 hover:bg-blue-100 font-medium transition-colors"
              >
                Facebook
              </a>
              <a
                href={restaurantOfficialInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded-full bg-pink-50 text-pink-700 hover:bg-pink-100 font-medium transition-colors"
              >
                Instagram
              </a>
              <a
                href={restaurantOfficialInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 hover:bg-emerald-100 font-medium transition-colors flex items-center gap-1"
              >
                <MapPin size={11} className="text-emerald-700" aria-hidden="true" />
                <span>Google Maps</span>
              </a>
            </div>

            <div className="text-center md:text-end text-[11px] text-[var(--palette-espresso)]/60">
              <span>{restaurantOfficialInfo.address}</span>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
