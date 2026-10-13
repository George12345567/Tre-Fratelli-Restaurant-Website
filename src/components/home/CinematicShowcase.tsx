'use client';

import { useState, useRef, useEffect } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Film,
  Sparkles,
  ArrowRight,
  CalendarDays,
} from 'lucide-react';
import { restaurantVideos } from '@/data/media';
import { getLocalized } from '@/data/types';
import { Link } from '@/i18n/navigation';

interface Props {
  locale: string;
}

export function CinematicShowcase({ locale }: Props) {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isRtl = locale === 'ar';

  const activeVideo = restaurantVideos[activeVideoIndex];

  // Auto-play when changing scenes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false));
      }
    }
  }, [activeVideoIndex]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      const current = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      setProgress((current / duration) * 100);
    }
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-black text-white select-none">
      {/* ── 1. Full-Bleed Video Background ── */}
      <video
        ref={videoRef}
        key={activeVideo.src}
        src={activeVideo.src}
        poster={activeVideo.poster}
        playsInline
        autoPlay
        muted={isMuted}
        loop
        onTimeUpdate={handleTimeUpdate}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
        aria-label={getLocalized(activeVideo.title, locale)}
      >
        <track kind="captions" />
      </video>

      {/* ── 2. Cinematic Multi-Layer Scrim Overlays ── */}
      {/* Top Scrim */}
      <div
        className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-black/90 via-black/50 to-transparent pointer-events-none z-10"
        aria-hidden="true"
      />
      {/* Center Subtle Vignette */}
      <div
        className="absolute inset-0 bg-radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.55) 100%) pointer-events-none z-10"
        aria-hidden="true"
      />
      {/* Bottom Scrim */}
      <div
        className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-black/95 via-black/70 to-transparent pointer-events-none z-10"
        aria-hidden="true"
      />

      {/* ── 3. Top Header Bar: Liquid Badge & Title ── */}
      <header className="relative z-20 pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full liquid-glass-pill text-xs font-semibold tracking-widest uppercase text-white shadow-xs mb-4">
          <Film size={13} className="text-[var(--palette-aged-brass)] shrink-0" aria-hidden="true" />
          <span>
            {locale === 'it'
              ? 'Esperienza Cinematica Immersiva'
              : locale === 'ar'
              ? 'تجربة سينمائية حية بكامل الشاشة'
              : 'Immersive Cinematic Experience'}
          </span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium tracking-normal text-white drop-shadow-md leading-[1.15] max-w-4xl mx-auto">
          {locale === 'it'
            ? 'Un Banchetto per i Sensi'
            : locale === 'ar'
            ? 'وليمة تأسر الحواس والأبصار'
            : 'A Feast for All Senses'}
        </h2>

        <p className="text-xs sm:text-base text-stone-200/90 max-w-2xl mx-auto mt-3 leading-relaxed drop-shadow-sm px-2">
          {locale === 'it'
            ? 'Dalle fiamme del forno a legna alla freschezza del pescato mediterraneo: vivi l anima autentica della nostra cucina.'
            : locale === 'ar'
            ? 'من لهب فرن الحطب المتوقد إلى طزاجة ثمار البحر المتوسطية: عش أجواء مطبخنا وتفاصيل أطباقنا الفاخرة.'
            : 'From the glowing embers of our wood-fired hearth to pristine Mediterranean seafood: experience the soul of our kitchen.'}
        </p>
      </header>

      {/* ── 4. Center Play/Pause Glass Trigger ── */}
      <div className="relative z-20 flex items-center justify-center my-auto py-8">
        <button
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause cinematic scene' : 'Play cinematic scene'}
          className="group relative w-16 h-16 sm:w-20 sm:h-20 rounded-full liquid-glass-pill flex items-center justify-center text-white hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_12px_36px_rgba(0,0,0,0.5)] border border-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
        >
          {isPlaying ? (
            <Pause size={24} className="sm:size-7 drop-shadow-sm" aria-hidden="true" />
          ) : (
            <Play size={24} className="sm:size-7 ml-1 drop-shadow-sm" aria-hidden="true" />
          )}

          {/* Pulsing subtle liquid ring */}
          <span
            className="absolute inset-0 rounded-full border border-white/30 animate-ping opacity-30 pointer-events-none"
            aria-hidden="true"
          />
        </button>
      </div>

      {/* ── 5. Bottom Control Island & Scene Switcher ── */}
      <footer className="relative z-20 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full space-y-6">
        {/* Active Scene Description Card */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 p-4 sm:p-5 rounded-3xl liquid-glass border border-white/30 backdrop-blur-2xl">
          <div className="space-y-1.5 min-w-0">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--palette-aged-brass)]">
              <Sparkles size={13} className="shrink-0" aria-hidden="true" />
              <span>
                {locale === 'it' ? 'Scena Attiva' : locale === 'ar' ? 'المشهد المعروض' : 'Current Scene'}
              </span>
              <span className="text-white/40">•</span>
              <span className="text-white/80 font-mono text-[11px]">
                0{activeVideoIndex + 1} / 0{restaurantVideos.length}
              </span>
            </div>

            <h3 className="font-serif text-lg sm:text-xl font-bold text-white leading-tight">
              {getLocalized(activeVideo.title, locale)}
            </h3>

            <p className="text-xs sm:text-sm text-stone-200/90 leading-relaxed max-w-2xl">
              {getLocalized(activeVideo.description, locale)}
            </p>
          </div>

          {/* Quick Sound Control Button */}
          <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
            <button
              type="button"
              onClick={toggleMute}
              aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full liquid-glass-pill hover:bg-white/20 text-xs font-semibold text-white transition-all shadow-xs"
            >
              {isMuted ? (
                <>
                  <VolumeX size={15} aria-hidden="true" />
                  <span className="hidden sm:inline">
                    {locale === 'it' ? 'Attiva Audio' : locale === 'ar' ? 'تشغيل الصوت' : 'Unmute'}
                  </span>
                </>
              ) : (
                <>
                  <Volume2 size={15} className="text-[var(--palette-italian-red)]" aria-hidden="true" />
                  <span className="hidden sm:inline">
                    {locale === 'it' ? 'Disattiva Audio' : locale === 'ar' ? 'كتم الصوت' : 'Mute'}
                  </span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Progress Timeline Indicator */}
        <div
          className="w-full h-1 bg-white/20 rounded-full overflow-hidden"
          role="progressbar"
          aria-valuenow={Math.round(progress)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Scene playback progress"
        >
          <div
            className="h-full bg-gradient-to-r from-[var(--palette-aged-brass)] to-[var(--palette-italian-red)] transition-all duration-150 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Scene Selector Tabs (Touch & Mobile Ergonomic) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3.5">
          {restaurantVideos.map((video, idx) => {
            const isActive = idx === activeVideoIndex;

            return (
              <button
                key={video.id}
                type="button"
                onClick={() => setActiveVideoIndex(idx)}
                className={`p-3 sm:p-3.5 rounded-2xl text-start transition-all duration-300 flex items-center gap-3 border ${
                  isActive
                    ? 'liquid-glass-pill text-white border-white/80 shadow-md ring-1 ring-white/50'
                    : 'bg-black/40 hover:bg-black/60 border-white/10 text-stone-300 backdrop-blur-md'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isActive
                      ? 'bg-[var(--palette-italian-red)] text-white'
                      : 'bg-white/10 text-stone-300'
                  }`}
                >
                  <Play size={13} className="ml-0.5" aria-hidden="true" />
                </div>

                <div className="min-w-0 flex-1">
                  <span className="text-[10px] font-mono uppercase text-stone-400 block">
                    0{idx + 1}
                  </span>
                  <h4 className="font-serif text-xs sm:text-sm font-semibold truncate text-white">
                    {getLocalized(video.title, locale)}
                  </h4>
                </div>
              </button>
            );
          })}
        </div>

        {/* Bottom CTA Group */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
          <Link
            href="/location"
            className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-gradient-to-r from-[var(--palette-italian-red)] to-[var(--palette-italian-red-dark)] text-white text-xs sm:text-sm font-semibold hover:brightness-105 active:scale-[0.98] transition-all shadow-[0_4px_16px_rgba(122,46,42,0.4)] border border-white/20"
          >
            <CalendarDays size={14} aria-hidden="true" />
            <span>
              {locale === 'it' ? 'Prenota un Tavolo' : locale === 'ar' ? 'احجز طاولتك الآن' : 'Reserve a Table'}
            </span>
          </Link>

          <Link
            href="/menu"
            className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full liquid-glass-pill text-white hover:bg-white/20 text-xs sm:text-sm font-semibold transition-all border border-white/40"
          >
            <span>
              {locale === 'it' ? 'Esplora il Menu' : locale === 'ar' ? 'استكشف قائمة الطعام' : 'Explore Menu'}
            </span>
            <ArrowRight size={14} className={isRtl ? 'rotate-180' : ''} aria-hidden="true" />
          </Link>
        </div>
      </footer>
    </section>
  );
}
