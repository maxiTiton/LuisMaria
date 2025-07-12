const productos = [
  // HELADOS ESPECIAL
  {
    nombre: "Helado Especial 1 Bocha",
    descripcion: "Helado especial 1 bocha",
    precio: 3000,
    categoria: "Helados",
    imagen: "/images/helado.png"
  },
  {
    nombre: "Helado Especial 2 Bochas",
    descripcion: "Helado especial 2 bochas",
    precio: 5000,
    categoria: "Helados",
    imagen: "/images/helado.png"
  },
  {
    nombre: "Helado Especial 3 Bochas",
    descripcion: "Helado especial 3 bochas",
    precio: 6000,
    categoria: "Helados",
    imagen: "/images/helado.png"
  },
  {
    nombre: "Helado Especial 1/4 KG",
    descripcion: "Helado especial 1/4 kg",
    precio: 6200,
    categoria: "Helados",
    imagen: "/images/helado.png"
  },
  {
    nombre: "Helado Especial 1/2 KG",
    descripcion: "Helado especial 1/2 kg",
    precio: 9800,
    categoria: "Helados",
    imagen: "/images/helado.png"
  },
  {
    nombre: "Helado Especial 1 KG",
    descripcion: "Helado especial 1 kg",
    precio: 18500,
    categoria: "Helados",
    imagen: "/images/helado.png"
  },
  
  // DE PROMO
  {
    nombre: "Helado de Promo 1/2 KG",
    descripcion: "Helado de promoción 1/2 kg",
    precio: 9000,
    categoria: "Helados",
    imagen: "/images/helado.png"
  },
  {
    nombre: "Helado de Promo 1 KG",
    descripcion: "Helado de promoción 1 kg",
    precio: 16000,
    categoria: "Helados",
    imagen: "/images/helado.png"
  },
  
  // PREMIUM
  {
    nombre: "1/4 de Marroc",
    descripcion: "Crema italiana, con bombón marroc y dulce de leche",
    precio: 11600,
    categoria: "Helados",
    imagen: "/images/helado.png"
  },
  {
    nombre: "1/4 de Fraluis",
    descripcion: "Crema helada de frutos rojos con trocitos de chocolates y frambuesas bañadas con chocolate",
    precio: 10100,
    categoria: "Helados",
    imagen: "/images/helado.png"
  },
  
  // VEGANO
  {
    nombre: "Vegano Pistacho con Praline de Castañas de Cajú",
    descripcion: "Helado vegano de pistacho con praline de castañas de cajú",
    precio: 10500,
    categoria: "Helados",
    imagen: "/images/helado.png"
  },
  {
    nombre: "Vegano Chocolate con Amarenas",
    descripcion: "Helado vegano de chocolate con amarenas",
    precio: 8300,
    categoria: "Helados",
    imagen: "/images/helado.png"
  },
  {
    nombre: "Vegano Vainilla al Caramelo",
    descripcion: "Helado vegano de vainilla al caramelo",
    precio: 7400,
    categoria: "Helados",
    imagen: "/images/helado.png"
  },
  
  // FRUTAS A LA CREMA
  {
    nombre: "Banana",
    descripcion: "Helado de banana a la crema",
    precio: 3000,
    categoria: "Helados",
    imagen: "/images/helado.png"
  },
  {
    nombre: "Cereza",
    descripcion: "Helado de cereza a la crema",
    precio: 3000,
    categoria: "Helados",
    imagen: "/images/helado.png"
  },
  {
    nombre: "Mousse de Limón",
    descripcion: "Helado mousse de limón a la crema",
    precio: 3000,
    categoria: "Helados",
    imagen: "/images/helado.png"
  },
  {
    nombre: "Banana con Dulce de Leche",
    descripcion: "Helado de banana con dulce de leche a la crema",
    precio: 3000,
    categoria: "Helados",
    imagen: "/images/helado.png"
  },
  {
    nombre: "Frutilla",
    descripcion: "Helado de frutilla a la crema",
    precio: 3000,
    categoria: "Helados",
    imagen: "/images/helado.png"
  },
  {
    nombre: "Jamaica",
    descripcion: "Helado de frambuesa",
    precio: 3000,
    categoria: "Helados",
    imagen: "/images/helado.png"
  },
  {
    nombre: "Mousse de Maracuyá",
    descripcion: "Helado mousse de maracuyá a la crema",
    precio: 3000,
    categoria: "Helados",
    imagen: "/images/helado.png"
  },
  
  // AL AGUA
  {
    nombre: "Ananá",
    descripcion: "Helado de ananá al agua",
    precio: 3000,
    categoria: "Helados",
    imagen: "/images/helado.png"
  },
  {
    nombre: "Frutilla al Agua",
    descripcion: "Helado de frutilla al agua",
    precio: 3000,
    categoria: "Helados",
    imagen: "/images/helado.png"
  },
  {
    nombre: "Limón, Menta y Jengibre",
    descripcion: "Helado de limón, menta y jengibre al agua",
    precio: 3000,
    categoria: "Helados",
    imagen: "/images/helado.png"
  },
  {
    nombre: "Durazno",
    descripcion: "Helado de durazno al agua",
    precio: 3000,
    categoria: "Helados",
    imagen: "/images/helado.png"
  },
  {
    nombre: "Limón",
    descripcion: "Helado de limón al agua",
    precio: 3000,
    categoria: "Helados",
    imagen: "/images/helado.png"
  },
  {
    nombre: "Re-Naranja",
    descripcion: "Con 70% de jugo de naranja exprimido",
    precio: 3000,
    categoria: "Helados",
    imagen: "/images/helado.png"
  },
  {
    nombre: "Limón y Maracuyá",
    descripcion: "Helado de limón y maracuyá al agua",
    precio: 3000,
    categoria: "Helados",
    imagen: "/images/helado.png"
  },
  
  // DULCE DE LECHE
  {
    nombre: "Dulce de Leche Común",
    descripcion: "Helado de dulce de leche común",
    precio: 3000,
    categoria: "Helados",
    imagen: "/images/helado.png"
  },
  {
    nombre: "Dulce de Leche con Almendras",
    descripcion: "Con garrapiñada de almendras",
    precio: 3000,
    categoria: "Helados",
    imagen: "/images/helado.png"
  },
  {
    nombre: "Dulce de Leche con Nueces",
    descripcion: "Nueces enteras",
    precio: 3000,
    categoria: "Helados",
    imagen: "/images/helado.png"
  },
  {
    nombre: "Dulce de Leche Merengado",
    descripcion: "Con trocitos de merengue",
    precio: 3000,
    categoria: "Helados",
    imagen: "/images/helado.png"
  },
  {
    nombre: "Dulce de Leche Granizado",
    descripcion: "Con trocitos de chocolate",
    precio: 3000,
    categoria: "Helados",
    imagen: "/images/helado.png"
  },
  
  // CREMA
  {
    nombre: "Americana",
    descripcion: "Helado de crema americana",
    precio: 3000,
    categoria: "Helados",
    imagen: "/images/helado.png"
  },
  {
    nombre: "Amarenas",
    descripcion: "Granizado con cerezas ácidas italianas",
    precio: 3000,
    categoria: "Helados",
    imagen: "/images/helado.png"
  },
  {
    nombre: "Durazno Asado",
    descripcion: "Durazno a la crema con reducción de mango",
    precio: 3000,
    categoria: "Helados",
    imagen: "/images/helado.png"
  },
  {
    nombre: "Granizado",
    descripcion: "Helado de americana con trozos de chocolate negro",
    precio: 3000,
    categoria: "Helados",
    imagen: "/images/helado.png"
  },
  {
    nombre: "Menta Granizada",
    descripcion: "Mentitas y crema de menta",
    precio: 3000,
    categoria: "Helados",
    imagen: "/images/helado.png"
  },
  {
    nombre: "Sambayón",
    descripcion: "El tradicional",
    precio: 3000,
    categoria: "Helados",
    imagen: "/images/helado.png"
  },
  {
    nombre: "Vainilla",
    descripcion: "Helado de vainilla",
    precio: 3000,
    categoria: "Helados",
    imagen: "/images/helado.png"
  },
  {
    nombre: "Chocolate Común",
    descripcion: "Helado de chocolate común",
    precio: 3000,
    categoria: "Helados",
    imagen: "/images/helado.png"
  },
  {
    nombre: "Chocolate con Almendras",
    descripcion: "Con garrapiñadas de almendras",
    precio: 3000,
    categoria: "Helados",
    imagen: "/images/helado.png"
  },
  {
    nombre: "Mousse de Chocolate",
    descripcion: "Helado mousse de chocolate",
    precio: 3000,
    categoria: "Helados",
    imagen: "/images/helado.png"
  },
  {
    nombre: "Chocolate Blanco",
    descripcion: "Helado de chocolate blanco",
    precio: 3000,
    categoria: "Helados",
    imagen: "/images/helado.png"
  },
  
  // LOS DE AUTOR
  {
    nombre: "Bartolo",
    descripcion: "Helado de vainilla con trocitos de alfajor de chocolate",
    precio: 3000,
    categoria: "Helados",
    imagen: "/images/helado.png"
  },
  {
    nombre: "Flan Casero",
    descripcion: "Como el de mamá",
    precio: 3000,
    categoria: "Helados",
    imagen: "/images/helado.png"
  },
  {
    nombre: "Ferrero Sanz",
    descripcion: "Crema de avellanas con trozo de bombón ferrero rocher",
    precio: 3000,
    categoria: "Helados",
    imagen: "/images/helado.png"
  },
  {
    nombre: "Mastropiero",
    descripcion: "Coco con dulce de leche repostero",
    precio: 3000,
    categoria: "Helados",
    imagen: "/images/helado.png"
  },
  {
    nombre: "No Te Convidó",
    descripcion: "Crema americana con dulce de leche y crocante",
    precio: 3000,
    categoria: "Helados",
    imagen: "/images/helado.png"
  },
  {
    nombre: "Tío Julio",
    descripcion: "Vainilla con crocante de dulce de leche y trocitos de galletitas",
    precio: 3000,
    categoria: "Helados",
    imagen: "/images/helado.png"
  },
  {
    nombre: "Chocolate Azteca",
    descripcion: "Betún de chocolate",
    precio: 3000,
    categoria: "Helados",
    imagen: "/images/helado.png"
  },
  {
    nombre: "Chocolate Rojo",
    descripcion: "Chocolate baileys y frutos rojos",
    precio: 3000,
    categoria: "Helados",
    imagen: "/images/helado.png"
  },
  {
    nombre: "Chocolate Semi Amargo",
    descripcion: "Con trocitos de chocolate semi amargo",
    precio: 3000,
    categoria: "Helados",
    imagen: "/images/helado.png"
  },
  {
    nombre: "No Sé",
    descripcion: "Chocolate con merengues y dulce de leche",
    precio: 3000,
    categoria: "Helados",
    imagen: "/images/helado.png"
  },
  {
    nombre: "Después Te Digo",
    descripcion: "Dulce de leche con trocito de ferrero rocher",
    precio: 3000,
    categoria: "Helados",
    imagen: "/images/helado.png"
  },
  {
    nombre: "Sopago",
    descripcion: "Dulce de leche con dulce de leche repostero",
    precio: 3000,
    categoria: "Helados",
    imagen: "/images/helado.png"
  },
  {
    nombre: "Filadelfia",
    descripcion: "Mascarpone con frutos del bosque",
    precio: 3000,
    categoria: "Helados",
    imagen: "/images/helado.png"
  },
  {
    nombre: "Lemon Pie",
    descripcion: "Crema de limón con merengues",
    precio: 3000,
    categoria: "Helados",
    imagen: "/images/helado.png"
  },
  {
    nombre: "N/F",
    descripcion: "Crema de naranjas con frutillas",
    precio: 3000,
    categoria: "Helados",
    imagen: "/images/helado.png"
  },
  {
    nombre: "Tondo",
    descripcion: "Crema de americana con frutillas",
    precio: 3000,
    categoria: "Helados",
    imagen: "/images/helado.png"
  },
  {
    nombre: "Oreo",
    descripcion: "Crema tres leches y galletitas oreo",
    precio: 3000,
    categoria: "Helados",
    imagen: "/images/helado.png"
  },
  {
    nombre: "Kinotos al Whisky",
    descripcion: "Con un toque de whisky",
    precio: 3000,
    categoria: "Helados",
    imagen: "/images/helado.png"
  },
  {
    nombre: "Chocotorta",
    descripcion: "Mousse de dulce de leche con chocolinas",
    precio: 3000,
    categoria: "Helados",
    imagen: "/images/helado.png"
  },
  {
    nombre: "Chocolate Kinder",
    descripcion: "Chocolate blanco con trocitos de kínder",
    precio: 3000,
    categoria: "Helados",
    imagen: "/images/helado.png"
  },
  {
    nombre: "Tofi",
    descripcion: "Chocolate con dulce de leche y rhum",
    precio: 3000,
    categoria: "Helados",
    imagen: "/images/helado.png"
  },
  
  // PALETAS
  {
    nombre: "Paleta Premium",
    descripcion: "Chocolate Azteca / Menta / Chocolate / Oreo / Kinder / Coco Delirante / Chocodosis",
    precio: 5300,
    categoria: "Helados",
    imagen: "/images/helado.png"
  },
  {
    nombre: "Paleta de Crema",
    descripcion: "Consultar variedad",
    precio: 4200,
    categoria: "Helados",
    imagen: "/images/helado.png"
  },
  {
    nombre: "Paleta de Agua",
    descripcion: "Consultar variedad",
    precio: 4200,
    categoria: "Helados",
    imagen: "/images/helado.png"
  }
];

async function cargarProductos() {
  const token = 'LUISMARIA2024';
  let exitosos = 0;
  let errores = 0;
  
  console.log('🚀 Iniciando carga de productos de Helados...');
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