const productos = [
  // DESAYUNOS Y MERIENDAS
  {
    nombre: "Sin Sin",
    descripcion: "Infusión a elección + Panqueque con harina de coco + Frutos rojos + Yogur griego",
    precio: 9680,
    categoria: "Opciones Antiinflamatorias",
    imagen: "/images/cafe.png"
  },
  {
    nombre: "SyS (Sano y Saludable)",
    descripcion: "Infusión a elección con bruschetta de boniato + Dressing de palta + Huevos revueltos + Gajos de palta + Cherrys",
    precio: 12100,
    categoria: "Opciones Antiinflamatorias",
    imagen: "/images/cafe.png"
  },
  {
    nombre: "Sin Nombre",
    descripcion: "Infusión a elección con tostada de pan sarraceno y 2 dips: Yogur griego y dulce de coco (sin azúcar, lácteos ni gluten)",
    precio: 8800,
    categoria: "Opciones Antiinflamatorias",
    imagen: "/images/cafe.png"
  },
  
  // ALMUERZOS Y CENAS
  {
    nombre: "Lomito",
    descripcion: "Pan de zanahoria + Lomo de ternera/pollo + Kale + Jamón + Emulsión de zanahoria",
    precio: 15070,
    categoria: "Opciones Antiinflamatorias",
    imagen: "/images/tostadas.png"
  },
  {
    nombre: "Ensalada Anti",
    descripcion: "Hebras de pollo + Cous cous + Pepino + Cherrys + Berenjena + Zanahoria + Emulsión de cúrcuma",
    precio: 9790,
    categoria: "Opciones Antiinflamatorias",
    imagen: "/images/tostadas.png"
  },
  {
    nombre: "Tarta",
    descripcion: "Con harina de almendras + Verduras (consultar variedad)",
    precio: 11340,
    categoria: "Opciones Antiinflamatorias",
    imagen: "/images/tostadas.png"
  },
  
  // BEBIDAS
  {
    nombre: "Golden Milk",
    descripcion: "Golden milk antiinflamatorio",
    precio: 6160,
    categoria: "Opciones Antiinflamatorias",
    imagen: "/images/cafe.png"
  },
  
  // OPCIONES SIN TACC
  {
    nombre: "Alfajor de Coco",
    descripcion: "Alfajor de coco sin TACC",
    precio: 3400,
    categoria: "Opciones Antiinflamatorias",
    imagen: "/images/torta.png"
  },
  {
    nombre: "Alfajor de Nuez",
    descripcion: "Alfajor de nuez sin TACC",
    precio: 3400,
    categoria: "Opciones Antiinflamatorias",
    imagen: "/images/torta.png"
  },
  {
    nombre: "Alfajor de Chocolate Bariloche",
    descripcion: "Alfajor de chocolate bariloche sin TACC",
    precio: 3400,
    categoria: "Opciones Antiinflamatorias",
    imagen: "/images/torta.png"
  },
  {
    nombre: "Budín",
    descripcion: "Budín sin TACC (consultar variedad)",
    precio: 4290,
    categoria: "Opciones Antiinflamatorias",
    imagen: "/images/torta.png"
  },
  {
    nombre: "Carrot Cake",
    descripcion: "Carrot cake sin TACC",
    precio: 4290,
    categoria: "Opciones Antiinflamatorias",
    imagen: "/images/torta.png"
  },
  {
    nombre: "Cookies de Brownie",
    descripcion: "Cookies de brownie sin TACC",
    precio: 6380,
    categoria: "Opciones Antiinflamatorias",
    imagen: "/images/torta.png"
  },
  {
    nombre: "Trufas de Chocolate",
    descripcion: "Trufas de chocolate sin TACC",
    precio: 7920,
    categoria: "Opciones Antiinflamatorias",
    imagen: "/images/torta.png"
  },
  {
    nombre: "Crumble de Manzana",
    descripcion: "Crumble de manzana sin TACC",
    precio: 5257,
    categoria: "Opciones Antiinflamatorias",
    imagen: "/images/torta.png"
  },
  {
    nombre: "Sándwich de Jamón y Queso",
    descripcion: "Sándwich de jamón y queso sin TACC",
    precio: 7260,
    categoria: "Opciones Antiinflamatorias",
    imagen: "/images/tostadas.png"
  },
  {
    nombre: "Bizcochos",
    descripcion: "Bizcochos sin TACC",
    precio: 3740,
    categoria: "Opciones Antiinflamatorias",
    imagen: "/images/torta.png"
  },
  {
    nombre: "Chipá",
    descripcion: "Chipá sin TACC",
    precio: 3850,
    categoria: "Opciones Antiinflamatorias",
    imagen: "/images/torta.png"
  }
];

async function cargarProductos() {
  const token = 'LUISMARIA2024';
  let exitosos = 0;
  let errores = 0;
  
  console.log('🚀 Iniciando carga de productos de Opciones Antiinflamatorias...');
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