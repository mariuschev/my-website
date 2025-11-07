export default function Actualites() {
  const events = [
    { id: 1, title: "Cérémonie de remise des diplômes", date: "2025-06-12" },
    { id: 2, title: "Visite d'entreprise - Cabinet X", date: "2025-03-22" },
    { id: 3, title: "Rassemblement des anciens élèves", date: "2024-11-10" },
  ];

  return (
    <main className="min-h-screen bg-white py-16">
      <div className="mx-auto max-w-5xl px-6">
        <h1 className="text-4xl font-extrabold">Actualités</h1>
        <p className="mt-3 text-zinc-600">Retrouvez ici tous les événements du Master (cérémonies, visites, rencontres...)</p>

        <section className="mt-8 grid gap-6 sm:grid-cols-2">
          {events.map((e) => (
            <article key={e.id} className="rounded border p-6">
              <h2 className="text-xl font-semibold">{e.title}</h2>
              <time className="mt-2 block text-sm text-zinc-500">{e.date}</time>
              <p className="mt-3 text-sm text-zinc-700">Description courte de l'événement. Ajoute ici le lieu, l'heure et un lien d'inscription si nécessaire.</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
