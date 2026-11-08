'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { CalendarDays, Menu, X } from 'lucide-react';
import { navItems } from '@/data/navigation';
import type { Locale } from '@/i18n/routing';
import { LanguageDropdown } from './LanguageDropdown';
import { MobileSideDrawer } from './MobileSideDrawer';

interface NavbarProps {
  locale: Locale;
}

export function Navbar({ locale }: NavbarProps) {
  const t = useTranslations();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* ── Soft Top Edge Mask: seamlessly dissolves scrolling text under floating navbar ── */}
      <div
        className="fixed top-0 inset-x-0 h-16 sm:h-20 bg-gradient-to-b from-[var(--palette-warm-ivory)] via-[var(--palette-warm-ivory)]/90 to-transparent z-40 pointer-events-none transition-opacity duration-300"
        aria-hidden="true"
      />

      <header className="fixed top-2 sm:top-3 inset-x-0 z-50 px-3 flex justify-center pointer-events-none transition-all duration-300">
      {/* ── Single Unified Liquid Glass Floating Island ── */}
      <div
        className={`pointer-events-auto relative rounded-full transition-all duration-500 ease-out flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1 sm:py-1.2 shadow-sm ${
          isScrolled ? 'liquid-glass-scrolled' : 'liquid-glass'
        }`}
      >
        {/* Specular Glint Top Highlight */}
        <div
          className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none rounded-full"
          aria-hidden="true"
        />

        {/* ── Desktop View: Brand Icon + Divider + Links + Divider + Lang + Reserve ── */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-1.5">
          {/* Brand Logo */}
          <Link
            href="/"
            aria-label="Tre Fratelli Home"
            className="group flex items-center gap-1.5 px-1.5 py-0.5 rounded-full hover:bg-white/50 transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)]"
          >
            <div className="h-6 sm:h-6.5 w-auto flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <img
                src="/images/brand/tre-fratelli-official-logo.png"
                alt="Tre Fratelli Logo"
                className="h-6 sm:h-6.5 w-auto object-contain filter drop-shadow-2xs"
              />
            </div>
          </Link>

          {/* Divider */}
          <div className="h-3.5 w-[1px] bg-black/[0.08]" aria-hidden="true" />

          {/* Navigation Links */}
          <nav
            aria-label={t('accessibility.skipToContent')}
            className="flex items-center gap-0.5"
          >
            {navItems.map((item) => {
              const rawHref =
                item.key === 'home'
                  ? '/'
                  : `/${item.key === 'wineDrinks' ? 'wine-drinks' : item.key === 'newsPromo' ? 'news-promo' : item.key}`;
              const isActive = item.key === 'home' ? pathname === '/' : pathname.startsWith(rawHref);

              return (
                <Link
                  key={item.key}
                  href={rawHref}
                  className={`text-[0.76rem] xl:text-[0.8rem] font-medium whitespace-nowrap px-2 xl:px-2.5 py-1 rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)] ${
                    isActive
                      ? 'liquid-glass-pill text-[var(--palette-italian-red)] font-semibold shadow-xs'
                      : 'text-[var(--palette-espresso)]/80 hover:text-[var(--palette-espresso)] hover:bg-white/40'
                  }`}
                >
                  {t(item.translationKey)}
                </Link>
              );
            })}
          </nav>

          {/* Divider */}
          <div className="h-3.5 w-[1px] bg-black/[0.08]" aria-hidden="true" />

          {/* Language Dropdown */}
          <LanguageDropdown currentLocale={locale} />

          {/* Reserve CTA */}
          <Link
            href="/location"
            className="group relative inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-[var(--palette-italian-red)] to-[var(--palette-italian-red-dark)] text-white text-[11px] sm:text-xs font-semibold whitespace-nowrap shadow-[0_3px_12px_rgba(122,46,42,0.3),inset_0_1px_1px_rgba(255,255,255,0.45)] hover:shadow-[0_5px_16px_rgba(122,46,42,0.4),inset_0_1px_1.5px_rgba(255,255,255,0.65)] hover:brightness-105 active:scale-[0.98] transition-all overflow-hidden border border-white/20"
          >
            {/* Shimmer light bar across button */}
            <div
              className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none"
              aria-hidden="true"
            />
            <CalendarDays size={12} aria-hidden="true" />
            <span>{t('nav.reserve')}</span>
          </Link>

          {/* Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-full text-[var(--palette-espresso)]/85 hover:text-[var(--palette-espresso)] hover:bg-white/50 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)] cursor-pointer"
            aria-label={mobileMenuOpen ? t('accessibility.closeMenu') : t('accessibility.openMenu')}
          >
            {mobileMenuOpen ? <X size={15} /> : <Menu size={15} />}
          </button>
        </div>

        {/* ── Mobile/Tablet View ── */}
        <div className="flex lg:hidden items-center gap-1.5">
          <Link
            href="/"
            aria-label="Tre Fratelli Home"
            className="p-0.5 rounded-full focus:outline-none hover:bg-white/40 transition-colors"
          >
            <div className="h-6 w-auto flex items-center justify-center shrink-0">
              <img
                src="/images/brand/tre-fratelli-official-logo.png"
                alt="Tre Fratelli Logo"
                className="h-6 w-auto object-contain filter drop-shadow-2xs"
              />
            </div>
          </Link>

          <LanguageDropdown currentLocale={locale} />

          <Link
            href="/location"
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gradient-to-r from-[var(--palette-italian-red)] to-[var(--palette-italian-red-dark)] text-white text-[11px] font-semibold shadow-xs whitespace-nowrap border border-white/20"
          >
            <CalendarDays size={11} aria-hidden="true" />
            <span>{t('nav.reserve')}</span>
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1 rounded-full text-[var(--palette-espresso)] hover:bg-white/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            aria-label={mobileMenuOpen ? t('accessibility.closeMenu') : t('accessibility.openMenu')}
          >
            {mobileMenuOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Side Drawer (Solid High-Legibility Off-Canvas) ── */}
      <MobileSideDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        locale={locale}
      />
    </header>
    </>
  );
}
