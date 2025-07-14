const mongoose = require('mongoose');
const Producto = require('./src/models/Producto').default;

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/tu_basededatos';

async function main() {
  await mongoose.connect(MONGO_URI);
  const res = await Producto.deleteMany({});
  console.log('Productos eliminados:', res.deletedCount);
  await mongoose.disconnect();
}

main().catch(err => {
  console.error(err);
  process.exit(1);
}); 