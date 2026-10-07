// Set the real public origin before publishing; do not invent a restaurant domain.
const origin = process.env.SITE_URL;

export const siteConfig = {
  metadataBase: origin ? new URL(origin) : undefined,
} as const;
