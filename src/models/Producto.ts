import mongoose, { Schema, models } from 'mongoose';

const categoriasValidas = [
  'Desayunos / Meriendas / Brunchs',
  'Pastelería',
  'Almuerzos / Cenas',
  'Helados',
  'Opciones Antiinflamatorias',
  'Bebidas/Tragos',
];

const ProductoSchema = new Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String },
  imagen: { type: String },
  precio: { type: Number, required: true, min: 0 },
  categoria: { type: String, enum: categoriasValidas, required: true },
  habilitado: { type: Boolean, default: true },
});

export default models.Producto || mongoose.model('Producto', ProductoSchema); 