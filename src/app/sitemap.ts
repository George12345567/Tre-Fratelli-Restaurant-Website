import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { mainMenuCategoryConfigs } from '@/data/menu/menuCategories';
import { routing } from '@/i18n/routing';

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = siteConfig.canonicalOrigin;
  const now = new Date();

  const corePaths = [
    { suffix: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { suffix: '/menu', priority: 0.95, changeFrequency: 'weekly' as const },
    { suffix: '/location', priority: 0.95, changeFrequency: 'weekly' as const },
    { suffix: '/restaurant', priority: 0.85, changeFrequency: 'monthly' as const },
    { suffix: '/wine-drinks', priority: 0.85, changeFrequency: 'monthly' as const },
    { suffix: '/sweets', priority: 0.8, changeFrequency: 'monthly' as const },
    { suffix: '/news-promo', priority: 0.8, changeFrequency: 'weekly' as const },
  ];

  const categoryPaths = mainMenuCategoryConfigs.map((cat) => ({
    suffix: `/menu/${cat.slug}`,
    priority: 0.85,
    changeFrequency: 'weekly' as const,
  }));

  const allPaths = [...corePaths, ...categoryPaths];

  return routing.locales.flatMap((locale) =>
    allPaths.map((entry) => ({
      url: `${origin}/${locale}${entry.suffix}`,
      lastModified: now,
      changeFrequency: entry.changeFrequency,
      priority: entry.priority,
      alternates: {
        languages: {
          ...Object.fromEntries(
            routing.locales.map((code) => [code, `${origin}/${code}${entry.suffix}`]),
          ),
          'x-default': `${origin}/${routing.defaultLocale}${entry.suffix}`,
        },
      },
    })),
  );
}
