import { redirect } from 'next/navigation';
import { hasLocale } from 'next-intl';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function PizzeriaPage({ params }: PageProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  // The Pizzeria and Menu are now unified into one comprehensive experience
  redirect(`/${locale}/menu#pizzeria`);
}
