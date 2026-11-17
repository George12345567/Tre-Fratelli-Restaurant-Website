import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { routing, type Locale } from '@/i18n/routing';

export interface PageMetadataOptions {
  locale: Locale;
  pathname?: string;
  title: string;
  description: string;
}

const KEYWORDS_IT = [
  'Tre Fratelli',
  'Ristorante Tre Fratelli',
  'Ristorante Trezzano sul Naviglio',
  'Pizzeria Trezzano sul Naviglio',
  'Ristorante Italiano Milano',
  'Pizza forno a legna Trezzano sul Naviglio',
  'Ristorante di pesce Trezzano sul Naviglio',
  'Paella Trezzano sul Naviglio',
  'Karaoke sabato sera Milano',
  'Viale Leonardo da Vinci 97 Trezzano sul Naviglio',
];

const KEYWORDS_EN = [
  'Tre Fratelli',
  'Tre Fratelli Restaurant',
  'Italian Restaurant Trezzano sul Naviglio',
  'Wood-Fired Pizzeria Milan',
  'Seafood Restaurant Trezzano sul Naviglio',
  'Authentic Italian Dining Milan',
  'Paella & Grill Milan',
  'Viale Leonardo da Vinci 97 Trezzano sul Naviglio',
];

export const SITE_ICONS: NonNullable<Metadata['icons']> = {
  icon: [
    { url: '/favicon.ico', sizes: '48x48' },
    { url: '/icon-48.png', sizes: '48x48', type: 'image/png' },
    { url: '/icon-96.png', sizes: '96x96', type: 'image/png' },
    { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
  ],
  shortcut: ['/favicon.ico'],
  apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
};

export function buildPageMetadata({
  locale,
  pathname = '',
  title,
  description,
}: PageMetadataOptions): Metadata {
  const cleanSuffix = pathname
    ? pathname.startsWith('/')
      ? pathname
      : `/${pathname}`
    : '';
  const canonicalPath = `/${locale}${cleanSuffix}`;

  const languageAlternates: Record<string, string> = {
    ...Object.fromEntries(routing.locales.map((code) => [code, `/${code}${cleanSuffix}`])),
    'x-default': `/${routing.defaultLocale}${cleanSuffix}`,
  };

  return {
    metadataBase: siteConfig.metadataBase,
    title,
    description,
    applicationName: 'Tre Fratelli',
    keywords: locale === 'it' ? KEYWORDS_IT : KEYWORDS_EN,
    authors: [{ name: 'Tre Fratelli Ristorante & Pizzeria', url: siteConfig.url }],
    creator: 'Tre Fratelli Ristorante & Pizzeria',
    publisher: 'Tre Fratelli Ristorante & Pizzeria',
    category: 'restaurant',
    alternates: {
      canonical: canonicalPath,
      languages: languageAlternates,
    },
    openGraph: {
      type: 'website',
      siteName: 'Tre Fratelli — Ristorante & Pizzeria',
      locale: locale === 'it' ? 'it_IT' : 'en_US',
      alternateLocale: locale === 'it' ? ['en_US'] : ['it_IT'],
      url: canonicalPath,
      title,
      description,
      images: [
        {
          url: '/images/brand/tre-fratelli-og.png',
          width: 1200,
          height: 630,
          alt: 'Tre Fratelli — Ristorante Italiano & Pizzeria a Trezzano sul Naviglio (Milano)',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/brand/tre-fratelli-og.png'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    icons: SITE_ICONS,
    manifest: '/manifest.webmanifest',
  };
}
