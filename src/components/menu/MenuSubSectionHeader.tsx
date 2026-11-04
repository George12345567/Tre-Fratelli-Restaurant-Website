import type { LocalizedText } from '@/data/types';
import { getLocalized } from '@/data/types';
import type { Locale } from '@/i18n/routing';

interface MenuSubSectionHeaderProps {
  title: LocalizedText;
  subtitle: LocalizedText;
  badge?: LocalizedText;
  count: number;
  locale: Locale;
}

export function MenuSubSectionHeader({
  title,
  subtitle,
  badge,
  count,
  locale,
}: MenuSubSectionHeaderProps) {
  return (
    <div className="space-y-1 pt-4 pb-2 border-b border-[var(--palette-stone-beige)]/50">
      <div className="flex items-center justify-between gap-2.5">
        <div className="flex items-center gap-2">
          <span className="text-[var(--palette-aged-brass)] text-sm" aria-hidden="true">
            ✦
          </span>
          <h4 className="font-serif text-base sm:text-lg font-bold text-[var(--palette-espresso)]">
            {getLocalized(title, locale)}
          </h4>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {badge && (
            <span className="text-[10px] font-bold text-amber-900 bg-amber-100 border border-amber-300/60 px-2.5 py-0.5 rounded-full">
              {getLocalized(badge, locale)}
            </span>
          )}
          <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-stone-100 text-stone-600">
            {count} {locale === 'it' ? 'piatti' : locale === 'ar' ? 'أطباق' : 'dishes'}
          </span>
        </div>
      </div>

      {subtitle && (
        <p className="text-xs text-[var(--palette-espresso)]/70 italic font-serif">
          {getLocalized(subtitle, locale)}
        </p>
      )}
    </div>
  );
}
