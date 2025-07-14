'use client';
import { useState, useEffect } from 'react';

type Producto = {
  _id: string;
  nombre: string;
  precio: number;
  categoria: string;
  habilitado?: boolean;
};

export default function AdminPage() {
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(false);
  const [productos, setProductos] = useState<Producto[]>([]);
  const [nuevo, setNuevo] = useState({ nombre: '', precio: '', categoria: '' });
  const [editandoId, setEditandoId] = useState<string|null>(null);
  const [editado, setEditado] = useState({ nombre: '', precio: '', categoria: '' });
  const [filtroCategoria, setFiltroCategoria] = useState('Todos');
  const [busqueda, setBusqueda] = useState('');
  const [error, setError] = useState('');
  const [cargandoProductos, setCargandoProductos] = useState(false);

  // Leer token de localStorage al cargar
  useEffect(() => {
    const savedToken = localStorage.getItem('admin_token');
    if (savedToken) setToken(savedToken);
  }, []);

  // Guardar token en localStorage cuando cambia
  useEffect(() => {
    if (token) localStorage.setItem('admin_token', token);
  }, [token]);

  // Cargar productos de la API
  const fetchProductos = async () => {
    setCargandoProductos(true);
    setError('');
    try {
      const res = await fetch('/api/productos');
      const data = await res.json();
      setProductos(data.productos || []);
    } catch (e) {
      setError('Error al cargar productos');
    } finally {
      setCargandoProductos(false);
    }
  };

  useEffect(() => {
    if (!token) return;
    fetchProductos();
  }, [token]);

  // Agregar producto
  const handleAgregar = async () => {
    if (!nuevo.nombre || !nuevo.precio || !nuevo.categoria) return;
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/productos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'authorization': token,
        },
        body: JSON.stringify({ ...nuevo }),
      });
      if (!res.ok) throw new Error('No autorizado o error al agregar');
      setNuevo({ nombre: '', precio: '', categoria: '' });
      const data = await res.json();
      setProductos(prev => [...prev, data.producto]);
    } catch (e) {
      setError('Error al agregar producto (token incorrecto o error en el servidor)');
    } finally {
      setLoading(false);
    }
  };

  // Eliminar producto
  const handleEliminar = async (id: string) => {
    if (!window.confirm('¿Estás seguro que deseas eliminar este producto? Esta acción no se puede deshacer.')) return;
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`/api/productos/${id}`, {
        method: 'DELETE',
        headers: { 'authorization': token },
      });
      if (!res.ok) throw new Error('No autorizado o error al eliminar');
      setProductos(productos.filter(p => p._id !== id));
    } catch (e) {
      setError('Error al eliminar producto (token incorrecto o error en el servidor)');
    } finally {
      setLoading(false);
    }
  };

  // Editar producto
  const handleEditar = (prod: Producto) => {
    setEditandoId(prod._id);
    setEditado({ nombre: prod.nombre, precio: String(prod.precio), categoria: prod.categoria });
  };
  const handleGuardar = async (id: string) => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`/api/productos/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'authorization': token,
        },
        body: JSON.stringify({ ...editado }),
      });
      if (!res.ok) throw new Error('No autorizado o error al editar');
      const data = await res.json();
      setProductos(productos.map(p => p._id === id ? data.producto : p));
      setEditandoId(null);
      setEditado({ nombre: '', precio: '', categoria: '' });
    } catch (e) {
      setError('Error al editar producto (token incorrecto o error en el servidor)');
    } finally {
      setLoading(false);
    }
  };
  const handleCancelar = () => {
    setEditandoId(null);
    setEditado({ nombre: '', precio: '', categoria: '' });
  };

  // Habilitar/deshabilitar producto
  const handleToggleHabilitado = async (prod: Producto) => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`/api/productos/${prod._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'authorization': token,
        },
        body: JSON.stringify({ ...prod, habilitado: !prod.habilitado }),
      });
      if (!res.ok) throw new Error('No autorizado o error al actualizar');
      await fetchProductos();
    } catch (e: any) {
      setError('Error al cambiar estado (token incorrecto o error en el servidor)');
    } finally {
      setLoading(false);
    }
  };

  const normalizar = (str: string) => str.trim().toLowerCase();
  const categoriasMap = new Map<string, string>();
  productos.forEach(p => {
    const norm = normalizar(p.categoria);
    if (norm !== 'helado' && norm !== 'bebidas / tragos' && !categoriasMap.has(norm)) {
      categoriasMap.set(norm, p.categoria);
    }
  });
  const categoriasUnicas = ['Todos', ...Array.from(categoriasMap.values())];
  const productosFiltrados = productos.filter(p => {
    const cumpleCategoria = filtroCategoria === 'Todos' || normalizar(p.categoria) === normalizar(filtroCategoria);
    const cumpleBusqueda = busqueda === '' || normalizar(p.nombre).includes(normalizar(busqueda));
    return cumpleCategoria && cumpleBusqueda;
  });

  // Si no hay token, pedirlo
  if (!token) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-stone-900 via-neutral-900 to-zinc-900 px-4 py-16 font-serif animate-fade-in">
        <h2 className="text-4xl font-serif font-extrabold text-stone-200 mb-4 drop-shadow-xl text-center">Token de administrador</h2>
        <p className="text-stone-400 text-center mb-6 max-w-md mx-auto">Ingresa el token para acceder al panel de administración.</p>
        <div className="bg-stone-800/90 backdrop-blur-xl rounded-2xl p-10 shadow-2xl border border-stone-600 flex flex-col gap-4 w-full max-w-md">
          <input
            type="password"
            placeholder="Token de administrador"
            value={token}
            onChange={e => setToken(e.target.value)}
            className="border border-stone-600 rounded-lg px-4 py-3 mb-4 bg-stone-900 text-stone-200 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-600 font-serif"
          />
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen min-w-full flex flex-col bg-gradient-to-br from-stone-900 via-neutral-900 to-zinc-900 px-0 py-0 font-serif animate-fade-in">
      <h2 className="text-4xl font-serif font-extrabold text-stone-200 mb-8 drop-shadow-xl text-center pt-10">Panel de administración</h2>
      <div className="bg-stone-800/90 backdrop-blur-xl rounded-none p-10 shadow-2xl border border-stone-600 w-full h-full flex flex-col flex-1 overflow-auto">
        <h3 className="text-2xl font-bold text-stone-200 mb-6">Listado de Productos</h3>
        {/* Filtros de categoría */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categoriasUnicas.map(cat => (
            <button
              key={cat}
              onClick={() => setFiltroCategoria(cat)}
              className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 font-serif border shadow-sm ${
                normalizar(filtroCategoria) === normalizar(cat)
                  ? 'bg-amber-600 text-white border-amber-500'
                  : 'bg-stone-700 text-stone-200 border-stone-600 hover:bg-amber-600 hover:text-white hover:border-amber-500'
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
        
        {/* Campo de búsqueda */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Buscar por nombre..."
            value={busqueda}
            onChange={e => setBusqueda(e.target.value)}
            className="border border-stone-600 rounded-lg px-4 py-2 bg-stone-900 text-stone-200 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-600 font-serif w-full max-w-md"
          />
        </div>
        {error && <div className="text-red-400 mb-4">{error}</div>}
        {cargandoProductos ? (
          <div className="text-stone-300 text-center py-8">Cargando productos...</div>
        ) : (
          <>
            {/* Tabla de productos */}
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-stone-200 border-separate border-spacing-y-2">
                <thead>
                  <tr className="bg-stone-700">
                    <th className="py-2 px-4 rounded-l-lg text-center">Nombre</th>
                    <th className="py-2 px-4 text-center">Precio</th>
                    <th className="py-2 px-4 text-center">Categoría</th>
                    <th className="py-2 px-4 rounded-r-lg text-center">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {productosFiltrados.map(prod => {
                    const estaHabilitado = prod.habilitado !== false;
                    return (
                      <tr key={prod._id} className={`bg-stone-900/80 ${!estaHabilitado ? 'opacity-50' : ''}`}> 
                        {editandoId === prod._id ? (
                          <>
                            <td className="py-2 px-4 text-center">
                              <input
                                type="text"
                                value={editado.nombre}
                                onChange={e => setEditado({ ...editado, nombre: e.target.value })}
                                className="border border-stone-600 rounded-lg px-2 py-1 bg-stone-800 text-stone-200 w-full"
                              />
                            </td>
                            <td className="py-2 px-4 text-center">
                              <input
                                type="number"
                                value={editado.precio}
                                onChange={e => setEditado({ ...editado, precio: e.target.value })}
                                className="border border-stone-600 rounded-lg px-2 py-1 bg-stone-800 text-stone-200 w-full"
                              />
                            </td>
                            <td className="py-2 px-4 text-center">
                              <input
                                type="text"
                                value={editado.categoria}
                                onChange={e => setEditado({ ...editado, categoria: e.target.value })}
                                className="border border-stone-600 rounded-lg px-2 py-1 bg-stone-800 text-stone-200 w-full"
                              />
                            </td>
                            <td className="py-2 px-4 flex gap-2 justify-center">
                              <button onClick={() => handleGuardar(prod._id)} className="px-3 py-1 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 transition-all">Guardar</button>
                              <button onClick={handleCancelar} className="px-3 py-1 bg-stone-700 text-stone-200 rounded-lg font-bold hover:bg-stone-600 transition-all">Cancelar</button>
                            </td>
                          </>
                        ) : (
                          <>
                            <td className="py-2 px-4 text-center flex flex-col gap-1 items-center justify-center">
                              {prod.nombre}
                              {!estaHabilitado && <span className="text-xs text-red-400 font-bold">Deshabilitado</span>}
                            </td>
                            <td className="py-2 px-4 text-center">${prod.precio}</td>
                            <td className="py-2 px-4 text-center">{prod.categoria}</td>
                            <td className="py-2 px-4 flex gap-2 justify-center">
                              <button onClick={() => handleEditar(prod)} className="px-3 py-1 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-all">Editar</button>
                              <button onClick={() => handleEliminar(prod._id)} className="px-3 py-1 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700 transition-all">Eliminar</button>
                              <button onClick={() => handleToggleHabilitado(prod)} className={`px-3 py-1 rounded-lg font-bold transition-all ${estaHabilitado ? 'bg-stone-700 text-stone-200 hover:bg-stone-600' : 'bg-green-600 text-white hover:bg-green-700'}`}>{estaHabilitado ? 'Deshabilitar' : 'Habilitar'}</button>
                            </td>
                          </>
                        )}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            
            {/* Formulario agregar - movido abajo */}
            <div className="border-t border-stone-600 pt-6">
              <h4 className="text-lg font-bold text-stone-200 mb-4">Agregar nuevo producto</h4>
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Nombre"
                  value={nuevo.nombre}
                  onChange={e => setNuevo({ ...nuevo, nombre: e.target.value })}
                  className="border border-stone-600 rounded-lg px-4 py-2 bg-stone-900 text-stone-200 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-600 font-serif flex-1"
                />
                <input
                  type="number"
                  placeholder="Precio"
                  value={nuevo.precio}
                  onChange={e => setNuevo({ ...nuevo, precio: e.target.value })}
                  className="border border-stone-600 rounded-lg px-4 py-2 bg-stone-900 text-stone-200 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-600 font-serif w-32"
                />
                <input
                  type="text"
                  placeholder="Categoría"
                  value={nuevo.categoria}
                  onChange={e => setNuevo({ ...nuevo, categoria: e.target.value })}
                  className="border border-stone-600 rounded-lg px-4 py-2 bg-stone-900 text-stone-200 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-600 font-serif w-40"
                />
                <button
                  onClick={handleAgregar}
                  className="px-6 py-2 bg-green-600 text-white border border-green-700 rounded-lg font-bold shadow-lg hover:bg-green-700 transition-all duration-300 active:scale-95 font-serif"
                >
                  Agregar
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
} 