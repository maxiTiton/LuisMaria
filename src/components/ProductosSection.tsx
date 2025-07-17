import ProductoCard from './ProductoCard';

async function getProductos() {
  const res = await fetch('/api/productos', { cache: 'no-store' });
  return res.json();
}

export default async function ProductosSection() {
  const { productos } = await getProductos();
  return (
    <section id="productos" className="min-h-[70vh] bg-black px-4 py-20 border-b-4 border-b-[#b08a5a] animate-fade-in">
      <h2 className="text-5xl font-serif font-extrabold text-white mb-12 text-center tracking-tight drop-shadow-xl">Productos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 w-full">
        {productos.map((producto: any) => (
          <ProductoCard key={producto._id} producto={producto} />
        ))}
      </div>
    </section>
  );
} 