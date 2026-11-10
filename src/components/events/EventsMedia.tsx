import type { Locale } from '@/i18n/routing';
import { getLocalized, type LocalizedText } from '@/data/types';
import { ScrollReveal } from '@/components/motion/ScrollReveal';

const copy = {
  title: {
    it: 'Momenti veri, da noi.',
    en: 'Real moments, from our restaurant.',
    ar: 'لقطات حقيقية من عندنا.',
  },
  evening: {
    it: 'Una serata al ristorante',
    en: 'An evening at the restaurant',
    ar: 'من سهرات المطعم',
  },
  karaoke: {
    it: 'Musica e karaoke, dal vivo',
    en: 'Music and karaoke, in the moment',
    ar: 'من أجواء الغناء والكاراوكي',
  },
} satisfies Record<string, LocalizedText>;

const videos = [
  {
    id: 'evening',
    src: '/video/events/restaurant-evening.mp4',
    poster: '/images/events/authentic/evening-poster.webp',
  },
  {
    id: 'karaoke',
    src: '/video/events/karaoke-night.mp4',
    poster: '/images/events/authentic/karaoke-poster.webp',
  },
] as const;

export function EventsMedia({ locale }: { locale: Locale }) {
  const text = (key: keyof typeof copy) => getLocalized(copy[key], locale);
  return (
    <section aria-labelledby="events-media-title" className="mt-8 sm:mt-12">
      <ScrollReveal>
        <h2
          id="events-media-title"
          className="font-serif text-xl sm:text-2xl text-[var(--palette-espresso)]"
        >
          {text('title')}
        </h2>
        <div className="mt-5 grid grid-cols-2 gap-4 sm:gap-8 max-w-2xl">
          {videos.map((video) => (
            <figure key={video.id}>
              <video
                controls
                playsInline
                preload="none"
                poster={video.poster}
                width={480}
                height={864}
                aria-label={text(video.id)}
                className="block w-full aspect-[5/9] rounded-2xl overflow-hidden object-contain bg-black shadow-md"
              >
                <source src={video.src} type="video/mp4" />
              </video>
              <figcaption className="mt-2.5 text-[11px] sm:text-xs text-[var(--palette-espresso)]/75">
                {text(video.id)}
              </figcaption>
            </figure>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
