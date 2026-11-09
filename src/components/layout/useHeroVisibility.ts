'use client';

import { useEffect, useState } from 'react';

export function useHeroVisibility(pathname: string) {
  const [inView, setInView] = useState(true);
  useEffect(() => {
    if (pathname !== '/') return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      rootMargin: '-80px 0px 0px 0px',
      threshold: 0,
    });
    const observeHero = () => {
      const hero = document.getElementById('home-hero');
      if (!hero) return false;
      observer.observe(hero);
      return true;
    };
    // Also covers a streamed home route arriving after the layout effect.
    const pending = new MutationObserver(() => {
      if (observeHero()) pending.disconnect();
    });
    if (!observeHero()) pending.observe(document.body, { childList: true, subtree: true });
    return () => { observer.disconnect(); pending.disconnect(); };
  }, [pathname]);
  return pathname === '/' && inView;
}
