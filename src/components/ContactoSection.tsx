import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

export default function ContactoSection() {
  return (
    <section id="contacto" className="min-h-[40vh] bg-black flex flex-col items-center justify-center px-4 py-20 border-b-4 border-b-[#b08a5a] animate-fade-in">
      <h2 className="text-4xl md:text-5xl font-serif font-extrabold text-white mb-8 drop-shadow-xl text-center">Contacto</h2>
      <div className="flex flex-col gap-6 items-center bg-black/80 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-[#b08a5a] w-full">
        <a
          href="https://wa.me/+5493584307111"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-8 py-4 bg-black text-white border border-[#b08a5a] rounded-xl font-bold text-xl shadow-xl hover:bg-[#b08a5a] hover:text-black transition-all duration-300 hover:scale-105 font-serif"
        >
          <FaWhatsapp size={32} /> WhatsApp
        </a>
        <a
          href="https://www.instagram.com/luismariaycia/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-8 py-4 bg-black text-white border border-[#b08a5a] rounded-xl font-bold text-xl shadow-xl hover:bg-[#b08a5a] hover:text-black transition-all duration-300 hover:scale-105 font-serif"
        >
          <FaInstagram size={32} /> Instagram
        </a>
      </div>
    </section>
  );
} 