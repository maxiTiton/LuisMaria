import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      // Solo permitir acceso a maximot0904@gmail.com
      if (user.email === "maximot0904@gmail.com") {
        return true;
      }
      return false; // Denegar acceso a otros usuarios
    },
    async session({ session, token }) {
      // Agregar información adicional a la sesión si es necesario
      return session;
    },
  },
  pages: {
    signIn: "/admin", // Redirigir al panel de admin para el login
    error: "/admin", // Mostrar errores en el panel de admin
  },
}; 