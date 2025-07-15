"use client";
import React, { useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { FaInstagram, FaWhatsapp, FaShoppingCart } from 'react-icons/fa';

const sectionLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#contacto', label: 'Contacto' },
  { href: '#ubicacion', label: 'Ubicación' },
];

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const handleSectionClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const section = href.replace('#', '');
    
    // Si no estamos en la página principal, navegar a ella y guardar la sección
    if (pathname !== '/') {
      if (section) {
        sessionStorage.setItem('scrollToSection', section);
      }
      router.push('/');
    } else {
      // Si estamos en la página principal, hacer scroll a la sección
      const el = document.getElementById(section);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, router]);

  React.useEffect(() => {
    if (pathname === '/') {
      const section = sessionStorage.getItem('scrollToSection');
      if (section) {
        // Esperar a que la página se cargue completamente
        setTimeout(() => {
          const el = document.getElementById(section);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
          sessionStorage.removeItem('scrollToSection');
        }, 500);
      }
    }
  }, [pathname]);

  return (
    <nav className="w-full bg-gradient-to-r from-stone-900/95 to-neutral-900/95 backdrop-blur-md shadow-lg flex items-center justify-between px-6 py-4 sticky top-0 z-[100] border-b border-stone-600 animate-fade-in relative">
      {/* Overlay invisible para capturar clics */}
      <div className="absolute inset-0 z-[101] pointer-events-none"></div>
      <a href="#inicio" onClick={e => handleSectionClick(e, '#inicio')} className="flex items-center cursor-pointer group">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
          <Image src="/logo.png" alt="Logo" width={60} height={60} className="relative shadow-lg group-hover:scale-110 transition-transform duration-300 bg-transparent rounded-full border-2 border-white/30" />
        </div>
      </a>
      <div className="hidden md:flex gap-3 items-center">
        {sectionLinks.map(link => (
          <a
            key={link.href}
            href={link.href}
            onClick={e => handleSectionClick(e, link.href)}
            className="relative font-semibold text-base px-4 py-2 rounded-lg text-stone-300 hover:text-white hover:bg-stone-600 transition-all duration-300 shadow-sm focus:text-white focus:bg-stone-600 cursor-pointer font-serif pointer-events-auto"
          >
            {link.label}
          </a>
        ))}
        <a
          href="https://growbrands.net/neworder/luis-maria-italia-inicio/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative font-semibold text-base px-4 py-2 rounded-lg text-stone-300 hover:text-white hover:bg-stone-600 transition-all duration-300 shadow-sm font-serif pointer-events-auto"
        >
          Carta
        </a>
        <Link href="/catalogo" className="relative font-semibold text-base px-4 py-2 rounded-lg text-stone-300 hover:text-white hover:bg-stone-600 transition-all duration-300 shadow-sm font-serif pointer-events-auto">
          Catálogo
        </Link>
        <a href="https://wa.me/+5493584307111" target="_blank" rel="noopener noreferrer" className="text-amber-200 hover:text-amber-100 transition-colors duration-300 p-2 hover:bg-stone-700 rounded-lg">
          <FaWhatsapp size={20} />
        </a>
        <a href="https://www.instagram.com/luismariaycia/" target="_blank" rel="noopener noreferrer" className="text-amber-200 hover:text-amber-100 transition-colors duration-300 p-2 hover:bg-stone-700 rounded-lg">
          <FaInstagram size={20} />
        </a>
      </div>
      <div className="md:hidden">
        <Link href="/carrito" className="text-amber-200 hover:text-amber-100 p-2 hover:bg-stone-700 rounded-lg transition-colors duration-300">
          <FaShoppingCart size={24} />
        </Link>
      </div>
    </nav>
  );
} 