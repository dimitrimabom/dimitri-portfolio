import HeroBanner from "@/components/HeroBanner";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <HeroBanner />

      <section
        id="projets"
        className="min-h-screen bg-[#121212] px-6 md:px-12 lg:px-24 py-24"
        aria-label="Projets"
      >
        <div className="max-w-6xl mx-auto">
          {/* Titre section */}
          <div className="flex items-center space-x-4 mb-16">
            <span className="font-mono text-[#e63946] text-xl md:text-2xl">
              02.
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#f5f5f5]">
              Projets sélectionnés
            </h2>
            <div className="flex-1 h-px bg-gray-800 ml-4"></div>
          </div>

          {/* Liste projets */}
          <div className="space-y-32">
            {/* Projet 1 */}
            <article className="grid md:grid-cols-12 gap-4 items-center group">
              {/* Image */}
              <div className="md:col-span-7 relative">
                <div className="aspect-video bg-gray-900 rounded border border-gray-800 group-hover:border-gray-700 transition-colors duration-300 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-gray-700">
                    {/* Placeholder pour image */}
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
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Contenu */}
              <div className="md:col-span-5 md:-ml-20 relative z-10">
                <p className="font-mono text-[#e63946] text-sm mb-2">
                  Projet Featured
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-[#f5f5f5] mb-4 group-hover:text-[#e63946] transition-colors duration-300">
                  <a href="#" className="hover:text-[#e63946]">
                    E-commerce Platform
                  </a>
                </h3>

                <div className="bg-gray-900 rounded p-6 mb-4 shadow-lg border border-gray-800">
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    Plateforme e-commerce complète avec gestion des stocks en
                    temps réel, paiements Stripe, et dashboard admin.
                    Architecture serverless optimisée pour la performance et le
                    SEO.
                  </p>
                </div>

                <ul className="flex flex-wrap gap-3 mb-4 font-mono text-xs md:text-sm text-gray-400">
                  <li>Next.js</li>
                  <li>TypeScript</li>
                  <li>Stripe</li>
                  <li>PostgreSQL</li>
                  <li>Vercel</li>
                </ul>

                <div className="flex items-center space-x-4">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#e63946] transition-colors"
                    aria-label="Voir le code sur GitHub"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#e63946] transition-colors"
                    aria-label="Voir le projet en ligne"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </article>

            {/* Projet 2 - inversé */}
            <article className="grid md:grid-cols-12 gap-4 items-center group">
              {/* Contenu à gauche */}
              <div className="md:col-span-5 md:col-start-1 relative z-10 md:text-right">
                <p className="font-mono text-[#e63946] text-sm mb-2">
                  Projet Featured
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-[#f5f5f5] mb-4 group-hover:text-[#e63946] transition-colors duration-300">
                  <a href="#" className="hover:text-[#e63946]">
                    SaaS Analytics Dashboard
                  </a>
                </h3>

                <div className="bg-gray-900 rounded p-6 mb-4 shadow-lg border border-gray-800">
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    Dashboard analytics temps réel avec visualisations
                    interactives, authentification multi-tenant, et exports de
                    rapports personnalisés. Interface responsive avec dark/light
                    mode.
                  </p>
                </div>

                <ul className="flex flex-wrap gap-3 mb-4 font-mono text-xs md:text-sm text-gray-400 md:justify-end">
                  <li>React</li>
                  <li>D3.js</li>
                  <li>Node.js</li>
                  <li>MongoDB</li>
                  <li>AWS</li>
                </ul>

                <div className="flex items-center space-x-4 md:justify-end">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#e63946] transition-colors"
                    aria-label="Voir le code sur GitHub"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#e63946] transition-colors"
                    aria-label="Voir le projet en ligne"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Image à droite */}
              <div className="md:col-span-7 md:col-start-6 relative md:row-start-1">
                <div className="aspect-video bg-gray-900 rounded border border-gray-800 group-hover:border-gray-700 transition-colors duration-300 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-gray-700">
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
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </article>

            {/* Projet 3 */}
            <article className="grid md:grid-cols-12 gap-4 items-center group">
              <div className="md:col-span-7 relative">
                <div className="aspect-video bg-gray-900 rounded border border-gray-800 group-hover:border-gray-700 transition-colors duration-300 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-gray-700">
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
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="md:col-span-5 md:-ml-20 relative z-10">
                <p className="font-mono text-[#e63946] text-sm mb-2">
                  Projet Featured
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-[#f5f5f5] mb-4 group-hover:text-[#e63946] transition-colors duration-300">
                  <a href="#" className="hover:text-[#e63946]">
                    Mobile Fitness App
                  </a>
                </h3>

                <div className="bg-gray-900 rounded p-6 mb-4 shadow-lg border border-gray-800">
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    Application mobile de coaching sportif avec suivi des
                    performances, programmes personnalisés et synchronisation
                    cloud. Notifications push et mode offline pour
                    l'entraînement sans connexion.
                  </p>
                </div>

                <ul className="flex flex-wrap gap-3 mb-4 font-mono text-xs md:text-sm text-gray-400">
                  <li>React Native</li>
                  <li>Expo</li>
                  <li>Firebase</li>
                  <li>TypeScript</li>
                  <li>Redux</li>
                </ul>

                <div className="flex items-center space-x-4">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#e63946] transition-colors"
                    aria-label="Voir le code sur GitHub"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#e63946] transition-colors"
                    aria-label="Voir le projet en ligne"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          </div>

          {/* Lien vers archive */}
          <div className="text-center mt-24">
            <a
              href="#"
              className="inline-block px-8 py-4 border-2 border-[#e63946] text-[#e63946] font-mono text-sm rounded transition-all duration-300 hover:bg-[#e63946]/10"
            >
              Voir tous les projets
            </a>
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section
        id="contact"
        className="min-h-screen bg-[#121212] px-6 md:px-12 lg:px-24 py-24 flex items-center justify-center"
        aria-label="Contact"
      >
        <div className="max-w-2xl mx-auto text-center">
          {/* Titre section */}
          <div className="flex items-center justify-center space-x-4 mb-6">
            <span className="font-mono text-[#e63946] text-xl md:text-2xl">
              03.
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#f5f5f5]">
              Et maintenant ?
            </h2>
          </div>

          {/* Titre principal */}
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#f5f5f5] mb-6">
            Prenons contact
          </h3>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-12 max-w-xl mx-auto">
            Que ce soit pour un projet, une opportunité ou simplement pour
            discuter autour d'un café virtuel, ma boîte mail est toujours
            ouverte. Je ferai de mon mieux pour vous répondre rapidement !
          </p>

          {/* CTA email */}
          <a
            href="mailto:contact@alexandredubois.dev"
            className="inline-block px-8 py-4 border-2 border-[#e63946] text-[#e63946] font-mono text-sm md:text-base rounded transition-all duration-300 hover:bg-[#e63946]/10 hover:-translate-y-1"
            aria-label="Envoyer un email"
          >
            Dites bonjour
          </a>

          {/* Réseaux sociaux optionnels */}
          <div className="flex items-center justify-center space-x-6 mt-16">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#e63946] transition-colors duration-300"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#e63946] transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#e63946] transition-colors duration-300"
              aria-label="Twitter"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#121212] border-t border-gray-900 px-6 py-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500 text-sm font-mono">
            Conçu & développé par Alexandre Dubois
          </p>
          <p className="text-gray-600 text-xs mt-2">
            © 2025 Tous droits réservés
          </p>
        </div>
      </footer>
    </main>
  );
}
