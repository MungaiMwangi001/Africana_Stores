import React from 'react';

export default function SearchBar() {
  return (
    <form className="flex items-center w-full max-w-md mx-auto mb-4">
      <input
        type="text"
        placeholder="Search products..."
        className="flex-1 px-4 py-2 rounded-l-lg border border-primary-ochre focus:outline-none"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-primary-ochre text-white rounded-r-lg font-semibold hover:bg-primary-brown transition"
      >
        Search
      </button>
    </form>
  );
} 