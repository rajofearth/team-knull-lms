import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { CourseCard } from "@/components/course-card";
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
          <Link
            href="/courses"
            className="flex items-center gap-2 group cursor-pointer transition-opacity hover:opacity-80"
          >
            <span className="text-text-muted group-hover:text-ink font-heading font-semibold text-sm transition-colors">
              View All Courses
            </span>
            <ArrowRight
              className="size-4 text-text-muted group-hover:text-ink transition-colors"
              strokeWidth={2}
            />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
