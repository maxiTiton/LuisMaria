const productos = [
  // DESAYUNOS COMPLETOS
  {
    nombre: "N/N",
    descripcion: "Infusión a elección + Omelette de huevo y chía relleno con queso + Yogur griego y frutas de estación en gajos",
    precio: 10450,
    categoria: "Desayunos / Meriendas / Brunchs",
    imagen: "/images/cafe.png"
  },
  {
    nombre: "Campestre",
    descripcion: "Infusión a elección + Palta + Huevo revuelto + Cherrys + Panceta + Tostada a elección",
    precio: 11000,
    categoria: "Desayunos / Meriendas / Brunchs",
    imagen: "/images/cafe.png"
  },
  {
    nombre: "Viaje de Ida",
    descripcion: "Infusión a elección + Tostones con pan brioche + Palta + Jamón crudo + Cherrys",
    precio: 11550,
    categoria: "Desayunos / Meriendas / Brunchs",
    imagen: "/images/cafe.png"
  },
  {
    nombre: "Yo Elijo",
    descripcion: "Infusión + Opción a elección: Tostadas a elección + Dos dips (mermelada light/casera, queso crema, manteca, dulce de leche)",
    precio: 7700,
    categoria: "Desayunos / Meriendas / Brunchs",
    imagen: "/images/tostadas.png"
  },
  {
    nombre: "Roll de Canela",
    descripcion: "Roll de canela casero",
    precio: 6710,
    categoria: "Desayunos / Meriendas / Brunchs",
    imagen: "/images/torta.png"
  },
  {
    nombre: "Porción de Torta",
    descripcion: "Porción de torta (consultar variedad)",
    precio: 11340,
    categoria: "Desayunos / Meriendas / Brunchs",
    imagen: "/images/torta.png"
  },
  {
    nombre: "2 Medialunas",
    descripcion: "Dos medialunas caseras",
    precio: 5830,
    categoria: "Desayunos / Meriendas / Brunchs",
    imagen: "/images/torta.png"
  },
  {
    nombre: "2 Mafaldas",
    descripcion: "Dos mafaldas caseras",
    precio: 8580,
    categoria: "Desayunos / Meriendas / Brunchs",
    imagen: "/images/torta.png"
  },
  
  // CAFETERÍA
  {
    nombre: "Café / Lágrima / Cortado Chico",
    descripcion: "Podés elegir entre leche vegetal o animal",
    precio: 2970,
    categoria: "Desayunos / Meriendas / Brunchs",
    imagen: "/images/cafe.png"
  },
  {
    nombre: "Café / Lágrima / Cortado Jarrito",
    descripcion: "Podés elegir entre leche vegetal o animal",
    precio: 3080,
    categoria: "Desayunos / Meriendas / Brunchs",
    imagen: "/images/cafe.png"
  },
  {
    nombre: "Café / Lágrima / Cortado Doble",
    descripcion: "Podés elegir entre leche vegetal o animal",
    precio: 3850,
    categoria: "Desayunos / Meriendas / Brunchs",
    imagen: "/images/cafe.png"
  },
  {
    nombre: "Chocolatada",
    descripcion: "Chocolatada con leche",
    precio: 3960,
    categoria: "Desayunos / Meriendas / Brunchs",
    imagen: "/images/cafe.png"
  },
  {
    nombre: "Vaso de Leche",
    descripcion: "Vaso de leche",
    precio: 2860,
    categoria: "Desayunos / Meriendas / Brunchs",
    imagen: "/images/cafe.png"
  },
  {
    nombre: "Submarino",
    descripcion: "Submarino con chocolate",
    precio: 5280,
    categoria: "Desayunos / Meriendas / Brunchs",
    imagen: "/images/cafe.png"
  },
  {
    nombre: "Té en Saquito Inti Zen",
    descripcion: "Té en saquito Inti Zen",
    precio: 3080,
    categoria: "Desayunos / Meriendas / Brunchs",
    imagen: "/images/cafe.png"
  },
  {
    nombre: "Mate Cocido",
    descripcion: "Mate cocido",
    precio: 2860,
    categoria: "Desayunos / Meriendas / Brunchs",
    imagen: "/images/cafe.png"
  },
  
  // MOCCA
  {
    nombre: "Mocca",
    descripcion: "Café, chocolate y leche",
    precio: 5170,
    categoria: "Desayunos / Meriendas / Brunchs",
    imagen: "/images/cafe.png"
  },
  {
    nombre: "Capuccino",
    descripcion: "Capuccino tradicional",
    precio: 5280,
    categoria: "Desayunos / Meriendas / Brunchs",
    imagen: "/images/cafe.png"
  },
  {
    nombre: "Latte",
    descripcion: "Latte clásico",
    precio: 4290,
    categoria: "Desayunos / Meriendas / Brunchs",
    imagen: "/images/cafe.png"
  },
  {
    nombre: "Latte de Dulce de Leche/Vainilla/Avellanas",
    descripcion: "Latte con sabor a elección",
    precio: 4730,
    categoria: "Desayunos / Meriendas / Brunchs",
    imagen: "/images/cafe.png"
  },
  {
    nombre: "Latte de Chocolate Blanco y Pistacho",
    descripcion: "Latte con chocolate blanco y pistacho",
    precio: 6160,
    categoria: "Desayunos / Meriendas / Brunchs",
    imagen: "/images/cafe.png"
  },
  
  // AFOGATTO
  {
    nombre: "Afogatto",
    descripcion: "Café con helado",
    precio: 5390,
    categoria: "Desayunos / Meriendas / Brunchs",
    imagen: "/images/cafe.png"
  },
  {
    nombre: "Chocolate Italiano",
    descripcion: "Chocolate italiano tradicional",
    precio: 6820,
    categoria: "Desayunos / Meriendas / Brunchs",
    imagen: "/images/cafe.png"
  }
];

// Función para cargar productos
async function cargarProductos() {
  const token = process.env.ADMIN_TOKEN || 'tu_token_aqui'; // Reemplaza con tu token real
  
  for (const producto of productos) {
    try {
      const response = await fetch('http://localhost:3000/api/productos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
        },
        body: JSON.stringify(producto)
      });
      
      if (response.ok) {
        const data = await response.json();
        console.log(`✅ Producto cargado: ${producto.nombre}`);
      } else {
        console.error(`❌ Error al cargar ${producto.nombre}:`, await response.text());
      }
    } catch (error) {
      console.error(`❌ Error al cargar ${producto.nombre}:`, error);
    }
  }
}

// Ejecutar si se llama directamente
if (typeof window === 'undefined') {
  cargarProductos();
}

module.exports = { productos, cargarProductos }; 