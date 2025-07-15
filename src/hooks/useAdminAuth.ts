"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const useAdminAuth = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const isAdmin = session?.user?.email === "maximot0904@gmail.com";
  const isLoading = status === "loading";

  const handleSignIn = () => {
    signIn("google", { callbackUrl: "/admin" });
  };

  const handleSignOut = () => {
    signOut({ callbackUrl: "/admin" });
  };

  return {
    session,
    isAdmin,
    isLoading,
    handleSignIn,
    handleSignOut,
  };
}; 