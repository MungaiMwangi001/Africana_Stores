"use client";
import React from "react";

export default function CategoryDropdown({ categories }: { categories: { name: string; folder: string }[] }) {
  return (
    <div className="sticky top-[64px] z-40 flex justify-center mb-8 bg-white/95 dark:bg-charcoal/95 backdrop-blur shadow-lg border-b border-ochre/30 py-2 px-2 sm:px-0">
      <select
        className="px-4 py-2 rounded-full border border-ochre bg-white text-primary-brown font-heading shadow focus:outline-none focus:ring-2 focus:ring-ochre transition-all"
        defaultValue=""
        aria-label="Jump to category"
        onChange={e => {
          const id = e.target.value;
          if (id) {
            const el = document.getElementById(id);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }
        }}
      >
        <option value="" disabled>Jump to a category...</option>
        {categories.map(cat => (
          <option key={cat.folder} value={cat.folder}>{cat.name}</option>
        ))}
      </select>
    </div>
  );
} 