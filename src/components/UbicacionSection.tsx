import Image from 'next/image';

export default function UbicacionSection() {
  return (
    <section 
      id="ubicacion" 
      className="relative min-h-[60vh] flex items-center justify-center px-6 py-20 pb-8 overflow-hidden scroll-mt-48"
    >
      {/* Imagen de fondo */}
      <Image
        src="/images/fondoUbicacion.jpg"
        alt="Fondo ubicación"
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
      <div className="relative z-20 w-full px-4">
        <h2 className="text-3xl font-serif font-bold text-crema mb-12 text-center tracking-tight drop-shadow-xl">
          Nuestra Ubicación
        </h2>
        
        <div className="w-full max-w-[75vw] mx-auto h-[50vh] min-h-[400px] rounded-2xl overflow-hidden shadow-xl border-2 border-dorado">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.647037165934!2d-64.35580250000001!3d-33.1324806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d20072e90f24cd%3A0x8b91e0b6f76827ab!2sLuis%20Mar%C3%ADa%20%26%20C%C3%ADa!5e0!3m2!1ses!2sar!4v1642525200000!5m2!1ses!2sar"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa Luis María y Cía."
          ></iframe>
        </div>
        
        {/* Footer integrado */}
        <div className="mt-16 text-center max-w-xl mx-auto">
          <div className="border-t border-dorado/30 pt-8">
            <p className="text-crema/80 text-sm font-serif">
              © {new Date().getFullYear()} Luis María y Cía. - Todos los derechos reservados
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 