"use client";

import Link from "next/link";
import { Twitter, Youtube, Instagram, Menu } from "lucide-react";
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
    <header className="font-eduHand w-full bg-background border-border fixed z-40">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-medium text-muted-foreground">
          Dimitri Mabom
        </Link>

        {/* Icons */}
        <nav className="flex items-center gap-3">
          <Link
            href="https://x.com/@dimitrimabom"
            target="_blank"
            className="p-2 text-muted-foreground hover:text-primary hover:border-primary transition-colors"
          >
            <Twitter className="w-4 h-4" />
          </Link>
          <Link
            href="https://www.youtube.com/@dimitrimabom"
            target="_blank"
            className="p-2 text-muted-foreground hover:text-primary hover:border-primary transition-colors"
          >
            <Youtube className="w-4 h-4" />
          </Link>
          <Link
            href="https://www.instagram.com/dimitrimabom/"
            target="_blank"
            className="p-2 text-muted-foreground hover:text-primary hover:border-primary transition-colors"
          >
            <Instagram className="w-4 h-4" />
          </Link>
          <div className="relative" ref={menuRef}>
            <button
              className="p-2 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Ouvrir le menu"
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              aria-expanded={open}
              aria-controls="menu-dropdown"
            >
              <Menu className="w-4 h-4" />
            </button>
            {open && (
              <div
                id="menu-dropdown"
                className="absolute right-0 mt-2 w-40 bg-background border border-border rounded-lg shadow-lg z-10"
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
