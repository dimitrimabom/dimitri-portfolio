import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import React from "react";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "En savoir plus sur Dimitri, développeur web passionné par React et Next.js.",
};

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#121212]">
      <Navbar />

      <section
        id="about"
        className="px-6 md:px-12 lg:px-24 pt-32 pb-24"
        aria-label="À propos"
      >
        <div className="max-w-6xl mx-auto">
          {/* En-tête */}
          <div className="flex items-center space-x-4 mb-10">
            <span className="font-mono text-[#e63946] text-xl md:text-2xl">
              01.
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-[#f5f5f5]">
              À propos de moi
            </h1>
            <div className="flex-1 h-px bg-gray-800 ml-4" />
          </div>

          {/* Contenu principal */}
          <div className="grid md:grid-cols-12 gap-10 items-start">
            {/* Texte */}
            <div className="md:col-span-7 space-y-6">
              <p className="text-gray-400 leading-relaxed">
                Bonjour, moi c'est{" "}
                <span className="text-[#f5f5f5]">Dimitri</span>. Je conçois et
                développe des expériences web modernes, performantes et
                accessibles. J'aime particulièrement travailler avec
                <span className="text-[#f5f5f5]"> React</span> et
                <span className="text-[#f5f5f5]"> Next.js</span> pour créer des
                interfaces raffinées, maintenables et orientées produit.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Je m'intéresse à l'<span className="text-[#f5f5f5]">UX</span>,
                au
                <span className="text-[#f5f5f5]"> design system</span> et aux
                bonnes pratiques d'ingénierie (tests, CI/CD, qualité de code).
                Mon objectif est de livrer des produits stables et élégants,
                avec une attention particulière portée aux détails.
              </p>

              {/* Compétences */}
              <div>
                <h2 className="text-xl font-semibold text-[#f5f5f5] mb-4">
                  Compétences clés
                </h2>
                <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 font-mono text-xs md:text-sm text-gray-300">
                  <li className="flex items-center space-x-2">
                    <span className="text-[#e63946]">▹</span>
                    <span>React / Next.js</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-[#e63946]">▹</span>
                    <span>TypeScript</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-[#e63946]">▹</span>
                    <span>Tailwind CSS</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-[#e63946]">▹</span>
                    <span>Node.js</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-[#e63946]">▹</span>
                    <span>Tests (Jest / RTL)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-[#e63946]">▹</span>
                    <span>Accessibility & SEO</span>
                  </li>
                </ul>
              </div>

              {/* Appels à l'action */}
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="/cv.pdf"
                  className="inline-block px-6 py-3 border-2 border-[#e63946] text-[#e63946] font-mono text-sm rounded transition-all duration-300 hover:bg-[#e63946]/10"
                >
                  Voir mon CV
                </a>
                <a
                  href="/projects"
                  className="inline-block px-6 py-3 border-2 border-gray-800 text-gray-300 font-mono text-sm rounded transition-all duration-300 hover:border-gray-700 hover:-translate-y-0.5"
                >
                  Parcourir mes projets
                </a>
                <a
                  href="/contact"
                  className="inline-block px-6 py-3 border-2 border-gray-800 text-gray-300 font-mono text-sm rounded transition-all duration-300 hover:border-gray-700 hover:-translate-y-0.5"
                >
                  Me contacter
                </a>
              </div>
            </div>

            {/* Visuel / photo */}
            <div className="md:col-span-5 md:pl-4">
              <div className="relative w-full max-w-sm md:ml-auto">
                <div className="aspect-square rounded border border-gray-800 bg-gray-900 overflow-hidden shadow-lg">
                  <div className="w-full h-full flex items-center justify-center text-gray-700">
                    {/* Placeholder pour une photo */}
                    <svg
                      className="w-24 h-24"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M3 7a4 4 0 014-4h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7zm4 4a3 3 0 106 0 3 3 0 00-6 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="absolute -inset-2 -z-10 rounded bg-gradient-to-tr from-[#e63946]/20 to-transparent blur" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
