import type { Metadata } from 'next';
import { hasLocale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing, type Locale } from '@/i18n/routing';
import { RestaurantMenuSheet } from '@/components/menu/RestaurantMenuSheet';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const t = await getTranslations({ locale });
  return {
    title: t('meta.menuTitle'),
    description: t('menu.subtitle'),
  };
}

export default async function MenuPage({ params }: PageProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  return (
    <main id="main-content" tabIndex={-1} className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto focus:outline-none">
      <RestaurantMenuSheet locale={locale as Locale} />
    </main>
  );
}
