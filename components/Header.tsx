"use client";

import Link from "next/link";
import { Menu, Sun } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Ferme le menu si on clique en dehors
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <header className="w-full bg-background border-border fixed z-40">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="font-eduHand text-2xl font-medium text-muted-foreground">
          Dimitri Mabom
        </Link>

        {/* Icons */}
        <nav className="flex items-center gap-3">
          <div className="relative" ref={menuRef}>
            <div className="flex items-center gap-2">
              <button
              className="p-2 rounded-sm text-muted-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Ouvrir le menu"
              type="button"
            >
              <Sun className="w-4 h-4" />
            </button>
            <button
              className="p-2 rounded-sm border border-border text-muted-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Ouvrir le menu"
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              aria-expanded={open}
              aria-controls="menu-dropdown"
            >
              <Menu className="w-4 h-4" />
            </button>
            </div>
            {open && (
              <div
                id="menu-dropdown"
                className="absolute right-0 mt-2 w-40 bg-background border border-border rounded-lg shadow-lg z-10 overflow-hidden"
                role="menu"
                aria-label="Menu principal"
              >
                <Link
                  href="/about"
                  className="block px-4 py-2 text-muted-foreground hover:bg-muted hover:text-primary transition-colors"
                  role="menuitem"
                  tabIndex={0}
                >
                  À propos
                </Link>
                <Link
                  href="/works"
                  className="block px-4 py-2 text-muted-foreground hover:bg-muted hover:text-primary transition-colors"
                  role="menuitem"
                  tabIndex={0}
                >
                  Projets
                </Link>
                <Link
                  href="/contact"
                  className="block px-4 py-2 text-muted-foreground hover:bg-muted hover:text-primary transition-colors"
                  role="menuitem"
                  tabIndex={0}
                >
                  Contact
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
