'use client';

import { useEffect, useRef } from 'react';
import { Download, ExternalLink, FileText, X } from 'lucide-react';
import type { Locale } from '@/i18n/routing';

interface MenuPdfViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  locale: Locale;
}

export function MenuPdfViewerModal({
  isOpen,
  onClose,
  locale,
}: MenuPdfViewerModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const pdfUrl = '/menu/tre-fratelli-menu.pdf';
  const isRtl = locale === 'ar';

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="menu-pdf-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/75 backdrop-blur-sm animate-fade-in"
    >
      {/* Backdrop Dismiss Area */}
      <div
        className="absolute inset-0 -z-10"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Content Container */}
      <div
        ref={dialogRef}
        className="relative w-full max-w-5xl h-[92vh] sm:h-[88vh] bg-white rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-white/30"
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        {/* ── Modal Header ── */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 bg-[var(--palette-warm-ivory)] border-b border-[var(--palette-stone-beige)]/60 shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-[var(--palette-italian-red)]/10 text-[var(--palette-italian-red)] flex items-center justify-center shrink-0">
              <FileText size={18} aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <h2
                id="menu-pdf-modal-title"
                className="font-serif text-sm sm:text-base font-bold text-[var(--palette-espresso)] truncate"
              >
                {locale === 'it'
                  ? 'Menù Ufficiale Tre Fratelli — Ristorante & Pizzeria'
                  : locale === 'ar'
                  ? 'قائمة طعام Tre Fratelli الرسمية الكاملة'
                  : 'Official Tre Fratelli Menu — Restaurant & Pizzeria'}
              </h2>
              <p className="text-[11px] text-[var(--palette-espresso)]/65 truncate">
                {locale === 'it'
                  ? 'Documento originale completo · 10 Pagine · Allergeni & Prezzi'
                  : locale === 'ar'
                  ? 'الملف الأصلي المعتمد · 10 صفحات · مبيّن بها الأسعار ومسببات الحساسية'
                  : 'Full original document · 10 Pages · Allergens & Official Pricing'}
              </p>
            </div>
          </div>

          {/* Quick Header Actions */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Open in New Window Link */}
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-semibold bg-white border border-[var(--palette-stone-beige)]/80 text-[var(--palette-espresso)] hover:bg-stone-50 transition-colors shadow-2xs"
              title={
                locale === 'it'
                  ? 'Apri in nuova scheda'
                  : locale === 'ar'
                  ? 'فتح في علامة تبويب جديدة'
                  : 'Open in new tab'
              }
            >
              <ExternalLink size={13} aria-hidden="true" />
              <span className="hidden sm:inline">
                {locale === 'it' ? 'Nuova Scheda' : locale === 'ar' ? 'نافذة جديدة' : 'New Tab'}
              </span>
            </a>

            {/* Direct Download Button */}
            <a
              href={pdfUrl}
              download="Tre-Fratelli-Menu.pdf"
              className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[var(--palette-italian-red)] text-white hover:bg-[var(--palette-italian-red-dark)] transition-colors shadow-xs"
              title={locale === 'it' ? 'Scarica PDF' : locale === 'ar' ? 'تحميل الملف' : 'Download PDF'}
            >
              <Download size={13} aria-hidden="true" />
              <span>{locale === 'it' ? 'Scarica' : locale === 'ar' ? 'تحميل' : 'Download'}</span>
            </a>

            {/* Close Modal Button */}
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 sm:p-2 rounded-full text-[var(--palette-espresso)]/70 hover:text-black hover:bg-black/5 transition-colors cursor-pointer"
              aria-label={locale === 'it' ? 'Chiudi' : locale === 'ar' ? 'إغلاق' : 'Close'}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* ── Modal PDF Embed Viewer ── */}
        <div className="flex-1 w-full h-full bg-stone-100 relative overflow-hidden">
          <iframe
            src={`${pdfUrl}#toolbar=1&navpanes=0&view=FitH`}
            title="Tre Fratelli Menu PDF Viewer"
            className="w-full h-full border-0"
          />

          {/* Fallback box for devices that don't support inline PDF iframe rendering */}
          <noscript className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-white space-y-4">
            <p className="text-sm text-stone-700">
              {locale === 'it'
                ? 'Visualizzazione integrata non disponibile su questo browser.'
                : locale === 'ar'
                ? 'المعاينة المباشرة غير مدعومة على هذا المتصفح.'
                : 'Inline PDF viewer is not supported on this browser.'}
            </p>
            <a
              href={pdfUrl}
              download="Tre-Fratelli-Menu.pdf"
              className="px-4 py-2 rounded-full bg-[var(--palette-italian-red)] text-white text-xs font-bold"
            >
              {locale === 'it' ? 'Scarica il Menù PDF' : locale === 'ar' ? 'تحميل ملف المنيو PDF' : 'Download Menu PDF'}
            </a>
          </noscript>
        </div>

        {/* ── Modal Footer Bar ── */}
        <div className="px-4 sm:px-6 py-2.5 bg-stone-50 border-t border-[var(--palette-stone-beige)]/40 flex items-center justify-between text-[11px] text-[var(--palette-espresso)]/70 shrink-0">
          <span>
            {locale === 'it'
              ? 'Consiglio: puoi ingrandire e scorrere tutte le 10 pagine direttamente dal visualizzatore.'
              : locale === 'ar'
              ? 'تلميح: يمكنك تكبير الصفحات والتنقل بين كافة الصفحات العشر مباشرة داخل المعاينة.'
              : 'Tip: you can zoom and flip through all 10 pages directly within the viewer.'}
          </span>
          <span className="font-semibold text-[var(--palette-espresso)]">
            PDF · 6.37 MB
          </span>
        </div>
      </div>
    </div>
  );
}
