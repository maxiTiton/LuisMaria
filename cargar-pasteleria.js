const productos = [
  // MUY DULCES
  {
    nombre: "Medialunas Caseras Dulces",
    descripcion: "Medialunas caseras dulces",
    precio: 1210,
    categoria: "Pastelería",
    imagen: "/images/torta.png"
  },
  {
    nombre: "Palmeritas Mini",
    descripcion: "Palmeritas mini",
    precio: 2800,
    categoria: "Pastelería",
    imagen: "/images/torta.png"
  },
  {
    nombre: "Palmeritas Max",
    descripcion: "Palmeritas max",
    precio: 6300,
    categoria: "Pastelería",
    imagen: "/images/torta.png"
  },
  {
    nombre: "Galletas de Avena Bañadas x4",
    descripcion: "Galletas de avena bañadas x4",
    precio: 3900,
    categoria: "Pastelería",
    imagen: "/images/torta.png"
  },
  {
    nombre: "Galleta de Avena x4",
    descripcion: "Galleta de avena x4",
    precio: 2400,
    categoria: "Pastelería",
    imagen: "/images/torta.png"
  },
  {
    nombre: "Brownie Suizo",
    descripcion: "Brownie suizo con dulce de leche y merengue italiano",
    precio: 5900,
    categoria: "Pastelería",
    imagen: "/images/torta.png"
  },
  {
    nombre: "Brownie con Nuez",
    descripcion: "Brownie con nuez",
    precio: 6100,
    categoria: "Pastelería",
    imagen: "/images/torta.png"
  },
  {
    nombre: "Roll de Canela",
    descripcion: "Roll de canela",
    precio: 3080,
    categoria: "Pastelería",
    imagen: "/images/torta.png"
  },
  
  // ANTOJITOS
  {
    nombre: "Antojitos",
    descripcion: "Chocotorta, María Bonita, Oreo, Cheese Cake Limón, Cheese Cake de Frutos Rojos, Tiramisú",
    precio: 5600,
    categoria: "Pastelería",
    imagen: "/images/torta.png"
  },
  
  // FRASCOS
  {
    nombre: "Frascos",
    descripcion: "Chocotorta, María Bonita, Oreo, Cheese Cake Limón, Cheese Cake de Frutos Rojos, Tiramisú",
    precio: 8400,
    categoria: "Pastelería",
    imagen: "/images/torta.png"
  },
  
  // TARTAS 1 PORCIONES
  {
    nombre: "Lemon Pie",
    descripcion: "Lemon pie porción",
    precio: 8200,
    categoria: "Pastelería",
    imagen: "/images/torta.png"
  },
  {
    nombre: "Mini Frutillas",
    descripcion: "Mini torta de frutillas",
    precio: 10500,
    categoria: "Pastelería",
    imagen: "/images/torta.png"
  },
  {
    nombre: "Mini Manzana",
    descripcion: "Mini torta de manzana",
    precio: 10100,
    categoria: "Pastelería",
    imagen: "/images/torta.png"
  },
  {
    nombre: "Mini Mousse de Chocolate",
    descripcion: "Mini torta mousse de chocolate",
    precio: 10000,
    categoria: "Pastelería",
    imagen: "/images/torta.png"
  },
  {
    nombre: "Mini Mousse Pistachos",
    descripcion: "Mini torta mousse de pistachos",
    precio: 10500,
    categoria: "Pastelería",
    imagen: "/images/torta.png"
  },
  {
    nombre: "Marmolada",
    descripcion: "Mini torta marmolada",
    precio: 10300,
    categoria: "Pastelería",
    imagen: "/images/torta.png"
  },
  {
    nombre: "Mini Bandiera",
    descripcion: "Mini torta bandiera",
    precio: 12900,
    categoria: "Pastelería",
    imagen: "/images/torta.png"
  },
  {
    nombre: "Mini Avellanas",
    descripcion: "Mini torta de avellanas",
    precio: 12300,
    categoria: "Pastelería",
    imagen: "/images/torta.png"
  },
  
  // MINI TORTAS
  {
    nombre: "Cheese Cake Cocido con Frutos Rojos",
    descripcion: "Mini cheese cake cocido con frutos rojos",
    precio: 13000,
    categoria: "Pastelería",
    imagen: "/images/torta.png"
  },
  {
    nombre: "Mini LMP",
    descripcion: "Mini torta LMP",
    precio: 16200,
    categoria: "Pastelería",
    imagen: "/images/torta.png"
  },
  {
    nombre: "Lola",
    descripcion: "Brownie, crema batida, dulce de leche y frutos rojos",
    precio: 13700,
    categoria: "Pastelería",
    imagen: "/images/torta.png"
  },
  {
    nombre: "Drácula",
    descripcion: "Bizcochuelo de vainilla, crema batida y frutillas",
    precio: 14500,
    categoria: "Pastelería",
    imagen: "/images/torta.png"
  },
  {
    nombre: "750 Hojas",
    descripcion: "Hojaldre y dulce de leche",
    precio: 14100,
    categoria: "Pastelería",
    imagen: "/images/torta.png"
  },
  {
    nombre: "Rogel",
    descripcion: "Masa crocante con dulce de leche y merengue",
    precio: 12700,
    categoria: "Pastelería",
    imagen: "/images/torta.png"
  },
  
  // TORTAS
  {
    nombre: "Mil Hojas",
    descripcion: "Torta mil hojas",
    precio: 32600,
    categoria: "Pastelería",
    imagen: "/images/torta.png"
  },
  {
    nombre: "Chocotorta",
    descripcion: "Clásica torta argentina de chocolinas y mousse de dulce de leche",
    precio: 32200,
    categoria: "Pastelería",
    imagen: "/images/torta.png"
  },
  {
    nombre: "Imperial Portugués",
    descripcion: "Bizcochuelo de vainilla y chocolate, merengue, crema batida, dulce de leche y mousse de chocolate",
    precio: 33200,
    categoria: "Pastelería",
    imagen: "/images/torta.png"
  },
  {
    nombre: "Julia Mora",
    descripcion: "Bizcochuelo de chocolate, crema batida, mousse de chocolate, frutos rojos y moras",
    precio: 40300,
    categoria: "Pastelería",
    imagen: "/images/torta.png"
  },
  {
    nombre: "LMP",
    descripcion: "Bizcochuelo de chocolate, mousse de chocolate, dulce de leche y marroc",
    precio: 46700,
    categoria: "Pastelería",
    imagen: "/images/torta.png"
  },
  {
    nombre: "Melanie",
    descripcion: "Brownie, mousse de chocolate, frutos rojos y merengue",
    precio: 37600,
    categoria: "Pastelería",
    imagen: "/images/torta.png"
  },
  {
    nombre: "Merengada",
    descripcion: "Bizcochuelo de vainilla, dulce de leche y merengue seco",
    precio: 31800,
    categoria: "Pastelería",
    imagen: "/images/torta.png"
  },
  {
    nombre: "Cheese Cake Frutos Rojos",
    descripcion: "Cheese cake con frutos rojos",
    precio: 32600,
    categoria: "Pastelería",
    imagen: "/images/torta.png"
  },
  {
    nombre: "Tiramisú",
    descripcion: "Torta clásica italiana",
    precio: 32800,
    categoria: "Pastelería",
    imagen: "/images/torta.png"
  },
  {
    nombre: "Torta Chajá de Cumpleaños",
    descripcion: "Bizcochuelo de vainilla, dulce de leche, merengue suizo y durazno",
    precio: 31400,
    categoria: "Pastelería",
    imagen: "/images/torta.png"
  },
  {
    nombre: "Torta Oreo",
    descripcion: "Bizcochuelo de chocolate, crema batida con trozos de oreos, decorado con dulce de leche bombones y chocolate blanco",
    precio: 32900,
    categoria: "Pastelería",
    imagen: "/images/torta.png"
  },
  {
    nombre: "No-Se",
    descripcion: "Bizcochuelo de chocolate, dulce de leche y merengue",
    precio: 33300,
    categoria: "Pastelería",
    imagen: "/images/torta.png"
  },
  {
    nombre: "Pecadora",
    descripcion: "Bizcochuelo de chocolate y mousse de chocolate",
    precio: 43100,
    categoria: "Pastelería",
    imagen: "/images/torta.png"
  },
  {
    nombre: "Rogel Grande",
    descripcion: "Rogel grande",
    precio: 30900,
    categoria: "Pastelería",
    imagen: "/images/torta.png"
  },
  {
    nombre: "Selva Negra",
    descripcion: "Bizcochuelo de chocolate, crema batida y cerezas",
    precio: 32700,
    categoria: "Pastelería",
    imagen: "/images/torta.png"
  },
  {
    nombre: "Cheese Cocido",
    descripcion: "Cheese cake cocido",
    precio: 31200,
    categoria: "Pastelería",
    imagen: "/images/torta.png"
  },
  
  // TARTAS MEDIANAS
  {
    nombre: "Lemon Pie Mediano",
    descripcion: "Lemon pie mediano",
    precio: 28100,
    categoria: "Pastelería",
    imagen: "/images/torta.png"
  },
  {
    nombre: "Frutillas Mediana",
    descripcion: "Tarta de frutillas mediana",
    precio: 33200,
    categoria: "Pastelería",
    imagen: "/images/torta.png"
  },
  {
    nombre: "Manzana Mediana",
    descripcion: "Tarta de manzana mediana",
    precio: 32900,
    categoria: "Pastelería",
    imagen: "/images/torta.png"
  },
  {
    nombre: "Mousse de Chocolate Mediana",
    descripcion: "Tarta mousse de chocolate mediana",
    precio: 31600,
    categoria: "Pastelería",
    imagen: "/images/torta.png"
  },
  {
    nombre: "Mousse Pistachos Mediana",
    descripcion: "Tarta mousse de pistachos mediana",
    precio: 34800,
    categoria: "Pastelería",
    imagen: "/images/torta.png"
  },
  {
    nombre: "Marmolada Mediana",
    descripcion: "Tarta marmolada mediana",
    precio: 33400,
    categoria: "Pastelería",
    imagen: "/images/torta.png"
  },
  {
    nombre: "Bandiera Mediana",
    descripcion: "Tarta bandiera mediana",
    precio: 37200,
    categoria: "Pastelería",
    imagen: "/images/torta.png"
  },
  {
    nombre: "Avellanas Mediana",
    descripcion: "Tarta de avellanas mediana",
    precio: 35100,
    categoria: "Pastelería",
    imagen: "/images/torta.png"
  },
  
  // TORTAS HELADAS
  {
    nombre: "Oreo Helada",
    descripcion: "Capas de helado de oreo y crema, corazón de dulce de leche, helado sopago, decorada con dulce de leche, oreos trozadas y enteras",
    precio: 42000,
    categoria: "Pastelería",
    imagen: "/images/helado.png"
  },
  {
    nombre: "El Lunes Empiezo",
    descripcion: "Base de bizcocho, helado de chocolate blanco, helado después de te digo, decorada con baño de chocolate marmolado y crocantes bañados en chocolate",
    precio: 42000,
    categoria: "Pastelería",
    imagen: "/images/helado.png"
  },
  {
    nombre: "Solo F (Solo Frutas)",
    descripcion: "Suave crema, helado de durazno asado y crema de coco, decorada con hilos de chocolate amargo y duraznos",
    precio: 42000,
    categoria: "Pastelería",
    imagen: "/images/helado.png"
  },
  {
    nombre: "Maracuyá",
    descripcion: "Crema de chocolate blanco, helado de chocolate, corazón de leche condensada, helado de crema de maracuyá, decorada con una capa de crema suave y copos de crema",
    precio: 42000,
    categoria: "Pastelería",
    imagen: "/images/helado.png"
  },
  {
    nombre: "Chocolate y Frambuesa",
    descripcion: "Helado de jamaica, chocolate fraluis, helado de chocolate blanco y mousse de chocolate",
    precio: 42000,
    categoria: "Pastelería",
    imagen: "/images/helado.png"
  },
  {
    nombre: "Pistacho",
    descripcion: "Helado de pistacho, garrapiñada de pistacho, helado de mascarpone, crema de pistacho decorada con bombones de chocolate rellenos con dulce de leche",
    precio: 42000,
    categoria: "Pastelería",
    imagen: "/images/helado.png"
  },
  
  // ALFAJORES
  {
    nombre: "Alfajor Chocolate Clásico",
    descripcion: "Alfajor de chocolate clásico",
    precio: 2900,
    categoria: "Pastelería",
    imagen: "/images/torta.png"
  },
  {
    nombre: "Alfajor Limón con Merengue",
    descripcion: "Masa sablee de limón, relleno de limón y disco de merengue",
    precio: 2900,
    categoria: "Pastelería",
    imagen: "/images/torta.png"
  },
  {
    nombre: "Alfajor Chocolate con Avellanas y Merengue",
    descripcion: "Con dulce de leche",
    precio: 3900,
    categoria: "Pastelería",
    imagen: "/images/torta.png"
  },
  {
    nombre: "Alfajor Cookie",
    descripcion: "Masa de cookies, con dulce de leche y baños de chocolate con leche y blanco",
    precio: 3300,
    categoria: "Pastelería",
    imagen: "/images/torta.png"
  },
  {
    nombre: "Alfajor Alfa-Or",
    descripcion: "Galleta de chocolate intenso, mucho dulce de leche y baño de chocolate semi amargo",
    precio: 3800,
    categoria: "Pastelería",
    imagen: "/images/torta.png"
  },
  {
    nombre: "Alfajor Almendras",
    descripcion: "Harina de almendras, relleno de dulce de leche y crocantes",
    precio: 3700,
    categoria: "Pastelería",
    imagen: "/images/torta.png"
  },
  {
    nombre: "Alfajor Maní",
    descripcion: "Alfajor de maní",
    precio: 3500,
    categoria: "Pastelería",
    imagen: "/images/torta.png"
  },
  {
    nombre: "Mini Alfajor Almendras x1",
    descripcion: "Mini alfajor de almendras x1",
    precio: 1000,
    categoria: "Pastelería",
    imagen: "/images/torta.png"
  },
  {
    nombre: "Mini Alfajor Maicena x5",
    descripcion: "Mini alfajores de maicena x5",
    precio: 3500,
    categoria: "Pastelería",
    imagen: "/images/torta.png"
  },
  {
    nombre: "Mini Alfajor Maicena x1",
    descripcion: "Mini alfajor de maicena x1",
    precio: 800,
    categoria: "Pastelería",
    imagen: "/images/torta.png"
  },
  {
    nombre: "Mini Alfajor Cordobés de Membrillo o DDL x1",
    descripcion: "Mini alfajor cordobés de membrillo o dulce de leche x1",
    precio: 750,
    categoria: "Pastelería",
    imagen: "/images/torta.png"
  },
  {
    nombre: "Mini Alfajor Cordobés de Membrillo o DDL x5",
    descripcion: "Mini alfajores cordobeses de membrillo o dulce de leche x5",
    precio: 3300,
    categoria: "Pastelería",
    imagen: "/images/torta.png"
  }
];

async function cargarProductos() {
  const token = 'LUISMARIA2024';
  let exitosos = 0;
  let errores = 0;
  
  console.log('🚀 Iniciando carga de productos de Pastelería...');
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