import type { Metadata } from 'next';
import { hasLocale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Link } from '@/i18n/navigation';
import { ArrowRight, Sparkles } from 'lucide-react';
import { newsData } from '@/data/news';
import { getLocalized } from '@/data/types';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const t = await getTranslations({ locale });
  return {
    title: t('meta.newsTitle'),
    description: t('news.subtitle'),
  };
}

export default async function NewsPromoPage({ params }: PageProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const t = await getTranslations({ locale });
  const isRtl = locale === 'ar';
  const [featuredPost, ...otherPosts] = newsData;

  const formatDate = (dateStr: string) => {
    const loc = locale === 'it' ? 'it-IT' : locale === 'ar' ? 'ar-SA' : 'en-US';
    return new Date(dateStr).toLocaleDateString(loc, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <main id="main-content" tabIndex={-1} className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto focus:outline-none">
      {/* ── Page Header ── */}
      <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
        <span className="text-xs uppercase tracking-widest font-semibold text-[var(--palette-italian-red)]">
          {t('news.subtitle')}
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[var(--palette-espresso)]">
          {t('news.title')}
        </h1>
      </div>

      {/* ── Featured Event Card ── */}
      {featuredPost && (
        <article className="mb-14 bg-white rounded-2xl overflow-hidden border border-[var(--palette-stone-beige)]/40 shadow-sm grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 h-72 lg:h-[400px] relative overflow-hidden">
            <img
              src={featuredPost.image}
              alt={getLocalized(featuredPost.title, locale)}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-[var(--palette-italian-red)] text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider flex items-center gap-1.5 shadow">
              <Sparkles size={13} aria-hidden="true" />
              <span>{t('news.featured')}</span>
            </div>
          </div>

          <div className="lg:col-span-5 p-8 sm:p-10 space-y-4">
            <div className="flex items-center gap-2 text-xs text-[var(--palette-aged-brass)] font-semibold uppercase tracking-wider">
              <span>{getLocalized(featuredPost.category, locale)}</span>
              <span>·</span>
              <time dateTime={featuredPost.date} className="text-[var(--palette-espresso)]/60 font-mono">
                {formatDate(featuredPost.date)}
              </time>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--palette-espresso)] leading-snug">
              {getLocalized(featuredPost.title, locale)}
            </h2>

            <p className="text-sm text-[var(--palette-espresso)]/80 leading-relaxed">
              {getLocalized(featuredPost.excerpt, locale)}
            </p>

            <div className="pt-2">
              <Link
                href="/location"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[var(--palette-italian-red)] text-white hover:bg-[var(--palette-italian-red-dark)] text-xs font-semibold transition-all shadow-sm"
              >
                <span>{t('nav.reserve')}</span>
                <ArrowRight size={13} className={isRtl ? 'rotate-180' : ''} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </article>
      )}

      {/* ── Other Events Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
        {otherPosts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-xl overflow-hidden border border-[var(--palette-stone-beige)]/40 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="h-44 relative overflow-hidden">
                <img
                  src={post.image}
                  alt={getLocalized(post.title, locale)}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              <div className="p-5 space-y-2.5">
                <div className="flex items-center justify-between text-[11px] text-[var(--palette-espresso)]/60">
                  <span className="font-semibold text-[var(--palette-italian-red)] uppercase tracking-wider">
                    {getLocalized(post.category, locale)}
                  </span>
                  <time dateTime={post.date} className="font-mono">
                    {formatDate(post.date)}
                  </time>
                </div>

                <h3 className="font-serif text-base font-bold text-[var(--palette-espresso)] leading-snug">
                  {getLocalized(post.title, locale)}
                </h3>

                <p className="text-xs text-[var(--palette-espresso)]/75 leading-relaxed line-clamp-3">
                  {getLocalized(post.excerpt, locale)}
                </p>
              </div>
            </div>

            <div className="p-5 pt-0">
              <Link
                href="/location"
                className="text-xs font-semibold text-[var(--palette-italian-red)] hover:underline inline-flex items-center gap-1"
              >
                <span>{t('nav.reserve')}</span>
                <ArrowRight size={12} className={isRtl ? 'rotate-180' : ''} aria-hidden="true" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
