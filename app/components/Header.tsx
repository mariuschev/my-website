"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [isHidden, setIsHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [studentsOpen, setStudentsOpen] = useState(false);
  const studentsRef = useRef<HTMLDivElement | null>(null);
  const [partnersOpen, setPartnersOpen] = useState(false);
  const partnersRef = useRef<HTMLDivElement | null>(null);
  const [mobileStudentsOpen, setMobileStudentsOpen] = useState(false);
  const [mobilePartnersOpen, setMobilePartnersOpen] = useState(false);
  // states to animate mobile panel open/close smoothly
  const [mobilePanelVisible, setMobilePanelVisible] = useState(false);
  const [mobilePanelClosing, setMobilePanelClosing] = useState(false);

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

  // close mobile menu when route changes
  useEffect(() => {
    setMobileOpen(false);
    setMobileStudentsOpen(false);
    setMobilePartnersOpen(false);
  }, [pathname]);

  // treat anything under 1024px as 'compact' (mobile + tablet iPad range)
  const [isCompact, setIsCompact] = useState(false);
  useEffect(() => {
    const onResize = () => setIsCompact(typeof window !== "undefined" ? window.innerWidth < 1024 : false);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // ensure mobile panel closes when switching to desktop layout
  useEffect(() => {
    if (!isCompact) {
      setMobileOpen(false);
      setMobilePanelVisible(false);
      setMobilePanelClosing(false);
      return;
    }
    // keep panel visible while switching to compact
    if (isCompact && mobileOpen) setMobilePanelVisible(true);
  }, [isCompact]);
  // touch swipe detection: close mobile menu when user swipes down
  const touchStartYRef = React.useRef<number | null>(null);
  const touchStartXRef = React.useRef<number | null>(null);
  useEffect(() => {
    if (!isCompact || !mobileOpen) return;

    const panel = document.querySelector(".site-header + div, .absolute.left-0.right-0.top-full");
    // fallback to window if panel not found
    const target: EventTarget = panel || window;

    const onTouchStart = (e: TouchEvent) => {
      const t = e.touches[0];
      touchStartYRef.current = t.clientY;
      touchStartXRef.current = t.clientX;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (touchStartYRef.current == null) return;
      const t = e.touches[0];
      const deltaY = t.clientY - (touchStartYRef.current || 0);
      const deltaX = t.clientX - (touchStartXRef.current || 0);
      // trigger when swipe is mostly vertical and going down
      if (deltaY > 50 && Math.abs(deltaY) > Math.abs(deltaX) * 1.2) {
        setMobileOpen(false);
        touchStartYRef.current = null;
        touchStartXRef.current = null;
      }
    };

    const onTouchEnd = () => {
      touchStartYRef.current = null;
      touchStartXRef.current = null;
    };

    (target as any).addEventListener?.("touchstart", onTouchStart, { passive: true });
    (target as any).addEventListener?.("touchmove", onTouchMove, { passive: true });
    (target as any).addEventListener?.("touchend", onTouchEnd, { passive: true });

    return () => {
      (target as any).removeEventListener?.("touchstart", onTouchStart);
      (target as any).removeEventListener?.("touchmove", onTouchMove);
      (target as any).removeEventListener?.("touchend", onTouchEnd);
    };
  }, [isCompact, mobileOpen]);
  // close mobile menu when user navigates inside the same page or scrolls
  useEffect(() => {
    if (!isCompact || !mobileOpen) return;

    const onHashChange = () => {
      setMobileOpen(false);
      setMobileStudentsOpen(false);
      setMobilePartnersOpen(false);
    };

    const onDocumentClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      // if user clicked an in-page anchor like <a href="#something">
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (anchor) {
        setMobileOpen(false);
        setMobileStudentsOpen(false);
        setMobilePartnersOpen(false);
      }
    };

    const onScrollClose = () => {
      // if the user scrolls (e.g. to the bottom), hide the mobile menu
      if ((window.scrollY || 0) > 0) {
        setMobileOpen(false);
        setMobileStudentsOpen(false);
        setMobilePartnersOpen(false);
      }
    };

    window.addEventListener("hashchange", onHashChange);
    document.addEventListener("click", onDocumentClick, true);
    window.addEventListener("scroll", onScrollClose, { passive: true });

    return () => {
      window.removeEventListener("hashchange", onHashChange);
      document.removeEventListener("click", onDocumentClick, true);
      window.removeEventListener("scroll", onScrollClose);
    };
  }, [isCompact, mobileOpen]);

  // manage panel mount/unmount to allow smooth CSS transitions
  useEffect(() => {
    if (!isCompact) return;

    if (mobileOpen) {
      // open immediately
      setMobilePanelClosing(false);
      setMobilePanelVisible(true);
      return;
    }

    // if mobileOpen went false but panel is visible, trigger closing animation
    if (mobilePanelVisible && !mobileOpen) {
      setMobilePanelClosing(true);
      const t = window.setTimeout(() => {
        setMobilePanelVisible(false);
        setMobilePanelClosing(false);
      }, 620); // match CSS transition length (600ms) + small buffer
      return () => window.clearTimeout(t);
    }
  }, [mobileOpen, isCompact, mobilePanelVisible]);
  if (pathname === "/") {
    return null;
  }

  // Header is shown on all pages (including homepage) so it can overlay the hero

  return (
    <header className={`site-header shadow-sm sticky top-0 z-50 ${isHidden ? "site-header--hidden" : ""}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        {/* left links */}
        {!isCompact && (
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
        )}

        {/* centered logo */}
        <Link href="/" className="flex items-center justify-center">
          <Image src="/logo.png" alt="M214" width={120} height={120} />
        </Link>

        {/* right links */}
        {!isCompact && (
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
        )}

        {/* mobile/tablet: hamburger + simple right spacer */}
        {isCompact && (
          <div className="flex items-center gap-3">
          <button
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((s) => !s)}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            {/* hamburger / close icon */}
            {mobileOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 18L18 6M6 6l12 12" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 6h18M3 12h18M3 18h18" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </button>
          </div>
        )}
      </div>

      {/* Mobile dropdown panel (under header) */}
      {isCompact && (mobilePanelVisible || mobilePanelClosing) && (
        <div
          className={`absolute left-0 right-0 top-full z-40 bg-white border-t shadow-md mobile-panel ${
            mobileOpen ? "mobile-panel--open" : ""
          } ${mobilePanelClosing ? "mobile-panel--closing" : ""}`}
        >
          <div className="p-4">
            <nav className="mt-4 flex flex-col gap-2 text-base">
              <Link href="/accueil" className="nav-link" onClick={() => setMobileOpen(false)}>
                Accueil
              </Link>
              <Link href="/actualites" className="nav-link" onClick={() => setMobileOpen(false)}>
                Actualités
              </Link>

              <div>
                <button
                  className="nav-link flex w-full justify-between items-center"
                  onClick={() => setMobilePartnersOpen((s) => !s)}
                  aria-expanded={mobilePartnersOpen}
                >
                  <span>Nos partenaires</span>
                  <span className="ml-2">{mobilePartnersOpen ? "–" : "+"}</span>
                </button>
                {mobilePartnersOpen && (
                  <div className="pl-3 mt-2 flex flex-col gap-1">
                    <Link href="/partenaires/essec" className="subnav-link" onClick={() => setMobileOpen(false)}>
                      Partenariat ESSEC
                    </Link>
                    <Link href="/partenaires/professionnels" className="subnav-link" onClick={() => setMobileOpen(false)}>
                      Partenaires professionnels
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/association" className="nav-link" onClick={() => setMobileOpen(false)}>
                L'association
              </Link>

              <div>
                <button
                  className="nav-link flex w-full justify-between items-center"
                  onClick={() => setMobileStudentsOpen((s) => !s)}
                  aria-expanded={mobileStudentsOpen}
                >
                  <span>Étudiants</span>
                  <span className="ml-2">{mobileStudentsOpen ? "–" : "+"}</span>
                </button>
                {mobileStudentsOpen && (
                  <div className="pl-3 mt-2 flex flex-col gap-1">
                    <Link href="/etudiants/promotions" className="subnav-link" onClick={() => setMobileOpen(false)}>
                      Promotions
                    </Link>
                    <Link href="/etudiants/que-sont-ils-devenus" className="subnav-link" onClick={() => setMobileOpen(false)}>
                      Que sont‑ils devenus
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/formation" className="nav-link" onClick={() => setMobileOpen(false)}>
                Formation
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
