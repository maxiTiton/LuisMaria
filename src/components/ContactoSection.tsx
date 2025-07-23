import { FaWhatsapp, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';
import Image from 'next/image';

export default function ContactoSection() {
  return (
    <section 
      id="contacto" 
      className="relative min-h-[60vh] flex items-center justify-center px-6 py-20 overflow-hidden scroll-mt-48"
    >
      {/* Imagen de fondo */}
      <Image
        src="/images/fondoContacto.jpg"
        alt="Fondo contacto"
        fill
        priority
        className="object-cover w-full h-full z-0"
      />
      
      {/* Overlay para mejor lectura */}
      <div className="absolute inset-0 bg-marronOscuro/60 z-10" />
      
      {/* Gradientes de transición suave */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#2d1a10] to-transparent z-15" />
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#2d1a10] to-transparent z-15" />

      {/* Contenido */}
      <div className="relative z-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-crema mb-8 text-center tracking-tight drop-shadow-xl">
          Contacto
        </h2>
        <p className="text-base text-doradoSuave text-center mb-12">
          Estamos aquí para ayudarte, ¡no dudes en contactarnos!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Tarjeta de redes sociales */}
          <div className="bg-marron/80 backdrop-blur-md border-2 border-dorado rounded-2xl p-8 shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 group">
            <h3 className="text-xl font-serif font-bold text-crema mb-6 text-center drop-shadow-sm">
              Síguenos en redes
            </h3>
            <div className="flex flex-col gap-4">
              <a
                href="https://wa.me/+5493584307111"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-dorado hover:bg-doradoSuave text-marron font-semibold rounded-lg shadow-lg border border-dorado transition-all duration-300 active:scale-95 font-serif justify-center group-hover:scale-105"
              >
                <FaWhatsapp size={20} /> WhatsApp
              </a>
              <a
                href="https://www.instagram.com/luismariaycia/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-dorado hover:bg-doradoSuave text-marron font-semibold rounded-lg shadow-lg border border-dorado transition-all duration-300 active:scale-95 font-serif justify-center group-hover:scale-105"
              >
                <FaInstagram size={20} /> Instagram
              </a>
            </div>
          </div>

          {/* Tarjeta de información de contacto */}
          <div className="bg-marron/80 backdrop-blur-md border-2 border-dorado rounded-2xl p-8 shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 group">
            <h3 className="text-xl font-serif font-bold text-crema mb-6 text-center drop-shadow-sm">
              Información de contacto
            </h3>
            <div className="flex flex-col gap-4 text-crema">
              <div className="flex items-center gap-3 p-3 bg-doradoSuave/20 rounded-lg">
                <FaPhone size={18} className="text-dorado" />
                <span className="font-medium">+54 9 358 430-7111</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-doradoSuave/20 rounded-lg">
                <FaEnvelope size={18} className="text-dorado" />
                <span className="font-medium">info@luismariaycia.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 