"use client";
import React from 'react';
import { useWishlist } from '../../lib/wishlistContext';
import Image from 'next/image';
import Link from 'next/link';

export default function WishlistPage() {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();

  return (
    <main className="min-h-screen bg-background-light dark:bg-background-dark text-primary-black dark:text-primary-white font-body px-4 py-8 flex flex-col items-center">
      <div className="w-full max-w-2xl mx-auto bg-primary-white dark:bg-background-dark rounded-xl shadow-soft p-6 flex flex-col">
        <h1 className="font-heading text-3xl mb-6 text-primary-brown text-center">Your Wishlist</h1>
        {wishlist.length === 0 ? (
          <div className="text-center text-primary-brown mb-8">Your wishlist is empty. <Link href="/shop" className="text-primary-green underline">Shop now</Link></div>
        ) : (
          <>
            <div className="mb-6 space-y-4">
              {wishlist.map((item) => (
                <div key={item.name + item.category} className="flex items-center gap-4 bg-primary-white dark:bg-background-dark rounded-lg shadow p-2">
                  <div className="w-16 h-16 relative rounded-lg overflow-hidden">
                    <Image src={item.imageSrc} alt={item.name} fill className="object-cover rounded-lg" sizes="64px" />
                  </div>
                  <div className="flex-1">
                    <div className="font-heading text-base text-primary-brown">{item.name}</div>
                    <div className="text-primary-green font-heading">${item.price.toFixed(2)}</div>
                  </div>
                  <button
                    onClick={() => removeFromWishlist(item.name, item.category)}
                    className="text-primary-red hover:text-primary-brown text-lg font-bold px-2"
                    aria-label={`Remove ${item.name} from wishlist`}
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
            <button
              className="w-full px-6 py-2 rounded-lg bg-primary-ochre text-primary-white font-heading text-base shadow-soft hover:bg-primary-brown transition-colors"
              onClick={clearWishlist}
            >
              Clear Wishlist
            </button>
          </>
        )}
      </div>
    </main>
  );
} 