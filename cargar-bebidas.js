const productos = [
  // JUGOS FRUTALES
  {
    nombre: "VASO DE NARANJA",
    descripcion: "Jugo de naranja natural (250 CC)",
    precio: 3520,
    categoria: "Bebidas/Tragos",
    subcategoria: "Jugos Frutales",
    imagen: "/images/jugo-naranja.png",
    disponible: true
  },
  {
    nombre: "BOTELLA DE NARANJA",
    descripcion: "Jugo de naranja natural (500 CC)",
    precio: 4800,
    categoria: "Bebidas/Tragos",
    subcategoria: "Jugos Frutales",
    imagen: "/images/jugo-naranja.png",
    disponible: true
  },
  {
    nombre: "BOTELLA DE LIMONADA DE COCO",
    descripcion: "Limón con coco (500 CC)",
    precio: 4200,
    categoria: "Bebidas/Tragos",
    subcategoria: "Jugos Frutales",
    imagen: "/images/limonada-coco.png",
    disponible: true
  },
  
  // MOCKTAILS
  {
    nombre: "POMELO Y FRUTOS ROJOS",
    descripcion: "Mocktail refrescante de pomelo con frutos rojos",
    precio: 3520,
    categoria: "Bebidas/Tragos",
    subcategoria: "Mocktails",
    imagen: "/images/mocktail-pomelo.png",
    disponible: true
  },
  {
    nombre: "NARANJA Y CANELA",
    descripcion: "Mocktail de naranja con toque de canela",
    precio: 3520,
    categoria: "Bebidas/Tragos",
    subcategoria: "Mocktails",
    imagen: "/images/mocktail-naranja.png",
    disponible: true
  },
  {
    nombre: "PEPINO Y LIMÓN",
    descripcion: "Mocktail refrescante de pepino con limón",
    precio: 3520,
    categoria: "Bebidas/Tragos",
    subcategoria: "Mocktails",
    imagen: "/images/mocktail-pepino.png",
    disponible: true
  },
  
  // MILK SHAKE
  {
    nombre: "BATIDO DE HELADO A ELECCIÓN",
    descripcion: "Batido de helado a elección con leche o agua (500CC)",
    precio: 5400,
    categoria: "Bebidas/Tragos",
    subcategoria: "Milk Shake",
    imagen: "/images/milkshake.png",
    disponible: true
  },
  
  // LICUADOS
  {
    nombre: "LICUADO DE FRUTILLA",
    descripcion: "Licuado natural de frutilla",
    precio: 5280,
    categoria: "Bebidas/Tragos",
    subcategoria: "Licuados",
    imagen: "/images/licuado-frutilla.png",
    disponible: true
  },
  {
    nombre: "LICUADO DE BANANA",
    descripcion: "Licuado natural de banana",
    precio: 5000,
    categoria: "Bebidas/Tragos",
    subcategoria: "Licuados",
    imagen: "/images/licuado-banana.png",
    disponible: true
  },
  {
    nombre: "LICUADO NARANJA CON FRUTILLA",
    descripcion: "Licuado natural de naranja con frutilla",
    precio: 5000,
    categoria: "Bebidas/Tragos",
    subcategoria: "Licuados",
    imagen: "/images/licuado-naranja-frutilla.png",
    disponible: true
  },
  
  // SIN ALCOHOL
  {
    nombre: "AGUA MINERAL / CON GAS / SABORIZADA",
    descripcion: "Agua mineral, con gas o saborizada",
    precio: 3410,
    categoria: "Bebidas/Tragos",
    subcategoria: "Sin Alcohol",
    imagen: "/images/agua.png",
    disponible: true
  },
  {
    nombre: "GASEOSAS",
    descripcion: "Variedad de gaseosas",
    precio: 3410,
    categoria: "Bebidas/Tragos",
    subcategoria: "Sin Alcohol",
    imagen: "/images/gaseosa.png",
    disponible: true
  },
  
  // CON ALCOHOL
  {
    nombre: "STELLA RUBIA / NEGRA (473ML)",
    descripcion: "Cerveza Stella rubia o negra (473ml)",
    precio: 5170,
    categoria: "Bebidas/Tragos",
    subcategoria: "Con Alcohol",
    imagen: "/images/stella.png",
    disponible: true
  },
  {
    nombre: "STELLA RUBIA / NEGRA (1L)",
    descripcion: "Cerveza Stella rubia o negra (1L)",
    precio: 8580,
    categoria: "Bebidas/Tragos",
    subcategoria: "Con Alcohol",
    imagen: "/images/stella.png",
    disponible: true
  }
];

async function cargarProductos() {
  const adminToken = "LUISMARIA2024"; // Token de administrador
  
  try {
    console.log("Cargando productos de Bebidas/Tragos...");
    
    for (const producto of productos) {
      const response = await fetch('http://localhost:3000/api/productos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': adminToken
        },
        body: JSON.stringify(producto)
      });
      
      if (response.ok) {
        const result = await response.json();
        console.log(`✅ Producto cargado: ${producto.nombre}`);
      } else {
        const error = await response.text();
        console.error(`❌ Error al cargar ${producto.nombre}:`, error);
      }
    }
    
    console.log("🎉 Carga de productos de Bebidas/Tragos completada!");
    
  } catch (error) {
    console.error("Error durante la carga:", error);
  }
}

// Ejecutar la carga
cargarProductos(); 