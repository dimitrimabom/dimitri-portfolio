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
import { Suspense } from "react";
import { projects } from "@/content/projects";

const locales = ["fr", "en"] as const;
type Locale = (typeof locales)[number];

const copy = {
  fr: {
    title: "Dimitri Mabom — Développeur frontend indépendant",
    description:
      "Portfolio de Dimitri Mabom : projets numériques, démarche de conception et explorations frontend.",
    role: "Développeur frontend indépendant",
    intro: "Des interfaces claires, pensées jusque dans le détail.",
    descriptionText:
      "Je m'appelle Dimitri. Je transforme des idées de produits en expériences numériques lisibles, utiles et soignées.",
    work: "Parcourir les projets",
    contact: "Parlons de votre projet",
    selected: "Projets choisis",
    heading: "Des idées prennent forme.",
    subheading:
      "Prototypes et pistes de réflexion autour de produits numériques. Chaque projet commence par une question à résoudre.",
    imageNote: "Image d'ambiance",
    portrait: "Portrait à ajouter",
    portraitCaption: "Un visage à mettre sur les idées.",
    portraitNote: "Photo de Dimitri à ajouter",
    visualNotes: "Notes visuelles",
    visualHeading: "Images, idées, premières pistes.",
    visualText:
      "Un aperçu du terrain de jeu : les références visuelles, les essais et les écrans qui donnent forme aux projets.",
    visualReference: "Référence visuelle — pas une capture du produit",
    processCardTitle: "Le processus, en mouvement",
    processCardText: "Croquis et étapes de conception à ajouter",
    about: "Ma démarche",
    aboutHeading: "Du besoin à l'interface.",
    aboutText:
      "Je m'intéresse à la rencontre entre le design, la technologie et les usages. Mon fil conducteur : rendre les produits plus simples à comprendre et agréables à utiliser.",
    steps: [
      {
        number: "01",
        title: "Comprendre",
        description:
          "Partir du besoin et de la manière dont le produit sera réellement utilisé.",
      },
      {
        number: "02",
        title: "Clarifier",
        description:
          "Organiser l'information pour rendre chaque interface évidente à parcourir.",
      },
      {
        number: "03",
        title: "Peaufiner",
        description:
          "Soigner les détails qui rendent l'expérience cohérente et agréable.",
      },
    ],
    contactTitle: "Une idée à construire ?",
    contactText:
      "Je suis ouvert aux échanges autour du développement frontend et des produits numériques.",
    contactMethods: "Choisis ton moyen de contact",
    emailLabel: "E-mail",
    linkedinLabel: "LinkedIn",
    whatsappLabel: "WhatsApp",
    github: "Me contacter sur GitHub",
    footer: "Conçu avec intention.",
    homeLabel: "Dimitri Mabom, accueil",
    workNav: "Projets",
    aboutNav: "Démarche",
    switchLanguage: "Switch to English",
  },
  en: {
    title: "Dimitri Mabom — Independent Frontend Developer",
    description:
      "The portfolio of Dimitri Mabom: digital projects, design approach, and frontend explorations.",
    role: "Independent frontend developer",
    intro: "Clear interfaces, considered down to the detail.",
    descriptionText:
      "I'm Dimitri. I turn product ideas into digital experiences that feel clear, useful, and considered.",
    work: "Explore selected work",
    contact: "Let's talk about your project",
    selected: "Selected projects",
    heading: "Ideas taking shape.",
    subheading:
      "Prototypes and explorations in digital products. Every project starts with a question worth solving.",
    imageNote: "Visual reference",
    portrait: "Portrait to come",
    portraitCaption: "A face behind the ideas.",
    portraitNote: "Add Dimitri's photo",
    visualNotes: "Visual notes",
    visualHeading: "Images, ideas, first explorations.",
    visualText:
      "A glimpse into the process: visual references, experiments, and screens that bring each project to life.",
    visualReference: "Visual reference — not a product screenshot",
    processCardTitle: "The process, in progress",
    processCardText: "Add sketches and design explorations",
    about: "My approach",
    aboutHeading: "From needs to interface.",
    aboutText:
      "I'm interested in the intersection of design, technology, and real-world use. My guiding principle is to make products easier to understand and enjoyable to use.",
    steps: [
      {
        number: "01",
        title: "Understand",
        description:
          "Start with the need and how the product will actually be used.",
      },
      {
        number: "02",
        title: "Clarify",
        description:
          "Organize information so every interface feels easy to navigate.",
      },
      {
        number: "03",
        title: "Refine",
        description:
          "Pay attention to the details that make an experience feel coherent.",
      },
    ],
    contactTitle: "Have an idea to build?",
    contactText:
      "Open to conversations about frontend development and digital products.",
    contactMethods: "Choose how to get in touch",
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
    whatsappLabel: "WhatsApp",
    github: "Get in touch on GitHub",
    footer: "Built with intention.",
    homeLabel: "Dimitri Mabom, home",
    workNav: "Work",
    aboutNav: "Approach",
    switchLanguage: "Passer en français",
  },
} satisfies Record<
  Locale,
  {
    title: string;
    description: string;
    role: string;
    intro: string;
    descriptionText: string;
    work: string;
    contact: string;
    selected: string;
    heading: string;
    subheading: string;
    imageNote: string;
    portrait: string;
    portraitCaption: string;
    portraitNote: string;
    visualNotes: string;
    visualHeading: string;
    visualText: string;
    visualReference: string;
    processCardTitle: string;
    processCardText: string;
    about: string;
    aboutHeading: string;
    aboutText: string;
    steps: { number: string; title: string; description: string }[];
    contactTitle: string;
    contactText: string;
    contactMethods: string;
    emailLabel: string;
    linkedinLabel: string;
    whatsappLabel: string;
    github: string;
    footer: string;
    homeLabel: string;
    workNav: string;
    aboutNav: string;
    switchLanguage: string;
  }
