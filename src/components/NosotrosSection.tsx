import Image from 'next/image';

export default function NosotrosSection() {
  return (
    <section
      id="nosotros"
      className="relative min-h-[60vh] flex items-center justify-center px-6 py-20 overflow-hidden scroll-mt-48"
    >
      {/* Imagen de fondo */}
      <Image
        src="/images/fondoNosotros.jpg"
        alt="Fondo sobre nosotros"
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
      <div className="relative z-20 max-w-5xl mx-auto text-crema text-center">
        <h2 className="text-3xl font-serif font-bold text-crema mb-8 tracking-tight drop-shadow-xl">
          Sobre Nosotros
        </h2>
        <div className="bg-marron/80 backdrop-blur-md rounded-2xl p-8 shadow-lg border-2 border-dorado text-left">
          <p className="text-lg md:text-xl font-light font-serif leading-relaxed text-crema/90">
            <span className="text-dorado font-semibold">Luis María y Cía.</span> nació como un sueño familiar de compartir el amor por la buena comida y el café de calidad. Desde nuestros inicios, buscamos crear un espacio cálido, moderno y amigable donde cada cliente se sienta como en casa.
            <br /><br />
            Hoy seguimos creciendo, innovando y apostando por productos frescos, artesanales y una atención personalizada. <span className="italic">¡Gracias por ser parte de nuestra historia!</span>
          </p>
        </div>
      </div>
    </section>
  );
}

