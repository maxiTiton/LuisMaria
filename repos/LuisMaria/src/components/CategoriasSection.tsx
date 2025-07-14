import Link from 'next/link';
import Image from 'next/image';

const categorias = [
  {
    nombre: 'Desayunos / Meriendas / Brunchs',
    imagen: '/images/cafe.png',
    descripcion: 'Café, tostadas, jugos y más para empezar el día'
  },
  {
    nombre: 'Pastelería',
    imagen: '/images/torta.png',
    descripcion: 'Tortas, facturas y dulces artesanales'
  },
  {
    nombre: 'Almuerzos / Cenas',
    imagen: '/images/tostadas.png',
    descripcion: 'Platos principales y opciones saladas'
  },
  {
    nombre: 'Helados',
    imagen: '/images/helado.png',
    descripcion: 'Helados artesanales y postres fríos'
  },
  {
    nombre: 'Opciones Antiinflamatorias',
    imagen: '/images/cafe.png',
    descripcion: 'Alternativas saludables y nutritivas'
  },
  {
    nombre: 'Bebidas / Tragos',
    imagen: '/images/cafe.png',
    descripcion: 'Café, jugos, licuados y más'
  }
];

export default function CategoriasSection() {
  return (
    <section id="categorias" className="min-h-[60vh] bg-gradient-to-br from-stone-900 via-neutral-900 to-zinc-900 px-4 py-12 animate-fade-in">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-stone-200 mb-8 text-center tracking-tight drop-shadow-xl">
          Nuestras Categorías
        </h2>
        <p className="text-base text-stone-200 text-center mb-12">
          Explora nuestra variedad de productos
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-6xl mx-auto">
          {categorias.map((categoria, index) => (
            <div key={index} className="bg-stone-800 border border-stone-600 rounded-xl p-6 shadow-lg hover:scale-105 transition-all duration-300 group flex flex-col h-full">
              <Image
                src={categoria.imagen}
                alt={categoria.nombre}
                width={200}
                height={150}
                className="w-full h-32 object-cover rounded-lg border border-stone-600 mb-3 group-hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-lg font-serif font-bold text-white mb-2 text-center">{categoria.nombre}</h3>
              <p className="text-xs text-white text-center mb-3 flex-grow">{categoria.descripcion}</p>
              <Link href={`/catalogo?categoria=${encodeURIComponent(categoria.nombre)}`} className="mt-auto">
                <button className="w-full px-4 py-2 bg-amber-600 text-white border border-amber-400 rounded-lg font-semibold text-sm shadow-lg hover:bg-amber-700 transition-all duration-300 active:scale-95 font-serif">
                  Ver en catálogo
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 