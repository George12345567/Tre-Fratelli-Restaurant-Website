'use client';

import { Download, ExternalLink, Eye, FileText, Sparkles } from 'lucide-react';
import type { Locale } from '@/i18n/routing';

interface MenuPdfActionBannerProps {
  locale: Locale;
  onOpenViewer: () => void;
}

export function MenuPdfActionBanner({
  locale,
  onOpenViewer,
}: MenuPdfActionBannerProps) {
  const pdfUrl = '/menu/tre-fratelli-menu.pdf';
  const isRtl = locale === 'ar';

  return (
    <div
      className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[var(--palette-warm-ivory)] via-white to-[var(--palette-stone-beige-light)]/40 border border-[var(--palette-aged-brass)]/30 p-4 sm:p-6 shadow-xs"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      {/* Decorative Subtle Background Stamp */}
      <div
        className="absolute -end-6 -bottom-6 w-32 h-32 rounded-full bg-[var(--palette-aged-brass)]/5 pointer-events-none -z-0"
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 sm:gap-6">
        {/* Left / Info Column */}
        <div className="flex items-start gap-3.5 sm:gap-4 min-w-0">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[var(--palette-italian-red)]/10 text-[var(--palette-italian-red)] flex items-center justify-center shrink-0 border border-[var(--palette-italian-red)]/15 shadow-2xs">
            <FileText size={22} aria-hidden="true" />
          </div>

          <div className="space-y-1 min-w-0">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[var(--palette-italian-red)]/10 text-[var(--palette-italian-red)]">
                <Sparkles size={10} aria-hidden="true" />
                <span>
                  {locale === 'it'
                    ? 'Menù Ufficiale PDF'
                    : locale === 'ar'
                    ? 'قائمة الطعام المعتمدة PDF'
                    : 'Official Menu PDF'}
                </span>
              </span>
              <span className="text-[11px] font-medium text-[var(--palette-espresso)]/60">
                {locale === 'it'
                  ? '10 Pagine · Alta Risoluzione'
                  : locale === 'ar'
                  ? '10 صفحات كاملة عالية الدقة'
                  : '10 Full Pages · High Quality'}
              </span>
            </div>

            <h3 className="font-serif text-base sm:text-lg font-bold text-[var(--palette-espresso)] leading-snug">
              {locale === 'it'
                ? 'Sfoglia o Scarica la Carta Completa di Tre Fratelli'
                : locale === 'ar'
                ? 'تصفح أو حمّل قائمة طعام Tre Fratelli الرسمية'
                : 'Browse or Download the Tre Fratelli Menu'}
            </h3>

            <p className="text-xs sm:text-sm text-[var(--palette-espresso)]/75 leading-relaxed">
              {locale === 'it'
                ? 'Consulta l’originale stampato con antipasti, primi al forno, barche di pesce, 38 pizze speciali e la carta dei vini.'
                : locale === 'ar'
                ? 'اطّلع على النسخة الأصلية الكاملة شاملة المقبلات، أطباق الفرن، سفن الأسماك الكبرى، 38 نوع بيتزا وقائمة المشروبات والخمور.'
                : 'Explore the full printed original menu including appetizers, baked pasta, seafood ships, 38 wood-fired pizzas, and wines.'}
            </p>
          </div>
        </div>

        {/* Right / CTA Actions Column */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 shrink-0 pt-2 md:pt-0">
          {/* 1. Open Interactive Modal Viewer */}
          <button
            type="button"
            onClick={onOpenViewer}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-[var(--palette-italian-red)] text-white hover:bg-[var(--palette-italian-red-dark)] active:scale-98 transition-all shadow-xs cursor-pointer"
          >
            <Eye size={15} aria-hidden="true" />
            <span>
              {locale === 'it'
                ? 'Visualizza PDF'
                : locale === 'ar'
                ? 'عرض المنيو (PDF)'
                : 'View PDF Menu'}
            </span>
          </button>

          {/* 2. Direct Download Link */}
          <a
            href={pdfUrl}
            download="Tre-Fratelli-Menu.pdf"
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-white border border-[var(--palette-stone-beige)]/80 text-[var(--palette-espresso)] hover:bg-stone-50 active:scale-98 transition-all shadow-2xs"
          >
            <Download size={15} aria-hidden="true" />
            <span>
              {locale === 'it'
                ? 'Scarica PDF (6.4 MB)'
                : locale === 'ar'
                ? 'تحميل الملف'
                : 'Download PDF'}
            </span>
          </a>

          {/* 3. Open in New Tab Shortcut */}
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            title={
              locale === 'it'
                ? 'Apri in nuova scheda'
                : locale === 'ar'
                ? 'فتح في تبويب مستقل'
                : 'Open in new tab'
            }
            className="hidden sm:inline-flex p-2.5 rounded-full bg-white border border-[var(--palette-stone-beige)]/70 text-[var(--palette-espresso)]/70 hover:text-[var(--palette-espresso)] hover:bg-stone-50 transition-colors shadow-2xs"
            aria-label="Open PDF in new tab"
          >
            <ExternalLink size={15} />
          </a>
        </div>
      </div>
    </div>
  );
}
