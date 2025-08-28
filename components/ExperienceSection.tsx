"use client";

interface ExperienceItem {
  role: string;
  company: string;
  years: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    role: "Lead Product Designer",
    company: "Amsterdam Tech Hub",
    years: "2016–2020",
    description:
      "Directed a team in designing digital products, from concept to launch.",
  },
  {
    role: "UX Designer",
    company: "Dutch Innovate, Amsterdam",
    years: "2016–2020",
    description:
      "Oversaw user experience strategies for web platforms, implementing user feedback into design enhancements.",
  },
  {
    role: "UI/UX Designer",
    company: "Creative Tech Solutions, Amsterdam",
    years: "2016–2020",
    description:
      "Led UI/UX design for mobile applications, improving user experience and interface aesthetics.",
  },
  {
    role: "Junior Designer",
    company: "Bright Designs, Amsterdam",
    years: "2016–2020",
    description:
      "Focused on assisting in UI/UX projects, creating wireframes and prototypes for web applications.",
  },
];

export default function ExperienceSection() {
  return (
    <section className="w-full py-12">
      <div className="mx-auto max-w-6xl flex gap-10 px-6">
        {/* Titre */}
        <h2 className="w-1/4 text-xl font-semibold">Experience</h2>

        {/* Liste */}
        <div className="flex-1 flex flex-col gap-4">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="rounded-xl border border-border bg-muted/10 p-5"
            >
              <p className="text-sm text-muted-foreground">{exp.role}</p>
              <h3 className="text-base font-semibold">{exp.company}</h3>
              <span className="text-sm text-muted-foreground block mb-2">
                {exp.years}
              </span>
              <p className="text-sm opacity-80">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
