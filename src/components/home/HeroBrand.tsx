'use client';

import { useEffect, useId, useRef, useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Minus, Plus, X } from 'lucide-react';
import styles from './HeroBrand.module.css';

const LOGO_SRC = '/images/brand/tre-fratelli-official-logo.png';

export function HeroBrand() {
  const t = useTranslations('home');
  const titleId = useId();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const dialog = dialogRef.current;
    if (!dialog) return;

    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';

    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  function openLogo() {
    setIsZoomed(false);
    setIsOpen(true);
  }

  return (
    <>
      <button
        type="button"
        onClick={openLogo}
        className={styles.brand}
        aria-label={t('heroLogoOpen')}
        aria-haspopup="dialog"
      >
        <Image
          src={LOGO_SRC}
          alt="Tre Fratelli · Ristorante Italiano"
          width={4800}
          height={3600}
          sizes="(max-width: 639px) 240px, 320px"
          preload
          className={styles.logo}
        />
      </button>

      <dialog
        ref={dialogRef}
        className={styles.viewer}
        aria-labelledby={titleId}
        onCancel={(event) => {
          event.preventDefault();
          setIsOpen(false);
        }}
        onClose={() => setIsOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setIsOpen(false);
        }}
      >
        {isOpen && (
          <>
            <div className={styles.toolbar}>
              <h2 id={titleId}>Tre Fratelli <span>· Ristorante Italiano</span></h2>
              <div className={styles.controls}>
                <button
                  type="button"
                  onClick={() => setIsZoomed((value) => !value)}
                  aria-label={t(isZoomed ? 'heroLogoZoomOut' : 'heroLogoZoomIn')}
                  aria-pressed={isZoomed}
                >
                  {isZoomed ? <Minus size={22} /> : <Plus size={22} />}
                </button>
                <button type="button" onClick={() => setIsOpen(false)} aria-label={t('heroLogoClose')} autoFocus>
                  <X size={24} />
                </button>
              </div>
            </div>
            <div className={styles.stage}>
              <div className={`${styles.artwork} ${isZoomed ? styles.zoomed : ''}`}>
                <Image
                  src={LOGO_SRC}
                  alt="Tre Fratelli · Ristorante Italiano"
                  width={4800}
                  height={3600}
                  unoptimized
                  className={styles.original}
                />
              </div>
            </div>
          </>
        )}
      </dialog>
    </>
  );
}
