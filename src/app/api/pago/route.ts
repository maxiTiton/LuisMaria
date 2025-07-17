import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  // Importa MercadoPagoConfig y Preference dinámicamente
  const { MercadoPagoConfig, Preference } = await import('mercadopago');
  const client = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN || 'TU_ACCESS_TOKEN_AQUI' });
  const preferenceClient = new Preference(client);

  try {
    const body = await req.json();
    const { carrito } = body;

    if (!carrito || !Array.isArray(carrito) || carrito.length === 0) {
      return NextResponse.json({ error: 'Carrito vacío o inválido' }, { status: 400 });
    }

    const items = carrito.map((item: any) => ({
      id: item._id || '',
      title: item.nombre,
      quantity: item.cantidad,
      unit_price: item.precio,
      currency_id: 'ARS',
    }));

    const preferenceData = {
      items,
      back_urls: {
        success: 'https://tu-sitio.com/success',
        failure: 'https://tu-sitio.com/failure',
        pending: 'https://tu-sitio.com/pending',
      },
      auto_return: 'approved',
    };

    // Enviar el objeto de preferencia dentro de 'body'
    const response = await preferenceClient.create({ body: preferenceData });
    return NextResponse.json({ id: response.id, init_point: response.init_point });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Error al crear preferencia' }, { status: 500 });
  }
} 