import Image from "next/image";
import Link from "next/link";
import styles from "./hero.module.css";

export default function Home() {
  return (
    <header
      className={`${styles.heroWrap} min-h-screen relative flex items-center justify-center text-center text-white`}
      style={{ marginTop: 'calc(var(--site-header-offset) * -1 + 28px)' }}
    >
      {/* two background layers that crossfade */}
      <div
        className={styles.bgLayer}
        style={{ backgroundImage: "url('/AdobeStock_334934288.jpeg')" }}
        aria-hidden
      />
      <div
        className={`${styles.bgLayer} ${styles.bg2}`}
        style={{ backgroundImage: "url('/AdobeStock_1317382053.jpeg')" }}
        aria-hidden
      />
      {/* solid burgundy overlay above the background images but behind content */}
      <div className={styles.overlay} aria-hidden />

      <div className="relative z-10 mx-auto w-full px-6 py-24 sm:py-32">
        <div className="flex justify-center">
          <Image src="/logo.png" alt="M214 logo" width={140} height={140} priority />
        </div>

        <h1 className="mt-8 text-5xl font-extrabold leading-tight sm:text-7xl">
          Master 2 Droit des
          <br />
          affaires – Recherche
        </h1>
  <span className="mt-4 block text-xl sm:text-3xl font-semibold opacity-95">Université Paris-Panthéon-Assas</span>

        <p className="mx-auto mt-6 max-w-3xl text-lg opacity-90">
          Bienvenue sur le site de l’Association des étudiants et alumni du Master 2 Droit des affaires de l’Université Paris Panthéon  Assas
        </p>

        <p className="mt-4 text-sm opacity-80">Un master au service de l’émergence de véritables professionnels du droit des affaires</p>

        <div className="mt-10 flex justify-center gap-4">
          <Link href="/accueil" className={styles.cta}>
            Accueil</Link>
        </div>

  <div className={`mt-10 flex justify-center ${styles.socials} text-white/90`}>
          <a href="https://www.facebook.com/m2affaires" aria-label="facebook" className="hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54V9.41c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.62.77-1.62 1.56v1.86h2.76l-.44 2.9h-2.32V22c4.78-.8 8.44-4.94 8.44-9.93z" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/master2affaires" aria-label="linkedin" className="hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.2 8.98h4.56V24H.2zM9.64 8.98h4.38v2.07h.06c.61-1.15 2.1-2.36 4.33-2.36 4.62 0 5.47 3.04 5.47 6.99V24h-4.56v-7.13c0-1.7-.03-3.89-2.37-3.89-2.37 0-2.73 1.85-2.73 3.77V24H9.64z" />
            </svg>
          </a>
          <a href="https://www.instagram.com/m2affaires" aria-label="instagram" className="hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.4.59.22 1 .48 1.44.92.44.44.7.85.92 1.44.16.46.35 1.26.4 2.43.06 1.27.07 1.65.07 4.85s-.01 3.584-.07 4.85c-.05 1.17-.24 1.97-.4 2.43-.22.59-.48 1-.92 1.44-.44.44-.85.7-1.44.92-.46.16-1.26.35-2.43.4-1.27.06-1.65.07-4.85.07s-3.584-.01-4.85-.07c-1.17-.05-1.97-.24-2.43-.4-.59-.22-1-.48-1.44-.92-.44-.44-.7-.85-.92-1.44-.16-.46-.35-1.26-.4-2.43C2.21 15.58 2.2 15.2 2.2 12s.01-3.584.07-4.85c.05-1.17.24-1.97.4-2.43.22-.59.48-1 .92-1.44.44-.44.85-.7 1.44-.92.46-.16 1.26-.35 2.43-.4C8.416 2.21 8.8 2.2 12 2.2zm0 2.2c-3.14 0-3.512.01-4.75.07-1.02.05-1.57.22-1.94.36-.49.18-.84.4-1.21.77-.37.37-.6.72-.77 1.21-.14.37-.31.92-.36 1.94C2.21 8.488 2.2 8.86 2.2 12s.01 3.512.07 4.75c.05 1.02.22 1.57.36 1.94.18.49.4.84.77 1.21.37.37.72.6 1.21.77.37.14.92.31 1.94.36 1.24.06 1.61.07 4.75.07s3.512-.01 4.75-.07c1.02-.05 1.57-.22 1.94-.36.49-.18.84-.4 1.21-.77.37-.37.6-.72.77-1.21.14-.37.31-.92.36-1.94.06-1.24.07-1.61.07-4.75s-.01-3.512-.07-4.75c-.05-1.02-.22-1.57-.36-1.94-.18-.49-.4-.84-.77-1.21-.37-.37-.72-.6-1.21-.77-.37-.14-.92-.31-1.94-.36C15.512 4.41 15.14 4.4 12 4.4zM12 7.6a4.4 4.4 0 1 1 0 8.8 4.4 4.4 0 0 1 0-8.8zm0 1.98a2.42 2.42 0 1 0 0 4.84 2.42 2.42 0 0 0 0-4.84zM17.8 6.2a1.04 1.04 0 1 1 0 2.08 1.04 1.04 0 0 1 0-2.08z" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
