import Link from "next/link";
import type { Project } from "@/content/projects";
import type { Locale } from "@/lib/i18n";

export function ProjectCard({
  project,
  locale,
  openProjectLabel,
}: {
  project: Project;
  locale: Locale;
  openProjectLabel: string;
}) {
  const copy = project.copy[locale];

  return (
    <article className="project-card" aria-labelledby={`project-${project.number}`}>
      <div className="project-card-heading">
        <p className="project-category">
          {project.number} <span aria-hidden="true">/</span> {copy.category}
        </p>
        <span className="project-year">{project.year}</span>
      </div>
      <h3 id={`project-${project.number}`}>{project.name}</h3>
      <p className="project-description">{copy.description}</p>
      <div className="project-card-meta">
        <span className="project-status">
          <span className="project-status-dot" aria-hidden="true" />
          {copy.status}
        </span>
        <Link
          className="project-link"
          href={`/${locale}/projects/${project.slug}`}
          aria-label={`${openProjectLabel}: ${project.name}`}
        >
          {openProjectLabel}
        </Link>
      </div>
    </article>
  );
}
