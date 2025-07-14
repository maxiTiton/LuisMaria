// actualizar-habilitado-todos.js
const API_URL = 'http://localhost:3000/api/productos'; // Cambia esto si tu API está en otro host
const TOKEN = 'LUISMARIA2024';

async function main() {
  // 1. Obtener todos los productos
  const res = await fetch(API_URL);
  const data = await res.json();
  const productos = data.productos;

  for (const prod of productos) {
    // 2. Hacer PUT a cada producto para agregar habilitado: true si no lo tiene
    if (prod.habilitado === undefined) {
      const putRes = await fetch(`${API_URL}/${prod._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'authorization': TOKEN,
        },
        body: JSON.stringify({ ...prod, habilitado: true }),
      });
      const putData = await putRes.json();
      console.log(`Actualizado: ${prod.nombre} -> habilitado: true`, putData);
    }
  }
  console.log('¡Todos los productos ahora tienen el campo habilitado!');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});