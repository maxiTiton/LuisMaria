import Image from 'next/image';

export default function CarritoItem({ item, onQuitar }: { item: any, onQuitar: (id: string) => void }) {
  return (
    <div className="flex items-center gap-4 bg-white dark:bg-black border border-secondary rounded-lg p-4 shadow">
      <Image
        src={item.imagen || '/images/cafe.jpg'}
        alt={item.nombre}
        width={80}
        height={60}
        className="rounded object-cover"
      />
      <div className="flex-1">
        <div className="font-bold text-black dark:text-white">{item.nombre}</div>
        <div className="text-secondary text-sm">{item.categoria}</div>
        <div className="text-primary font-semibold">${item.precio} x {item.cantidad}</div>
      </div>
      <button
        onClick={() => onQuitar(item._id)}
        className="px-4 py-2 bg-red-600 text-white rounded-lg font-bold hover:bg-red-800 transition"
      >
        Quitar
      </button>
    </div>
  );
} 