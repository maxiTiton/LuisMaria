import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative w-full min-h-[20vh] flex items-center justify-center py-8 px-6 overflow-hidden">
      {/* Imagen de fondo */}
      <Image
        src="/images/fondoNosotros.jpg"
        alt="Fondo footer"
        fill
        className="object-cover w-full h-full z-0"
      />
      
      {/* Overlay para mejor lectura */}
      <div className="absolute inset-0 bg-marronOscuro/70 z-10" />
      
      {/* Gradiente de transición suave en la parte superior */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#2d1a10] to-transparent z-15" />

      {/* Contenido */}
      <div className="relative z-20 text-center">
        {/* Copyright */}
        <div className="border-t border-dorado/30 pt-6">
          <p className="text-crema/80 text-sm font-serif">
            © {new Date().getFullYear()} Luis María y Cía. - Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
} 