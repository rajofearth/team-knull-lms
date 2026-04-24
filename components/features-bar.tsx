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
    <section className="bg-surface-dim border-y border-border py-12 px-6 md:px-20 overflow-x-auto no-scrollbar">
      <div className="mx-auto max-w-[1280px] flex items-center justify-between min-w-[1000px]">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <div key={f.title} className="flex items-center gap-8 grow shrink basis-0">
              <div className="flex items-start gap-5">
                <div className="flex items-center justify-center rounded-xl bg-canvas shadow-subtle shrink-0 size-12">
                  <Icon className="size-6 text-ink" strokeWidth={2} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-ink font-heading font-bold text-base m-0 leading-tight">
                    {f.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-text-description font-heading m-0 max-w-[180px]">
                    {f.desc}
                  </p>
                </div>
              </div>
              {i < features.length - 1 && (
                <div className="w-px h-16 bg-border shrink-0 ml-auto" />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
