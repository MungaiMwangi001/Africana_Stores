import React from 'react';

type EmptyStateProps = {
  message: string;
  actionLabel?: string;
  onAction?: () => void;
};

export default function EmptyState({ message, actionLabel, onAction }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-primary-brown">
      <p className="mb-4 text-lg font-semibold">{message}</p>
      {actionLabel && onAction && (
        <button
          onClick={onAction}
          className="px-4 py-2 bg-primary-ochre text-white rounded hover:bg-primary-brown transition"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
} 