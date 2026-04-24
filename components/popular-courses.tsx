import Image from "next/image";
import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import { courses } from "@/lib/data/courses";

export function PopularCourses() {
  const popularCourses = Object.values(courses);

  return (
    <section className="bg-canvas py-12 md:py-20 px-6 md:px-20">
      <div className="mx-auto max-w-[1280px]">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-ink font-heading font-bold text-3xl leading-tight m-0">
            Popular Courses
          </h2>
          <Link href="/courses" className="flex items-center gap-2 group cursor-pointer transition-opacity hover:opacity-80">
            <span className="text-text-muted group-hover:text-ink font-heading font-semibold text-sm transition-colors">
              View All Courses
            </span>
            <ArrowRight className="size-4 text-text-muted group-hover:text-ink transition-colors" strokeWidth={2} />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularCourses.map((course) => (
            <Link 
              key={course.id} 
              href={`/courses/${course.id}`}
              className="flex flex-col group rounded-2xl overflow-hidden border border-border transition-all duration-300 hover:shadow-card hover:-translate-y-1 bg-canvas cursor-pointer no-underline"
            >
              {/* Image Container */}
              <div className="h-[180px] relative bg-surface-dim overflow-hidden shrink-0">
                <Image
                  src={course.thumbnail}
                  alt={course.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {course.badge && (
                  <div className="absolute top-3 left-3 rounded-sm py-1 px-2 bg-white/90 backdrop-blur-sm">
                    <span className="text-ink font-heading font-bold text-[10px] uppercase tracking-wider">
                      {course.badge}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 p-5 grow">
                <div className="flex justify-between items-start gap-2">
                  <h3 className="grow text-ink font-heading font-bold text-base m-0 leading-snug group-hover:text-ink-deep transition-colors">
                    {course.title}
                  </h3>
                  <div className="flex items-center gap-1 shrink-0">
                    <span className="text-ink font-heading font-semibold text-xs leading-none">
                      {course.rating}
                    </span>
                    <Star size={12} className="fill-amber-400 text-amber-400" />
                    <span className="text-text-muted font-heading text-[10px]">
                      ({course.reviewsCount})
                    </span>
                  </div>
                </div>
                <p className="text-xs leading-relaxed text-text-description font-heading m-0 line-clamp-2">
                  {course.description}
                </p>
                <div className="flex justify-between items-center pt-3 mt-auto border-t border-border-subtle">
                  <div className="flex gap-3">
                    <span className="text-text-muted font-heading text-[10px]">
                      {course.level}
                    </span>
                    <span className="text-text-muted font-heading text-[10px]">
                      • {course.duration}
                    </span>
                  </div>
                  <span className="text-ink font-heading font-extrabold text-base">
                    ${course.price}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

