import React from 'react';

type ToastProps = {
  message: string;
  type?: 'success' | 'error' | 'info';
};

const typeStyles = {
  success: 'bg-green-500 text-white',
  error: 'bg-red-500 text-white',
  info: 'bg-primary-ochre text-white',
};

export default function Toast({ message, type = 'info' }: ToastProps) {
  return (
    <div className={`fixed bottom-6 right-6 px-6 py-3 rounded shadow-lg z-50 font-semibold transition ${typeStyles[type]}`}>
      {message}
    </div>
  );
} 