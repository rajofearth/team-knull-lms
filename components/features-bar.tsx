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
    <section className="border-y border-border bg-secondary/50 py-6">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-0 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, index) => {
          const Icon = f.icon;
          return (
            <div
              key={f.title}
              className={`flex items-start gap-3.5 py-3 lg:px-6 ${
                index < features.length - 1 ? "lg:border-r lg:border-border" : ""
              }`}
            >
              <div className="mt-0.5 shrink-0">
                <Icon className="size-[20px] text-foreground" strokeWidth={1.6} />
              </div>
              <div>
                <p className="mb-1 text-[16px] font-semibold text-foreground">
                  {f.title}
                </p>
                <p className="text-[12px] leading-[1.45] text-muted-foreground">
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
