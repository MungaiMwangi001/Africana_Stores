import React from 'react';

type AccessibleButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  'aria-label'?: string;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
};

export default function AccessibleButton({ children, onClick, 'aria-label': ariaLabel, type = 'button', className = '' }: AccessibleButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className={`focus:outline-none focus:ring-2 focus:ring-primary-ochre focus:ring-offset-2 ${className}`}
    >
      {children}
    </button>
  );
} 