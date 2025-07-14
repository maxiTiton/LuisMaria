export default function NosotrosSection() {
  return (
    <section id="nosotros" className="relative min-h-[60vh] bg-gradient-to-br from-stone-900 via-neutral-900 to-zinc-900 flex flex-col items-center justify-center px-6 py-16 overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-amber-800 to-orange-800 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-gradient-to-br from-orange-800 to-red-800 rounded-full opacity-15 animate-bounce"></div>
      
      <h2 className="relative text-3xl md:text-4xl font-serif font-bold text-stone-200 mb-8 drop-shadow-lg text-center">Sobre nosotros</h2>
      <div className="relative w-full max-w-4xl text-white text-base bg-stone-800/80 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-stone-600">
        <p className="leading-relaxed text-lg font-light font-serif">
          Luis María y Cía. nació como un sueño familiar de compartir el amor por la buena comida y el café de calidad. Desde nuestros inicios, buscamos crear un espacio cálido, moderno y amigable donde cada cliente se sienta como en casa. <br /><br />
          Hoy seguimos creciendo, innovando y apostando por productos frescos, artesanales y una atención personalizada. ¡Gracias por ser parte de nuestra historia!
        </p>
      </div>
    </section>
  );
} 