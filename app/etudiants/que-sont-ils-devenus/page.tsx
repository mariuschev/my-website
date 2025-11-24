import Image from "next/image";
import { allura } from "../../lib/fonts";

const alumni = [
  { name: "Marie Lefevre", title: "Avocate associée", desc: "Spécialisée en fusions‑acquisitions.", photo: "/photos_actualites/alumni/exemple.png" },
  { name: "Thomas Girard", title: "Juriste d'entreprise", desc: "En charge de la conformité et contrats internationaux.", photo: "/photos_actualites/alumni/exemple.png" },
  { name: "Camille Dubois", title: "Doctorante", desc: "Recherche en droit des affaires et nouvelles technologies.", photo: "/photos_actualites/alumni/exemple.png" },
  { name: "Lucas Martin", title: "Consultant", desc: "Conseil en stratégie juridique pour les start‑ups.", photo: "/photos_actualites/alumni/exemple.png" },
  { name: "Inès Moreau", title: "Magistrate", desc: "Auditrice au sein d'une juridiction administrative.", photo: "/photos_actualites/alumni/exemple.png" },
  { name: "Antoine Bernard", title: "Entrepreneur", desc: "Fondateur d'une legaltech spécialisée en contrats intelligents.", photo: "/photos_actualites/alumni/exemple.png" },
];

export default function AlumniFollowupPage() {
  return (
    <main className="min-h-screen bg-white py-24">
      <div className="mx-auto max-w-screen-xl px-8">
        <div className="text-left mb-8">
          <h1 className={`${allura.className} text-5xl text-[#590707] drop-shadow-sm`}>Que sont‑ils devenus ?</h1>
          <p className="mt-3 text-lg text-zinc-700 font-light tracking-wide">Suivi des alumni — parcours professionnels, témoignages et contacts.</p>
        </div>

        <div className="flex items-center justify-between mb-8 gap-6">
          <p className="text-zinc-600">Retrouvez ci‑dessous quelques anciens et si vous faites partie du réseau, ajoutez‑vous :</p>

          <div className="flex-shrink-0">
            <a
              href="https://docs.google.com/forms/d/e/FORM_ID/viewform"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-full font-medium shadow-sm border border-[#590707] text-[#590707] bg-white hover:bg-[#F7EDED] transition"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="opacity-90">
                <circle cx="12" cy="12" r="10" stroke="#590707" strokeWidth="1.5" />
                <path d="M12 8v8M8 12h8" stroke="#590707" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Inscrivez‑vous au réseau alumni
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {alumni.map((a) => (
            <article key={a.name} className="bg-white border border-zinc-100 rounded-2xl overflow-hidden shadow-md">
              <div className="w-full h-56 md:h-64 relative">
                <Image src={a.photo} alt={a.name} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" />
              </div>

              <div className="p-6">
                <div className="h-1 w-24 bg-gradient-to-r from-[#590707] to-[#A30404] rounded mb-4" />
                <h3 className="text-2xl font-semibold text-[#590707]">{a.name}</h3>
                <div className="text-sm text-[#A30404] font-medium mt-1">{a.title}</div>
                <p className="mt-3 text-zinc-700">{a.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
