'use client';

import type { Locale } from '@/i18n/routing';
import { HomeMenuDesktopScrollLock } from './HomeMenuDesktopScrollLock';
import { HomeMenuMobilePosters } from './HomeMenuMobilePosters';

interface HomeMenuScrollSectionProps {
  locale: Locale;
}

export function HomeMenuScrollSection({ locale }: HomeMenuScrollSectionProps) {
  return (
    <section id="menu-showcase" className="relative w-full overflow-clip">
      {/* ── Desktop Experience: Interactive Cinematic Scroll-Lock with Staggered Slide-In ── */}
      <HomeMenuDesktopScrollLock locale={locale} />

      {/* ── Mobile Experience: High-Speed Thumb-Friendly Vertical Poster Cards ── */}
      <HomeMenuMobilePosters locale={locale} />
    </section>
  );
}
