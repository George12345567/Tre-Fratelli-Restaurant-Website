'use client';

import { useEffect } from 'react';
import { Info, X, ShieldAlert } from 'lucide-react';
import type { Locale } from '@/i18n/routing';

interface MenuAllergenLegendModalProps {
  isOpen: boolean;
  onClose: () => void;
  locale: Locale;
}

interface AllergenItem {
  id: number;
  it: string;
  en: string;
  ar: string;
}

const allergensList: AllergenItem[] = [
  { id: 1, it: 'Cereali contenenti glutine (grano, segale, orzo, farro)', en: 'Cereals containing gluten (wheat, rye, barley, spelt)', ar: 'الحبوب التي تحتوي على الغلوتين (قمح، شعير، شوفان)' },
  { id: 2, it: 'Crostacei e prodotti a base di crostacei', en: 'Crustaceans and crustacean products', ar: 'القشريات ومنتجاتها (روبيان، كركند، سلطعون)' },
  { id: 3, it: 'Uova e prodotti a base di uova', en: 'Eggs and egg products', ar: 'البيض ومنتجاته' },
  { id: 4, it: 'Pesce e prodotti a base di pesce', en: 'Fish and fish products', ar: 'الأسماك ومنتجاتها' },
  { id: 5, it: 'Arachidi e prodotti a base di arachidi', en: 'Peanuts and peanut products', ar: 'الفول السوداني ومنتجاته' },
  { id: 6, it: 'Soia e prodotti a base di soia', en: 'Soybeans and soy products', ar: 'فول الصويا ومنتجاته' },
  { id: 7, it: 'Latte e prodotti a base di latte (compreso lattosio)', en: 'Milk and milk products (including lactose)', ar: 'الحليب ومنتجات الألبان (بما فيها اللاكتوز)' },
  { id: 8, it: 'Frutta a guscio (mandorle, noci, pistacchi, nocciole)', en: 'Nuts (almonds, walnuts, pistachios, hazelnuts)', ar: 'المكسرات (لوز، جوز، فستق، بندق)' },
  { id: 9, it: 'Sedano e prodotti a base di sedano', en: 'Celery and celery products', ar: 'الكرفس ومنتجاته' },
  { id: 10, it: 'Senape e prodotti a base di senape', en: 'Mustard and mustard products', ar: 'الخردل ومنتجاته' },
  { id: 11, it: 'Semi di sesamo e prodotti a base di sesamo', en: 'Sesame seeds and sesame products', ar: 'بذور السمسم ومنتجاتها' },
  { id: 12, it: 'Anidride solforosa e solfiti (>10 mg/kg o 10 mg/l)', en: 'Sulphur dioxide and sulphites (>10 mg/kg or 10 mg/l)', ar: 'ثاني أكسيد الكبريت والكبريتيت' },
  { id: 13, it: 'Molluschi e prodotti a base di molluschi', en: 'Molluscs and mollusc products', ar: 'الرخويات ومنتجاتها (محار، بلح بحر، أخطبوط، حبار)' },
  { id: 14, it: 'Lupini e prodotti a base di lupini', en: 'Lupin and lupin products', ar: 'الترمس ومنتجاته' },
];

export function MenuAllergenLegendModal({
  isOpen,
  onClose,
  locale,
}: MenuAllergenLegendModalProps) {
  const isRtl = locale === 'ar';

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="allergen-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/75 backdrop-blur-sm animate-fade-in"
    >
      <div className="absolute inset-0 -z-10" onClick={onClose} aria-hidden="true" />

      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-stone-200 flex flex-col max-h-[88vh]"
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 bg-[var(--palette-warm-ivory)] border-b border-[var(--palette-stone-beige)]/60 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-800 flex items-center justify-center shrink-0">
              <ShieldAlert size={18} aria-hidden="true" />
            </div>
            <div>
              <h2 id="allergen-modal-title" className="font-serif text-base sm:text-lg font-bold text-[var(--palette-espresso)]">
                {locale === 'it' ? 'Tabella degli Allergeni Alimentari' : locale === 'ar' ? 'دليل مسببات الحساسية الغذائية' : 'Food Allergens Registry'}
              </h2>
              <p className="text-[11px] text-[var(--palette-espresso)]/65">
                {locale === 'it' ? 'Regolamento CEE 1169/2016 · D.L. n.109/1992' : locale === 'ar' ? 'وفقاً للائحة الأوروبية CEE 1169/2016' : 'EU Regulation 1169/2016 Compliant'}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full text-[var(--palette-espresso)]/70 hover:text-black hover:bg-black/5 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        {/* Notice Info banner */}
        <div className="px-5 sm:px-6 py-2.5 bg-amber-50/70 border-b border-amber-200/50 flex items-start gap-2.5 text-xs text-amber-950 shrink-0">
          <Info size={16} className="text-amber-800 shrink-0 mt-0.5" aria-hidden="true" />
          <p className="leading-relaxed">
            {locale === 'it'
              ? 'I numeri accanto a ciascun piatto nel nostro menù corrispondono agli allergeni elencati sotto. Per qualsiasi intolleranza grave, informa sempre il nostro personale di sala prima di ordinare.'
              : locale === 'ar'
              ? 'الأرقام الموضحة بجانب كل طبق في القائمة تطابق مسببات الحساسية أدناه. في حال وجود أي حساسية غذائية حرجة، يُرجى إبلاغ طاقم الخدمة دائماً.'
              : 'The numbers alongside each dish on our menu refer to the allergen index below. For any severe allergy or intolerance, please inform our service team before ordering.'}
          </p>
        </div>

        {/* Scrollable List of 14 Allergens */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-2.5 divide-y divide-stone-100">
          {allergensList.map((item) => (
            <div key={item.id} className="pt-2.5 first:pt-0 flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-[var(--palette-italian-red)] text-white text-xs font-bold flex items-center justify-center shrink-0 font-mono shadow-2xs">
                {item.id}
              </span>
              <div className="text-xs sm:text-sm text-[var(--palette-espresso)] font-medium leading-snug">
                {locale === 'it' ? item.it : locale === 'ar' ? item.ar : item.en}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-5 sm:px-6 py-3 bg-stone-50 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500 shrink-0">
          <span>Coperto € 2,00 · Pane e servizio inclusi</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-full bg-[var(--palette-italian-red)] text-white font-semibold text-xs hover:bg-[var(--palette-italian-red-dark)] transition-colors cursor-pointer"
          >
            {locale === 'it' ? 'Ho Capito' : locale === 'ar' ? 'فهمت ذلك' : 'Got it'}
          </button>
        </div>
      </div>
    </div>
  );
}
