"use client";
import React, { useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { FaInstagram, FaWhatsapp, FaShoppingCart } from 'react-icons/fa';

const sectionLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#productos', label: 'Productos' },
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
    if (pathname !== '/') {
      if (section) sessionStorage.setItem('scrollToSection', section);
      router.push('/');
    } else {
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [pathname, router]);

  React.useEffect(() => {
    if (pathname === '/') {
      const section = sessionStorage.getItem('scrollToSection');
      if (section) {
        const el = document.getElementById(section);
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: 'smooth' });
          }, 200);
        }
        sessionStorage.removeItem('scrollToSection');
      }
    }
  }, [pathname]);

  return (
    <nav className="w-full bg-black/95 backdrop-blur-md shadow-lg flex items-center justify-between px-8 py-3 sticky top-0 z-50 border-b border-[#b08a5a] animate-fade-in">
      <a href="#inicio" onClick={e => handleSectionClick(e, '#inicio')} className="flex items-center cursor-pointer group">
        <Image src="/logo.png" alt="Logo" width={80} height={80} className="shadow-lg group-hover:scale-105 transition-transform duration-300 bg-black" />
      </a>
      <div className="hidden md:flex gap-4 items-center">
        {sectionLinks.map(link => (
          <a
            key={link.href}
            href={link.href}
            onClick={e => handleSectionClick(e, link.href)}
            className="relative font-semibold text-lg px-3 py-1 rounded-xl text-white hover:text-[#b08a5a] hover:bg-black/60 transition-all duration-200 shadow-sm focus:text-[#b08a5a] cursor-pointer font-serif"
          >
            {link.label}
          </a>
        ))}
        <a
          href="https://growbrands.net/neworder/luis-maria-italia-inicio/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative font-semibold text-lg px-3 py-1 rounded-xl text-white hover:text-[#b08a5a] hover:bg-black/60 transition-all duration-200 shadow-sm focus:text-[#b08a5a] cursor-pointer font-serif"
        >
          Carta
        </a>
        <Link href="/carrito" className="relative font-semibold text-lg px-3 py-1 rounded-xl text-white hover:text-[#b08a5a] hover:bg-black/60 transition-all duration-200 shadow-sm font-serif">
          Carrito
        </Link>
        <Link href="/admin" className="relative font-semibold text-lg px-3 py-1 rounded-xl text-white hover:text-[#b08a5a] hover:bg-black/60 transition-all duration-200 shadow-sm font-serif">
          Admin
        </Link>
        <a href="https://wa.me/+5493584307111" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#b08a5a] transition-colors duration-200">
          <FaWhatsapp size={24} />
        </a>
        <a href="https://www.instagram.com/luismariaycia/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#b08a5a] transition-colors duration-200">
          <FaInstagram size={24} />
        </a>
      </div>
      <div className="md:hidden">
        <Link href="/carrito" className="text-white hover:text-[#b08a5a]">
          <FaShoppingCart size={28} />
        </Link>
      </div>
    </nav>
  );
} 