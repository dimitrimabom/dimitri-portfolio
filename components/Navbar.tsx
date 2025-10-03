"use client";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-[#121212]/80 backdrop-blur-sm z-50">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#121212]/90 backdrop-blur-sm border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="text-[#e63946] font-mono text-lg md:text-xl font-bold hover:opacity-80 transition-opacity"
            aria-label="Retour à l'accueil"
          >
            AD
          </a>

          {/* Menu desktop */}
          <ul className="hidden md:flex items-center space-x-8">
            {[
              { num: "01", label: "À propos", href: "#about" },
              { num: "02", label: "Projets", href: "#projets" },
              { num: "03", label: "Contact", href: "#contact" },
            ].map((item) => (
              <li key={item.num}>
                <a
                  href={item.href}
                  className="group flex items-center space-x-2 text-gray-400 hover:text-[#e63946] transition-colors duration-300"
                >
                  <span className="font-mono text-[#e63946] text-sm">
                    {item.num}.
                  </span>
                  <span className="text-sm">{item.label}</span>
                </a>
              </li>
            ))}
            <li>
              <a
                href="/cv.pdf"
                className="px-4 py-2 border border-[#e63946] text-[#e63946] font-mono text-sm rounded transition-all duration-300 hover:bg-[#e63946]/10"
              >
                CV
              </a>
            </li>
          </ul>

          {/* Menu mobile */}
          <button className="md:hidden text-[#e63946]" aria-label="Menu">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
