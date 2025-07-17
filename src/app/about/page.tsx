import React from 'react';

export default function About() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background-light text-primary-black font-body px-4 py-12">
      <section className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-heading font-bold mb-6 text-primary-ochre text-center drop-shadow-sm" style={{ textShadow: '0 1px 2px #fff8, 0 0px 1px #CC7722' }}>About Us</h1>
        <p className="text-lg mb-6 text-charcoal dark:text-primary-white text-center">
          Africana Stores was founded to bring the beauty, artistry, and spirit of authentic Kenyan safari decor to homes around the world. Our curated collection features handcrafted pieces made by skilled artisans, celebrating the vibrant culture and wild landscapes of Africa.
        </p>
        <h2 className="text-xl font-heading font-semibold mb-2 text-charcoal dark:text-primary-white drop-shadow-sm" style={{ textShadow: '0 1px 2px #fff8, 0 0px 1px #1C1C1C' }}>
          Our Mission
        </h2>
        <p className="mb-4 text-charcoal dark:text-primary-white">
          To empower local artisans, preserve traditional crafts, and share the unique stories of Africa through beautiful, sustainable decor.
        </p>
        <h2 className="text-xl font-heading font-semibold mb-2 text-charcoal dark:text-primary-white drop-shadow-sm" style={{ textShadow: '0 1px 2px #fff8, 0 0px 1px #1C1C1C' }}>
          Our Values
        </h2>
        <ul className="list-disc list-inside text-charcoal dark:text-primary-white space-y-1 mb-4">
          <li>Authenticity &amp; Craftsmanship</li>
          <li>Empowerment &amp; Fair Trade</li>
          <li>Sustainability &amp; Community</li>
          <li>Celebrating African Heritage</li>
        </ul>
        <p className="text-charcoal dark:text-primary-white text-center mt-6">Thank you for supporting Africana Stores and the artisans who make our collection possible.</p>
      </section>
    </main>
  );
} 