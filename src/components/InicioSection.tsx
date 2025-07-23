import Image from 'next/image';

export default function InicioSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo */}
      <Image
        src="/images/imagenDeFondo.jpg"
        alt="Fondo hero"
        fill
        priority
        className="object-cover w-full h-full z-0"
      />
      {/* Overlay sobrio y elegante, más transparente para mayor nitidez */}
      <div className="absolute inset-0 bg-marronOscuro/60 z-10" />
      
      {/* Gradiente de transición suave en la parte inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#2d1a10] to-transparent z-15" />
      {/* Contenido principal */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4">
        <Image
          src="/logo.png"
          alt="Logo Luis María y Cía."
          width={160}
          height={160}
          className="mb-6 drop-shadow-xl rounded-full border-2 border-dorado"
        />
        <h1 className="text-4xl md:text-5xl font-extrabold font-serif text-crema drop-shadow-lg mb-4 tracking-tight">
          Luis María y Cía.
        </h1>
        <p className="text-lg md:text-2xl text-doradoSuave font-semibold mb-8 max-w-2xl drop-shadow-md">
          Delicias artesanales, pastelería, brunchs y mucho más.
        </p>
        <a href="#categorias">
          <button className="px-8 py-3 bg-dorado hover:bg-doradoSuave text-marron font-bold rounded-xl text-lg shadow-lg border-2 border-dorado transition-all duration-300">
            Ver nuestro menú
          </button>
        </a>
      </div>
    </section>
  );
} 