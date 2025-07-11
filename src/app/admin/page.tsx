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
      <main className="min-h-screen flex flex-col items-center justify-center bg-[#f8f5f2] px-4 py-16 font-serif animate-fade-in">
        <h2 className="text-4xl font-serif font-extrabold text-[#6d4c2b] mb-8 drop-shadow-xl text-center">Panel de administración</h2>
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-lg border border-[#b08a5a] flex flex-col gap-4 w-full">
          <input
            type="password"
            placeholder="Token de administrador"
            value={token}
            onChange={e => setToken(e.target.value)}
            className="border border-[#b08a5a] rounded px-4 py-2 mb-4 bg-[#f8f5f2] text-[#6d4c2b] placeholder-[#b08a5a] focus:outline-none focus:ring-2 focus:ring-[#b08a5a] font-serif"
          />
          <button
            onClick={handleLogin}
            disabled={loading}
            className="px-6 py-3 bg-gradient-to-r from-[#b08a5a] to-[#6d4c2b] text-white rounded-full font-bold text-xl shadow-xl hover:from-[#e2d6c2] hover:to-[#b08a5a] hover:text-[#6d4c2b] transition-all duration-300 active:scale-95 font-serif disabled:opacity-50"
          >
            {loading ? 'Verificando...' : 'Ingresar'}
          </button>
        </div>
      </main>
    );
  }

  // Aquí irá el CRUD de productos
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#f8f5f2] px-4 py-16 font-serif animate-fade-in">
      <h2 className="text-4xl font-serif font-extrabold text-[#6d4c2b] mb-8 drop-shadow-xl text-center">Panel de administración</h2>
      <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-lg border border-[#b08a5a] w-full">
        <p className="text-[#b08a5a] mb-4 font-serif">CRUD de productos (próximamente)</p>
        {/* Aquí irá el formulario y la tabla de productos */}
      </div>
    </main>
  );
} 