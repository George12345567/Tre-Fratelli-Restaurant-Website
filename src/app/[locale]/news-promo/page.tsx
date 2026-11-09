import type { Metadata } from 'next';
import { hasLocale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { EventsExplorer } from '@/components/events/EventsExplorer';
import { eventsEditorial } from '@/data/eventsEditorial';
import { getLocalized } from '@/data/types';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const t = await getTranslations({ locale });
  return {
    title: `${t('news.title')} | Tre Fratelli`,
    description: getLocalized(eventsEditorial.intro, locale),
    alternates: {
      canonical: `/${locale}/news-promo`,
      languages: Object.fromEntries(routing.locales.map((code) => [code, `/${code}/news-promo`])),
    },
  };
}

export default async function NewsPromoPage({ params }: PageProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  return (
    <main id="main-content" tabIndex={-1} className="focus:outline-none">
      <EventsExplorer locale={locale} />
    </main>
  );
}
