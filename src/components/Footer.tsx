import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary-white dark:bg-background-dark border-t border-primary-brown/10 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        {/* Site Info */}
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <span className="font-heading text-2xl sm:text-3xl font-extrabold text-charcoal dark:text-primary-white mb-2 drop-shadow-sm" style={{ textShadow: '0 1px 2px #fff8, 0 0px 1px #1C1C1C' }}>AFRICANA STORES</span>
          <span className="text-charcoal dark:text-primary-white text-sm font-medium">&copy; {new Date().getFullYear()} Africana Stores. All rights reserved.</span>
        </div>
        {/* Navigation Links */}
        <nav className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
          <Link href="/" className="text-charcoal dark:text-primary-white hover:text-primary-ochre font-heading">Home</Link>
          <Link href="/shop" className="text-charcoal dark:text-primary-white hover:text-primary-green font-heading">Shop</Link>
          <Link href="/wishlist" className="text-charcoal dark:text-primary-white hover:text-primary-red font-heading">Wishlist</Link>
          <Link href="/contact" className="text-charcoal dark:text-primary-white hover:text-primary-blue font-heading">Contact</Link>
        </nav>
        {/* Newsletter Signup */}
        <form className="flex flex-col items-center md:items-end gap-2">
          <label htmlFor="newsletter" className="font-heading text-charcoal dark:text-primary-white">Newsletter</label>
          <div className="flex gap-2">
            <input
              id="newsletter"
              type="email"
              placeholder="Your email (dummy)"
              className="px-4 py-2 rounded-lg border border-primary-brown/20 bg-background-light dark:bg-background-dark text-primary-black dark:text-primary-white"
            />
            <button
              type="button"
              className="px-4 py-2 rounded-lg bg-primary-green text-primary-white font-heading shadow-soft hover:bg-primary-olive transition-colors"
            >
              Subscribe
            </button>
          </div>
        </form>
        {/* Social Media */}
        <div className="flex gap-4 mt-6 md:mt-0">
          <a href="#" aria-label="Instagram" className="text-primary-brown hover:text-primary-red">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          <a href="#" aria-label="Facebook" className="text-primary-brown hover:text-primary-blue">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 2h-3a4 4 0 0 0-4 4v3H7v4h4v8h4v-8h3l1-4h-4V6a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="#" aria-label="X" className="text-primary-brown hover:text-primary-ochre">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 7L7 17M7 7l10 10"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
} 