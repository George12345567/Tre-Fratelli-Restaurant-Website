'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import {
  CalendarDays,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  Sparkles,
} from 'lucide-react';
import type { Locale } from '@/i18n/routing';

interface ReservationFormProps {
  locale: Locale;
}

type FormFields = {
  date: string;
  guests: string;
  time: string;
  name: string;
  phone: string;
  email: string;
  language: Locale;
  occasion: string;
  notes: string;
};

const guestOptions = ['1', '2', '3', '4', '5', '6', '7', '8', '10', '12+'];
const timeSlots = [
  '12:00',
  '12:30',
  '13:00',
  '13:30',
  '14:00',
  '14:30',
  '18:30',
  '19:00',
  '19:30',
  '20:00',
  '20:30',
  '21:00',
  '21:30',
  '22:00',
  '22:30',
];

export function ReservationForm({ locale }: ReservationFormProps) {
  const t = useTranslations();
  const isRtl = locale === 'ar';

  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [formData, setFormData] = useState<FormFields>(() => ({
    date: '',
    guests: '2',
    time: '20:00',
    name: '',
    phone: '',
    email: '',
    language: locale,
    occasion: 'none',
    notes: '',
  }));

  const updateField = (field: keyof FormFields, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrorMessage('');
  };

  const validateStep = (currentStep: number) => {
    if (currentStep === 0) {
      if (!formData.date) {
        setErrorMessage(t('location.form.validation'));
        return false;
      }
    } else if (currentStep === 1) {
      if (
        !formData.time ||
        !formData.name.trim() ||
        !formData.phone.trim() ||
        !formData.email.trim() ||
        !/^\S+@\S+\.\S+$/.test(formData.email)
      ) {
        setErrorMessage(t('location.form.validation'));
        return false;
      }
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => Math.min(prev + 1, 2));
    }
  };

  const handlePrev = () => {
    setErrorMessage('');
    setStep((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(step)) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-8 sm:p-12 border border-[var(--palette-stone-beige)]/50 shadow-md text-center space-y-6 animate-fade-in">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
          <CheckCircle2 size={36} aria-hidden="true" />
        </div>

        <div className="space-y-2">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--palette-espresso)]">
            {t('location.form.successTitle')}
          </h3>
          <p className="text-sm text-[var(--palette-espresso)]/80 max-w-md mx-auto leading-relaxed">
            {t('location.form.successMessage')}
          </p>
        </div>

        <div className="bg-[var(--palette-warm-ivory)] p-6 rounded-xl border border-[var(--palette-stone-beige)]/40 max-w-md mx-auto text-start space-y-2 text-xs sm:text-sm text-[var(--palette-espresso)]">
          <p>
            <strong>{t('location.form.name')}:</strong> {formData.name}
          </p>
          <p>
            <strong>{t('location.form.date')}:</strong> {formData.date} · {formData.time}
          </p>
          <p>
            <strong>{t('location.form.guests')}:</strong> {formData.guests}
          </p>
          {formData.notes && (
            <p className="pt-2 border-t border-[var(--palette-stone-beige)]/30 text-xs text-[var(--palette-espresso)]/70">
              <strong>{t('location.form.notes')}:</strong> {formData.notes}
            </p>
          )}
        </div>

        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setStep(0);
            setFormData({
              date: '',
              guests: '2',
              time: '20:00',
              name: '',
              phone: '',
              email: '',
              language: locale,
              occasion: 'none',
              notes: '',
            });
          }}
          className="px-6 py-2.5 rounded-full bg-[var(--palette-espresso)] text-white hover:bg-black text-xs font-semibold"
        >
          {t('location.form.newBooking')}
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-6 sm:p-10 border border-[var(--palette-stone-beige)]/50 shadow-sm space-y-8"
    >
      {/* ── Steps Progress Indicator ── */}
      <div className="flex items-center justify-between pb-6 border-b border-[var(--palette-stone-beige)]/30">
        {[0, 1, 2].map((s) => {
          const isCurrent = step === s;
          const isDone = step > s;
          const label =
            s === 0
              ? t('location.form.step1')
              : s === 1
              ? t('location.form.step2')
              : t('location.form.step3');

          return (
            <div key={s} className="flex-1 flex flex-col items-center text-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  isCurrent
                    ? 'bg-[var(--palette-italian-red)] text-white ring-4 ring-[var(--palette-italian-red)]/15'
                    : isDone
                    ? 'bg-emerald-600 text-white'
                    : 'bg-stone-100 text-stone-400'
                }`}
              >
                {isDone ? '✓' : s + 1}
              </div>
              <span className={`text-[11px] font-medium mt-1.5 hidden sm:block ${isCurrent ? 'text-[var(--palette-italian-red)] font-bold' : 'text-stone-500'}`}>
                {label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Error Alert */}
      {errorMessage && (
        <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
          <AlertCircle size={16} className="shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* ── Step 0: Date & Guests ── */}
      {step === 0 && (
        <div className="space-y-6 animate-fade-in">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[var(--palette-espresso)] mb-2">
              {t('location.form.date')} *
            </label>
            <div className="relative">
              <CalendarDays
                size={18}
                className={`absolute top-1/2 -translate-y-1/2 text-stone-400 ${
                  isRtl ? 'right-4' : 'left-4'
                }`}
              />
              <input
                type="date"
                required
                min={new Date().toISOString().split('T')[0]}
                value={formData.date}
                onChange={(e) => updateField('date', e.target.value)}
                className={`w-full py-3 rounded-xl border border-[var(--palette-stone-beige)] bg-[var(--palette-warm-ivory)]/30 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--palette-aged-brass)] ${
                  isRtl ? 'pr-11 pl-4' : 'pl-11 pr-4'
                }`}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[var(--palette-espresso)] mb-2">
              {t('location.form.guests')}
            </label>
            <div className="grid grid-cols-5 gap-2">
              {guestOptions.map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => updateField('guests', num)}
                  className={`py-2.5 rounded-lg text-sm font-semibold transition-all ${
                    formData.guests === num
                      ? 'bg-[var(--palette-italian-red)] text-white shadow'
                      : 'border border-[var(--palette-stone-beige)] hover:bg-black/5 text-[var(--palette-espresso)]'
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Step 1: Time & Contact Info ── */}
      {step === 1 && (
        <div className="space-y-6 animate-fade-in">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[var(--palette-espresso)] mb-2">
              {t('location.form.time')}
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => updateField('time', slot)}
                  className={`py-2 rounded-lg text-xs font-semibold transition-all ${
                    formData.time === slot
                      ? 'bg-[var(--palette-espresso)] text-white shadow'
                      : 'border border-[var(--palette-stone-beige)] hover:bg-black/5 text-[var(--palette-espresso)]'
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[var(--palette-espresso)] mb-1.5">
                {t('location.form.name')} *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => updateField('name', e.target.value)}
                placeholder="Marco Rossi"
                className="w-full py-2.5 px-3.5 rounded-xl border border-[var(--palette-stone-beige)] bg-[var(--palette-warm-ivory)]/30 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--palette-aged-brass)]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[var(--palette-espresso)] mb-1.5">
                {t('location.form.phone')} *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => updateField('phone', e.target.value)}
                placeholder="+39 340 1234567"
                className="w-full py-2.5 px-3.5 rounded-xl border border-[var(--palette-stone-beige)] bg-[var(--palette-warm-ivory)]/30 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--palette-aged-brass)]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[var(--palette-espresso)] mb-1.5">
              {t('location.form.email')} *
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => updateField('email', e.target.value)}
              placeholder="marco@example.com"
              className="w-full py-2.5 px-3.5 rounded-xl border border-[var(--palette-stone-beige)] bg-[var(--palette-warm-ivory)]/30 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--palette-aged-brass)]"
            />
          </div>
        </div>
      )}

      {/* ── Step 2: Preferences & Special Notes ── */}
      {step === 2 && (
        <div className="space-y-6 animate-fade-in">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[var(--palette-espresso)] mb-1.5">
              {t('location.form.occasion')}
            </label>
            <select
              value={formData.occasion}
              onChange={(e) => updateField('occasion', e.target.value)}
              className="w-full py-2.5 px-3.5 rounded-xl border border-[var(--palette-stone-beige)] bg-[var(--palette-warm-ivory)]/30 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--palette-aged-brass)]"
            >
              <option value="none">{t('location.form.occasionNone')}</option>
              <option value="birthday">{t('location.form.occasionBirthday')}</option>
              <option value="anniversary">{t('location.form.occasionAnniversary')}</option>
              <option value="business">{t('location.form.occasionBusiness')}</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[var(--palette-espresso)] mb-1.5">
              {t('location.form.language')}
            </label>
            <div className="flex gap-2">
              {(['it', 'en', 'ar'] as Locale[]).map((lng) => (
                <button
                  key={lng}
                  type="button"
                  onClick={() => updateField('language', lng)}
                  className={`flex-1 py-2 rounded-lg text-xs font-semibold transition-all ${
                    formData.language === lng
                      ? 'bg-[var(--palette-espresso)] text-white'
                      : 'border border-[var(--palette-stone-beige)]'
                  }`}
                >
                  {lng === 'it' ? 'Italiano' : lng === 'en' ? 'English' : 'العربية'}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[var(--palette-espresso)] mb-1.5">
              {t('location.form.notes')}
            </label>
            <textarea
              rows={3}
              value={formData.notes}
              onChange={(e) => updateField('notes', e.target.value)}
              placeholder="e.g. Quiet corner table, gluten allergy, specific wine request..."
              className="w-full py-2.5 px-3.5 rounded-xl border border-[var(--palette-stone-beige)] bg-[var(--palette-warm-ivory)]/30 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--palette-aged-brass)]"
            />
          </div>
        </div>
      )}

      {/* ── Navigation Buttons ── */}
      <div className="flex items-center justify-between pt-4 border-t border-[var(--palette-stone-beige)]/30">
        {step > 0 ? (
          <button
            type="button"
            onClick={handlePrev}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-[var(--palette-stone-beige)] hover:bg-black/5 text-xs font-semibold text-[var(--palette-espresso)] transition-all"
          >
            <ArrowLeft size={14} className={isRtl ? 'rotate-180' : ''} />
            <span>{t('location.form.prev')}</span>
          </button>
        ) : (
          <div />
        )}

        {step < 2 ? (
          <button
            type="button"
            onClick={handleNext}
            className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-[var(--palette-italian-red)] hover:bg-[var(--palette-italian-red-dark)] text-white text-xs font-semibold transition-all shadow"
          >
            <span>{t('location.form.next')}</span>
            <ArrowRight size={14} className={isRtl ? 'rotate-180' : ''} />
          </button>
        ) : (
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[var(--palette-italian-red)] hover:bg-[var(--palette-italian-red-dark)] text-white text-sm font-bold transition-all shadow-md"
          >
            <Sparkles size={16} />
            <span>{t('location.form.submit')}</span>
          </button>
        )}
      </div>
    </form>
  );
}
