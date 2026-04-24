import Image from "next/image";
import { Play, CheckCircle2, Circle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section className="bg-background pt-8 pb-8">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-5 px-6 lg:grid-cols-[1.55fr_1.85fr]">
        {/* Left: Hero Text */}
        <div className="pr-3 pt-4">
          <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
            TEAM KNULL&apos;S LMS
          </p>
          <h1 className="mb-4 text-[64px] font-extrabold leading-[1.06] tracking-tight text-foreground xl:text-[66px]">
            Learn.
            <br />
            Grow.
            <br />
            Get Certified.
          </h1>
          <p className="mb-7 max-w-[360px] text-[15px] leading-[1.65] text-muted-foreground">
            Explore premium courses, learn at your own pace, and earn
            certificates to showcase your skills.
          </p>
          <div className="flex items-center gap-4">
            <Button
              id="hero-explore-btn"
              className="h-auto rounded-md px-5 py-3 text-[14px] font-semibold"
            >
              Explore Courses
              <ArrowRight className="ml-2 size-4" strokeWidth={2} />
            </Button>
            <Button
              id="hero-how-btn"
              variant="ghost"
              className="h-auto border border-border px-6 py-3 text-[14px] font-medium text-foreground hover:bg-secondary/70"
            >
              How It Works
              <span className="ml-2 flex size-5 items-center justify-center rounded-full border border-border">
                <Play className="size-[8px] fill-foreground text-foreground" />
              </span>
            </Button>
          </div>
        </div>

        {/* Invisible grouped container: Learning + Right Cards */}
        <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-[314px_267px]">
          {/* Center: My Learning Card */}
          <Card className="rounded-xl border-border p-4 shadow-none">
            <p className="mb-3.5 text-[13px] font-semibold text-foreground">
              My Learning
            </p>

            {/* Active Course */}
            <div className="mb-3.5 rounded-md bg-secondary/80 p-3">
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
                <div className="relative size-[140px] shrink-0 overflow-hidden rounded-sm bg-border">
                  <Image
                    src="/hero_chair.png"
                    alt="UI/UX Design Fundamentals"
                    fill
                    sizes="140px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/25">
                    <div className="flex size-10 items-center justify-center rounded-full bg-white/90">
                      <Play className="size-3 fill-foreground text-foreground" />
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
          <div className="flex h-full flex-col gap-3">
          {/* My Progress Card */}
          <Card className="flex-1 rounded-xl border-border p-4 shadow-none">
            <p className="mb-3.5 text-[13px] font-semibold text-foreground">
              My Progress
            </p>
            <div className="flex items-center gap-4">
              {/* Circular progress */}
              <div className="relative shrink-0">
                <svg width="86" height="86" viewBox="0 0 86 86">
                  <circle
                    cx="43"
                    cy="43"
                    r="34"
                    fill="none"
                    className="stroke-border"
                    strokeWidth="5"
                  />
                  <circle
                    cx="43"
                    cy="43"
                    r="34"
                    fill="none"
                    className="stroke-foreground"
                    strokeWidth="5"
                    strokeDasharray="214"
                    strokeDashoffset="70"
                    strokeLinecap="round"
                    transform="rotate(-90 43 43)"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-[22px] font-extrabold leading-none text-foreground">
                    12
                  </span>
                  <span className="max-w-[56px] px-1 text-center text-[6px] font-medium leading-tight text-muted-foreground">
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
                  <div key={s.label} className="flex items-center justify-between">
                    <span className="text-[11px] text-muted-foreground">
                      {s.label}
                    </span>
                    <span className="text-[12px] font-bold text-foreground">
                      {s.val}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Latest Certificate */}
          <Card className="flex-1 rounded-xl border-border p-4 shadow-none">
            <p className="mb-3 text-center text-[11px] font-semibold uppercase tracking-[0.06em] text-muted-foreground">
              Latest Certificate
            </p>
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1 text-center">
                <p className="mb-3 text-[13px] font-bold leading-[1.35] text-foreground">
                  UI/UX Design
                  <br />
                  Fundamentals
                </p>
                <a
                  href="/courses/uiux-design?enrolled=true"
                  className="mt-1.5 inline-flex items-center gap-1 text-xs font-semibold text-foreground hover:opacity-80"
                >
                  View Certificate
                  <ArrowRight className="size-4" strokeWidth={2.5} />
                </a>
              </div>
              {/* Certificate Badge */}
              <div className="flex h-[92px] w-[92px] shrink-0 items-center justify-center rounded-xl bg-foreground text-background">
                <svg
                  width="30"
                  height="30"
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
      </div>
    </section>
  );
}
