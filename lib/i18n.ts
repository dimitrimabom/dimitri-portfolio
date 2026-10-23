export const locales = ["fr", "en"] as const;

export type Locale = (typeof locales)[number];

export function isLocale(locale: string): locale is Locale {
  return locales.some((supportedLocale) => supportedLocale === locale);
}

export const copy = {
  fr: {
    title: "Dimitri Mabom — Développeur frontend indépendant",
    description:
      "Je conçois et développe des expériences numériques avec clarté, précision et intention.",
    homeLabel: "Dimitri Mabom, accueil",
    navLabel: "Navigation principale",
    workNav: "Projets",
    aboutNav: "À propos",
    expertiseNav: "Expertise",
    servicesNav: "Services",
    contactNav: "Contact",
    footerNavigation: "Navigation secondaire",
    switchLanguage: "Switch to English",
    switchLanguageShort: "EN",
    role: "Développeur frontend indépendant",
    introLead: "Je conçois des interfaces",
    introAccent: "qui font avancer",
    introEnd: "vos produits.",
    heroText:
      "Sites et interfaces de produits numériques, du prototype frontend à l'amélioration d'une expérience existante.",
    work: "Voir les projets",
    contactAction: "Discuter d'un projet",
    credibilityNumber: "01",
    credibility: "Ce que j'apporte",
    credibilityItems: [
      {
        title: "Des interfaces claires",
        description: "Une structure lisible, pensée pour les usages réels.",
      },
      {
        title: "Un frontend soigné",
        description: "Des interfaces responsives, construites avec attention.",
      },
      {
        title: "Une approche produit",
        description: "Du besoin initial aux choix d'interface et d'implémentation.",
      },
    ],
    aboutNumber: "02",
    about: "À propos",
    aboutHeading: "Le bon produit commence par une expérience claire.",
    aboutText:
      "Je m'intéresse à la rencontre entre le design, la technologie et les usages. Mon approche du frontend consiste à transformer des besoins en interfaces compréhensibles, cohérentes et agréables à utiliser.",
    expertiseNumber: "03",
    expertise: "Expertise",
    expertiseHeading: "Du besoin produit à l'interface frontend.",
    expertiseIntro:
      "Les outils et pratiques que je mobilise pour construire des interfaces web claires, responsives et soignées.",
    expertiseGroups: [
      {
        title: "Développement frontend",
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      },
      {
        title: "Développement web",
        items: ["Node.js"],
      },
      {
        title: "Qualité et expérience",
        items: ["Jest", "React Testing Library", "Accessibilité", "SEO"],
      },
    ],
    projectsNumber: "04",
    projects: "Projets sélectionnés",
    projectsHeading: "Des idées en construction.",
    projectsIntro:
      "Prototypes et concepts numériques, présentés selon leur état réel.",
    projectOpen: "Voir le projet",
    projectBack: "Retour aux projets",
    projectStatusLabel: "État actuel",
    projectContact: "Discuter d'un projet similaire",
    methodNumber: "06",
    method: "Méthode",
    methodHeading: "De la question au produit.",
    methodSteps: [
      {
        number: "01",
        title: "Comprendre",
        description: "Clarifier le besoin et les personnes concernées.",
      },
      {
        number: "02",
        title: "Structurer",
        description: "Organiser le contenu et le parcours de l'interface.",
      },
      {
        number: "03",
        title: "Concevoir et développer",
        description: "Construire une interface cohérente et responsive.",
      },
      {
        number: "04",
        title: "Tester et affiner",
        description: "Vérifier les usages, puis soigner les détails.",
      },
    ],
    servicesNumber: "07",
    services: "Services",
    servicesHeading: "Un renfort frontend, adapté à votre projet.",
    servicesIntro:
      "Décrivez le besoin et le périmètre : nous pourrons discuter de la bonne façon d'avancer, sans offre standard ni tarif inventé.",
    serviceItems: [
      {
        number: "01",
        title: "Créer une interface web",
        description:
          "Intégrer des interfaces responsive pour un site ou un produit web.",
      },
      {
        number: "02",
        title: "Développer un frontend",
        description:
          "Construire les vues et composants d'une application avec React et Next.js.",
      },
      {
        number: "03",
        title: "Donner forme à un prototype",
        description:
          "Explorer une idée de produit à travers un prototype frontend.",
      },
      {
        number: "04",
        title: "Améliorer l'existant",
        description:
          "Faire évoluer une interface en travaillant sa clarté, sa cohérence et sa qualité.",
      },
    ],
    servicesAction: "Parler de votre projet",
    contactNumber: "08",
    contactSection: "Contact",
    contactHeading: "Parlons de votre prochain projet.",
    contactIntro:
      "Pour une collaboration, une question ou simplement faire connaissance : choisissez le moyen qui vous convient.",
    email: "E-mail",
    linkedin: "LinkedIn",
    whatsapp: "WhatsApp",
    github: "GitHub",
    footer: "Conçu avec intention.",
    footerWork: "Projets",
    footerAbout: "À propos",
    footerExpertise: "Expertise",
    footerServices: "Services",
    footerContact: "Contact",
  },
  en: {
    title: "Dimitri Mabom — Independent Frontend Developer",
    description:
      "I design and build digital experiences with clarity, precision, and purpose.",
    homeLabel: "Dimitri Mabom, home",
    navLabel: "Main navigation",
    workNav: "Work",
    aboutNav: "About",
    expertiseNav: "Expertise",
    servicesNav: "Services",
    contactNav: "Contact",
    footerNavigation: "Footer navigation",
    switchLanguage: "Passer en français",
    switchLanguageShort: "FR",
    role: "Independent frontend developer",
    introLead: "I build interfaces",
    introAccent: "that move",
    introEnd: "your product forward.",
    heroText:
      "Websites and product interfaces, from frontend prototypes to improving an existing experience.",
    work: "Explore selected work",
    contactAction: "Discuss a project",
    credibilityNumber: "01",
    credibility: "What I bring",
    credibilityItems: [
      {
        title: "Clear interfaces",
        description: "Readable structure shaped around real use.",
      },
      {
        title: "Careful frontend",
        description: "Responsive interfaces built with attention to detail.",
      },
      {
        title: "Product thinking",
        description: "From the initial need to interface and implementation decisions.",
      },
    ],
    aboutNumber: "02",
    about: "About",
    aboutHeading: "Good products start with a clear experience.",
    aboutText:
      "I'm interested in the intersection of design, technology, and real-world use. My approach to frontend development is to turn needs into interfaces that feel clear, coherent, and enjoyable to use.",
    expertiseNumber: "03",
    expertise: "Expertise",
    expertiseHeading: "From product needs to frontend interfaces.",
    expertiseIntro:
      "The tools and practices I use to build clear, responsive, carefully crafted web interfaces.",
    expertiseGroups: [
      {
        title: "Frontend development",
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      },
      {
        title: "Web development",
        items: ["Node.js"],
      },
      {
        title: "Quality and experience",
        items: ["Jest", "React Testing Library", "Accessibility", "SEO"],
      },
    ],
    projectsNumber: "04",
    projects: "Selected projects",
    projectsHeading: "Ideas taking shape.",
    projectsIntro:
      "Digital prototypes and concepts, presented at their actual stage.",
    projectOpen: "View project",
    projectBack: "Back to selected work",
    projectStatusLabel: "Current stage",
    projectContact: "Discuss a similar project",
    methodNumber: "06",
    method: "Approach",
    methodHeading: "From question to product.",
    methodSteps: [
      {
        number: "01",
        title: "Understand",
        description: "Clarify the need and the people it serves.",
      },
      {
        number: "02",
        title: "Structure",
        description: "Organize the content and the interface journey.",
      },
      {
        number: "03",
        title: "Design and build",
        description: "Create a coherent, responsive interface.",
      },
      {
        number: "04",
        title: "Test and refine",
        description: "Check how it works, then polish the details.",
      },
    ],
    servicesNumber: "07",
    services: "Services",
    servicesHeading: "Frontend support, shaped around your project.",
    servicesIntro:
      "Share the need and scope so we can discuss a good way forward — no one-size-fits-all packages or invented pricing.",
    serviceItems: [
      {
        number: "01",
        title: "Build a web interface",
        description:
          "Implement responsive interfaces for a website or web product.",
      },
      {
        number: "02",
        title: "Develop a frontend",
        description:
          "Build application views and components with React and Next.js.",
      },
      {
        number: "03",
        title: "Shape a prototype",
        description:
          "Explore a product idea through a frontend prototype.",
      },
      {
        number: "04",
        title: "Improve an existing product",
        description:
          "Refine an interface's clarity, consistency, and frontend quality.",
      },
    ],
    servicesAction: "Discuss your project",
    contactNumber: "08",
    contactSection: "Contact",
    contactHeading: "Let's talk about your next project.",
    contactIntro:
      "For a collaboration, a question, or simply to say hello — choose whichever way works for you.",
    email: "Email",
    linkedin: "LinkedIn",
    whatsapp: "WhatsApp",
    github: "GitHub",
    footer: "Built with intention.",
    footerWork: "Work",
    footerAbout: "About",
    footerExpertise: "Expertise",
    footerServices: "Services",
    footerContact: "Contact",
  },
} satisfies Record<
  Locale,
  {
    title: string;
    description: string;
    homeLabel: string;
    navLabel: string;
    workNav: string;
    aboutNav: string;
    expertiseNav: string;
    servicesNav: string;
    contactNav: string;
    footerNavigation: string;
    switchLanguage: string;
    switchLanguageShort: string;
    role: string;
    introLead: string;
    introAccent: string;
    introEnd: string;
    heroText: string;
    work: string;
    contactAction: string;
    credibilityNumber: string;
    credibility: string;
    credibilityItems: { title: string; description: string }[];
    aboutNumber: string;
    about: string;
    aboutHeading: string;
    aboutText: string;
    expertiseNumber: string;
    expertise: string;
    expertiseHeading: string;
    expertiseIntro: string;
    expertiseGroups: { title: string; items: string[] }[];
    projectsNumber: string;
    projects: string;
    projectsHeading: string;
    projectsIntro: string;
    projectOpen: string;
    projectBack: string;
    projectStatusLabel: string;
    projectContact: string;
    methodNumber: string;
    method: string;
    methodHeading: string;
    methodSteps: { number: string; title: string; description: string }[];
    servicesNumber: string;
    services: string;
    servicesHeading: string;
    servicesIntro: string;
    serviceItems: { number: string; title: string; description: string }[];
    servicesAction: string;
    contactNumber: string;
    contactSection: string;
    contactHeading: string;
    contactIntro: string;
    email: string;
    linkedin: string;
    whatsapp: string;
    github: string;
    footer: string;
    footerWork: string;
    footerAbout: string;
    footerExpertise: string;
    footerServices: string;
    footerContact: string;
  }
>;
