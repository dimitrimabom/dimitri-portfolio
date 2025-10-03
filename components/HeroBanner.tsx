"use client";

export default function HeroBanner() {
  return (
    <section
      className="min-h-96 bg-[#121212] flex items-center justify-center px-6 md:px-12 lg:px-24 py-12 mt-20"
      aria-label="Hero section"
    >
      <div className="max-w-4xl w-full">
        {/* Intro minimaliste */}
        <p className="text-[#e63946] font-mono text-sm md:text-base mb-4">
          Salut, je suis
        </p>

        {/* Nom */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#f5f5f5] leading-tight">
          Dimitri Mabom.
        </h1>

        {/* Accroche courte */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-500 leading-tight">
          Je suis developpeur web front-End.
        </h2>

        {/* Description concise */}
        <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-2xl pt-4">
          Developpeur Web front end je suis passionné par le design et le
          developpement web. Je travaille avec React, Next.js, Tailwind CSS,
          TypeScript.
        </p>

        {/* CTA unique */}
        <div className="pt-8">
          <a
            href="#projets"
            className="inline-block px-8 py-4 border-2 border-[#e63946] text-[#e63946] font-mono text-sm md:text-base rounded transition-all duration-300 hover:bg-[#e63946]/10 hover:-translate-y-1"
            aria-label="Voir mes projets"
          >
            Découvrir mes projets
          </a>
        </div>
      </div>
    </section>
  );
}
