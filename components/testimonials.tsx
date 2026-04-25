"use client";

import { Quote, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const testimonials = [
  [
    {
      id: "t1",
      quote:
        "Team Knull's LMS helped me go from beginner to freelance developer. The courses are practical and well-structured.",
      name: "Rohit Sharma",
      role: "Freelance Developer",
      image:
        "https://app.paper.design/file-assets/01KPZWMJ3H4NEREG0PQ8WG2GWM/5GTC3F374F4BEQGPRE362DETJ5.jpg",
      stars: 5,
    },
    {
      id: "t2",
      quote:
        "The UI/UX Design course was a game changer for my career. The certificate helped me land a great job!",
      name: "Ananya Verma",
      role: "UI/UX Designer",
      image:
        "https://app.paper.design/file-assets/01KPZWMJ3H4NEREG0PQ8WG2GWM/60HFB93Q7QA9YWHMTYQ521ZPQ5.jpg",
      stars: 5,
    },
    {
      id: "t3",
      quote:
        "I love how I can learn at my own pace and revisit lessons anytime. Highly recommend Team Knull!",
      name: "Karan Mehta",
      role: "Digital Marketer",
      image:
        "https://app.paper.design/file-assets/01KPZWMJ3H4NEREG0PQ8WG2GWM/2H99XH9HBYZWC3JMJ33G6YC1W0.jpg",
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
      image:
        "https://app.paper.design/file-assets/01KPZWMJ3H4NEREG0PQ8WG2GWM/5GTC3F374F4BEQGPRE362DETJ5.jpg",
      stars: 5,
    },
    {
      id: "t5",
      quote:
        "Earned my certificate in just 3 weeks. The structured curriculum made all the difference.",
      name: "Amit Patel",
      role: "Software Engineer",
      image:
        "https://app.paper.design/file-assets/01KPZWMJ3H4NEREG0PQ8WG2GWM/60HFB93Q7QA9YWHMTYQ521ZPQ5.jpg",
      stars: 5,
    },
    {
      id: "t6",
      quote:
        "Excellent platform with a clean interface. My team has been using it for internal training.",
      name: "Neha Gupta",
      role: "HR Manager",
      image:
        "https://app.paper.design/file-assets/01KPZWMJ3H4NEREG0PQ8WG2GWM/2H99XH9HBYZWC3JMJ33G6YC1W0.jpg",
      stars: 5,
    },
  ],
];

export function Testimonials() {
  const [page, setPage] = useState(0);
  const current = testimonials[page];

  return (
    <section className="bg-canvas py-12 md:py-20 px-6 md:px-20 border-t border-border">
      <div className="mx-auto max-w-[1280px]">
        <h2 className="text-center text-ink font-heading font-bold text-3xl leading-tight mb-12">
          What Our Learners Say
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {current.map((t) => (
            <div
              key={t.id}
              className="flex flex-col rounded-[20px] gap-6 bg-canvas border border-border p-8 shadow-subtle hover:shadow-card transition-shadow"
            >
              <Quote
                size={32}
                className="text-text-muted opacity-10 shrink-0"
                fill="currentColor"
              />
              <p className="text-sm leading-relaxed text-text-description font-heading m-0">
                &quot;{t.quote}&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="size-12 rounded-full overflow-hidden bg-surface-dim shrink-0">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="object-cover size-full"
                  />
                </div>
                <div>
                  <h4 className="text-ink font-heading font-bold text-sm m-0 leading-tight">
                    {t.name}
                  </h4>
                  <p className="mt-0.5 text-text-muted font-heading text-xs m-0">
                    {t.role}
                  </p>
                </div>
              </div>
              <div className="flex gap-1 mt-auto">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`size-2 rounded-full transition-all duration-300 ${
                i === page ? "bg-ink w-6" : "bg-border hover:bg-text-muted"
              }`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
