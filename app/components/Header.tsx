"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [isHidden, setIsHidden] = useState(false);
  const [studentsOpen, setStudentsOpen] = useState(false);
  const studentsRef = useRef<HTMLDivElement | null>(null);
  const [partnersOpen, setPartnersOpen] = useState(false);
  const partnersRef = useRef<HTMLDivElement | null>(null);

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
          <Link href="/accueil" className="nav-link">
            Accueil
          </Link>
          <Link href="/actualites" className="nav-link">
            Actualités
          </Link>
          <div
            ref={partnersRef}
            className={`nav-item ${partnersOpen ? "open" : ""}`}
            onMouseEnter={() => setPartnersOpen(true)}
            onMouseLeave={() => setPartnersOpen(false)}
            onFocus={() => setPartnersOpen(true)}
            onBlur={(e: React.FocusEvent) => {
              const related = e.relatedTarget as Node | null;
              if (!partnersRef.current || !related || !partnersRef.current.contains(related)) {
                setPartnersOpen(false);
              }
            }}
          >
            <span className="nav-link nav-parent" aria-haspopup="true" aria-expanded={partnersOpen} tabIndex={0}>
              Nos partenaires
            </span>
            <div className="subnav" role="menu" aria-label="Sous-menu Partenaires">
              <Link href="/partenaires/essec" className="nav-link subnav-link" role="menuitem" onClick={() => setPartnersOpen(false)}>Partenariat ESSEC</Link>
              <Link href="/partenaires/professionnels" className="nav-link subnav-link" role="menuitem" onClick={() => setPartnersOpen(false)}>Partenaires professionnels</Link>
            </div>
          </div>
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
          <div
            ref={studentsRef}
            className={`nav-item ${studentsOpen ? "open" : ""}`}
            onMouseEnter={() => setStudentsOpen(true)}
            onMouseLeave={() => setStudentsOpen(false)}
            onFocus={() => setStudentsOpen(true)}
            onBlur={(e: React.FocusEvent) => {
              const related = e.relatedTarget as Node | null;
              if (!studentsRef.current || !related || !studentsRef.current.contains(related)) {
                setStudentsOpen(false);
              }
            }}
          >
            <span className="nav-link nav-parent" aria-haspopup="true" aria-expanded={studentsOpen} tabIndex={0}>
              Étudiants
            </span>
            <div className="subnav" role="menu" aria-label="Sous-menu Étudiants">
              <Link href="/etudiants/promotions" className="nav-link subnav-link" role="menuitem" onClick={() => setStudentsOpen(false)}>Promotions</Link>
              <Link href="/etudiants/que-sont-ils-devenus" className="nav-link subnav-link" role="menuitem" onClick={() => setStudentsOpen(false)}>Que sont‑ils devenus</Link>
            </div>
          </div>
          <Link href="/formation" className="nav-link">
            Formation
          </Link>
        </nav>
      </div>
    </header>
  );
}
