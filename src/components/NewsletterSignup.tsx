'use client';

import React, { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
  };

  return (
    <div className="bg-primary-ochre/10 rounded-xl p-6 flex flex-col items-center mt-8">
      <h2 className="text-xl font-heading font-semibold mb-2 text-primary-brown">Subscribe to our Newsletter</h2>
      <p className="mb-4 text-primary-brown text-center">Get updates on new arrivals, special offers, and artisan stories.</p>
      {submitted ? (
        <div className="text-green-600 font-semibold">Thank you for subscribing!</div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            placeholder="Your email address"
            className="flex-1 px-4 py-2 rounded-l-lg border border-primary-ochre focus:outline-none"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-primary-ochre text-white rounded-r-lg font-semibold hover:bg-primary-brown transition"
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
} 