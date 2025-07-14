import Link from 'next/link';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative w-full bg-gradient-to-r from-stone-900 to-neutral-900 text-amber-200 py-8 px-6 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-stone-600 shadow-lg animate-fade-in overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-amber-800 to-orange-800 rounded-full opacity-20 -translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-800 to-red-800 rounded-full opacity-25 translate-x-12 translate-y-12"></div>
      
      <div className="relative flex items-center gap-3">
        <span className="font-serif font-bold text-xl tracking-tight bg-gradient-to-r from-amber-200 to-orange-200 bg-clip-text text-transparent">Luis María y Cía.</span>
        <span className="text-xs text-amber-300">© {new Date().getFullYear()}</span>
      </div>
      <div className="relative flex gap-6 items-center">
        <a href="#inicio" className="hover:text-amber-200 font-medium transition-all duration-300 font-serif text-sm">Inicio</a>
        <a href="#productos" className="hover:text-amber-200 font-medium transition-all duration-300 font-serif text-sm">Productos</a>
        <Link href="/carrito" className="hover:text-amber-200 font-medium transition-all duration-300 font-serif text-sm">Carrito</Link>
        <a href="#nosotros" className="hover:text-amber-200 font-medium transition-all duration-300 font-serif text-sm">Nosotros</a>
        <a href="#contacto" className="hover:text-amber-200 font-medium transition-all duration-300 font-serif text-sm">Contacto</a>
        <a href="#ubicacion" className="hover:text-amber-200 font-medium transition-all duration-300 font-serif text-sm">Ubicación</a>
      </div>
      <div className="relative flex gap-4 items-center">
        <a href="https://wa.me/+5493584307111" target="_blank" rel="noopener noreferrer" className="text-amber-200 hover:text-amber-100 transition-colors duration-300 p-2 hover:bg-stone-700 rounded-lg">
          <FaWhatsapp size={20} />
        </a>
        <a href="https://www.instagram.com/luismariaycia/" target="_blank" rel="noopener noreferrer" className="text-amber-200 hover:text-amber-100 transition-colors duration-300 p-2 hover:bg-stone-700 rounded-lg">
          <FaInstagram size={20} />
        </a>
      </div>
    </footer>
  );
} 