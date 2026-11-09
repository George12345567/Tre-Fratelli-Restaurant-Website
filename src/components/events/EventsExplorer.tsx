'use client';

import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowRight, ExternalLink, Music2, Phone } from 'lucide-react';
import Image from 'next/image';
import type { Locale } from '@/i18n/routing';
import { Link } from '@/i18n/navigation';
import { getLocalized } from '@/data/types';
import { eventsEditorial, recurringEvents } from '@/data/eventsEditorial';
import { restaurantOfficialInfo } from '@/data/restaurantDetails';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { restaurantSchedule } from '@/data/restaurantSchedule';

export function EventsExplorer({ locale }: { locale: Locale }) {
  const [filter, setFilter] = useState<'all' | 'music' | 'seasonal' | 'celebration'>('all');
  const reduceMotion = useReducedMotion() !== false;
  const text = (key: keyof typeof eventsEditorial) => getLocalized(eventsEditorial[key], locale);
  const events = recurringEvents.filter((event) => filter === 'all' || event.type === filter);
  const arrow = locale === 'ar' ? 'rotate-180' : '';

  return (
    <>
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16">
        <ScrollReveal>
          <p className="text-[10px] sm:text-xs uppercase tracking-widest text-[var(--palette-aged-brass)]">{text('eyebrow')}</p>
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-14 mt-5 items-end">
            <h1 className="lg:col-span-7 font-serif text-4xl sm:text-6xl lg:text-7xl leading-tight text-balance">{text('title')}</h1>
            <div className="lg:col-span-5">
              <p className="text-sm sm:text-base leading-relaxed text-[var(--palette-espresso)]/75">{text('intro')}</p>
              <a href={`tel:${restaurantOfficialInfo.phone}`} className="inline-flex min-h-11 items-center gap-3 mt-5 text-sm font-semibold text-[var(--palette-italian-red)] hover:underline underline-offset-8"><Phone size={15} aria-hidden="true" />{text('call')}</a>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal image className="mt-8 sm:mt-12 overflow-hidden">
          <div className="relative aspect-[4/3] sm:aspect-[16/6] bg-[var(--palette-stone-beige)]">
            <Image src="/images/events/karaoke-evening.webp" alt={text('heroAlt')} fill sizes="(max-width: 1280px) 100vw, 1280px" preload className="object-cover object-[center_25%]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" aria-hidden="true" />
            <div className="absolute bottom-5 start-5 sm:bottom-9 sm:start-9 text-white flex items-center gap-3">
              <Music2 size={24} aria-hidden="true" /><p className="font-serif text-xl sm:text-3xl">{text('music')}</p>
            </div>
          </div>
        </ScrollReveal>
      </header>
      <section aria-labelledby="events-programme-title" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <ScrollReveal>
          <h2 id="events-programme-title" className="font-serif text-2xl sm:text-4xl leading-tight">{text('programme')}</h2>
          <p className="mt-4 max-w-2xl text-xs sm:text-sm leading-relaxed text-[var(--palette-espresso)]/70">{text('notice')}</p>
          <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[var(--palette-italian-red)]">{getLocalized(restaurantSchedule.mondayNotice, locale)}</p>
        </ScrollReveal>
        <div role="group" aria-label={text('programme')} className="flex flex-wrap gap-x-5 gap-y-1 mt-7 border-b border-[var(--palette-aged-brass)]/25">
          {(['all', 'music', 'seasonal', 'celebration'] as const).map((key) => (
            <button type="button" key={key} aria-pressed={filter === key} aria-controls="event-programme" onClick={() => setFilter(key)} className={`min-h-11 pb-3 text-xs sm:text-sm border-b-2 transition-colors ${filter === key ? 'border-[var(--palette-italian-red)] text-[var(--palette-italian-red)]' : 'border-transparent text-[var(--palette-espresso)]/65 hover:text-[var(--palette-espresso)]'}`}>{text(key)}</button>
          ))}
        </div>
        <div id="event-programme" className="relative min-h-64">
          <AnimatePresence initial={false} mode="popLayout">
            {events.map((event) => (
              <motion.article key={event.id} layout={!reduceMotion} initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: reduceMotion ? 0 : -12 }} transition={{ duration: reduceMotion ? 0 : 0.35 }} className="py-8 sm:py-10 border-b border-[var(--palette-aged-brass)]/25">
                <ScrollReveal>
                  <div className="grid sm:grid-cols-12 gap-4 sm:gap-8">
                    <div className="sm:col-span-4">
                      <p className="text-[10px] sm:text-xs uppercase tracking-wider text-[var(--palette-aged-brass)]">{text(event.type)}</p>
                      <p className="mt-2 text-xs leading-relaxed text-[var(--palette-espresso)]/60">{getLocalized(event.schedule, locale)}</p>
                    </div>
                    <div className="sm:col-span-8">
                      <h3 className="font-serif text-2xl sm:text-3xl leading-tight">{getLocalized(event.title, locale)}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-[var(--palette-espresso)]/75">{getLocalized(event.copy, locale)}</p>
                      <Link href="/location" className="inline-flex min-h-11 items-center gap-3 mt-3 text-xs sm:text-sm text-[var(--palette-italian-red)] font-semibold hover:underline underline-offset-8">{text('reserve')}<ArrowRight size={14} className={arrow} aria-hidden="true" /></Link>
                    </div>
                  </div>
                </ScrollReveal>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </section>
      <section aria-labelledby="events-contact-title" className="bg-[var(--palette-espresso)] text-[var(--palette-warm-ivory)] px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <ScrollReveal className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div><h2 id="events-contact-title" className="text-3xl sm:text-5xl font-serif leading-tight">{text('social')}</h2><p className="mt-4 text-sm leading-relaxed text-stone-300">{text('socialCopy')}</p></div>
            <div className="space-y-4">
              <a href={`tel:${restaurantOfficialInfo.phone}`} className="inline-flex min-h-11 items-center gap-3 text-xl sm:text-2xl font-serif hover:text-amber-200"><Phone size={19} aria-hidden="true" /><bdi dir="ltr">{restaurantOfficialInfo.phoneDisplay}</bdi></a>
              <div className="flex flex-wrap gap-6 text-sm">
                {(['instagram', 'facebook'] as const).map((channel) => <a key={channel} href={restaurantOfficialInfo[channel === 'instagram' ? 'instagramUrl' : 'facebookUrl']} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 underline underline-offset-8 decoration-stone-500 hover:decoration-white">{channel === 'instagram' ? 'Instagram' : 'Facebook'}<ExternalLink size={12} aria-hidden="true" /></a>)}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
