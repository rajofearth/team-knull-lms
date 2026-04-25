"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import { useAppSession } from "@/components/auth/session-context";
import { Button } from "@/components/ui/button";
import { GithubLight } from "@/components/ui/svgs/githubLight";
import { Google } from "@/components/ui/svgs/google";

const DEFAULT_CALLBACK_URL = "/courses";

export function LoginScreen() {
  const searchParams = useSearchParams();
  const { signInWithSocial } = useAppSession();
  const [isPending, startTransition] = useTransition();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const callbackURL = searchParams.get("callbackUrl") || DEFAULT_CALLBACK_URL;

  const handleSocialSignIn = (provider: "google" | "github") => {
    setErrorMessage(null);

    startTransition(async () => {
      const error = await signInWithSocial(provider, callbackURL);

      if (error) {
        setErrorMessage(error);
      }
    });
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-canvas p-6">
      <div className="absolute top-[-10%] left-[-10%] h-[40%] w-[40%] rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute right-[-10%] bottom-[-10%] h-[40%] w-[40%] rounded-full bg-primary/5 blur-[120px]" />

      <div className="z-10 w-full max-w-md">
        <div className="mb-10 flex flex-col items-center text-center">
          <Link href="/" className="group mb-8 flex items-center gap-2.5">
            <Image
              src="/teamknull-logo.svg"
              alt="Logo"
              width={240}
              height={240}
            />
          </Link>

          <h1 className="mb-3 text-3xl tracking-tight font-heading font-bold text-ink">
            Welcome
          </h1>
          <p className="font-sans leading-relaxed text-text-secondary">
            Choose your preferred way to continue your learning journey.
          </p>
        </div>

        <div className="rounded-3xl border border-border bg-canvas p-8 shadow-card backdrop-blur-sm">
          <div className="flex flex-col gap-4">
            <Button
              type="button"
              variant="outline"
              size="lg"
              disabled={isPending}
              onClick={() => handleSocialSignIn("google")}
              className="h-14 w-full gap-3 rounded-2xl border-border bg-canvas transition-all hover:border-ink/10 hover:bg-surface"
            >
              <Google className="size-5 text-ink" />
              <span className="font-sans font-bold text-ink">
                Continue with Google
              </span>
            </Button>

            <Button
              type="button"
              variant="outline"
              size="lg"
              disabled={isPending}
              onClick={() => handleSocialSignIn("github")}
              className="h-14 w-full gap-3 rounded-2xl border-border bg-canvas transition-all hover:border-ink/10 hover:bg-surface"
            >
              <GithubLight className="size-5 text-ink" />
              <span className="font-sans font-bold text-ink">
                Continue with GitHub
              </span>
            </Button>
          </div>

          {errorMessage ? (
            <p className="mt-4 rounded-2xl border border-destructive/20 bg-destructive/5 px-4 py-3 text-sm font-sans text-destructive">
              {errorMessage}
            </p>
          ) : null}

          <div className="mt-8 flex flex-col gap-4 border-t border-border pt-8">
            <p className="text-center text-xs leading-relaxed font-sans text-text-muted">
              By continuing, you agree to Team Knull&apos;s{" "}
              <Link href="#" className="font-semibold text-ink hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="#" className="font-semibold text-ink hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
