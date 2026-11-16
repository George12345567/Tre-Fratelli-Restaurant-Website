// Set the real public origin before publishing; do not invent a restaurant domain.
const origin = process.env.SITE_URL;

export const siteConfig = {
  metadataBase: origin ? new URL(origin) : undefined,
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
