import { siteConfig } from '@/config/site';
import { restaurantOfficialInfo } from '@/data/restaurantDetails';
import type { Locale } from '@/i18n/routing';

interface RestaurantJsonLdProps {
  locale: Locale;
}

export function RestaurantJsonLd({ locale }: RestaurantJsonLdProps) {
  const origin = siteConfig.canonicalOrigin;
  const isItalian = locale === 'it';

  const description = isItalian
    ? 'Ristorante italiano autentico e pizzeria al forno a legna a Trezzano sul Naviglio (Milano). Specialità di pesce fresco, paella, carne alla brace, pasta fresca e serata Karaoke ogni sabato.'
    : 'Authentic Italian restaurant and wood-fired pizzeria in Trezzano sul Naviglio (Milan). Fresh Mediterranean seafood, paella, grilled meats, handmade pasta, and Saturday night Karaoke.';

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${origin}/#website`,
        name: 'Tre Fratelli',
        alternateName: [
          'Ristorante Tre Fratelli',
          'Tre Fratelli Ristorante & Pizzeria',
          'Ristorante Pizzeria Tre Fratelli Trezzano sul Naviglio',
        ],
        url: origin,
        inLanguage: ['it-IT', 'en-US'],
        publisher: {
          '@id': `${origin}/#restaurant`,
        },
      },
      {
        '@type': 'Restaurant',
        '@id': `${origin}/#restaurant`,
        name: 'Tre Fratelli — Ristorante & Pizzeria',
        alternateName: 'Ristorante Tre Fratelli',
        description,
        url: `${origin}/${locale}`,
        logo: {
          '@type': 'ImageObject',
          url: `${origin}/icon-512.png`,
          width: 512,
          height: 512,
        },
        image: [
          `${origin}/images/brand/tre-fratelli-og.png`,
          `${origin}/images/brand/tre-fratelli-official-logo.png`,
        ],
        telephone: restaurantOfficialInfo.phone,
        email: restaurantOfficialInfo.email,
        priceRange: '€10–€20',
        currenciesAccepted: 'EUR',
        paymentAccepted: 'Cash, Credit Card, Debit Card',
        servesCuisine: ['Italian', 'Pizza', 'Seafood', 'Mediterranean', 'Paella'],
        acceptsReservations: true,
        hasMenu: `${origin}/${locale}/menu`,
        hasMap: restaurantOfficialInfo.googleMapsUrl,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Viale Leonardo da Vinci, 97',
          addressLocality: 'Trezzano sul Naviglio',
          addressRegion: 'MI',
          postalCode: '20090',
          addressCountry: 'IT',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 45.4218,
          longitude: 9.0615,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday'],
            opens: '12:00',
            closes: '15:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '12:00',
            closes: '15:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '18:30',
            closes: '23:59',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Sunday'],
            opens: '12:00',
            closes: '23:59',
          },
        ],
        potentialAction: {
          '@type': 'ReserveAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${origin}/${locale}/location`,
            inLanguage: isItalian ? 'it-IT' : 'en-US',
            actionPlatform: [
              'http://schema.org/DesktopWebPlatform',
              'http://schema.org/MobileWebPlatform',
            ],
          },
          result: {
            '@type': 'Reservation',
            name: isItalian
              ? 'Prenota un Tavolo da Tre Fratelli'
              : 'Reserve a Table at Tre Fratelli',
          },
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
