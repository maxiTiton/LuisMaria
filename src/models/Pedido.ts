import mongoose, { Schema, models } from 'mongoose';

const PedidoSchema = new Schema({
  productos: [
    {
      id: String,
      nombre: String,
      cantidad: Number,
      precio: Number,
      categoria: String,
      imagen: String,
    }
  ],
  total: { type: Number, required: true },
  estadoPago: { type: String, enum: ['aprobado', 'pendiente', 'rechazado'], required: true },
  fecha: { type: Date, default: Date.now },
  comprador: {
    nombre: String,
    email: String,
    telefono: String,
  },
  idPagoMP: { type: String, required: true },
});

export default models.Pedido || mongoose.model('Pedido', PedidoSchema); 