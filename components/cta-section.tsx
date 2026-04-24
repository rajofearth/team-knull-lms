import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="bg-canvas py-12 md:py-20 px-6 md:px-20">
      <div className="mx-auto max-w-[1280px]">
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden rounded-[32px] bg-surface-dim p-10 md:p-20 border border-border">
          <div className="max-w-[500px] text-center md:text-left z-10">
            <h2 className="text-ink font-heading font-extrabold text-[40px] md:text-[48px] leading-[1.1] m-0 mb-6">
              Ready to start your learning journey?
            </h2>
            <p className="text-lg leading-relaxed text-text-description font-heading m-0 mb-10">
              Join thousands of learners and unlock your potential with our premium certified courses.
            </p>
            <Button
              className="h-auto rounded-xl px-8 py-4 text-base font-heading font-bold bg-ink-deep text-canvas hover:opacity-95 shadow-lg shadow-ink/10 transition-all hover:-translate-y-0.5"
            >
              Get Started Now
              <ArrowRight className="ml-2 size-5" strokeWidth={2.5} />
            </Button>
          </div>
          
          <div className="relative w-full max-w-[400px] aspect-square md:absolute md:right-10 md:bottom-[-20px] shrink-0 pointer-events-none opacity-50 md:opacity-100">
             <Image
              src="https://app.paper.design/file-assets/01KPZWMJ3H4NEREG0PQ8WG2GWM/85F1C366G7D02ZX8T4T6X7YR0X.png"
              alt="Start your learning journey"
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
