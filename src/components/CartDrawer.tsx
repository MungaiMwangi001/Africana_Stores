"use client";
import React from 'react';
import { useCart } from '../lib/cartContext';
import { useCurrency } from '../lib/currencyContext';
import Image from 'next/image';
// Remove framer-motion for native Tailwind animation

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ open, onClose }) => {
  const { cart, removeFromCart, clearCart } = useCart();
  const { currency } = useCurrency();
  const currencySymbols = { KES: 'Ksh', USD: '$', EUR: '€' };
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Helper to build WhatsApp message
  const getWhatsAppMessage = () => {
    if (cart.length === 0) return '';
    let message = 'Hello, I would like to place an order:%0A';
    cart.forEach((item, idx) => {
      message += `${idx + 1}. ${item.name} (Category: ${item.category}) x${item.quantity} - ${currencySymbols[currency]}${item.price.toLocaleString()}%0A`;
    });
    message += `%0ASubtotal: ${currencySymbols[currency]}${subtotal.toLocaleString()}`;
    return message;
  };

  return (
    open && (
      <>
        {/* Overlay */}
        <div
          className="fixed inset-0 z-40 bg-black/60 transition-opacity duration-300"
          onClick={onClose}
        />
        {/* Drawer */}
        <aside
          className="fixed top-0 right-0 z-50 w-full max-w-md h-full bg-[#FAFAFA] text-[#333333] shadow-2xl flex flex-col border-l border-[#E0E0E0] animate-slide-in-right"
          style={{ transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1)' }}
        >
          <div className="flex items-center justify-between p-4 border-b border-[#E0E0E0] bg-[#FAFAFA]">
            <h2 className="font-heading text-2xl font-bold text-[#333333]">Your Cart</h2>
            <button onClick={onClose} className="text-2xl text-[#B0BEC5] hover:text-[#E53935] transition-colors" aria-label="Close cart">&times;</button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#FAFAFA]">
            {cart.length === 0 ? (
              <div className="text-center text-[#B0BEC5] mt-8">Your cart is empty.</div>
            ) : (
              cart.map((item) => (
                <div key={item.name + item.category} className="flex items-center gap-4 bg-[#FFFFFF] rounded-xl shadow p-3 border border-[#E0E0E0] hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 relative rounded-lg overflow-hidden border border-[#E0E0E0] bg-[#F5F5F5]">
                    <Image src={item.imageSrc} alt={item.name} fill className="object-cover rounded-lg" sizes="64px" />
                  </div>
                  <div className="flex-1">
                    <div className="font-heading text-base font-semibold text-[#333333]">{item.name}</div>
                    <div className="text-lg font-bold font-heading text-[#E53935]">{currencySymbols[currency]} {item.price.toLocaleString()}</div>
                    <div className="text-xs text-[#B0BEC5]">Qty: {item.quantity}</div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.name, item.category)}
                    className="text-[#B0BEC5] hover:text-[#E53935] text-lg font-bold px-2 transition-colors"
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    &times;
                  </button>
                </div>
              ))
            )}
          </div>
          {/* Sticky subtotal/checkout section */}
          <div className="p-4 border-t border-[#E0E0E0] bg-[#FAFAFA] sticky bottom-0">
            <div className="flex justify-between items-center mb-4">
              <span className="font-heading text-lg text-[#333333]">Subtotal</span>
              <span className="font-heading text-2xl font-bold text-[#2E7D32]">{currencySymbols[currency]} {subtotal.toLocaleString()}</span>
            </div>
            <a
              href={`https://wa.me/254713601946?text=${encodeURIComponent(getWhatsAppMessage())}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-6 py-3 rounded-lg bg-[#25D366] text-white font-heading text-lg shadow-lg hover:bg-[#128C7E] transition-colors mb-2 text-center text-[1.2rem] font-bold flex items-center justify-center gap-2"
              style={{ minHeight: '3.5rem', pointerEvents: cart.length === 0 ? 'none' : 'auto', opacity: cart.length === 0 ? 0.5 : 1 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25A3.75 3.75 0 0011.25 18h1.5a3.75 3.75 0 003.75-3.75V6.75m-9 7.5V6.75m0 0L4.125 5.272A1.125 1.125 0 013.75 4.5H2.25m5.25 2.25h9.75m0 0l1.125 1.478c.18.236.375.522.375.772v7.5A3.75 3.75 0 0116.5 18h-1.5a3.75 3.75 0 01-3.75-3.75V6.75z" />
              </svg>
              Proceed to Checkout
            </a>
            <button
              className="w-full px-6 py-2 rounded-lg bg-[#ECEFF1] text-[#333333] font-heading text-base shadow hover:bg-[#CFD8DC] transition-colors border border-[#E0E0E0]"
              onClick={clearCart}
              disabled={cart.length === 0}
            >
              Clear Cart
            </button>
          </div>
        </aside>
      </>
    )
  );
};

export default CartDrawer; 