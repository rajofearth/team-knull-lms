"use client";

import Image from "next/image";
import { Star, ArrowRight, Clock, BarChart2 } from "lucide-react";

const courses = [
  {
    id: "uiux-design",
    image: "/course_uiux.png",
    badge: "Bestseller",
    title: "UI/UX Design Fundamentals",
    rating: 4.8,
    reviews: "1.2k",
    level: "Beginner",
    hours: 12,
    price: 49,
    desc: "Learn the basics of UI/UX design and create beautiful user interfaces.",
  },
  {
    id: "web-dev",
    image: "/course_webdev.png",
    badge: "New",
    title: "Web Development Bootcamp",
    rating: 4.7,
    reviews: "892",
    level: "Beginner → Advanced",
    hours: 25,
    price: 89,
    desc: "HTML, CSS, JavaScript and more to build real-world websites.",
  },
  {
    id: "graphics-design",
    image: "/course_graphics.png",
    badge: "Popular",
    title: "Graphics Design Masterclass",
    rating: 4.9,
    reviews: "1.1k",
    level: "All Levels",
    hours: 18,
    price: 49,
    desc: "Design stunning visuals and brand identities like a pro.",
  },
  {
    id: "digital-marketing",
    image: "/course_marketing.png",
    badge: "New",
    title: "Digital Marketing Strategy",
    rating: 4.6,
    reviews: "743",
    level: "Beginner",
    hours: 10,
    price: 39,
    desc: "Master digital marketing and grow any business online.",
  },
];

export function PopularCourses() {
  return (
    <section style={{ padding: "64px 0" }}>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {/* Section Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 32,
          }}
        >
          <h2
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: "#0a0a0a",
            }}
          >
            Popular Courses
          </h2>
          <a
            href="#"
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "#0a0a0a",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            View All Courses
            <ArrowRight size={14} strokeWidth={2.5} />
          </a>
        </div>

        {/* Course Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 20,
          }}
        >
          {courses.map((course) => (
            <a
              key={course.id}
              href="#"
              id={`course-${course.id}`}
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e5e5e5",
                borderRadius: 16,
                overflow: "hidden",
                boxShadow: "0px 2px 8px rgba(0,0,0,0.04)",
                transition: "box-shadow 0.2s ease, transform 0.2s ease",
                display: "block",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0px 8px 24px rgba(0,0,0,0.10)";
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0px 2px 8px rgba(0,0,0,0.04)";
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(0)";
              }}
            >
              {/* Thumbnail */}
              <div
                style={{
                  position: "relative",
                  height: 160,
                  backgroundColor: "#f5f5f5",
                }}
              >
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  sizes="(max-width: 1200px) 25vw, 300px"
                  style={{ objectFit: "cover" }}
                />
                {/* Badge */}
                <span
                  style={{
                    position: "absolute",
                    top: 10,
                    left: 10,
                    backgroundColor: "#ffffff",
                    color: "#0a0a0a",
                    fontSize: 10,
                    fontWeight: 600,
                    padding: "3px 8px",
                    borderRadius: 6,
                    border: "1px solid #e5e5e5",
                  }}
                >
                  {course.badge}
                </span>
              </div>

              {/* Content */}
              <div style={{ padding: "14px 16px 16px" }}>
                {/* Rating */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    marginBottom: 6,
                  }}
                >
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: "#0a0a0a",
                    }}
                  >
                    {course.rating}
                  </span>
                  <Star
                    size={11}
                    fill="#f59e0b"
                    color="#f59e0b"
                    strokeWidth={0}
                  />
                  <span style={{ fontSize: 11, color: "#6b7280" }}>
                    ({course.reviews})
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#0a0a0a",
                    lineHeight: 1.35,
                    marginBottom: 6,
                  }}
                >
                  {course.title}
                </h3>
                <p
                  style={{
                    fontSize: 12,
                    color: "#6b7280",
                    lineHeight: 1.5,
                    marginBottom: 12,
                  }}
                >
                  {course.desc}
                </p>

                {/* Meta */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderTop: "1px solid #f0f0f0",
                    paddingTop: 10,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 10,
                        color: "#6b7280",
                        display: "flex",
                        alignItems: "center",
                        gap: 3,
                      }}
                    >
                      <BarChart2 size={10} strokeWidth={2} />
                      {course.level}
                    </span>
                    <span
                      style={{
                        fontSize: 10,
                        color: "#6b7280",
                        display: "flex",
                        alignItems: "center",
                        gap: 3,
                      }}
                    >
                      <Clock size={10} strokeWidth={2} />
                      {course.hours}h
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: 15,
                      fontWeight: 800,
                      color: "#0a0a0a",
                    }}
                  >
                    ${course.price}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
