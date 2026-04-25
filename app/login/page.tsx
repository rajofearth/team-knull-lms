"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GithubLight } from "@/components/ui/svgs/githubLight";
import { Google } from "@/components/ui/svgs/google";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-canvas flex items-center justify-center p-6 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />

      <div className="w-full max-w-md z-10">
        <div className="flex flex-col items-center text-center mb-10">
          <Link href="/" className="flex items-center gap-2.5 mb-8 group">
            <Image
              src="/teamknull-logo.svg"
              alt="Logo"
              width={240}
              height={240}
            />
          </Link>

          <h1 className="text-3xl font-heading font-bold text-ink tracking-tight mb-3">
            Welcome
          </h1>
          <p className="text-text-secondary font-sans leading-relaxed">
            Choose your preferred way to continue your learning journey.
          </p>
        </div>

        <div className="bg-canvas border border-border p-8 rounded-3xl shadow-card backdrop-blur-sm">
          <div className="flex flex-col gap-4">
            <Button
              variant="outline"
              size="lg"
              className="h-14 w-full rounded-2xl border-border bg-canvas hover:bg-surface hover:border-ink/10 transition-all gap-3"
            >
              <Google className="size-5 text-ink" />
              <span className="font-sans font-bold text-ink">
                Continue with Google
              </span>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="h-14 w-full rounded-2xl border-border bg-canvas hover:bg-surface hover:border-ink/10 transition-all gap-3"
            >
              <GithubLight className="size-5 text-ink" />
              <span className="font-sans font-bold text-ink">
                Continue with GitHub
              </span>
            </Button>
          </div>

          <div className="mt-8 pt-8 border-t border-border flex flex-col gap-4">
            <p className="text-xs text-center text-text-muted font-sans leading-relaxed">
              By continuing, you agree to Team Knull's{" "}
              <Link href="#" className="text-ink font-semibold hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="#" className="text-ink font-semibold hover:underline">
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
