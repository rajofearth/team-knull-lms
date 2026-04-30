"use client";

import { MoreHorizontal, Star } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { TopCourseData } from "@/lib/lms/types";

interface TopCoursesProps {
  courses: TopCourseData[];
}
export function TopCourses({ courses }: TopCoursesProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Card className="flex-2 min-w-0 rounded-md bg-white border border-border shadow-none ring-0 p-0">
        <CardContent className="flex flex-col gap-5 p-5">
          <div className="flex items-center justify-between">
            <h3 className="font-heading font-semibold text-lg text-foreground">
              Top Courses
            </h3>
            <div className="size-8 rounded-md bg-muted animate-pulse" />
          </div>
          <div className="flex flex-col gap-4">
            {["s1", "s2", "s3", "s4", "s5"].map((id) => (
              <div key={id} className="flex items-center gap-3">
                <div className="w-12 h-8 rounded shrink-0 bg-muted animate-pulse" />
                <div className="flex flex-col gap-2">
                  <div className="w-32 h-4 bg-muted animate-pulse" />
                  <div className="w-20 h-3 bg-muted animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="flex-2 min-w-0 rounded-md bg-white border border-border shadow-none ring-0 p-0">
      <CardContent className="flex flex-col gap-5 p-5">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h3 className="font-heading font-semibold text-lg text-foreground">
            Top Courses
          </h3>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-md border-border bg-white hover:bg-muted text-muted-foreground transition-colors shadow-none"
              >
                <MoreHorizontal className="size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>View all courses</DropdownMenuItem>
              <DropdownMenuItem>Export report</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* List */}
        <div className="flex flex-col gap-4">
          {courses.map((course) => (
            <div key={course.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-12 h-8 rounded shrink-0 bg-muted overflow-hidden">
                  {course.thumbnail ? (
                    <Image
                      src={course.thumbnail}
                      alt={course.title}
                      width={48}
                      height={32}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  ) : null}
                </div>
                <div className="flex flex-col gap-0.5 min-w-0">
                  <span className="text-sm font-sans font-semibold text-foreground truncate">
                    {course.title}
                  </span>
                  <span className="text-xs font-sans text-muted-foreground truncate">
                    {course.enrollments}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1 shrink-0">
                <span className="text-sm font-sans font-semibold text-foreground">
                  {course.rating}
                </span>
                <Star className="size-3 fill-foreground text-foreground" />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
