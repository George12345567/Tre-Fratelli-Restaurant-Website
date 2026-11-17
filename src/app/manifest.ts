import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Tre Fratelli — Ristorante Italiano & Pizzeria',
    short_name: 'Tre Fratelli',
    description:
      'Ristorante italiano autentico e pizzeria al forno a legna a Trezzano sul Naviglio (Milano).',
    start_url: '/it',
    display: 'standalone',
    background_color: '#FAF6EF',
    theme_color: '#2B1F1A',
    icons: [
      {
        src: '/icon-48.png',
        sizes: '48x48',
        type: 'image/png',
      },
      {
        src: '/icon-96.png',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
