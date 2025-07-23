import '../styles/globals.css';
import React from 'react';
import Providers from '../components/Providers';
import ClientLayout from '../components/ClientLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Luis María y Cía.',
  description: 'Cafetería, pastelería y delicias artesanales',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-black text-white font-sans min-h-screen flex flex-col transition-colors duration-300">
        <Providers>
          <ClientLayout>
            {children}
          </ClientLayout>
        </Providers>
      </body>
    </html>
  );
} 