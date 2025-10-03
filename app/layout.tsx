import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dimitri.dev"),
  title: {
    default: "Dimitri – Développeur Web",
    template: "%s | Dimitri",
  },
  description:
    "Portfolio de Dimitri, développeur web: projets, blog, et prise de contact.",
  applicationName: "Dimitri Portfolio",
  keywords: [
    "Développeur web",
    "Frontend",
    "React",
    "Next.js",
    "Portfolio",
    "Freelance",
  ],
  authors: [{ name: "Dimitri" }],
  creator: "Dimitri",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dimitri – Développeur Web",
    description:
      "Portfolio de Dimitri, développeur web: projets, blog, et prise de contact.",
    url: "https://dimitri.dev",
    siteName: "Dimitri Portfolio",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dimitri – Développeur Web",
    description:
      "Portfolio de Dimitri, développeur web: projets, blog, et prise de contact.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a
          href="#contenu-principal"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:bg-white dark:focus:bg-black focus:text-black dark:focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:shadow-lg"
        >
          Passer au contenu
        </a>
        {children}
      </body>
    </html>
  );
}
