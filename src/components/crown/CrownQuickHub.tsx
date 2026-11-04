'use client';

import { useState, useRef, useEffect } from 'react';
import {
  X,
  UtensilsCrossed,
  MapPin,
  CalendarDays,
  ExternalLink,
  ArrowRight,
  Download,
} from 'lucide-react';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';
import { LanguageDropdown } from '@/components/layout/LanguageDropdown';

interface CrownQuickHubProps {
  locale: Locale;
}

export function CrownQuickHub({ locale }: CrownQuickHubProps) {
  const [isOpen, setIsOpen] = useState(false);
  const hubRef = useRef<HTMLDivElement>(null);
  const isRtl = locale === 'ar';

  // Close on outside click or Escape key
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
      if (hubRef.current && !hubRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('pointerdown', handleOutsideClick);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('pointerdown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const googleMapsUrl = 'https://maps.app.goo.gl/XtPWEL7wA6BwA8na7?g_st=ac';
  const logoSrc = '/images/brand/tre-fratelli-official-logo.png';

  return (
    <div ref={hubRef} className="fixed bottom-5 end-5 sm:bottom-7 sm:end-7 z-50 pointer-events-auto">
      {/* ── 1. The Floating Emblem Trigger Button (Exact Tre Fratelli Logo) ── */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={
          locale === 'it'
            ? 'Apri menu Tre Fratelli rapido'
            : locale === 'ar'
            ? 'فتح قائمة Tre Fratelli واللغات'
            : 'Open Tre Fratelli Quick Hub'
        }
        className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden shadow-[0_8px_25px_rgba(122,46,42,0.45)] border-2 border-[var(--palette-aged-brass)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer group bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--palette-aged-brass)]"
      >
        {/* The Exact Restaurant Logo */}
        <div className="w-full h-full p-2 flex items-center justify-center">
          <img
            src={logoSrc}
            alt="Tre Fratelli Logo"
            className="w-full h-full object-contain select-none pointer-events-none group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Subtle Breathing Ring on Hover */}
        <span
          className="absolute inset-0 rounded-full ring-2 ring-[var(--palette-aged-brass)]/60 ring-offset-2 ring-offset-transparent pointer-events-none transition-all group-hover:ring-offset-1"
          aria-hidden="true"
        />
      </button>

      {/* ── 2. The Sleek Liquid Glass Links Hub Popover ── */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Tre Fratelli Links Hub"
          className="absolute bottom-16 sm:bottom-18 end-0 w-[290px] sm:w-[320px] rounded-3xl liquid-glass-dropdown p-4 shadow-2xl border border-white/70 animate-fade-in space-y-3 z-50 text-[var(--palette-espresso)]"
        >
          {/* ── Top Bar: Logo Emblem Thumbnail + Close Button ── */}
          <div className="flex items-center justify-between border-b border-black/5 pb-2.5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white p-1 flex items-center justify-center border border-[var(--palette-aged-brass)]/70 shadow-2xs">
                <img
                  src={logoSrc}
                  alt="Tre Fratelli"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-serif text-sm font-bold tracking-tight">
                Tre Fratelli
              </span>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-black/5 text-[var(--palette-espresso)]/60 hover:text-[var(--palette-espresso)] transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X size={15} />
            </button>
          </div>

          {/* ── Language Picker (بيكر بتاع اللغات الجميل) ── */}
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--palette-espresso)]/55 px-1 block">
              {locale === 'it' ? 'Lingua / Language / اللغة' : locale === 'ar' ? 'اختر لغة الموقع' : 'Choose Language'}
            </span>
            <div className="w-full">
              <LanguageDropdown currentLocale={locale} variant="mobile" onSelect={() => setIsOpen(false)} />
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-black/6" aria-hidden="true" />

          {/* ── The 3 Core Links (روابط سريعة ونظيفة) ── */}
          <div className="space-y-1.5">
            {/* 1. لينك للمنيو */}
            <Link
              href="/menu"
              onClick={() => setIsOpen(false)}
              className="group flex items-center justify-between p-2.5 rounded-2xl bg-white/70 hover:bg-white border border-black/5 shadow-2xs hover:shadow-xs transition-all duration-200"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-xl bg-[var(--palette-italian-red)]/10 text-[var(--palette-italian-red)] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <UtensilsCrossed size={15} />
                </div>
                <div className="min-w-0">
                  <span className="font-serif text-xs sm:text-sm font-bold text-[var(--palette-espresso)] block truncate">
                    {locale === 'it'
                      ? 'Il Nostro Menu Completo'
                      : locale === 'ar'
                      ? 'قائمة الطعام والمنيو'
                      : 'Explore Full Menu'}
                  </span>
                  <span className="text-[10px] text-[var(--palette-espresso)]/60 block truncate">
                    {locale === 'it' ? 'Tutte le specialità' : locale === 'ar' ? 'جميع الأطباق والمشروبات' : 'All culinary chapters'}
                  </span>
                </div>
              </div>

              <ArrowRight
                size={14}
                className={`text-[var(--palette-espresso)]/40 group-hover:text-[var(--palette-italian-red)] transition-transform group-hover:translate-x-1 ${
                  isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''
                }`}
              />
            </Link>

            {/* 1.5. تحميل قائمة الطعام PDF المعتمدة */}
            <a
              href="/menu/tre-fratelli-menu.pdf"
              download="Tre-Fratelli-Menu.pdf"
              onClick={() => setIsOpen(false)}
              className="group flex items-center justify-between p-2.5 rounded-2xl bg-[var(--palette-warm-ivory)]/80 hover:bg-white border border-[var(--palette-aged-brass)]/30 shadow-2xs hover:shadow-xs transition-all duration-200"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-xl bg-[var(--palette-aged-brass)]/15 text-[var(--palette-aged-brass)] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Download size={15} />
                </div>
                <div className="min-w-0">
                  <span className="font-serif text-xs sm:text-sm font-bold text-[var(--palette-espresso)] block truncate">
                    {locale === 'it'
                      ? 'Scarica Menù PDF'
                      : locale === 'ar'
                      ? 'تحميل المنيو الكامل PDF'
                      : 'Download PDF Menu'}
                  </span>
                  <span className="text-[10px] text-[var(--palette-espresso)]/60 block truncate">
                    {locale === 'it' ? '10 pagine · Originale (6.4 MB)' : locale === 'ar' ? 'النسخة الأصلية · 10 صفحات' : '10 pages · Official (6.4 MB)'}
                  </span>
                </div>
              </div>

              <Download
                size={14}
                className="text-[var(--palette-espresso)]/40 group-hover:text-[var(--palette-italian-red)] transition-colors shrink-0"
              />
            </a>

            {/* 2. لينك لحجز طرابيزة */}
            <Link
              href="/location"
              onClick={() => setIsOpen(false)}
              className="group flex items-center justify-between p-2.5 rounded-2xl bg-white/70 hover:bg-white border border-black/5 shadow-2xs hover:shadow-xs transition-all duration-200"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <CalendarDays size={15} />
                </div>
                <div className="min-w-0">
                  <span className="font-serif text-xs sm:text-sm font-bold text-[var(--palette-espresso)] block truncate">
                    {locale === 'it'
                      ? 'Prenota un Tavolo'
                      : locale === 'ar'
                      ? 'حجز طاولة بالمطعم'
                      : 'Reserve a Table'}
                  </span>
                  <span className="text-[10px] text-[var(--palette-espresso)]/60 block truncate">
                    {locale === 'it' ? 'Pranzo e cena' : locale === 'ar' ? 'حجز مسبق فوري' : 'Lunch & dinner'}
                  </span>
                </div>
              </div>

              <ArrowRight
                size={14}
                className={`text-[var(--palette-espresso)]/40 group-hover:text-[var(--palette-italian-red)] transition-transform group-hover:translate-x-1 ${
                  isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''
                }`}
              />
            </Link>

            {/* 3. لينك لمعلومات التواصل والـ Google Maps -> الانتقال للـ Footer */}
            <a
              href="#footer"
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
                const footerEl = document.getElementById('footer');
                if (footerEl) {
                  footerEl.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                }
              }}
              className="group flex items-center justify-between p-2.5 rounded-2xl bg-white/70 hover:bg-white border border-black/5 shadow-2xs hover:shadow-xs transition-all duration-200 cursor-pointer"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <MapPin size={15} />
                </div>
                <div className="min-w-0">
                  <span className="font-serif text-xs sm:text-sm font-bold text-[var(--palette-espresso)] block truncate">
                    {locale === 'it'
                      ? 'Contatti & Google Maps'
                      : locale === 'ar'
                      ? 'معلومات التواصل وخرائط Google'
                      : 'Contacts & Google Maps'}
                  </span>
                  <span className="text-[10px] text-[var(--palette-espresso)]/60 block truncate">
                    Trezzano sul Naviglio (MI)
                  </span>
                </div>
              </div>

              <ArrowRight
                size={14}
                className={`text-[var(--palette-espresso)]/40 group-hover:text-[var(--palette-italian-red)] transition-transform group-hover:translate-x-1 ${
                  isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''
                }`}
              />
            </a>
          </div>

          {/* ── Direct Google Maps Fast Action Button ── */}
          <div className="pt-1">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[var(--palette-italian-red)] hover:bg-[var(--palette-italian-red-dark)] text-white text-xs font-bold transition-all shadow-2xs"
            >
              <span>
                {locale === 'it'
                  ? 'Apri su Google Maps'
                  : locale === 'ar'
                  ? 'فتح الموقع في Google Maps'
                  : 'Open on Google Maps'}
              </span>
              <ExternalLink size={12} className="opacity-80" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
