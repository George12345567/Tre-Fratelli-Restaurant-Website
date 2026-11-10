'use client';

import { Wine, CalendarDays, ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';
import type { SweetsDictionary } from './sweetsI18n';

interface SweetsFooterBannerProps {
  locale: Locale;
  dict: SweetsDictionary;
}

export function SweetsFooterBanner({ locale, dict }: SweetsFooterBannerProps) {
  const isRtl = locale === 'ar';

  return (
    <section
      aria-label={dict.pairingTitle}
      className="mt-12 sm:mt-16 p-6 sm:p-9 lg:p-10 rounded-3xl bg-[var(--palette-espresso)] text-[#FAF7F2] relative overflow-hidden border border-[var(--palette-aged-brass)]/35 shadow-xl"
    >
      {/* Top Hairline Brass Accent */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/45 to-transparent"
        aria-hidden="true"
      />
      {/* Decorative Warm Ambient Glow */}
      <div
        className="absolute -top-24 -end-24 w-72 h-72 bg-[radial-gradient(circle,rgba(176,138,87,0.28),transparent_70%)] pointer-events-none blur-2xl"
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-10">
        <div className="max-w-2xl space-y-3">
          <p className="flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.22em] font-bold text-amber-200">
            <Wine size={14} className="text-amber-200 shrink-0" aria-hidden="true" />
            <span>{dict.pairingEyebrow}</span>
          </p>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-white">
            {dict.pairingTitle}
          </h2>

          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
            {dict.pairingCopy}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center gap-3 shrink-0">
          <Link
            href="/wine-drinks"
            className="inline-flex min-h-11 items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[var(--palette-italian-red)] hover:bg-[#912420] text-white text-xs sm:text-sm font-semibold transition-all shadow-md group cursor-pointer"
          >
            <Wine size={15} aria-hidden="true" />
            <span>{dict.pairingActionWine}</span>
            <ArrowRight
              size={14}
              className={`transition-transform duration-200 group-hover:translate-x-0.5 ${
                isRtl ? 'rotate-180 group-hover:-translate-x-0.5' : ''
              }`}
              aria-hidden="true"
            />
          </Link>

          <Link
            href="/location"
            className="inline-flex min-h-11 items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-semibold transition-all cursor-pointer"
          >
            <CalendarDays size={15} aria-hidden="true" />
            <span>{dict.pairingActionReserve}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
