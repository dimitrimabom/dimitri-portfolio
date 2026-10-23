import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectCard } from "@/components/ProjectCard";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
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
      <SiteHeader locale={locale} />

      <section className="hero container" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">{t.role}</p>
          <h1 id="hero-title">
            <span>{t.introLead}</span>
            <span className="hero-title-accent">{t.introAccent}</span>
            <span>{t.introEnd}</span>
          </h1>
          <p className="hero-description">{t.heroText}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">
              {t.contactAction}
            </a>
            <a className="button button-secondary" href="#work">
              {t.work}
            </a>
          </div>
        </div>
      </section>

      <section
        className="credibility-section section-paper"
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

      <section
        id="about"
        className="page-section section-paper"
        aria-labelledby="about-title"
      >
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

      <section
        id="work"
        className="page-section section-paper"
        aria-labelledby="work-title"
      >
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
                openProjectLabel={t.projectOpen}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        id="method"
        className="page-section section-graphite"
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
          </a>
        </div>
      </section>

      <section
        id="contact"
        className="page-section section-signal"
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
            />
            <ContactLink
              href="https://www.linkedin.com/in/dimitri-mabom"
              label={t.linkedin}
              detail="dimitri-mabom"
              external
            />
            <ContactLink
              href="https://wa.me/237653450971"
              label={t.whatsapp}
              detail="+237 653 450 971"
              external
            />
            <ContactLink
              href="https://github.com/dimitrimabom"
              label={t.github}
              detail="dimitrimabom"
              external
            />
          </ul>
        </div>
      </section>

      <SiteFooter locale={locale} />
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
        className="contact-card"
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
