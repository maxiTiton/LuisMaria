export default function UbicacionSection() {
  return (
    <section id="ubicacion" className="relative bg-gradient-to-br from-stone-900 via-neutral-900 to-zinc-900 flex flex-col items-center px-6 py-16 overflow-hidden scroll-mt-48">
      {/* Elementos decorativos */}
      <div className="absolute top-5 left-5 w-16 h-16 bg-gradient-to-br from-amber-800 to-orange-800 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-5 right-5 w-12 h-12 bg-gradient-to-br from-orange-800 to-red-800 rounded-full opacity-15 animate-bounce"></div>
      
      <div id="ubicacion" className="scroll-mt-48"></div>
      <h2 className="text-3xl font-serif font-bold text-stone-200 mb-6 text-center tracking-tight drop-shadow-xl">
        Ubicación
      </h2>
      <div className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-xl border border-stone-600 bg-stone-800/80 backdrop-blur-xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.123456789!2d-63.000000!3d-32.000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2sLuis+Mar%C3%ADa+%26+C%C3%ADa!5e0!3m2!1ses-419!2sar!4v1710000000000!5m2!1ses-419!2sar"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa Luis María y Cía."
        ></iframe>
      </div>
    </section>
  );
} 