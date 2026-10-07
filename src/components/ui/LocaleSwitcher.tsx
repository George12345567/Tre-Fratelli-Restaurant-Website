import { getTranslations } from "next-intl/server";
import { getPathname } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

export async function LocaleSwitcher({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "accessibility" });

  return (
    <nav aria-label={t("languageSwitcher")} className="flex flex-wrap gap-2">
      {routing.locales.map((code) => (
        <a
          key={code}
          href={getPathname({ href: "/", locale: code })}
          hrefLang={code}
          lang={code}
          aria-current={code === locale ? "page" : undefined}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded border border-border px-3 text-sm font-medium hover:bg-surface-muted aria-[current=page]:border-primary aria-[current=page]:text-primary"
        >
          {new Intl.DisplayNames([code], { type: "language" }).of(code)}
        </a>
      ))}
    </nav>
  );
}
