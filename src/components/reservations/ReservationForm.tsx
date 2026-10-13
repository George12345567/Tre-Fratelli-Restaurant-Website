'use client';

import { useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import {
  CalendarDays,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Users,
  Clock,
  Phone,
  Mail,
  User,
  Sun,
  Moon,
  Check,
} from 'lucide-react';
import type { Locale } from '@/i18n/routing';

interface ReservationFormProps {
  locale: Locale;
}

type FormFields = {
  date: string;
  guests: string;
  time: string;
  service: 'lunch' | 'dinner';
  name: string;
  phone: string;
  email: string;
  language: Locale;
  occasion: string;
  notes: string;
};

const guestPresets = ['1', '2', '3', '4', '5', '6', '7', '8+'];

const lunchSlots = ['12:00', '12:30', '13:00', '13:30', '14:00', '14:30'];
const dinnerSlots = [
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
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');

  // Default to tomorrow's date
  const tomorrowIso = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  }, []);

  const todayIso = useMemo(() => {
    return new Date().toISOString().split('T')[0];
  }, []);

  const [formData, setFormData] = useState<FormFields>(() => ({
    date: tomorrowIso,
    guests: '2',
    service: 'dinner',
    time: '20:30',
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
    if (field === 'phone') setPhoneError('');
    if (field === 'email') setEmailError('');
    if (field === 'name') setNameError('');
  };

  const selectService = (service: 'lunch' | 'dinner') => {
    const defaultTime = service === 'lunch' ? '13:00' : '20:30';
    setFormData((prev) => ({ ...prev, service, time: defaultTime }));
  };

  const formattedDate = useMemo(() => {
    if (!formData.date) return '';
    try {
      const [year, month, day] = formData.date.split('-').map(Number);
      const d = new Date(year, month - 1, day);
      return new Intl.DateTimeFormat(locale === 'ar' ? 'ar-EG' : locale === 'it' ? 'it-IT' : 'en-GB', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
      }).format(d);
    } catch {
      return formData.date;
    }
  }, [formData.date, locale]);

  const validateStep = (currentStep: number): boolean => {
    setErrorMessage('');
    if (currentStep === 0) {
      if (!formData.date) {
        setErrorMessage(t('location.form.validation'));
        return false;
      }
    } else if (currentStep === 1) {
      if (!formData.time) {
        setErrorMessage(t('location.form.validation'));
        return false;
      }
    } else if (currentStep === 2) {
      let valid = true;

      if (!formData.name.trim() || formData.name.trim().length < 2) {
        setNameError(t('location.form.validation'));
        valid = false;
      }

      // PHONE NUMBER IS STRICTLY MANDATORY
      const cleanedPhone = formData.phone.trim();
      const phoneDigits = cleanedPhone.replace(/\D/g, '');
      if (!cleanedPhone || phoneDigits.length < 8) {
        setPhoneError(t('location.form.phoneRequired'));
        valid = false;
      }

      if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email.trim())) {
        setEmailError(t('location.form.validation'));
        valid = false;
      }

      if (!valid) {
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
    setPhoneError('');
    setEmailError('');
    setNameError('');
    setStep((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(2)) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[var(--palette-stone-beige)]/60 shadow-xl text-center space-y-6 animate-fade-in">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-xs">
          <CheckCircle2 size={36} aria-hidden="true" />
        </div>

        <div className="space-y-2">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--palette-espresso)]">
            {t('location.form.successTitle')}
          </h3>
          <p className="text-xs sm:text-sm text-[var(--palette-espresso)]/80 max-w-md mx-auto leading-relaxed">
            {t('location.form.successMessage')}
          </p>
        </div>

        {/* Confirmed Reservation Voucher Card */}
        <div className="bg-gradient-to-br from-[var(--palette-warm-ivory)]/70 to-white p-5 sm:p-6 rounded-2xl border border-[var(--palette-aged-brass)]/40 max-w-md mx-auto text-start space-y-3 shadow-xs">
          <div className="flex items-center justify-between pb-3 border-b border-black/5">
            <span className="font-serif text-xs font-bold uppercase tracking-wider text-[var(--palette-aged-brass)]">
              Tre Fratelli · Voucher
            </span>
            <span className="font-mono text-[11px] text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              In Attesa di Conferma
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm text-[var(--palette-espresso)]">
            <div>
              <span className="text-[10px] text-stone-500 uppercase block font-semibold">
                {t('location.form.name')}
              </span>
              <strong className="block truncate">{formData.name}</strong>
            </div>

            <div>
              <span className="text-[10px] text-stone-500 uppercase block font-semibold">
                {t('location.form.phone')}
              </span>
              <strong className="block font-mono text-[var(--palette-italian-red)] truncate" dir="ltr">
                {formData.phone}
              </strong>
            </div>

            <div>
              <span className="text-[10px] text-stone-500 uppercase block font-semibold">
                {t('location.form.date')}
              </span>
              <strong className="block">{formattedDate} ({formData.date})</strong>
            </div>

            <div>
              <span className="text-[10px] text-stone-500 uppercase block font-semibold">
                {t('location.form.time')} &amp; {t('location.form.guests')}
              </span>
              <strong className="block">
                {formData.time} · {formData.guests} {locale === 'it' ? 'Ospiti' : locale === 'ar' ? 'ضيوف' : 'Guests'}
              </strong>
            </div>
          </div>

          {formData.notes && (
            <div className="pt-2 border-t border-black/5 text-xs text-stone-600">
              <span className="text-[10px] uppercase font-semibold text-stone-400 block">
                {t('location.form.notes')}:
              </span>
              <p className="italic">{formData.notes}</p>
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setStep(0);
            setFormData({
              date: tomorrowIso,
              guests: '2',
              service: 'dinner',
              time: '20:30',
              name: '',
              phone: '',
              email: '',
              language: locale,
              occasion: 'none',
              notes: '',
            });
          }}
          className="px-6 py-2.5 rounded-full bg-[var(--palette-espresso)] hover:bg-black text-white text-xs font-semibold shadow-xs transition-all cursor-pointer"
        >
          {t('location.form.newBooking')}
        </button>
      </div>
    );
  }

  const stepLabels = [
    t('location.form.step1'),
    t('location.form.step2'),
    t('location.form.step3'),
  ];

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white/95 rounded-3xl p-5 sm:p-8 md:p-10 border border-[var(--palette-stone-beige)]/60 shadow-lg space-y-6 sm:space-y-8 backdrop-blur-sm"
    >
      {/* ── Stepper Indicator ── */}
      <div className="space-y-3 pb-5 border-b border-[var(--palette-stone-beige)]/40">
        <div className="flex items-center justify-between">
          {[0, 1, 2].map((s) => {
            const isCurrent = step === s;
            const isDone = step > s;

            return (
              <div key={s} className="flex-1 flex flex-col items-center">
                <button
                  type="button"
                  onClick={() => {
                    if (isDone) setStep(s);
                  }}
                  disabled={!isDone}
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold transition-all ${
                    isCurrent
                      ? 'bg-[var(--palette-italian-red)] text-white shadow-md ring-4 ring-[var(--palette-italian-red)]/20 scale-105'
                      : isDone
                      ? 'bg-emerald-600 text-white cursor-pointer hover:bg-emerald-700'
                      : 'bg-stone-100 text-stone-400 cursor-not-allowed'
                  }`}
                  aria-label={stepLabels[s]}
                >
                  {isDone ? <Check size={16} aria-hidden="true" /> : s + 1}
                </button>
                <span
                  className={`text-[11px] sm:text-xs font-semibold mt-2 text-center leading-tight transition-colors ${
                    isCurrent
                      ? 'text-[var(--palette-italian-red)] font-bold'
                      : isDone
                      ? 'text-stone-700'
                      : 'text-stone-400'
                  }`}
                >
                  {stepLabels[s]}
                </span>
              </div>
            );
          })}
        </div>

        {/* Mobile Step Count Bar */}
        <div className="h-1.5 w-full bg-stone-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[var(--palette-italian-red)] to-[var(--palette-aged-brass)] transition-all duration-300"
            style={{ width: `${((step + 1) / 3) * 100}%` }}
          />
        </div>
      </div>

      {/* General Error Alert */}
      {errorMessage && (
        <div className="p-3.5 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2.5 animate-shake">
          <AlertCircle size={16} className="shrink-0" />
          <span className="font-medium">{errorMessage}</span>
        </div>
      )}

      {/* ── STEP 0: Data e Numero Ospiti (Date & Guests) ── */}
      {step === 0 && (
        <div className="space-y-6 animate-fade-in">
          {/* Party Size / Guests Selector */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-[var(--palette-espresso)] flex items-center gap-1.5">
                <Users size={14} className="text-[var(--palette-italian-red)]" />
                <span>{t('location.form.guests')} *</span>
              </label>
              <span className="text-xs font-semibold text-[var(--palette-italian-red)] font-mono">
                {formData.guests} {locale === 'it' ? 'Ospiti' : locale === 'ar' ? 'أشخاص' : 'Guests'}
              </span>
            </div>

            <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
              {guestPresets.map((preset) => {
                const isSelected = formData.guests === preset;
                return (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => updateField('guests', preset)}
                    className={`py-3 sm:py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer flex flex-col items-center justify-center gap-0.5 active:scale-95 ${
                      isSelected
                        ? 'bg-[var(--palette-italian-red)] text-white shadow-md ring-2 ring-[var(--palette-italian-red)]/30'
                        : 'bg-stone-50 hover:bg-stone-100 text-[var(--palette-espresso)] border border-stone-200/70 hover:border-stone-300'
                    }`}
                  >
                    <span>{preset}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Date Selector with Fast Shortcuts */}
          <div className="space-y-2.5 pt-2 border-t border-stone-100">
            <label className="text-xs font-bold uppercase tracking-wider text-[var(--palette-espresso)] flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <CalendarDays size={14} className="text-[var(--palette-italian-red)]" />
                <span>{t('location.form.date')} *</span>
              </span>
              {formattedDate && (
                <span className="text-xs font-semibold text-[var(--palette-aged-brass)] font-sans">
                  {formattedDate}
                </span>
              )}
            </label>

            {/* Quick-Pick Date Pills */}
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => updateField('date', todayIso)}
                className={`py-1.5 px-3 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  formData.date === todayIso
                    ? 'bg-[var(--palette-espresso)] text-white shadow-xs'
                    : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                }`}
              >
                {t('location.form.today')}
              </button>
              <button
                type="button"
                onClick={() => updateField('date', tomorrowIso)}
                className={`py-1.5 px-3 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  formData.date === tomorrowIso
                    ? 'bg-[var(--palette-espresso)] text-white shadow-xs'
                    : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                }`}
              >
                {t('location.form.tomorrow')}
              </button>
            </div>

            {/* Native Calendar Input */}
            <div className="relative">
              <CalendarDays
                size={18}
                className={`absolute top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none ${
                  isRtl ? 'right-4' : 'left-4'
                }`}
              />
              <input
                type="date"
                required
                min={todayIso}
                value={formData.date}
                onChange={(e) => updateField('date', e.target.value)}
                className={`w-full py-3.5 rounded-xl border border-stone-300 bg-stone-50/60 text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--palette-aged-brass)] transition-all ${
                  isRtl ? 'pr-11 pl-4' : 'pl-11 pr-4'
                }`}
              />
            </div>
          </div>
        </div>
      )}

      {/* ── STEP 1: Orario e Servizio (Time Slots & Service) ── */}
      {step === 1 && (
        <div className="space-y-6 animate-fade-in">
          {/* Lunch vs Dinner Service Switcher */}
          <div className="p-1 bg-stone-100 rounded-2xl flex gap-1 border border-stone-200/60">
            <button
              type="button"
              onClick={() => selectService('lunch')}
              className={`flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                formData.service === 'lunch'
                  ? 'bg-white text-[var(--palette-espresso)] shadow-xs'
                  : 'text-stone-500 hover:text-stone-800'
              }`}
            >
              <Sun size={15} className="text-amber-600" />
              <span>{t('location.form.lunch')}</span>
            </button>

            <button
              type="button"
              onClick={() => selectService('dinner')}
              className={`flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                formData.service === 'dinner'
                  ? 'bg-white text-[var(--palette-italian-red)] shadow-xs'
                  : 'text-stone-500 hover:text-stone-800'
              }`}
            >
              <Moon size={15} className="text-indigo-600" />
              <span>{t('location.form.dinner')}</span>
            </button>
          </div>

          {/* Time Slot Chips Grid */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold text-stone-500">
              <span className="flex items-center gap-1">
                <Clock size={13} className="text-[var(--palette-aged-brass)]" />
                <span>{t('location.form.time')}</span>
              </span>
              <span className="text-[var(--palette-italian-red)] font-bold font-mono text-sm">
                {formData.time}
              </span>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
              {(formData.service === 'lunch' ? lunchSlots : dinnerSlots).map((slot) => {
                const isSelected = formData.time === slot;
                return (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => updateField('time', slot)}
                    className={`py-3 rounded-xl text-xs font-bold transition-all cursor-pointer font-mono active:scale-95 ${
                      isSelected
                        ? 'bg-[var(--palette-italian-red)] text-white shadow-md ring-2 ring-[var(--palette-italian-red)]/30'
                        : 'bg-stone-50 hover:bg-stone-100 text-[var(--palette-espresso)] border border-stone-200/80 hover:border-stone-300'
                    }`}
                  >
                    {slot}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Table & Date Preview Ticket */}
          <div className="p-3.5 rounded-2xl bg-[var(--palette-warm-ivory)]/60 border border-[var(--palette-aged-brass)]/30 flex items-center justify-between text-xs text-[var(--palette-espresso)]">
            <div className="flex items-center gap-2">
              <Users size={15} className="text-[var(--palette-italian-red)] shrink-0" />
              <span>
                <strong>{formData.guests}</strong> {locale === 'it' ? 'Ospiti' : locale === 'ar' ? 'ضيوف' : 'Guests'}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarDays size={15} className="text-[var(--palette-aged-brass)] shrink-0" />
              <span>{formattedDate}</span>
            </div>
          </div>
        </div>
      )}

      {/* ── STEP 2: Dati di Contatto & Preferenze (Guest Details) ── */}
      {step === 2 && (
        <div className="space-y-5 animate-fade-in">
          {/* Summary Banner */}
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/70 text-xs space-y-1.5">
            <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--palette-aged-brass)] block">
              {t('location.form.summaryTitle')}
            </span>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-semibold text-[var(--palette-espresso)]">
              <span>👥 {formData.guests} {locale === 'it' ? 'Ospiti' : locale === 'ar' ? 'ضيوف' : 'Guests'}</span>
              <span>📅 {formattedDate}</span>
              <span>⏰ {formData.time} ({formData.service === 'lunch' ? t('location.form.lunch') : t('location.form.dinner')})</span>
            </div>
          </div>

          {/* Full Name */}
          <div className="space-y-1">
            <label className="text-xs font-bold uppercase tracking-wider text-[var(--palette-espresso)] flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <User size={13} className="text-[var(--palette-italian-red)]" />
                <span>{t('location.form.name')} *</span>
              </span>
              <span className="text-[10px] text-red-600 font-semibold">{t('location.form.requiredTag')}</span>
            </label>
            <input
              type="text"
              required
              autoComplete="name"
              value={formData.name}
              onChange={(e) => updateField('name', e.target.value)}
              placeholder="e.g. Marco Rossi"
              className={`w-full py-3 px-3.5 rounded-xl border text-sm font-medium focus:bg-white focus:outline-none transition-all ${
                nameError
                  ? 'border-red-500 bg-red-50/50 ring-2 ring-red-200'
                  : 'border-stone-300 bg-stone-50/60 focus:ring-2 focus:ring-[var(--palette-aged-brass)]'
              }`}
            />
            {nameError && <p className="text-[11px] text-red-600 font-medium">{nameError}</p>}
          </div>

          {/* PHONE NUMBER — MANDATORY (مطلوب إجباري) */}
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-[var(--palette-espresso)] flex items-center gap-1.5">
                <Phone size={13} className="text-[var(--palette-italian-red)]" />
                <span>{t('location.form.phone')} *</span>
              </label>
              <span className="inline-flex items-center gap-1 text-[10px] text-white bg-[var(--palette-italian-red)] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                {t('location.form.requiredTag')}
              </span>
            </div>

            <div className="relative">
              <input
                type="tel"
                required
                inputMode="tel"
                autoComplete="tel"
                value={formData.phone}
                onChange={(e) => updateField('phone', e.target.value)}
                placeholder="+39 340 1234567"
                className={`w-full py-3 px-3.5 rounded-xl border text-sm font-mono font-medium focus:bg-white focus:outline-none transition-all ${
                  phoneError
                    ? 'border-red-500 bg-red-50/60 ring-2 ring-red-300'
                    : 'border-stone-300 bg-stone-50/60 focus:ring-2 focus:ring-[var(--palette-aged-brass)]'
                }`}
                dir="ltr"
              />
            </div>
            {phoneError ? (
              <p className="text-[11px] text-red-600 font-bold flex items-center gap-1 mt-0.5">
                <AlertCircle size={12} className="shrink-0" />
                <span>{phoneError}</span>
              </p>
            ) : (
              <p className="text-[10px] text-stone-500">
                {t('location.form.phoneHelp')}
              </p>
            )}
          </div>

          {/* Email Address */}
          <div className="space-y-1">
            <label className="text-xs font-bold uppercase tracking-wider text-[var(--palette-espresso)] flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Mail size={13} className="text-[var(--palette-italian-red)]" />
                <span>{t('location.form.email')} *</span>
              </span>
              <span className="text-[10px] text-red-600 font-semibold">{t('location.form.requiredTag')}</span>
            </label>
            <input
              type="email"
              required
              inputMode="email"
              autoComplete="email"
              value={formData.email}
              onChange={(e) => updateField('email', e.target.value)}
              placeholder="marco@example.com"
              className={`w-full py-3 px-3.5 rounded-xl border text-sm font-medium focus:bg-white focus:outline-none transition-all ${
                emailError
                  ? 'border-red-500 bg-red-50/50 ring-2 ring-red-200'
                  : 'border-stone-300 bg-stone-50/60 focus:ring-2 focus:ring-[var(--palette-aged-brass)]'
              }`}
            />
            {emailError && <p className="text-[11px] text-red-600 font-medium">{emailError}</p>}
          </div>

          {/* Special Occasion & Special Notes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[var(--palette-espresso)] mb-1">
                {t('location.form.occasion')}
              </label>
              <select
                value={formData.occasion}
                onChange={(e) => updateField('occasion', e.target.value)}
                className="w-full py-2.5 px-3 rounded-xl border border-stone-300 bg-stone-50/60 text-xs font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--palette-aged-brass)]"
              >
                <option value="none">{t('location.form.occasionNone')}</option>
                <option value="birthday">{t('location.form.occasionBirthday')}</option>
                <option value="anniversary">{t('location.form.occasionAnniversary')}</option>
                <option value="business">{t('location.form.occasionBusiness')}</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[var(--palette-espresso)] mb-1">
                {t('location.form.language')}
              </label>
              <select
                value={formData.language}
                onChange={(e) => updateField('language', e.target.value as Locale)}
                className="w-full py-2.5 px-3 rounded-xl border border-stone-300 bg-stone-50/60 text-xs font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--palette-aged-brass)]"
              >
                <option value="it">Italiano</option>
                <option value="en">English</option>
                <option value="ar">العربية</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[var(--palette-espresso)] mb-1">
              {t('location.form.notes')}
            </label>
            <textarea
              rows={2}
              value={formData.notes}
              onChange={(e) => updateField('notes', e.target.value)}
              placeholder="e.g. Quiet corner table, allergy to shellfish, anniversary..."
              className="w-full py-2.5 px-3 rounded-xl border border-stone-300 bg-stone-50/60 text-xs font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--palette-aged-brass)]"
            />
          </div>
        </div>
      )}

      {/* ── Navigation Actions (Next / Prev / Submit) ── */}
      <div className="flex items-center justify-between pt-4 border-t border-[var(--palette-stone-beige)]/40 gap-3">
        {step > 0 ? (
          <button
            type="button"
            onClick={handlePrev}
            className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full border border-stone-300 hover:bg-stone-100 text-xs font-bold text-[var(--palette-espresso)] transition-all cursor-pointer active:scale-95"
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
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[var(--palette-italian-red)] hover:bg-[var(--palette-italian-red-dark)] text-white text-xs sm:text-sm font-bold transition-all shadow-md active:scale-95 cursor-pointer"
          >
            <span>{t('location.form.next')}</span>
            <ArrowRight size={14} className={isRtl ? 'rotate-180' : ''} />
          </button>
        ) : (
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[var(--palette-italian-red)] to-[var(--palette-italian-red-dark)] hover:brightness-105 text-white text-xs sm:text-sm font-bold transition-all shadow-lg active:scale-95 cursor-pointer border border-white/20"
          >
            <Sparkles size={16} />
            <span>{t('location.form.submit')}</span>
          </button>
        )}
      </div>
    </form>
  );
}
