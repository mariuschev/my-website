import Image from "next/image";

export default function Partenaires() {
  const partners = [
    { id: 1, name: "Cabinet A", logo: "/logo.svg" },
    { id: 2, name: "Entreprise B", logo: "/logo.svg" },
    { id: 3, name: "Organisation C", logo: "/logo.svg" },
  ];

  return (
    <main className="min-h-screen bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-4xl font-extrabold">Nos partenaires</h1>
        <p className="mt-3 text-zinc-600">Partenaires institutionnels et professionnels — logos et photos de nos élèves en leurs locaux.</p>

        <section className="mt-8 grid gap-6 sm:grid-cols-3">
          {partners.map((p) => (
            <div key={p.id} className="flex flex-col items-center gap-3 rounded border p-6">
              <Image src={p.logo} width={140} height={80} alt={`${p.name} logo`} />
              <strong>{p.name}</strong>
              <p className="text-sm text-zinc-600">Photos des élèves (anciens & nouveaux) en noir et blanc à venir.</p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
