"use client";
import React, { useEffect } from 'react';
import { useAuth } from '../../../lib/authContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ProfilePage() {
  const { isLoggedIn, user, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.replace('/account/login');
    }
  }, [isLoggedIn, router]);

  if (!isLoggedIn) return null;

  return (
    <main className="min-h-screen bg-background-light dark:bg-background-dark text-primary-black dark:text-primary-white font-body flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-primary-white dark:bg-background-dark rounded-xl shadow-soft p-8 flex flex-col gap-6">
        <h1 className="font-heading text-3xl mb-2 text-primary-brown text-center">My Profile</h1>
        <div className="text-center mb-4">
          <div className="font-heading text-xl text-primary-green mb-1">{user?.name}</div>
          <div className="text-primary-brown">{user?.email}</div>
        </div>
        <Link href="/wishlist" className="w-full px-6 py-3 rounded-lg bg-primary-yellow text-primary-brown font-heading text-lg shadow-soft hover:bg-primary-ochre transition-colors text-center">My Wishlist</Link>
        <Link href="#" className="w-full px-6 py-3 rounded-lg bg-primary-blue text-primary-white font-heading text-lg shadow-soft hover:bg-primary-green transition-colors text-center">Order History (Coming Soon)</Link>
        <button
          className="w-full px-6 py-3 rounded-lg bg-primary-red text-primary-white font-heading text-lg shadow-soft hover:bg-primary-brown transition-colors"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </main>
  );
} 