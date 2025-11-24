import Image from "next/image";
import { allura } from "../lib/fonts";

export default function Association() {
  return (
    <main className="min-h-screen bg-white py-24">
      <div className="mx-auto max-w-screen-xl px-8">
        <div className="text-left mb-8">
          <h1 className={`${allura.className} text-5xl text-[#590707] drop-shadow-sm`}>L'association</h1>
          <p className="mt-3 text-lg text-zinc-700 font-light tracking-wide">Présentation de l'équipe du bureau et de ses missions.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white border border-zinc-100 rounded-2xl overflow-hidden shadow-md">
              <div className="w-full h-64 md:h-80 relative bg-gray-100">
                <Image src="/photos_actualites/promotions/exemple.jpg" alt="Photo du bureau" fill className="object-cover" sizes="100vw" />
              </div>

              <div className="p-8">
                <h2 className="text-2xl font-semibold text-black">Mot des co-présidentes</h2>
                <div className="mt-4 text-zinc-700 leading-relaxed text-lg space-y-4">
                  <p>
                    « En tant que co-présidentes, nous avons à cœur de renforcer les liens entre les étudiants, les
                    anciens et les partenaires professionnels. Notre objectif cette année est d'animer le réseau,
                    d'organiser des rencontres professionnelles qualitatives et d'accompagner chacun dans son
                    projet professionnel. »
                  </p>

                  <p>
                    L'association vise à soutenir les étudiants du Master 2 — faciliter les stages, créer des
                    événements d'échanges, promouvoir les initiatives étudiantes et entretenir la relation avec les
                    alumni.
                  </p>

                  <p className="mt-4 font-semibold">— Les co‑présidentes</p>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-6">
              

              <h3 className="text-2xl font-semibold text-[#590707]">Nos fonctions et rôles</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <article className="bg-white border border-zinc-100 rounded-2xl p-6 shadow-sm flex flex-col">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-[#590707] to-[#A30404] text-white font-bold">C</div>
                    <div>
                      <h4 className="text-lg font-semibold text-[#590707]">Communication</h4>
                      <p className="text-zinc-700 mt-1">Gestion des réseaux, identité visuelle et mise à jour du site.</p>
                    </div>
                  </div>
                  <ul className="mt-4 text-zinc-600 space-y-2 list-disc list-inside">
                    <li>Création de visuels et contenus</li>
                    <li>Animation des réseaux sociaux</li>
                    <li>Maintenance du site web</li>
                  </ul>
                </article>

                <article className="bg-white border border-zinc-100 rounded-2xl p-6 shadow-sm flex flex-col">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#CDC7BD] text-[#590707] font-bold">E</div>
                    <div>
                      <h4 className="text-lg font-semibold text-[#590707]">Événements</h4>
                      <p className="text-zinc-700 mt-1">Organisation de conférences, rencontres entreprises et cérémonies.</p>
                    </div>
                  </div>
                  <ul className="mt-4 text-zinc-600 space-y-2 list-disc list-inside">
                    <li>Planification logistique</li>
                    <li>Relation intervenants et partenaires</li>
                    <li>Accueil et communication événementielle</li>
                  </ul>
                </article>

                <article className="bg-white border border-zinc-100 rounded-2xl p-6 shadow-sm flex flex-col">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-[#A30404] to-[#590707] text-white font-bold">P</div>
                    <div>
                      <h4 className="text-lg font-semibold text-[#590707]">Partenariats</h4>
                      <p className="text-zinc-700 mt-1">Développement des relations entreprises et opportunités de stages.</p>
                    </div>
                  </div>
                  <ul className="mt-4 text-zinc-600 space-y-2 list-disc list-inside">
                    <li>Prospection et suivi partenaires</li>
                    <li>Négociation de sponsoring</li>
                    <li>Mise en relation étudiants/entreprises</li>
                  </ul>
                </article>

                <article className="bg-white border border-zinc-100 rounded-2xl p-6 shadow-sm flex flex-col">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#CDC7BD] text-[#590707] font-bold">A</div>
                    <div>
                      <h4 className="text-lg font-semibold text-[#590707]">Alumni</h4>
                      <p className="text-zinc-700 mt-1">Animation du réseau des anciens et suivi des parcours professionnels.</p>
                    </div>
                  </div>
                  <ul className="mt-4 text-zinc-600 space-y-2 list-disc list-inside">
                    <li>Organisation de rencontres alumni</li>
                    <li>Mise à jour des annuaires</li>
                    <li>Soutien carrière et mentorat</li>
                  </ul>
                </article>
              </div>

              <div className="bg-white border border-zinc-100 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-[#590707]">Nos objectifs</h3>
                <p className="text-zinc-700 mt-2">Des objectifs clairs, mesurables et orientés vers l'action pour cette année :</p>

                <ol className="mt-6 space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="flex-none w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-[#590707] to-[#A30404] text-white font-bold">1</div>
                    <div>
                      <h4 className="font-semibold text-black">Renforcer le lien école‑entreprise</h4>
                      <p className="text-zinc-700">Multiplier les opportunités de stages et faciliter l'accueil de nos étudiants en entreprises.</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="flex-none w-10 h-10 rounded-full flex items-center justify-center bg-[#CDC7BD] text-[#590707] font-bold">2</div>
                    <div>
                      <h4 className="font-semibold text-black">Des événements professionnalisants</h4>
                      <p className="text-zinc-700">Concevoir des rencontres ciblées, ateliers CV/entretiens et conférences métier.</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="flex-none w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-[#A30404] to-[#590707] text-white font-bold">3</div>
                    <div>
                      <h4 className="font-semibold text-black">Développer un réseau alumni actif</h4>
                      <p className="text-zinc-700">Favoriser le mentorat, la transmission d'opportunités et le partage d'expériences.</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <aside className="col-span-1">
            <div className="sticky top-24 bg-white border border-zinc-100 p-6 rounded-2xl shadow-md">
              <h4 className="text-base font-semibold text-zinc-800">Contact</h4>
              <p className="text-sm text-zinc-500 mt-2">Besoin d'information sur l'association, partenariat ou recrutement ?</p>
              <div className="mt-4">
                <a href="mailto:m2daf@gmail.com" className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#590707] text-[#590707] hover:bg-[#590707] hover:text-white transition">Contactez‑nous</a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
