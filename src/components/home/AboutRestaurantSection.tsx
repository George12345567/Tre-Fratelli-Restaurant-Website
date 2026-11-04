'use client';

import { ArrowRight, CalendarDays } from 'lucide-react';
import { Link } from '@/i18n/navigation';

interface Props {
  locale: string;
  isRtl: boolean;
  translations: {
    reserveTable: string;
    exploreRestaurant: string;
  };
}

export function AboutRestaurantSection({
  locale,
  isRtl,
  translations,
}: Props) {
  const steps = [
    {
      num: '01',
      title:
        locale === 'it'
          ? 'Carni Nobili & Provenienza Etica'
          : locale === 'ar'
          ? 'سلالات اللحوم ومصادرها المعتمدة'
          : 'Certified Heritage Cattle & Provenance',
      description:
        locale === 'it'
          ? 'Solo razze d’eccellenza: Bistecca Chianina toscana e Fassona piemontese da piccoli allevamenti certificati, frollate a secco 35 giorni per la massima tenerezza.'
          : locale === 'ar'
          ? 'لحومنا منتقاة من سلالات إيطالية عريقة: «كيانينا» التوسكانية و«فاسونا» من بييمونتي، مع تعتيق جاف 35 يوماً لضمان أعلى مستويات الطراوة وغنى النكهة.'
          : 'Exclusively historic breeds: certified Tuscan Chianina and Piedmontese Fassona from ethical farms, 35-day dry-aged for supreme tenderness.',
    },
    {
      num: '02',
      title:
        locale === 'it'
          ? 'Lavorazione Lenta & Grani Antichi'
          : locale === 'ar'
          ? 'صناعة بطيئة وعجين طبيعي'
          : 'The Unhurried Artisanal Craft',
      description:
        locale === 'it'
          ? 'Farine 100% italiane macinate a pietra trafilate al bronzo ogni alba, e impasti per pizza a lievitazione naturale di oltre 48 ore.'
          : locale === 'ar'
          ? 'باستا طازجة تُعجن يومياً وتُسحب بقوالب البرونز، وعجينة بيتزا بطيئة التخمير لأكثر من 48 ساعة لتكون خفيفة وهشة وسهلة الهضم.'
          : 'Stone-milled Italian wheat bronze-extruded fresh every dawn, paired with 48-hour slow sourdough fermentation for effortless lightness.',
    },
    {
      num: '03',
      title:
        locale === 'it'
          ? 'La Fiamma Viva: Brace di Quercia & Forno a 450°C'
          : locale === 'ar'
          ? 'طهي اللهب: جمر البلوط وفرن 450 مئوية'
          : 'Live Fire: Oak Embers & 450°C Hearth',
      description:
        locale === 'it'
          ? 'Cottura espressa sulla brace ardente di legno di quercia che sigilla i succhi naturali, e forno a legna a 450°C per una doratura perfetta.'
          : locale === 'ar'
          ? 'شواء فوري على جمر خشب البلوط الطبيعي لحبس العصارة الطبيعية، وخبز البيتزا في 90 ثانية في فرن الحطب بدرجة حرارة 450 مئوية.'
          : 'Seared directly over radiant oak coals to lock in savory natural juices, and baked in 90 seconds inside our 450°C beechwood dome oven.',
    },
  ];

  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center py-8 sm:py-12 lg:py-6 overflow-hidden bg-gradient-to-b from-transparent via-[var(--palette-stone-beige-light)]/20 to-transparent">
      {/* ── Soft Ambient Backlight ── */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[360px] bg-[radial-gradient(ellipse_at_center,rgba(176,138,87,0.08),transparent_70%)] pointer-events-none blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          {/* ── 1. The Official Logo Emblem (Compact & Unclipped) ── */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center shrink-0">
            <div className="relative group max-w-[220px] sm:max-w-[250px] lg:max-w-[270px] w-full">
              {/* Warm Backglow */}
              <div
                className="absolute inset-2 rounded-2xl bg-[var(--palette-aged-brass)]/15 blur-xl group-hover:bg-[var(--palette-aged-brass)]/25 transition-all duration-500 pointer-events-none"
                aria-hidden="true"
              />

              {/* Logo Frame: Natural Unclipped Aspect Ratio */}
              <div className="relative rounded-2xl overflow-hidden shadow-[0_10px_28px_-6px_rgba(43,31,26,0.14)] border border-black/5 bg-white/75 p-3 backdrop-blur-xs transition-transform duration-500 group-hover:scale-102">
                <img
                  src="/images/brand/tre-fratelli-official-logo.png"
                  alt="Tre Fratelli - Ristorante Italiano"
                  className="w-full h-auto object-contain select-none p-2"
                />
              </div>

              {/* Italian Tricolore Brand Seal */}
              <div className="mt-2.5 flex items-center justify-center gap-2">
                <span className="w-5 h-px bg-[var(--palette-aged-brass)]/40" aria-hidden="true" />
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase text-[var(--palette-espresso)]/75">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#009246]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d8d8d8]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CE2B37]" />
                  <span className="ms-1">Filiera Certificata · Milano</span>
                </span>
                <span className="w-5 h-px bg-[var(--palette-aged-brass)]/40" aria-hidden="true" />
              </div>
            </div>
          </div>

          {/* ── 2. The Culinary Process & Meat Provenance (Pure Text, No Cards) ── */}
          <div className="lg:col-span-8 space-y-3.5 sm:space-y-4 text-center lg:text-start">
            {/* Eyebrow: Open Typography, Zero Card/Pill Box */}
            <div className="flex items-center justify-center lg:justify-start gap-2.5">
              <span className="w-5 h-px bg-[var(--palette-aged-brass)]/60" aria-hidden="true" />
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[var(--palette-italian-red)]">
                {locale === 'it'
                  ? 'La Nostra Filiera & Metodo di Cottura'
                  : locale === 'ar'
                  ? 'مسار الجودة وخطوات التحضير'
                  : 'Our Sourcing & Culinary Process'}
              </span>
              <span className="w-5 h-px bg-[var(--palette-aged-brass)]/60 hidden sm:inline" aria-hidden="true" />
            </div>

            {/* Main Title */}
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-[32px] font-medium tracking-tight text-[var(--palette-espresso)] leading-snug">
              {locale === 'it'
                ? 'Dagli Allevamenti Selezionati alla Brace Viva.'
                : locale === 'ar'
                ? 'من مزارع إيطاليا المعتمدة إلى جمر البلوط المتقد.'
                : 'From Ethical Italian Pastures to Live Oak Embers.'}
            </h2>

            {/* Short Intro Lead */}
            <p className="text-xs sm:text-[13px] text-[var(--palette-espresso)]/80 leading-relaxed max-w-2xl">
              {locale === 'it'
                ? 'Il grande sapore nasce dal rispetto assoluto per l’origine. Ecco come selezioniamo, prepariamo e cuociamo le nostre specialità ogni giorno:'
                : locale === 'ar'
                ? 'المذاق الاستثنائي يبدأ باحترام المصدر. إليك كيف نختار اللحوم والمكونات ونطهوها بحرفية كل يوم:'
                : 'Extraordinary flavor begins with deep respect for provenance. Here is how we source, age, and sear our specialties every day:'}
            </p>

            {/* ── The 3 Culinary Process Steps (Pure Narrative, Zero Cards) ── */}
            <div className="space-y-2.5 sm:space-y-3 pt-1 border-t border-[var(--palette-stone-beige)]/30 text-start">
              {steps.map((step) => (
                <div key={step.num} className="flex items-start gap-3 group/step">
                  {/* Subtle Brass Step Number */}
                  <span className="font-serif font-bold text-xs sm:text-sm text-[var(--palette-aged-brass)] mt-0.5 shrink-0 select-none">
                    {step.num}.
                  </span>

                  {/* Step Content */}
                  <div className="space-y-0.5">
                    <h3 className="font-serif text-xs sm:text-sm font-bold text-[var(--palette-espresso)] group-hover/step:text-[var(--palette-italian-red)] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-[var(--palette-espresso)]/80 leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* ── Compact Action Buttons ── */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <Link
                href="/location"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--palette-italian-red)] hover:bg-[var(--palette-italian-red-dark)] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all"
              >
                <CalendarDays size={14} aria-hidden="true" />
                <span>{translations.reserveTable}</span>
                <ArrowRight
                  size={13}
                  className={`transition-transform duration-200 ${isRtl ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </Link>

              <Link
                href="/restaurant"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full liquid-glass-pill hover:bg-white text-[var(--palette-espresso)] text-xs sm:text-sm font-semibold shadow-xs hover:shadow-md transition-all"
              >
                <span>{translations.exploreRestaurant}</span>
                <ArrowRight
                  size={13}
                  className={`transition-transform duration-200 ${isRtl ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
