import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '../../../../lib/db';
import Producto from '@/models/Producto';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  // Verificar sesión de NextAuth
  const session = await getServerSession(authOptions);
  
  // Solo permitir acceso a maximot0904@gmail.com
  if (!session || session.user?.email !== 'maximot0904@gmail.com') {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
  }

  await connectDB();
  const data = await req.json();
  const producto = await Producto.findByIdAndUpdate(params.id, data, { new: true });
  return NextResponse.json({ producto });
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  // Verificar sesión de NextAuth
  const session = await getServerSession(authOptions);
  
  // Solo permitir acceso a maximot0904@gmail.com
  if (!session || session.user?.email !== 'maximot0904@gmail.com') {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
  }

  await connectDB();
  const producto = await Producto.findByIdAndDelete(params.id);
  if (!producto) {
    return NextResponse.json({ error: 'Producto no encontrado' }, { status: 404 });
  }
  return NextResponse.json({ message: 'Producto eliminado correctamente' });
}