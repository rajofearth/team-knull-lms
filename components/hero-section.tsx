import Image from "next/image";
import { Play, CheckCircle2, Circle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section className="bg-background pt-16 pb-[72px]">
      <div className="mx-auto max-w-[1200px] px-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {/* Left: Hero Text */}
        <div className="pr-4">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
            TEAM KNULL&apos;S LMS
          </p>
          <h1 className="mb-5 text-[64px] font-extrabold leading-[1.05] tracking-tight text-foreground">
            Learn.
            <br />
            Grow.
            <br />
            Get Certified.
          </h1>
          <p className="mb-8 max-w-[280px] text-[15px] leading-[1.65] text-muted-foreground">
            Explore premium courses, learn at your own pace, and earn
            certificates to showcase your skills.
          </p>
          <div className="flex items-center gap-4">
            <Button
              id="hero-explore-btn"
              className="h-auto rounded-md px-5 py-3 text-sm font-semibold"
            >
              Explore Courses
              <ArrowRight className="ml-2 size-4" strokeWidth={2} />
            </Button>
            <Button
              id="hero-how-btn"
              variant="ghost"
              className="h-auto px-2 py-2 text-sm font-medium text-foreground hover:bg-transparent hover:opacity-80"
            >
              How It Works
              <span className="ml-2 flex size-7 items-center justify-center rounded-full border-[1.5px] border-border">
                <Play className="size-[10px] fill-foreground text-foreground" />
              </span>
            </Button>
          </div>
        </div>

        {/* Center: My Learning Card */}
        <Card className="rounded-2xl border-border p-5 shadow-subtle">
          <p className="mb-3.5 text-[13px] font-semibold text-foreground">
            My Learning
          </p>

          {/* Active Course */}
          <div className="mb-3.5 rounded-md bg-secondary p-3.5">
            <Badge
              variant="secondary"
              className="mb-2 gap-1.5 rounded-full bg-sky-100 px-2 py-0.5 text-[10px] font-semibold text-sky-700 hover:bg-sky-100"
            >
              <span className="size-1.5 rounded-full bg-sky-700" />
              In Progress
            </Badge>

            <div className="grid grid-cols-[1fr_auto] items-start gap-3">
              <div>
                <p className="mb-2.5 text-sm font-bold leading-[1.3] text-foreground">
                  UI/UX Design
                  <br />
                  Fundamentals
                </p>
                {/* Progress bar */}
                <div className="mb-1.5 h-[3px] overflow-hidden rounded-md bg-border">
                  <div className="h-full w-[65%] rounded-md bg-foreground" />
                </div>
                <p className="mb-2.5 text-[10px] text-muted-foreground">
                  65% Complete
                </p>
                <Button className="h-auto w-full rounded-lg px-3.5 py-2 text-[11px] font-semibold" asChild>
                  <a href="/courses/uiux-design?enrolled=true">Continue Learning</a>
                </Button>
              </div>
              <div className="relative size-20 shrink-0 overflow-hidden rounded-md bg-border">
                <Image
                  src="/hero_chair.png"
                  alt="UI/UX Design Fundamentals"
                  fill
                  sizes="80px"
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/25">
                  <div className="flex size-[26px] items-center justify-center rounded-full bg-white/90">
                    <Play className="size-[10px] fill-foreground text-foreground" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lesson List */}
          <div className="flex flex-col">
            {[
              { num: "01", title: "Introduction to UI/UX", done: true },
              { num: "02", title: "Design Principles", done: true },
              { num: "03", title: "Wireframing Basics", done: false },
            ].map((lesson, i) => (
              <div
                key={i}
                className={`flex items-center justify-between py-2.5 ${
                  i < 2 ? "border-b border-border/60" : ""
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="min-w-[18px] text-[11px] font-medium text-muted-foreground">
                    {lesson.num}
                  </span>
                  <span className="text-xs font-medium text-foreground">
                    {lesson.title}
                  </span>
                </div>
                {lesson.done ? (
                  <CheckCircle2
                    className="size-4 fill-foreground text-background"
                    strokeWidth={2}
                  />
                ) : (
                  <Circle className="size-4 text-muted-foreground" strokeWidth={1.5} />
                )}
              </div>
            ))}
          </div>
        </Card>

        {/* Right: Progress + Certificate */}
        <div className="flex flex-col gap-4">
          {/* My Progress Card */}
          <Card className="rounded-2xl border-border p-5 shadow-subtle">
            <p className="mb-3.5 text-[13px] font-semibold text-foreground">
              My Progress
            </p>
            <div className="flex items-center gap-5">
              {/* Circular progress */}
              <div className="relative shrink-0">
                <svg width="80" height="80" viewBox="0 0 80 80">
                  <circle
                    cx="40"
                    cy="40"
                    r="32"
                    fill="none"
                    className="stroke-border"
                    strokeWidth="6"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="32"
                    fill="none"
                    className="stroke-foreground"
                    strokeWidth="6"
                    strokeDasharray="201"
                    strokeDashoffset="60"
                    strokeLinecap="round"
                    transform="rotate(-90 40 40)"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-[22px] font-extrabold leading-none text-foreground">
                    12
                  </span>
                  <span className="text-[8px] font-medium text-muted-foreground">
                    Courses Enrolled
                  </span>
                </div>
              </div>

              {/* Stats */}
              <div className="flex flex-1 flex-col gap-2">
                {[
                  { label: "Completed", val: 5 },
                  { label: "In Progress", val: 7 },
                  { label: "Certificates", val: 3 },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="flex items-center justify-between"
                  >
                    <span className="text-xs text-muted-foreground">
                      {s.label}
                    </span>
                    <span className="text-[13px] font-bold text-foreground">
                      {s.val}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Latest Certificate */}
          <Card className="rounded-2xl border-border p-5 shadow-subtle">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.06em] text-muted-foreground">
              Latest Certificate
            </p>
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="mb-2 text-[13px] font-bold leading-[1.35] text-foreground">
                  UI/UX Design
                  <br />
                  Fundamentals
                </p>
                <a
                  href="/courses/uiux-design?enrolled=true"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-foreground hover:opacity-80"
                >
                  View Certificate
                  <ArrowRight className="size-3" strokeWidth={2.5} />
                </a>
              </div>
              {/* Certificate Badge */}
              <div className="flex size-[52px] shrink-0 items-center justify-center rounded-md bg-foreground text-background">
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="12" cy="8" r="5" />
                  <path d="M9 13.5L7 21l5-2 5 2-2-7.5" />
                </svg>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
