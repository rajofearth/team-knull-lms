import { ArrowRight, Rocket } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FooterCta() {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-8 md:p-10 rounded-2xl bg-[#EEF2FF] w-full">
      <div className="flex items-center gap-6">
        <div className="flex items-center justify-center shrink-0">
          <Rocket className="size-10 text-blue-500" />
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-heading font-bold text-foreground m-0">
            Keep going, Rohit! 🚀
          </h2>
          <p className="text-sm text-muted-foreground m-0">
            You&apos;re making great progress. Stay consistent and achieve your
            learning goals.
          </p>
        </div>
      </div>
      <Button
        asChild
        className="shrink-0 rounded-xl px-6 py-5 bg-foreground text-background hover:bg-foreground/90 font-semibold text-sm"
      >
        <Link href="/courses" className="flex items-center gap-2">
          Explore Courses
          <ArrowRight className="size-4" />
        </Link>
      </Button>
    </div>
  );
}
