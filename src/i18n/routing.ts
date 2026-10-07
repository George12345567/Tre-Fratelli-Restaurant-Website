import { defineRouting } from "next-intl/routing";

// Canonical locale list: add a locale and its messages without changing routes.
export const routing = defineRouting({
  locales: ["it", "en"],
  defaultLocale: "it",
  localePrefix: "always",
  // An unprefixed visit consistently opens Italian, regardless of headers/cookies.
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
