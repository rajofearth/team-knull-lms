import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="pb-16">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="relative flex items-center justify-center overflow-hidden rounded-2xl bg-secondary px-8 py-10 md:px-16 md:py-14">
          <div className="text-center">
            <h2 className="mb-3 text-[32px] font-extrabold leading-[1.2] tracking-tight text-foreground">
              Ready to start your learning journey?
            </h2>
            <p className="mb-7 text-[15px] leading-[1.6] text-muted-foreground">
              Join thousands of learners and unlock your potential.
            </p>
            <Button
              id="cta-explore-btn"
              className="h-auto rounded-md px-6 py-3 text-sm font-semibold"
            >
              Explore Courses
              <ArrowRight className="ml-2 size-4" strokeWidth={2} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
