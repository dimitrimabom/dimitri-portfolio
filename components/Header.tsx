"use client";

import Link from "next/link";
import { Twitter, Youtube, Instagram, Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="font-eduHand w-full bg-background border-b border-border">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-medium text-muted-foreground">
          Dimitri Mabom
        </Link>

        {/* Icons */}
        <nav className="flex items-center gap-3">
          <Link
            href="#"
            className="p-2 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
          >
            <Twitter className="w-4 h-4" />
          </Link>
          <Link
            href="#"
            className="p-2 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
          >
            <Youtube className="w-4 h-4" />
          </Link>
          <Link
            href="#"
            className="p-2 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
          >
            <Instagram className="w-4 h-4" />
          </Link>
          <button className="p-2 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors">
            <Menu className="w-4 h-4" />
          </button>
        </nav>
      </div>
    </header>
  );
}
