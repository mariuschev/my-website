"use client";

import { useState } from "react";

type Props = {
  query?: string;
  lat?: number;
  lng?: number;
  zoom?: number;
  height?: number | string;
};

export default function GoogleMapEmbed({
  query,
  lat = 48.846,
  lng = 2.346,
  zoom = 16,
  height = 360,
}: Props) {
  const [active, setActive] = useState(false);

  const src = query
    ? `https://www.google.com/maps?q=${encodeURIComponent(query)}&z=${zoom}&output=embed`
    : `https://www.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`;

  return (
    <div
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      tabIndex={0}
      style={{ position: "relative", width: "100%", height: typeof height === "number" ? `${height}px` : height }}
      aria-label="Carte Google Maps intégrée — survolez pour activer"
    >
      {!active && (
        <div
          style={{
            position: "absolute",
            inset: 12,
            zIndex: 5,
            pointerEvents: "none",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.9)",
              color: "#222",
              fontSize: 12,
              padding: "6px 8px",
              borderRadius: 8,
              boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
            }}
          >
            Survolez la carte pour activer le zoom
          </div>
        </div>
      )}

      <iframe
        title="Carte — Université Paris II Panthéon‑Assas"
        src={src}
        width="100%"
        height={typeof height === "number" ? `${height}px` : height}
        style={{ border: 0, pointerEvents: active ? "auto" : "none" }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
