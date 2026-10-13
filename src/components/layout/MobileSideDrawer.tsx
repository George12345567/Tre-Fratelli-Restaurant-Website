'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/navigation';
import {
  X,
  Home,
  BookOpen,
  UtensilsCrossed,
  Wine,
  Sparkles,
  MapPin,
  CalendarDays,
  Phone,
  Globe,
} from 'lucide-react';
import { navItems, type PageKey } from '@/data/navigation';
import type { Locale } from '@/i18n/routing';

interface MobileSideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  locale: Locale;
}

const navIcons: Record<PageKey, React.ComponentType<{ size?: number; className?: string }>> = {
  home: Home,
  restaurant: BookOpen,
  pizzeria: UtensilsCrossed,
  menu: UtensilsCrossed,
  wineDrinks: Wine,
  newsPromo: Sparkles,
  location: MapPin,
};

const languages: Array<{ code: Locale; label: string; native: string }> = [
  { code: 'ar', label: 'العربية', native: 'العربية' },
  { code: 'it', label: 'Italiano', native: 'Italiano' },
  { code: 'en', label: 'English', native: 'English' },
];

export function MobileSideDrawer({
  isOpen,
  onClose,
  locale,
}: MobileSideDrawerProps) {
  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();
  const isRtl = locale === 'ar';

  // Handle ESC key and scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleLanguageChange = (newLocale: Locale) => {
    if (newLocale !== locale) {
      router.replace(pathname, { locale: newLocale });
    }
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 z-[100] transition-visibility duration-300 ${
        isOpen ? 'visible pointer-events-auto' : 'invisible pointer-events-none'
      }`}
      aria-hidden={!isOpen}
    >
      {/* ── Dark Translucent Backdrop Overlay ── */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/45 backdrop-blur-xs transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden="true"
      />

      {/* ── Liquid Glass Off-Canvas Drawer (Anchored to button position) ── */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label={t('accessibility.openMenu')}
        className={`fixed inset-y-0 ${
          isRtl ? 'left-0' : 'right-0'
        } w-[86vw] max-w-[340px] liquid-glass-drawer text-[var(--palette-espresso)] shadow-2xl flex flex-col justify-between z-[101] border-white/80 ${
          isRtl ? 'border-r' : 'border-l'
        } transition-transform duration-300 ease-out ${
          isOpen
            ? 'translate-x-0'
            : isRtl
            ? '-translate-x-full'
            : 'translate-x-full'
        }`}
      >
        {/* Specular Glint Top Highlight */}
        <div
          className="absolute inset-x-6 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/90 to-transparent pointer-events-none rounded-full"
          aria-hidden="true"
        />

        {/* ── Drawer Header: Brand Logo & Title + Close Button ── */}
        <div className="p-4 sm:p-5 border-b border-black/[0.06] bg-white/40 backdrop-blur-md flex items-center justify-between gap-3">
          <Link
            href="/"
            onClick={onClose}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[var(--palette-aged-brass)]/70 shadow-xs shrink-0 group-hover:scale-105 transition-transform">
              <img
                src="/images/brand/tre-fratelli-logo-red.jpg"
                alt="Tre Fratelli Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="font-serif text-base font-bold tracking-wide text-[var(--palette-espresso)] block leading-tight">
                TRE FRATELLI
              </span>
              <span className="text-[10px] uppercase tracking-wider text-[var(--palette-aged-brass)] font-sans font-semibold">
                Ristorante & Pizzeria
              </span>
            </div>
          </Link>

          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/70 hover:bg-white text-[var(--palette-espresso)] border border-white/90 shadow-xs flex items-center justify-center transition-all cursor-pointer active:scale-95 focus:outline-none focus:ring-2 focus:ring-[var(--palette-aged-brass)]"
            aria-label={t('accessibility.closeMenu')}
          >
            <X size={18} />
          </button>
        </div>

        {/* ── Drawer Navigation Body ── */}
        <div className="flex-1 overflow-y-auto px-4 py-5 space-y-2">
          <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
            {navItems.map((item) => {
              const rawHref =
                item.key === 'home'
                  ? '/'
                  : `/${item.key === 'wineDrinks' ? 'wine-drinks' : item.key === 'newsPromo' ? 'news-promo' : item.key}`;
              const isActive = item.key === 'home' ? pathname === '/' : pathname.startsWith(rawHref);
              const Icon = navIcons[item.key] || UtensilsCrossed;

              return (
                <Link
                  key={item.key}
                  href={rawHref}
                  onClick={onClose}
                  className={`px-3.5 py-3 rounded-2xl flex items-center justify-between text-sm transition-all duration-200 ${
                    isActive
                      ? 'liquid-glass-item-active text-white font-bold'
                      : 'liquid-glass-item hover:bg-white/80 text-[var(--palette-espresso)] font-medium hover:translate-x-0.5 rtl:hover:-translate-x-0.5'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                        isActive
                          ? 'bg-white/20 text-white'
                          : 'bg-[var(--palette-italian-red)]/10 text-[var(--palette-italian-red)]'
                      }`}
                    >
                      <Icon size={17} aria-hidden="true" />
                    </div>
                    <span className="font-serif text-sm">
                      {t(item.translationKey)}
                    </span>
                  </div>

                  <span
                    className={`text-xs ${
                      isActive ? 'text-white/85 font-bold' : 'text-stone-400'
                    } ${isRtl ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* ── Drawer Footer: Language Switcher + Reserve CTA + Contacts ── */}
        <div className="p-4 sm:p-5 border-t border-black/[0.06] bg-white/40 backdrop-blur-md space-y-3.5">
          {/* Language Switcher Buttons (Liquid Glass Pills) */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[var(--palette-espresso)]/70 uppercase tracking-wider">
              <Globe size={12} aria-hidden="true" />
              <span>{locale === 'ar' ? 'اللغة' : locale === 'it' ? 'Lingua' : 'Language'}</span>
            </div>

            <div className="grid grid-cols-3 gap-1.5 bg-black/[0.04] p-1 rounded-2xl border border-black/[0.06] backdrop-blur-xs">
              {languages.map((lng) => {
                const isSelected = lng.code === locale;
                return (
                  <button
                    key={lng.code}
                    type="button"
                    onClick={() => handleLanguageChange(lng.code)}
                    className={`py-1.5 px-2 rounded-xl text-xs transition-all cursor-pointer text-center ${
                      isSelected
                        ? 'liquid-glass-pill text-[var(--palette-italian-red)] font-bold shadow-xs'
                        : 'text-[var(--palette-espresso)]/75 hover:text-black hover:bg-white/40 font-medium'
                    }`}
                  >
                    {lng.native}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Primary Table Reservation Action */}
          <Link
            href="/location"
            onClick={onClose}
            className="w-full py-3 rounded-full bg-gradient-to-r from-[var(--palette-italian-red)] to-[var(--palette-italian-red-dark)] text-white font-semibold text-xs tracking-wide flex items-center justify-center gap-2 shadow-[0_6px_20px_rgba(122,46,42,0.35),inset_0_1px_1.5px_rgba(255,255,255,0.5)] border border-white/20 hover:brightness-105 active:scale-[0.98] transition-all"
          >
            <CalendarDays size={15} aria-hidden="true" />
            <span>{t('nav.reserve')}</span>
          </Link>

          {/* Quick Contact & Location Info */}
          <div className="pt-2 border-t border-black/[0.06] flex flex-col gap-1 text-[11px] text-[var(--palette-espresso)]/75">
            <a
              href="tel:+390236557693"
              className="inline-flex items-center gap-1.5 font-semibold text-[var(--palette-espresso)] hover:text-[var(--palette-italian-red)] transition-colors"
            >
              <Phone size={11} aria-hidden="true" />
              <span dir="ltr">+39 02 3655 7693</span>
            </a>
            <div className="inline-flex items-center gap-1.5 text-[10px] text-stone-500">
              <MapPin size={11} aria-hidden="true" />
              <span>Trezzano sul Naviglio (MI)</span>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
