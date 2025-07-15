import mongoose from 'mongoose';

export async function connectDB() {
  if (mongoose.connection.readyState >= 1) return;
  return mongoose.connect(process.env.MONGODB_URI!);

  // depurar
  //console.log("MONGODB_URI desde .env.local:", process.env.MONGODB_URI);
  //console.log(process.cwd())
  //console.log("Dónde se ejecuta db.ts:", typeof window === 'undefined' ? 'servidor' : 'cliente');

    
  // Usar la URI directamente para debugging
  //const mongoUri = process.env.MONGODB_URI || 'mongodb+srv://maximot0904:U5BVaLHyY94gLVR0@cluster0.fybmjwb.mongodb.net/miNegocioDB?retryWrites=true&w=majority&appName=Cluster0';
  
  //return mongoose.connect(mongoUri);
} 
