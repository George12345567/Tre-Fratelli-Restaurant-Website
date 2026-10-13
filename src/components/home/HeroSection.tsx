'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { CalendarDays, ArrowRight, Volume2, VolumeX } from 'lucide-react';
import { Link } from '@/i18n/navigation';

const HERO_VIDEOS = [
  '/video/tre-fratelli-feast-cinematic.mp4',
  '/video/tre-fratelli-dishes-showcase.mp4',
  '/video/tre-fratelli-delicacies-montage.mp4',
] as const;

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

export function HeroSection({
  isRtl,
  translations,
}: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const playActiveVideo = useCallback((index: number, mutedState: boolean) => {
    const video = videoRefs.current[index];
    if (!video) return;
    video.muted = mutedState;
    video.defaultMuted = mutedState;
    video.playsInline = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Fallback if browser restricts initial autoplay
      });
    }
  }, []);

  useEffect(() => {
    playActiveVideo(activeIndex, isMuted);

    const onUserInteraction = () => {
      const currentVideo = videoRefs.current[activeIndex];
      if (currentVideo && currentVideo.paused) {
        playActiveVideo(activeIndex, isMuted);
      }
    };

    window.addEventListener('pointerdown', onUserInteraction, { once: true, passive: true });
    window.addEventListener('touchstart', onUserInteraction, { once: true, passive: true });
    window.addEventListener('scroll', onUserInteraction, { once: true, passive: true });
    window.addEventListener('keydown', onUserInteraction, { once: true, passive: true });

    return () => {
      window.removeEventListener('pointerdown', onUserInteraction);
      window.removeEventListener('touchstart', onUserInteraction);
      window.removeEventListener('scroll', onUserInteraction);
      window.removeEventListener('keydown', onUserInteraction);
    };
  }, [activeIndex, isMuted, playActiveVideo]);

  const handleVideoEnded = (endedIndex: number) => {
    const nextIndex = (endedIndex + 1) % HERO_VIDEOS.length;
    const nextVideo = videoRefs.current[nextIndex];
    if (nextVideo) {
      nextVideo.currentTime = 0;
      nextVideo.muted = isMuted;
      nextVideo.play().catch(() => {});
    }
    setActiveIndex(nextIndex);
  };

  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    videoRefs.current.forEach((video) => {
      if (video) {
        video.muted = nextMuted;
      }
    });
  };

  return (
    <section className="relative -mt-20 sm:-mt-24 h-screen min-h-[640px] w-full overflow-hidden bg-black text-white select-none">
      {/* ── 1. Unified Continuous 3-Part Video Background (Pure Cinematic Clarity) ── */}
      {HERO_VIDEOS.map((src, idx) => {
        const isCurrent = idx === activeIndex;
        return (
          <video
            key={src}
            ref={(el) => {
              videoRefs.current[idx] = el;
            }}
            src={src}
            playsInline
            autoPlay={isCurrent}
            muted={isMuted}
            preload="auto"
            onEnded={() => handleVideoEnded(idx)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isCurrent ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
            aria-hidden="true"
          />
        );
      })}

      {/* ── 2. Screen-Filling Grand Typography (Top/Center Area, Zero Box) ── */}
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

      {/* ── 3. Bottom Action Row: Sleek Buttons + Sound Control (Very Bottom) ── */}
      <div className="absolute bottom-6 sm:bottom-8 lg:bottom-10 inset-x-0 px-5 sm:px-10 lg:px-16 z-20 flex items-center justify-between gap-4 pointer-events-auto">
        {/* The Two Action Buttons (Sleek, Unobtrusive, Liquid-Glass) */}
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

        {/* Small Audio Control Button (Bottom-End Corner) */}
        <button
          type="button"
          onClick={toggleMute}
          aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full liquid-glass-pill hover:bg-white/20 flex items-center justify-center text-white border border-white/35 backdrop-blur-xl transition-all shadow-md active:scale-95 cursor-pointer shrink-0"
        >
          {isMuted ? (
            <VolumeX size={16} aria-hidden="true" />
          ) : (
            <Volume2 size={16} className="text-[var(--palette-italian-red)]" aria-hidden="true" />
          )}
        </button>
      </div>
    </section>
  );
}
