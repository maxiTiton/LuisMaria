import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '../../../lib/db';
import Producto from '../../../models/Producto';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function GET(req: NextRequest) {
  
  //debug
  //console.log("Conectando a la DB...");
  //console.log("MONGODB_URI desde API route:", process.env.MONGODB_URI);
  await connectDB();
  //console.log("Conectado.");

  // 1. Obtener los parámetros de consulta de la URL
  const { searchParams } = new URL(req.url);
  const categoria = searchParams.get('categoria'); // Obtiene el valor del parámetro 'categoria'

  let productos;
  if (categoria) {
    // 2. Si se proporcionó una categoría, buscar productos por esa categoría
    productos = await Producto.find({ categoria: categoria });
  } else {
    // 3. Si no se proporcionó categoría, devolver todos los productos (comportamiento actual)
    productos = await Producto.find();
  }
  
  return NextResponse.json({ productos });
}

export async function POST(req: NextRequest) {
  // Verificar sesión de NextAuth
  const session = await getServerSession(authOptions);
  
  // Solo permitir acceso a maximot0904@gmail.com
  if (!session || session.user?.email !== 'maximot0904@gmail.com') {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
  }

  await connectDB();
  const data = await req.json();
  const producto = await Producto.create(data);
  return NextResponse.json({ producto });
} 