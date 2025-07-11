import { NextResponse } from 'next/server';
import { connectDB } from '../../../../lib/db';
import Producto from '../../../../models/Producto';

export async function GET() {
  try {
    await connectDB();
    const productos = await Producto.find();
    
    return NextResponse.json({
      total: productos.length,
      productos: productos
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      error: 'Error al obtener productos',
      details: error instanceof Error ? error.message : 'Error desconocido'
    }, { status: 500 });
  }
} 