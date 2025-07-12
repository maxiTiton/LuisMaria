'use client';
import { useState } from 'react';

export default function AdminPage() {
  const [autenticado, setAutenticado] = useState(false);
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        setAutenticado(true);
      } else {
        alert('Token incorrecto');
      }
    } catch (error) {
      alert('Error al autenticar');
    } finally {
      setLoading(false);
    }
  };

  if (!autenticado) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-stone-900 via-neutral-900 to-zinc-900 px-4 py-16 font-serif animate-fade-in">
        <h2 className="text-4xl font-serif font-extrabold text-stone-200 mb-8 drop-shadow-xl text-center">Iniciar sesión</h2>
        <div className="bg-stone-800/90 backdrop-blur-xl rounded-2xl p-10 shadow-2xl border border-stone-600 flex flex-col gap-4 w-full max-w-md">
          <input
            type="password"
            placeholder="Token de administrador"
            value={token}
            onChange={e => setToken(e.target.value)}
            className="border border-stone-600 rounded-lg px-4 py-3 mb-4 bg-stone-900 text-stone-200 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-600 font-serif"
          />
          <button
            onClick={handleLogin}
            disabled={loading}
            className="px-6 py-3 bg-stone-700 text-stone-200 border border-stone-600 rounded-lg font-bold text-lg shadow-lg hover:bg-stone-600 hover:text-white transition-all duration-300 active:scale-95 font-serif disabled:opacity-50"
          >
            {loading ? 'Verificando...' : 'Ingresar'}
          </button>
        </div>
      </main>
    );
  }

  // Aquí irá el CRUD de productos
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-stone-900 via-neutral-900 to-zinc-900 px-4 py-16 font-serif animate-fade-in">
      <h2 className="text-4xl font-serif font-extrabold text-stone-200 mb-8 drop-shadow-xl text-center">Panel de administración</h2>
      <div className="bg-stone-800/90 backdrop-blur-xl rounded-2xl p-10 shadow-2xl border border-stone-600 w-full max-w-md">
        <p className="text-stone-300 mb-4 font-serif">CRUD de productos (próximamente)</p>
        {/* Aquí irá el formulario y la tabla de productos */}
      </div>
    </main>
  );
} 