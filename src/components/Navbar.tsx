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
    <nav className="w-full bg-black/90 backdrop-blur-md shadow-lg flex items-center justify-between px-6 py-4 sticky top-0 z-[100] border-b border-black animate-fade-in relative">
      {/* Overlay invisible para capturar clics */}
      <div className="absolute inset-0 z-[101] pointer-events-none"></div>
      <a href="#inicio" onClick={e => handleSectionClick(e, '#inicio')} className="flex items-center cursor-pointer group">
        <div className="relative">
          <Image src="/logo.png" alt="Logo" width={60} height={60} className="relative shadow-lg group-hover:scale-110 transition-transform duration-300 bg-transparent rounded-full border-2 border-dorado" />
        </div>
      </a>
      <div className="hidden md:flex gap-5 items-center">
        {sectionLinks.map(link => (
          <a
            key={link.href}
            href={link.href}
            onClick={e => handleSectionClick(e, link.href)}
            className="relative font-semibold text-base px-4 py-2 rounded-lg text-crema hover:text-dorado transition-all duration-200 font-serif pointer-events-auto outline-none after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-1 after:w-0 after:h-[2px] after:bg-dorado after:rounded-full hover:after:w-3/4 after:transition-all after:duration-300"
            tabIndex={0}
            onMouseDown={e => e.preventDefault()}
          >
            {link.label}
          </a>
        ))}
        <a
          href="https://growbrands.net/neworder/luis-maria-italia-inicio/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative font-semibold text-base px-4 py-2 rounded-lg text-crema hover:text-dorado transition-all duration-200 font-serif pointer-events-auto outline-none after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-1 after:w-0 after:h-[2px] after:bg-dorado after:rounded-full hover:after:w-3/4 after:transition-all after:duration-300"
          tabIndex={0}
          onMouseDown={e => e.preventDefault()}
        >
          Carta
        </a>
        <Link href="/catalogo" className="relative font-semibold text-base px-4 py-2 rounded-lg text-crema hover:text-dorado transition-all duration-200 font-serif pointer-events-auto outline-none after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-1 after:w-0 after:h-[2px] after:bg-dorado after:rounded-full hover:after:w-3/4 after:transition-all after:duration-300" tabIndex={0} onMouseDown={e => e.preventDefault()}>
          Catálogo
        </Link>
        <a href="https://wa.me/+5493584307111" target="_blank" rel="noopener noreferrer" className="text-dorado hover:text-doradoSuave transition-transform duration-200 p-2 rounded-lg outline-none hover:scale-125" tabIndex={0} onMouseDown={e => e.preventDefault()}>
          <FaWhatsapp size={28} />
        </a>
        <a href="https://www.instagram.com/luismariaycia/" target="_blank" rel="noopener noreferrer" className="text-dorado hover:text-doradoSuave transition-transform duration-200 p-2 rounded-lg outline-none hover:scale-125" tabIndex={0} onMouseDown={e => e.preventDefault()}>
          <FaInstagram size={28} />
        </a>
      </div>
      <div className="md:hidden">
        <Link href="/carrito" className="text-dorado hover:text-doradoSuave p-2 hover:bg-marron rounded-lg transition-colors duration-300">
          <FaShoppingCart size={24} />
        </Link>
      </div>
    </nav>
  );
} 