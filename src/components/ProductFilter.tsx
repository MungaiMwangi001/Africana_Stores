import React from 'react';

type ProductFilterProps = {
  categories: string[];
  onFilterChange: (filters: { category: string }) => void;
};

export default function ProductFilter({ categories, onFilterChange }: ProductFilterProps) {
  return (
    <form className="flex gap-4 mb-6 items-end sticky top-0 z-30 bg-background-light py-4 px-2 border-b border-primary-ochre shadow-sm">
      <div>
        <label className="block text-primary-brown mb-1">Category</label>
        <select className="px-3 py-2 border rounded" onChange={e => onFilterChange({ category: e.target.value })}>
          <option value="">All</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
    </form>
  );
} 