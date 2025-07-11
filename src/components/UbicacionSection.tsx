export default function UbicacionSection() {
  return (
    <section id="ubicacion" className="min-h-[40vh] bg-black flex flex-col items-center justify-center px-4 py-20 animate-fade-in">
      <h2 className="text-4xl md:text-5xl font-serif font-extrabold text-white mb-8 drop-shadow-xl text-center">Dónde estamos</h2>
      <div className="w-full max-w-2xl aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-[#b08a5a] bg-black/80 backdrop-blur-xl">
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