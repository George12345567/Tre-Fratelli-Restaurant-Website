import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import {
  MapPin,
  Phone,
  Clock,
  ExternalLink,
  Navigation,
  Utensils,
  Download,
} from 'lucide-react';
import type { Locale } from '@/i18n/routing';
import { restaurantSchedule } from '@/data/restaurantSchedule';
import { restaurantOfficialInfo } from '@/data/restaurantDetails';
import { getLocalized } from '@/data/types';

interface FooterProps {
  locale: Locale;
}

export async function Footer({ locale }: FooterProps) {
  const t = await getTranslations({ locale });
  const googleMapsUrl = restaurantOfficialInfo.googleMapsUrl;

  return (
    <footer
      id="footer"
      role="contentinfo"
      className="w-full max-w-full overflow-hidden overflow-x-clip bg-[var(--palette-espresso)] text-[var(--palette-warm-ivory)] border-t border-[var(--palette-aged-brass)]/25 mt-10 sm:mt-14 relative z-10"
    >
      {/* Top Ornamental Brass Glint Line */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--palette-aged-brass)]/70 to-transparent"
      />
      {/* Subtle Ambient Warm Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 left-1/4 h-64 w-64 rounded-full bg-[var(--palette-aged-brass)]/8 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 right-1/4 h-64 w-64 rounded-full bg-[var(--palette-italian-red)]/12 blur-3xl"
      />

      {/* ══════════════════════════════════════════════════════════════════
          MOBILE VIEW (< lg): Sculpted, Compact & High-Contrast Layout
          ══════════════════════════════════════════════════════════════════ */}
      <div className="relative lg:hidden px-4 pt-6 pb-20 space-y-4 max-w-lg mx-auto text-center box-border">
        {/* Mobile Line 1: Brand & Subtitle */}
        <div className="flex flex-col items-center justify-center gap-1.5">
          <Link
            href="/"
            className="min-h-0 min-w-0 inline-flex items-center justify-center rounded-2xl bg-white/[0.04] border border-[var(--palette-aged-brass)]/25 px-3.5 py-1.5 shadow-xs"
          >
            <img
              src="/images/brand/tre-fratelli-official-logo.png"
              alt="Tre Fratelli"
              className="h-9 w-auto object-contain filter drop-shadow-sm"
              loading="lazy"
            />
          </Link>
          <span className="text-[10px] uppercase tracking-[0.18em] text-[var(--palette-aged-brass)] font-sans font-medium">
            · Trezzano sul Naviglio (MI)
          </span>
        </div>

        {/* Mobile Line 2: Compact Horizontal Links */}
        <nav
          aria-label="Mobile Footer Nav"
          className="flex flex-wrap items-center justify-center gap-1.5 text-[11px] text-[var(--palette-stone-beige)]"
        >
          <Link
            href="/"
            className="min-h-7 min-w-0 inline-flex items-center px-2.5 py-1 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.07] hover:text-white transition-colors"
          >
            {t('nav.home')}
          </Link>
          <Link
            href="/menu"
            className="min-h-7 min-w-0 inline-flex items-center px-2.5 py-1 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.07] hover:text-white transition-colors"
          >
            {t('nav.menu')}
          </Link>
          <Link
            href="/pizzeria"
            className="min-h-7 min-w-0 inline-flex items-center px-2.5 py-1 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.07] hover:text-white transition-colors"
          >
            {t('nav.pizzeria')}
          </Link>
          <Link
            href="/wine-drinks"
            className="min-h-7 min-w-0 inline-flex items-center px-2.5 py-1 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.07] hover:text-white transition-colors"
          >
            {t('nav.wineDrinks')}
          </Link>
          <Link
            href="/sweets"
            className="min-h-7 min-w-0 inline-flex items-center px-2.5 py-1 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.07] hover:text-white transition-colors"
          >
            {t('nav.sweets')}
          </Link>
          <Link
            href="/location"
            className="min-h-7 min-w-0 inline-flex items-center px-2.5 py-1 rounded-full bg-[var(--palette-aged-brass)]/15 border border-[var(--palette-aged-brass)]/35 text-[var(--palette-aged-brass)] font-semibold hover:text-white transition-colors"
          >
            {t('nav.reserve')}
          </Link>
          <a
            href="/menu/tre-fratelli-menu.pdf"
            download="Tre-Fratelli-Menu.pdf"
            className="min-h-7 min-w-0 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[var(--palette-italian-red)]/25 border border-[var(--palette-italian-red)]/45 text-[var(--palette-warm-ivory)] hover:text-white transition-colors font-bold"
          >
            <Download size={10} aria-hidden="true" />
            <span>PDF</span>
          </a>
        </nav>

        {/* Mobile Line 3: Fast Action Buttons (Maps, Phone, Email) */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-0.5">
          {/* Google Maps Button */}
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-9 min-w-0 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[var(--palette-italian-red)] hover:bg-[var(--palette-italian-red-dark)] text-white text-[11px] font-bold transition-all shadow-sm"
          >
            <Navigation size={12} aria-hidden="true" />
            <span>Google Maps</span>
            <ExternalLink size={10} className="opacity-80" />
          </a>

          {/* Direct Phone */}
          <a
            href="tel:+390236557693"
            className="min-h-9 min-w-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.08] hover:bg-white/[0.16] text-white text-[11px] font-semibold border border-[var(--palette-aged-brass)]/30 transition-all font-mono"
          >
            <Phone size={11} className="text-[var(--palette-aged-brass)] shrink-0" aria-hidden="true" />
            <bdi dir="ltr">+39 02 3655 7693</bdi>
          </a>
        </div>

        {/* Mobile Inset Card: Address, Plus Code & Working Hours */}
        <div className="rounded-2xl bg-white/[0.03] border border-[var(--palette-aged-brass)]/20 p-3.5 space-y-2.5 text-center">
          {/* Mobile Line 4: Compact Address & Plus Code */}
          <div className="text-[11px] text-[var(--palette-stone-beige)]/95 space-y-0.5">
            <p className="flex items-center justify-center gap-1.5">
              <MapPin size={12} className="text-[var(--palette-italian-red)] shrink-0" aria-hidden="true" />
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-0 min-w-0 hover:text-white hover:underline transition-colors"
              >
                Viale Leonardo da Vinci, 97 · 20090 Trezzano sul Naviglio
              </a>
            </p>
            <p className="text-[10px] text-[var(--palette-stone-beige)]/70 font-mono">
              <bdi dir="ltr">Plus Code: C3C6+PH · Milano</bdi>
            </p>
          </div>

          {/* Mobile Line 5: Clear, Structured Opening Hours Table */}
          <div className="pt-2.5 border-t border-white/10 space-y-2.5">
            <div className="flex items-center justify-center gap-1.5 text-[11px] font-serif font-bold text-[var(--palette-aged-brass)]">
              <Clock size={12} className="shrink-0" aria-hidden="true" />
              <span>{t('location.hours.title')}</span>
            </div>

            <div className="space-y-1.5 text-start">
              {restaurantSchedule.rows.map((row) => (
                <div
                  key={row.id}
                  className="rounded-xl bg-white/[0.03] border border-white/8 px-3 py-2 flex flex-col gap-1.5"
                >
                  <span className="text-[11px] font-bold text-white">
                    {getLocalized(row.days, locale)}
                  </span>
                  <div className="flex flex-wrap items-center gap-1.5">
                    {row.shifts.map((shift, idx) =>
                      shift.isClosed ? (
                        <span
                          key={idx}
                          className="inline-flex items-center px-2 py-0.5 rounded-md bg-[var(--palette-italian-red)]/25 border border-[var(--palette-italian-red)]/40 text-[10px] font-semibold text-amber-100"
                        >
                          {getLocalized(shift.label, locale)}
                        </span>
                      ) : (
                        <span
                          key={idx}
                          className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[10px] border ${
                            shift.highlight
                              ? 'bg-[var(--palette-aged-brass)]/15 border-[var(--palette-aged-brass)]/35 text-[var(--palette-aged-brass)] font-semibold'
                              : 'bg-white/[0.04] border-white/10 text-[var(--palette-stone-beige)]'
                          }`}
                        >
                          <span className="opacity-85">{getLocalized(shift.label, locale)}:</span>
                          <bdi dir="ltr" className="font-mono font-semibold text-white">
                            {shift.time}
                          </bdi>
                        </span>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[9.5px] text-amber-200/85 italic leading-relaxed pt-0.5">
              {getLocalized(restaurantSchedule.mondayNotice, locale)}
            </p>
          </div>
        </div>

        {/* Mobile Copyright */}
        <div className="text-[10px] text-[var(--palette-stone-beige)]/55 pt-1">
          © {new Date().getFullYear()} Tre Fratelli · Trezzano sul Naviglio (MI)
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════
          DESKTOP / LAPTOP VIEW (lg:block): Rich, Elegant 4-Column Layout
          ══════════════════════════════════════════════════════════════════ */}
      <div className="relative hidden lg:block max-w-7xl mx-auto px-6 lg:px-8 pt-14 pb-10 box-border">
        {/* Desktop 4-Column Grid */}
        <div className="grid grid-cols-12 gap-8 lg:gap-10 pb-11 border-b border-white/10 items-start">
          {/* Column 1: Brand & Heritage (3 cols) */}
          <div className="col-span-3 space-y-4">
            <Link
              href="/"
              className="min-h-0 min-w-0 inline-flex items-center gap-3 rounded-2xl bg-white/[0.04] border border-[var(--palette-aged-brass)]/25 px-4 py-2.5 group hover:border-[var(--palette-aged-brass)]/50 transition-all"
            >
              <img
                src="/images/brand/tre-fratelli-official-logo.png"
                alt="Tre Fratelli - Ristorante Italiano"
                className="h-14 w-auto object-contain filter drop-shadow-sm group-hover:scale-102 transition-transform"
                loading="lazy"
              />
            </Link>

            <p className="text-xs text-[var(--palette-stone-beige)]/85 leading-relaxed">
              {locale === 'it'
                ? 'Tradizione culinaria di famiglia a Trezzano sul Naviglio: crudi di mare, carni alla brace di quercia, paste fresche al bronzo e cantina selezionata.'
                : locale === 'ar'
                ? 'أصالة الضيافة والمطبخ الإيطالي في تريتزانو سول نافيليو، ميلانو: ثمار البحر، مشويات جمر البلوط، الباستا الطازجة، وقبو المشروبات المعتقة.'
                : 'Authentic Italian dining in Trezzano sul Naviglio, Milan: raw seafood, oak wood grill, bronze-cut pasta & curated cellar.'}
            </p>

            <div className="pt-0.5 flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-[var(--palette-aged-brass)]/12 border border-[var(--palette-aged-brass)]/30 text-[10px] font-mono tracking-wider uppercase text-[var(--palette-aged-brass)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--palette-aged-brass)]" aria-hidden="true" />
                <span>Trezzano sul Naviglio · Milano</span>
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links (3 cols) */}
          <div className="col-span-3 space-y-3.5">
            <h3 className="font-serif text-sm font-bold tracking-wide text-[var(--palette-aged-brass)] flex items-center gap-2 pb-1 border-b border-white/10">
              <Utensils size={14} aria-hidden="true" />
              <span>
                {locale === 'it'
                  ? 'Menu & Specialità'
                  : locale === 'ar'
                  ? 'القائمة والأطباق'
                  : 'Menu & Chapters'}
              </span>
            </h3>
            <ul className="space-y-1.5 text-xs">
              <li>
                <Link
                  href="/menu"
                  className="min-h-0 min-w-0 py-1 text-[var(--palette-stone-beige)] hover:text-white transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="h-1 w-1 rounded-full bg-[var(--palette-aged-brass)]/60 group-hover:bg-[var(--palette-italian-red)] transition-colors" aria-hidden="true" />
                  <span>{t('nav.menu')}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/pizzeria"
                  className="min-h-0 min-w-0 py-1 text-[var(--palette-stone-beige)] hover:text-white transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="h-1 w-1 rounded-full bg-[var(--palette-aged-brass)]/60 group-hover:bg-[var(--palette-italian-red)] transition-colors" aria-hidden="true" />
                  <span>{t('nav.pizzeria')}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/wine-drinks"
                  className="min-h-0 min-w-0 py-1 text-[var(--palette-stone-beige)] hover:text-white transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="h-1 w-1 rounded-full bg-[var(--palette-aged-brass)]/60 group-hover:bg-[var(--palette-italian-red)] transition-colors" aria-hidden="true" />
                  <span>{t('nav.wineDrinks')}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/sweets"
                  className="min-h-0 min-w-0 py-1 text-[var(--palette-stone-beige)] hover:text-white transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="h-1 w-1 rounded-full bg-[var(--palette-aged-brass)]/60 group-hover:bg-[var(--palette-italian-red)] transition-colors" aria-hidden="true" />
                  <span>{t('nav.sweets')}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/restaurant"
                  className="min-h-0 min-w-0 py-1 text-[var(--palette-stone-beige)] hover:text-white transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="h-1 w-1 rounded-full bg-[var(--palette-aged-brass)]/60 group-hover:bg-[var(--palette-italian-red)] transition-colors" aria-hidden="true" />
                  <span>{t('nav.restaurant')}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/news-promo"
                  className="min-h-0 min-w-0 py-1 text-[var(--palette-stone-beige)] hover:text-white transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="h-1 w-1 rounded-full bg-[var(--palette-aged-brass)]/60 group-hover:bg-[var(--palette-italian-red)] transition-colors" aria-hidden="true" />
                  <span>{t('nav.newsPromo')}</span>
                </Link>
              </li>
              <li className="pt-2">
                <a
                  href="/menu/tre-fratelli-menu.pdf"
                  download="Tre-Fratelli-Menu.pdf"
                  className="min-h-9 min-w-0 px-3.5 py-2 rounded-xl bg-[var(--palette-aged-brass)]/12 hover:bg-[var(--palette-aged-brass)]/22 border border-[var(--palette-aged-brass)]/35 text-[var(--palette-aged-brass)] hover:text-white transition-all inline-flex items-center gap-2 font-semibold"
                >
                  <Download size={13} className="shrink-0" aria-hidden="true" />
                  <span>
                    {locale === 'it'
                      ? 'Scarica Menù PDF (6.4 MB)'
                      : locale === 'ar'
                      ? 'تحميل المنيو PDF (6.4 ميغابايت)'
                      : 'Download PDF Menu (6.4 MB)'}
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Verified Opening Hours (3 cols) */}
          <div className="col-span-3 space-y-3.5">
            <h3 className="font-serif text-sm font-bold tracking-wide text-[var(--palette-aged-brass)] flex items-center gap-2 pb-1 border-b border-white/10">
              <Clock size={14} aria-hidden="true" />
              <span>{t('location.hours.title')}</span>
            </h3>
            <div className="space-y-2 text-xs text-[var(--palette-stone-beige)]">
              {restaurantSchedule.rows.map((row) => (
                <div
                  key={row.id}
                  className="rounded-xl bg-white/[0.03] border border-white/10 p-3 space-y-1.5"
                >
                  <div className="font-semibold text-white text-xs border-b border-white/8 pb-1">
                    {getLocalized(row.days, locale)}
                  </div>
                  <div className="space-y-1 pt-0.5">
                    {row.shifts.map((shift, idx) => (
                      <div key={idx} className="flex items-center justify-between gap-2 text-[11px]">
                        <span className="text-[var(--palette-stone-beige)]/85">
                          {getLocalized(shift.label, locale)}
                        </span>
                        {shift.isClosed ? (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-[var(--palette-italian-red)]/25 border border-[var(--palette-italian-red)]/40 text-[10px] font-semibold text-amber-100">
                            {locale === 'ar' ? 'مغلق' : locale === 'it' ? 'Chiuso' : 'Closed'}
                          </span>
                        ) : (
                          <bdi
                            dir="ltr"
                            className={`font-mono text-[11px] font-semibold ${
                              shift.highlight ? 'text-[var(--palette-aged-brass)]' : 'text-white'
                            }`}
                          >
                            {shift.time}
                          </bdi>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <p className="text-[11px] text-[var(--palette-stone-beige)]/75 italic pt-1 leading-snug">
                {t('location.hours.note')}
              </p>
            </div>
          </div>

          {/* Column 4: Contact, Address & Google Maps (3 cols) */}
          <div className="col-span-3 space-y-3.5">
            <h3 className="font-serif text-sm font-bold tracking-wide text-[var(--palette-aged-brass)] flex items-center gap-2 pb-1 border-b border-white/10">
              <MapPin size={14} aria-hidden="true" />
              <span>{t('location.contacts.title')}</span>
            </h3>
            <div className="space-y-2.5 text-xs text-[var(--palette-stone-beige)]">
              {/* Address with Direct Maps Link */}
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-0 min-w-0 group flex items-start gap-2.5 p-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/8 transition-colors"
              >
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[var(--palette-italian-red)]/20 text-[var(--palette-italian-red)] mt-0.5">
                  <MapPin size={14} aria-hidden="true" />
                </span>
                <span className="leading-snug group-hover:text-white transition-colors">
                  Viale Leonardo da Vinci, 97
                  <span className="block text-[11px] text-[var(--palette-stone-beige)]/75">
                    20090 Trezzano sul Naviglio (MI)
                  </span>
                </span>
              </a>

              {/* Direct Phone */}
              <a
                href="tel:+390236557693"
                className="min-h-0 min-w-0 flex items-center gap-2.5 p-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/8 hover:text-white transition-colors"
              >
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[var(--palette-aged-brass)]/15 text-[var(--palette-aged-brass)]">
                  <Phone size={13} aria-hidden="true" />
                </span>
                <bdi dir="ltr" className="font-mono font-semibold text-white">
                  +39 02 3655 7693
                </bdi>
              </a>

              {/* Google Maps Button */}
              <div className="pt-1 flex items-center">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-9 min-w-0 w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[var(--palette-italian-red)] hover:bg-[var(--palette-italian-red-dark)] text-white text-xs font-bold transition-all shadow-sm"
                >
                  <Navigation size={12} aria-hidden="true" />
                  <span>Google Maps</span>
                  <ExternalLink size={11} className="opacity-80" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Bottom Bar */}
        <div className="pt-6 flex items-center justify-between text-xs text-[var(--palette-stone-beige)]/70">
          <p>
            © {new Date().getFullYear()} Tre Fratelli Ristorante & Pizzeria. {t('footer.rights')}
          </p>
          <div className="flex items-center gap-4 text-xs">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-0 min-w-0 hover:underline text-[var(--palette-aged-brass)] hover:text-white transition-colors inline-flex items-center gap-1.5"
            >
              <bdi dir="ltr">C3C6+PH Trezzano sul Naviglio (Milano)</bdi>
              <ExternalLink size={11} />
            </a>
            <span className="text-white/20" aria-hidden="true">
              ·
            </span>
            <Link
              href="/location"
              className="min-h-0 min-w-0 hover:underline text-[var(--palette-warm-ivory)] hover:text-white font-medium transition-colors"
            >
              {t('nav.reserve')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
