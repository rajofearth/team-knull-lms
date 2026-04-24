import Image from "next/image";
import { Play, CheckCircle2, Circle, ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section
      style={{
        backgroundColor: "#ffffff",
        padding: "64px 0 72px",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 24,
          alignItems: "start",
        }}
      >
        {/* Left: Hero Text */}
        <div style={{ paddingRight: 16 }}>
          <p
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#6b7280",
              marginBottom: 16,
            }}
          >
            TEAM KNULL&apos;S LMS
          </p>
          <h1
            style={{
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.05,
              color: "#0a0a0a",
              letterSpacing: "-0.02em",
              marginBottom: 20,
            }}
          >
            Learn.
            <br />
            Grow.
            <br />
            Get Certified.
          </h1>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.65,
              color: "#6b7280",
              marginBottom: 32,
              maxWidth: 280,
            }}
          >
            Explore premium courses, learn at your own pace, and earn
            certificates to showcase your skills.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <a
              href="#"
              id="hero-explore-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                backgroundColor: "#0a0a0a",
                color: "#ffffff",
                fontSize: 14,
                fontWeight: 600,
                padding: "12px 20px",
                borderRadius: 10,
                transition: "opacity 0.2s ease",
              }}
            >
              Explore Courses
              <ArrowRight size={16} strokeWidth={2} />
            </a>
            <a
              href="#"
              id="hero-how-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontSize: 14,
                fontWeight: 500,
                color: "#0a0a0a",
              }}
            >
              How It Works
              <span
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  border: "1.5px solid #e5e5e5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Play size={10} fill="#0a0a0a" color="#0a0a0a" />
              </span>
            </a>
          </div>
        </div>

        {/* Center: My Learning Card */}
        <div
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid #e5e5e5",
            borderRadius: 16,
            padding: 20,
            boxShadow: "0px 2px 8px rgba(0,0,0,0.04)",
          }}
        >
          <p
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "#0a0a0a",
              marginBottom: 14,
            }}
          >
            My Learning
          </p>

          {/* Active Course */}
          <div
            style={{
              backgroundColor: "#f5f5f5",
              borderRadius: 10,
              padding: 14,
              marginBottom: 14,
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 5,
                backgroundColor: "#e0f2fe",
                color: "#0369a1",
                fontSize: 10,
                fontWeight: 600,
                padding: "3px 8px",
                borderRadius: 20,
                marginBottom: 8,
              }}
            >
              <span
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  backgroundColor: "#0369a1",
                  display: "inline-block",
                }}
              />
              In Progress
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: 12,
                alignItems: "start",
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#0a0a0a",
                    lineHeight: 1.3,
                    marginBottom: 10,
                  }}
                >
                  UI/UX Design
                  <br />
                  Fundamentals
                </p>
                {/* Progress bar */}
                <div
                  style={{
                    height: 3,
                    backgroundColor: "#e5e5e5",
                    borderRadius: 10,
                    marginBottom: 6,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: "65%",
                      backgroundColor: "#0a0a0a",
                      borderRadius: 10,
                    }}
                  />
                </div>
                <p style={{ fontSize: 10, color: "#6b7280", marginBottom: 10 }}>
                  65% Complete
                </p>
                <button
                  style={{
                    backgroundColor: "#0a0a0a",
                    color: "#ffffff",
                    fontSize: 11,
                    fontWeight: 600,
                    padding: "8px 14px",
                    borderRadius: 8,
                    border: "none",
                    cursor: "pointer",
                    width: "100%",
                  }}
                >
                  Continue Learning
                </button>
              </div>
              <div
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 10,
                  overflow: "hidden",
                  position: "relative",
                  flexShrink: 0,
                  backgroundColor: "#e5e5e5",
                }}
              >
                <Image
                  src="/hero_chair.png"
                  alt="UI/UX Design Fundamentals"
                  fill
                  sizes="80px"
                  style={{ objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgba(0,0,0,0.25)",
                  }}
                >
                  <div
                    style={{
                      width: 26,
                      height: 26,
                      borderRadius: "50%",
                      backgroundColor: "rgba(255,255,255,0.9)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Play size={10} fill="#0a0a0a" color="#0a0a0a" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lesson List */}
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {[
              { num: "01", title: "Introduction to UI/UX", done: true },
              { num: "02", title: "Design Principles", done: true },
              { num: "03", title: "Wireframing Basics", done: false },
            ].map((lesson, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "10px 0",
                  borderBottom: i < 2 ? "1px solid #f0f0f0" : "none",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span
                    style={{
                      fontSize: 11,
                      color: "#6b7280",
                      fontWeight: 500,
                      minWidth: 18,
                    }}
                  >
                    {lesson.num}
                  </span>
                  <span
                    style={{
                      fontSize: 12,
                      color: "#0a0a0a",
                      fontWeight: 500,
                    }}
                  >
                    {lesson.title}
                  </span>
                </div>
                {lesson.done ? (
                  <CheckCircle2
                    size={16}
                    fill="#0a0a0a"
                    color="#0a0a0a"
                    strokeWidth={2}
                  />
                ) : (
                  <Circle size={16} color="#d1d5db" strokeWidth={1.5} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Progress + Certificate */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {/* My Progress Card */}
          <div
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #e5e5e5",
              borderRadius: 16,
              padding: 20,
              boxShadow: "0px 2px 8px rgba(0,0,0,0.04)",
            }}
          >
            <p
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: "#0a0a0a",
                marginBottom: 14,
              }}
            >
              My Progress
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              {/* Circular progress */}
              <div style={{ position: "relative", flexShrink: 0 }}>
                <svg width="80" height="80" viewBox="0 0 80 80">
                  <circle
                    cx="40"
                    cy="40"
                    r="32"
                    fill="none"
                    stroke="#f0f0f0"
                    strokeWidth="6"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="32"
                    fill="none"
                    stroke="#0a0a0a"
                    strokeWidth="6"
                    strokeDasharray="201"
                    strokeDashoffset="60"
                    strokeLinecap="round"
                    transform="rotate(-90 40 40)"
                  />
                </svg>
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: 22,
                      fontWeight: 800,
                      color: "#0a0a0a",
                      lineHeight: 1,
                    }}
                  >
                    12
                  </span>
                  <span style={{ fontSize: 8, color: "#6b7280", fontWeight: 500 }}>
                    Courses Enrolled
                  </span>
                </div>
              </div>

              {/* Stats */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  flex: 1,
                }}
              >
                {[
                  { label: "Completed", val: 5 },
                  { label: "In Progress", val: 7 },
                  { label: "Certificates", val: 3 },
                ].map((s) => (
                  <div
                    key={s.label}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ fontSize: 12, color: "#6b7280" }}>
                      {s.label}
                    </span>
                    <span
                      style={{
                        fontSize: 13,
                        fontWeight: 700,
                        color: "#0a0a0a",
                      }}
                    >
                      {s.val}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Latest Certificate */}
          <div
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #e5e5e5",
              borderRadius: 16,
              padding: 20,
              boxShadow: "0px 2px 8px rgba(0,0,0,0.04)",
            }}
          >
            <p
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: "#6b7280",
                marginBottom: 12,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              Latest Certificate
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 12,
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: "#0a0a0a",
                    lineHeight: 1.35,
                    marginBottom: 8,
                  }}
                >
                  UI/UX Design
                  <br />
                  Fundamentals
                </p>
                <a
                  href="#"
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#0a0a0a",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4,
                  }}
                >
                  View Certificate
                  <ArrowRight size={12} strokeWidth={2.5} />
                </a>
              </div>
              {/* Certificate Badge */}
              <div
                style={{
                  width: 52,
                  height: 52,
                  backgroundColor: "#0a0a0a",
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                  strokeWidth="1.5"
                >
                  <circle cx="12" cy="8" r="5" />
                  <path d="M9 13.5L7 21l5-2 5 2-2-7.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
