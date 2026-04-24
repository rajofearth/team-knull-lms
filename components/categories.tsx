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
    <section className="border-t border-border py-16">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">
            Browse by Categories
          </h2>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-foreground hover:opacity-80"
          >
            View All Categories
            <ArrowRight className="size-3.5" strokeWidth={2.5} />
          </a>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <a
                key={cat.id}
                href="#"
                id={`category-${cat.id}`}
                className="group flex flex-col items-center gap-2.5 rounded-2xl border border-border bg-background px-4 py-5 text-center transition-all duration-200 hover:border-foreground hover:bg-secondary"
              >
                <div className="flex size-10 items-center justify-center rounded-md border border-border bg-[#f9f9f9] transition-colors group-hover:border-border">
                  <Icon className="size-[18px] text-foreground" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="mb-0.5 text-[13px] font-bold text-foreground">
                    {cat.label}
                  </p>
                  <p className="text-[11px] text-muted-foreground">
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
