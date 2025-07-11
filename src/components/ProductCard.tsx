"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { useCart } from '../lib/cartContext';
import { useWishlist } from '../lib/wishlistContext';
import { useCurrency } from '../lib/currencyContext';
import QuickViewModal from './QuickViewModal';

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

interface ProductCardProps {
  imageSrc: string;
  name: string;
  prices: { KES: number; USD: number; EUR: number };
  category?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageSrc, name, prices, category = '' }) => {
  const { addToCart, removeFromCart, isInCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { currency } = useCurrency();
  const [showModal, setShowModal] = useState(false);
  const inCart = isInCart(name, category);
  const inWishlist = isInWishlist(name, category);

  // For modal gallery
  const images = categoryImages[category] || [imageSrc];
  const [mainImage, setMainImage] = useState(imageSrc);

  React.useEffect(() => {
    if (showModal) setMainImage(imageSrc);
  }, [showModal, imageSrc]);

  const handleTrolleyClick = () => {
    if (inCart) {
      removeFromCart(name, category);
    } else {
      addToCart({ name, imageSrc, price: prices[currency], category });
    }
  };

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (inWishlist) {
      removeFromWishlist(name, category);
    } else {
      addToWishlist({ name, imageSrc, price: prices[currency], category });
    }
  };

  const currencySymbols = { KES: 'Ksh', USD: '$', EUR: '€' };

  return (
    <div className="bg-white/30 backdrop-blur-md rounded-xl shadow-2xl p-3 flex flex-col items-center transition-transform duration-300 group hover:shadow-3xl hover:scale-105 relative">
      {/* Wishlist Heart Icon */}
      <button
        className="absolute top-3 right-3 z-10 p-1 rounded-full bg-white/60 dark:bg-background-dark/80 hover:bg-primary-ochre focus:ring-2 focus:ring-primary-ochre transition-colors"
        onClick={handleWishlistClick}
        aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
        type="button"
      >
        {inWishlist ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 text-primary-red">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-primary-brown">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        )}
      </button>
      {/* Clickable image for quick view */}
      <button
        className="w-full aspect-square relative overflow-hidden rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-primary-ochre"
        onClick={() => setShowModal(true)}
        aria-label={`Quick view of ${name}`}
        type="button"
      >
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, 25vw"
          loading="lazy"
        />
      </button>
      <span className="font-heading text-base text-primary-brown text-center line-clamp-2 mb-2">{name}</span>
      <span className="font-heading text-lg text-primary-brown mb-2">
        {currencySymbols[currency]} {prices[currency].toLocaleString()}
      </span>
      <button
        className={`mt-auto px-4 py-2 rounded-lg font-heading shadow-soft flex items-center gap-2 transition-all duration-200 focus:ring-2 focus:ring-primary-ochre ${inCart ? 'bg-primary-olive text-primary-white' : 'bg-primary-green text-primary-white hover:bg-primary-ochre hover:scale-105'}`}
        onClick={handleTrolleyClick}
        type="button"
      >
        {inCart ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007.5 17h9a1 1 0 00.85-1.53L17 13M7 13V6h13" />
          </svg>
        )}
        {inCart ? 'Remove' : 'Trolley'}
      </button>
      {/* Quick view modal with mini-gallery */}
      {showModal && (
        <QuickViewModal
          imageSrc={imageSrc}
          name={name}
          images={images}
          mainImage={mainImage}
          setMainImage={setMainImage}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default ProductCard; 