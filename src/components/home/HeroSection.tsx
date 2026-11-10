'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, type MotionStyle } from 'motion/react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { useHeroVideo } from './useHeroVideo';
import styles from './HeroSection.module.css';

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

export function HeroSection({ locale = 'en', isRtl, translations }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = usePrefersReducedMotion();
  useHeroVideo(videoRef, viewportRef);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.02, 1.1]);
  // Reach the lower edge before the sticky viewport releases, then hold briefly.
  const textPosition = useTransform(scrollYProgress, [0, 0.88, 1], [0, 1, 1]);
  const progress = useTransform(scrollYProgress, [0, 1], [0.08, 1]);
  // Mobile logo scroll timing: smoothly fades & floats up early (10%-25%) so it never collides with ascending text
  const mobileLogoOpacity = useTransform(scrollYProgress, [0, 0.1, 0.25], [1, 0.4, 0]);
  const mobileLogoY = useTransform(scrollYProgress, [0, 0.25], [0, -16]);
  const mobileLogoScale = useTransform(scrollYProgress, [0, 0.25], [1, 0.94]);
  const scrollHint = locale === 'ar' ? 'مرّر لاكتشاف المزيد' : locale === 'it' ? 'Scorri per scoprire' : 'Scroll to discover';

  return (
    <section id="home-hero" ref={sectionRef} className={styles.section} aria-labelledby="home-hero-title">
      <div ref={viewportRef} className={styles.viewport}>
        <motion.div className="absolute inset-0" style={reduceMotion ? undefined : { scale }}>
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${HERO_POSTER_SRC}')` }} aria-hidden="true" />
          <video ref={videoRef} src={HERO_VIDEO_SRC} poster={HERO_POSTER_SRC} playsInline loop muted preload="auto" className="absolute inset-0 w-full h-full object-cover" aria-hidden="true" />
        </motion.div>
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/20 to-black/85 pointer-events-none" aria-hidden="true" />

        {/* ── Mobile-Only Cinematic Brand Emblem Embedded in Video Viewport ── */}
        <motion.div
          className={styles.mobileEmblem}
          style={reduceMotion ? undefined : { opacity: mobileLogoOpacity, y: mobileLogoY, scale: mobileLogoScale }}
          aria-hidden="true"
        >
          <div className={styles.mobileEmblemInner}>
            {/* Soft Ambient Cinematic Vignette behind Crest */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 sm:w-44 h-24 sm:h-28 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.7),transparent_72%)] pointer-events-none blur-lg"
              aria-hidden="true"
            />
            <Image
              src="/images/brand/tre-fratelli-official-logo.png"
              alt="Tre Fratelli"
              width={260}
              height={195}
              priority
              className="relative h-16 sm:h-20 w-auto object-contain filter drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)] brightness-105 select-none"
            />
          </div>
        </motion.div>

        <motion.div className={styles.content} style={{ '--hero-position': reduceMotion ? 0 : textPosition } as MotionStyle}>
          <div className="mx-auto max-w-5xl text-center">
            <p className="flex items-center justify-center gap-3 text-[10px] sm:text-xs uppercase tracking-[0.18em] text-amber-100/90 mb-4">
              <span aria-hidden="true" className="block h-px w-7 bg-amber-100/70" />{translations.heroEyebrow}
            </p>
            <h1 id="home-hero-title" className={`${styles.title} mx-auto font-serif font-medium`}>{translations.heroTitle}</h1>
            <p className="mt-4 mx-auto max-w-xl text-sm sm:text-base text-white/85 leading-relaxed">{translations.heroCopy}</p>
          </div>
          <div className="mt-7 sm:mt-9 flex flex-wrap justify-center items-center gap-5 sm:gap-8">
            <Link href="/menu" className={`${styles.menuLink} group rounded-sm focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-white`}>
              <span className="space-y-2">
                <span className="block text-sm sm:text-base font-medium tracking-wide">{translations.viewMenu}</span>
                <span aria-hidden="true" className={styles.menuLine} />
              </span>
              <span className={styles.menuArrow} aria-hidden="true"><ArrowRight size={24} className={isRtl ? 'rotate-180' : ''} /></span>
            </Link>
            <a href="#home-menu-scroll" className="inline-flex min-h-11 items-center gap-2 text-[10px] sm:text-xs text-white/70 hover:text-white transition-colors">
              <span>{scrollHint}</span><ArrowDown size={13} aria-hidden="true" />
            </a>
          </div>
        </motion.div>
        <motion.div aria-hidden="true" className="absolute bottom-0 inset-x-0 h-px bg-amber-100/60 z-30" style={{ scaleX: reduceMotion ? 1 : progress, transformOrigin: isRtl ? 'right' : 'left' }} />
      </div>
    </section>
  );
}
