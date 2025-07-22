'use client';
import Image from 'next/image';
import { useState } from 'react';

const categoriaToImg: Record<string, string> = {
  'desayunos / meriendas / brunchs': '/images/desayuno.jpg',
  'pastelería': '/images/torta.png',
  'almuerzos / cenas': '/images/tostadas.png',
  'helados': '/images/helado.png',
  'opciones antiinflamatorias': '/images/opcionAntiimflamatoria.jpg',
  'bebidas/tragos': '/images/licuado.jpeg',
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
    
    // Disparar evento personalizado para actualizar el carrito
    window.dispatchEvent(new CustomEvent('carritoActualizado'));
    
    setAgregado(true);
    setTimeout(() => setAgregado(false), 1200);
  };

  // Lógica mejorada para encontrar la imagen
  const getImageSrc = (categoria: string) => {
    if (producto.imagen) return producto.imagen;
    const categoriaLower = categoria?.toLowerCase().trim() || '';
    if (categoriaToImg[categoriaLower]) {
      return categoriaToImg[categoriaLower];
    }
    // Buscar coincidencia parcial
    for (const [key, value] of Object.entries(categoriaToImg)) {
      if (categoriaLower.includes(key) || key.includes(categoriaLower)) {
        return value;
      }
    }
    return '/images/desayuno.jpg'; // Imagen por defecto
  };

  const imgSrc = getImageSrc(producto.categoria);

  return (
    <div className="bg-stone-800 border border-stone-600 rounded-xl shadow-lg p-4 flex flex-col h-full transition-all hover:scale-105 hover:shadow-xl duration-300 group">
      <Image
        src={imgSrc}
        alt={producto.nombre}
        width={200}
        height={150}
        className="rounded-lg border border-stone-600 shadow object-cover w-full h-32 bg-stone-700 group-hover:scale-105 transition-transform duration-300 mb-4"
      />
      <div className="text-center w-full flex flex-col flex-grow">
        <h3 className="text-lg font-serif font-bold text-white mb-2 drop-shadow-sm">{producto.nombre}</h3>
        <p className="text-xl font-bold text-white mb-4 drop-shadow-sm">${producto.precio}</p>
        <div className="mt-auto">
          <button
            onClick={handleAgregar}
            className={`w-full py-2 rounded-lg font-semibold text-sm shadow-lg transition-all duration-300 bg-amber-600 text-white border border-amber-500 hover:bg-amber-700 active:scale-95 font-serif ${agregado ? 'bg-green-600 hover:bg-green-700' : ''}`}
          >
            {agregado ? '¡Agregado!' : 'Agregar al carrito'}
          </button>
        </div>
      </div>
    </div>
  );
} 