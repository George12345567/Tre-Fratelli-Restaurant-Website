import { hasLocale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing, type Locale } from '@/i18n/routing';
import { Link } from '@/i18n/navigation';
import { ArrowRight, CalendarDays } from 'lucide-react';
import { HeroSection } from '@/components/home/HeroSection';
import { HomeMenuScrollSection } from '@/components/home/HomeMenuScrollSection';
import { AboutRestaurantSection } from '@/components/home/AboutRestaurantSection';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const t = await getTranslations({ locale });
  const isRtl = locale === 'ar';

  return (
    <main id="main-content" tabIndex={-1} className="focus:outline-none">
      {/* ── 1. Video Hero Section (Full-Screen Side-Aligned Luxury) ── */}
      <HeroSection
        locale={locale}
        isRtl={isRtl}
        translations={{
          heroEyebrow: t('home.heroEyebrow'),
          heroTitle: t('home.heroTitle'),
          heroCopy: t('home.heroCopy'),
          reserveTable: t('home.reserveTable'),
          viewMenu: t('home.viewMenu'),
        }}
      />

      {/* ── 2. Menu Categories Showcase (Scroll-Linked Parallax & Card Animations) ── */}
      <HomeMenuScrollSection locale={locale as Locale} />

      {/* ── 3. About & Restaurant Information (Brand Emblem & Vital Info) ── */}
      <AboutRestaurantSection
        locale={locale}
        isRtl={isRtl}
        translations={{
          reserveTable: t('home.reserveTable'),
          exploreRestaurant: t('home.exploreRestaurant'),
        }}
      />

      {/* ── 4. Bottom Reservation Callout ── */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[var(--palette-italian-red)] to-[var(--palette-italian-red-dark)] text-white rounded-2xl p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-start">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold">
              {t('location.title')}
            </h3>
            <p className="text-stone-200 text-sm max-w-lg">
              {t('home.reservationCardCopy')}
            </p>
          </div>

          <Link
            href="/location"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[var(--palette-warm-ivory)] text-[var(--palette-espresso)] hover:bg-white font-bold text-sm transition-all shadow-md shrink-0"
          >
            <CalendarDays size={18} aria-hidden="true" />
            <span>{t('nav.reserve')}</span>
            <ArrowRight size={16} className={isRtl ? 'rotate-180' : ''} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
