import type { Locale } from "@/lib/i18n";

type ProjectCopy = {
  category: string;
  description: string;
  status: string;
  detailLabel: string;
};

export type ProjectStorySection = {
  key:
    | "context"
    | "challenge"
    | "objective"
    | "role"
    | "users"
    | "design"
    | "technical"
    | "challenges"
    | "learnings"
    | "nextSteps";
  copy: Record<Locale, { title: string; body: string }>;
};

export type Project = {
  number: string;
  slug: string;
  name: string;
  year: string;
  artwork: "documents" | "media";
  image?: {
    src: string;
    alt: Record<Locale, string>;
  };
  story?: ProjectStorySection[];
  copy: Record<Locale, ProjectCopy>;
};

export const projects: Project[] = [
  {
    number: "01",
    slug: "veyro",
    name: "Veyro",
    year: "2026",
    artwork: "documents",
    copy: {
      fr: {
        category: "Application de bureau",
        description:
          "Prototype autour d'une façon plus simple de gérer et parcourir des documents PDF.",
        status: "Prototype",
        detailLabel: "Gestion et navigation de documents PDF",
      },
      en: {
        category: "Desktop application",
        description:
          "A prototype exploring a simpler way to manage and navigate PDF documents.",
        status: "Prototype",
        detailLabel: "PDF document management and navigation",
      },
    },
  },
  {
    number: "02",
    slug: "mukuku-media-os",
    name: "Mukuku Media OS",
    year: "2026",
    artwork: "media",
    copy: {
      fr: {
        category: "Concept d'application web",
        description:
          "Concept de plateforme pour organiser des flux de travail média dans un espace numérique.",
        status: "Concept",
        detailLabel: "Concept de plateforme de workflows média",
      },
      en: {
        category: "Web application concept",
        description:
          "A platform concept for organizing media workflows in one digital workspace.",
        status: "Concept",
        detailLabel: "Media workflow platform concept",
      },
    },
  },
];
