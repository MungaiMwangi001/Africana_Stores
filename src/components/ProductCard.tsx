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
  isNew?: boolean;
  isOnSale?: boolean;
  rating?: number; // 0-5
  description?: string;
}

const accentAmber = 'from-amber-500 via-amber-400 to-amber-600';
const accentGreen = 'from-green-700 via-green-600 to-green-800';

const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  name,
  prices,
  category = '',
  isNew = false,
  isOnSale = false,
  rating = 0,
  description = '',
}) => {
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
    <div
      className="relative bg-white/40 dark:bg-charcoal/80 backdrop-blur-xl rounded-2xl shadow-xl p-4 flex flex-col items-stretch transition-transform duration-300 group hover:shadow-2xl hover:scale-[1.03] focus-within:shadow-2xl focus-within:scale-[1.03] min-h-[420px]"
      tabIndex={0}
      aria-label={`Product card for ${name}`}
    >
      {/* Badges */}
      {(isNew || isOnSale) && (
        <span className={`absolute top-3 left-3 z-20 px-3 py-1 rounded-full text-xs font-bold text-white shadow ${isNew ? 'bg-gradient-to-r ' + accentAmber : 'bg-gradient-to-r ' + accentGreen}`}
          aria-label={isNew ? 'New product' : 'On sale'}>
          {isNew ? 'New' : 'Sale'}
        </span>
      )}
      {/* Wishlist Heart Icon */}
      <button
        className="absolute top-3 right-3 z-20 p-2 rounded-full bg-white/80 dark:bg-background-dark/80 hover:bg-amber-200 focus:ring-2 focus:ring-amber-500 transition-colors shadow border border-amber-200"
        onClick={handleWishlistClick}
        aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
        type="button"
      >
        {inWishlist ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="#e53e3e" viewBox="0 0 24 24" className="w-7 h-7">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#5D4037" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        )}
      </button>
      {/* Product image */}
      <div className="w-full aspect-square relative overflow-hidden rounded-xl mb-3 bg-gradient-to-br from-amber-100 via-white to-green-100">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, 25vw"
          loading="lazy"
        />
      </div>
      {/* Product info */}
      <div className="flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-heading text-lg sm:text-xl font-bold text-charcoal dark:text-primary-white line-clamp-1 flex-1">{name}</span>
          {/* Optional: Rating stars */}
          {rating > 0 && (
            <span className="flex items-center gap-0.5 ml-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className={`w-4 h-4 ${i < rating ? 'text-amber-500' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20"><polygon points="9.9,1.1 7.6,6.6 1.6,7.6 6,11.6 4.8,17.5 9.9,14.3 15,17.5 13.8,11.6 18.2,7.6 12.2,6.6" /></svg>
              ))}
            </span>
          )}
        </div>
        <span className="font-heading text-lg sm:text-xl text-green-800 dark:text-amber-300 font-bold mb-1">{currencySymbols[currency]} {prices[currency].toLocaleString()}</span>
        {/* Optional: Description */}
        {description && (
          <span className="text-sm text-charcoal/80 dark:text-primary-white/80 mb-2 line-clamp-2">{description}</span>
        )}
        <div className="flex flex-col gap-2 mt-auto">
          <button
            className={`w-full px-4 py-2 rounded-lg font-heading font-semibold shadow-soft flex items-center justify-center gap-2 transition-all duration-200 focus:ring-2 focus:ring-amber-500 text-base bg-gradient-to-r from-amber-600 to-green-700 text-white hover:from-green-700 hover:to-amber-600 hover:scale-105`}
            onClick={handleTrolleyClick}
            aria-label={inCart ? 'Remove from cart' : 'Add to cart'}
            type="button"
          >
            {inCart ? 'Remove from Cart' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 