import { MoreHorizontal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const enrolledCourses = [
  {
    id: "1",
    title: "Web Development Bootcamp",
    instructor: "John Smith",
    progress: 66,
    thumbnail:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=300&auto=format&fit=crop",
    slug: "web-development-bootcamp",
  },
  {
    id: "2",
    title: "UI/UX Design Fundamentals",
    instructor: "Sarah Johnson",
    progress: 40,
    thumbnail:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=300&auto=format&fit=crop",
    slug: "ui-ux-design-fundamentals",
  },
  {
    id: "3",
    title: "JavaScript Advanced Concepts",
    instructor: "David Chen",
    progress: 75,
    thumbnail:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=300&auto=format&fit=crop",
    slug: "javascript-advanced-concepts",
  },
];

export function EnrolledCourses() {
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
        {enrolledCourses.map((course) => (
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
