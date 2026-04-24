import { BookOpen, Clock, Award, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Premium Courses",
    desc: "High-quality courses curated by industry experts.",
  },
  {
    icon: Clock,
    title: "Learn at Your Pace",
    desc: "Study anytime, anywhere with lifetime access.",
  },
  {
    icon: Award,
    title: "Earn Certificates",
    desc: "Complete courses and earn certificates to showcase your skills.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Trusted",
    desc: "Trusted by learners worldwide. 100% secure platform.",
  },
];

export function FeaturesBar() {
  return (
    <section
      style={{
        backgroundColor: "#f5f5f5",
        borderTop: "1px solid #e5e5e5",
        borderBottom: "1px solid #e5e5e5",
        padding: "32px 0",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 32,
        }}
      >
        {features.map((f) => {
          const Icon = f.icon;
          return (
            <div
              key={f.title}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 14,
              }}
            >
              <div style={{ flexShrink: 0, marginTop: 2 }}>
                <Icon size={22} strokeWidth={1.5} color="#0a0a0a" />
              </div>
              <div>
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#0a0a0a",
                    marginBottom: 4,
                  }}
                >
                  {f.title}
                </p>
                <p
                  style={{
                    fontSize: 13,
                    color: "#6b7280",
                    lineHeight: 1.5,
                  }}
                >
                  {f.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
