import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="pb-16 bg-canvas">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="relative flex flex-col-reverse items-center justify-between gap-10 overflow-hidden rounded-2xl bg-surface px-8 py-10 md:flex-row md:px-16 md:py-14 border border-border-subtle">
          <div className="text-center md:text-left">
            <h2 className="mb-3 text-[32px] font-extrabold leading-[1.2] tracking-tight text-ink">
              Ready to start your learning journey?
            </h2>
            <p className="mb-7 text-[15px] leading-[1.6] text-text-secondary">
              Join thousands of learners and unlock your potential.
            </p>
            <Button
              id="cta-explore-btn"
              className="h-auto rounded-md px-6 py-3 text-sm font-semibold bg-ink-deep text-canvas hover:opacity-90"
            >
              Explore Courses
              <ArrowRight className="ml-2 size-4" strokeWidth={2} />
            </Button>
          </div>
          <div className="relative h-[200px] w-[220px] shrink-0">
            <Image
              src="/cta_plant.png"
              alt="Start your learning journey"
              fill
              sizes="220px"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
