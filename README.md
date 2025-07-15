# Luis María y Cía. 🍰☕

Sitio web para el negocio de comida "Luis María y Cía." construido con Next.js 14, TypeScript, Tailwind CSS y MongoDB Atlas.

## Instalación

1. Clona el repositorio y entra a la carpeta:
   ```bash
   git clone <repo-url>
   cd luis-maria-cia
   ```
2. Instala dependencias:
   ```bash
   npm install
   ```
3. Crea el archivo `.env.local` con las siguientes variables:
   ```bash
   # MongoDB
   MONGODB_URI=your-mongodb-connection-string
   
   # NextAuth Configuration
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret-key-here-change-this-in-production
   
   # Google OAuth (Obtener desde Google Cloud Console)
   GOOGLE_CLIENT_ID=your-google-client-id-here
   GOOGLE_CLIENT_SECRET=your-google-client-secret-here
   
   # Admin Token (mantener para compatibilidad)
   ADMIN_TOKEN=LUISMARIA2024
   ```
4. Configura Google OAuth:
   - Ve a [Google Cloud Console](https://console.cloud.google.com/)
   - Crea un nuevo proyecto o selecciona uno existente
   - Habilita la API de Google+ 
   - Crea credenciales OAuth 2.0
   - Agrega `http://localhost:3000/api/auth/callback/google` como URI de redirección
5. Ejecuta el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## Configuración de Google OAuth

1. Ve a [Google Cloud Console](https://console.cloud.google.com/)
2. Crea un nuevo proyecto o selecciona uno existente
3. Habilita la API de Google+ 
4. Ve a "Credenciales" y crea credenciales OAuth 2.0
5. Configura las URIs de redirección autorizadas:
   - `http://localhost:3000/api/auth/callback/google` (desarrollo)
   - `https://tu-dominio.vercel.app/api/auth/callback/google` (producción)
6. Copia el Client ID y Client Secret a tu archivo `.env.local`

## Despliegue en Vercel

1. Sube el proyecto a un repositorio de GitHub.
2. Ve a [Vercel](https://vercel.com/) y crea un nuevo proyecto importando tu repo.
3. Configura las variables de entorno en Vercel:
   - `MONGODB_URI`
   - `NEXTAUTH_URL` (URL de tu sitio en producción)
   - `NEXTAUTH_SECRET` (clave secreta para NextAuth)
   - `GOOGLE_CLIENT_ID`
   - `GOOGLE_CLIENT_SECRET`
   - `ADMIN_TOKEN`
4. ¡Listo! Vercel se encarga del build y deploy automático.

## Panel de Administración

- **URL**: `/admin`
- **Acceso**: Solo para `maximot0904@gmail.com`
- **Autenticación**: Google OAuth
- **Funcionalidades**: Gestión completa de productos

## Recursos
- Coloca tu logo en `public/logo.png`.
- Coloca imágenes de productos en `public/images/` (ej: `cafe.jpg`, `torta.jpg`, etc).

---

Hecho con ❤️ usando Next.js, Tailwind, MongoDB y NextAuth. 