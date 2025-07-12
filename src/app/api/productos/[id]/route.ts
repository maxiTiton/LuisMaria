import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '../../../../lib/db';
import Producto from '@/models/Producto';

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const token = req.headers.get('authorization');
  if (token !== process.env.ADMIN_TOKEN) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
  }
  await connectDB();
  const data = await req.json();
  const producto = await Producto.findByIdAndUpdate(params.id, data, { new: true });
  return NextResponse.json({ producto });
}

export async function DELETE(req: NextRequest) {
  const token = req.headers.get('authorization');

  // --- Verificación de Seguridad ---
  if (token !== process.env.ADMIN_TOKEN) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
  }

  await connectDB();

  // Obtener la categoría del cuerpo de la solicitud (body)
  const { categoria } = await req.json();

  if (!categoria) {
    return NextResponse.json({ error: 'Falta la categoría en el cuerpo de la solicitud para eliminar' }, { status: 400 });
  }

  try {
    // Usar deleteMany para eliminar todos los productos que coincidan con la categoría
    const result = await Producto.deleteMany({ categoria: categoria });

    // Responder con el número de documentos eliminados
    return NextResponse.json({ 
      ok: true, 
      message: `Se eliminaron ${result.deletedCount} productos de la categoría "${categoria}"` 
    });
  } catch (error) {
    console.error("Error al eliminar productos por categoría:", error);
    return NextResponse.json({ error: 'Error interno del servidor al eliminar productos' }, { status: 500 });
  }
}