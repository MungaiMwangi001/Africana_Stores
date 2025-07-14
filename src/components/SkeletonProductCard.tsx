import React from 'react';

export default function SkeletonProductCard() {
  return (
    <div className="animate-pulse bg-white rounded-xl shadow p-4 flex flex-col items-center">
      <div className="w-32 h-32 bg-primary-ochre/20 rounded mb-4" />
      <div className="h-4 w-3/4 bg-primary-ochre/30 rounded mb-2" />
      <div className="h-4 w-1/2 bg-primary-ochre/20 rounded" />
    </div>
  );
} 