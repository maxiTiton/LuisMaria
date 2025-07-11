import Image from 'next/image';
import Link from 'next/link';

export default function InicioSection() {
  return (
    <section id="inicio" className="flex flex-col items-center justify-center min-h-[80vh] bg-black px-4 border-b-4 border-b-[#b08a5a] shadow-2xl animate-fade-in">
      <div className="w-full flex flex-col items-center gap-4 py-0">
        <Image
          src="/logo.png"
          alt="Luis María y Cía. Logo"
          width={300}
          height={300}
          className="shadow-2xl bg-black animate-bounce-slow"
        />
        <p className="text-2xl text-gray-200 text-center max-w-xl font-light drop-shadow-lg">
          Cafetería, pastelería y delicias artesanales en el corazón de la ciudad.<br />
          Disfrutá café, tortas, helados y mucho más en un ambiente cálido y moderno.
        </p>
        <Image
          src="/images/helado.png"
          alt="Café destacado"
          width={520}
          height={340}
          className="rounded-2xl border-4 border-[#b08a5a] shadow-xl object-cover w-full max-w-lg animate-fade-in"
        />
        <Link href="#productos">
          <button className="mt-8 px-12 py-4 bg-black text-white border border-[#b08a5a] rounded-full font-bold text-2xl shadow-xl hover:bg-[#b08a5a] hover:text-black transition-all duration-300 active:scale-95 animate-fade-in font-serif">
            Ver productos
          </button>
        </Link>
      </div>
    </section>
  );
} 