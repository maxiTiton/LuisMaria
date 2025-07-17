'use client';
import { useState, useEffect } from 'react';
import { FaWhatsapp, FaTrash, FaMinus, FaPlus, FaShoppingCart } from 'react-icons/fa';

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

    // Función para escuchar cambios en el localStorage
    const handleStorageChange = () => {
      const data = localStorage.getItem('carrito');
      if (data) {
        setCarrito(JSON.parse(data));
      }
    };

    // Escuchar el evento storage
    window.addEventListener('storage', handleStorageChange);
    
    // Escuchar evento personalizado para actualización inmediata
    const handleCarritoActualizado = () => {
      const data = localStorage.getItem('carrito');
      if (data) {
        setCarrito(JSON.parse(data));
      }
    };
    
    window.addEventListener('carritoActualizado', handleCarritoActualizado);
    
    // También escuchar cambios locales (mismo tab)
    const interval = setInterval(() => {
      const data = localStorage.getItem('carrito');
      if (data) {
        const parsedData = JSON.parse(data);
        if (JSON.stringify(parsedData) !== JSON.stringify(carrito)) {
          setCarrito(parsedData);
        }
      }
    }, 100);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('carritoActualizado', handleCarritoActualizado);
      clearInterval(interval);
    };
  }, [carrito]);

  const updateCarrito = (nuevoCarrito: CarritoItem[]) => {
    setCarrito(nuevoCarrito);
    localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
    // Disparar evento personalizado para notificar a otros componentes
    window.dispatchEvent(new Event('carritoActualizado'));
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

  const pagarConMercadoPago = async () => {
    if (carrito.length === 0) return;
    try {
      const res = await fetch('/api/pago/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ carrito }),
      });
      const data = await res.json();
      if (data.init_point) {
        window.location.href = data.init_point;
      } else {
        alert('Error al iniciar el pago: ' + (data.error || 'Intenta nuevamente.'));
      }
    } catch (err) {
      alert('Error al conectar con Mercado Pago.');
    }
  };

  return (
    <div className="w-80 bg-gradient-to-br from-stone-900 via-neutral-900 to-zinc-900 border border-stone-600 fixed top-0 right-0 h-screen overflow-y-auto shadow-2xl z-50" style={{ boxShadow: '0 0 30px rgba(0, 0, 0, 0.5), 0 0 60px rgba(0, 0, 0, 0.3)' }}>
      {/* Header */}
      <div className="p-6 border-b border-stone-600 bg-gradient-to-r from-stone-800 to-neutral-800">
        <h2 className="text-2xl font-serif font-bold text-white flex items-center gap-3 mb-2">
          <div className="bg-amber-600 p-2 rounded-full">
            <FaShoppingCart size={20} className="text-white" />
          </div>
          Tu Pedido
        </h2>
        {totalItems > 0 && (
          <div className="flex items-center gap-2">
            <span className="bg-amber-600 text-white text-xs font-bold px-2 py-1 rounded-full">
              {totalItems}
            </span>
            <p className="text-sm text-stone-300">productos</p>
          </div>
        )}
      </div>

      {/* Contenido del carrito */}
      <div className="flex-1 p-6">
        {carrito.length === 0 ? (
          <div className="text-center text-white mt-12">
            <div className="bg-stone-800/50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <FaShoppingCart size={24} className="text-stone-400" />
            </div>
            <p className="text-lg font-semibold mb-2">Tu carrito está vacío</p>
            <p className="text-sm text-stone-300">Agrega productos para empezar</p>
          </div>
        ) : (
          <div className="space-y-4">
            {carrito.map((item, index) => (
              <div key={item._id} className="bg-gradient-to-br from-stone-800 to-neutral-800 border border-stone-600 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    <h3 className="font-bold text-white text-sm">{item.nombre}</h3>
                    <p className="text-xs text-white">{item.categoria}</p>
                  </div>
                  <button
                    onClick={() => quitarItem(item._id)}
                    className="text-red-400 hover:text-red-300 ml-2 p-1 hover:bg-red-900/30 rounded transition-colors duration-200"
                  >
                    <FaTrash size={12} />
                  </button>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => cambiarCantidad(item._id, item.cantidad - 1)}
                      className="bg-gradient-to-r from-amber-600 to-amber-700 text-white p-2 rounded-lg hover:from-amber-700 hover:to-amber-800 transition-all duration-200 shadow-md"
                    >
                      <FaMinus size={10} />
                    </button>
                    <span className="text-white font-bold w-8 text-center text-lg bg-stone-700 rounded-lg py-1">{item.cantidad}</span>
                    <button
                      onClick={() => cambiarCantidad(item._id, item.cantidad + 1)}
                      className="bg-gradient-to-r from-amber-600 to-amber-700 text-white p-2 rounded-lg hover:from-amber-700 hover:to-amber-800 transition-all duration-200 shadow-md"
                    >
                      <FaPlus size={10} />
                    </button>
                  </div>
                  <span className="text-white font-bold text-sm">${item.precio * item.cantidad}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer con total y botón de WhatsApp */}
      {carrito.length > 0 && (
        <div className="p-6 border-t border-stone-600 bg-gradient-to-r from-stone-800 to-neutral-800">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-bold text-white">Total:</span>
            <span className="text-2xl font-bold text-amber-400">${getTotal()}</span>
          </div>
          <div className="flex flex-col gap-3">
            <button
              onClick={enviarPorWhatsApp}
              className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-xl font-semibold text-base hover:from-green-700 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <FaWhatsapp size={18} />
              Enviar por WhatsApp
            </button>
            <button
              onClick={pagarConMercadoPago}
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-xl font-semibold text-base hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              {/* Aquí podrías agregar un ícono de Mercado Pago si tienes uno */}
              Pagar con Mercado Pago
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 