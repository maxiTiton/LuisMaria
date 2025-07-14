import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '../../../lib/db';
import Producto from '../../../models/Producto';

export async function GET(req: NextRequest) { // <-- Aquí se agrega 'req: NextRequest'
  await connectDB();

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
  const token = req.headers.get('authorization');

  //debug
  console.log('TOKEN RECIBIDO:', token);
  console.log('TOKEN ESPERADO:', process.env.ADMIN_TOKEN);

  if (token !== process.env.ADMIN_TOKEN) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
  }
  await connectDB();
  const data = await req.json();
  const producto = await Producto.create(data);
  return NextResponse.json({ producto });
} 