import Link from 'next/link';
import Image from 'next/image';

const categorias = [
  {
    nombre: 'Desayunos / Meriendas / Brunchs',
    imagen: '/images/desayuno.jpg',
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
    imagen: '/images/opcionAntiimflamatoria.jpg',
    descripcion: 'Alternativas saludables y nutritivas'
  },
  {
    nombre: 'Bebidas/Tragos',
    imagen: '/images/licuado.jpeg',
    descripcion: 'Café, jugos, licuados y más'
  }
];

export default function CategoriasSection() {
  return (
    <section id="categorias" className="min-h-[60vh] bg-[#2d1a10] px-4 py-16 animate-fade-in">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-crema mb-8 text-center tracking-tight drop-shadow-xl">
          Nuestras Categorías
        </h2>
        <p className="text-base text-doradoSuave text-center mb-12">
          Explora nuestra variedad de productos
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
          {categorias.map((categoria, index) => (
            <div key={index} className="bg-crema border-2 border-dorado rounded-2xl p-6 shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 group flex flex-col h-full items-center">
              <Image
                src={categoria.imagen}
                alt={categoria.nombre}
                width={320}
                height={320}
                className="w-full aspect-square object-cover rounded-xl border border-dorado mb-4 group-hover:scale-105 transition-transform duration-300 shadow-lg"
              />
              <h3 className="text-xl font-serif font-bold text-marronOscuro mb-2 text-center drop-shadow-sm">
                {categoria.nombre}
              </h3>
              <p className="text-sm text-marron text-center mb-3 flex-grow">
                {categoria.descripcion}
              </p>
              <Link href={`/catalogo?categoria=${encodeURIComponent(categoria.nombre)}`} className="mt-auto">
                <button className="w-full px-4 py-2 bg-dorado hover:bg-doradoSuave text-marron font-semibold rounded-lg text-sm shadow-lg border border-dorado transition-all duration-300 active:scale-95 font-serif">
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