>;

type HomeProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: HomeProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const t = copy[locale];

  return {
    title: t.title,
    description: t.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        fr: "/fr",
        en: "/en",
      },
    },
    openGraph: {
      title: t.title,
      description: t.description,
      locale: locale === "fr" ? "fr_FR" : "en_US",
      type: "website",
    },
  };
}

export default function Home({ params }: HomeProps) {
  return (
    <Suspense fallback={<HomeFallback />}>
      <HomeContent params={params} />
    </Suspense>
  );
}

async function HomeContent({ params }: HomeProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const t = copy[locale];

  return (
    <main>
      <header className="container flex items-center justify-between border-b border-white/10 py-6">
        <Link
          href={`/${locale}`}
          className="text-lg font-semibold tracking-tight"
          aria-label={t.homeLabel}
        >
          Dimitri<span className="text-[var(--accent)]">.</span>
        </Link>

        <nav aria-label={locale === "fr" ? "Navigation principale" : "Main navigation"} className="flex items-center gap-5 text-sm">
          <a
            href="#work"
            className="hidden text-white/65 transition hover:text-white sm:inline"
          >
            {t.workNav}
          </a>
          <a
            href="#about"
            className="hidden text-white/65 transition hover:text-white sm:inline"
          >
            {t.aboutNav}
          </a>
          <Link
            href={`/${locale === "fr" ? "en" : "fr"}`}
            className="rounded-full border border-white/15 px-3 py-2 text-xs font-medium tracking-wide transition hover:border-white/40"
            aria-label={t.switchLanguage}
          >
            {locale === "fr" ? "EN ↗" : "FR ↗"}
          </Link>
        </nav>
      </header>

      <section className="container grid min-h-[70vh] items-center gap-12 py-20 md:grid-cols-[1fr_320px] md:py-28">
        <div className="reveal">
          <p className="eyebrow mb-8">{t.role}</p>
          <h1 className="max-w-5xl font-serif text-5xl font-medium leading-[1.04] tracking-[-0.045em] sm:text-7xl lg:text-[6.5rem]">
            {t.intro}
          </h1>
          <p className="mt-8 max-w-xl text-base leading-8 text-white/65 sm:text-lg">
            {t.descriptionText}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="inline-flex items-center gap-3 rounded-full px-5 py-3 font-medium text-black transition hover:opacity-85"
              style={{ background: "var(--accent)" }}
            >
              {t.work}
              <ArrowDownRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 transition hover:border-white/40"
            >
              {t.contact}
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <figure className="portrait-frame">
          <div
            className="portrait-placeholder"
            role="img"
            aria-label={t.portraitNote}
          >
            <span className="portrait-monogram" aria-hidden="true">
              DM
            </span>
            <span className="portrait-label">{t.portrait}</span>
            <span className="portrait-cross portrait-cross-top" aria-hidden="true" />
            <span className="portrait-cross portrait-cross-bottom" aria-hidden="true" />
          </div>
          <figcaption className="mt-3 flex justify-between gap-3 text-xs text-white/45">
            <span>{t.portraitCaption}</span>
            <span>01 — 03</span>
          </figcaption>
        </figure>
      </section>

      <section id="work" className="section border-t border-white/10">
        <div className="container">
          <div className="mb-12 grid gap-5 sm:grid-cols-[1fr_320px] sm:items-end">
            <div>
              <p className="eyebrow mb-4">01 / {t.selected}</p>
              <h2 className="font-serif text-4xl font-medium tracking-tight sm:text-6xl">
                {t.heading}
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-white/50">
              {t.subheading}
            </p>
          </div>

          <div className="grid gap-x-6 gap-y-12 md:grid-cols-2">
            {projects.map((project) => {
              const projectCopy = project.copy[locale];

              return (
                <article key={project.number} className="project-card group">
                  <div className="project-image aspect-[4/3] rounded-sm border border-white/10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image}
                      alt={projectCopy.alt}
                      loading="lazy"
                    />
                    <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/60 px-3 py-1.5 text-xs backdrop-blur">
                      {projectCopy.status}
                    </span>
                    <span className="absolute bottom-4 right-4 rounded-full bg-black/60 px-3 py-1.5 text-[10px] uppercase tracking-[0.14em] text-white/70 backdrop-blur">
                      {t.imageNote}
                    </span>
                  </div>

                  <div className="mt-5 flex items-start justify-between gap-4 border-b border-white/10 pb-5">
                    <div>
                      <p className="mb-3 text-xs uppercase tracking-[0.12em] text-white/45">
                        {project.number} &nbsp;·&nbsp; {projectCopy.category}
                      </p>
                      <h3 className="font-serif text-2xl font-medium tracking-tight sm:text-3xl">
                        {project.name}
                      </h3>
                      <p className="mt-3 max-w-lg text-sm leading-6 text-white/55">
                        {projectCopy.description}
                      </p>
                    </div>
                    <span className="pt-1 text-xs tabular-nums text-white/35">
                      {project.year}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section border-t border-white/10">
        <div className="container">
          <div className="mb-10 grid gap-5 sm:grid-cols-[1fr_320px] sm:items-end">
            <div>
              <p className="eyebrow mb-4">02 / {t.visualNotes}</p>
              <h2 className="font-serif text-4xl font-medium tracking-tight sm:text-5xl">
                {t.visualHeading}
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-white/50">
              {t.visualText}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-[1.35fr_0.65fr]">
            <figure className="visual-note group">
              <div className="visual-note-image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={projects[0].image}
                  alt={projects[0].copy[locale].alt}
                  loading="lazy"
                />
                <span className="visual-note-tag">{t.visualReference}</span>
              </div>
              <figcaption className="mt-3 flex justify-between gap-4 text-xs text-white/45">
                <span>01 — Veyro</span>
                <span>{t.imageNote}</span>
              </figcaption>
            </figure>

            <div className="grid gap-5">
              <figure className="visual-note group">
                <div className="visual-note-image">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={projects[1].image}
                    alt={projects[1].copy[locale].alt}
                    loading="lazy"
                  />
                  <span className="visual-note-tag">{t.visualReference}</span>
                </div>
                <figcaption className="mt-3 flex justify-between gap-4 text-xs text-white/45">
                  <span>02 — Mukuku Media OS</span>
                  <span>{t.imageNote}</span>
                </figcaption>
              </figure>
              <div className="process-note">
                <span className="eyebrow">{t.processCardTitle}</span>
                <div className="process-note-lines" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <p>{t.processCardText}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section border-t border-white/10">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-end">
            <div>
              <p className="eyebrow mb-4">03 / {t.about}</p>
              <h2 className="max-w-md font-serif text-4xl font-medium tracking-tight sm:text-6xl">
                {t.aboutHeading}
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-white/60">
              {t.aboutText}
            </p>
          </div>

          <ol className="mt-14 grid gap-8 border-t border-white/10 pt-6 sm:grid-cols-3 sm:gap-6">
            {t.steps.map((step) => (
              <li key={step.number}>
                <p className="mb-8 text-xs tabular-nums text-[var(--accent)]">
                  {step.number}
                </p>
                <h3 className="font-serif text-xl font-medium">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/50">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="contact" className="section border-t border-white/10">
        <div className="container">
          <div>
            <p className="eyebrow mb-5">04 / {locale === "fr" ? "Contact" : "Contact"}</p>
            <h2 className="max-w-3xl font-serif text-4xl font-medium tracking-tight sm:text-6xl">
              {t.contactTitle}
            </h2>
            <p className="mt-5 max-w-lg leading-7 text-white/55">
              {t.contactText}
            </p>
          </div>
          <p className="eyebrow mb-4 mt-10">{t.contactMethods}</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <a
              href="mailto:dimitrymabom@gmail.com"
              className="contact-card"
            >
              <Mail size={19} aria-hidden="true" />
              <span>
                <span className="contact-card-label">{t.emailLabel}</span>
                <span className="contact-card-value">dimitrymabom@gmail.com</span>
              </span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/dimitri-mabom"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <span className="linkedin-mark" aria-hidden="true">
                in
              </span>
              <span>
                <span className="contact-card-label">{t.linkedinLabel}</span>
                <span className="contact-card-value">dimitri-mabom</span>
              </span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a
              href="https://wa.me/237653450971"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <MessageCircle size={19} aria-hidden="true" />
              <span>
                <span className="contact-card-label">{t.whatsappLabel}</span>
                <span className="contact-card-value">+237 653 450 971</span>
              </span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a
              href="https://github.com/dimitrimabom"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <Code2 size={19} aria-hidden="true" />
              <span>
                <span className="contact-card-label">GitHub</span>
                <span className="contact-card-value">dimitrimabom</span>
              </span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <footer className="container flex flex-col justify-between gap-3 border-t border-white/10 py-7 text-xs text-white/40 sm:flex-row">
        <span>© Dimitri Mabom</span>
        <span>{t.footer}</span>
      </footer>
    </main>
  );
}

function HomeFallback() {
  return (
    <main className="container min-h-screen py-6">
      <header className="flex items-center justify-between">
        <span className="text-lg font-semibold">
          Dimitri<span className="text-[var(--accent)]">.</span>
        </span>
        <nav aria-label="Language" className="flex gap-4 text-sm text-white/60">
          <Link href="/fr">FR</Link>
          <Link href="/en">EN</Link>
        </nav>
      </header>
      <section className="flex min-h-[70vh] flex-col justify-center">
        <p className="eyebrow mb-6">PORTFOLIO · DIMITRI MABOM</p>
        <div className="h-12 w-full max-w-3xl animate-pulse rounded bg-white/10 sm:h-20" />
        <div className="mt-4 h-12 w-2/3 max-w-xl animate-pulse rounded bg-white/10 sm:h-20" />
        <div className="mt-8 h-4 w-full max-w-md animate-pulse rounded bg-white/10" />
      </section>
    </main>
  );
}

function isLocale(locale: string): locale is Locale {
  return locales.some((supportedLocale) => supportedLocale === locale);
}
