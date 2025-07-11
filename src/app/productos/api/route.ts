import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '../../../lib/db';
import Producto from '../../../models/Producto';

export async function GET() {
  await connectDB();
  const productos = await Producto.find();
  return NextResponse.json({ productos });
}

export async function POST(req: NextRequest) {
  const token = req.headers.get('authorization');
  if (token !== process.env.ADMIN_TOKEN) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
  }
  await connectDB();
  const data = await req.json();
  const producto = await Producto.create(data);
  return NextResponse.json({ producto });
} 