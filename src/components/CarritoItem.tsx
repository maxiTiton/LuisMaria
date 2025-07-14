import Image from 'next/image';

export default function CarritoItem({ item, onQuitar }: { item: any, onQuitar: (id: string) => void }) {
  return (
    <div className="flex items-center gap-4 bg-stone-800 border border-stone-600 rounded-lg p-4 shadow-lg">
      <Image
        src={item.imagen || '/images/cafe.png'}
        alt={item.nombre}
        width={80}
        height={60}
        className="rounded-lg object-cover border border-stone-600"
      />
      <div className="flex-1">
        <div className="font-bold text-amber-200">{item.nombre}</div>
        <div className="text-amber-200 text-sm">{item.categoria}</div>
        <div className="text-amber-200 font-semibold">${item.precio} x {item.cantidad}</div>
      </div>
      <button
        onClick={() => onQuitar(item._id)}
        className="px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-bold hover:from-red-700 hover:to-red-800 transition-all duration-300"
      >
        Quitar
      </button>
    </div>
  );
} 