"use client";

import { ChevronDown, MoreHorizontal, Star } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { AdminCourseListItem } from "@/lib/lms/types";
import { cn } from "@/lib/utils";

interface CoursesTableProps {
  data: AdminCourseListItem[];
}

export function CoursesTable({ data }: CoursesTableProps) {
  return (
    <div className="flex flex-col min-w-0 rounded-md bg-white border border-border">
      <div className="overflow-x-auto">
        <Table>
          {/* Table Header */}
          <TableHeader className="bg-white">
            <TableRow className="border-b border-border hover:bg-transparent">
              <TableHead className="w-[30%] min-w-[200px] py-3 px-6 h-auto">
                <div className="flex items-center gap-2">
                  <span className="uppercase tracking-widest text-muted-foreground font-sans font-semibold text-xs">
                    Course
                  </span>
                  <ChevronDown className="size-3 text-muted-foreground shrink-0" />
                </div>
              </TableHead>
              <TableHead className="w-[15%] min-w-[120px] py-3 px-0 h-auto">
                <span className="uppercase tracking-widest text-muted-foreground font-sans font-semibold text-xs">
                  Instructor
                </span>
              </TableHead>
              <TableHead className="w-[10%] min-w-[100px] py-3 px-0 h-auto">
                <div className="flex items-center gap-2">
                  <span className="uppercase tracking-widest text-muted-foreground font-sans font-semibold text-xs">
                    Category
                  </span>
                  <ChevronDown className="size-3 text-muted-foreground shrink-0" />
                </div>
              </TableHead>
              <TableHead className="w-[10%] min-w-[90px] py-3 px-0 h-auto">
                <div className="flex items-center gap-2">
                  <span className="uppercase tracking-widest text-muted-foreground font-sans font-semibold text-xs">
                    Level
                  </span>
                  <ChevronDown className="size-3 text-muted-foreground shrink-0" />
                </div>
              </TableHead>
              <TableHead className="w-[10%] min-w-[90px] py-3 px-0 h-auto">
                <div className="flex items-center gap-2">
                  <span className="uppercase tracking-widest text-muted-foreground font-sans font-semibold text-xs">
                    Students
                  </span>
                  <ChevronDown className="size-3 text-muted-foreground shrink-0" />
                </div>
              </TableHead>
              <TableHead className="w-[8%] min-w-[70px] py-3 px-0 h-auto">
                <span className="uppercase tracking-widest text-muted-foreground font-sans font-semibold text-xs">
                  Rating
                </span>
              </TableHead>
              <TableHead className="w-[10%] min-w-[90px] py-3 px-0 h-auto">
                <span className="uppercase tracking-widest text-muted-foreground font-sans font-semibold text-xs">
                  Status
                </span>
              </TableHead>
              <TableHead className="w-[12%] min-w-[100px] py-3 px-0 h-auto">
                <div className="flex items-center gap-2">
                  <span className="uppercase tracking-widest text-muted-foreground font-sans font-semibold text-xs">
                    Created At
                  </span>
                  <ChevronDown className="size-3 text-muted-foreground shrink-0" />
                </div>
              </TableHead>
              <TableHead className="w-[5%] min-w-[60px] py-3 px-6 h-auto text-right">
                <span className="uppercase tracking-widest text-muted-foreground font-sans font-semibold text-xs">
                  Actions
                </span>
              </TableHead>
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody>
            {data.map((course, _i) => (
              <TableRow
                key={course.id}
                className="border-border hover:bg-muted/30"
              >
                {/* Course */}
                <TableCell className="py-4 px-6 min-w-0">
                  <div className="flex items-center gap-4 min-w-0 pr-4">
                    <div className="w-20 h-12.5 shrink-0 rounded-md bg-muted overflow-hidden">
                      {course.thumbnail ? (
                        <Image
                          src={course.thumbnail}
                          alt={course.title}
                          width={80}
                          height={50}
                          className="w-full h-full object-cover"
                          unoptimized
                        />
                      ) : null}
                    </div>
                    <div className="flex flex-col gap-0.5 min-w-0">
                      <span className="text-sm font-sans font-semibold text-foreground truncate">
                        {course.title}
                      </span>
                      <span
                        className="text-xs font-sans text-muted-foreground truncate"
                        title={course.subtitle}
                      >
                        {course.subtitle.length > 50
                          ? `${course.subtitle.slice(0, 50)}…`
                          : course.subtitle}
                      </span>
                    </div>
                  </div>
                </TableCell>

                {/* Instructor */}
                <TableCell className="py-4 px-0 min-w-0">
                  <div className="flex items-center gap-2.5 min-w-0 pr-4">
                    <div className="size-7 rounded-full bg-muted overflow-hidden shrink-0">
                      {course.instructor.avatar ? (
                        <Image
                          src={course.instructor.avatar}
                          alt={course.instructor.name}
                          width={28}
                          height={28}
                          className="w-full h-full object-cover"
                          unoptimized
                        />
                      ) : null}
                    </div>
                    <span className="text-[13px] font-sans font-medium text-foreground/80 truncate">
                      {course.instructor.name}
                    </span>
                  </div>
                </TableCell>

                {/* Category */}
                <TableCell className="py-4 px-0 min-w-0">
                  <div className="pr-4">
                    <span className="text-[13px] font-sans text-foreground/70">
                      {course.category}
                    </span>
                  </div>
                </TableCell>

                {/* Level */}
                <TableCell className="py-4 px-0 min-w-0">
                  <div className="pr-4">
                    <LevelBadge level={course.level} />
                  </div>
                </TableCell>

                {/* Students */}
                <TableCell className="py-4 px-0 min-w-0">
                  <div className="pr-4">
                    <span className="text-[13px] font-sans text-foreground/70">
                      {course.students.toLocaleString()}
                    </span>
                  </div>
                </TableCell>

                {/* Rating */}
                <TableCell className="py-4 px-0 min-w-0">
                  <div className="flex items-center gap-1 pr-4">
                    <span className="text-xs font-sans font-semibold text-foreground">
                      {course.rating}
                    </span>
                    <Star className="size-3 fill-foreground text-foreground shrink-0" />
                  </div>
                </TableCell>

                {/* Status */}
                <TableCell className="py-4 px-0 min-w-0">
                  <div className="pr-4">
                    <StatusBadge status={course.status} />
                  </div>
                </TableCell>

                {/* Created At */}
                <TableCell className="py-4 px-0 min-w-0">
                  <div className="pr-4">
                    <span className="text-[13px] font-sans text-muted-foreground">
                      {course.createdAt}
                    </span>
                  </div>
                </TableCell>

                {/* Actions */}
                <TableCell className="py-4 px-6 text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7 rounded-md border-border bg-transparent hover:bg-muted text-muted-foreground transition-colors shadow-none"
                      >
                        <MoreHorizontal className="size-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit course</DropdownMenuItem>
                      <DropdownMenuItem>View analytics</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        Delete course
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination Footer */}
      <div className="flex items-center justify-between p-5 border-t border-border">
        <span className="text-sm font-sans text-muted-foreground">
          Showing 1 to 8 of 258 courses
        </span>

        <Pagination className="mx-0 w-auto">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                className="h-8 rounded-md border border-border"
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#"
                isActive
                className="h-8 w-8 rounded-md bg-black text-white hover:bg-black/90"
              >
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#"
                className="h-8 w-8 rounded-md border border-border"
              >
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#"
                className="h-8 w-8 rounded-md border border-border"
              >
                3
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#"
                className="h-8 w-8 rounded-md border border-border"
              >
                32
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext
                href="#"
                className="h-8 rounded-md border border-border"
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>

        <div className="flex items-center gap-3">
          <span className="text-sm font-sans text-muted-foreground">
            Rows per page
          </span>
          <Select defaultValue="10">
            <SelectTrigger className="w-[70px] h-8 bg-white border-border text-sm font-sans font-medium text-foreground">
              <SelectValue placeholder="10" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="50">50</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}

function LevelBadge({ level }: { level: AdminCourseListItem["level"] }) {
  const styles = {
    Beginner: "bg-emerald-50 text-emerald-500 hover:bg-emerald-50/80",
    Intermediate: "bg-amber-50 text-amber-500 hover:bg-amber-50/80",
    Advanced: "bg-indigo-50 text-indigo-500 hover:bg-indigo-50/80",
  };
  return (
    <Badge
      variant="secondary"
      className={cn(
        "rounded-sm py-0.5 px-2 text-xs font-sans font-semibold border-transparent",
        styles[level],
      )}
    >
      {level}
    </Badge>
  );
}

function StatusBadge({ status }: { status: AdminCourseListItem["status"] }) {
  const styles = {
    Published:
      "bg-emerald-50 border-emerald-100 text-emerald-500 hover:bg-emerald-50/80 before:bg-emerald-500",
    Draft:
      "bg-muted border-border text-foreground/70 hover:bg-muted/80 before:bg-foreground/50",
    Archived:
      "bg-red-50 border-red-100 text-red-500 hover:bg-red-50/80 before:bg-red-500",
  };
  return (
    <Badge
      variant="outline"
      className={cn(
        "flex items-center rounded-full py-0.5 px-2 gap-1.5 border text-xs font-sans font-semibold before:size-1.5 before:rounded-full w-fit",
        styles[status],
      )}
    >
      {status}
    </Badge>
  );
}
