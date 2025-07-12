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
    <section id="categorias" className="min-h-[70vh] bg-black px-4 py-20 border-b-4 border-b-[#b08a5a] animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-serif font-extrabold text-white mb-12 text-center tracking-tight drop-shadow-xl">
          Nuestras Categorías
        </h2>
        <p className="text-xl text-gray-300 text-center mb-16">
          Explora nuestra variedad de productos
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {categorias.map((categoria, index) => (
            <div key={index} className="bg-black border border-[#b08a5a] rounded-2xl p-6 shadow-xl hover:scale-105 transition-all duration-300 group">
              <Image
                src={categoria.imagen}
                alt={categoria.nombre}
                width={200}
                height={150}
                className="w-full h-32 object-cover rounded-xl border-2 border-[#b08a5a] mb-4 group-hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-xl font-serif font-bold text-white mb-2 text-center">{categoria.nombre}</h3>
              <p className="text-sm text-gray-300 text-center mb-4">{categoria.descripcion}</p>
              <Link href={`/catalogo?categoria=${encodeURIComponent(categoria.nombre)}`}>
                <button className="w-full px-6 py-3 bg-[#b08a5a] text-black border border-[#b08a5a] rounded-full font-bold text-lg shadow-xl hover:bg-[#8b6b3a] hover:text-white transition-all duration-300 active:scale-95 font-serif">
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