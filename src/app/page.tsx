"use client";
import InicioSection from '../components/InicioSection';
import CategoriasSection from '../components/CategoriasSection';
import NosotrosSection from '../components/NosotrosSection';
import ContactoSection from '../components/ContactoSection';
import UbicacionSection from '../components/UbicacionSection';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-stone-900 via-neutral-900 to-zinc-900 font-serif animate-fade-in">
      <InicioSection />
      <CategoriasSection />
      <NosotrosSection />
      <ContactoSection />
      <UbicacionSection />
    </main>
  );
} 