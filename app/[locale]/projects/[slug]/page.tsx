import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import { ProjectArtwork } from "@/components/ProjectCard";
import { projects } from "@/content/projects";
import { copy, isLocale, locales } from "@/lib/i18n";
import { siteUrl } from "@/lib/site";

type ProjectPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

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
      <header className="site-header container">
        <Link href={`/${locale}`} className="brand" aria-label={t.homeLabel}>
          Dimitri<span>.</span>
        </Link>
        <nav aria-label={t.navLabel} className="site-nav">
          <Link href={`/${locale}#work`}>{t.projectBack}</Link>
          <Link
            href={`/${locale === "fr" ? "en" : "fr"}/projects/${project.slug}`}
            className="language-link"
            aria-label={t.switchLanguage}
            hrefLang={locale === "fr" ? "en" : "fr"}
          >
            {t.switchLanguageShort}
          </Link>
        </nav>
      </header>

      <article className="project-detail container">
        <Link className="project-back-link" href={`/${locale}#work`}>
          <ArrowLeft size={15} aria-hidden="true" />
          {t.projectBack}
        </Link>

        <header className="project-detail-header">
          <p className="eyebrow">
            {project.number} <span aria-hidden="true">/</span>{" "}
            {projectCopy.category}
          </p>
          <h1>{project.name}</h1>
          <p className="project-detail-summary">{projectCopy.description}</p>
          <p className="project-detail-state">
            <span className="project-status-dot" aria-hidden="true" />
            <span>{t.projectStatusLabel}:</span> {projectCopy.status}
          </p>
        </header>

        <ProjectArtwork
          project={project}
          locale={locale}
          visualLabel={t.projectVisual}
        />

        <section className="project-detail-overview">
          <div>
            <p className="eyebrow">{t.projectOverview}</p>
            <h2>{projectCopy.category}</h2>
          </div>
          <p>{projectCopy.description}</p>
        </section>

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

        <a className="button button-primary project-detail-cta" href="mailto:dimitrymabom@gmail.com">
          {t.projectContact}
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </article>

      <footer className="site-footer container">
        <Link href={`/${locale}`} className="footer-brand">
          Dimitri<span>.</span>
        </Link>
        <span className="footer-copyright">© 2026 Dimitri Mabom</span>
      </footer>
    </main>
  );
}
