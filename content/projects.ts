import type { Locale } from "@/lib/i18n";

type ProjectCopy = {
  category: string;
  description: string;
  status: string;
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
  story?: ProjectStorySection[];
  copy: Record<Locale, ProjectCopy>;
};

export const projects: Project[] = [
  {
    number: "01",
    slug: "veyro",
    name: "Veyro",
    year: "2026",
    copy: {
      fr: {
        category: "Application de bureau",
        description:
          "Prototype de bureau consacré à l'organisation et à la navigation de documents PDF.",
        status: "Prototype",
      },
      en: {
        category: "Desktop application",
        description:
          "A desktop prototype focused on organizing and navigating PDF documents.",
        status: "Prototype",
      },
    },
  },
  {
    number: "02",
    slug: "mukuku-media-os",
    name: "Mukuku Media OS",
    year: "2026",
    copy: {
      fr: {
        category: "Concept d'application web",
        description:
          "Concept de plateforme pour organiser les étapes d'un workflow média dans un espace de travail numérique.",
        status: "Concept",
      },
      en: {
        category: "Web application concept",
        description:
          "A platform concept for organizing media workflow stages in one digital workspace.",
        status: "Concept",
      },
    },
  },
];
