import mongoose, { Schema, models } from 'mongoose';

const ProductoSchema = new Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String },
  imagen: { type: String },
  precio: { type: Number, required: true },
  categoria: { type: String },
});

export default models.Producto || mongoose.model('Producto', ProductoSchema); 