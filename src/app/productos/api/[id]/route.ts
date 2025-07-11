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

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const token = req.headers.get('authorization');
  if (token !== process.env.ADMIN_TOKEN) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
  }
  await connectDB();
  await Producto.findByIdAndDelete(params.id);
  return NextResponse.json({ ok: true });
} 