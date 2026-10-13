'use client';

import { useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { Sparkles, Music, Wine, ChefHat, UtensilsCrossed, PartyPopper } from 'lucide-react';
import type { NewsPost, EventCategoryKey } from '@/data/types';
import type { Locale } from '@/i18n/routing';
import { EventSpotlight } from './EventSpotlight';
import { EventCard } from './EventCard';
import { KaraokeFeatureSection } from './KaraokeFeatureSection';
import { EventPrivateBanner } from './EventPrivateBanner';

interface EventsExplorerProps {
  posts: NewsPost[];
  locale: Locale;
}

type FilterKey = 'all' | EventCategoryKey;

export function EventsExplorer({ posts, locale }: EventsExplorerProps) {
  const t = useTranslations();
  const [selectedCategory, setSelectedCategory] = useState<FilterKey>('all');

  const filterTabs: { key: FilterKey; label: string; icon: React.ReactNode }[] = [
    {
      key: 'all',
      label: t('news.filters.all'),
      icon: <Sparkles size={14} className="shrink-0" />,
    },
    {
      key: 'music',
      label: t('news.filters.music'),
      icon: <Music size={14} className="shrink-0" />,
    },
    {
      key: 'tasting',
      label: t('news.filters.tasting'),
      icon: <Wine size={14} className="shrink-0" />,
    },
    {
      key: 'masterclass',
      label: t('news.filters.masterclass'),
      icon: <ChefHat size={14} className="shrink-0" />,
    },
    {
      key: 'seasonal',
      label: t('news.filters.seasonal'),
      icon: <UtensilsCrossed size={14} className="shrink-0" />,
    },
    {
      key: 'celebration',
      label: t('news.filters.celebration'),
      icon: <PartyPopper size={14} className="shrink-0" />,
    },
  ];

  const featuredEvent = useMemo(() => {
    return posts.find((p) => p.featured) || posts[0];
  }, [posts]);

  const filteredPosts = useMemo(() => {
    if (selectedCategory === 'all') {
      return posts.filter((p) => p.id !== featuredEvent?.id);
    }
    return posts.filter((p) => p.type === selectedCategory);
  }, [posts, selectedCategory, featuredEvent]);

  return (
    <div className="space-y-10">
      {/* ── Category Filter Tabs ── */}
      <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-2 scrollbar-none gap-2 px-1">
        {filterTabs.map((tab) => {
          const isActive = selectedCategory === tab.key;
          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => setSelectedCategory(tab.key)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-[var(--palette-espresso)] text-white shadow-md ring-2 ring-[var(--palette-aged-brass)]/40'
                  : 'bg-white/90 text-[var(--palette-espresso)]/80 hover:bg-stone-100 hover:text-[var(--palette-espresso)] border border-stone-200/70 shadow-2xs'
              }`}
            >
              <span className={isActive ? 'text-[var(--palette-aged-brass)]' : 'text-stone-400'}>
                {tab.icon}
              </span>
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* ── Featured Spotlight Card (Visible when 'all' or 'music' is selected) ── */}
      {(selectedCategory === 'all' || selectedCategory === 'music') && featuredEvent && (
        <EventSpotlight event={featuredEvent} locale={locale} />
      )}

      {/* ── Section Title & Count ── */}
      <div className="flex items-center justify-between border-b border-stone-200/80 pb-4">
        <div>
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-[var(--palette-espresso)]">
            {selectedCategory === 'all'
              ? t('news.viewAll')
              : filterTabs.find((f) => f.key === selectedCategory)?.label}
          </h2>
          <p className="text-xs text-stone-500 font-sans mt-0.5">
            {t('news.scheduleNotice')}
          </p>
        </div>

        <span className="text-xs font-mono font-semibold text-stone-400 bg-stone-100 px-3 py-1 rounded-full">
          {filteredPosts.length} {locale === 'it' ? 'eventi' : locale === 'ar' ? 'فعالية' : 'events'}
        </span>
      </div>

      {/* ── Events Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredPosts.map((post) => (
          <EventCard key={post.id} post={post} locale={locale} />
        ))}
      </div>

      {/* ── Highlight Feature: Karaoke & Live Music Section ── */}
      <KaraokeFeatureSection locale={locale} />

      {/* ── Private Celebrations & Group Tables Banner ── */}
      <EventPrivateBanner locale={locale} />
    </div>
  );
}
