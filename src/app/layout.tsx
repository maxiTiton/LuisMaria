import '../styles/globals.css';
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Luis María y Cía.',
  description: 'Cafetería, pastelería y delicias artesanales',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-black text-white font-sans min-h-screen flex flex-col transition-colors duration-300">
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center px-4 md:px-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
} 