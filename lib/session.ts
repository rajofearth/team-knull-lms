import { redirect } from "next/navigation";
import { cache } from "react";
import { isAuthenticated } from "@/lib/auth-server";

const DEFAULT_PROTECTED_REDIRECT = "/courses";

export const getAuthState = cache(async () => {
  const authenticated = await isAuthenticated();

  return {
    isAuthenticated: authenticated,
  };
});

export async function requireAuth(callbackUrl = DEFAULT_PROTECTED_REDIRECT) {
  const { isAuthenticated: authenticated } = await getAuthState();

  if (!authenticated) {
    redirect(`/login?callbackUrl=${encodeURIComponent(callbackUrl)}`);
  }
}

export async function redirectIfAuthenticated(
  destination = DEFAULT_PROTECTED_REDIRECT,
) {
  const { isAuthenticated: authenticated } = await getAuthState();

  if (authenticated) {
    redirect(destination);
  }
}
