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
        {/* Social Media */}
        <div className="flex gap-4 mt-6 md:mt-0">
          {/* WhatsApp Contact */}
          <a
            href="https://wa.me/254713601946"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="bg-green-100 hover:bg-green-200 text-green-600 hover:text-green-800 rounded-full p-2 shadow-md flex items-center justify-center transition-all duration-200 focus:ring-2 focus:ring-green-400 focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-7 h-7">
              <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.584 2.236 6.393L4.062 28.25a1 1 0 0 0 1.312 1.312l6.857-2.174A12.94 12.94 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.97 0-3.84-.57-5.43-1.64l-.39-.25-4.08 1.29 1.32-4.01-.26-.4A9.96 9.96 0 0 1 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.29-7.71c-.29-.15-1.71-.84-1.97-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.91 1.13-.17.19-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.54-.88-2.11-.23-.56-.47-.48-.64-.49-.16-.01-.36-.01-.56-.01-.19 0-.51.07-.78.36-.27.29-1.03 1.01-1.03 2.46 0 1.45 1.05 2.85 1.2 3.05.15.19 2.07 3.16 5.02 4.31.7.24 1.25.38 1.68.48.71.15 1.36.13 1.87.08.57-.06 1.71-.7 1.95-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.34z" />
            </svg>
          </a>
          <a
            href="mailto:africana.stores@gmail.com"
            aria-label="Email"
            className="bg-yellow-100 hover:bg-yellow-200 text-yellow-700 hover:text-yellow-900 rounded-full p-2 shadow-md flex items-center justify-center transition-all duration-200 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </a>
          <a href="#" aria-label="Instagram" className="text-primary-brown hover:text-primary-red">
            <span className="bg-gradient-to-tr from-pink-400 via-red-400 to-yellow-400 rounded-full p-2 shadow-md flex items-center justify-center transition-all duration-200 focus:ring-2 focus:ring-pink-300 focus:outline-none">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </span>
          </a>
          <a href="#" aria-label="Facebook" className="text-primary-brown hover:text-primary-blue">
            <span className="bg-blue-100 hover:bg-blue-200 rounded-full p-2 shadow-md flex items-center justify-center transition-all duration-200 focus:ring-2 focus:ring-blue-300 focus:outline-none">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 2h-3a4 4 0 0 0-4 4v3H7v4h4v8h4v-8h3l1-4h-4V6a1 1 0 0 1 1-1h3z"/></svg>
            </span>
          </a>
          <a href="#" aria-label="X" className="text-primary-brown hover:text-primary-ochre">
            <span className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 shadow-md flex items-center justify-center transition-all duration-200 focus:ring-2 focus:ring-gray-400 focus:outline-none">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 7L7 17M7 7l10 10"/></svg>
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
} 