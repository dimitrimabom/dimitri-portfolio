import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { projects } from "@/content/projects";
import { copy, isLocale, locales } from "@/lib/i18n";
import { siteUrl } from "@/lib/site";

type ProjectPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export const instant = false;

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    projects.map((project) => ({ locale, slug: project.slug })),
  );
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!isLocale(locale) || !project) {
    notFound();
  }

  const projectCopy = project.copy[locale];

  return {
    metadataBase: new URL(siteUrl),
    title: `${project.name} — ${projectCopy.category}`,
    description: projectCopy.description,
    alternates: {
      canonical: `/${locale}/projects/${project.slug}`,
      languages: {
        fr: `/fr/projects/${project.slug}`,
        en: `/en/projects/${project.slug}`,
      },
    },
    openGraph: {
      title: `${project.name} — ${projectCopy.category}`,
      description: projectCopy.description,
      url: `${siteUrl}/${locale}/projects/${project.slug}`,
      locale: locale === "fr" ? "fr_FR" : "en_US",
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { locale, slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!isLocale(locale) || !project) {
    notFound();
  }

  const t = copy[locale];
  const projectCopy = project.copy[locale];

  return (
    <main>
      <SiteHeader
        locale={locale}
        languagePath={`/projects/${project.slug}`}
      />

      <article className="project-detail container">
        <Link className="project-back-link" href={`/${locale}#work`}>
          {t.projectBack}
        </Link>

        <header className="project-detail-header">
          <p className="eyebrow">
            {project.number} <span aria-hidden="true">/</span>{" "}
            {projectCopy.category} <span aria-hidden="true">/</span>{" "}
            {project.year}
          </p>
          <h1>{project.name}</h1>
          <p className="project-detail-summary">{projectCopy.description}</p>
          <p className="project-detail-state">
            <span className="project-status-dot" aria-hidden="true" />
            <span>{t.projectStatusLabel}:</span> {projectCopy.status}
          </p>
        </header>

        {project.story && project.story.length > 0 && (
          <div className="project-story">
            {project.story.map((section) => (
              <section key={section.key}>
                <h2>{section.copy[locale].title}</h2>
                <p>{section.copy[locale].body}</p>
              </section>
            ))}
          </div>
        )}

        <a
          className="button button-primary project-detail-cta"
          href="mailto:dimitrymabom@gmail.com"
        >
          {t.projectContact}
        </a>
      </article>

      <SiteFooter locale={locale} />
    </main>
  );
}
