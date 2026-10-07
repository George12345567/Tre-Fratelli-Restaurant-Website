import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/config/site";
import { playfairDisplay, montserrat } from "@/lib/fonts";
import "@/styles/globals.css";

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    metadataBase: siteConfig.metadataBase,
    title: t("title"),
    description: t("description"),
    // The replaceable foundation is not approved restaurant content.
    robots: { index: false, follow: false },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        ...Object.fromEntries(routing.locales.map((code) => [code, `/${code}`])),
        "x-default": `/${routing.defaultLocale}`,
      },
    },
  };
}

// This is the root HTML shell. Translations remain on the server.
export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const t = await getTranslations({ locale, namespace: "accessibility" });

  return (
    <html lang={locale} className={`${playfairDisplay.variable} ${montserrat.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">{t("skipToContent")}</a>
        {children}
      </body>
    </html>
  );
}
