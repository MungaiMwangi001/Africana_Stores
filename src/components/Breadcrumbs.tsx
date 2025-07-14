import React from 'react';
import Link from 'next/link';

type Crumb = { label: string; href: string };

type BreadcrumbsProps = {
  crumbs: Crumb[];
};

export default function Breadcrumbs({ crumbs }: BreadcrumbsProps) {
  return (
    <nav className="text-sm text-primary-brown mb-4" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {crumbs.map((crumb, i) => (
          <li key={crumb.href} className="flex items-center">
            <Link href={crumb.href} className="hover:underline font-medium">
              {crumb.label}
            </Link>
            {i < crumbs.length - 1 && <span className="mx-2">&gt;</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
} 