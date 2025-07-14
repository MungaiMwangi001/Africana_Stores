"use client";
import React from 'react';
import Image from 'next/image';
import { useCart } from '../lib/cartContext';
import { useWishlist } from '../lib/wishlistContext';
import { useCurrency } from '../lib/currencyContext';

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
  const inCart = isInCart(name, category);
  const inWishlist = isInWishlist(name, category);

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
      {/* Product image (not clickable) */}
      <div className="w-full aspect-square relative overflow-hidden rounded-lg mb-2">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, 25vw"
          loading="lazy"
        />
      </div>
      <span className="font-heading text-base text-primary-brown text-center line-clamp-2 mb-2">{name}</span>
      <span className="font-heading text-lg text-primary-brown mb-2">
        {currencySymbols[currency]} {prices[currency].toLocaleString()}
      </span>
      <button
        className={`mt-auto px-4 py-2 rounded-lg font-heading shadow-soft flex items-center gap-2 transition-all duration-200 focus:ring-2 focus:ring-primary-ochre ${inCart ? 'bg-primary-olive text-primary-white' : 'bg-primary-green text-primary-white hover:bg-primary-ochre hover:scale-105'}`}
        onClick={handleTrolleyClick}
        aria-label={inCart ? 'Remove from cart' : 'Add to cart'}
        type="button"
      >
        {inCart ? 'Remove from Cart' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default ProductCard; 