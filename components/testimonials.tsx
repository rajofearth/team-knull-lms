"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

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
    <section
      style={{
        padding: "72px 0",
        borderTop: "1px solid #e5e5e5",
        backgroundColor: "#ffffff",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <h2
          style={{
            fontSize: 24,
            fontWeight: 700,
            color: "#0a0a0a",
            textAlign: "center",
            marginBottom: 48,
          }}
        >
          What Our Learners Say
        </h2>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
            marginBottom: 40,
          }}
        >
          {current.map((t) => (
            <div
              key={t.id}
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e5e5e5",
                borderRadius: 16,
                padding: 24,
                boxShadow: "0px 2px 8px rgba(0,0,0,0.04)",
              }}
            >
              {/* Quote mark */}
              <div
                style={{
                  fontSize: 32,
                  lineHeight: 1,
                  color: "#e5e5e5",
                  fontFamily: "Georgia, serif",
                  marginBottom: 12,
                }}
              >
                &ldquo;&ldquo;
              </div>
              <p
                style={{
                  fontSize: 14,
                  color: "#374151",
                  lineHeight: 1.65,
                  marginBottom: 20,
                }}
              >
                {t.quote}
              </p>
              {/* Avatar & name */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 10,
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    backgroundColor: "#f5f5f5",
                    border: "1px solid #e5e5e5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#0a0a0a",
                    flexShrink: 0,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <p
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#0a0a0a",
                    }}
                  >
                    {t.name}
                  </p>
                  <p style={{ fontSize: 11, color: "#6b7280" }}>{t.role}</p>
                </div>
              </div>
              {/* Stars */}
              <div style={{ display: "flex", gap: 2 }}>
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    fill="#f59e0b"
                    color="#f59e0b"
                    strokeWidth={0}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 8,
          }}
        >
          <button
            aria-label="Previous"
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              opacity: page === 0 ? 0.3 : 1,
              display: "flex",
              alignItems: "center",
            }}
            disabled={page === 0}
          >
            <ChevronLeft size={16} color="#0a0a0a" />
          </button>
          {testimonials.map((_, i) => (
            <button
              key={i}
              aria-label={`Page ${i + 1}`}
              onClick={() => setPage(i)}
              style={{
                width: i === page ? 20 : 8,
                height: 8,
                borderRadius: 4,
                backgroundColor: i === page ? "#0a0a0a" : "#d1d5db",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.2s ease",
              }}
            />
          ))}
          <button
            aria-label="Next"
            onClick={() =>
              setPage((p) => Math.min(testimonials.length - 1, p + 1))
            }
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              opacity: page === testimonials.length - 1 ? 0.3 : 1,
              display: "flex",
              alignItems: "center",
            }}
            disabled={page === testimonials.length - 1}
          >
            <ChevronRight size={16} color="#0a0a0a" />
          </button>
        </div>
      </div>
    </section>
  );
}
