import { ArrowRight, Award, CheckCircle2, Play } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="bg-canvas antialiased py-12 md:py-20 overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex flex-col max-w-[500px] gap-6">
          <div className="tracking-[1px] uppercase inline-block text-text-muted font-heading font-semibold text-sm">
            Team Knull&apos;s LMS
          </div>
          <h1 className="text-5xl md:text-7xl leading-tight text-ink font-heading font-extrabold whitespace-pre-wrap m-0">
            Learn. Grow.
            <br />
            Get Certified.
          </h1>
          <p className="text-lg leading-relaxed text-text-description font-heading">
            Explore premium courses, learn at your own pace, and earn
            certificates to showcase your skills.
          </p>
          <div className="flex flex-wrap gap-4 mt-2">
            <Button className="h-auto rounded-lg py-4 px-8 gap-2 bg-ink-deep text-canvas hover:opacity-90 font-heading font-semibold text-base transition-all active:scale-95">
              Explore Courses
              <ArrowRight className="size-5" strokeWidth={2} />
            </Button>
            <Button
              variant="outline"
              className="h-auto rounded-lg py-4 px-8 gap-2 bg-canvas border-border text-ink hover:bg-surface font-heading font-semibold text-base transition-all active:scale-95"
            >
              How It Works
              <Play className="size-5 fill-ink" strokeWidth={2} />
            </Button>
          </div>
        </div>

        {/* Right Graphics */}
        <div className="hidden lg:flex relative w-[680px] h-[500px] shrink-0">
          {/* My Learning Card */}
          <div className="absolute left-0 top-0 w-[400px] flex flex-col rounded-[20px] gap-5 bg-canvas border border-border shadow-card p-6 z-10">
            <div className="flex justify-between items-center">
              <div className="inline-block text-ink font-heading font-bold text-base">
                My Learning
              </div>
            </div>
            <div className="flex gap-5">
              <div className="grow shrink basis-[0%] flex flex-col gap-3">
                <div className="w-fit inline-block rounded-sm py-1 px-2 bg-surface">
                  <div className="inline-block text-ink-deep font-heading font-bold text-[10px]">
                    In-Progress
                  </div>
                </div>
                <div className="text-lg leading-snug text-ink font-heading font-bold whitespace-pre-wrap m-0">
                  UI/UX Design
                  <br />
                  Fundamentals
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between">
                    <div className="inline-block text-text-muted font-heading text-[10px]">
                      65% Complete
                    </div>
                  </div>
                  <div className="w-full h-1.5 relative rounded-full bg-surface-dim shrink-0 overflow-hidden">
                    <div className="absolute left-0 top-0 h-full w-[65%] rounded-full bg-ink-deep" />
                  </div>
                </div>
                <Button
                  size="sm"
                  className="w-fit rounded-md py-2 px-4 bg-ink-deep text-canvas hover:opacity-90 font-heading font-semibold text-xs"
                >
                  Continue Learning
                </Button>
              </div>
              <div className="w-[140px] h-[140px] relative flex items-center justify-center rounded-xl overflow-clip bg-surface-dim shrink-0">
                <Image
                  src="/hero_chair.png"
                  alt="UI/UX Design Fundamentals"
                  fill
                  sizes="140px"
                  className="object-cover opacity-80"
                />
                <div className="absolute flex items-center justify-center rounded-full bg-canvas shadow-subtle size-10">
                  <Play className="size-5 fill-ink" strokeWidth={2} />
                </div>
              </div>
            </div>
            <div className="flex flex-col pt-3 gap-3 border-t border-border">
              {[
                { id: "01", title: "Introduction to UI/UX", done: true },
                { id: "02", title: "Design Principles", done: true },
                {
                  id: "03",
                  title: "Wireframing Basics",
                  done: false,
                  active: true,
                },
              ].map((lesson) => (
                <div
                  key={lesson.id}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-4 inline-block text-text-muted font-heading shrink-0 text-xs">
                      {lesson.id}
                    </div>
                    <div
                      className={`inline-block text-ink font-heading text-xs ${lesson.active ? "font-semibold" : ""}`}
                    >
                      {lesson.title}
                    </div>
                  </div>
                  {lesson.done ? (
                    <CheckCircle2
                      className="size-4 text-success"
                      strokeWidth={3}
                    />
                  ) : (
                    <div className="rounded-full border-2 border-border shrink-0 size-3.5" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* My Progress Card */}
          <div className="absolute left-[440px] top-0 w-[240px] flex flex-col rounded-[20px] gap-4 bg-canvas border border-border shadow-subtle p-6">
            <div className="inline-block text-ink font-heading font-bold text-sm">
              My Progress
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-24 h-24 flex items-center justify-center relative rounded-full border-10 border-surface-dim shrink-0">
                <div className="flex flex-col items-center">
                  <div className="inline-block text-ink font-heading font-extrabold text-2xl">
                    12
                  </div>
                  <div className="text-center inline-block text-text-muted font-heading text-[8px]">
                    Courses Enrolled
                  </div>
                </div>
                <div className="absolute top-[-10px] left-[-10px] right-[-10px] bottom-[-10px] rounded-full border-10 border-ink-deep border-b-transparent border-r-transparent -rotate-45" />
              </div>
              <div className="w-full flex flex-col gap-2">
                {[
                  { label: "Completed", val: 5 },
                  { label: "In Progress", val: 7 },
                  { label: "Certificates", val: 3 },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex justify-between items-center"
                  >
                    <div className="inline-block text-text-muted font-heading text-[10px]">
                      {stat.label}
                    </div>
                    <div className="inline-block text-ink font-heading font-bold text-[10px]">
                      {stat.val}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Latest Certificate Card */}
          <div className="absolute left-[440px] top-[290px] w-[240px] flex flex-col rounded-[20px] gap-4 bg-canvas border border-border shadow-subtle p-6">
            <div className="inline-block text-ink font-heading font-bold text-sm">
              Latest Certificate
            </div>
            <div className="flex items-center gap-4">
              <div className="grow shrink basis-[0%] flex flex-col gap-2">
                <div className="text-xs leading-tight inline-block text-ink font-heading font-bold whitespace-pre-wrap">
                  UI/UX Design
                  <br />
                  Fundamentals
                </div>
                <div className="flex items-center gap-1 group cursor-pointer">
                  <div className="inline-block text-text-muted font-heading font-semibold text-[10px] group-hover:text-ink transition-colors">
                    View Certificate
                  </div>
                  <ArrowRight
                    className="size-3 text-text-muted group-hover:text-ink transition-colors"
                    strokeWidth={2.5}
                  />
                </div>
              </div>
              <div className="w-[60px] h-[80px] flex items-center justify-center rounded-lg bg-ink-deep shrink-0 shadow-float">
                <Award className="size-8 text-canvas" strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
