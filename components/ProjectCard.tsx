import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";
import type { Locale } from "@/lib/i18n";

export function ProjectCard({
  project,
  locale,
  visualLabel,
  openProjectLabel,
}: {
  project: Project;
  locale: Locale;
  visualLabel: string;
  openProjectLabel: string;
}) {
  const copy = project.copy[locale];

  return (
    <article className="project-card" aria-labelledby={`project-${project.number}`}>
      <ProjectArtwork
        project={project}
        locale={locale}
        visualLabel={visualLabel}
      />

      <div className="project-card-copy">
        <div className="project-card-heading">
          <div>
            <p className="project-category">
              {project.number} <span aria-hidden="true">/</span> {copy.category}
            </p>
            <h3 id={`project-${project.number}`}>{project.name}</h3>
          </div>
          <span className="project-year">{project.year}</span>
        </div>
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
      </div>
    </article>
  );
}

export function ProjectArtwork({
  project,
  locale,
  visualLabel,
}: {
  project: Project;
  locale: Locale;
  visualLabel: string;
}) {
  const copy = project.copy[locale];

  return (
    <div
      className={`project-artwork project-artwork--${project.artwork}`}
      role={project.image ? undefined : "img"}
      aria-label={project.image ? undefined : copy.detailLabel}
    >
      {project.image ? (
        <Image
          src={project.image.src}
          alt={project.image.alt[locale]}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
          className="project-artwork-photo"
        />
      ) : (
        <ProjectIllustration artwork={project.artwork} />
      )}
      {!project.image && (
        <span className="project-artwork-label">{visualLabel}</span>
      )}
    </div>
  );
}

function ProjectIllustration({ artwork }: { artwork: Project["artwork"] }) {
  if (artwork === "documents") {
    return (
      <div className="document-art" aria-hidden="true">
        <span className="document-sheet document-sheet-back" />
        <span className="document-sheet document-sheet-middle" />
        <span className="document-sheet document-sheet-front">
          <span />
          <span />
          <span />
          <span />
        </span>
        <span className="document-spark" />
      </div>
    );
  }

  return (
    <div className="media-art" aria-hidden="true">
      <span className="media-art-orbit" />
      <span className="media-art-tile media-art-tile-one" />
      <span className="media-art-tile media-art-tile-two" />
      <span className="media-art-tile media-art-tile-three" />
      <span className="media-art-tile media-art-tile-four" />
    </div>
  );
}
