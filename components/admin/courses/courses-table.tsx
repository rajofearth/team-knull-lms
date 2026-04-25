"use client";

import Image from "next/image";
import { ChevronDown, MoreHorizontal, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { AdminCourse, CourseLevel, CourseStatus } from "@/lib/data/admin";

interface CoursesTableProps {
  data: AdminCourse[];
}

export function CoursesTable({ data }: CoursesTableProps) {
  return (
    <div className="flex flex-col rounded-md overflow-hidden bg-white border border-border">
      {/* Table Header */}
      <div className="flex items-center py-3 px-6 border-b border-border bg-white">
        <div className="flex-[3] flex items-center gap-2 pr-4 min-w-0">
          <span className="uppercase tracking-widest text-muted-foreground font-sans font-semibold text-xs">Course</span>
          <ChevronDown className="size-3 text-muted-foreground shrink-0" />
        </div>
        <div className="flex-[2] flex items-center gap-2 pr-4 min-w-0">
          <span className="uppercase tracking-widest text-muted-foreground font-sans font-semibold text-xs">Instructor</span>
        </div>
        <div className="w-[110px] shrink-0 flex items-center gap-2 pr-4">
          <span className="uppercase tracking-widest text-muted-foreground font-sans font-semibold text-xs">Category</span>
          <ChevronDown className="size-3 text-muted-foreground shrink-0" />
        </div>
        <div className="flex-[1.2] flex items-center gap-2 pr-4">
          <span className="uppercase tracking-widest text-muted-foreground font-sans font-semibold text-xs">Level</span>
          <ChevronDown className="size-3 text-muted-foreground shrink-0" />
        </div>
        <div className="flex-[1.2] flex items-center gap-2 pr-4">
          <span className="uppercase tracking-widest text-muted-foreground font-sans font-semibold text-xs">Students</span>
          <ChevronDown className="size-3 text-muted-foreground shrink-0" />
        </div>
        <div className="flex-1 flex items-center gap-2 pr-4">
          <span className="uppercase tracking-widest text-muted-foreground font-sans font-semibold text-xs">Rating</span>
        </div>
        <div className="flex-[1.2] flex items-center gap-2 pr-4">
          <span className="uppercase tracking-widest text-muted-foreground font-sans font-semibold text-xs">Status</span>
        </div>
        <div className="flex-[1.5] flex items-center gap-2 pr-4">
          <span className="uppercase tracking-widest text-muted-foreground font-sans font-semibold text-xs">Created At</span>
          <ChevronDown className="size-3 text-muted-foreground shrink-0" />
        </div>
        <div className="flex-[0.5] flex items-center justify-end">
          <span className="uppercase tracking-widest text-muted-foreground font-sans font-semibold text-xs">Actions</span>
        </div>
      </div>

      {/* Table Body */}
      <div className="flex flex-col">
        {data.map((course, i) => (
          <div key={course.id} className={cn("flex items-center py-4 px-6 justify-center", i !== data.length - 1 && "border-b border-muted")}>
            {/* Course */}
            <div className="flex-[3] flex items-center gap-4 min-w-0 pr-4">
              <div className="w-20 h-12.5 shrink-0 rounded-md bg-muted overflow-hidden">
                {course.thumbnail ? (
                  <Image src={course.thumbnail} alt={course.title} width={80} height={50} className="w-full h-full object-cover" unoptimized />
                ) : null}
              </div>
              <div className="flex flex-col gap-0.5 min-w-0">
                <span className="text-sm font-sans font-semibold text-foreground truncate">{course.title}</span>
                <span className="text-xs font-sans text-muted-foreground truncate">{course.subtitle}</span>
              </div>
            </div>

            {/* Instructor */}
            <div className="flex-[2] flex items-center gap-2.5 min-w-0 pr-4">
              <div className="size-7 rounded-full bg-muted overflow-hidden shrink-0">
                {course.instructor.avatar ? (
                  <Image src={course.instructor.avatar} alt={course.instructor.name} width={28} height={28} className="w-full h-full object-cover" unoptimized />
                ) : null}
              </div>
              <span className="text-[13px] font-sans font-medium text-foreground/80 truncate">{course.instructor.name}</span>
            </div>

            {/* Category */}
            <div className="w-[110px] shrink-0 pr-4">
              <span className="text-[13px] font-sans text-foreground/70">{course.category}</span>
            </div>

            {/* Level */}
            <div className="flex-[1.2] flex items-center pr-4">
              <LevelBadge level={course.level} />
            </div>

            {/* Students */}
            <div className="flex-[1.2] flex items-center pr-4">
              <span className="text-[13px] font-sans text-foreground/70">{course.students.toLocaleString()}</span>
            </div>

            {/* Rating */}
            <div className="flex-1 flex items-center gap-1 pr-4">
              <span className="text-xs font-sans font-semibold text-foreground">{course.rating}</span>
              <Star className="size-3 fill-foreground text-foreground shrink-0" />
            </div>

            {/* Status */}
            <div className="flex-[1.2] flex items-center pr-4">
              <StatusBadge status={course.status} />
            </div>

            {/* Created At */}
            <div className="flex-[1.5] flex items-center pr-4">
              <span className="text-[13px] font-sans text-muted-foreground">{course.createdAt}</span>
            </div>

            {/* Actions */}
            <div className="flex-[0.5] flex justify-end">
              <button className="rounded-md border border-border p-1 hover:bg-muted transition-colors">
                <MoreHorizontal className="size-4 text-muted-foreground" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Footer */}
      <div className="flex items-center justify-between p-5 border-t border-border">
        <span className="text-sm font-sans text-muted-foreground">Showing 1 to 8 of 258 courses</span>
        
        <div className="flex items-center gap-1">
          <button className="flex items-center justify-center rounded-md border border-border size-8 hover:bg-muted transition-colors">
            <ChevronLeft className="size-4 text-muted-foreground" />
          </button>
          <button className="flex items-center justify-center rounded-md bg-black size-8 hover:bg-black/90 transition-colors">
            <span className="text-white font-sans font-semibold text-sm">1</span>
          </button>
          <button className="flex items-center justify-center rounded-md border border-border size-8 hover:bg-muted transition-colors">
            <span className="text-foreground/80 font-sans font-medium text-sm">2</span>
          </button>
          <button className="flex items-center justify-center rounded-md border border-border size-8 hover:bg-muted transition-colors">
            <span className="text-foreground/80 font-sans font-medium text-sm">3</span>
          </button>
          <span className="px-1 text-muted-foreground text-sm font-sans">...</span>
          <button className="flex items-center justify-center rounded-md border border-border size-8 hover:bg-muted transition-colors">
            <span className="text-foreground/80 font-sans font-medium text-sm">32</span>
          </button>
          <button className="flex items-center justify-center rounded-md border border-border size-8 hover:bg-muted transition-colors">
            <ChevronRight className="size-4 text-foreground/80" />
          </button>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm font-sans text-muted-foreground">Rows per page</span>
          <div className="flex items-center rounded-md py-1.5 px-3 gap-2 bg-white border border-border">
            <span className="text-sm font-sans font-medium text-foreground">10</span>
            <ChevronDown className="size-3.5 text-muted-foreground shrink-0" />
          </div>
        </div>
      </div>
    </div>
  );
}

function LevelBadge({ level }: { level: CourseLevel }) {
  const styles = {
    Beginner: "bg-emerald-50 text-emerald-500",
    Intermediate: "bg-amber-50 text-amber-500",
    Advanced: "bg-indigo-50 text-indigo-500",
  };
  return (
    <span className={cn("inline-flex rounded-sm py-0.5 px-2 text-xs font-sans font-semibold", styles[level])}>
      {level}
    </span>
  );
}

function StatusBadge({ status }: { status: CourseStatus }) {
  const styles = {
    Published: "bg-emerald-50 border-emerald-100 text-emerald-500 before:bg-emerald-500",
    Draft: "bg-muted border-border text-foreground/70 before:bg-foreground/50",
    Archived: "bg-red-50 border-red-100 text-red-500 before:bg-red-500",
  };
  return (
    <span className={cn("flex items-center rounded-full py-0.5 px-2 gap-1.5 border text-xs font-sans font-semibold before:size-1.5 before:rounded-full w-fit", styles[status])}>
      {status}
    </span>
  );
}
