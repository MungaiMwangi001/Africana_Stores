"use client";
import React from 'react';
import { useCart } from '../../lib/cartContext';
import Image from 'next/image';
import Link from 'next/link';

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="min-h-screen bg-background-light dark:bg-background-dark text-primary-black dark:text-primary-white font-body px-4 py-8 flex flex-col items-center">
      <div className="w-full max-w-2xl mx-auto bg-primary-white dark:bg-background-dark rounded-xl shadow-soft p-6 flex flex-col">
        <h1 className="font-heading text-3xl mb-6 text-primary-brown text-center">Checkout</h1>
        {cart.length === 0 ? (
          <div className="text-center text-primary-brown mb-8">Your cart is empty. <Link href="/shop" className="text-primary-green underline">Shop now</Link></div>
        ) : (
          <>
            <div className="mb-6 space-y-4">
              {cart.map((item) => (
                <div key={item.name + item.category} className="flex items-center gap-4 bg-primary-white dark:bg-background-dark rounded-lg shadow p-2">
                  <div className="w-16 h-16 relative rounded-lg overflow-hidden">
                    <Image src={item.imageSrc} alt={item.name} fill className="object-cover rounded-lg" sizes="64px" />
                  </div>
                  <div className="flex-1">
                    <div className="font-heading text-base text-primary-brown">{item.name}</div>
                    <div className="text-primary-green font-heading">${item.price.toFixed(2)}</div>
                    <div className="text-xs text-primary-brown">Qty: {item.quantity}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center mb-6">
              <span className="font-heading text-lg text-primary-brown">Subtotal</span>
              <span className="font-heading text-xl text-primary-green">${subtotal.toFixed(2)}</span>
            </div>
            {/* Shipping/payment placeholders */}
            <div className="mb-6">
              <div className="mb-4">
                <label className="block font-heading mb-2 text-primary-brown">Shipping Address</label>
                <input type="text" className="w-full px-4 py-2 rounded-lg border border-primary-brown/20 bg-background-light dark:bg-background-dark text-primary-black dark:text-primary-white" placeholder="Enter your address (dummy)" />
              </div>
              <div>
                <label className="block font-heading mb-2 text-primary-brown">Payment Method</label>
                <select className="w-full px-4 py-2 rounded-lg border border-primary-brown/20 bg-background-light dark:bg-background-dark text-primary-black dark:text-primary-white">
                  <option>Credit Card (dummy)</option>
                  <option>PayPal (dummy)</option>
                  <option>Stripe (dummy)</option>
                </select>
              </div>
            </div>
            <button
              className="w-full px-6 py-3 rounded-lg bg-primary-green text-primary-white font-heading text-lg shadow-soft hover:bg-primary-olive transition-colors mb-2"
              onClick={clearCart}
            >
              Place Order (Dummy)
            </button>
          </>
        )}
      </div>
    </main>
  );
} 