export default function NosotrosSection() {
  return (
    <section id="nosotros" className="min-h-[50vh] bg-black flex flex-col items-center justify-center px-4 py-20 border-b-4 border-b-[#b08a5a] animate-fade-in">
      <h2 className="text-4xl md:text-5xl font-serif font-extrabold text-white mb-8 drop-shadow-xl text-center">Sobre nosotros</h2>
      <div className="max-w-2xl text-gray-300 text-lg bg-black/80 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-[#b08a5a]">
        <p className="leading-relaxed text-xl font-light font-serif">
          Luis María y Cía. nació como un sueño familiar de compartir el amor por la buena comida y el café de calidad. Desde nuestros inicios, buscamos crear un espacio cálido, moderno y amigable donde cada cliente se sienta como en casa. <br /><br />
          Hoy seguimos creciendo, innovando y apostando por productos frescos, artesanales y una atención personalizada. ¡Gracias por ser parte de nuestra historia!
        </p>
      </div>
    </section>
  );
} 