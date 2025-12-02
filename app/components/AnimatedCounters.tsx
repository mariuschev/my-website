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

  const numberClass = "text-3xl sm:text-4xl font-semibold";

  return (
    <div ref={containerRef} className="mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 justify-items-center text-center">
        {items.map((it, idx) => (
          <div key={idx} className="bg-white border border-zinc-100 rounded-lg p-6 shadow-sm w-full sm:max-w-[360px]">
            <div className={`${numberClass} text-[#5a0f19]`}>
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
