import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// removed Allura / allura imports: site will use default fonts for headings
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

/* Allura removed: headings use the site's default typography now */

/* -------------------------------------------
   Metadata du site
-------------------------------------------- */
export const metadata: Metadata = {
  title: "M2-Affaires | Master 2 Droit des affaires Recherche - U. Panthéon-Assas",
  description: "Site de l'association du Master 2 Droit des affaires Recherche - Université Paris II Panthéon-Assas.",
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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
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
