'use client';

import { Mic2, Music, Users, Car, Sparkles, ArrowRight, Phone } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import type { Locale } from '@/i18n/routing';

interface KaraokeFeatureSectionProps {
  locale: Locale;
}

export function KaraokeFeatureSection({ locale }: KaraokeFeatureSectionProps) {
  const t = useTranslations();
  const isRtl = locale === 'ar';

  return (
    <section className="my-16 sm:my-20 relative rounded-3xl overflow-hidden bg-gradient-to-br from-[var(--palette-espresso)] via-[#1f1614] to-black text-white p-6 sm:p-10 lg:p-12 shadow-2xl border border-amber-900/40">
      {/* Decorative ambient glow */}
      <div
        className="absolute -top-24 -right-24 w-96 h-96 bg-[var(--palette-italian-red)]/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -left-24 w-96 h-96 bg-[var(--palette-aged-brass)]/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Story & Atmosphere */}
        <div className="lg:col-span-7 space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-semibold tracking-wider uppercase">
            <Mic2 size={14} className="text-amber-400" aria-hidden="true" />
            <span>{t('news.karaokeHighlight.kicker')}</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
            {t('news.karaokeHighlight.title')}
          </h2>

          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans max-w-2xl">
            {t('news.karaokeHighlight.description')}
          </p>

          {/* Three Key Pillar Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-3">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm space-y-1.5">
              <div className="w-8 h-8 rounded-full bg-amber-400/20 text-amber-300 flex items-center justify-center mb-1">
                <Music size={16} aria-hidden="true" />
              </div>
              <h3 className="text-xs font-bold text-white">Sanremo & Hit</h3>
              <p className="text-[11px] text-stone-400 leading-normal">
                {t('news.karaokeHighlight.feature1')}
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm space-y-1.5">
              <div className="w-8 h-8 rounded-full bg-red-400/20 text-red-300 flex items-center justify-center mb-1">
                <Users size={16} aria-hidden="true" />
              </div>
              <h3 className="text-xs font-bold text-white">10–20 € & Pizza</h3>
              <p className="text-[11px] text-stone-400 leading-normal">
                {t('news.karaokeHighlight.feature2')}
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm space-y-1.5">
              <div className="w-8 h-8 rounded-full bg-emerald-400/20 text-emerald-300 flex items-center justify-center mb-1">
                <Car size={16} aria-hidden="true" />
              </div>
              <h3 className="text-xs font-bold text-white">Parcheggio Free</h3>
              <p className="text-[11px] text-stone-400 leading-normal">
                {t('news.karaokeHighlight.feature3')}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Atmosphere & Reservation Action */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-7 backdrop-blur-md space-y-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-medium text-amber-200">
              <span className="flex items-center gap-1.5">
                <Sparkles size={14} className="text-amber-400" aria-hidden="true" />
                <span>{t('news.datesSoon')}</span>
              </span>
              <span className="text-[11px] text-stone-400 uppercase font-mono tracking-wider">
                Weekend Vibes
              </span>
            </div>

            <p className="text-xs text-stone-300 leading-relaxed">
              {t('news.scheduleNotice')}
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <Link
              href="/location"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[var(--palette-italian-red)] hover:bg-[var(--palette-italian-red-dark)] text-white text-xs sm:text-sm font-semibold transition-all shadow-lg hover:shadow-xl cursor-pointer"
            >
              <span>{t('news.reserveSpot')}</span>
              <ArrowRight size={15} className={isRtl ? 'rotate-180' : ''} aria-hidden="true" />
            </Link>

            <a
              href="tel:+390236557693"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white text-xs font-medium transition-all"
            >
              <Phone size={13} aria-hidden="true" />
              <span>+39 02 3655 7693 · {t('news.callInquire')}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
