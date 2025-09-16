"use client";

import { motion } from "framer-motion";

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
    <section className="w-full py-16">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row gap-10 px-6">
        {/* Titre */}
        <h2 className="w-full md:w-1/4 text-3xl font-bold tracking-tight text-foreground text-center md:text-left">
          <span className="text-primary/80 font-bold text-4xl p-4">
            Experience
          </span>
        </h2>

        {/* Liste */}
        <div className="flex-1 relative">
          {/* Timeline line (only on md+) */}
          <div className="hidden md:block absolute left-3 top-0 bottom-0 w-[2px] bg-border" />

          <div className="flex flex-col gap-8 md:pl-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative rounded-xl border border-border bg-card/50 p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Timeline dot (hidden on mobile) */}
                <div className="hidden md:block absolute -left-[29px] top-6 w-4 h-4 rounded-full border-2 border-primary bg-background shadow" />

                {/* Rôle */}
                <h3 className="text-lg font-semibold text-primary">
                  {exp.role}
                </h3>

                {/* Société + Années */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1">
                  <p className="text-sm font-medium text-foreground">
                    {exp.company}
                  </p>
                  <span className="text-xs text-muted-foreground bg-muted/30 px-3 py-1 rounded-full w-fit">
                    {exp.years}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
