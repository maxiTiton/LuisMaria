const sharp = require('sharp');
const path = require('path');

async function createCircularFavicon() {
  try {
    const inputPath = path.join(__dirname, 'public', 'logo.png');
    const outputPath = path.join(__dirname, 'public', 'favicon-circular.png');
    
    // Leer las dimensiones de la imagen original
    const metadata = await sharp(inputPath).metadata();
    const size = Math.min(metadata.width, metadata.height);
    
    // Crear una máscara circular
    const circularMask = Buffer.from(
      `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
        <circle cx="${size/2}" cy="${size/2}" r="${size/2}" fill="white"/>
      </svg>`
    );
    
    // Procesar la imagen
    await sharp(inputPath)
      .resize(size, size, { fit: 'cover', position: 'center' })
      .composite([
        {
          input: circularMask,
          blend: 'dest-in'
        }
      ])
      .png()
      .toFile(outputPath);
    
    // Crear diferentes tamaños para favicon
    const sizes = [16, 32, 180];
    
    for (const targetSize of sizes) {
      const sizedOutputPath = path.join(__dirname, 'public', `favicon-${targetSize}x${targetSize}.png`);
      
      await sharp(outputPath)
        .resize(targetSize, targetSize)
        .png()
        .toFile(sizedOutputPath);
      
      console.log(`✅ Creado favicon circular de ${targetSize}x${targetSize}px`);
    }
    
    console.log('🎉 ¡Favicons circulares creados exitosamente!');
    console.log('📁 Archivos generados:');
    console.log('   - favicon-circular.png (original circular)');
    console.log('   - favicon-16x16.png');
    console.log('   - favicon-32x32.png');
    console.log('   - favicon-180x180.png');
    
  } catch (error) {
    console.error('❌ Error creando favicons circulares:', error.message);
    
    if (error.message.includes('Input file is missing')) {
      console.log('💡 Asegúrate de que el archivo logo.png existe en la carpeta public/');
    } else if (error.message.includes('sharp')) {
      console.log('💡 Instala Sharp con: npm install sharp');
    }
  }
}

createCircularFavicon();
