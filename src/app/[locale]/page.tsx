import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { LocaleSwitcher } from "@/components/ui/LocaleSwitcher";
import { ResponsiveImage } from "@/components/media/ResponsiveImage";
import { MotionFade } from "@/components/motion/MotionFade";
import { routing } from "@/i18n/routing";

// Phase 01 proof only. Replace this page when the approved design arrives.
export default async function FoundationPage({ params }: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const t = await getTranslations({ locale, namespace: "foundation" });

  return (
    <main id="main-content" tabIndex={-1} className="mx-auto flex min-h-dvh max-w-3xl flex-col items-start gap-6 p-[var(--page-gutter)]">
      <LocaleSwitcher locale={locale} />
      <h1>{t("heading")}</h1>
      <p className="text-muted-foreground">{t("status")}</p>
      <div aria-hidden="true" className="flex flex-wrap gap-3">
        {["bg-background", "bg-primary", "bg-secondary", "bg-foreground", "bg-muted", "bg-accent"].map((color) => (
          <span key={color} className={`h-8 w-8 rounded border border-border ${color}`} />
        ))}
      </div>
      <figure className="w-full max-w-xs">
        <ResponsiveImage
          src="/images/foundation.png"
          alt=""
          width={320}
          height={180}
          sizes="(max-width: 384px) calc(100vw - 32px), 320px"
        />
        <figcaption className="mt-2 text-sm text-muted-foreground">{t("imageProof")}</figcaption>
      </figure>
      <MotionFade><p className="text-sm">{t("motionProof")}</p></MotionFade>
    </main>
  );
}
