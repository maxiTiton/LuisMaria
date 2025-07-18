import { NextRequest, NextResponse } from 'next/server';
import Pedido from '@/models/Pedido';
import { connectDB } from '@/lib/db';

export async function GET() {
  try {
    await connectDB();
    const pedidos = await Pedido.find().sort({ fecha: -1 });
    return NextResponse.json({ pedidos });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Error al obtener pedidos' }, { status: 500 });
  }
} 