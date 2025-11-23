"use client";

import React from "react";

const defaultPartners = [
  { src: "/logo_partners/Chammas-Marcheteau-OK.jpg", href: "https://www.lcdm.law/", alt: "Chammas Marcheteau" },
  { src: "/logo_partners/de-pardieu-brocas-maffei.jpg", href: "https://www.de-pardieu.com/", alt: "De Pardieu Brocas Maffei" },
  { src: "/logo_partners/LOGO-MONCEY-Bleu-sur-fond-blanc.jpg", href: "https://www.monceyavocats.com/fr", alt: "Moncey" },
  { src: "/logo_partners/Screenshot-2024-03-06-at-20.17.24.png", href: "https://cms.law/fr/fra/", alt: "CMS Francis Lefebvre" },
  { src: "/logo_partners/Screenshot-2024-03-06-at-20.27.20.png", href: "https://www.dlapiper.com/en-us", alt: "DLA Piper" },
];

type Partner = { src: string; href?: string; alt?: string };

export default function PartnersMarquee({ partners = defaultPartners, height = 72 }: { partners?: Partner[]; height?: number }) {
  // duplicate the array so the marquee loops seamlessly
  const items = [...partners, ...partners];

  return (
    <div className="mt-6 overflow-hidden">
      <div
        className="partners-track"
        style={{
          display: "flex",
          gap: 32,
          alignItems: "center",
          whiteSpace: "nowrap",
          animation: "marquee 18s linear infinite",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.animationPlayState = "paused";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.animationPlayState = "running";
        }}
      >
        {items.map((p, i) => (
          <div
            key={i}
            className="partner-item"
            // fixed box so very wide logos can't overflow and each logo gets equal space
            style={{ flex: "0 0 auto", display: "flex", alignItems: "center", justifyContent: "center", width: 180, height }}
          >
            <a href={p.href ?? "#"} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
              <img
                src={p.src}
                alt={p.alt ?? `Partenaire ${i + 1}`}
                // constrain each image to the box while preserving aspect ratio
                style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }}
              />
            </a>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        /* make sure the container hides overflow and centers */
        .partners-track:hover { cursor: grab; }

        /* small hover effect: logos show in full color and slightly scale */
        .partner-item img { filter: grayscale(0.18); transition: filter .22s ease, transform .22s ease; }
        .partner-item a:hover img { filter: none; transform: scale(1.03); }
      `}</style>
    </div>
  );
}
