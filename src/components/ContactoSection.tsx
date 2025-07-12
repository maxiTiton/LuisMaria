import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

export default function ContactoSection() {
  return (
    <section id="contacto" className="relative min-h-[50vh] bg-gradient-to-br from-stone-900 via-neutral-900 to-zinc-900 flex flex-col items-center justify-center px-6 py-16 overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-5 left-5 w-16 h-16 bg-gradient-to-br from-amber-800 to-orange-800 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-5 right-5 w-12 h-12 bg-gradient-to-br from-orange-800 to-red-800 rounded-full opacity-15 animate-bounce"></div>
      
      <h2 className="relative text-3xl md:text-4xl font-serif font-bold text-stone-200 mb-8 drop-shadow-lg text-center">Contacto</h2>
      <div className="relative flex flex-col gap-4 items-center bg-stone-800/80 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-stone-600 w-full max-w-md">
        <a
          href="https://wa.me/+5493584307111"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white border border-green-600 rounded-xl font-semibold text-lg shadow-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 hover:scale-105 font-serif w-full justify-center"
        >
          <FaWhatsapp size={24} /> WhatsApp
        </a>
        <a
          href="https://www.instagram.com/luismariaycia/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-6 py-3 bg-amber-600 text-white border border-amber-500 rounded-xl font-semibold text-lg shadow-lg hover:bg-amber-700 transition-all duration-300 hover:scale-105 font-serif w-full justify-center"
        >
          <FaInstagram size={24} /> Instagram
        </a>
      </div>
    </section>
  );
} 