import type { Metadata } from 'next';
import { hasLocale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing, type Locale } from '@/i18n/routing';
import { siteConfig } from '@/config/site';
import { MainMenuCategoriesGrid } from '@/components/menu/MainMenuCategoriesGrid';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const t = await getTranslations({ locale });

  return {
    metadataBase: siteConfig.metadataBase,
    title: t('meta.menuTitle'),
    description: t('home.menuCardCopy'),
    alternates: {
      canonical: `/${locale}/menu`,
      languages: {
        ...Object.fromEntries(routing.locales.map((code) => [code, `/${code}/menu`])),
        'x-default': `/${routing.defaultLocale}/menu`,
      },
    },
  };
}

export default async function MenuPage({ params }: PageProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="pt-4 sm:pt-6 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto focus:outline-none"
    >
      <MainMenuCategoriesGrid locale={locale as Locale} />
    </main>
  );
}
