"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";

const testimonials = [
  [
    {
      id: "t1",
      quote:
        "Team Knull's LMS helped me go from beginner to freelance developer. The courses are practical and well-structured.",
      name: "Rohit Sharma",
      role: "Freelance Developer",
      initials: "RS",
      stars: 5,
    },
    {
      id: "t2",
      quote:
        "The UI/UX Design course was a game changer for my career. The certificate helped me land a great job!",
      name: "Ananya Verma",
      role: "UI/UX Designer",
      initials: "AV",
      stars: 5,
    },
    {
      id: "t3",
      quote:
        "I love how I can learn at my own pace and revisit lessons anytime. Highly recommend Team Knull!",
      name: "Karan Mehta",
      role: "Digital Marketer",
      initials: "KM",
      stars: 5,
    },
  ],
  [
    {
      id: "t4",
      quote:
        "The instructors are top-notch and the content is always up to date. Best LMS platform I've used.",
      name: "Priya Singh",
      role: "Product Manager",
      initials: "PS",
      stars: 5,
    },
    {
      id: "t5",
      quote:
        "Earned my certificate in just 3 weeks. The structured curriculum made all the difference.",
      name: "Amit Patel",
      role: "Software Engineer",
      initials: "AP",
      stars: 5,
    },
    {
      id: "t6",
      quote:
        "Excellent platform with a clean interface. My team has been using it for internal training.",
      name: "Neha Gupta",
      role: "HR Manager",
      initials: "NG",
      stars: 5,
    },
  ],
];

export function Testimonials() {
  const [page, setPage] = useState(0);
  const current = testimonials[page];

  return (
    <section className="border-t border-border bg-background py-[72px]">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="mb-12 text-center text-2xl font-bold text-foreground">
          What Our Learners Say
        </h2>

        {/* Cards */}
        <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {current.map((t) => (
            <Card
              key={t.id}
              className="rounded-2xl border-border p-6 shadow-subtle"
            >
              {/* Quote mark */}
              <div className="mb-3 font-serif text-[32px] leading-none text-border">
                &ldquo;&ldquo;
              </div>
              <p className="mb-5 text-sm leading-[1.65] text-muted-foreground">
                {t.quote}
              </p>
              {/* Avatar & name */}
              <div className="mb-2.5 flex items-center gap-2.5">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border bg-secondary text-[11px] font-bold text-foreground">
                  {t.initials}
                </div>
                <div>
                  <p className="text-[13px] font-bold text-foreground">
                    {t.name}
                  </p>
                  <p className="text-[11px] text-muted-foreground">{t.role}</p>
                </div>
              </div>
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-3 fill-amber-500 text-amber-500"
                    strokeWidth={0}
                  />
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2">
          <button
            aria-label="Previous"
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            className="flex cursor-pointer items-center disabled:cursor-not-allowed disabled:opacity-30"
            disabled={page === 0}
          >
            <ChevronLeft className="size-4 text-foreground" />
          </button>
          {testimonials.map((_, i) => (
            <button
              key={i}
              aria-label={`Page ${i + 1}`}
              onClick={() => setPage(i)}
              className={`h-2 cursor-pointer rounded-full p-0 transition-all duration-200 ${
                i === page ? "w-5 bg-foreground" : "w-2 bg-gray-300"
              }`}
            />
          ))}
          <button
            aria-label="Next"
            onClick={() =>
              setPage((p) => Math.min(testimonials.length - 1, p + 1))
            }
            className="flex cursor-pointer items-center disabled:cursor-not-allowed disabled:opacity-30"
            disabled={page === testimonials.length - 1}
          >
            <ChevronRight className="size-4 text-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
}
