import { NextRequest, NextResponse } from 'next/server';
import Pedido from '@/models/Pedido';
import { connectDB } from '@/lib/db';

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const body = await req.json();
    console.log('Webhook Mercado Pago recibido:', body);

    // Validar campos principales
    const { productos, total, estadoPago, comprador, idPagoMP } = body;
    if (!productos || !total || !estadoPago || !idPagoMP) {
      return NextResponse.json({ error: 'Faltan datos obligatorios' }, { status: 400 });
    }

    // Crear y guardar el pedido
    const pedido = new Pedido({
      productos,
      total,
      estadoPago,
      comprador,
      idPagoMP,
    });
    await pedido.save();

    return NextResponse.json({ saved: true, pedidoId: pedido._id });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Error en webhook' }, { status: 500 });
  }
} 