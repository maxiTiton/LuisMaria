import Image from 'next/image';

export default function InicioSection() {
  return (
    <section id="inicio" className="flex flex-col items-center justify-center min-h-[80vh] bg-black px-4 border-b-4 border-b-[#b08a5a] shadow-2xl animate-fade-in">
      <div className="w-full flex flex-col items-center gap-8 py-8">
        <Image
          src="/logo.png"
          alt="Luis María y Cía. Logo"
          width={300}
          height={300}
          className="shadow-2xl bg-black animate-bounce-slow"
        />
        <p className="text-2xl text-gray-200 text-center max-w-2xl font-light drop-shadow-lg">
          Cafetería, pastelería y delicias artesanales en el corazón de la ciudad.<br />
          Disfrutá café, tortas, helados y mucho más en un ambiente cálido y moderno.
        </p>
      </div>
    </section>
  );
} 