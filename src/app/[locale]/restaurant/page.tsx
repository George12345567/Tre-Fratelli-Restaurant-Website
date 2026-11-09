import type { Metadata } from 'next';
import { hasLocale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { getLocalized } from '@/data/types';
import { restaurantEditorial } from '@/data/restaurantEditorial';
import { RestaurantStory } from '@/components/restaurant/RestaurantStory';
import { RestaurantExperience } from '@/components/restaurant/RestaurantExperience';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const t = await getTranslations({ locale });
  return {
    title: t('meta.restaurantTitle'),
    description: getLocalized(restaurantEditorial.introduction, locale),
    alternates: {
      canonical: `/${locale}/restaurant`,
      languages: {
        ...Object.fromEntries(routing.locales.map((code) => [code, `/${code}/restaurant`])),
        'x-default': `/${routing.defaultLocale}/restaurant`,
      },
    },
  };
}

export default async function RestaurantPage({ params }: PageProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  return (
    <main id="main-content" tabIndex={-1} className="focus:outline-none text-[var(--palette-espresso)]">
      <RestaurantStory locale={locale} />
      <RestaurantExperience locale={locale} />
    </main>
  );
}
