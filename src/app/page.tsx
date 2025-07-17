import React from 'react';
import Image from 'next/image';
import NewsletterSignup from '../components/NewsletterSignup';
import LiveChatWidget from '../components/LiveChatWidget';
import SkipToContent from '../components/SkipToContent';
import Link from 'next/link';

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
    <>
      <SkipToContent />
      <main id="main-content" className="min-h-screen bg-background-light dark:bg-background-dark text-primary-black dark:text-primary-white font-body">
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center py-20 px-4 text-center mb-12 mt-8 mx-auto max-w-5xl overflow-hidden">
          {/* Glassmorphism background */}
          <div className="absolute inset-0 z-0 flex items-center justify-center">
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-ochre/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-olive/30 rounded-full blur-2xl" />
            <div className="absolute top-1/2 left-1/2 w-[120vw] h-40 bg-white/10 backdrop-blur-2xl rounded-3xl -translate-x-1/2 -translate-y-1/2 border border-white/20 shadow-2xl" />
          </div>
          <div className="relative z-10 flex flex-col items-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-heading font-bold mb-4 tracking-tight bg-gradient-to-r from-ochre via-brown to-olive bg-clip-text text-transparent drop-shadow-lg">
              Experience Authentic Kenyan Safari Decor
            </h1>
            <p className="text-base sm:text-lg md:text-2xl font-body mb-8 max-w-2xl mx-auto text-charcoal dark:text-primary-white">
              Discover handpicked, stunning pieces that bring the spirit of Africa to your home. Shop unique, artisan-crafted decor inspired by the wild beauty of Kenya.
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-12 sm:px-16 py-5 sm:py-6 rounded-full bg-gradient-to-r from-ochre via-brown to-olive text-white font-heading text-2xl sm:text-3xl font-bold shadow-2xl ring-4 ring-ochre/60 hover:ring-olive/80 focus:outline-none focus:ring-8 focus:ring-olive/80 transition-all duration-200 animate-bounce"
              style={{ boxShadow: '0 0 32px 8px #CC7722cc, 0 0 64px 16px #5D4037aa' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7 text-white drop-shadow-md">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25A3.75 3.75 0 0011.25 18h1.5a3.75 3.75 0 003.75-3.75V6.75m-9 7.5V6.75m0 0L4.125 5.272A1.125 1.125 0 013.75 4.5H2.25m5.25 2.25h9.75m0 0l1.125 1.478c.18.236.375.522.375.772v7.5A3.75 3.75 0 0116.5 18h-1.5a3.75 3.75 0 01-3.75-3.75V6.75z" />
              </svg>
              Shop Now
            </Link>
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
              <Link
                key={cat.folder}
                href={`/shop#${cat.folder}`}
                className="relative bg-white/60 dark:bg-charcoal/70 backdrop-blur-xl border border-white/30 dark:border-charcoal/40 rounded-2xl shadow-xl p-6 flex flex-col items-center transition-all group focus:outline-none focus:ring-2 focus:ring-ochre hover:scale-[1.03] hover:shadow-2xl hover:border-ochre/60"
                tabIndex={0}
                aria-label={`Shop ${cat.name}`}
                style={{ boxShadow: '0 4px 32px 0 #CC772220' }}
              >
                {/* Optional: African pattern overlay */}
                <div className="absolute inset-0 pointer-events-none rounded-2xl hidden sm:block" style={{ background: 'repeating-linear-gradient(135deg, transparent, transparent 18px, #CC772210 20px, transparent 22px)' }} />
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
                <h3 className="font-heading text-xl mb-2 text-charcoal dark:text-primary-white group-hover:text-olive transition-colors z-10">{cat.name}</h3>
                <p className="font-body text-charcoal dark:text-primary-white mb-4 text-center z-10">Explore our unique {cat.name.toLowerCase()} collection.</p>
                <span
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/95 dark:bg-charcoal/95 backdrop-blur border border-ochre/30 shadow-lg text-primary-brown font-heading text-lg font-semibold hover:bg-gradient-to-r hover:from-ochre hover:to-olive hover:text-white transition-all duration-200 z-10 animate-pulse"
                  style={{ boxShadow: '0 0 16px 0 #CC772288' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 mr-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25A3.75 3.75 0 0011.25 18h1.5a3.75 3.75 0 003.75-3.75V6.75m-9 7.5V6.75m0 0L4.125 5.272A1.125 1.125 0 013.75 4.5H2.25m5.25 2.25h9.75m0 0l1.125 1.478c.18.236.375.522.375.772v7.5A3.75 3.75 0 0116.5 18h-1.5a3.75 3.75 0 01-3.75-3.75V6.75z" />
                  </svg>
                  Shop {cat.name}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-16 mb-8 text-center">
          <div className="inline-block px-10 py-8 rounded-3xl bg-white/60 dark:bg-charcoal/80 backdrop-blur-xl shadow-2xl border border-white/30 dark:border-charcoal/40">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-4 bg-gradient-to-r from-ochre via-brown to-olive bg-clip-text text-transparent drop-shadow-sm">
              Bring the Adventure Home
            </h2>
            <p className="text-lg font-body mb-6 max-w-xl mx-auto text-charcoal dark:text-primary-white/90">
              Shop our exclusive collection and let your space tell a story of wild beauty, vibrant culture, and unforgettable journeys.
            </p>
            <Link
              href="/shop"
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-olive to-ochre text-white font-heading text-lg shadow-lg hover:from-ochre hover:to-olive focus:outline-none focus:ring-2 focus:ring-ochre focus:ring-offset-2 transition-all"
            >
              Explore the Collection
            </Link>
          </div>
        </section>
        <NewsletterSignup />
      </main>
      <LiveChatWidget />
    </>
  );
}