'use client';

import React from 'react';

export default function LiveChatWidget() {
  return (
    <button
      className="fixed bottom-6 right-6 bg-primary-ochre text-white p-4 rounded-full shadow-lg hover:bg-primary-brown transition z-50 flex items-center justify-center"
      aria-label="Open live chat"
    >
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-4.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 1 1 17 0Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </button>
  );
} 