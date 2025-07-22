import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative w-full bg-black/90 text-crema py-8 px-6 flex flex-col md:flex-row items-center justify-center gap-2 border-t border-black shadow-lg animate-fade-in overflow-hidden">
      <div className="relative flex items-center gap-3">
        <span className="font-serif font-bold text-xl tracking-tight text-dorado">Luis María y Cía.</span>
        <span className="text-xs text-doradoSuave">© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
} 