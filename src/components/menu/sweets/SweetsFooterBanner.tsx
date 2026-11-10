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
      className="mt-14 sm:mt-20 p-6 sm:p-10 rounded-3xl bg-[var(--palette-espresso)] text-[#FAF7F2] relative overflow-hidden border border-[var(--palette-aged-brass)]/30 shadow-xl"
    >
      {/* Decorative Warm Ambient Glow */}
      <div
        className="absolute -top-24 -end-24 w-72 h-72 bg-[radial-gradient(circle,rgba(176,138,87,0.25),transparent_70%)] pointer-events-none blur-2xl"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-3xl space-y-4">
        <p className="flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold text-amber-200">
          <Wine size={14} className="text-amber-200" aria-hidden="true" />
          <span>{dict.pairingTitle}</span>
        </p>

        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-white">
          {dict.pairingTitle}
        </h2>

        <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-2xl">
          {dict.pairingCopy}
        </p>

        <div className="pt-3 flex flex-wrap items-center gap-4">
          <Link
            href="/wine-drinks"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--palette-italian-red)] hover:bg-[#a12323] text-white text-xs sm:text-sm font-semibold transition-all shadow-md group cursor-pointer"
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
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-semibold transition-all cursor-pointer"
          >
            <CalendarDays size={15} aria-hidden="true" />
            <span>{dict.pairingActionReserve}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
