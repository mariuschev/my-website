"use client";

import React, { useEffect, useRef, useState } from "react";

type Partner = { src: string; name: string; description: string; href?: string };

export default function PartnerGrid({ partners }: { partners: Partner[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {partners.map((p, i) => (
        <PartnerCard key={i} partner={p} index={i} />
      ))}
    </div>
  );
}

function PartnerCard({ partner, index }: { partner: Partner; index: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  const baseDelay = 100; // ms per index for stagger
  const hiddenX = 0;

  const transformStyle = visible ? "translateY(0)" : `translateY(18px)`;

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * baseDelay}ms`, transform: transformStyle, opacity: visible ? 1 : 0 }}
      className={`partner-card bg-white border border-zinc-100 rounded-2xl p-6 shadow-md transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-2xl`}
    >
      <a
        href={partner.href ?? `https://www.google.com/search?q=${encodeURIComponent(partner.name)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center text-center gap-4"
      >
        <div className="w-28 h-28 flex-shrink-0 flex items-center justify-center rounded-md overflow-hidden bg-white border border-zinc-200">
          <img src={partner.src} alt={partner.name} className="max-w-full max-h-full object-contain" />
        </div>

        <div>
          <div className="text-lg font-semibold text-black">{partner.name}</div>
          <p className="mt-2 text-sm text-zinc-700 leading-relaxed">{partner.description}</p>
        </div>
      </a>
    </div>
  );
}
