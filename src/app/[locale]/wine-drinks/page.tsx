import type { Metadata } from 'next';
import { hasLocale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing, type Locale } from '@/i18n/routing';
import { MainMenuCategoriesGrid } from '@/components/menu/MainMenuCategoriesGrid';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const t = await getTranslations({ locale });
  return {
    title: t('meta.wineTitle'),
    description: t('wine.curatedCopy'),
    alternates: {
      canonical: `/${locale}/wine-drinks`,
      languages: {
        ...Object.fromEntries(routing.locales.map((code) => [code, `/${code}/wine-drinks`])),
        'x-default': `/${routing.defaultLocale}/wine-drinks`,
      },
    },
  };
}

export default async function WineDrinksPage({ params }: PageProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  return (
    <main id="main-content" tabIndex={-1} className="pt-4 sm:pt-6 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto focus:outline-none">
      <MainMenuCategoriesGrid locale={locale as Locale} scope="drinks" />
    </main>
  );
}
