"use client";

import { Star, Bookmark, Play, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface CourseHeaderProps {
  course: {
    title: string;
    description: string;
    rating: number;
    reviews: number;
    students: string;
    level: string;
    duration: string;
    thumbnail: string;
    badge?: string;
  };
}

export function CourseHeader({ course }: CourseHeaderProps) {
  return (
    <div className="w-full">
      {/* Breadcrumbs */}
      <div className="flex items-center pt-6 gap-2 px-20">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="text-text-muted text-[13px] font-sans">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <ChevronRight className="size-3 text-ink" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/courses" className="text-text-muted text-[13px] font-sans">Courses</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <ChevronRight className="size-3 text-ink" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage className="text-ink text-[13px] font-sans font-medium">{course.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Hero Content */}
      <div className="flex items-start py-8 px-20 gap-12">
        <div className="relative w-85 h-52.5 shrink-0 rounded-xl overflow-hidden shadow-card group">
          <img 
            src={course.thumbnail} 
            alt={course.title}
            className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {course.badge && (
            <div className="absolute top-3 left-3 rounded-full py-1 px-3 bg-white border border-black/5 shadow-subtle">
              <span className="text-ink font-sans font-bold text-[11px] leading-tight">
                {course.badge}
              </span>
            </div>
          )}
        </div>

        <div className="flex-1 flex flex-col">
          <h1 className="text-[38px] tracking-tight leading-[1.2] text-ink font-heading font-bold mb-3.5">
            {course.title}
          </h1>
          <p className="mb-7 text-[16px] leading-relaxed max-w-[520px] text-text-secondary font-sans">
            {course.description}
          </p>

          <div className="flex items-center mb-9 gap-4 text-sm font-sans">
            <div className="flex items-center gap-1.5">
              <span className="text-ink font-bold">{course.rating}</span>
              <Star className="size-3.5 fill-ink text-ink" />
              <span className="text-text-muted">({course.reviews})</span>
            </div>
            <span className="text-border-dark font-medium">•</span>
            <span className="text-text-secondary">{course.students} Students</span>
            <span className="text-border-dark font-medium">•</span>
            <span className="text-text-secondary">{course.level}</span>
            <span className="text-border-dark font-medium">•</span>
            <span className="text-text-secondary">{course.duration}</span>
          </div>

          <div className="flex gap-4">
            <Button size="lg" className="h-[46px] px-8 bg-ink text-white font-sans font-bold text-sm tracking-wide hover:opacity-90 rounded-lg">
              Continue Learning
            </Button>
            <Button variant="outline" size="lg" className="h-[46px] px-8 bg-white border-[1.5px] border-border-dark text-ink font-sans font-bold text-sm hover:bg-surface rounded-lg gap-2.5">
              <Bookmark className="size-[18px]" strokeWidth={2} />
              Save Course
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
