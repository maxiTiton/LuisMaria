'use client';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import ProductoCard from '../../components/ProductoCard';
import CarritoSidebar from '../../components/CarritoSidebar';
import { FaFilter, FaTimes, FaArrowLeft } from 'react-icons/fa';
import Image from 'next/image';

const categorias = [
  'Desayunos / Meriendas / Brunchs',
  'Pastelería',
  'Almuerzos / Cenas',
  'Helados',
  'Opciones Antiinflamatorias',
  'Bebidas/Tragos'
];

// Componente separado que usa useSearchParams
function CatalogoContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [productos, setProductos] = useState<any[]>([]);
  const [categoriaFiltro, setCategoriaFiltro] = useState('');
  const [loading, setLoading] = useState(true);
  const [carritoAbierto, setCarritoAbierto] = useState(false);
  const [carritoItems, setCarritoItems] = useState(0);

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

  // Verificar items del carrito y abrir sidebar automáticamente
  useEffect(() => {
    const checkCarrito = () => {
      const carrito = JSON.parse(localStorage.getItem('carrito') || '[]');
      const totalItems = carrito.reduce((acc: number, item: any) => acc + item.cantidad, 0);
      const previousItems = carritoItems;
      
      setCarritoItems(totalItems);
      
      // Si se agregaron items al carrito, abrir el sidebar automáticamente
      if (totalItems > previousItems && !carritoAbierto) {
        setCarritoAbierto(true);
      }
    };

    checkCarrito();
    
    // Escuchar cambios en el carrito
    const handleCarritoChange = () => {
      checkCarrito();
    };

    window.addEventListener('carritoActualizado', handleCarritoChange);
    window.addEventListener('storage', handleCarritoChange);

    return () => {
      window.removeEventListener('carritoActualizado', handleCarritoChange);
      window.removeEventListener('storage', handleCarritoChange);
    };
  }, [carritoItems, carritoAbierto]);

  useEffect(() => {
    const categoria = searchParams.get('categoria');
    if (categoria) {
      setCategoriaFiltro(categoria);
    }
  }, [searchParams]);

  // Solo mostrar productos habilitados
  const productosHabilitados = productos.filter(producto => producto.habilitado !== false);
  const productosFiltrados = categoriaFiltro === '' 
    ? productosHabilitados 
    : productosHabilitados.filter(producto => producto.categoria === categoriaFiltro);

  return (
    <main className={`min-h-screen bg-gradient-to-br from-stone-900 via-neutral-900 to-zinc-900${carritoAbierto ? ' pr-80' : ''}`}>
      {/* Header personalizado para catálogo */}
      <div className="bg-gradient-to-r from-stone-800 to-neutral-800 border-b border-stone-600 px-4 py-4 z-30 relative">
        <div className="max-w-6xl mx-auto flex items-center">
          {/* Logo clickeable para volver al inicio */}
          <div className="flex items-center">
            <button 
              onClick={() => { window.location.href = '/' }}
              className="flex items-center gap-3 hover:scale-105 transition-transform duration-300 bg-stone-700 hover:bg-stone-600 px-4 py-2 rounded-lg shadow-lg border border-stone-600"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full blur-lg opacity-25"></div>
                <Image src="/logo.png" alt="Logo" width={40} height={40} className="relative shadow-lg bg-transparent rounded-full border-2 border-white/30" />
              </div>
              <div className="flex items-center gap-2">
                <FaArrowLeft size={16} className="text-stone-200" />
                <span className="font-semibold text-stone-200">Volver a inicio</span>
              </div>
            </button>
          </div>

          {/* Título del catálogo centrado */}
          <div className="flex-1 flex justify-center">
            <h1 className="text-2xl font-serif font-bold text-stone-200">Catálogo de Productos</h1>
          </div>

          {/* Espacio invisible para balancear el layout */}
          <div className="invisible">
            <button 
              className="flex items-center gap-3 bg-stone-700 px-4 py-2 rounded-lg shadow-lg border border-stone-600"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full blur-lg opacity-25"></div>
                <Image src="/logo.png" alt="Logo" width={40} height={40} className="relative shadow-lg bg-transparent rounded-full border-2 border-white/30" />
              </div>
              <div className="flex items-center gap-2">
                <FaArrowLeft size={16} className="text-stone-200" />
                <span className="font-semibold text-stone-200">Volver a inicio</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Filtros */}
      <div className="bg-gradient-to-r from-stone-700 to-neutral-700 border-b border-stone-600 px-4 py-4 z-30 relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {categorias.map((categoria) => (
              <button
                key={categoria}
                onClick={() => setCategoriaFiltro(categoria)}
                className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 font-serif ${
                  categoriaFiltro === categoria
                    ? 'bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-md'
                    : 'bg-stone-800 text-stone-200 border border-stone-600 hover:bg-amber-600 hover:border-amber-500'
                }`}
              >
                {categoria}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div>
        {/* Grid de productos */}
        <div className="p-6">
          {loading ? (
            <div className="text-center text-white text-lg">
              Cargando productos...
            </div>
          ) : productosFiltrados.length === 0 ? (
            <div className="text-center text-white text-lg">
              No hay productos en esta categoría
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {productosFiltrados.map((producto) => (
                <ProductoCard key={producto._id} producto={producto} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Carrito sidebar - posicionado fijo */}
      {carritoAbierto && <CarritoSidebar />}
    </main>
  );
}

// Componente principal que envuelve el contenido en Suspense
export default function CatalogoPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-stone-900 via-neutral-900 to-zinc-900 flex items-center justify-center">
        <div className="text-center text-white text-lg">
          Cargando catálogo...
        </div>
      </div>
    }>
      <CatalogoContent />
    </Suspense>
  );
} 