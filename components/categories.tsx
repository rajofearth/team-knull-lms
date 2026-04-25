import {
  ArrowRight,
  Briefcase,
  Camera,
  Code2,
  Megaphone,
  Paintbrush,
  User,
} from "lucide-react";

const categories = [
  { id: "development", icon: Code2, label: "Development", count: 32 },
  { id: "design", icon: Paintbrush, label: "Design", count: 21 },
  { id: "marketing", icon: Megaphone, label: "Marketing", count: 18 },
  { id: "business", icon: Briefcase, label: "Business", count: 15 },
  { id: "photography", icon: Camera, label: "Photography", count: 12 },
  { id: "personal-growth", icon: User, label: "Personal Growth", count: 14 },
];

export function Categories() {
  return (
    <section className="bg-canvas py-12 md:py-20 px-6 md:px-20 border-t border-border">
      <div className="mx-auto max-w-[1280px]">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-ink font-heading font-bold text-3xl leading-tight m-0">
            Browse by Categories
          </h2>
          <div className="flex items-center gap-2 group cursor-pointer">
            <span className="text-text-muted group-hover:text-ink font-heading font-semibold text-sm transition-colors">
              View All Categories
            </span>
            <ArrowRight
              className="size-4 text-text-muted group-hover:text-ink transition-colors"
              strokeWidth={2}
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className="flex flex-col items-center justify-center p-8 rounded-2xl bg-surface-dim border border-transparent transition-all duration-300 hover:bg-canvas hover:border-border hover:shadow-card cursor-pointer group"
              >
                <div className="flex items-center justify-center rounded-xl bg-canvas shadow-subtle shrink-0 size-12 mb-4 group-hover:shadow-md transition-shadow">
                  <Icon className="size-6 text-ink" strokeWidth={2} />
                </div>
                <div className="text-center">
                  <h3 className="text-ink font-heading font-bold text-base m-0 leading-tight">
                    {cat.label}
                  </h3>
                  <p className="mt-1 text-text-muted font-heading text-xs m-0">
                    {cat.count} Courses
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
