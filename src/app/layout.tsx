import '../styles/globals.css';
import React from 'react';
import Providers from '../components/Providers';
import ClientLayout from '../components/ClientLayout';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <title>Luis María y Cía.</title>
        <meta name="description" content="Cafetería, pastelería y delicias artesanales" />
      </head>
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