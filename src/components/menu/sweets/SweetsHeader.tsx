'use client';

import { Sparkles, ArrowLeft } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';
import type { SweetsDictionary } from './sweetsI18n';

interface SweetsHeaderProps {
  locale: Locale;
  dict: SweetsDictionary;
  totalCount: number;
  sectionCount?: number;
}

export function SweetsHeader({ locale, dict, totalCount, sectionCount = 5 }: SweetsHeaderProps) {
  const isRtl = locale === 'ar';

  return (
    <header className="space-y-4 sm:space-y-5">
      {/* ── Breadcrumb & Wayfinding ── */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
        <nav
          aria-label={dict.breadcrumbLabel}
          className="flex min-w-0 flex-wrap items-center gap-2 text-[var(--palette-espresso)]/70"
        >
          <Link
            href="/"
            className="inline-flex min-h-9 items-center hover:text-[var(--palette-italian-red)] transition-colors font-medium"
          >
            {dict.breadcrumbHome}
          </Link>
          <span className="text-stone-300" aria-hidden="true">/</span>
          <Link
            href="/menu"
            className="inline-flex min-h-9 items-center hover:text-[var(--palette-italian-red)] transition-colors font-medium"
          >
            {dict.breadcrumbMenu}
          </Link>
          <span className="text-stone-300" aria-hidden="true">/</span>
          <span className="text-[var(--palette-espresso)] font-bold" aria-current="page">
            {dict.breadcrumbCurrent}
          </span>
        </nav>

        <Link
          href="/menu"
          className="inline-flex min-h-8 h-8 min-w-0 items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 hover:bg-white border border-[var(--palette-stone-beige)]/65 text-[var(--palette-espresso)] font-semibold text-xs transition-all shadow-2xs hover:shadow-xs group cursor-pointer"
        >
          <ArrowLeft
            size={12}
            className={`text-[var(--palette-italian-red)] transition-transform duration-200 group-hover:-translate-x-0.5 ${
              isRtl ? 'rotate-180 group-hover:translate-x-0.5' : ''
            }`}
            aria-hidden="true"
          />
          <span>{dict.breadcrumbMenu}</span>
        </Link>
      </div>

      {/* ── Editorial Masthead Card ── */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/95 via-[#FAF6EE]/95 to-[#F1E6D4]/85 border border-[var(--palette-stone-beige)]/60 p-4 sm:p-6 shadow-[0_10px_28px_-14px_rgba(43,31,26,0.08)]">
        {/* Top Ornamental Brass Line */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--palette-aged-brass)]/60 to-transparent"
          aria-hidden="true"
        />
        {/* Ambient Corner Glow */}
        <div
          className="pointer-events-none absolute -top-20 -end-20 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(176,138,87,0.16),transparent_70%)] blur-2xl"
          aria-hidden="true"
        />

        <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div className="space-y-1.5">
            <p className="flex items-center gap-1.5 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-bold text-[var(--palette-aged-brass)]">
              <Sparkles size={12} className="text-[var(--palette-aged-brass)] shrink-0" aria-hidden="true" />
              <span>{dict.eyebrow}</span>
              <span className="hidden sm:inline-block h-px w-8 bg-[var(--palette-aged-brass)]/40" aria-hidden="true" />
            </p>

            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--palette-espresso)] tracking-tight leading-[1.12]">
              {dict.title}
            </h1>
          </div>

          {/* Curated Catalog Counters */}
          <div className="flex flex-wrap items-center gap-1.5 shrink-0">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[var(--palette-espresso)] text-[#FAF7F2] text-[11px] font-bold tabular-nums shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-300" aria-hidden="true" />
              {dict.dessertCount(totalCount)}
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/85 border border-[var(--palette-aged-brass)]/35 text-[11px] font-semibold text-[var(--palette-espresso)]/85 tabular-nums">
              {dict.chaptersCount(sectionCount)}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
