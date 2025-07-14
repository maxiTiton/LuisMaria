'use client';
import '../styles/globals.css';
import React from 'react';
import { usePathname } from 'next/navigation';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isCatalogPage = pathname === '/catalogo';

  return (
    <html lang="es">
      <head>
        <title>Luis María y Cía.</title>
        <meta name="description" content="Cafetería, pastelería y delicias artesanales" />
      </head>
      <body className="bg-black text-white font-sans min-h-screen flex flex-col transition-colors duration-300">
        {!isCatalogPage && <Navbar />}
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
} 