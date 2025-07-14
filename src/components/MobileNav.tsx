import React, { useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/shop' },
  { label: 'Wishlist', href: '/wishlist' },
  { label: 'Account', href: '/account/login' },
  { label: 'Cart', href: '#' }, // Cart can trigger a drawer/modal
];

export default function MobileNav({ onCartClick }: { onCartClick?: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className="md:hidden p-2 text-primary-ochre focus:outline-none"
        aria-label="Open navigation menu"
        onClick={() => setOpen(true)}
      >
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
      </button>
      {open && (
        <div className="fixed inset-0 z-40 bg-black/40" onClick={() => setOpen(false)} aria-label="Close navigation menu" />
      )}
      <nav
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-white shadow-lg transform ${open ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:hidden`}
        aria-hidden={!open}
        tabIndex={open ? 0 : -1}
      >
        <div className="flex items-center justify-between p-4 border-b border-primary-ochre">
          <span className="font-heading text-xl text-primary-ochre">Menu</span>
          <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-2xl text-primary-ochre">&times;</button>
        </div>
        <ul className="flex flex-col p-4 space-y-4">
          {navLinks.map(link => (
            <li key={link.href}>
              {link.label === 'Cart' && onCartClick ? (
                <button onClick={() => { setOpen(false); onCartClick(); }} className="w-full text-left text-primary-brown font-semibold hover:text-primary-ochre transition">
                  {link.label}
                </button>
              ) : (
                <Link href={link.href} className="text-primary-brown font-semibold hover:text-primary-ochre transition" onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
} 