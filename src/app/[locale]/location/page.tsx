import { Suspense } from 'react';
import type { Metadata } from 'next';
import { hasLocale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing, type Locale } from '@/i18n/routing';
import { ReservationForm } from '@/components/reservations/ReservationForm';
import { restaurantSchedule } from '@/data/restaurantSchedule';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const t = await getTranslations({ locale });
  return {
    title: t('meta.locationTitle'),
    description: t('location.subtitle'),
  };
}

export default async function LocationPage({ params }: PageProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const t = await getTranslations({ locale });

  return (
    <main id="main-content" tabIndex={-1} className="pt-10 sm:pt-14 pb-14 sm:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto focus:outline-none">
      {/* ── Page Header ── */}
      <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10 space-y-2.5">
        <span className="text-xs uppercase tracking-widest font-bold text-[var(--palette-italian-red)] bg-[var(--palette-italian-red)]/10 px-3 py-1 rounded-full inline-block">
          {t('location.subtitle')}
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[var(--palette-espresso)] tracking-tight">
          {t('location.title')}
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* ── Mobile Order 1 / Desktop Right: Interactive Multi-Step Reservation Form ── */}
        <div className="order-1 lg:order-2 lg:col-span-7">
          <Suspense fallback={<div className="p-8 text-center bg-white rounded-3xl shadow-sm">Caricamento modulo...</div>}>
            <ReservationForm locale={locale as Locale} />
          </Suspense>
        </div>

        {/* ── Mobile Order 2 / Desktop Left: Contact & Hours Cards ── */}
        <div className="order-2 lg:order-1 lg:col-span-5 space-y-5 sm:space-y-6">
          {/* Address & Direct Contact Card */}
          <div className="bg-white/95 rounded-3xl p-6 sm:p-8 border border-[var(--palette-stone-beige)]/50 shadow-md space-y-5 backdrop-blur-xs">
            <h2 className="font-serif text-xl font-bold text-[var(--palette-espresso)] flex items-center justify-between">
              <span>{t('location.contacts.title')}</span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
            </h2>

            <div className="space-y-4 text-sm text-[var(--palette-espresso)]/85">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-[var(--palette-italian-red)] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[11px] uppercase tracking-wider text-stone-400 font-bold">
                    Osteria & Ristorante
                  </strong>
                  <span className="font-medium text-xs sm:text-sm">{t('location.address')}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[var(--palette-italian-red)] shrink-0" />
                <div className="flex-1">
                  <strong className="block text-[11px] uppercase tracking-wider text-stone-400 font-bold">
                    Telefono
                  </strong>
                  <a
                    href={`tel:${t('location.contacts.phone')}`}
                    className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[var(--palette-italian-red)] hover:underline font-mono"
                    dir="ltr"
                  >
                    {t('location.contacts.phone')}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[var(--palette-italian-red)] shrink-0" />
                <div>
                  <strong className="block text-[11px] uppercase tracking-wider text-stone-400 font-bold">
                    Email
                  </strong>
                  <a href={`mailto:${t('location.contacts.email')}`} className="hover:text-[var(--palette-italian-red)] font-medium text-xs sm:text-sm">
                    {t('location.contacts.email')}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Service Hours Card */}
          <div className="bg-white/95 rounded-3xl p-6 sm:p-8 border border-[var(--palette-stone-beige)]/50 shadow-md space-y-4 backdrop-blur-xs">
            <h2 className="font-serif text-xl font-bold text-[var(--palette-espresso)] flex items-center gap-2">
              <Clock size={20} className="text-[var(--palette-aged-brass)]" />
              <span>{t('location.hours.title')}</span>
            </h2>

            <div className="space-y-2.5 text-xs sm:text-sm text-[var(--palette-espresso)]/85">
              <div className="flex justify-between items-center py-1.5 border-b border-black/5">
                <span className="font-semibold">{locale === 'it' ? 'Lunedì' : locale === 'ar' ? 'الاثنين' : 'Monday'}</span>
                <span className="font-mono font-bold text-[var(--palette-espresso)]">12:00 – 15:00</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-black/5">
                <span className="font-semibold">{locale === 'it' ? 'Martedì – Sabato' : locale === 'ar' ? 'الثلاثاء – السبت' : 'Tuesday – Saturday'}</span>
                <span className="font-mono font-bold text-[var(--palette-espresso)] text-end">12:00–15 · 18:30–00:00</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-black/5">
                <span className="font-semibold">{locale === 'it' ? 'Domenica' : locale === 'ar' ? 'الأحد' : 'Sunday'}</span>
                <span className="font-mono font-bold text-[var(--palette-italian-red)]">12:00 – 00:00</span>
              </div>
            </div>

            {/* Note & Direct Phone Call Advisory */}
            <div className="p-3.5 rounded-2xl bg-amber-50/90 border border-amber-200/70 text-xs text-amber-900 space-y-1">
              <p className="leading-relaxed">
                {t('location.hours.note')}
              </p>
              <div className="pt-1 flex items-center justify-between text-[11px]">
                <a
                  href={restaurantSchedule.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-800 underline hover:text-amber-950 font-medium"
                >
                  {t('location.hours.pagineGialleSource')}
                </a>
                <a
                  href="tel:+390236557693"
                  className="font-bold text-[var(--palette-italian-red)] hover:underline font-mono"
                  dir="ltr"
                >
                  +39 02 3655 7693
                </a>
              </div>
            </div>
          </div>

          {/* Visual Map & Direct Google Maps Navigation Card */}
          <div className="relative rounded-3xl overflow-hidden border border-[var(--palette-stone-beige)]/60 shadow-md bg-gradient-to-br from-stone-50 via-white to-amber-50/40 p-6 space-y-3.5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[var(--palette-italian-red)]/10 text-[var(--palette-italian-red)] flex items-center justify-center shrink-0">
                <MapPin size={22} />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-[var(--palette-espresso)]">
                  Trezzano sul Naviglio (MI) · Milano
                </p>
                <span className="text-[11px] text-stone-500 block font-mono">
                  Plus Code: C3C6+PH Trezzano sul Naviglio
                </span>
              </div>
            </div>

            <a
              href="https://maps.app.goo.gl/XtPWEL7wA6BwA8na7?g_st=ac"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[var(--palette-italian-red)] hover:bg-[var(--palette-italian-red-dark)] text-white text-xs font-bold transition-all shadow-md active:scale-98"
            >
              <span>
                {locale === 'it'
                  ? 'Apri su Google Maps'
                  : locale === 'ar'
                  ? 'فتح موقع المطعم على خرائط Google'
                  : 'Open on Google Maps'}
              </span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
