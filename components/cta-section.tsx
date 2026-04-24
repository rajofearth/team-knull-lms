import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section style={{ padding: "0 0 64px" }}>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <div
          style={{
            backgroundColor: "#f5f5f5",
            borderRadius: 16,
            padding: "56px 64px",
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: 40,
            alignItems: "center",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: 32,
                fontWeight: 800,
                color: "#0a0a0a",
                lineHeight: 1.2,
                marginBottom: 12,
                letterSpacing: "-0.01em",
              }}
            >
              Ready to start your learning journey?
            </h2>
            <p
              style={{
                fontSize: 15,
                color: "#6b7280",
                marginBottom: 28,
                lineHeight: 1.6,
              }}
            >
              Join thousands of learners and unlock your potential.
            </p>
            <a
              href="#"
              id="cta-explore-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                backgroundColor: "#0a0a0a",
                color: "#ffffff",
                fontSize: 14,
                fontWeight: 600,
                padding: "12px 24px",
                borderRadius: 10,
                transition: "opacity 0.2s ease",
              }}
            >
              Explore Courses
              <ArrowRight size={16} strokeWidth={2} />
            </a>
          </div>
          <div
            style={{
              width: 220,
              height: 200,
              position: "relative",
              flexShrink: 0,
            }}
          >
            <Image
              src="/cta_plant.png"
              alt="Start your learning journey"
              fill
              sizes="220px"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
