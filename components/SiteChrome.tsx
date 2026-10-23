import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { copy } from "@/lib/i18n";

export function SiteHeader({
  locale,
  languagePath = "",
}: {
  locale: Locale;
  languagePath?: string;
}) {
  const t = copy[locale];

  return (
    <header className="site-header container">
      <Link href={`/${locale}`} className="brand" aria-label={t.homeLabel}>
        <Image
          className="brand-mark"
          src="/favicon/android-chrome-192x192.png"
          alt=""
          width={44}
          height={44}
          priority
        />
        <span className="brand-lockup" aria-hidden="true">
          <span className="brand-name">
            DIMITRI <strong>MABOM</strong>
          </span>
          <span className="brand-role">FRONTEND DEVELOPER</span>
        </span>
      </Link>
      <nav aria-label={t.navLabel} className="site-nav">
        <Link href={`/${locale}#work`}>{t.workNav}</Link>
        <Link href={`/${locale}/about`}>{t.aboutNav}</Link>
        <Link href={`/${locale}/expertise`}>{t.expertiseNav}</Link>
        <Link href={`/${locale}/services`}>{t.servicesNav}</Link>
        <Link href={`/${locale}/contact`}>{t.contactNav}</Link>
        <Link
          href={`/${locale === "fr" ? "en" : "fr"}${languagePath}`}
          className="language-link"
          aria-label={t.switchLanguage}
          hrefLang={locale === "fr" ? "en" : "fr"}
        >
          {t.switchLanguageShort}
        </Link>
      </nav>
    </header>
  );
}

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <footer className="site-footer container">
      <Link href={`/${locale}`} className="footer-brand">
        Dimitri<span>.</span>
      </Link>
      <nav aria-label={t.footerNavigation} className="footer-nav">
        <Link href={`/${locale}#work`}>{t.footerWork}</Link>
        <Link href={`/${locale}/about`}>{t.footerAbout}</Link>
        <Link href={`/${locale}/expertise`}>{t.footerExpertise}</Link>
        <Link href={`/${locale}/services`}>{t.footerServices}</Link>
        <Link href={`/${locale}/contact`}>{t.footerContact}</Link>
        <a href="https://github.com/dimitrimabom" target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
      </nav>
      <span className="footer-copyright">
        © 2026 Dimitri Mabom · {t.footer}
      </span>
    </footer>
  );
}
