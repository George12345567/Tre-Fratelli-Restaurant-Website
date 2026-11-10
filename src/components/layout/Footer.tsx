import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  Navigation,
  Utensils,
} from 'lucide-react';
import type { Locale } from '@/i18n/routing';
import { restaurantSchedule } from '@/data/restaurantSchedule';
import { getLocalized } from '@/data/types';

interface FooterProps {
  locale: Locale;
}

export async function Footer({ locale }: FooterProps) {
  const t = await getTranslations({ locale });
  const googleMapsUrl = 'https://maps.app.goo.gl/XtPWEL7wA6BwA8na7?g_st=ac';
  const hoursSourceUrl = restaurantSchedule.sourceUrl;

  return (
    <footer
      id="footer"
      role="contentinfo"
      className="w-full max-w-full overflow-hidden overflow-x-clip bg-[var(--palette-espresso)] text-[var(--palette-warm-ivory)] border-t border-[var(--palette-espresso-light)] mt-10 sm:mt-14 relative z-10"
    >
      {/* ══════════════════════════════════════════════════════════════════
          MOBILE VIEW (< lg): Ultra-Compact & Short with Essential Details
          ══════════════════════════════════════════════════════════════════ */}
      <div className="lg:hidden px-4 py-5 space-y-3.5 max-w-lg mx-auto text-center box-border">
        {/* Mobile Line 1: Brand & Subtitle */}
        <div className="flex items-center justify-center gap-2.5">
          <Link href="/" className="inline-flex items-center justify-center">
            <img
              src="/images/brand/tre-fratelli-official-logo.png"
              alt="Tre Fratelli"
              className="h-9 w-auto object-contain filter drop-shadow-sm"
              loading="lazy"
            />
          </Link>
          <span className="text-[10px] uppercase tracking-wider text-[var(--palette-aged-brass)] font-sans">
            · Trezzano sul Naviglio (MI)
          </span>
        </div>

        {/* Mobile Line 2: Compact Horizontal Links */}
        <nav aria-label="Mobile Footer Nav" className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-xs text-[var(--palette-stone-beige)]">
          <Link href="/" className="hover:text-white transition-colors">{t('nav.home')}</Link>
          <span className="text-white/20" aria-hidden="true">·</span>
          <Link href="/menu" className="hover:text-white transition-colors">{t('nav.menu')}</Link>
          <span className="text-white/20" aria-hidden="true">·</span>
          <Link href="/pizzeria" className="hover:text-white transition-colors">{t('nav.pizzeria')}</Link>
          <span className="text-white/20" aria-hidden="true">·</span>
          <Link href="/wine-drinks" className="hover:text-white transition-colors">{t('nav.wineDrinks')}</Link>
          <span className="text-white/20" aria-hidden="true">·</span>
          <Link href="/sweets" className="hover:text-white transition-colors">{t('nav.sweets')}</Link>
          <span className="text-white/20" aria-hidden="true">·</span>
          <Link href="/location" className="text-[var(--palette-aged-brass)] font-semibold hover:text-white transition-colors">{t('nav.reserve')}</Link>
          <span className="text-white/20" aria-hidden="true">·</span>
          <a
            href="/menu/tre-fratelli-menu.pdf"
            download="Tre-Fratelli-Menu.pdf"
            className="text-[var(--palette-aged-brass)] hover:text-white transition-colors font-bold"
          >
            PDF
          </a>
        </nav>

        {/* Mobile Line 3: Fast Action Buttons (Maps, Phone, Booking) */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 pt-0.5">
          {/* Google Maps Button */}
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--palette-italian-red)] hover:bg-[var(--palette-italian-red-dark)] text-white text-[11px] font-bold transition-all shadow-2xs"
          >
            <Navigation size={12} aria-hidden="true" />
            <span>Google Maps</span>
            <ExternalLink size={10} className="opacity-80" />
          </a>

          {/* Direct Phone */}
          <a
            href="tel:+390236557693"
            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-[11px] font-semibold border border-white/10 transition-all font-mono"
          >
            <Phone size={11} className="text-[var(--palette-aged-brass)]" aria-hidden="true" />
            <span>+39 02 3655 7693</span>
          </a>

          {/* Direct Email */}
          <a
            href="mailto:prenotazioni@trefratelli.it"
            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-[var(--palette-stone-beige)] text-[11px] border border-white/10 transition-all font-mono"
          >
            <Mail size={11} className="text-[var(--palette-aged-brass)]" aria-hidden="true" />
            <span>Email</span>
          </a>
        </div>

        {/* Mobile Line 4: Compact Address & Plus Code */}
        <div className="text-[11px] text-[var(--palette-stone-beige)]/90 space-y-0.5 pt-0.5 border-t border-white/5">
          <p className="flex items-center justify-center gap-1">
            <MapPin size={11} className="text-[var(--palette-italian-red)] shrink-0" aria-hidden="true" />
            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
              Viale Leonardo da Vinci, 97 · 20090 Trezzano sul Naviglio
            </a>
          </p>
          <p className="text-[10px] text-[var(--palette-stone-beige)]/70 font-mono">
            Plus Code: C3C6+PH · Milano
          </p>
        </div>

        {/* Mobile Line 5: Compact Working Hours & Monday Tip */}
        <div className="text-[10px] text-[var(--palette-stone-beige)]/80 space-y-1 pt-1 border-t border-white/5">
          <p className="flex items-center justify-center gap-1">
            <Clock size={10} className="text-[var(--palette-aged-brass)] shrink-0" aria-hidden="true" />
            <span>
              {locale === 'it'
                ? 'Mar–Sab 12-15 · 18:30-00 | Dom 12-00 | Lun 12-15'
                : locale === 'ar'
                ? 'الثلاثاء–السبت: 12–15 · 18:30–00 | الأحد: 12–00 | الاثنين: 12–15'
                : 'Tue–Sat 12-15 · 18:30-00 | Sun 12-00 | Mon 12-15'}
            </span>
          </p>
          <p className="text-[9px] text-amber-200/80 italic">
            {getLocalized(restaurantSchedule.mondayNotice, locale)}
          </p>
        </div>

        {/* Mobile Copyright */}
        <div className="text-[9px] text-[var(--palette-stone-beige)]/50 pt-1 border-t border-white/5">
          © {new Date().getFullYear()} Tre Fratelli · Dal 1998
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════
          DESKTOP / LAPTOP VIEW (lg:block): Rich, Elegant 4-Column Layout
          ══════════════════════════════════════════════════════════════════ */}
      <div className="hidden lg:block max-w-7xl mx-auto px-6 lg:px-8 py-12 box-border">
        {/* Desktop 4-Column Grid */}
        <div className="grid grid-cols-4 gap-8 pb-10 border-b border-white/10">
          {/* Column 1: Brand & Heritage */}
          <div className="space-y-3.5">
            <Link href="/" className="inline-flex items-center gap-3 group">
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

            <div className="pt-1 flex items-center gap-2">
              <span className="inline-block py-0.5 px-2.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-[var(--palette-aged-brass)]">
                Milano · Dal 1998
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-3">
            <h3 className="font-serif text-sm font-bold text-[var(--palette-aged-brass)] flex items-center gap-1.5">
              <Utensils size={15} aria-hidden="true" />
              <span>{locale === 'it' ? 'Menu & Specialità' : locale === 'ar' ? 'القائمة والأطباق' : 'Menu & Chapters'}</span>
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/menu" className="text-[var(--palette-stone-beige)] hover:text-white transition-colors block">
                  {t('nav.menu')}
                </Link>
              </li>
              <li>
                <Link href="/pizzeria" className="text-[var(--palette-stone-beige)] hover:text-white transition-colors block">
                  {t('nav.pizzeria')}
                </Link>
              </li>
              <li>
                <Link href="/wine-drinks" className="text-[var(--palette-stone-beige)] hover:text-white transition-colors block">
                  {t('nav.wineDrinks')}
                </Link>
              </li>
              <li>
                <Link href="/sweets" className="text-[var(--palette-stone-beige)] hover:text-white transition-colors block">
                  {t('nav.sweets')}
                </Link>
              </li>
              <li>
                <Link href="/restaurant" className="text-[var(--palette-stone-beige)] hover:text-white transition-colors block">
                  {t('nav.restaurant')}
                </Link>
              </li>
              <li>
                <Link href="/news-promo" className="text-[var(--palette-stone-beige)] hover:text-white transition-colors block">
                  {t('nav.newsPromo')}
                </Link>
              </li>
              <li className="pt-1 border-t border-white/10">
                <a
                  href="/menu/tre-fratelli-menu.pdf"
                  download="Tre-Fratelli-Menu.pdf"
                  className="text-[var(--palette-aged-brass)] hover:text-white transition-colors inline-flex items-center gap-1 font-semibold"
                >
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

          {/* Column 3: Verified Opening Hours */}
          <div className="space-y-3">
            <h3 className="font-serif text-sm font-bold text-[var(--palette-aged-brass)] flex items-center gap-1.5">
              <Clock size={15} aria-hidden="true" />
              <span>{t('location.hours.title')}</span>
            </h3>
            <div className="space-y-1.5 text-xs text-[var(--palette-stone-beige)]">
              <div className="flex justify-between items-center py-0.5 border-b border-white/5">
                <span>{locale === 'it' ? 'Martedì – Sabato' : locale === 'ar' ? 'الثلاثاء – السبت' : 'Tue – Sat'}</span>
                <span className="font-mono text-white text-[11px]">12:00-15 · 18:30-00</span>
              </div>
              <div className="flex justify-between items-center py-0.5 border-b border-white/5">
                <span>{locale === 'it' ? 'Domenica' : locale === 'ar' ? 'الأحد' : 'Sunday'}</span>
                <span className="font-mono text-[var(--palette-aged-brass)] text-[11px]">12:00 – 00:00</span>
              </div>
              <div className="flex justify-between items-center py-0.5 border-b border-white/5">
                <span>{locale === 'it' ? 'Lunedì' : locale === 'ar' ? 'الاثنين' : 'Monday'}</span>
                <span className="font-mono text-stone-300 text-[11px]">12:00 – 15:00</span>
              </div>
              <p className="text-[11px] text-[var(--palette-stone-beige)]/70 italic pt-1 leading-snug">
                {t('location.hours.note')}
              </p>
              <a
                href={hoursSourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] text-[var(--palette-aged-brass)] hover:text-white underline inline-block"
              >
                {t('location.hours.pagineGialleSource')}
              </a>
            </div>
          </div>

          {/* Column 4: Contact, Address & Google Maps */}
          <div className="space-y-3">
            <h3 className="font-serif text-sm font-bold text-[var(--palette-aged-brass)] flex items-center gap-1.5">
              <MapPin size={15} aria-hidden="true" />
              <span>{t('location.contacts.title')}</span>
            </h3>
            <div className="space-y-2 text-xs text-[var(--palette-stone-beige)]">
              {/* Address with Direct Maps Link */}
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-2 hover:text-white transition-colors"
              >
                <MapPin size={14} className="text-[var(--palette-italian-red)] shrink-0 mt-0.5" aria-hidden="true" />
                <span className="leading-snug group-hover:underline">
                  Viale Leonardo da Vinci, 97
                  <span className="block text-[11px] text-[var(--palette-stone-beige)]/80">
                    20090 Trezzano sul Naviglio (MI)
                  </span>
                </span>
              </a>

              {/* Direct Phone */}
              <div className="flex items-center gap-2">
                <Phone size={13} className="text-[var(--palette-aged-brass)] shrink-0" aria-hidden="true" />
                <a href="tel:+390236557693" className="hover:text-white transition-colors font-mono font-medium">
                  +39 02 3655 7693
                </a>
              </div>

              {/* Direct Email */}
              <div className="flex items-center gap-2">
                <Mail size={13} className="text-[var(--palette-aged-brass)] shrink-0" aria-hidden="true" />
                <a href="mailto:prenotazioni@trefratelli.it" className="hover:text-white transition-colors font-mono">
                  prenotazioni@trefratelli.it
                </a>
              </div>

              {/* Google Maps Button */}
              <div className="pt-1.5 flex items-center">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[var(--palette-italian-red)] hover:bg-[var(--palette-italian-red-dark)] text-white text-xs font-bold transition-all shadow-xs"
                >
                  <Navigation size={12} aria-hidden="true" />
                  <span>Google Maps</span>
                  <ExternalLink size={10} className="opacity-80" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Bottom Bar */}
        <div className="pt-6 flex items-center justify-between text-xs text-[var(--palette-stone-beige)]/70">
          <p>© {new Date().getFullYear()} Tre Fratelli Ristorante & Pizzeria. {t('footer.rights')}</p>
          <div className="flex items-center gap-4 text-xs">
            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:underline text-[var(--palette-aged-brass)] inline-flex items-center gap-1">
              <span>C3C6+PH Trezzano sul Naviglio (Milano)</span>
              <ExternalLink size={11} />
            </a>
            <span className="text-white/20">·</span>
            <Link href="/location" className="hover:underline text-[var(--palette-warm-ivory)]">
              {t('nav.reserve')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
