"use client";
import React, { useState } from 'react';
import { useAuth } from '../../../lib/authContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter email and password.');
      return;
    }
    login(email, password);
    router.push('/account/profile');
  };

  return (
    <main className="min-h-screen bg-background-light dark:bg-background-dark text-primary-black dark:text-primary-white font-body flex items-center justify-center px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-primary-white dark:bg-background-dark rounded-xl shadow-soft p-8 flex flex-col gap-6">
        <h1 className="font-heading text-3xl mb-2 text-primary-brown text-center">Login</h1>
        {error && <div className="text-primary-red text-center mb-2">{error}</div>}
        <div>
          <label className="block font-heading mb-2 text-primary-brown">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 rounded-lg border border-primary-brown/20 bg-background-light dark:bg-background-dark text-primary-black dark:text-primary-white"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block font-heading mb-2 text-primary-brown">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 rounded-lg border border-primary-brown/20 bg-background-light dark:bg-background-dark text-primary-black dark:text-primary-white"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full px-6 py-3 rounded-lg bg-primary-green text-primary-white font-heading text-lg shadow-soft hover:bg-primary-olive transition-colors"
        >
          Login
        </button>
        <div className="text-center mt-2">
          <span className="text-primary-brown">Don&apos;t have an account? </span>
          <Link href="/account/register" className="text-primary-green underline">Register</Link>
        </div>
      </form>
    </main>
  );
}        