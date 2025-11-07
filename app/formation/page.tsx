import Image from "next/image";

export default function Formation() {
  const profs = [
    { id: 1, name: "Pr. Cohen", photo: "/logo.svg" },
    { id: 2, name: "Pr. Durand", photo: "/logo.svg" },
    { id: 3, name: "Pr. Lévy", photo: "/logo.svg" },
  ];

  const mineurs = ["Droit fiscal", "Droit des sociétés", "Droit social", "Droit de la concurrence"];

  return (
    <main className="min-h-screen bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-4xl font-extrabold">Formation</h1>
        <p className="mt-3 text-zinc-600">Informations sur le Master, le mémoire et les enseignants.</p>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold">Mot du Pr. Cohen</h2>
          <blockquote className="mt-4 border-l-4 border-zinc-200 pl-4 italic text-zinc-700">
            « Le Master 2 Droit des affaires offre des débouchés variés en cabinet, entreprises et fonctions publiques. Un mémoire est demandé en fin d'année : il vise à développer une capacité d'analyse et de recherche appliquée. »
          </blockquote>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold">Enseignants</h2>
          <p className="mt-3 text-zinc-600">Photos des professeurs intervenant en fondamentaux.</p>
          <div className="mt-4 grid gap-6 sm:grid-cols-3">
            {profs.map((p) => (
              <div key={p.id} className="rounded border p-4 text-center">
                <Image src={p.photo} width={160} height={120} alt={p.name} />
                <div className="mt-3 font-medium">{p.name}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold">Mineurs</h2>
          <ul className="mt-3 list-disc pl-6 text-zinc-700">
            {mineurs.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
