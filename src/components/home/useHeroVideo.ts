'use client';

import { useEffect, type RefObject } from 'react';

export function useHeroVideo(videoRef: RefObject<HTMLVideoElement | null>, viewportRef: RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const video = videoRef.current;
    const viewport = viewportRef.current;
    if (!video || !viewport) return;
    let visible = true;
    let disposed = false;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const clearUnlock = () => {
      window.removeEventListener('pointerdown', unlock);
      window.removeEventListener('touchstart', unlock);
    };
    const play = () => {
      if (disposed || !visible || document.hidden || reducedMotion.matches) return;
      video.play()?.catch(() => {
        if (disposed) return;
        window.addEventListener('pointerdown', unlock, { once: true, passive: true });
        window.addEventListener('touchstart', unlock, { once: true, passive: true });
      });
    };
    const unlock = () => { clearUnlock(); play(); };
    const sync = () => {
      if (document.hidden || !visible || reducedMotion.matches) video.pause();
      else play();
    };
    video.defaultMuted = true;
    video.muted = true;
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    }, { threshold: 0.05 });
    observer.observe(viewport);
    sync();
    document.addEventListener('visibilitychange', sync);
    reducedMotion.addEventListener('change', sync);
    return () => {
      disposed = true;
      clearUnlock();
      observer.disconnect();
      document.removeEventListener('visibilitychange', sync);
      reducedMotion.removeEventListener('change', sync);
      video.pause();
    };
  }, [videoRef, viewportRef]);
}
