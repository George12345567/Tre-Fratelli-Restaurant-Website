import type { Metadata } from 'next';
import { hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing, type Locale } from '@/i18n/routing';
import { siteConfig } from '@/config/site';
import {
  type MenuCategorySlug,
  menuCategoryConfigs,
  getMenuCategoryConfig,
} from '@/data/menu/menuCategories';
import { getLocalized } from '@/data/types';
import { CategoryPageView } from '@/components/menu/CategoryPageView';

interface CategoryPageProps {
  params: Promise<{
    locale: string;
    category: string;
  }>;
}

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    menuCategoryConfigs.map((config) => ({
      locale,
      category: config.slug,
    }))
  );
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { locale, category } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const config = getMenuCategoryConfig(category);
  if (!config) notFound();

  const categoryTitle = getLocalized(config.title, locale as Locale);
  const categoryIntro = getLocalized(config.intro, locale as Locale);

  return {
    metadataBase: siteConfig.metadataBase,
    title: `${categoryTitle} — Tre Fratelli Menù`,
    description: categoryIntro,
    alternates: {
      canonical: `/${locale}/menu/${category}`,
      languages: {
        ...Object.fromEntries(
          routing.locales.map((code) => [code, `/${code}/menu/${category}`])
        ),
        'x-default': `/${routing.defaultLocale}/menu/${category}`,
      },
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { locale, category } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const config = getMenuCategoryConfig(category);
  if (!config) notFound();

  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="pt-4 sm:pt-6 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto focus:outline-none"
    >
      <CategoryPageView slug={category as MenuCategorySlug} locale={locale as Locale} />
    </main>
  );
}
