import { MoreHorizontal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

import type { StudentDashboardData } from "@/lib/lms/types";

export function EnrolledCourses({
  courses,
}: {
  courses: StudentDashboardData["enrolledCourses"];
}) {
  if (courses.length === 0) {
    return (
      <div className="flex flex-col gap-6 w-full">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-heading font-bold text-foreground m-0">
            My Enrolled Courses
          </h2>
        </div>
        <Card className="flex flex-col items-center justify-center p-10 rounded-2xl border-border shadow-none bg-white text-center">
          <span className="text-muted-foreground">
            You are not enrolled in any courses yet.
          </span>
          <Button
            asChild
            className="mt-4 rounded-xl bg-foreground text-background hover:bg-foreground/90 font-semibold"
          >
            <Link href="/courses">Explore Courses</Link>
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-heading font-bold text-foreground m-0">
          My Enrolled Courses
        </h2>
        <Link
          href="/profile/mylearnings?view=all"
          className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
        >
          View All &rarr;
        </Link>
      </div>

      <Card className="flex flex-col gap-8 p-8 rounded-2xl border-border shadow-none bg-white">
        {courses.map((course) => (
          <div
            key={course.id}
            className="flex flex-col md:flex-row items-start md:items-center gap-6 w-full group"
          >
            {/* Thumbnail */}
            <div className="relative w-full md:w-[160px] h-[90px] rounded-xl overflow-hidden shrink-0 border border-border">
              <Image
                src={course.thumbnail}
                alt={course.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Info */}
            <div className="flex flex-col gap-1 flex-1 min-w-0">
              <Link
                href={`/courses/${course.slug}`}
                className="text-base font-heading font-bold text-foreground hover:text-blue-600 transition-colors truncate"
              >
                {course.title}
              </Link>
              <span className="text-sm text-muted-foreground truncate">
                {course.instructor}
              </span>
            </div>

            {/* Progress */}
            <div className="flex flex-col gap-2 w-full md:w-[240px] shrink-0 mt-4 md:mt-0">
              <span className="text-xs font-medium text-muted-foreground">
                {course.progress}% Complete
              </span>
              <Progress
                value={course.progress}
                className="h-2 bg-muted [&>div]:bg-foreground"
              />
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4 shrink-0 mt-4 md:mt-0 md:ml-4">
              <Button
                asChild
                className="rounded-xl px-6 py-5 bg-foreground text-background hover:bg-foreground/90 font-semibold text-sm"
              >
                <Link href={`/courses/${course.slug}/learn`}>Continue</Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-foreground shrink-0 rounded-full"
              >
                <MoreHorizontal className="size-5" />
              </Button>
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
}
