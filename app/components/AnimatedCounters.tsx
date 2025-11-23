"use client";

import { useEffect, useRef, useState } from "react";

type Item = { label: string; value: number; suffix?: string };

export default function AnimatedCounters({ items }: { items: Item[] }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState<number[]>(() => items.map(() => 0));

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.2 }
    );
    io.observe(el);

    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    const duration = 1200; // ms
    const start = performance.now();
    const from = items.map(() => 0);
    const to = items.map((it) => it.value);

    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; // simple ease
      const next = to.map((val, i) => Math.round(from[i] + (val - from[i]) * eased));
      setCurrent(next);
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible, items]);

  const count = items.length;

  // responsive grid style: center counters if 1 or 2 items, otherwise distribute
  const gridStyle: React.CSSProperties =
    count === 1
      ? { gridTemplateColumns: "1fr", justifyContent: "center", maxWidth: 720, margin: "0 auto" }
      : count === 2
      ? { gridTemplateColumns: "repeat(2, minmax(220px, 360px))", justifyContent: "center", gap: 16, margin: "0 auto" }
      : { gridTemplateColumns: "repeat(3, minmax(0, 1fr))" };

  const numberClass = count === 2 ? "text-4xl" : "text-3xl";

  return (
    <div ref={containerRef} className="mt-8">
      <div className="grid gap-4 text-center" style={gridStyle}>
        {items.map((it, idx) => (
          <div key={idx} className="bg-white border border-zinc-100 rounded-lg p-6 shadow-sm">
            <div className={`${numberClass} font-semibold text-[#5a0f19]`}>
              {current[idx]}
              {it.suffix ?? ""}
            </div>
            <div className="mt-2 text-sm text-zinc-700">{it.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
