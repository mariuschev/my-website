import Image from "next/image";

export default function Etudiants() {
  const promo = [
    { id: 1, name: "Alice Dupont", role: "Présidente" },
    { id: 2, name: "Marc Durand", role: "Trésorier" },
    { id: 3, name: "Sophie Martin", role: "Secrétaire" },
  ];

  const anciens = [
    { id: 1, name: "Julien L.", year: 2019 },
    { id: 2, name: "Laura R.", year: 2020 },
    { id: 3, name: "Karim S.", year: 2021 },
  ];

  return (
    <main className="min-h-screen bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-4xl font-extrabold">Étudiants</h1>
        <p className="mt-3 text-zinc-600">Présentation de la promotion en cours et rubriques pour les anciens et photos des promotions précédentes.</p>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold">Promotion 2025</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {promo.map((s) => (
              <div key={s.id} className="rounded border p-4 text-center">
                <Image src="/logo.svg" width={120} height={120} alt={s.name} />
                <div className="mt-3 font-medium">{s.name}</div>
                <div className="text-sm text-zinc-600">{s.role}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Que sont-ils devenus ?</h2>
          <p className="mt-3 text-zinc-600">Courtes fiches présentant quelques anciens étudiants.</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {anciens.map((a) => (
              <div key={a.id} className="rounded border p-4">
                <div className="font-semibold">{a.name}</div>
                <div className="text-sm text-zinc-600">Promotion {a.year}</div>
                <p className="mt-2 text-sm">Poste actuel / entreprise — courte description.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Photos des promotions précédentes</h2>
          <p className="mt-3 text-zinc-600">Galerie à venir — vous pouvez ajouter ici des albums par année.</p>
        </section>
      </div>
    </main>
  );
}
