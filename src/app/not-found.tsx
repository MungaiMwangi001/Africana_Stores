import React from 'react';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background-light text-primary-black font-body px-4 py-12">
      <section className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 text-center">
        <h1 className="text-5xl font-heading font-bold mb-6 text-primary-ochre">404</h1>
        <p className="text-lg mb-6 text-primary-brown">Sorry, the page you are looking for does not exist.</p>
      </section>
    </main>
  );
} 