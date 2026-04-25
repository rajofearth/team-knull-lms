import { Star } from "lucide-react";
import Image from "next/image";
import type { TopCourse } from "@/lib/data/admin";

interface TopCoursesProps {
  courses: TopCourse[];
}

export function TopCourses({ courses }: TopCoursesProps) {
  return (
    <div className="flex-1 flex flex-col rounded-md gap-5 bg-white border border-border p-5 min-w-0">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="font-heading font-semibold text-lg text-foreground">Top Courses</h3>
        <button className="rounded-md py-1.5 px-3 border border-border hover:bg-muted transition-colors">
          <span className="text-xs font-sans font-semibold text-foreground/70">View All</span>
        </button>
      </div>

      {/* Course list */}
      <div className="flex flex-col gap-4">
        {courses.map((course) => (
          <div key={course.id} className="flex items-center justify-between gap-3">
            {/* Thumbnail + info */}
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-11 h-8 rounded-sm bg-muted overflow-hidden shrink-0">
                {course.thumbnail ? (
                  <Image
                    src={course.thumbnail}
                    alt={course.title}
                    width={44}
                    height={32}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                ) : null}
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-sans font-medium text-foreground truncate">{course.title}</span>
                <span className="text-xs font-sans text-muted-foreground">{course.enrollments}</span>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 shrink-0">
              <span className="text-[13px] font-sans font-semibold text-foreground">{course.rating}</span>
              <Star className="size-3 fill-foreground text-foreground shrink-0" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
