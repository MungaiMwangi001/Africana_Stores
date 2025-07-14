"use client";
// NOTE: Temporarily removing framer-motion and headlessui/react for debugging
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '../lib/cartContext';
import { useCurrency } from '../lib/currencyContext';
import dynamic from 'next/dynamic';
// import { motion } from 'framer-motion';
import Image from 'next/image';
// import { Menu } from '@headlessui/react';
import type { Currency } from '../lib/currencyContext';

const currencies: { code: Currency; symbol: string }[] = [
  { code: 'USD', symbol: '$' },
  { code: 'EUR', symbol: '€' },
  { code: 'KES', symbol: 'Ksh' },
];

// Dummy product data for search autocomplete (replace with real data or API in production)
const allProducts: { name: string; category: string; image: string }[] = [
  { name: 'Bracelet 1', category: 'bracelet', image: '/products/bracelet/bracelet 1.jpg' },
  { name: 'Earings 2', category: 'earings', image: '/products/earings/earings 2.jpg' },
  { name: 'Chokar 1', category: 'choker', image: '/products/choker/chokar 1.jpg' },
  // ...add more as needed
];

type CurrencyDropdownProps = {
  currency: Currency;
  setCurrency: (c: Currency) => void;
};
function CurrencyDropdown({ currency, setCurrency }: CurrencyDropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);
  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 backdrop-blur border border-ochre shadow font-heading text-primary-brown text-xs focus:outline-none focus:ring-2 focus:ring-primary-ochre transition-all"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="font-bold">{currency}</span>
        <svg className={`w-4 h-4 ml-1 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-36 rounded-2xl bg-white/80 backdrop-blur-lg shadow-2xl border border-ochre/20 z-50 animate-fade-in">
          <ul className="py-2" role="listbox">
            {currencies.map((c: { code: Currency; symbol: string }) => (
              <li
                key={c.code}
                className={`flex items-center gap-2 px-4 py-2 cursor-pointer font-heading text-sm transition-colors
                  ${currency === c.code ? 'bg-ochre/20 text-ochre font-bold' : 'hover:bg-ochre/10 text-primary-brown'}`}
                onClick={() => { setCurrency(c.code as 'KES' | 'USD' | 'EUR'); setOpen(false); }}
                role="option"
                aria-selected={currency === c.code}
                tabIndex={0}
              >
                <span className="flex-1">{c.symbol} {c.code}</span>
                {currency === c.code && (
                  <svg className="w-4 h-4 text-ochre" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

const CartDrawer = dynamic(() => import('./CartDrawer'), { ssr: false });

export default function Navbar() {
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cart } = useCart();
  const { currency, setCurrency } = useCurrency();
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState<{ name: string; category: string; image: string }[]>([]);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (search.length > 0) {
      setSearchResults(
        allProducts.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
      );
      setSearchOpen(true);
    } else {
      setSearchResults([]);
      setSearchOpen(false);
    }
  }, [search]);

  // Close search dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
      }
    }
    if (searchOpen) {
      document.addEventListener('mousedown', handleClick);
    } else {
      document.removeEventListener('mousedown', handleClick);
    }
    return () => document.removeEventListener('mousedown', handleClick);
  }, [searchOpen]);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#5D4037] transition-colors duration-300 shadow-lg">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4 min-h-[56px]">
        {/* Mobile Top Bar: Hamburger (left), Search, Wishlist, Cart, Currency (right) */}
        <div className="flex w-full items-center justify-between md:hidden relative">
          {/* Hamburger icon (left, mobile only) */}
          <button
            className="p-2 rounded-lg text-[#F5F5F5] hover:bg-[#3A2B23] focus:outline-none order-1 transition-colors duration-200"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label="Open menu"
            type="button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#F5F5F5" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          {/* Right side: Search, Wishlist, Cart, Currency */}
          <div className="flex items-center gap-2 order-3 ml-auto">
            {/* Search Icon */}
            <button
              className="p-2 rounded-full text-[#F5F5F5] hover:bg-[#3A2B23] focus:outline-none transition-colors duration-200"
              onClick={() => setSearchOpen(true)}
              aria-label="Open search"
              type="button"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#F5F5F5" className="w-6 h-6">
                <circle cx="11" cy="11" r="7" stroke="#F5F5F5" strokeWidth="2" fill="none" />
                <path d="M21 21l-4.35-4.35" stroke="#F5F5F5" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
            {/* Wishlist Icon */}
            <Link href="/wishlist" className="p-2 rounded-full text-[#F5F5F5] hover:text-white hover:shadow-[0_0_8px_2px_rgba(245,245,245,0.3)] focus:outline-none transition duration-200" aria-label="Wishlist">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#F5F5F5" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </Link>
            {/* Cart Icon */}
            <button
              className="relative p-2 rounded-full hover:bg-primary-ochre/20 focus:outline-none"
              onClick={() => setCartOpen(true)}
              aria-label="Open cart"
              type="button"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-primary-brown">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007.5 17h9a1 1 0 00.85-1.53L17 13M7 13V6h13" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-red text-white text-xs rounded-full px-1.5 py-0.5 font-bold">{cartCount}</span>
              )}
            </button>
            {/* Currency Switcher */}
            <CurrencyDropdown currency={currency} setCurrency={setCurrency} />
          </div>
        </div>
        {/* Mobile Search Overlay */}
        {searchOpen && !mobileMenuOpen && (
          <div className="fixed inset-0 z-50 flex flex-col bg-black/60">
            <div className="w-full bg-white px-4 py-4 flex items-center gap-2 shadow-lg relative">
              <input
                type="text"
                className="flex-1 px-4 py-3 rounded-full border border-ochre bg-white text-primary-black font-body shadow focus:outline-none focus:ring-2 focus:ring-ochre"
                placeholder="Search products..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                autoFocus
                aria-label="Search products"
              />
              <button
                className="ml-2 p-2 rounded-full bg-primary-ochre text-white hover:bg-primary-brown"
                onClick={() => { setSearchOpen(false); setSearch(''); }}
                aria-label="Close search"
                type="button"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {searchResults.length > 0 && (
              <div className="w-full bg-white rounded-b-xl shadow-lg border border-ochre/20 z-50 max-h-72 overflow-y-auto">
                {searchResults.map((p, i) => (
                  <Link
                    key={p.name + i}
                    href={`/shop/${p.category}/${encodeURIComponent(p.name.replace(/ /g, '-').toLowerCase())}`}
                    className="flex items-center gap-3 px-4 py-2 hover:bg-ochre/10 focus:bg-ochre/20 transition-colors rounded-xl"
                    onClick={() => setSearchOpen(false)}
                  >
                    <Image src={p.image} alt={p.name} width={40} height={40} className="w-10 h-10 object-cover rounded-lg border border-ochre/20" />
                    <span className="font-heading text-base text-primary-brown">{p.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
        {/* Desktop Nav (md+): Horizontal menu, no hamburger */}
        <div className="hidden md:flex w-full items-center justify-between">
          {/* Left: Nav links */}
          <div className="flex items-center gap-8">
            <Link href="/" className="font-heading text-base text-[#F5F5F5] hover:text-primary-ochre transition-colors">Home</Link>
            <Link href="/shop" className="font-heading text-base text-[#F5F5F5] hover:text-primary-ochre transition-colors">Shop</Link>
            <Link href="/contact" className="font-heading text-base text-[#F5F5F5] hover:text-primary-ochre transition-colors">Contact</Link>
            <Link href="/about" className="font-heading text-base text-[#F5F5F5] hover:text-primary-ochre transition-colors">About Us</Link>
          </div>
          {/* Right: Search, Wishlist, Cart, Currency */}
          <div className="flex items-center gap-4 ml-auto">
            {/* Search Icon */}
            <button
              className="p-2 rounded-full text-[#F5F5F5] hover:bg-[#3A2B23] focus:outline-none transition-colors duration-200"
              onClick={() => setSearchOpen(true)}
              aria-label="Open search"
              type="button"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#F5F5F5" className="w-6 h-6">
                <circle cx="11" cy="11" r="7" stroke="#F5F5F5" strokeWidth="2" fill="none" />
                <path d="M21 21l-4.35-4.35" stroke="#F5F5F5" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
            {/* Wishlist Icon */}
            <Link href="/wishlist" className="p-2 rounded-full text-[#F5F5F5] hover:text-white hover:shadow-[0_0_8px_2px_rgba(245,245,245,0.3)] focus:outline-none transition duration-200" aria-label="Wishlist">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#F5F5F5" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </Link>
            {/* Cart Icon */}
            <button
              className="relative p-2 rounded-full hover:bg-primary-ochre/20 focus:outline-none"
              onClick={() => setCartOpen(true)}
              aria-label="Open cart"
              type="button"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-primary-brown">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007.5 17h9a1 1 0 00.85-1.53L17 13M7 13V6h13" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-red text-white text-xs rounded-full px-1.5 py-0.5 font-bold">{cartCount}</span>
              )}
            </button>
            {/* Currency Switcher */}
            <CurrencyDropdown currency={currency} setCurrency={setCurrency} />
          </div>
        </div>
        {/* Hamburger menu and search only on mobile */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 flex flex-col bg-white/10 backdrop-blur-lg text-white animate-slide-in-left">
            <div className="flex items-center justify-end px-4 py-4 border-b border-ochre">
              <button
                className="p-2 rounded-full bg-primary-ochre text-white hover:bg-primary-brown"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {/* Mobile Nav Links */}
            <div className="flex flex-col gap-6 mt-8 px-8">
              <Link href="/" className="text-lg font-heading text-white hover:text-primary-ochre transition-colors" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link href="/shop" className="text-lg font-heading text-white hover:text-primary-ochre transition-colors" onClick={() => setMobileMenuOpen(false)}>Shop</Link>
              <Link href="/contact" className="text-lg font-heading text-white hover:text-primary-ochre transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
              <Link href="/about" className="text-lg font-heading text-white hover:text-primary-ochre transition-colors" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
              <Link href="/wishlist" className="text-lg font-heading text-white hover:text-primary-ochre transition-colors" onClick={() => setMobileMenuOpen(false)}>Wishlist</Link>
              <Link href="/account/profile" className="text-lg font-heading text-white hover:text-primary-ochre transition-colors" onClick={() => setMobileMenuOpen(false)}>Account</Link>
            </div>
          </div>
        )}
      </nav>
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </header>
  );
} 