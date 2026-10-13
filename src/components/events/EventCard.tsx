'use client';

import { ArrowRight, Calendar, CheckCircle2 } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import type { NewsPost } from '@/data/types';
import { getLocalized } from '@/data/types';
import type { Locale } from '@/i18n/routing';

interface EventCardProps {
  post: NewsPost;
  locale: Locale;
}

export function EventCard({ post, locale }: EventCardProps) {
  const t = useTranslations();
  const isRtl = locale === 'ar';

  return (
    <article className="bg-white rounded-3xl overflow-hidden border border-[var(--palette-stone-beige)]/50 shadow-sm hover:shadow-xl hover:border-[var(--palette-aged-brass)]/40 transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Media Frame */}
        <div className="h-52 relative overflow-hidden bg-stone-100">
          <img
            src={post.image}
            alt={getLocalized(post.title, locale)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

          {/* Top Badges */}
          <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2 pointer-events-none">
            <span className="bg-white/95 backdrop-blur-md text-[var(--palette-italian-red)] px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase shadow-xs">
              {getLocalized(post.category, locale)}
            </span>

            {post.badge && (
              <span className="bg-black/60 backdrop-blur-md text-amber-200 border border-amber-300/30 px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wide shadow-xs">
                {getLocalized(post.badge, locale)}
              </span>
            )}
          </div>

          {/* Schedule Pill at Bottom of Image */}
          {post.scheduleBadge && (
            <div className="absolute bottom-3 left-3 right-3 bg-black/70 backdrop-blur-md text-white/90 px-3 py-1.5 rounded-xl text-[11px] font-medium flex items-center gap-1.5 shadow-sm">
              <Calendar size={13} className="text-amber-300 shrink-0" aria-hidden="true" />
              <span className="truncate">{getLocalized(post.scheduleBadge, locale)}</span>
            </div>
          )}
        </div>

        {/* Card Body */}
        <div className="p-5 sm:p-6 space-y-3">
          <h3 className="font-serif text-lg font-bold text-[var(--palette-espresso)] leading-snug group-hover:text-[var(--palette-italian-red)] transition-colors">
            {getLocalized(post.title, locale)}
          </h3>

          <p className="text-xs text-[var(--palette-espresso)]/80 leading-relaxed font-sans line-clamp-3">
            {getLocalized(post.excerpt, locale)}
          </p>

          {/* Key Highlights */}
          {post.highlights && post.highlights.length > 0 && (
            <div className="pt-2 space-y-1.5 border-t border-stone-100">
              {post.highlights.slice(0, 2).map((item, idx) => (
                <div key={idx} className="flex items-start gap-1.5 text-[11px] text-stone-600">
                  <CheckCircle2 size={13} className="text-emerald-600 mt-0.5 shrink-0" aria-hidden="true" />
                  <span className="line-clamp-1">{getLocalized(item, locale)}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="p-5 sm:p-6 pt-0 border-t border-stone-100/80 mt-2 flex items-center justify-between">
        <span className="text-[11px] font-semibold text-stone-400 font-mono">
          Tre Fratelli
        </span>

        <Link
          href="/location"
          className="text-xs font-bold text-[var(--palette-italian-red)] hover:text-[var(--palette-italian-red-dark)] inline-flex items-center gap-1.5 group-hover:underline cursor-pointer"
        >
          <span>{t('news.reserveSpot')}</span>
          <ArrowRight size={13} className={isRtl ? 'rotate-180' : ''} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
