'use client';
import React, { useState, useEffect, useRef } from 'react';
import ProductFilter from '../../components/ProductFilter';
import EmptyState from '../../components/EmptyState';
import ProductCard from '../../components/ProductCard';

type Product = {
  name: string;
  image: string;
  imageSrc: string;
  prices: { KES: number; USD: number; EUR: number };
  category: string;
  categoryName: string;
};

type ShopClientWrapperProps = {
  products: Product[];
  categories: string[];
};

export default function ShopClientWrapper({ products, categories }: ShopClientWrapperProps) {
  const [category, setCategory] = useState('');
  const [showFilter, setShowFilter] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 100) {
        setShowFilter(true);
      } else if (currentScrollY > lastScrollY.current) {
        setShowFilter(false); // scrolling down
      } else {
        setShowFilter(true); // scrolling up
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filtering logic
  const filteredProducts = products.filter((product: Product) => {
    const matchesCategory = !category || product.categoryName === category;
    return matchesCategory;
  });

  return (
    <main id="main-content" className="min-h-screen bg-background-light text-primary-black font-body px-4 py-12">
      <div
        className={`transition-all duration-300 sticky top-0 z-30 ${showFilter ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-8 pointer-events-none'}`}
      >
        <ProductFilter categories={categories} onFilterChange={({ category }) => setCategory(category)} />
      </div>
      {filteredProducts.length === 0 ? (
        <EmptyState message="No products found." />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.name + product.category}
              imageSrc={product.imageSrc}
              name={product.name}
              prices={product.prices}
              category={product.category}
            />
          ))}
        </div>
      )}
    </main>
  );
} 