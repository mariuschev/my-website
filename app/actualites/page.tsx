import { allura } from "../layout"; // 🔥 Import obligatoire

export default function Actualites() {
  const events = [
    {
      id: 1,
      title: "Cérémonie de remise des diplômes",
      date: "12 Juin 2025",
      description:
        "Moment de célébration réunissant étudiants, professeurs et alumni du Master.",
      image: "./photos_actualites/exemple.jpg",
    },
    {
      id: 2,
      title: "Visite d'entreprise – Cabinet X",
      date: "22 Mars 2025",
      description:
        "Découverte des métiers du droit des affaires au sein d’un grand cabinet parisien.",
      image: "./photos_actualites/exemple.jpg",
    },
    {
      id: 3,
      title: "Rassemblement des anciens élèves",
      date: "10 Novembre 2024",
      description:
        "Retrouvailles inter-promotions autour d’un cocktail organisé à Paris.",
      image: "./photos_actualites/exemple.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-white py-24">
      <div className="mx-auto max-w-7xl px-8">
        
        {/* Titre calligraphique */}
        <div className="text-center mb-20">
          <h1
            className={`${allura.className} text-7xl text-[#5a0f19] drop-shadow-sm`}
          >
            Actualités du Master
          </h1>

          <p className="mt-6 text-lg text-zinc-700 font-light tracking-wide">
            Suivez les temps forts, événements et moments marquants du Master 2 Droit des affaires.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-zinc-200">

          {/* Ligne vin */}
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#5a0f19] opacity-60 animate-pulse"></div>

          {events.map((event) => (
            <div key={event.id} className="relative pl-12 mb-20">

              {/* Pastille */}
              <div className="absolute -left-[10px] top-2 w-5 h-5 bg-white border-[3px] border-[#5a0f19] rounded-full shadow-sm"></div>

              {/* CARD agrandie */}
              <div
                className="bg-white border border-zinc-100 shadow-md 
                           hover:shadow-xl transition-all duration-300 
                           rounded-2xl p-12 flex gap-10 items-start"
              >

                {/* IMAGE sur la gauche */}
                <div className="w-72 h-48 flex-shrink-0 rounded-xl overflow-hidden border border-zinc-200 shadow-sm">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* CONTENU */}
                <div className="flex-1">
                  <div className="inline-block bg-[#5a0f19] text-white text-xs font-semibold px-4 py-1 rounded-full shadow-sm">
                    {event.date}
                  </div>

                  <h2 className="mt-5 text-3xl font-semibold text-black">
                    {event.title}
                  </h2>

                  <p className="mt-4 text-zinc-700 leading-relaxed text-lg">
                    {event.description}
                  </p>

                  <button className="mt-6 text-sm font-medium text-[#5a0f19] hover:underline">
                    En savoir plus →
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
