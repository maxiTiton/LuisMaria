"use client";
import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import InicioSection from '../components/InicioSection';
import CategoriasSection from '../components/CategoriasSection';
import NosotrosSection from '../components/NosotrosSection';
import ContactoSection from '../components/ContactoSection';
import UbicacionSection from '../components/UbicacionSection';

function HomePageContent() {
  const searchParams = useSearchParams();
  const [showThanks, setShowThanks] = useState(false);

  useEffect(() => {
    const s = searchParams.get('status');
    if (s) {
      setShowThanks(true);
      const timer = setTimeout(() => setShowThanks(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [searchParams]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-stone-900 via-neutral-900 to-zinc-900 font-serif animate-fade-in">
      {showThanks && (
        <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-[9999] px-8 py-4 rounded-xl shadow-2xl text-white text-lg font-semibold bg-green-700 border border-green-400 animate-fade-in">
          ¡Gracias por tu compra! Esperamos que disfrutes nuestras delicias. Pronto nos pondremos en contacto.
        </div>
      )}
      <InicioSection />
      <CategoriasSection />
      <NosotrosSection />
      <ContactoSection />
      <UbicacionSection />
    </main>
  );
}

export default function HomePage() {
  return (
    <Suspense>
      <HomePageContent />
    </Suspense>
  );
} 