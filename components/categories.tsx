"use client";

import {
  Code2,
  Paintbrush,
  Megaphone,
  Briefcase,
  Camera,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const categories = [
  { id: "development", icon: Code2, label: "Development", count: 32 },
  { id: "design", icon: Paintbrush, label: "Design", count: 21 },
  { id: "marketing", icon: Megaphone, label: "Marketing", count: 18 },
  { id: "business", icon: Briefcase, label: "Business", count: 16 },
  { id: "photography", icon: Camera, label: "Photography", count: 12 },
  { id: "personal-growth", icon: TrendingUp, label: "Personal Growth", count: 14 },
];

export function Categories() {
  return (
    <section
      style={{
        padding: "64px 0",
        borderTop: "1px solid #e5e5e5",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {/* Header */}
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
            Browse by Categories
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
            View All Categories
            <ArrowRight size={14} strokeWidth={2.5} />
          </a>
        </div>

        {/* Category Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: 16,
          }}
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <a
                key={cat.id}
                href="#"
                id={`category-${cat.id}`}
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e5e5e5",
                  borderRadius: 16,
                  padding: "20px 16px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 10,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  textAlign: "center",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "#f5f5f5";
                  (e.currentTarget as HTMLElement).style.borderColor = "#0a0a0a";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "#ffffff";
                  (e.currentTarget as HTMLElement).style.borderColor = "#e5e5e5";
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    border: "1px solid #e5e5e5",
                    borderRadius: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#f9f9f9",
                  }}
                >
                  <Icon size={18} strokeWidth={1.5} color="#0a0a0a" />
                </div>
                <div>
                  <p
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#0a0a0a",
                      marginBottom: 2,
                    }}
                  >
                    {cat.label}
                  </p>
                  <p style={{ fontSize: 11, color: "#6b7280" }}>
                    {cat.count} Courses
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
