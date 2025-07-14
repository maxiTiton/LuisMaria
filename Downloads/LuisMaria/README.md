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
3. Copia el archivo de entorno y configura tu URI de MongoDB Atlas:
   ```bash
   cp .env.local.example .env.local
   # Edita .env.local con tus datos
   ```
4. Ejecuta el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## Despliegue en Vercel

1. Sube el proyecto a un repositorio de GitHub.
2. Ve a [Vercel](https://vercel.com/) y crea un nuevo proyecto importando tu repo.
3. Configura las variables de entorno (`MONGODB_URI`, `ADMIN_TOKEN`) en Vercel.
4. ¡Listo! Vercel se encarga del build y deploy automático.

## Recursos
- Coloca tu logo en `public/logo.png`.
- Coloca imágenes de productos en `public/images/` (ej: `cafe.jpg`, `torta.jpg`, etc).

---

Hecho con ❤️ usando Next.js, Tailwind y MongoDB. 