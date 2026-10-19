
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import "../globals.css";

export const instant = false;

const locales = ["fr", "en"] as const;

type Locale = (typeof locales)[number];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}

function isLocale(locale: string): locale is Locale {
  return locales.some((supportedLocale) => supportedLocale === locale);
}
