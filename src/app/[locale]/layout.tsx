import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { siteConfig } from "@/config/site";
import { playfairDisplay, montserrat } from "@/lib/fonts";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CrownQuickHub } from "@/components/crown/CrownQuickHub";
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
    alternates: {
      canonical: `/${locale}`,
      languages: {
        ...Object.fromEntries(routing.locales.map((code) => [code, `/${code}`])),
        "x-default": `/${routing.defaultLocale}`,
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const t = await getTranslations({ locale, namespace: "accessibility" });
  const messages = await getMessages({ locale });

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={`${playfairDisplay.variable} ${montserrat.variable}`}
      suppressHydrationWarning
    >
      <body
        className="flex min-h-screen flex-col bg-[var(--palette-warm-ivory)] text-[var(--palette-espresso)] antialiased"
        suppressHydrationWarning
      >
        <a href="#main-content" className="skip-link">{t("skipToContent")}</a>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Navbar locale={locale as Locale} />
          <div className="flex-1 pt-20 sm:pt-24">
            {children}
          </div>
          <Footer locale={locale as Locale} />
          <CrownQuickHub locale={locale as Locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
