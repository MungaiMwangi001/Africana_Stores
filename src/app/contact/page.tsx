"use client";
import React from 'react';

export default function Contact() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background-light text-primary-black font-body px-4 py-12">
      <section className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-heading font-bold mb-6 text-primary-ochre text-center">Contact Us</h1>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-heading mb-1 text-primary-brown">Name</label>
            <input id="name" name="name" type="text" required className="w-full px-4 py-2 rounded-lg border border-ochre bg-gray focus:outline-none focus:ring-2 focus:ring-ochre" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-heading mb-1 text-primary-brown">Email</label>
            <input id="email" name="email" type="email" required className="w-full px-4 py-2 rounded-lg border border-ochre bg-gray focus:outline-none focus:ring-2 focus:ring-ochre" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-heading mb-1 text-primary-brown">Message</label>
            <textarea id="message" name="message" rows={5} required className="w-full px-4 py-2 rounded-lg border border-ochre bg-gray focus:outline-none focus:ring-2 focus:ring-ochre" />
          </div>
          <button type="submit" className="w-full py-3 rounded-lg bg-primary-ochre text-white font-heading text-lg shadow hover:bg-primary-brown transition-colors">Send Message</button>
        </form>
        <div className="mt-8 text-center text-primary-brown">
          <p>Email: <a href="mailto:info@africanastores.com" className="underline hover:text-primary-ochre">info@africanastores.com</a></p>
          <p>Phone: <a href="tel:+254700000000" className="underline hover:text-primary-ochre">+254 700 000 000</a></p>
        </div>
      </section>
    </main>
  );
} 