'use client';

import { useTranslations } from 'next-intl';
import { CheckCircle2 } from 'lucide-react';
import { format12h } from '@/lib/reservations/constants';

export interface VoucherDetails {
  referenceId: string;
  name: string;
  phone: string;
  email: string;
  date: string;
  formattedDate: string;
  time: string;
  guests: string;
  notes: string;
}

interface ReservationVoucherProps {
  details: VoucherDetails;
  onReset: () => void;
}

export function ReservationVoucher({ details, onReset }: ReservationVoucherProps) {
  const t = useTranslations();

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

      {/* Voucher Preview Card */}
      <div className="bg-gradient-to-br from-[var(--palette-warm-ivory)]/70 to-white p-5 sm:p-6 rounded-2xl border border-[var(--palette-aged-brass)]/40 max-w-md mx-auto text-start space-y-3 shadow-xs">
        <div className="flex items-center justify-between gap-2 pb-3 border-b border-black/5">
          <span className="font-serif text-xs font-bold uppercase tracking-wider text-[var(--palette-aged-brass)]">
            Tre Fratelli · Voucher
          </span>
          <span className="font-mono text-[11px] text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
            {t('location.form.statusPending')}
          </span>
        </div>

        {details.referenceId && (
          <div className="flex items-center justify-between text-[11px] text-stone-500 bg-stone-50/90 px-3 py-1.5 rounded-lg border border-stone-200/70">
            <span className="uppercase font-semibold">{t('location.form.referenceLabel')}</span>
            <strong className="font-mono text-[var(--palette-espresso)]">{details.referenceId}</strong>
          </div>
        )}

        <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm text-[var(--palette-espresso)]">
          <div>
            <span className="text-[10px] text-stone-500 uppercase block font-semibold">
              {t('location.form.name')}
            </span>
            <strong className="block truncate">{details.name}</strong>
          </div>

          <div>
            <span className="text-[10px] text-stone-500 uppercase block font-semibold">
              {t('location.form.phone')}
            </span>
            <strong className="block font-mono text-[var(--palette-italian-red)] truncate" dir="ltr">
              {details.phone}
            </strong>
          </div>

          <div>
            <span className="text-[10px] text-stone-500 uppercase block font-semibold">
              {t('location.form.date')}
            </span>
            <strong className="block">{details.formattedDate} ({details.date})</strong>
          </div>

          <div>
            <span className="text-[10px] text-stone-500 uppercase block font-semibold">
              {t('location.form.time')} &amp; {t('location.form.guests')}
            </span>
            <strong className="block">
              {details.time} ({format12h(details.time)}) · {details.guests} {t('location.form.guestsUnit')}
            </strong>
          </div>
        </div>

        {details.email && (
          <div className="text-xs text-stone-600">
            <span className="text-[10px] uppercase font-semibold text-stone-400 block">
              {t('location.form.email')}:
            </span>
            <span>{details.email}</span>
          </div>
        )}

        {details.notes && (
          <div className="pt-2 border-t border-black/5 text-xs text-stone-600">
            <span className="text-[10px] uppercase font-semibold text-stone-400 block">
              {t('location.form.notes')}:
            </span>
            <p className="italic">{details.notes}</p>
          </div>
        )}
      </div>

      <button
        type="button"
        onClick={onReset}
        className="px-6 py-2.5 rounded-full bg-[var(--palette-espresso)] hover:bg-black text-white text-xs font-semibold shadow-xs transition-all cursor-pointer"
      >
        {t('location.form.newBooking')}
      </button>
    </div>
  );
}
