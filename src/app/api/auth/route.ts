import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { token } = await req.json();
    
    if (token === process.env.ADMIN_TOKEN) {
      return NextResponse.json({ 
        success: true, 
        message: 'Autenticación exitosa' 
      });
    } else {
      return NextResponse.json({ 
        success: false, 
        message: 'Token incorrecto' 
      }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      message: 'Error en la autenticación' 
    }, { status: 500 });
  }
} 