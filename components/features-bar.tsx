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
    <section className="border-y border-border bg-surface py-8">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => {
          const Icon = f.icon;
          return (
            <div key={f.title} className="flex items-start gap-3.5">
              <div className="mt-0.5 shrink-0">
                <Icon className="size-[22px] text-ink" strokeWidth={1.5} />
              </div>
              <div>
                <p className="mb-1 text-sm font-bold text-ink">
                  {f.title}
                </p>
                <p className="text-[13px] leading-normal text-text-secondary">
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
