import Link from "next/link";
import { CourseCard } from "@/components/course-card";
import type { CourseListItem } from "@/lib/lms/types";

export function RecommendedCourses({ courses }: { courses: CourseListItem[] }) {
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-heading font-bold text-foreground m-0">
          Recommended for You
        </h2>
        <Link
          href="/courses?recommended=true"
          className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
        >
          View All &rarr;
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
