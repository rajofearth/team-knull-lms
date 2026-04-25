"use client";

import { createContext, type ReactNode, useContext, useMemo } from "react";
import { authClient } from "@/lib/auth-client";

type SessionData = Awaited<ReturnType<typeof authClient.getSession>>["data"];

type AppSessionContextValue = {
  isPending: boolean;
  isAuthenticated: boolean;
  session: SessionData | null;
  user: SessionData["user"] | null;
  signOut: (callbackURL?: string) => Promise<void>;
  signInWithSocial: (
    provider: "google" | "github",
    callbackURL: string,
  ) => Promise<string | null>;
};

const AppSessionContext = createContext<AppSessionContextValue | null>(null);

export function AppSessionProvider({ children }: { children: ReactNode }) {
  const { data: session, isPending } = authClient.useSession();

  const value = useMemo<AppSessionContextValue>(
    () => ({
      isPending,
      isAuthenticated: Boolean(session?.session),
      session: session ?? null,
      user: session?.user ?? null,
      signOut: async (callbackURL = "/login") => {
        await authClient.signOut({
          fetchOptions: {
            onSuccess: () => {
              window.location.href = callbackURL;
            },
          },
        });
      },
      signInWithSocial: async (provider, callbackURL) => {
        const result = await authClient.signIn.social({
          provider,
          callbackURL,
          errorCallbackURL: `/login?callbackUrl=${encodeURIComponent(callbackURL)}`,
        });

        return result.error?.message ?? null;
      },
    }),
    [isPending, session],
  );

  return (
    <AppSessionContext.Provider value={value}>
      {children}
    </AppSessionContext.Provider>
  );
}

export function useAppSession() {
  const value = useContext(AppSessionContext);

  if (!value) {
    throw new Error("useAppSession must be used inside AppSessionProvider");
  }

  return value;
}
