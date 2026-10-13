'use client';

import { PartyPopper, Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import type { Locale } from '@/i18n/routing';

interface EventPrivateBannerProps {
  locale: Locale;
}

export function EventPrivateBanner({ locale }: EventPrivateBannerProps) {
  const t = useTranslations();
  const isRtl = locale === 'ar';

  return (
    <section className="my-14 sm:my-16 rounded-3xl p-6 sm:p-10 border border-[var(--palette-aged-brass)]/40 bg-gradient-to-br from-amber-50/70 via-[var(--palette-warm-ivory)] to-white shadow-lg relative overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
        <div className="space-y-3 text-center md:text-start">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--palette-italian-red)] uppercase tracking-wider">
            <PartyPopper size={14} aria-hidden="true" />
            <span>{t('news.privateEvents.kicker')}</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--palette-espresso)] leading-snug">
            {t('news.privateEvents.title')}
          </h2>

          <p className="text-xs sm:text-sm text-[var(--palette-espresso)]/80 leading-relaxed max-w-xl font-sans">
            {t('news.privateEvents.description')}
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-semibold text-stone-600 pt-1">
            <span className="flex items-center gap-1">
              <ShieldCheck size={14} className="text-emerald-600" aria-hidden="true" />
              10–20 € / persona
            </span>
            <span>·</span>
            <span>Parcheggio Privato Gratuito</span>
            <span>·</span>
            <span>Musica & Karaoke</span>
          </div>
        </div>

        <div className="shrink-0 flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto">
          <Link
            href="/location"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[var(--palette-espresso)] hover:bg-black text-white text-xs sm:text-sm font-semibold transition-all shadow-md cursor-pointer"
          >
            <span>{t('news.privateEvents.cta')}</span>
            <ArrowRight size={14} className={isRtl ? 'rotate-180' : ''} aria-hidden="true" />
          </Link>

          <a
            href="tel:+390236557693"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-stone-300 hover:border-stone-400 bg-white text-[var(--palette-espresso)] text-xs font-semibold transition-all shadow-xs"
          >
            <Phone size={13} aria-hidden="true" />
            <span>{t('news.privateEvents.call')}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
