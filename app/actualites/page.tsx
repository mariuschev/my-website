"use client";
import React, { useState } from "react";
import { allura } from "../lib/fonts"; // shared font (avoid importing layout)

export default function Actualites() {
  const [openImage, setOpenImage] = useState<string | null>(null);
  const events = [
    {
      id: 1,
      title: "Cérémonie de remise des diplômes",
      date: "12 Juin 2025",
      description:
        "Le moment de célébration réunissant étudiants, professeurs et alumni du Master représente bien plus qu'une simple formalité institutionnelle : c'est un temps fort qui cristallise l'essence même de la vie universitaire et de sa dimension communautaire. Ces retrouvailles constituent un pont temporel unique où se rencontrent trois générations académiques, chacune apportant sa perspective et son vécu. Les étudiants actuels, portés par l'énergie de leurs projets en cours et l'excitation de leurs découvertes récentes, côtoient leurs professeurs dans un cadre plus détendu que les salles de classe habituelles, permettant des échanges authentiques et approfondis. Les alumni, revenus sur les lieux de leur formation, incarnent la promesse d'un avenir professionnel réussi et partagent généreusement leurs expériences, leurs parcours parfois sinueux, leurs réussites mais aussi leurs échecs formateurs. Ces moments d'échanges informels autour d'un buffet ou lors de discours inspirants créent un réseau invisible mais puissant de solidarité intergénérationnelle. Les conversations qui s'y nouent dépassent souvent le cadre strictement académique pour aborder les défis concrets du monde professionnel, les stratégies de carrière, mais aussi les doutes et les questionnements qui accompagnent toute transition. C'est également l'occasion pour le corps professoral de mesurer l'impact réel de leur enseignement à travers les témoignages de leurs anciens étudiants devenus professionnels accomplis. Cette célébration nourrit ainsi le sentiment d'appartenance à une communauté pérenne qui transcende la durée limitée du cursus universitaire, rappelant à chacun qu'un Master n'est pas seulement un diplôme obtenu, mais une identité partagée qui perdure et se renforce au fil des années.",
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
                <div
                  className="w-72 h-48 flex-shrink-0 rounded-xl overflow-hidden border border-zinc-200 shadow-sm hover:scale-105 transform transition-all duration-300 cursor-pointer"
                  onClick={() => setOpenImage(event.image)}
                >
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

                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
      {openImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpenImage(null)}
          ></div>

          <div className="relative z-10 max-w-4xl max-h-[90vh] p-4">
            <button
              aria-label="Fermer"
              className="absolute -top-2 -right-2 text-white text-3xl bg-black/30 rounded-full w-10 h-10 flex items-center justify-center"
              onClick={() => setOpenImage(null)}
            >
              ×
            </button>

            <div className="rounded-lg overflow-hidden bg-white">
              <img
                src={openImage}
                alt="Agrandie"
                className="w-full h-auto object-contain max-h-[80vh]"
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
