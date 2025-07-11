import React from 'react';
import Image from 'next/image';

export const metadata = {
  title: 'Africana Stores | Authentic Kenyan Safari Decor',
  description: 'Discover handpicked, stunning pieces that bring the spirit of Africa to your home. Shop unique, artisan-crafted decor inspired by the wild beauty of Kenya.',
  openGraph: {
    title: 'Africana Stores | Authentic Kenyan Safari Decor',
    description: 'Discover handpicked, stunning pieces that bring the spirit of Africa to your home. Shop unique, artisan-crafted decor inspired by the wild beauty of Kenya.',
    url: 'https://africanastores.com/',
    siteName: 'Africana Stores',
    images: [
      {
        url: 'https://africanastores.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Africana Stores - Authentic Kenyan Safari Decor',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Africana Stores | Authentic Kenyan Safari Decor',
    description: 'Discover handpicked, stunning pieces that bring the spirit of Africa to your home. Shop unique, artisan-crafted decor inspired by the wild beauty of Kenya.',
    images: ['https://africanastores.com/og-image.jpg'],
  },
};

const categories = [
  { name: 'Bracelets', folder: 'bracelet', image: 'bracelet 1.jpg' },
  { name: 'Earings', folder: 'earings', image: 'earings 2.jpg' },
  { name: 'Chokers', folder: 'choker', image: 'chokar 1.jpg' },
  { name: 'Necklaces', folder: 'necklace', image: 'necklace 1.jpg' },
  { name: 'Wedding Necklaces', folder: 'weddingnecklace', image: 'wedding necklace.jpg' },
  { name: 'Shukas', folder: 'shukas', image: 'shuka 1.jpg' },
  { name: 'Sandals', folder: 'sandals', image: 'sandal 2.jpg' },
  { name: 'Masks', folder: 'masks', image: 'mask 1.jpg' },
  { name: 'Animal Carvings', folder: 'carvings', image: 'animals.jpg' },
  { name: 'Soap Stones', folder: 'soaptones', image: 'bowls.jpg' },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background-light dark:bg-background-dark text-primary-black dark:text-primary-white font-body">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center py-20 px-4 text-center mb-12 mt-8 mx-auto max-w-5xl overflow-hidden">
        {/* Glassmorphism background */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-ochre/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-olive/30 rounded-full blur-2xl" />
          <div className="absolute top-1/2 left-1/2 w-[120vw] h-40 bg-white/10 backdrop-blur-2xl rounded-3xl -translate-x-1/2 -translate-y-1/2 border border-white/20 shadow-2xl" />
        </div>
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4 tracking-tight bg-gradient-to-r from-ochre via-brown to-olive bg-clip-text text-transparent drop-shadow-lg">
            Experience Authentic Kenyan Safari Decor
          </h1>
          <p className="text-lg md:text-2xl font-body mb-8 max-w-2xl mx-auto text-primary-brown">
            Discover handpicked, stunning pieces that bring the spirit of Africa to your home. Shop unique, artisan-crafted decor inspired by the wild beauty of Kenya.
          </p>
          <a
            href="/shop"
            className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-ochre via-brown to-olive text-white font-heading text-xl shadow-lg ring-2 ring-ochre/40 hover:ring-olive/60 focus:outline-none focus:ring-4 focus:ring-olive/60 transition-all duration-200 animate-pulse"
            style={{ boxShadow: '0 0 32px 0 #CC7722AA' }}
          >
            Shop Now
          </a>
        </div>
        {/* Optional: Hero image with soft shadow */}
        <div className="absolute bottom-0 right-0 z-0 hidden md:block">
          <Image src="/products/bracelet/bracelet 1.jpg" alt="Hero Product" width={220} height={220} className="rounded-2xl shadow-2xl opacity-90" />
        </div>
      </section>

      {/* Featured Categories Grid */}
      <section id="shop" className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-heading font-semibold mb-8 text-brown text-center">Featured Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <a
              key={cat.folder}
              href={`/shop#${cat.folder}`}
              className="relative bg-white/60 dark:bg-charcoal/70 backdrop-blur-xl border border-white/30 dark:border-charcoal/40 rounded-2xl shadow-xl p-6 flex flex-col items-center transition-all group focus:outline-none focus:ring-2 focus:ring-ochre hover:scale-[1.03] hover:shadow-2xl hover:border-ochre/60"
              tabIndex={0}
              aria-label={`Shop ${cat.name}`}
              style={{ boxShadow: '0 4px 32px 0 #CC772220' }}
            >
              {/* Optional: African pattern overlay */}
              <div className="absolute inset-0 pointer-events-none rounded-2xl" style={{ background: 'repeating-linear-gradient(135deg, transparent, transparent 18px, #CC772210 20px, transparent 22px)' }} />
              <div className="w-full h-48 relative mb-4 z-10">
                <Image
                  src={`/products/${cat.folder}/${cat.image}`}
                  alt={cat.name}
                  fill
                  className="object-cover rounded-xl group-hover:scale-105 transition-transform duration-300 shadow-lg"
                  sizes="(max-width: 768px) 100vw, 25vw"
                  loading="lazy"
                />
              </div>
              <h3 className="font-heading text-xl mb-2 text-brown group-hover:text-olive transition-colors z-10">{cat.name}</h3>
              <p className="font-body text-brown mb-4 text-center z-10">Explore our unique {cat.name.toLowerCase()} collection.</p>
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-olive to-ochre text-white font-heading shadow hover:from-ochre hover:to-olive transition-colors z-10">
                Shop {cat.name}
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-16 mb-8 text-center">
        <div className="inline-block px-10 py-8 rounded-3xl bg-white/60 dark:bg-charcoal/80 backdrop-blur-xl shadow-2xl border border-white/30 dark:border-charcoal/40">
          <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-4 bg-gradient-to-r from-ochre via-brown to-olive bg-clip-text text-transparent">
            Bring the Adventure Home
          </h2>
          <p className="text-lg font-body mb-6 max-w-xl mx-auto text-primary-brown/90">
            Shop our exclusive collection and let your space tell a story of wild beauty, vibrant culture, and unforgettable journeys.
          </p>
          <a
            href="/shop"
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-olive to-ochre text-white font-heading text-lg shadow-lg hover:from-ochre hover:to-olive focus:outline-none focus:ring-2 focus:ring-ochre focus:ring-offset-2 transition-all"
          >
            Explore the Collection
          </a>
        </div>
      </section>
    </main>
  );
}