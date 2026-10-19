import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  Mail,
  MessageCircle,
} from "lucide-react";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/content/projects";
import { copy, isLocale, locales, type Locale } from "@/lib/i18n";
import { siteUrl } from "@/lib/site";

type HomeProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: HomeProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const t = copy[locale];

  return {
    metadataBase: new URL(siteUrl),
    title: t.title,
    description: t.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        "x-default": "/fr",
        fr: "/fr",
        en: "/en",
      },
    },
    openGraph: {
      title: t.title,
      description: t.description,
      url: `${siteUrl}/${locale}`,
      locale: locale === "fr" ? "fr_FR" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary",
      title: t.title,
      description: t.description,
    },
  };
}

export default async function Home({ params }: HomeProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <Portfolio locale={locale} />;
}

function Portfolio({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <main>
      <header className="site-header container">
        <Link
          href={`/${locale}`}
          className="brand"
          aria-label={t.homeLabel}
        >
          Dimitri<span>.</span>
        </Link>

        <nav aria-label={t.navLabel} className="site-nav">
          <a href="#work">{t.workNav}</a>
          <a href="#about">{t.aboutNav}</a>
          <a href="#services">{t.servicesNav}</a>
          <a href="#contact">{t.contactNav}</a>
          <Link
            href={`/${locale === "fr" ? "en" : "fr"}`}
            className="language-link"
            aria-label={t.switchLanguage}
            hrefLang={locale === "fr" ? "en" : "fr"}
          >
            {t.switchLanguageShort}
          </Link>
        </nav>
      </header>

      <section className="hero container" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">{t.role}</p>
          <h1 id="hero-title">{t.intro}</h1>
          <p className="hero-description">{t.heroText}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">
              {t.contactAction}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a className="button button-secondary" href="#work">
              {t.work}
              <ArrowDownRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>

        <figure className="hero-mark" aria-label={t.markLabel}>
          <svg
            className="brand-symbol"
            viewBox="0 0 180 180"
            role="img"
            aria-hidden="true"
          >
            <path
              d="M90 15 156 53v74l-66 38-66-38V53l66-38Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="m24 53 66 38 66-38M90 91v74"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="m90 15 66 38-66 38-66-38 66-38Z"
              fill="var(--accent)"
            />
            <path
              d="m90 91 66-38v74l-66 38V91Z"
              fill="var(--accent)"
              fillOpacity=".36"
            />
          </svg>
          <span className="hero-mark-coordinate hero-mark-coordinate-top">
            01 — 04
          </span>
          <span className="hero-mark-coordinate hero-mark-coordinate-bottom">
            FRONTEND · DIGITAL
          </span>
          <figcaption>{t.markCaption}</figcaption>
        </figure>
      </section>

      <section
        className="credibility-section"
        aria-labelledby="credibility-title"
      >
        <div className="container credibility-layout">
          <p className="eyebrow" id="credibility-title">
            {t.credibilityNumber} <span aria-hidden="true">/</span>{" "}
            {t.credibility}
          </p>
          <ul className="credibility-list">
            {t.credibilityItems.map((item) => (
              <li key={item.title}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="about" className="page-section" aria-labelledby="about-title">
        <div className="container about-layout">
          <SectionHeading
            number={t.aboutNumber}
            label={t.about}
            title={t.aboutHeading}
            titleId="about-title"
          />
          <p className="about-copy">{t.aboutText}</p>
        </div>
      </section>

      <section
        id="expertise"
        className="page-section section-graphite"
        aria-labelledby="expertise-title"
      >
        <div className="container">
          <div className="section-intro">
            <SectionHeading
              number={t.expertiseNumber}
              label={t.expertise}
              title={t.expertiseHeading}
              titleId="expertise-title"
            />
            <p>{t.expertiseIntro}</p>
          </div>

          <div className="expertise-grid">
            {t.expertiseGroups.map((group) => (
              <article className="expertise-card" key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="page-section" aria-labelledby="work-title">
        <div className="container">
          <div className="section-intro">
            <SectionHeading
              number={t.projectsNumber}
              label={t.projects}
              title={t.projectsHeading}
              titleId="work-title"
            />
            <p>{t.projectsIntro}</p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard
                key={project.number}
                project={project}
                locale={locale}
                visualLabel={t.projectVisual}
                openProjectLabel={t.projectOpen}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        id="lab"
        className="page-section section-graphite"
        aria-labelledby="lab-title"
      >
        <div className="container">
          <div className="section-intro">
            <SectionHeading
              number={t.labNumber}
              label={t.lab}
              title={t.labHeading}
              titleId="lab-title"
            />
            <p>{t.labIntro}</p>
          </div>

          <div className="lab-grid">
            {t.labItems.map((item, index) => (
              <article className={`lab-card lab-card-${index + 1}`} key={item.number}>
                <div
                  className={`lab-visual lab-visual-${index + 1}`}
                  aria-hidden="true"
                >
                  {index === 0 && (
                    <span className="lab-type-specimen">Aa</span>
                  )}
                  {index === 1 && (
                    <span className="lab-grid-specimen">
                      <i />
                      <i />
                      <i />
                      <i />
                    </span>
                  )}
                  {index === 2 && (
                    <span className="lab-ui-specimen">
                      <i />
                      <i />
                      <i />
                    </span>
                  )}
                  <span className="lab-visual-index">{item.number}</span>
                </div>
                <div className="lab-caption">
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="method"
        className="page-section"
        aria-labelledby="method-title"
      >
        <div className="container">
          <div className="section-intro">
            <SectionHeading
              number={t.methodNumber}
              label={t.method}
              title={t.methodHeading}
              titleId="method-title"
            />
          </div>

          <ol className="method-grid">
            {t.methodSteps.map((step) => (
              <li className="method-card" key={step.number}>
                <span className="method-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="services"
        className="page-section section-graphite"
        aria-labelledby="services-title"
      >
        <div className="container">
          <div className="section-intro">
            <SectionHeading
              number={t.servicesNumber}
              label={t.services}
              title={t.servicesHeading}
              titleId="services-title"
            />
            <p>{t.servicesIntro}</p>
          </div>

          <ol className="services-grid">
            {t.serviceItems.map((service) => (
              <li className="service-card" key={service.number}>
                <span className="service-number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </li>
            ))}
          </ol>

          <a className="button button-primary service-cta" href="#contact">
            {t.servicesAction}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section
        id="contact"
        className="page-section section-graphite"
        aria-labelledby="contact-title"
      >
        <div className="container">
          <div className="section-intro contact-intro">
            <SectionHeading
              number={t.contactNumber}
              label={t.contactSection}
              title={t.contactHeading}
              titleId="contact-title"
            />
            <p>{t.contactIntro}</p>
          </div>

          <ul className="contact-grid">
            <ContactLink
              href="mailto:dimitrymabom@gmail.com"
              label={t.email}
              detail="dimitrymabom@gmail.com"
              icon={<Mail size={18} aria-hidden="true" />}
            />
            <ContactLink
              href="https://www.linkedin.com/in/dimitri-mabom"
              label={t.linkedin}
              detail="dimitri-mabom"
              icon={<span className="linkedin-mark" aria-hidden="true">in</span>}
              external
            />
            <ContactLink
              href="https://wa.me/237653450971"
              label={t.whatsapp}
              detail="+237 653 450 971"
              icon={<MessageCircle size={18} aria-hidden="true" />}
              external
            />
            <ContactLink
              href="https://github.com/dimitrimabom"
              label={t.github}
              detail="dimitrimabom"
              icon={<Code2 size={18} aria-hidden="true" />}
              external
            />
          </ul>
        </div>
      </section>

      <footer className="site-footer container">
        <Link href={`/${locale}`} className="footer-brand">
          Dimitri<span>.</span>
        </Link>
        <nav aria-label={t.footerNavigation} className="footer-nav">
          <a href="#work">{t.footerWork}</a>
          <a href="#about">{t.footerAbout}</a>
          <a href="#services">{t.footerServices}</a>
          <a href="#contact">{t.footerContact}</a>
          <a href="https://github.com/dimitrimabom" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
        </nav>
        <span className="footer-copyright">
          © 2026 Dimitri Mabom · {t.footer}
        </span>
      </footer>
    </main>
  );
}

function SectionHeading({
  number,
  label,
  title,
  titleId,
}: {
  number: string;
  label: string;
  title: string;
  titleId: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">
        {number} <span aria-hidden="true">/</span> {label}
      </p>
      <h2 id={titleId}>{title}</h2>
    </div>
  );
}

function ContactLink({
  href,
  label,
  detail,
  icon,
  external = false,
}: {
  href: string;
  label: string;
  detail: string;
  icon: ReactNode;
  external?: boolean;
}) {
  return (
    <li>
      <a
        className="contact-card"
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
      >
        {icon}
        <span className="contact-card-copy">
          <span className="contact-card-label">{label}</span>
          <span className="contact-card-detail">{detail}</span>
        </span>
        {external && <ArrowUpRight size={15} aria-hidden="true" />}
      </a>
    </li>
  );
}
