"use client";
import InicioSection from '../components/InicioSection';
import ProductosSection from '../components/ProductosSection';
import NosotrosSection from '../components/NosotrosSection';
import ContactoSection from '../components/ContactoSection';
import UbicacionSection from '../components/UbicacionSection';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f8f5f2] px-0 md:px-0 font-serif animate-fade-in">
      <InicioSection />
      <ProductosSection />
      <NosotrosSection />
      <ContactoSection />
      <UbicacionSection />
    </main>
  );
} 