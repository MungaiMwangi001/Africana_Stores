  "use client";

  import React from "react";
import CategoryDropdown from "./CategoryDropdown";
import ProductCard from "../../components/ProductCard";

interface Product {
  name: string;
  imageSrc: string;
  prices: { KES: number; USD: number; EUR: number };
  category: string;
  categoryName: string;
}

export default function ShopClient({ products }: { products: Product[] }) {
  // Group products by category
  const categories = Array.from(
    new Map(products.map(p => [p.category, p.categoryName])).entries()
  ).map(([folder, name]) => ({ folder, name }));

  return (
    <>
      <section className="relative max-w-7xl mx-auto mb-4">
        {/* Glassy background shapes */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-ochre/20 rounded-full blur-3xl z-0" />
        <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-olive/20 rounded-full blur-2xl z-0" />
        <div className="absolute top-1/2 left-1/2 w-[110vw] h-32 bg-white/10 backdrop-blur-2xl rounded-3xl -translate-x-1/2 -translate-y-1/2 border border-white/20 shadow-2xl z-0" />
        <h1 className="relative z-10 text-3xl md:text-5xl font-heading font-bold mb-10 text-center bg-gradient-to-r from-ochre via-brown to-olive bg-clip-text text-transparent drop-shadow-lg">
          Shop Our Catalogue
        </h1>
      </section>
      {/* Sticky Category Dropdown at the top */}
      <div className="sticky top-[64px] z-40 flex justify-center mb-8 bg-white/95 dark:bg-charcoal/95 backdrop-blur shadow-lg border-b border-ochre/30 py-2 px-2 sm:px-0">
        <CategoryDropdown categories={categories} />
      </div>
      <div className="space-y-20 max-w-7xl mx-auto">
        {categories.map(cat => (
          <section key={cat.folder} id={cat.folder} className="relative mb-12">
            {/* Section glassy background */}
            <div className="absolute inset-0 -z-10 bg-white/60 dark:bg-charcoal/70 backdrop-blur-xl rounded-3xl border border-white/30 dark:border-charcoal/40 shadow-xl" />
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6 text-ochre pl-2 pt-4">{cat.name}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 p-2">
              {products
                .filter(p => p.category === cat.folder)
                .map(product => (
                  <ProductCard
                    key={product.name}
                    imageSrc={product.imageSrc}
                    name={product.name}
                    prices={product.prices}
                    category={product.category}
                  />
                ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
} 