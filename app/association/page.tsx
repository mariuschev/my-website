import Image from "next/image";

export default function Association() {
  return (
    <main className="min-h-screen bg-white py-16">
      <div className="mx-auto max-w-5xl px-6">
        <h1 className="text-4xl font-extrabold">L'association</h1>
        <p className="mt-3 text-zinc-600">Présentation de l'équipe du bureau et de ses missions.</p>

        <section className="mt-8 grid gap-8 sm:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">Le bureau</h2>
            <div className="mt-4 flex items-start gap-6">
              <Image src="/logo.svg" width={220} height={140} alt="photo du bureau" />
              <p className="text-zinc-700">Photo du bureau (année en cours). À remplacer par la photo réelle de l'équipe.</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Mot des co-présidentes</h2>
            <p className="mt-4 text-zinc-700">Un mot des co-présidentes sur le master, l'association et les objectifs du bureau pour l'année (ex : animer le réseau, organiser des événements, faciliter les stages).</p>

            <h3 className="mt-6 text-xl font-semibold">Pôles et rôles</h3>
            <ul className="mt-3 space-y-2 text-zinc-700">
              <li><strong>Communication :</strong> gestion des réseaux, design et site web.</li>
              <li><strong>Événements :</strong> organisation des conférences, visites et cérémonies.</li>
              <li><strong>Partenariats :</strong> relations entreprises et stages.</li>
              <li><strong>Alumni :</strong> animation du réseau des anciens.</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
