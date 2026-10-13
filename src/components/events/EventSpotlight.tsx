'use client';

import { Sparkles, ArrowRight, Calendar, CheckCircle2, Music, Phone } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import type { NewsPost } from '@/data/types';
import { getLocalized } from '@/data/types';
import type { Locale } from '@/i18n/routing';

interface EventSpotlightProps {
  event: NewsPost;
  locale: Locale;
}

export function EventSpotlight({ event, locale }: EventSpotlightProps) {
  const t = useTranslations();
  const isRtl = locale === 'ar';

  return (
    <article className="relative mb-16 rounded-3xl overflow-hidden border border-[var(--palette-stone-beige)]/70 bg-white/95 shadow-xl backdrop-blur-sm grid grid-cols-1 lg:grid-cols-12 items-stretch transition-all duration-300">
      {/* ── Left / Media Column ── */}
      <div className="lg:col-span-7 relative min-h-[320px] lg:min-h-[460px] overflow-hidden group">
        <img
          src={event.image}
          alt={getLocalized(event.title, locale)}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent lg:hidden" />

        {/* Featured Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 pointer-events-none">
          <div className="bg-[var(--palette-italian-red)] text-white px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider flex items-center gap-1.5 shadow-md">
            <Sparkles size={14} aria-hidden="true" />
            <span>{t('news.featured')}</span>
          </div>

          {event.badge && (
            <div className="bg-black/60 backdrop-blur-md text-amber-200 border border-amber-300/30 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide shadow-sm">
              {getLocalized(event.badge, locale)}
            </div>
          )}
        </div>

        {/* Floating Schedule Pill on Desktop */}
        {event.scheduleBadge && (
          <div className="hidden lg:flex absolute bottom-4 left-4 bg-black/75 backdrop-blur-md text-white/95 border border-white/20 px-4 py-2 rounded-2xl text-xs font-medium items-center gap-2 shadow-lg">
            <Calendar size={14} className="text-[var(--palette-aged-brass)] shrink-0" aria-hidden="true" />
            <span>{getLocalized(event.scheduleBadge, locale)}</span>
          </div>
        )}
      </div>

      {/* ── Right / Content Column ── */}
      <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
        <div className="space-y-4">
          {/* Category & Status */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider">
            <span className="text-[var(--palette-italian-red)] font-bold bg-[var(--palette-italian-red)]/10 px-2.5 py-1 rounded-lg">
              {getLocalized(event.category, locale)}
            </span>
            <span className="text-stone-300">·</span>
            <span className="text-[var(--palette-aged-brass)] flex items-center gap-1">
              <Music size={13} aria-hidden="true" />
              <span>Trezzano sul Naviglio</span>
            </span>
          </div>

          {/* Title */}
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--palette-espresso)] leading-tight">
            {getLocalized(event.title, locale)}
          </h2>

          {/* Excerpt */}
          <p className="text-xs sm:text-sm text-[var(--palette-espresso)]/85 leading-relaxed font-sans">
            {getLocalized(event.excerpt, locale)}
          </p>

          {/* Schedule on Mobile */}
          {event.scheduleBadge && (
            <div className="lg:hidden flex items-center gap-2 bg-amber-50/80 border border-amber-200/80 text-[var(--palette-espresso)] px-3.5 py-2 rounded-xl text-xs font-medium">
              <Calendar size={14} className="text-[var(--palette-italian-red)] shrink-0" aria-hidden="true" />
              <span>{getLocalized(event.scheduleBadge, locale)}</span>
            </div>
          )}

          {/* Highlights Checklist */}
          {event.highlights && event.highlights.length > 0 && (
            <div className="pt-2 space-y-2 border-t border-stone-200/60">
              <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block">
                {t('news.highlightsLabel')}
              </span>
              <ul className="space-y-1.5 text-xs text-[var(--palette-espresso)]/90">
                {event.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-emerald-600 mt-0.5 shrink-0" aria-hidden="true" />
                    <span>{getLocalized(item, locale)}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* CTA Actions */}
        <div className="pt-4 border-t border-stone-200/60 flex flex-wrap items-center gap-3">
          <Link
            href="/location"
            className="flex-1 min-w-[200px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[var(--palette-italian-red)] text-white hover:bg-[var(--palette-italian-red-dark)] text-xs sm:text-sm font-semibold transition-all shadow-md hover:shadow-lg cursor-pointer"
          >
            <span>{t('news.reserveSpot')}</span>
            <ArrowRight size={15} className={isRtl ? 'rotate-180' : ''} aria-hidden="true" />
          </Link>

          <a
            href="tel:+390236557693"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-full border border-stone-300 hover:border-stone-400 bg-stone-50/80 text-[var(--palette-espresso)] text-xs font-semibold transition-all shadow-xs"
            title="+39 02 3655 7693"
          >
            <Phone size={13} aria-hidden="true" />
            <span className="hidden sm:inline">{t('news.callInquire')}</span>
          </a>
        </div>
      </div>
    </article>
  );
}
