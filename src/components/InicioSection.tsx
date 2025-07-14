import Image from 'next/image';

export default function InicioSection() {
  return (
    <section id="inicio" className="relative flex flex-col items-center justify-center min-h-[80vh] overflow-hidden">
      {/* Fondo elegante con gradientes y patrones */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-neutral-900 to-zinc-900"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-amber-900/20 via-orange-900/15 to-yellow-900/25"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(146,64,14,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(120,53,15,0.15),transparent_50%)]"></div>
      
      {/* Elementos decorativos */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-amber-800 to-orange-800 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-orange-800 to-red-800 rounded-full opacity-25 animate-bounce"></div>
      <div className="absolute top-1/2 left-5 w-16 h-16 bg-gradient-to-br from-amber-800 to-orange-800 rounded-full opacity-15 animate-ping"></div>
      
      <div className="relative w-full flex flex-col items-center gap-8 py-12 px-4">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-700 to-orange-700 rounded-full blur-2xl opacity-25 animate-pulse"></div>
          <Image
            src="/logo.png"
            alt="Luis María y Cía. Logo"
            width={220}
            height={220}
            className="relative shadow-2xl bg-transparent animate-bounce-slow rounded-full border-4 border-white/30 backdrop-blur-sm"
          />
        </div>
        
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold bg-gradient-to-r from-amber-200 via-orange-200 to-yellow-200 bg-clip-text text-transparent mb-4 drop-shadow-lg">
            Luis María y Cía.
          </h1>
          <p className="text-lg md:text-xl text-stone-200 text-center font-light leading-relaxed drop-shadow-sm">
            Cafetería, pastelería y delicias artesanales en el corazón de la ciudad.<br />
            Disfrutá café, tortas, helados y mucho más en un ambiente cálido y moderno.
          </p>
        </div>
        
        {/* Botón de acción */}
        <div className="mt-8">
          <a href="#categorias" className="inline-flex items-center px-8 py-4 bg-amber-600 text-white font-bold text-lg rounded-full shadow-lg hover:bg-amber-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Explorar Menú
          </a>
        </div>
      </div>
    </section>
  );
} 