import type { Metadata } from "next";
import type { ReactNode } from "react";
import "../globals.css";

export const metadata: Metadata = {
  title: "Portfolio de Dimitri Mabom",
  description:
    "Projets numériques et démarche de conception de Dimitri Mabom, développeur frontend.",
};

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
