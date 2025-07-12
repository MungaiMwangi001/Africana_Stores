import type { Metadata } from 'next';

import React from 'react';
import ProductCard from '../../components/ProductCard';
import { useCurrency } from '../../lib/currencyContext';

const categories = [
  {
    name: 'Bracelets',
    folder: 'bracelet',
    images: [
      'bracelet 1.jpg',
      'bracelet 2.jpg',
      'bracelet 4.jpg',
      'bracelet 5.jpg',
      'bracelet 6.jpg',
      'bracelets 7.jpg',
      'kenyan bracelet.jpg',
      'kenyan bracelet 2.jpg',
    ],
  },
  {
    name: 'Earings',
    folder: 'earings',
    images: [
      'earings 2.jpg',
      'earribgs 2.jpg',
      'earringss1.jpg',
    ],
  },
  {
    name: 'Chokers',
    folder: 'choker',
    images: [
      'chokar 1.jpg',
      'chokar 2.jpg',
      'chokar 3.jpg',
      'chokar 4.jpg',
      'choker 12.jpg',
      'choker 5.jpg',
    ],
  },
  {
    name: 'Necklaces',
    folder: 'necklace',
    images: [
      'necklace 1.jpg',
      'necklace 3.jpg',
      'necklace2.jpg',
    ],
  },
  {
    name: 'Wedding Necklaces',
    folder: 'weddingnecklace',
    images: [
      'wedding necklace.jpg',
      'wedding necklace 2.jpg',
      'wedding necklace 3.jpg',
      'wedding necklace 4.jpg',
      'wedding necklace 5.jpg',
    ],
  },
  {
    name: 'Shukas',
    folder: 'shukas',
    images: [
      'shuka 1.jpg',
      'shuka 2.jpg',
      'shuka 3.jpg',
      'shuka 4.jpg',
      'shuka 5.jpg',
    ],
  },
  {
    name: 'Sandals',
    folder: 'sandals',
    images: [
      'sandal 2.jpg',
      'sandal 3.jpg',
      'sandal 4.jpg',
      'sandal 5.jpg',
      'sandal 6.jpg',
      'sandal 7.jpg',
      'sandal 8.jpg',
      'sandal 9.jpg',
      'sandals 1.jpg',
    ],
  },
  {
    name: 'Masks',
    folder: 'masks',
    images: [
      'mask 1.jpg',
      'mask 2.jpg',
      'mask 3.jpg',
      'mask 4.jpg',
      'mask 5.jpg',
      'mask 6.jpg',
      'mask 7.jpg',
      'mask 8.jpg',
    ],
  },
  {
    name: 'Animal Carvings',
    folder: 'carvings',
    images: [
      'animals.jpg',
      'birds.jpg',
      'bunny.jpg',
      'eagle.jpg',
      'elephant.jpg',
      'elephant 2.jpg',
      'elephant 3.jpg',
      'elephant 4.jpg',
      'fox.jpg',
      'lion.jpg',
      'lion 2.jpg',
      'rhino 1.jpg',
    ],
  },
  {
    name: 'Soap Stones',
    folder: 'soaptones',
    images: [
      'bowls.jpg',
      'calabash sopastone.jpg',
      'oval plate.jpg',
      'plate 1.jpg',
      'sopastone 1.jpg',
    ],
  },
];

function getRandomInRange(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const priceRules: Record<string, (img: string) => number> = {
  bracelet: () => 100,
  earings: () => 200,
  choker: () => getRandomInRange(1000, 2000),
  necklace: () => getRandomInRange(500, 1000),
  weddingnecklace: () => getRandomInRange(800, 1200),
  shukas: () => 1500,
  sandals: () => 500,
  masks: () => getRandomInRange(2000, 4000),
  carvings: () => getRandomInRange(2000, 6000),
  soaptones: () => getRandomInRange(500, 1500),
};

export default function Shop() {
  const { currency } = useCurrency();
  return (
    <main className="min-h-screen bg-background-light dark:bg-background-dark text-primary-black dark:text-primary-white font-body px-4 py-8">
      <section className="relative max-w-7xl mx-auto mb-12">
        {/* Glassy background shapes */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-ochre/20 rounded-full blur-3xl z-0" />
        <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-olive/20 rounded-full blur-2xl z-0" />
        <div className="absolute top-1/2 left-1/2 w-[110vw] h-32 bg-white/10 backdrop-blur-2xl rounded-3xl -translate-x-1/2 -translate-y-1/2 border border-white/20 shadow-2xl z-0" />
        <h1 className="relative z-10 text-3xl md:text-5xl font-heading font-bold mb-10 text-center bg-gradient-to-r from-ochre via-brown to-olive bg-clip-text text-transparent drop-shadow-lg">
          Shop Our Catalogue
        </h1>
        {/* Category Dropdown */}
        <div className="sticky top-[64px] z-40 flex justify-center mb-8 bg-white/90 backdrop-blur shadow-md py-2">
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
      </section>
      <div className="space-y-20 max-w-7xl mx-auto">
        {categories.map((cat) => (
          <section key={cat.folder} id={cat.folder} className="relative mb-12">
            {/* Section glassy background */}
            <div className="absolute inset-0 -z-10 bg-white/60 dark:bg-charcoal/70 backdrop-blur-xl rounded-3xl border border-white/30 dark:border-charcoal/40 shadow-xl" />
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6 text-ochre pl-2 pt-4">{cat.name}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 p-2">
              {cat.images.map((img) => {
                const basePrice = priceRules[cat.folder]?.(img) ?? 1000;
                const prices = {
                  KES: basePrice,
                  USD: basePrice * 2,
                  EUR: basePrice * 2,
                };
                return (
                  <ProductCard
                    key={img}
                    imageSrc={`/products/${cat.folder}/${img}`}
                    name={img.replace(/\.[^/.]+$/, "").replace(/_/g, ' ')}
                    prices={prices}
                    category={cat.folder}
                  />
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
} 