import { redirect, notFound } from 'next/navigation';
import { hasLocale } from 'next-intl';
import { routing } from '@/i18n/routing';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function PizzeriaPage({ params }: PageProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  // Redirect directly to the dedicated Wood-Fired Pizza category page
  redirect(`/${locale}/menu/pizze`);
}
