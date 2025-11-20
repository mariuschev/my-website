import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Allura } from "next/font/google";
import { allura } from "./lib/fonts";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* -------------------------------------------
  🔥 Police cursive Allura (calligraphique)
-------------------------------------------- */

/* -------------------------------------------
   Metadata du site
-------------------------------------------- */
export const metadata: Metadata = {
  title: "Master 2 Droit des affaires 214",
  description: "Site de l'association Master 2 Droit des affaires - 214",
};

/* -------------------------------------------
   Layout principal (RootLayout)
-------------------------------------------- */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable}
          antialiased
        `}
      >
        <Header />
        <main className="site-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
