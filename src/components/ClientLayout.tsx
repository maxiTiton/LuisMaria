'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isCatalogPage = pathname === '/catalogo';

  return (
    <>
      {!isCatalogPage && <Navbar />}
      <main className="flex-1">
        {children}
      </main>
    </>
  );
} 