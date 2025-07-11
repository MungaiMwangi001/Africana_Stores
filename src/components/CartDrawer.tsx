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
          className="fixed top-0 right-0 z-50 w-full max-w-md h-full bg-[#5D4037] text-[#F5F5F5] shadow-2xl flex flex-col border-l-4 border-ochre animate-slide-in-right"
          style={{ transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1)' }}
        >
          <div className="flex items-center justify-between p-4 border-b border-[#F5F5F5]/10">
            <h2 className="font-heading text-2xl font-bold">Your Cart</h2>
            <button onClick={onClose} className="text-2xl text-[#F5F5F5] hover:text-primary-ochre transition-colors" aria-label="Close cart">&times;</button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center text-[#F5F5F5]/80 mt-8">Your cart is empty.</div>
            ) : (
              cart.map((item) => (
                <div key={item.name + item.category} className="flex items-center gap-4 bg-[#6D4C41] rounded-xl shadow-lg p-3">
                  <div className="w-16 h-16 relative rounded-lg overflow-hidden">
                    <Image src={item.imageSrc} alt={item.name} fill className="object-cover rounded-lg" sizes="64px" />
                  </div>
                  <div className="flex-1">
                    <div className="font-heading text-base font-semibold text-[#F5F5F5]">{item.name}</div>
                    <div className="text-2xl font-bold font-heading text-primary-ochre drop-shadow-sm">{currencySymbols[currency]} {item.price.toLocaleString()}</div>
                    <div className="text-xs text-[#F5F5F5]/80">Qty: {item.quantity}</div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.name, item.category)}
                    className="text-primary-ochre hover:text-primary-red text-lg font-bold px-2 transition-colors"
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    &times;
                  </button>
                </div>
              ))
            )}
          </div>
          {/* Sticky subtotal/checkout section */}
          <div className="p-4 border-t border-[#F5F5F5]/10 bg-[#5D4037] sticky bottom-0">
            <div className="flex justify-between items-center mb-4">
              <span className="font-heading text-lg">Subtotal</span>
              <span className="font-heading text-2xl font-bold text-primary-ochre drop-shadow-sm">{currencySymbols[currency]} {subtotal.toLocaleString()}</span>
            </div>
            <button
              className="w-full px-6 py-3 rounded-lg bg-primary-ochre text-[#F5F5F5] font-heading text-lg shadow-lg hover:bg-primary-brown transition-colors mb-2"
              disabled={cart.length === 0}
            >
              Proceed to Checkout
            </button>
            <button
              className="w-full px-6 py-2 rounded-lg bg-[#6D4C41] text-primary-ochre font-heading text-base shadow hover:bg-primary-ochre/20 transition-colors"
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