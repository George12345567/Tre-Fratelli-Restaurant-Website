'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { ZoomIn, X } from 'lucide-react';
import type { Locale } from '@/i18n/routing';
import type { EditorialPhoto } from '@/data/menu/editorialGalleries';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

interface MenuEditorialGalleryProps {
  photos: EditorialPhoto[];
  locale: Locale;
}

const galleryContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const photoItemVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export function MenuEditorialGallery({ photos, locale }: MenuEditorialGalleryProps) {
  const shouldReduceMotion = usePrefersReducedMotion();
  const [activePhoto, setActivePhoto] = useState<EditorialPhoto | null>(null);

  if (!photos || photos.length === 0) return null;

  return (
    <div className="py-6 sm:py-8 my-4 border-y border-[var(--palette-stone-beige)]/30">
      <motion.div
        initial={shouldReduceMotion ? 'visible' : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        variants={galleryContainerVariants}
        className={`grid gap-3.5 sm:gap-4 ${
          photos.length === 1
            ? 'grid-cols-1 max-w-md mx-auto'
            : photos.length === 2
            ? 'grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto'
            : 'grid-cols-1 sm:grid-cols-3'
        }`}
      >
        {photos.map((photo, idx) => {
          const caption = photo.caption[locale] || photo.caption.it;
          return (
            <motion.figure
              key={idx}
              variants={photoItemVariants}
              className="space-y-2 group cursor-pointer"
              onClick={() => setActivePhoto(photo)}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-stone-100 border border-black/5 shadow-2xs group-hover:shadow-md transition-all duration-300">
                <img
                  src={photo.src}
                  alt={caption}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center text-white">
                  <div className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-xs flex items-center justify-center">
                    <ZoomIn size={15} />
                  </div>
                </div>
              </div>
              <figcaption className="text-center text-[11px] sm:text-xs text-[var(--palette-espresso)]/70 font-serif italic line-clamp-1 px-1">
                {caption}
              </figcaption>
            </motion.figure>
          );
        })}
      </motion.div>

      {/* Lightbox Preview Modal */}
      {activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-[var(--palette-espresso)] text-white rounded-3xl overflow-hidden border border-white/20 shadow-2xl p-4 sm:p-6 space-y-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-[var(--palette-aged-brass)] font-sans">
                Tre Fratelli · Cucina Tradizionale
              </span>
              <button
                type="button"
                onClick={() => setActivePhoto(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </div>

            <div className="aspect-[4/3] sm:aspect-[16/10] w-full rounded-2xl overflow-hidden bg-black/50">
              <img
                src={activePhoto.src}
                alt={activePhoto.caption[locale] || activePhoto.caption.it}
                className="w-full h-full object-contain"
              />
            </div>

            <p className="text-center font-serif text-sm sm:text-base italic text-[var(--palette-warm-ivory)] pt-1">
              {activePhoto.caption[locale] || activePhoto.caption.it}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
