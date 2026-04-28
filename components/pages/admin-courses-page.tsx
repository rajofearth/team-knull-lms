"use client";

import { Download, Filter, Plus, Search } from "lucide-react";
import Link from "next/link";
import { CoursesTable } from "@/components/admin/courses/courses-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { AdminCourseListItem } from "@/lib/lms/types";

export function AdminCoursesPageClient({
  courses,
}: {
  courses: AdminCourseListItem[];
}) {
  return (
    <div className="flex min-h-full flex-col gap-5 px-10 py-5">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="m-0 text-2xl leading-tight font-heading font-semibold text-foreground">
            Courses
          </h1>
          <p className="m-0 text-xs font-sans text-muted-foreground">
            Manage and organize all courses on the platform.
          </p>
        </div>
        <Link href="/admin/courses/add">
          <Button className="flex h-8 items-center gap-2 px-4 py-2">
            <Plus className="size-4 shrink-0" strokeWidth={2.5} />
            <span className="text-xs font-medium font-sans">Add Course</span>
          </Button>
        </Link>
      </div>

      <div className="mb-1 flex items-center justify-between">
        <Tabs defaultValue="all" className="w-[400px]">
          <TabsList className="h-auto w-full justify-start gap-6 rounded-none border-b border-transparent bg-transparent p-0">
            {[
              { label: "All Courses", value: "all" },
              { label: "Published", value: "published" },
              { label: "Draft", value: "draft" },
              { label: "Archived", value: "archived" },
            ].map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="rounded-none border-b-2 border-transparent px-0 pt-0 pb-2 text-sm font-medium font-sans text-muted-foreground transition-colors data-[state=active]:border-black data-[state=active]:bg-transparent data-[state=active]:font-semibold data-[state=active]:text-foreground data-[state=active]:shadow-none hover:text-foreground/80"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="flex items-center gap-3">
          <div className="relative w-70">
            <Search className="absolute top-1/2 left-3 size-4 shrink-0 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search courses..."
              className="h-9 border-border bg-white pl-9"
            />
          </div>
          <Button
            variant="outline"
            className="h-9 gap-2 border-border bg-white px-4"
          >
            <Filter className="size-4 shrink-0 text-foreground/80" />
            <span className="text-sm font-medium font-sans text-foreground/80">
              Filter
            </span>
          </Button>
          <Button
            variant="outline"
            className="h-9 gap-2 border-border bg-white px-4"
          >
            <Download className="size-4 shrink-0 text-foreground/80" />
            <span className="text-sm font-medium font-sans text-foreground/80">
              Export
            </span>
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <CoursesTable data={courses} />
      </div>
    </div>
  );
}
