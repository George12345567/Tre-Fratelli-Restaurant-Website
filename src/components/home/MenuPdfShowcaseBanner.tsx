'use client';

import { Download, Eye, FileText, Sparkles } from 'lucide-react';
import { getMenuPdfConfig } from '@/config/site';

interface MenuPdfShowcaseBannerProps {
  locale: string;
  onOpenPdfModal: () => void;
}

export function MenuPdfShowcaseBanner({
  locale,
  onOpenPdfModal,
}: MenuPdfShowcaseBannerProps) {
  const pdfConfig = getMenuPdfConfig(locale);
  const pdfUrl = pdfConfig.url;

  return (
    <div className="mt-8 relative overflow-hidden rounded-3xl bg-gradient-to-r from-[var(--palette-espresso)] via-[var(--palette-espresso-light)] to-[var(--palette-espresso)] text-white p-6 sm:p-8 border border-[var(--palette-aged-brass)]/40 shadow-xl">
      {/* Decorative Golden Ambient Accent */}
      <div
        className="absolute -top-12 -end-12 w-48 h-48 bg-[radial-gradient(ellipse_at_center,rgba(176,138,87,0.25),transparent_70%)] pointer-events-none blur-2xl"
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Branding & Message */}
        <div className="space-y-2 text-center md:text-start max-w-2xl">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[var(--palette-aged-brass)]/25 text-[var(--palette-stone-beige-light)] border border-[var(--palette-aged-brass)]/30">
              <FileText size={12} className="text-[var(--palette-aged-brass)]" />
              <span>
                {locale === 'it'
                  ? 'Edizione Cartacea Ufficiale (10 Pagine)'
                  : 'Official Print Edition (10 Pages)'}
              </span>
            </span>

            <span className="hidden sm:inline-flex items-center gap-1 text-[10px] text-amber-300 font-semibold">
              <Sparkles size={11} />
              <span>
                {locale === 'it' ? 'Alta Definizione' : 'High Resolution'}
              </span>
            </span>
          </div>

          <h3 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-tight">
            {locale === 'it'
              ? 'Desideri Sfogliare il Menù Completo Ufficiale?'
              : 'Prefer to Browse or Download the Complete Menu PDF?'}
          </h3>

          <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
            {locale === 'it'
              ? 'Tutte le 10 pagine originali con pizze al metro, selezioni di terra e mare, paste al forno in crosta e cantina completa da portare sempre con te.'
              : 'All 10 authentic pages with meter-long pizzas, seafood and land selections, bread-crust baked pasta, and the cellar list.'}
          </p>
        </div>

        {/* Right: Dual Actions (Preview Online + Download) */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
          <button
            type="button"
            onClick={onOpenPdfModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[var(--palette-warm-ivory)] hover:bg-white text-[var(--palette-espresso)] text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            <Eye size={15} />
            <span>
              {locale === 'it'
                ? 'Sfoglia PDF Online'
                : 'Preview PDF Online'}
            </span>
          </button>

          <a
            href={pdfUrl}
            download={pdfConfig.downloadName}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold border border-white/20 transition-all cursor-pointer"
          >
            <Download size={15} />
            <span>
              {locale === 'it'
                ? 'Scarica PDF'
                : 'Download PDF'}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
