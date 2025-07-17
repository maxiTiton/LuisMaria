"use client";
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import InicioSection from '../components/InicioSection';
import CategoriasSection from '../components/CategoriasSection';
import NosotrosSection from '../components/NosotrosSection';
import ContactoSection from '../components/ContactoSection';
import UbicacionSection from '../components/UbicacionSection';

export default function HomePage() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    const s = searchParams.get('status');
    if (s) setStatus(s);
  }, [searchParams]);

  const getMensaje = () => {
    if (status === 'success') return { color: 'bg-green-600', msg: '¡Pago realizado con éxito! Pronto nos pondremos en contacto.' };
    if (status === 'pending') return { color: 'bg-yellow-500', msg: 'Tu pago está pendiente. Te avisaremos cuando se acredite.' };
    if (status === 'failure') return { color: 'bg-red-600', msg: 'El pago fue rechazado o cancelado. Intenta nuevamente.' };
    return null;
  };
  const mensaje = getMensaje();

  return (
    <main className="min-h-screen bg-gradient-to-br from-stone-900 via-neutral-900 to-zinc-900 font-serif animate-fade-in">
      {mensaje && (
        <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded-xl shadow-lg text-white text-lg font-semibold ${mensaje.color}`}>
          {mensaje.msg}
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