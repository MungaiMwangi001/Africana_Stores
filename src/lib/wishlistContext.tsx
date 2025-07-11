"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

export interface WishlistItem {
  category: string;
  name: string;
  imageSrc: string;
  price: number;
}

interface WishlistContextType {
  wishlist: WishlistItem[];
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (name: string, category: string) => void;
  isInWishlist: (name: string, category: string) => boolean;
  clearWishlist: () => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  // Load wishlist from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('wishlist');
    if (stored) setWishlist(JSON.parse(stored));
  }, []);

  // Persist wishlist to localStorage
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (item: WishlistItem) => {
    setWishlist((prev) => {
      if (prev.some((i) => i.name === item.name && i.category === item.category)) return prev;
      return [...prev, item];
    });
  };

  const removeFromWishlist = (name: string, category: string) => {
    setWishlist((prev) => prev.filter((i) => !(i.name === name && i.category === category)));
  };

  const isInWishlist = (name: string, category: string) => {
    return wishlist.some((i) => i.name === name && i.category === category);
  };

  const clearWishlist = () => setWishlist([]);

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, isInWishlist, clearWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error('useWishlist must be used within a WishlistProvider');
  return ctx;
} 