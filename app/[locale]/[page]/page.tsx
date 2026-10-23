import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { copy, isLocale, locales, type Locale } from "@/lib/i18n";
import {
  editorialPageSlugs,
  type EditorialPageSlug,
} from "@/lib/pages";
import { siteUrl } from "@/lib/site";

type PageSlug = EditorialPageSlug;

type LocalizedPage = {
  label: string;
  title: string;
  description: string;
  number: string;
};

type PageProps = {
  params: Promise<{ locale: string; page: string }>;
};

function isPageSlug(page: string): page is PageSlug {
  return editorialPageSlugs.some((slug) => slug === page);
}

function getPageContent(locale: Locale, page: PageSlug): LocalizedPage {
  const t = copy[locale];
  const content: Record<PageSlug, LocalizedPage> = {
    about: {
      label: t.about,
      title: t.aboutHeading,
      description: t.aboutText,
      number: t.aboutNumber,
    },
    expertise: {
      label: t.expertise,
      title: t.expertiseHeading,
      description: t.expertiseIntro,
      number: t.expertiseNumber,
    },
    services: {
      label: t.services,
      title: t.servicesHeading,
      description: t.servicesIntro,
      number: t.servicesNumber,
    },
    contact: {
      label: t.contactSection,
      title: t.contactHeading,
      description: t.contactIntro,
      number: t.contactNumber,
    },
  };

  return content[page];
}

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    editorialPageSlugs.map((page) => ({ locale, page })),
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, page } = await params;

  if (!isLocale(locale) || !isPageSlug(page)) {
    notFound();
  }

  const content = getPageContent(locale, page);
  const title = `${content.label} — Dimitri Mabom`;

  return {
    metadataBase: new URL(siteUrl),
    title,
    description: content.description,
    alternates: {
      canonical: `/${locale}/${page}`,
      languages: {
        fr: `/fr/${page}`,
        en: `/en/${page}`,
      },
    },
    openGraph: {
      title,
      description: content.description,
      url: `${siteUrl}/${locale}/${page}`,
      locale: locale === "fr" ? "fr_FR" : "en_US",
      type: "website",
    },
  };
}

export default function EditorialPage({ params }: PageProps) {
  return (
    <Suspense fallback={<EditorialPageFallback />}>
      <EditorialPageContent params={params} />
    </Suspense>
  );
}

async function EditorialPageContent({ params }: PageProps) {
  const { locale, page } = await params;

  if (!isLocale(locale) || !isPageSlug(page)) {
    notFound();
  }

  const t = copy[locale];
  const content = getPageContent(locale, page);

  return (
    <main>
      <SiteHeader locale={locale} languagePath={`/${page}`} />

      <article className={`editorial-page editorial-page--${page} container`}>
        <header className="editorial-page-heading">
          <p className="eyebrow">
            {content.number} <span aria-hidden="true">/</span> {content.label}
          </p>
          <h1>{content.title}</h1>
          <p className="editorial-page-intro">{content.description}</p>
        </header>

        {page === "about" && (
          <section className="editorial-page-content" aria-label={t.credibility}>
            <h2 className="eyebrow">{t.credibility}</h2>
            <ul className="editorial-proof-grid">
              {t.credibilityItems.map((item, index) => (
                <li key={item.title}>
                  <span className="editorial-card-number">
                    0{index + 1}
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
          </section>
        )}

        {page === "expertise" && (
          <div className="editorial-page-content editorial-page-content--split">
            <section aria-labelledby="expertise-groups-title">
              <h2 className="eyebrow" id="expertise-groups-title">
                {t.expertise}
              </h2>
              <div className="editorial-skill-grid">
                {t.expertiseGroups.map((group, index) => (
                  <article key={group.title}>
                    <span className="editorial-card-number">
                      0{index + 1}
                    </span>
                    <h3>{group.title}</h3>
                    <ul>
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>
            <section aria-labelledby="method-title">
              <h2 className="eyebrow" id="method-title">
                {t.method}
              </h2>
              <ol className="editorial-method-list">
                {t.methodSteps.map((step) => (
                  <li key={step.number}>
                    <span>{step.number}</span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          </div>
        )}

        {page === "services" && (
          <section
            className="editorial-page-content"
            aria-label={t.services}
          >
            <ol className="editorial-service-list">
              {t.serviceItems.map((service) => (
                <li key={service.number}>
                  <span className="editorial-card-number">{service.number}</span>
                  <div>
                    <h2>{service.title}</h2>
                    <p>{service.description}</p>
                  </div>
                </li>
              ))}
            </ol>
            <Link className="button button-primary editorial-page-cta" href={`/${locale}/contact`}>
              {t.servicesAction}
            </Link>
          </section>
        )}

        {page === "contact" && (
          <section className="editorial-page-content" aria-label={t.contactSection}>
            <ul className="editorial-contact-grid">
              <ContactCard
                href="mailto:dimitrymabom@gmail.com"
                label={t.email}
                detail="dimitrymabom@gmail.com"
              />
              <ContactCard
                href="https://www.linkedin.com/in/dimitri-mabom"
                label={t.linkedin}
                detail="dimitri-mabom"
                external
              />
              <ContactCard
                href="https://wa.me/237653450971"
                label={t.whatsapp}
                detail="+237 653 450 971"
                external
              />
              <ContactCard
                href="https://github.com/dimitrimabom"
                label={t.github}
                detail="dimitrimabom"
                external
              />
            </ul>
          </section>
        )}
      </article>

      <SiteFooter locale={locale} />
    </main>
  );
}

function EditorialPageFallback() {
  return (
    <main className="route-fallback container" aria-busy="true">
      <span className="route-fallback-line" aria-hidden="true" />
    </main>
  );
}

function ContactCard({
  href,
  label,
  detail,
  external = false,
}: {
  href: string;
  label: string;
  detail: string;
  external?: boolean;
}) {
  return (
    <li>
      <a
        className="contact-card editorial-contact-card"
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
      >
        <span className="contact-card-copy">
          <span className="contact-card-label">{label}</span>
          <span className="contact-card-detail">{detail}</span>
        </span>
        {external && <span className="contact-card-external">↗</span>}
      </a>
    </li>
  );
}
