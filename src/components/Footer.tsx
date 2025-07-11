import Link from 'next/link';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-10 px-4 flex flex-col md:flex-row items-center justify-between gap-8 mt-16 border-t border-[#b08a5a] shadow-lg animate-fade-in">
      <div className="flex items-center gap-3">
        <span className="font-serif font-extrabold text-2xl tracking-tight drop-shadow-lg">Luis María y Cía.</span>
        <span className="text-xs opacity-70">© {new Date().getFullYear()}</span>
      </div>
      <div className="flex gap-8 items-center">
        <a href="#inicio" className="hover:underline underline-offset-8 hover:text-[#b08a5a] font-semibold transition-all duration-200 font-serif">Inicio</a>
        <a href="#productos" className="hover:underline underline-offset-8 hover:text-[#b08a5a] font-semibold transition-all duration-200 font-serif">Productos</a>
        <Link href="/carrito" className="hover:underline underline-offset-8 hover:text-[#b08a5a] font-semibold transition-all duration-200 font-serif">Carrito</Link>
        <a href="#nosotros" className="hover:underline underline-offset-8 hover:text-[#b08a5a] font-semibold transition-all duration-200 font-serif">Nosotros</a>
        <a href="#contacto" className="hover:underline underline-offset-8 hover:text-[#b08a5a] font-semibold transition-all duration-200 font-serif">Contacto</a>
        <a href="#ubicacion" className="hover:underline underline-offset-8 hover:text-[#b08a5a] font-semibold transition-all duration-200 font-serif">Ubicación</a>
      </div>
      <div className="flex gap-5 items-center">
        <a href="https://wa.me/+5493584307111" target="_blank" rel="noopener noreferrer" className="hover:text-[#b08a5a] text-white transition-colors duration-200">
          <FaWhatsapp size={28} />
        </a>
        <a href="https://www.instagram.com/luismariaycia/" target="_blank" rel="noopener noreferrer" className="hover:text-[#b08a5a] text-white transition-colors duration-200">
          <FaInstagram size={28} />
        </a>
      </div>
    </footer>
  );
} 