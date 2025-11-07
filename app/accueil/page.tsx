import Link from "next/link";

export default function Accueil() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white text-black">
      <div className="max-w-4xl p-12 text-center">
        <h1 className="text-5xl font-extrabold">Accueil</h1>
        <p className="mt-6 text-lg text-zinc-700">
          Bienvenue sur la page « Accueil ». Tu peux personnaliser cette page
          pour présenter le programme, les actualités, ou les contacts.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link href="/" className="text-sm underline">
            Retour à la page principale
          </Link>
        </div>
      </div>
    </main>
  );
}
