const CANONICAL_PRODUCTION_ORIGIN = 'https://www.ristorantetrefratelli.it';

function resolveSiteOrigin(): string {
  const raw = process.env.SITE_URL?.trim();
  if (!raw) return CANONICAL_PRODUCTION_ORIGIN;
  try {
    const parsed = new URL(raw);
    const isLocal =
      parsed.hostname === 'localhost' ||
      parsed.hostname === '127.0.0.1' ||
      parsed.hostname.endsWith('.local');
    if (isLocal && process.env.NODE_ENV === 'production') {
      return CANONICAL_PRODUCTION_ORIGIN;
    }
    return parsed.origin;
  } catch {
    return CANONICAL_PRODUCTION_ORIGIN;
  }
}

const resolvedOrigin = resolveSiteOrigin();

export const siteConfig = {
  url: resolvedOrigin,
  canonicalOrigin: CANONICAL_PRODUCTION_ORIGIN,
  metadataBase: new URL(resolvedOrigin),
} as const;

export interface MenuPdfAssetConfig {
  url: string;
  downloadName: string;
  sizeLabelShort: string;
  sizeLabelExact: string;
}

const menuPdfAssets: Record<'it' | 'en', MenuPdfAssetConfig> = {
  it: {
    url: '/menu/tre-fratelli-menu.pdf',
    downloadName: 'Tre-Fratelli-Menu.pdf',
    sizeLabelShort: '4.2 MB',
    sizeLabelExact: '4.18 MB',
  },
  en: {
    url: '/menu/tre-fratelli-menu-en.pdf',
    downloadName: 'Tre-Fratelli-Menu-EN.pdf',
    sizeLabelShort: '3.6 MB',
    sizeLabelExact: '3.56 MB',
  },
};

export const menuPdfConfig = menuPdfAssets.it;

export function getMenuPdfConfig(locale: string): MenuPdfAssetConfig {
  return locale === 'en' ? menuPdfAssets.en : menuPdfAssets.it;
}
