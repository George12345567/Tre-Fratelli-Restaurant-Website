import Image from 'next/image';
import type { Locale } from '@/i18n/routing';
import { getLocalized, type LocalizedText } from '@/data/types';
import { ScrollReveal } from '@/components/motion/ScrollReveal';

const copy = {
  title: { it: 'Momenti veri, da noi.', en: 'Real moments, from our restaurant.', ar: 'لقطات حقيقية من عندنا.' },
  celebration: { it: 'Un compleanno festeggiato insieme da Tre Fratelli', en: 'A birthday celebration together at Tre Fratelli', ar: 'احتفال بعيد ميلاد في مطعم تري فراتيلي' },
  evening: { it: 'Una serata al ristorante', en: 'An evening at the restaurant', ar: 'من سهرات المطعم' },
  karaoke: { it: 'Musica e karaoke, dal vivo', en: 'Music and karaoke, in the moment', ar: 'من أجواء الغناء والكاراوكي' },
  family: { it: 'Le vostre feste, i vostri ricordi', en: 'Your celebrations, your memories', ar: 'مناسباتكم وذكرياتكم' },
  room: { it: 'La sala, pronta ad accogliervi', en: 'The dining room, ready to welcome you', ar: 'قاعة المطعم، جاهزة لاستقبالكم' },
} satisfies Record<string, LocalizedText>;

const videos = [
  { id: 'evening', src: '/video/events/restaurant-evening.mp4', poster: '/images/events/authentic/evening-poster.webp' },
  { id: 'karaoke', src: '/video/events/karaoke-night.mp4', poster: '/images/events/authentic/karaoke-poster.webp' },
] as const;

export function EventsMedia({ locale }: { locale: Locale }) {
  const text = (key: keyof typeof copy) => getLocalized(copy[key], locale);
  return (
    <div className="mt-8 sm:mt-12">
      <ScrollReveal image>
        <figure>
          <div className="relative aspect-[20/9] bg-[var(--palette-stone-beige)]/20">
            <Image src="/images/events/authentic/celebration.webp" alt={text('celebration')} fill sizes="(max-width: 1280px) 100vw, 1280px" preload className="object-contain" />
          </div>
          <figcaption className="mt-3 text-xs text-[var(--palette-espresso)]/65">{text('celebration')}</figcaption>
        </figure>
      </ScrollReveal>

      <section aria-labelledby="events-media-title" className="mt-8 sm:mt-10">
        <h2 id="events-media-title" className="font-serif text-xl sm:text-2xl text-[var(--palette-espresso)]">{text('title')}</h2>
        <div className="mt-5 grid grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6 items-start">
          {videos.map((video) => (
            <figure key={video.id} className="lg:col-span-3">
              <video
                controls
                playsInline
                preload="none"
                poster={video.poster}
                width={480}
                height={864}
                aria-label={text(video.id)}
                className="block w-full aspect-[5/9] object-contain bg-black"
              >
                <source src={video.src} type="video/mp4" />
              </video>
              <figcaption className="mt-2 text-[11px] sm:text-xs text-[var(--palette-espresso)]/70">{text(video.id)}</figcaption>
            </figure>
          ))}
          <div className="col-span-2 lg:col-span-6 grid grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6">
            {([
              { id: 'family', src: '/images/events/authentic/family-celebration.webp', aspect: 'aspect-[20/9]' },
              { id: 'room', src: '/images/events/authentic/dining-room.webp', aspect: 'aspect-[20/9]' },
            ] as const).map((photo) => (
              <figure key={photo.id}>
                <div className={`relative ${photo.aspect} overflow-hidden bg-[var(--palette-stone-beige)]/20`}>
                  <Image src={photo.src} alt={text(photo.id)} fill sizes="(max-width: 1024px) 50vw, 600px" className="object-contain" />
                </div>
                <figcaption className="mt-2 text-[11px] sm:text-xs text-[var(--palette-espresso)]/70">{text(photo.id)}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
