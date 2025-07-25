'use client';
import { useState, useEffect } from 'react';
import { useAdminAuth } from '@/hooks/useAdminAuth';

type PedidoType = {
  _id: string;
  productos: {
    id: string;
    nombre: string;
    cantidad: number;
    precio: number;
    categoria: string;
    imagen?: string;
    _id?: string;
  }[];
  total: number;
  estadoPago: string;
  fecha: string;
  comprador?: {
    nombre?: string;
    email?: string;
    telefono?: string;
  };
  idPagoMP: string;
};

type Producto = {
  _id: string;
  nombre: string;
  precio: number;
  categoria: string;
  habilitado?: boolean;
};

export default function AdminPage() {
  const { session, isAdmin, isLoading, handleSignIn, handleSignOut } = useAdminAuth();
  const [loading, setLoading] = useState(false);
  const [productos, setProductos] = useState<Producto[]>([]);
  const [nuevo, setNuevo] = useState({ nombre: '', precio: '', categoria: '' });
  const [editandoId, setEditandoId] = useState<string|null>(null);
  const [editado, setEditado] = useState({ nombre: '', precio: '', categoria: '' });
  const [filtroCategoria, setFiltroCategoria] = useState('Todos');
  const [busqueda, setBusqueda] = useState('');
  const [error, setError] = useState('');
  const [cargandoProductos, setCargandoProductos] = useState(false);
  const [mostrarPedidos, setMostrarPedidos] = useState(false);
  const [pedidos, setPedidos] = useState<PedidoType[]>([]);
  const [cargandoPedidos, setCargandoPedidos] = useState(false);
  const [errorPedidos, setErrorPedidos] = useState('');

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
    if (isAdmin) {
      fetchProductos();
    }
  }, [isAdmin]);

  const fetchPedidos = async () => {
    setCargandoPedidos(true);
    setErrorPedidos('');
    try {
      const res = await fetch('/api/pedidos');
      const data = await res.json();
      setPedidos(data.pedidos || []);
    } catch (e) {
      setErrorPedidos('Error al cargar pedidos');
    } finally {
      setCargandoPedidos(false);
    }
  };

  useEffect(() => {
    if (isAdmin && mostrarPedidos) {
      fetchPedidos();
    }
  }, [isAdmin, mostrarPedidos]);

  // Agregar producto
  const handleAgregar = async (productoNuevo = nuevo) => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/productos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...productoNuevo }),
      });
      if (!res.ok) throw new Error('No autorizado o error al agregar');
      setNuevo({ nombre: '', precio: '', categoria: filtroCategoria === 'Todos' ? '' : filtroCategoria });
      const data = await res.json();
      setProductos(prev => [...prev, data.producto]);
    } catch (e) {
      setError('Error al agregar producto');
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
      });
      if (!res.ok) throw new Error('No autorizado o error al eliminar');
      setProductos(productos.filter(p => p._id !== id));
    } catch (e) {
      setError('Error al eliminar producto');
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
        },
        body: JSON.stringify({ ...editado }),
      });
      if (!res.ok) throw new Error('No autorizado o error al editar');
      const data = await res.json();
      setProductos(productos.map(p => p._id === id ? data.producto : p));
      setEditandoId(null);
      setEditado({ nombre: '', precio: '', categoria: '' });
    } catch (e) {
      setError('Error al editar producto');
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
        },
        body: JSON.stringify({ ...prod, habilitado: !prod.habilitado }),
      });
      if (!res.ok) throw new Error('No autorizado o error al actualizar');
      await fetchProductos();
    } catch (e: any) {
      setError('Error al cambiar estado');
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

  const categoriasValidas = [
    'Desayunos / Meriendas / Brunchs',
    'Pastelería',
    'Almuerzos / Cenas',
    'Helados',
    'Opciones Antiinflamatorias',
    'Bebidas/Tragos',
  ];

  // Mostrar loading mientras se verifica la sesión
  if (isLoading) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-stone-900 via-neutral-900 to-zinc-900 px-4 py-16 font-serif animate-fade-in">
        <div className="text-stone-300 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto mb-4"></div>
          <p>Verificando autenticación...</p>
        </div>
      </main>
    );
  }

  // Si no está autenticado, mostrar botón de login
  if (!session) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-stone-900 via-neutral-900 to-zinc-900 px-4 py-16 font-serif animate-fade-in">
        <h2 className="text-4xl font-serif font-extrabold text-stone-200 mb-4 drop-shadow-xl text-center">Panel de Administración</h2>
        <p className="text-stone-400 text-center mb-6 max-w-md mx-auto">Inicia sesión para acceder al panel de administración.</p>
        <div className="bg-stone-800/90 backdrop-blur-xl rounded-2xl p-10 shadow-2xl border border-stone-600 flex flex-col gap-4 w-full max-w-md">
          <button
            onClick={handleSignIn}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Iniciar sesión con Google
          </button>
        </div>
      </main>
    );
  }

  // Si está autenticado pero no es admin, mostrar acceso denegado
  if (!isAdmin) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-stone-900 via-neutral-900 to-zinc-900 px-4 py-16 font-serif animate-fade-in">
        <h2 className="text-4xl font-serif font-extrabold text-red-400 mb-4 drop-shadow-xl text-center">Acceso Denegado</h2>
        <p className="text-stone-400 text-center mb-6 max-w-md mx-auto">
          No tienes permisos para acceder al panel de administración.
        </p>
        <div className="bg-stone-800/90 backdrop-blur-xl rounded-2xl p-10 shadow-2xl border border-stone-600 flex flex-col gap-4 w-full max-w-md">
          <p className="text-stone-300 text-center">
            Email: {session.user?.email}
          </p>
          <button
            onClick={handleSignOut}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
          >
            Cerrar sesión
          </button>
        </div>
      </main>
    );
  }

  // Panel de administración para el admin autenticado
  return (
    <main className="min-h-screen bg-gradient-to-br from-stone-900 via-neutral-900 to-zinc-900 px-4 py-8 font-serif animate-fade-in">
      {/* Encabezado fijo */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-stone-900/90 border border-stone-700 rounded-2xl px-8 py-6 mb-10 shadow-lg">
        <div>
          <h2 className="text-4xl font-serif font-extrabold text-stone-200 mb-2 drop-shadow-xl">Panel de administración</h2>
          <p className="text-stone-400 text-lg">Bienvenido, {session?.user?.name}</p>
        </div>
        <button
          onClick={handleSignOut}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 text-lg mt-6 md:mt-0"
        >
          Cerrar sesión
        </button>
      </div>

      {/* Botón para alternar entre productos y pedidos */}
      <div className="flex justify-center mb-8 gap-4">
        <button
          className={`px-6 py-2 rounded-lg font-bold text-lg transition-all duration-200 ${!mostrarPedidos ? 'bg-amber-600 text-white' : 'bg-stone-800 text-stone-200 border border-stone-600'}`}
          onClick={() => setMostrarPedidos(false)}
        >
          Productos
        </button>
        <button
          className={`px-6 py-2 rounded-lg font-bold text-lg transition-all duration-200 ${mostrarPedidos ? 'bg-amber-600 text-white' : 'bg-stone-800 text-stone-200 border border-stone-600'}`}
          onClick={() => setMostrarPedidos(true)}
        >
          Pedidos
        </button>
      </div>

      {/* Sección de pedidos */}
      {mostrarPedidos && (
        <section className="max-w-5xl mx-auto bg-stone-900/80 rounded-2xl p-6 shadow-xl border border-stone-700 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-amber-500">Pedidos</h2>
          {cargandoPedidos ? (
            <div className="text-center text-stone-300">Cargando pedidos...</div>
          ) : errorPedidos ? (
            <div className="text-center text-red-400">{errorPedidos}</div>
          ) : pedidos.length === 0 ? (
            <div className="text-center text-stone-400">No hay pedidos registrados.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full border border-stone-700 rounded-xl overflow-hidden">
                <thead className="bg-stone-800">
                  <tr>
                    <th className="px-4 py-2 text-left">Fecha</th>
                    <th className="px-4 py-2 text-left">Estado</th>
                    <th className="px-4 py-2 text-left">Total</th>
                    <th className="px-4 py-2 text-left">Comprador</th>
                    <th className="px-4 py-2 text-left">Productos</th>
                  </tr>
                </thead>
                <tbody>
                  {pedidos.map((pedido) => (
                    <tr key={pedido._id} className="border-b border-stone-700 hover:bg-stone-800/60 transition-all">
                      <td className="px-4 py-2 text-stone-200">{new Date(pedido.fecha).toLocaleString()}</td>
                      <td className="px-4 py-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${pedido.estadoPago === 'aprobado' ? 'bg-green-700 text-white' : pedido.estadoPago === 'pendiente' ? 'bg-yellow-600 text-white' : 'bg-red-700 text-white'}`}>{pedido.estadoPago}</span>
                      </td>
                      <td className="px-4 py-2 text-amber-400 font-bold">${pedido.total}</td>
                      <td className="px-4 py-2 text-stone-300">
                        {pedido.comprador?.nombre}<br/>
                        <span className="text-xs text-stone-400">{pedido.comprador?.email}</span><br/>
                        <span className="text-xs text-stone-400">{pedido.comprador?.telefono}</span>
                      </td>
                      <td className="px-4 py-2 text-stone-200">
                        <ul className="list-disc pl-4">
                          {pedido.productos.map((prod, idx) => (
                            <li key={prod.id || idx}>
                              {prod.cantidad} x {prod.nombre} (${prod.precio})
                            </li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      )}

      {/* Sección de productos (solo si no está mostrando pedidos) */}
      {!mostrarPedidos && (
        <main className="min-h-screen min-w-full flex flex-col bg-gradient-to-br from-stone-900 via-neutral-900 to-zinc-900 px-0 py-0 font-serif animate-fade-in">
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
                    <div className="flex flex-col">
                      <input
                        type="number"
                        placeholder="Precio"
                        min={0}
                        value={nuevo.precio}
                        onChange={e => setNuevo({ ...nuevo, precio: e.target.value })}
                        className="border border-stone-600 rounded-lg px-4 py-2 bg-stone-900 text-stone-200 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-600 font-serif w-32"
                      />
                      {nuevo.precio !== '' && Number(nuevo.precio) < 0 && (
                        <span className="text-red-400 text-xs mt-1">El precio no puede ser negativo</span>
                      )}
                    </div>
                    {filtroCategoria === 'Todos' ? (
                      <select
                        value={nuevo.categoria}
                        onChange={e => setNuevo({ ...nuevo, categoria: e.target.value })}
                        className="border border-stone-600 rounded-lg px-4 py-2 bg-stone-900 text-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-600 font-serif w-40"
                      >
                        <option value="" disabled>Categoria</option>
                        {categoriasValidas.map(cat => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type="text"
                        value={filtroCategoria}
                        disabled
                        className="border border-stone-600 rounded-lg px-4 py-2 bg-stone-800 text-stone-400 font-serif w-40 cursor-not-allowed"
                      />
                    )}
                    <button
                      onClick={async () => {
                        // Validación antes de agregar
                        if (!nuevo.nombre || !nuevo.precio || (!nuevo.categoria && filtroCategoria === 'Todos')) {
                          setError('Completa todos los campos');
                          return;
                        }
                        const precioNum = Number(nuevo.precio);
                        if (isNaN(precioNum) || precioNum < 0) {
                          setError('El precio no puede ser menor a 0');
                          return;
                        }
                        const categoriaFinal = filtroCategoria === 'Todos' ? nuevo.categoria : filtroCategoria;
                        if (!categoriasValidas.includes(categoriaFinal)) {
                          setError('Categoría inválida');
                          return;
                        }
                        // Asegurarse de que se envía la categoría correcta
                        await handleAgregar({ ...nuevo, categoria: categoriaFinal });
                        setNuevo({ nombre: '', precio: '', categoria: filtroCategoria === 'Todos' ? '' : categoriaFinal });
                      }}
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
      )}
    </main>
  );
} 