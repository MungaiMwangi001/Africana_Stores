import type { Metadata } from 'next';
import React from 'react';
import ProductDetailClient from './ProductDetailClient';

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
  necklace: [
    'necklace 1.jpg',
    'necklace 3.jpg',
    'necklace2.jpg',
  ],
  weddingnecklace: [
    'wedding necklace.jpg',
    'wedding necklace 2.jpg',
    'wedding necklace 3.jpg',
    'wedding necklace 4.jpg',
    'wedding necklace 5.jpg',
  ],
  shukas: [
    'shuka 1.jpg',
    'shuka 2.jpg',
    'shuka 3.jpg',
    'shuka 4.jpg',
    'shuka 5.jpg',
  ],
  sandals: [
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
  masks: [
    'mask 1.jpg',
    'mask 2.jpg',
    'mask 3.jpg',
    'mask 4.jpg',
    'mask 5.jpg',
    'mask 6.jpg',
    'mask 7.jpg',
    'mask 8.jpg',
  ],
  soaptones: [
    'bowls.jpg',
    'calabash sopastone.jpg',
    'oval plate.jpg',
    'plate 1.jpg',
    'sopastone 1.jpg',
  ],
};

function toProductFilename(slug: string) {
  // Convert slug back to filename (replace dashes with spaces, add .jpg)
  return decodeURIComponent(slug).replace(/-/g, ' ') + '.jpg';
}

export async function generateMetadata({ params }: { params: Promise<{ category: string; product: string }> }): Promise<Metadata> {
  const { category, product } = await params;
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

export default async function ProductPage({ params }: { params: Promise<{ category: string; product: string }> }) {
  const { category, product } = await params;
  const images = categoryImages[category] || [];
  const mainImageFilename = toProductFilename(product);
  const displayName = decodeURIComponent(product).replace(/-/g, ' ');

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
  const basePrice = priceRules[category]?.(mainImageFilename) ?? 1000;
  const prices: Record<'KES' | 'USD' | 'EUR', number> = {
    KES: basePrice,
    USD: basePrice * 2,
    EUR: basePrice * 2,
  };

  return (
    <ProductDetailClient
      category={category}
      product={product}
      images={images}
      mainImageFilename={mainImageFilename}
      displayName={displayName}
      prices={prices}
    />
  );
} 