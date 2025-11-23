"use client";

import React, { useState } from "react";

export default function ExpandableText({ summary, full }: { summary: string; full: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <p className="text-zinc-700 leading-relaxed">{summary}</p>
      {open && <div className="mt-4 text-zinc-700 leading-relaxed whitespace-pre-line">{full}</div>}
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        className="mt-4 inline-flex items-center gap-2 text-[#5a0f19] font-semibold"
      >
        {open ? "Voir moins" : "Lire la suite"}
      </button>
    </div>
  );
}
