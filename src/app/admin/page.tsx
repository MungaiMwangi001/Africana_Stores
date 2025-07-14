import React from 'react';

export default function AdminDashboard() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background-light text-primary-black font-body px-4 py-12">
      <section className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-heading font-bold mb-6 text-primary-ochre text-center">Admin Dashboard</h1>
        <p className="text-lg mb-6 text-primary-brown text-center">Admin tools and analytics will appear here.</p>
      </section>
    </main>
  );
} 