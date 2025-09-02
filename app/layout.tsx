import type { Metadata } from "next";
import { Raleway, Edu_NSW_ACT_Cursive } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
});

const eduHand = Edu_NSW_ACT_Cursive({
  variable: "--font-edu-hand",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dimitri Portfolio",
  description: "Portfolio of Dimitri, built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${raleway.variable} ${eduHand.variable}`}>
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
