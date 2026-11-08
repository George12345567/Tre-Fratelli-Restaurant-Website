'use client';

import { useState, useRef, useEffect } from 'react';
import { usePathname, useRouter } from '@/i18n/navigation';
import { Languages, ChevronDown, Check } from 'lucide-react';
import type { Locale } from '@/i18n/routing';

interface LanguageDropdownProps {
  currentLocale: Locale;
  variant?: 'navbar' | 'mobile';
  onSelect?: () => void;
}

const languages: Array<{ code: Locale; label: string; native: string }> = [
  { code: 'ar', label: 'العربية', native: 'العربية' },
  { code: 'en', label: 'English', native: 'English' },
  { code: 'it', label: 'Italiano', native: 'Italiano' },
];

export function LanguageDropdown({
  currentLocale,
  variant = 'navbar',
  onSelect,
}: LanguageDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('pointerdown', handleOutsideClick);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('pointerdown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const selectLocale = (newLocale: Locale) => {
    setIsOpen(false);
    if (onSelect) onSelect();
    if (newLocale !== currentLocale) {
      router.replace(pathname, { locale: newLocale });
    }
  };

  const currentLang = languages.find((l) => l.code === currentLocale) || languages[1];

  return (
    <div
      ref={containerRef}
      className={`relative text-start ${variant === 'mobile' ? 'block w-full' : 'inline-block'}`}
    >
      {/* ── Liquid Glass Trigger Button ── */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        className={`group relative inline-flex items-center gap-1.5 px-2 py-1 rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)] ${
          variant === 'mobile'
            ? 'w-full justify-between bg-black/[0.04] hover:bg-black/[0.07] px-3 py-1.5 rounded-full text-xs font-semibold'
            : isOpen
            ? 'bg-black/[0.07] text-[var(--palette-espresso)]'
            : 'hover:bg-black/[0.04] text-[var(--palette-espresso)]/80 hover:text-[var(--palette-espresso)]'
        }`}
      >
        <div className="flex items-center gap-1.5">
          {/* Frosted icon container */}
          <div className="w-4.5 h-4.5 rounded-full bg-[var(--palette-italian-red)]/10 text-[var(--palette-italian-red)] flex items-center justify-center shrink-0">
            <Languages size={11} aria-hidden="true" />
          </div>
          <span className="text-[11px] sm:text-xs font-semibold tracking-wide">
            {currentLang.label}
          </span>
        </div>

        <ChevronDown
          size={12}
          className={`text-[var(--palette-espresso)]/50 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-[var(--palette-italian-red)]' : ''
          }`}
          aria-hidden="true"
        />
      </button>

      {/* ── Liquid Glass Floating Dropdown Menu ── */}
      {isOpen && (
        <div
          role="listbox"
          aria-label="Language selection"
          className={`absolute top-full mt-2 z-50 p-1.5 rounded-2xl transition-all duration-200 animate-fade-in ${
            variant === 'mobile'
              ? 'inset-x-0 w-full'
              : 'min-w-[145px] right-0 rtl:right-auto rtl:left-0'
          } liquid-glass-dropdown`}
        >
          {/* Subtle top specular glass glint */}
          <div
            className="absolute inset-x-4 top-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none rounded-full"
            aria-hidden="true"
          />

          <div className="space-y-1">
            {languages.map((item) => {
              const isSelected = item.code === currentLocale;

              return (
                <button
                  key={item.code}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => selectLocale(item.code)}
                  className={`w-full px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center justify-between transition-all duration-150 ${
                    isSelected
                      ? 'liquid-glass-pill text-[var(--palette-italian-red)] font-bold'
                      : 'text-[var(--palette-espresso)]/80 hover:bg-white/40 hover:text-[var(--palette-espresso)]'
                  }`}
                >
                  <span className="tracking-wide">{item.label}</span>
                  {isSelected && (
                    <Check
                      size={14}
                      className="text-[var(--palette-italian-red)] shrink-0 animate-scale-in"
                      aria-hidden="true"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
