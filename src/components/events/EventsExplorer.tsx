'use client';

import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowRight, Phone } from 'lucide-react';
import type { Locale } from '@/i18n/routing';
import { Link } from '@/i18n/navigation';
import { getLocalized } from '@/data/types';
import { eventsEditorial, recurringEvents } from '@/data/eventsEditorial';
import { restaurantOfficialInfo } from '@/data/restaurantDetails';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { restaurantSchedule } from '@/data/restaurantSchedule';
import { EventsMedia } from './EventsMedia';

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
        <EventsMedia locale={locale} />
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
      <section aria-labelledby="events-contact-title" className="px-4 sm:px-6 lg:px-8 pb-10 sm:pb-16">
        <ScrollReveal className="max-w-6xl mx-auto border-t border-[var(--palette-aged-brass)]/30 pt-10 sm:pt-14 text-center">
          <span aria-hidden="true" className="block w-8 h-px bg-[var(--palette-italian-red)] mx-auto mb-5" />
          <p className="text-[10px] sm:text-xs tracking-widest uppercase text-[var(--palette-aged-brass)]">{text('contactKicker')}</p>
          <h2 id="events-contact-title" className="mt-3 text-3xl sm:text-4xl font-serif leading-tight text-balance">{text('contactTitle')}</h2>
          <p className="mt-4 mx-auto max-w-xl text-sm leading-relaxed text-[var(--palette-espresso)]/70">{text('contactCopy')}</p>
          <div className="mt-6 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-7">
            <Link href="/location" className="inline-flex min-h-11 items-center gap-3 rounded-full bg-[var(--palette-italian-red)] hover:bg-[var(--palette-italian-red-dark)] text-white px-6 py-3 text-sm font-semibold transition-colors">
              {text('reserve')}<ArrowRight size={15} className={arrow} aria-hidden="true" />
            </Link>
            <a href={`tel:${restaurantOfficialInfo.phone}`} className="inline-flex min-h-11 items-center gap-3 text-base sm:text-lg font-serif text-[var(--palette-espresso)] hover:text-[var(--palette-italian-red)] transition-colors">
              <Phone size={16} aria-hidden="true" /><bdi dir="ltr">{restaurantOfficialInfo.phoneDisplay}</bdi>
            </a>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
