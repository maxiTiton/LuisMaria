'use client';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductoCard from '../../components/ProductoCard';
import CarritoSidebar from '../../components/CarritoSidebar';
import { FaFilter, FaTimes } from 'react-icons/fa';

const categorias = [
  'Desayunos / Meriendas / Brunchs',
  'Pastelería',
  'Almuerzos / Cenas',
  'Helados',
  'Opciones Antiinflamatorias',
  'Bebidas / Tragos'
];

export default function CatalogoPage() {
  const searchParams = useSearchParams();
  const [productos, setProductos] = useState<any[]>([]);
  const [categoriaFiltro, setCategoriaFiltro] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const res = await fetch('/api/productos');
        const data = await res.json();
        setProductos(data.productos || []);
      } catch (error) {
        console.error('Error fetching productos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);

  useEffect(() => {
    const categoria = searchParams.get('categoria');
    if (categoria) {
      setCategoriaFiltro(categoria);
    }
  }, [searchParams]);

  const productosFiltrados = categoriaFiltro === '' 
    ? productos 
    : productos.filter(producto => producto.categoria === categoriaFiltro);

  return (
    <main className="min-h-screen bg-black">
      {/* Header */}
      <div className="bg-black border-b-4 border-b-[#b08a5a] px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-serif font-extrabold text-white mb-4 text-center tracking-tight drop-shadow-xl">
            Catálogo
          </h1>
          <p className="text-xl text-gray-300 text-center mb-8">
            Explora todos nuestros productos y arma tu pedido
          </p>
          
          {/* Filtros */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categorias.map((categoria) => (
              <button
                key={categoria}
                onClick={() => setCategoriaFiltro(categoria)}
                className={`px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 font-serif ${
                  categoriaFiltro === categoria
                    ? 'bg-[#b08a5a] text-black'
                    : 'bg-black text-white border border-[#b08a5a] hover:bg-[#b08a5a] hover:text-black'
                }`}
              >
                {categoria}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="flex">
        {/* Grid de productos */}
        <div className="flex-1 p-8">
          {loading ? (
            <div className="text-center text-white text-xl">
              Cargando productos...
            </div>
          ) : productosFiltrados.length === 0 ? (
            <div className="text-center text-gray-400 text-xl">
              No hay productos en esta categoría
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {productosFiltrados.map((producto) => (
                <ProductoCard key={producto._id} producto={producto} />
              ))}
            </div>
          )}
        </div>

        {/* Carrito sidebar */}
        <CarritoSidebar />
      </div>
    </main>
  );
} 