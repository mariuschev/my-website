"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [isHidden, setIsHidden] = useState(false);

  // Hide header after a certain scroll distance (px)
  const HIDE_AFTER_PX = 200;

  useEffect(() => {
    let ticking = false;

    function onScroll() {
      const y = window.scrollY || 0;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // hide when scrolled past threshold, show otherwise
          if (y > HIDE_AFTER_PX) setIsHidden(true);
          else setIsHidden(false);
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    // run once to set initial state
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Header is shown on all pages (including homepage) so it can overlay the hero
  if (pathname === "/") {
    return null;
  }

  return (
    <header className={`site-header shadow-sm sticky top-0 z-50 ${isHidden ? "site-header--hidden" : ""}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        {/* left links */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/actualites" className="nav-link">
            Actualités
          </Link>
          <Link href="/accueil" className="nav-link">
            Accueil
          </Link>
          <Link href="/partenaires" className="nav-link">
            Nos partenaires
          </Link>
        </nav>

        {/* centered logo */}
        <Link href="/" className="flex items-center justify-center">
          <Image src="/logo.png" alt="M214" width={140} height={140} />
        </Link>

        {/* right links */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/association" className="nav-link">
            L'association
          </Link>
          <Link href="/etudiants" className="nav-link">
            Étudiants
          </Link>
          <Link href="/formation" className="nav-link">
            Formation
          </Link>
        </nav>
      </div>
    </header>
  );
}
