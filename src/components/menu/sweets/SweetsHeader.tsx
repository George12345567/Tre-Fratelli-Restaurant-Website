'use client';

import { Sparkles, ArrowLeft } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';
import type { SweetsDictionary } from './sweetsI18n';

interface SweetsHeaderProps {
  locale: Locale;
  dict: SweetsDictionary;
  totalCount: number;
}

export function SweetsHeader({ locale, dict, totalCount }: SweetsHeaderProps) {
  const isRtl = locale === 'ar';

  return (
    <header className="space-y-5 pb-6 border-b border-[var(--palette-stone-beige)]/40">
      {/* ── Breadcrumb & Wayfinding ── */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
        <nav aria-label={dict.breadcrumbLabel} className="flex min-w-0 flex-wrap items-center gap-2 text-[var(--palette-espresso)]/70">
          <Link
            href="/"
            className="hover:text-[var(--palette-italian-red)] transition-colors font-medium"
          >
            {dict.breadcrumbHome}
          </Link>
          <span className="text-stone-300" aria-hidden="true">/</span>
          <Link
            href="/menu"
            className="hover:text-[var(--palette-italian-red)] transition-colors font-medium"
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
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 hover:bg-white border border-[var(--palette-stone-beige)]/60 text-[var(--palette-espresso)] font-semibold text-xs transition-all shadow-2xs hover:shadow-xs group cursor-pointer"
        >
          <ArrowLeft
            size={13}
            className={`text-[var(--palette-italian-red)] transition-transform duration-200 group-hover:-translate-x-0.5 ${
              isRtl ? 'rotate-180 group-hover:translate-x-0.5' : ''
            }`}
            aria-hidden="true"
          />
          <span>{dict.breadcrumbMenu}</span>
        </Link>
      </div>

      {/* ── Hero Title & Eyebrow ── */}
      <div className="pt-2 max-w-4xl">
        <p className="flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold text-[var(--palette-aged-brass)]">
          <Sparkles size={13} className="text-[var(--palette-aged-brass)] shrink-0" aria-hidden="true" />
          <span>{dict.eyebrow}</span>
          <span className="hidden sm:inline-block h-px w-8 bg-[var(--palette-aged-brass)]/40" aria-hidden="true" />
        </p>
        
        <div className="mt-2 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--palette-espresso)] tracking-tight">
            {dict.title}
          </h1>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--palette-aged-brass)]/15 border border-[var(--palette-aged-brass)]/30 text-xs font-bold text-[var(--palette-espresso)] tabular-nums">
            {dict.dessertCount(totalCount)}
          </span>
        </div>

      </div>
    </header>
  );
}
