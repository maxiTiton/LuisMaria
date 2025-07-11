'use client';
import { useEffect, useState } from 'react';
import CarritoItem from '../../components/CarritoItem';
import { FaWhatsapp, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

const WHATSAPP_NUMBER = '+5493584307111';

function getTotal(carrito: any[]) {
  return carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
}

export default function CarritoPage() {
  const [carrito, setCarrito] = useState<any[]>([]);

  useEffect(() => {
    const data = localStorage.getItem('carrito');
    if (data) setCarrito(JSON.parse(data));
  }, []);

  const handleQuitar = (id: string) => {
    const nuevo = carrito.filter((item) => item._id !== id);
    setCarrito(nuevo);
    localStorage.setItem('carrito', JSON.stringify(nuevo));
  };

  const total = getTotal(carrito);
  const mensaje =
    'Hola! Quiero pedir:%0A' +
    carrito
      .map(
        (item) =>
          `- ${item.cantidad} x ${item.nombre} ($${item.precio})`
      )
      .join('%0A') +
    `%0ATotal: $${total}`;

  return (
    <main className="min-h-screen bg-[#f8f5f2] px-4 py-12 font-serif animate-fade-in">
      <div className="max-w-2xl mx-auto mb-8">
        <Link href="/" className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#b08a5a] to-[#6d4c2b] text-white font-semibold shadow hover:from-[#e2d6c2] hover:to-[#b08a5a] hover:text-[#6d4c2b] transition mb-4 font-serif">
          <FaArrowLeft /> Volver al inicio
        </Link>
      </div>
      <h2 className="text-4xl font-serif font-extrabold text-[#6d4c2b] mb-8 text-center drop-shadow-xl">Carrito de compra</h2>
      {carrito.length === 0 ? (
        <p className="text-center text-[#b08a5a] text-lg font-semibold">Tu carrito está vacío.</p>
      ) : (
        <>
          <div className="flex flex-col gap-4 max-w-2xl mx-auto">
            {carrito.map((item) => (
              <CarritoItem key={item._id} item={item} onQuitar={handleQuitar} />
            ))}
          </div>
          <div className="mt-8 flex flex-col items-center gap-4">
            <div className="text-2xl font-bold text-[#6d4c2b]">
              Total: <span className="text-[#b08a5a]">${total}</span>
            </div>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${mensaje}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#b08a5a] to-[#6d4c2b] text-white rounded-full font-bold text-xl shadow-xl hover:from-[#e2d6c2] hover:to-[#b08a5a] hover:text-[#6d4c2b] transition-all duration-300 hover:scale-105 font-serif"
            >
              <FaWhatsapp size={28} /> Enviar pedido por WhatsApp
            </a>
          </div>
        </>
      )}
    </main>
  );
} 