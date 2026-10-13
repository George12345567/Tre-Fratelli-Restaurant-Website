import type { Metadata } from 'next';
import { hasLocale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import type { Locale } from '@/i18n/routing';
import { newsData } from '@/data/news';
import { EventsExplorer } from '@/components/events/EventsExplorer';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const t = await getTranslations({ locale });
  return {
    title: `${t('news.title')} | Tre Fratelli`,
    description: t('news.heroLead'),
  };
}

export default async function NewsPromoPage({ params }: PageProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const t = await getTranslations({ locale });

  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto focus:outline-none"
    >
      {/* ── Page Header ── */}
      <header className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[var(--palette-italian-red)]/10 text-[var(--palette-italian-red)] text-xs font-bold uppercase tracking-widest">
          <span>{t('news.heroKicker')}</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[var(--palette-espresso)] leading-tight">
          {t('news.title')}
        </h1>

        <p className="text-xs sm:text-sm text-[var(--palette-espresso)]/80 leading-relaxed max-w-2xl mx-auto font-sans">
          {t('news.heroLead')}
        </p>
      </header>

      {/* ── Interactive Events Explorer & Sections ── */}
      <EventsExplorer posts={newsData} locale={locale as Locale} />
    </main>
  );
}
