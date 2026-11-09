'use client';

import { useRef, useEffect } from 'react';
import { CalendarDays, ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';

const HERO_VIDEO_SRC = '/video/tre-fratelli-hero.mp4';
const HERO_POSTER_SRC = '/images/hero-poster.webp';

interface Props {
  locale?: string;
  isRtl: boolean;
  translations: {
    heroEyebrow: string;
    heroTitle: string;
    heroCopy: string;
    reserveTable: string;
    viewMenu: string;
  };
}

export function HeroSection({ isRtl, translations }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // ── Rock-Solid Autoplay & Intersection Observer ──
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Explicitly enforce muted attributes to satisfy all browser autoplay policies
    video.defaultMuted = true;
    video.muted = true;

    const playVideo = () => {
      const promise = video.play();
      if (promise !== undefined) {
        promise.catch(() => {
          // If browser initially defered autoplay, start upon first interaction
          const unlock = () => {
            video.play().catch(() => {});
            window.removeEventListener('pointerdown', unlock);
            window.removeEventListener('touchstart', unlock);
            window.removeEventListener('scroll', unlock);
          };
          window.addEventListener('pointerdown', unlock, { once: true, passive: true });
          window.addEventListener('touchstart', unlock, { once: true, passive: true });
          window.addEventListener('scroll', unlock, { once: true, passive: true });
        });
      }
    };

    // Attempt playback immediately on mount
    playVideo();

    // Pause when scrolled out of view, resume when back in view
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          playVideo();
        } else {
          video.pause();
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(section);

    // Tab visibility handling (pause when tab hidden, resume when active)
    const onVisibilityChange = () => {
      if (document.hidden) {
        video.pause();
      } else {
        const rect = section.getBoundingClientRect();
        if (rect.bottom > 0 && rect.top < window.innerHeight) {
          playVideo();
        }
      }
    };

    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative -mt-20 sm:-mt-24 h-screen min-h-[640px] w-full overflow-hidden bg-black text-white select-none"
    >
      {/* ── Layer 1: Instant Poster Frame Background (Zero Black Screen / Zero Flash) ── */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0 scale-100"
        style={{ backgroundImage: `url('${HERO_POSTER_SRC}')` }}
        aria-hidden="true"
      />

      {/* ── Layer 2: Main Continuous Video (Faststart Streaming, Pure Visual Muted) ── */}
      <video
        ref={videoRef}
        src={HERO_VIDEO_SRC}
        poster={HERO_POSTER_SRC}
        playsInline
        autoPlay
        loop
        muted
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-10"
        aria-hidden="true"
      />

      {/* ── Layer 3: Contrast Protection Ambient Gradient Overlays ── */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/60 z-15 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/60 z-15 pointer-events-none"
        aria-hidden="true"
      />

      {/* ── Layer 4: Screen-Filling Grand Typography (Top/Center Area) ── */}
      <div className="absolute top-24 sm:top-32 lg:top-36 inset-x-0 px-5 sm:px-10 lg:px-16 z-20 pointer-events-auto">
        <div className="max-w-4xl lg:max-w-5xl text-start space-y-3 sm:space-y-4">
          {/* Animated Cool Brand Wordmark & Milano Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-black/45 backdrop-blur-xl border border-white/30 shadow-[0_0_24px_rgba(176,138,87,0.3)]">
            <span className="flex items-center gap-1 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse delay-75" />
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--palette-italian-red)] animate-pulse delay-150" />
            </span>
            <span className="text-xs sm:text-sm font-serif font-bold tracking-[0.22em] uppercase bg-gradient-to-r from-amber-200 via-white to-amber-300 bg-clip-text text-transparent animate-shimmer drop-shadow-sm">
              {translations.heroEyebrow}
            </span>
          </div>

          {/* Majestic Screen-Filling Headline */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-normal text-white leading-[1.12] drop-shadow-[0_2px_16px_rgba(0,0,0,0.9)]">
            {translations.heroTitle}
          </h1>

          {/* Subtitle Copy */}
          <p className="text-sm sm:text-base lg:text-xl text-stone-100/95 leading-relaxed max-w-2xl drop-shadow-[0_1px_8px_rgba(0,0,0,0.95)]">
            {translations.heroCopy}
          </p>
        </div>
      </div>

      {/* ── Layer 5: Bottom Action Row: Sleek Action Buttons (No Volume Control) ── */}
      <div className="absolute bottom-6 sm:bottom-8 lg:bottom-10 inset-x-0 px-5 sm:px-10 lg:px-16 z-20 flex items-center justify-between gap-4 pointer-events-auto">
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5">
          <Link
            href="/location"
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[var(--palette-italian-red)] to-[var(--palette-italian-red-dark)] hover:brightness-110 active:scale-95 text-white font-semibold text-xs sm:text-sm transition-all shadow-[0_4px_16px_rgba(122,46,42,0.45)] border border-white/20"
          >
            <CalendarDays size={15} aria-hidden="true" />
            <span>{translations.reserveTable}</span>
          </Link>

          <Link
            href="/menu"
            className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full liquid-glass-pill hover:bg-white/20 active:scale-95 text-white font-semibold text-xs sm:text-sm transition-all border border-white/30 backdrop-blur-xl shadow-xs"
          >
            <span>{translations.viewMenu}</span>
            <ArrowRight
              size={14}
              className={`transition-transform duration-200 ${isRtl ? 'rotate-180' : ''}`}
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
