'use client';
import { useState, useEffect } from 'react';
import { FaWhatsapp, FaTrash, FaMinus, FaPlus } from 'react-icons/fa';

interface CarritoItem {
  _id: string;
  nombre: string;
  precio: number;
  cantidad: number;
  categoria: string;
  imagen?: string;
}

export default function CarritoSidebar() {
  const [carrito, setCarrito] = useState<CarritoItem[]>([]);

  useEffect(() => {
    const data = localStorage.getItem('carrito');
    if (data) {
      setCarrito(JSON.parse(data));
    }
  }, []);

  const updateCarrito = (nuevoCarrito: CarritoItem[]) => {
    setCarrito(nuevoCarrito);
    localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
  };

  const agregarItem = (producto: CarritoItem) => {
    const nuevoCarrito = [...carrito];
    const existe = nuevoCarrito.find(item => item._id === producto._id);
    
    if (existe) {
      existe.cantidad += 1;
    } else {
      nuevoCarrito.push({ ...producto, cantidad: 1 });
    }
    
    updateCarrito(nuevoCarrito);
  };

  const quitarItem = (id: string) => {
    const nuevoCarrito = carrito.filter(item => item._id !== id);
    updateCarrito(nuevoCarrito);
  };

  const cambiarCantidad = (id: string, nuevaCantidad: number) => {
    if (nuevaCantidad <= 0) {
      quitarItem(id);
      return;
    }
    
    const nuevoCarrito = carrito.map(item => 
      item._id === id ? { ...item, cantidad: nuevaCantidad } : item
    );
    updateCarrito(nuevoCarrito);
  };

  const getTotal = () => {
    return carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
  };

  const enviarPorWhatsApp = () => {
    if (carrito.length === 0) return;
    
    const mensaje = 
      'Hola! Quiero pedir:%0A' +
      carrito.map(item => 
        `- ${item.cantidad} x ${item.nombre} ($${item.precio})`
      ).join('%0A') +
      `%0ATotal: $${getTotal()}`;
    
    window.open(`https://wa.me/+5493584307111?text=${mensaje}`, '_blank');
  };

  const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <div className="w-80 bg-black border-l border-[#b08a5a] h-screen sticky top-0 overflow-y-auto">
      {/* Header */}
      <div className="p-6 border-b border-[#b08a5a]">
        <h2 className="text-2xl font-serif font-bold text-white">Tu Pedido</h2>
        {totalItems > 0 && (
          <p className="text-sm text-gray-400 mt-1">{totalItems} items</p>
        )}
      </div>

      {/* Contenido del carrito */}
      <div className="flex-1 p-6">
        {carrito.length === 0 ? (
          <div className="text-center text-gray-400 mt-8">
            <p className="text-lg">Tu carrito está vacío</p>
            <p className="text-sm">Agrega productos para empezar</p>
          </div>
        ) : (
          <div className="space-y-4">
            {carrito.map((item) => (
              <div key={item._id} className="bg-black border border-[#b08a5a] rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    <h3 className="font-bold text-white">{item.nombre}</h3>
                    <p className="text-sm text-[#b08a5a]">{item.categoria}</p>
                  </div>
                  <button
                    onClick={() => quitarItem(item._id)}
                    className="text-red-500 hover:text-red-400 ml-2"
                  >
                    <FaTrash size={14} />
                  </button>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => cambiarCantidad(item._id, item.cantidad - 1)}
                      className="bg-[#b08a5a] text-black p-1 rounded hover:bg-[#8b6b4a]"
                    >
                      <FaMinus size={12} />
                    </button>
                    <span className="text-white font-bold w-8 text-center">{item.cantidad}</span>
                    <button
                      onClick={() => cambiarCantidad(item._id, item.cantidad + 1)}
                      className="bg-[#b08a5a] text-black p-1 rounded hover:bg-[#8b6b4a]"
                    >
                      <FaPlus size={12} />
                    </button>
                  </div>
                  <span className="text-white font-bold">${item.precio * item.cantidad}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer con total y botón de WhatsApp */}
      {carrito.length > 0 && (
        <div className="p-6 border-t border-[#b08a5a] bg-black">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-bold text-white">Total:</span>
            <span className="text-2xl font-bold text-[#b08a5a]">${getTotal()}</span>
          </div>
          <button
            onClick={enviarPorWhatsApp}
            className="w-full bg-[#b08a5a] text-black py-3 rounded-lg font-bold text-lg hover:bg-[#8b6b4a] transition-all duration-300 flex items-center justify-center gap-2"
          >
            <FaWhatsapp size={20} />
            Enviar por WhatsApp
          </button>
        </div>
      )}
    </div>
  );
} 