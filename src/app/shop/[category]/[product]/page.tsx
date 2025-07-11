"use client";
import type { Metadata } from 'next';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { useCurrency } from '../../../../lib/currencyContext';

// Hardcoded category images (should match shop/page.tsx)
const categoryImages: Record<string, string[]> = {
  bows: [
    'bow and arrow.jpg',
    'bow and arrow 2.jpg',
    'bow and arrow 3.jpg',
    'bow and arrow 4.jpg',
    'bow and arrow 5.jpg',
    'rungus.jpg',
  ],
  bracelet: [
    'bracelet 1.jpg',
    'bracelet 2.jpg',
    'bracelet 4.jpg',
    'bracelet 5.jpg',
    'bracelet 6.jpg',
    'bracelets 7.jpg',
    'kenyan bracelet.jpg',
    'kenyan bracelet 2.jpg',
  ],
  carvings: [
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
  choker: [
    'chokar 1.jpg',
    'chokar 2.jpg',
    'chokar 3.jpg',
    'chokar 4.jpg',
    'choker 12.jpg',
    'choker 5.jpg',
  ],
  earings: [
    'earings 2.jpg',
    'earribgs 2.jpg',
    'earringss1.jpg',
  ],
  kiondos: [
    'kiondo 1.jpg',
    'kiondo 2.jpg',
    'kiondo 3.jpg',
    'kiondo 4.jpg',
    'kiondo 5.jpg',
    'kiondo 6.jpg',
    'kiondo 7.jpg',
    'kiondo 8.jpg',
    'kiondo 9.jpg',
    'kiondo 10.jpg',
  ],
  // Add other categories as needed
};

function toProductFilename(slug: string) {
  // Convert slug back to filename (replace dashes with spaces, add .jpg)
  return decodeURIComponent(slug).replace(/-/g, ' ') + '.jpg';
}

export async function generateMetadata({ params }: { params: { category: string; product: string } }): Promise<Metadata> {
  const category = params.category;
  const product = params.product;
  const displayName = decodeURIComponent(product).replace(/-/g, ' ');
  const imageUrl = `/products/${category}/${decodeURIComponent(product).replace(/-/g, ' ')}.jpg`;
  const siteUrl = 'https://africanastores.com';
  return {
    title: `${displayName} | Africana Stores`,
    description: `Shop the ${displayName} from our authentic Kenyan safari decor collection. Handcrafted, unique, and inspired by Africa.`,
    openGraph: {
      title: `${displayName} | Africana Stores`,
      description: `Shop the ${displayName} from our authentic Kenyan safari decor collection. Handcrafted, unique, and inspired by Africa.`,
      url: `${siteUrl}/shop/${category}/${product}`,
      siteName: 'Africana Stores',
      images: [
        {
          url: `${siteUrl}${imageUrl}`,
          width: 800,
          height: 800,
          alt: `${displayName} - Africana Stores`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${displayName} | Africana Stores`,
      description: `Shop the ${displayName} from our authentic Kenyan safari decor collection. Handcrafted, unique, and inspired by Africa.`,
      images: [`${siteUrl}${imageUrl}`],
    },
  };
}

export default function ProductPage({ params }: { params: { category: string; product: string } }) {
  const { category, product } = params;
  const images = categoryImages[category] || [];
  const mainImageFilename = toProductFilename(product);
  const [mainImage, setMainImage] = useState(mainImageFilename);
  const displayName = decodeURIComponent(product).replace(/-/g, ' ');
  const [zoomed, setZoomed] = useState(false);
  const { currency } = useCurrency();
  const currencySymbols: Record<'KES' | 'USD' | 'EUR', string> = { KES: 'Ksh', USD: '$', EUR: '€' };

  // Pricing logic (should match shop page)
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
  const basePrice = priceRules[category]?.(mainImage) ?? 1000;
  const prices: Record<'KES' | 'USD' | 'EUR', number> = {
    KES: basePrice,
    USD: basePrice * 2,
    EUR: basePrice * 2,
  };

  return (
    <main className="min-h-screen bg-background-light dark:bg-background-dark text-primary-black dark:text-primary-white font-body px-4 py-8 flex flex-col items-center">
      <div className="w-full max-w-2xl mx-auto bg-primary-white dark:bg-background-dark rounded-xl shadow-soft p-6 flex flex-col items-center">
        <Link href="/shop" className="mb-4 text-primary-green hover:underline self-start">&larr; Back to Shop</Link>
        <div className="w-full aspect-square relative overflow-hidden rounded-lg mb-6 flex items-center justify-center">
          <motion.div
            className="w-full h-full relative"
            whileHover={{ scale: 1.15 }}
            animate={zoomed ? { scale: 1.5 } : { scale: 1 }}
            onClick={() => setZoomed((z) => !z)}
            style={{ cursor: 'zoom-in' }}
          >
            <Image
              src={`/products/${category}/${mainImage}`}
              alt={displayName}
              fill
              className="object-cover rounded-lg select-none"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="eager"
              priority
              draggable={false}
            />
          </motion.div>
        </div>
        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="flex gap-2 mb-6 flex-wrap justify-center">
            {images.map((img) => (
              <button
                key={img}
                onClick={() => { setMainImage(img); setZoomed(false); }}
                className={`w-16 h-16 relative rounded-lg border-2 ${mainImage === img ? 'border-primary-green' : 'border-transparent'} overflow-hidden focus:outline-none`}
                aria-label={`Show image ${img}`}
              >
                <Image
                  src={`/products/${category}/${img}`}
                  alt={img}
                  fill
                  className="object-cover rounded-lg"
                  sizes="64px"
                  loading="lazy"
                  draggable={false}
                />
              </button>
            ))}
          </div>
        )}
        <h1 className="font-heading text-3xl mb-2 text-primary-brown text-center">{displayName}</h1>
        <h2 className="font-body text-lg mb-4 text-primary-ochre text-center">Category: {category.charAt(0).toUpperCase() + category.slice(1)}</h2>
        <p className="font-body text-primary-brown mb-6 text-center">This is a beautiful, authentic Kenyan safari decor item. (Product description coming soon.)</p>
        {/* Desktop Add to Cart button */}
        <div className="hidden md:block w-full">
          <div className="flex items-center justify-between gap-4">
            <span className="font-heading text-2xl text-ochre font-bold">{currencySymbols[currency as 'KES' | 'USD' | 'EUR']} {prices[currency as 'KES' | 'USD' | 'EUR'].toLocaleString()}</span>
            <button className="px-8 py-3 rounded-lg bg-primary-green text-primary-white font-heading text-lg shadow-soft hover:bg-primary-olive transition-colors">Add to Cart</button>
            <button className="px-8 py-3 rounded-lg bg-ochre text-white font-heading text-lg shadow-soft hover:bg-brown transition-colors">Buy Now</button>
          </div>
        </div>
      </div>
      {/* Sticky bottom bar for mobile */}
      <div className="fixed bottom-0 left-0 w-full z-50 md:hidden bg-white/90 dark:bg-charcoal/95 backdrop-blur-xl border-t border-ochre shadow-2xl flex items-center justify-between px-4 py-3 gap-2">
        <span className="font-heading text-xl text-ochre font-bold">{currencySymbols[currency as 'KES' | 'USD' | 'EUR']} {prices[currency as 'KES' | 'USD' | 'EUR'].toLocaleString()}</span>
        <button className="flex-1 mx-1 px-4 py-2 rounded-full bg-primary-green text-primary-white font-heading text-base shadow-soft hover:bg-primary-olive transition-colors">Add to Cart</button>
        <button className="flex-1 px-4 py-2 rounded-full bg-ochre text-white font-heading text-base shadow-soft hover:bg-brown transition-colors">Buy Now</button>
      </div>
    </main>
  );
} 