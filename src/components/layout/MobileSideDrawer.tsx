'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { X, CalendarDays } from 'lucide-react';
import { navItems } from '@/data/navigation';
import type { Locale } from '@/i18n/routing';

interface MobileSideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  locale: Locale;
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.35, ease: 'easeOut' as const },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.25, ease: 'easeIn' as const },
  },
};

const menuListVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.12,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.2 },
  },
};

export function MobileSideDrawer({
  isOpen,
  onClose,
}: MobileSideDrawerProps) {
  const t = useTranslations();
  const pathname = usePathname();

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

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={t('accessibility.openMenu')}
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-[100] flex flex-col justify-between items-center bg-[var(--palette-espresso)]/95 backdrop-blur-2xl text-[var(--palette-warm-ivory)] overflow-hidden px-6 py-7 sm:py-9 pointer-events-auto"
        >
          {/* Subtle Ambient Radial Glow Behind Center Menu */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[500px] sm:h-[500px] rounded-full bg-gradient-to-tr from-[var(--palette-italian-red)]/20 via-[var(--palette-aged-brass)]/15 to-transparent blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          {/* ── Top Bar: Brand Logo & Minimalist Close Button ── */}
          <div className="w-full max-w-4xl flex items-center justify-between z-10">
            <Link
              href="/"
              onClick={onClose}
              className="flex items-center gap-3 opacity-90 hover:opacity-100 transition-opacity focus:outline-none"
            >
              <img
                src="/images/brand/tre-fratelli-official-logo.png"
                alt="Tre Fratelli Logo"
                className="h-9 sm:h-10 w-auto object-contain filter drop-shadow-md brightness-105"
              />
            </Link>

            <button
              type="button"
              onClick={onClose}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-white/20 text-white/90 hover:text-white border border-white/15 flex items-center justify-center transition-all cursor-pointer active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--palette-aged-brass)]"
              aria-label={t('accessibility.closeMenu')}
            >
              <X size={20} />
            </button>
          </div>

          {/* ── Center Screen: Clean Nav Items Animated In Cascade ── */}
          <div className="flex-1 flex flex-col justify-center items-center w-full z-10 py-4 sm:py-6">
            <motion.nav
              variants={menuListVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              aria-label="Navigation"
              className="flex flex-col items-center justify-center gap-2.5 sm:gap-3.5 md:gap-4 text-center w-full max-w-md"
            >
              {navItems.map((item) => {
                const rawHref =
                  item.key === 'home'
                    ? '/'
                    : `/${item.key === 'wineDrinks' ? 'wine-drinks' : item.key === 'newsPromo' ? 'news-promo' : item.key}`;
                const isActive =
                  item.key === 'home'
                    ? pathname === '/'
                    : pathname.startsWith(rawHref);

                return (
                  <motion.div key={item.key} variants={itemVariants} className="w-full">
                    <Link
                      href={rawHref}
                      onClick={onClose}
                      className={`group relative inline-flex items-center justify-center gap-2 py-2 sm:py-2.5 px-6 font-serif text-2xl sm:text-3xl md:text-4xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--palette-aged-brass)] rounded-full ${
                        isActive
                          ? 'text-[var(--palette-aged-brass)] font-semibold scale-105'
                          : 'text-[var(--palette-warm-ivory)]/85 hover:text-white hover:scale-105'
                      }`}
                    >
                      {isActive && (
                        <span
                          className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[var(--palette-aged-brass)] shadow-[0_0_8px_var(--palette-aged-brass)] shrink-0"
                          aria-hidden="true"
                        />
                      )}
                      <span>{t(item.translationKey)}</span>
                    </Link>
                  </motion.div>
                );
              })}

              {/* Minimal Reservation Action */}
              <motion.div variants={itemVariants} className="pt-4 sm:pt-6">
                <Link
                  href="/location"
                  onClick={onClose}
                  className="inline-flex items-center gap-2 px-6 py-2.5 sm:px-8 sm:py-3 rounded-full bg-gradient-to-r from-[var(--palette-italian-red)] to-[var(--palette-italian-red-dark)] text-white text-xs sm:text-sm font-semibold tracking-wider shadow-[0_8px_25px_rgba(122,46,42,0.45)] border border-white/20 hover:brightness-110 active:scale-95 transition-all"
                >
                  <CalendarDays size={16} aria-hidden="true" />
                  <span>{t('nav.reserve')}</span>
                </Link>
              </motion.div>
            </motion.nav>
          </div>

          {/* ── Bottom Mark: Delicate Restaurant Signature ── */}
          <div className="w-full flex justify-center items-center z-10 pt-2 opacity-50 text-[11px] sm:text-xs tracking-widest uppercase font-sans">
            <span>Tre Fratelli · Milano</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
