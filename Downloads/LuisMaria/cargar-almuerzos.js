const productos = [
  // ENTRE PANES
  {
    nombre: "El Lomo de Luis (Carne/Pollo)",
    descripcion: "Pan de ciabatta + Lomo de terna o pollo + Jamón + Panceta + Queso tybo + Lactonesa + Lechuga + Tomate",
    precio: 14630,
    categoria: "Almuerzos / Cenas",
    imagen: "/images/tostadas.png"
  },
  {
    nombre: "LM Gourmet",
    descripcion: "Pan brioche + Queso + Champignones + Panceta",
    precio: 13090,
    categoria: "Almuerzos / Cenas",
    imagen: "/images/tostadas.png"
  },
  {
    nombre: "Prensadito de Chipá",
    descripcion: "Pan de chipá con extra queso, relleno de jamón y queso",
    precio: 11000,
    categoria: "Almuerzos / Cenas",
    imagen: "/images/tostadas.png"
  },
  {
    nombre: "Serrano",
    descripcion: "Pan de queso + Jamón serrano + Queso + Manteca + Rúcula",
    precio: 10890,
    categoria: "Almuerzos / Cenas",
    imagen: "/images/tostadas.png"
  },
  {
    nombre: "Alto Sándwich",
    descripcion: "Pan de campo con queso sardo gratinado + Huevo revuelto + Jamón cocido",
    precio: 12870,
    categoria: "Almuerzos / Cenas",
    imagen: "/images/tostadas.png"
  },
  {
    nombre: "De Miga",
    descripcion: "Sándwich de miga",
    precio: 5900,
    categoria: "Almuerzos / Cenas",
    imagen: "/images/tostadas.png"
  },
  
  // MILANESA
  {
    nombre: "Mila + Tallarines",
    descripcion: "Milanesa con tallarines a la crema y queso",
    precio: 15400,
    categoria: "Almuerzos / Cenas",
    imagen: "/images/tostadas.png"
  },
  
  // PASTAS
  {
    nombre: "Sorrentinos",
    descripcion: "Pedí tu plato con salsa a elección: 3 quesos / Champignones y panceta / Pomodoro",
    precio: 15950,
    categoria: "Almuerzos / Cenas",
    imagen: "/images/tostadas.png"
  },
  {
    nombre: "Ñoquis",
    descripcion: "Pedí tu plato con salsa a elección: 3 quesos / Champignones y panceta / Pomodoro",
    precio: 14300,
    categoria: "Almuerzos / Cenas",
    imagen: "/images/tostadas.png"
  },
  {
    nombre: "Tallarines",
    descripcion: "Pedí tu plato con salsa a elección: 3 quesos / Champignones y panceta / Pomodoro",
    precio: 14300,
    categoria: "Almuerzos / Cenas",
    imagen: "/images/tostadas.png"
  },
  
  // TARTAS
  {
    nombre: "Tarta Pollo, Cebolla Caramelizada y Queso",
    descripcion: "Tarta de pollo con cebolla caramelizada y queso",
    precio: 10560,
    categoria: "Almuerzos / Cenas",
    imagen: "/images/tostadas.png"
  },
  {
    nombre: "Quiche Loraine",
    descripcion: "Quiche loraine tradicional",
    precio: 10560,
    categoria: "Almuerzos / Cenas",
    imagen: "/images/tostadas.png"
  },
  {
    nombre: "Tarta Espinaca y Atún",
    descripcion: "Tarta de espinaca y atún",
    precio: 10560,
    categoria: "Almuerzos / Cenas",
    imagen: "/images/tostadas.png"
  },
  
  // ROLLS
  {
    nombre: "Roll César",
    descripcion: "Pollo crispy + Hojas verdes + Lactonesa + Panceta",
    precio: 9350,
    categoria: "Almuerzos / Cenas",
    imagen: "/images/tostadas.png"
  },
  {
    nombre: "Roll Fusión",
    descripcion: "Lomo + Verduras al wok",
    precio: 9350,
    categoria: "Almuerzos / Cenas",
    imagen: "/images/tostadas.png"
  },
  
  // PIZZAS
  {
    nombre: "Pizza Cuatro Quesos",
    descripcion: "Queso mozzarella + Queso cremón + Queso sardo + Queso azul + Nueces + Opcional de miel",
    precio: 10010,
    categoria: "Almuerzos / Cenas",
    imagen: "/images/tostadas.png"
  },
  {
    nombre: "Pizza Margarita",
    descripcion: "Queso mozzarella + Dressing de albahaca + Cherrys",
    precio: 9680,
    categoria: "Almuerzos / Cenas",
    imagen: "/images/tostadas.png"
  },
  {
    nombre: "Pizza Rúcula",
    descripcion: "Queso mozzarella + Rúcula + Jamón crudo + Cherrys",
    precio: 9900,
    categoria: "Almuerzos / Cenas",
    imagen: "/images/tostadas.png"
  },
  {
    nombre: "Pizza Común",
    descripcion: "Queso mozzarella",
    precio: 8470,
    categoria: "Almuerzos / Cenas",
    imagen: "/images/tostadas.png"
  }
];

async function cargarProductos() {
  const token = 'LUISMARIA2024';
  let exitosos = 0;
  let errores = 0;
  
  console.log('🚀 Iniciando carga de productos de Almuerzos/Cenas...');
  console.log(`📦 Total de productos a cargar: ${productos.length}`);
  console.log('─'.repeat(50));
  
  for (let i = 0; i < productos.length; i++) {
    const producto = productos[i];
    
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
        console.log(`✅ [${i + 1}/${productos.length}] ${producto.nombre} - $${producto.precio}`);
        exitosos++;
      } else {
        const errorText = await response.text();
        console.error(`❌ [${i + 1}/${productos.length}] Error al cargar ${producto.nombre}:`, errorText);
        errores++;
      }
    } catch (error) {
      console.error(`❌ [${i + 1}/${productos.length}] Error al cargar ${producto.nombre}:`, error.message);
      errores++;
    }
    
    // Pequeña pausa entre requests
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  
  console.log('─'.repeat(50));
  console.log(`🎉 Carga completada!`);
  console.log(`✅ Productos cargados exitosamente: ${exitosos}`);
  console.log(`❌ Errores: ${errores}`);
  console.log(`📊 Total procesados: ${exitosos + errores}`);
}

// Ejecutar la carga
cargarProductos().catch(console.error); 