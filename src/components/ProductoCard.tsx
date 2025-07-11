'use client';
import Image from 'next/image';
import { useState } from 'react';

const categoriaToImg: Record<string, string> = {
  cafe: '/images/cafe.png',
  torta: '/images/torta.png',
  helado: '/images/helado.png',
  tostadas: '/images/tostadas.png',
};

export default function ProductoCard({ producto }: { producto: any }) {
  const [agregado, setAgregado] = useState(false);

  const handleAgregar = () => {
    const carrito = JSON.parse(localStorage.getItem('carrito') || '[]');
    const existe = carrito.find((item: any) => item._id === producto._id);
    if (existe) {
      existe.cantidad += 1;
    } else {
      carrito.push({ ...producto, cantidad: 1 });
    }
    localStorage.setItem('carrito', JSON.stringify(carrito));
    setAgregado(true);
    setTimeout(() => setAgregado(false), 1200);
  };

  const imgSrc = producto.imagen || categoriaToImg[producto.categoria?.toLowerCase?.()] || '/images/cafe.png';

  return (
    <div className="bg-black border border-[#b08a5a] rounded-3xl shadow-2xl p-6 flex flex-col items-center gap-6 transition-all hover:scale-105 hover:shadow-lg duration-300 group">
      <Image
        src={imgSrc}
        alt={producto.nombre}
        width={240}
        height={180}
        className="rounded-2xl border-4 border-[#b08a5a] shadow object-cover w-full h-44 bg-black group-hover:scale-105 transition-transform duration-300"
      />
      <div className="text-center w-full">
        <h3 className="text-2xl font-serif font-extrabold text-white mb-1 drop-shadow-lg">{producto.nombre}</h3>
        <p className="text-lg text-[#b08a5a] mb-2 font-semibold uppercase tracking-wide">{producto.categoria}</p>
        <p className="text-2xl font-bold text-white mb-4 drop-shadow">${producto.precio}</p>
        <button
          onClick={handleAgregar}
          className={`w-full py-3 rounded-full font-bold text-lg shadow-xl transition-all duration-300 bg-black text-white border border-[#b08a5a] hover:bg-[#b08a5a] hover:text-black active:scale-95 font-serif ${agregado ? 'bg-[#b08a5a] text-black' : ''}`}
        >
          {agregado ? '¡Agregado!' : 'Agregar al carrito'}
        </button>
      </div>
    </div>
  );
} 