import type { Metadata } from 'next';
import { hasLocale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { SweetsMenu } from '@/components/menu/SweetsMenu';

interface PageProps { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const t = await getTranslations({ locale });
  return {
    title: t('meta.sweetsTitle'),
    alternates: {
      canonical: `/${locale}/sweets`,
      languages: {
        ...Object.fromEntries(routing.locales.map((code) => [code, `/${code}/sweets`])),
        'x-default': `/${routing.defaultLocale}/sweets`,
      },
    },
  };
}

export default async function SweetsPage({ params }: PageProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  return (
    <main id="main-content" tabIndex={-1} className="pt-4 sm:pt-6 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto focus:outline-none">
      <SweetsMenu locale={locale} />
    </main>
  );
}
