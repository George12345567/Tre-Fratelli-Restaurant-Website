import type { Metadata } from 'next';
import { hasLocale } from 'next-intl';
import { notFound, redirect } from 'next/navigation';
import { routing, type Locale } from '@/i18n/routing';
import { buildPageMetadata } from '@/lib/seo/metadata';
import {
  type MenuCategorySlug,
  mainMenuCategoryConfigs,
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
    mainMenuCategoryConfigs.map((config) => ({
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

  return buildPageMetadata({
    locale: locale as Locale,
    pathname: `/menu/${category}`,
    title: `${categoryTitle} — Tre Fratelli Menù`,
    description: categoryIntro,
  });
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { locale, category } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  if (category === 'dolci') {
    redirect(`/${locale}/sweets`);
  }
  if (category === 'bevande' || category === 'carta-vini') {
    redirect(`/${locale}/wine-drinks`);
  }

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
