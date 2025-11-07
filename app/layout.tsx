import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
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
  title: "Master 2 Droit des affaires 214",
  description: "Site de l'association Master 2 Droit des affaires - 214",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="site-header shadow-sm sticky top-0 z-50">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.svg" alt="M214" width={56} height={56} />
              <span className="hidden text-lg font-semibold sm:inline">Master 2 Droit des affaires 214</span>
            </Link>

            <nav>
              <ul className="flex items-center gap-4 text-sm">
                <li>
                  <Link href="/actualites" className="hover:underline">
                    Actualités
                  </Link>
                </li>
                <li>
                  <Link href="/accueil" className="hover:underline">
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link href="/partenaires" className="hover:underline">
                    Nos partenaires
                  </Link>
                </li>
                <li>
                  <Link href="/association" className="hover:underline">
                    L'association
                  </Link>
                </li>
                <li>
                  <Link href="/etudiants" className="hover:underline">
                    Étudiants
                  </Link>
                </li>
                <li>
                  <Link href="/formation" className="hover:underline">
                    Formation
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
