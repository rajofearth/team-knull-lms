"use client";

import { Download, Filter, Plus, Search } from "lucide-react";
import Link from "next/link";
import { CoursesTable } from "@/components/admin/courses/courses-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { adminCoursesData } from "@/lib/data/admin";

export default function AdminCoursesPage() {
  return (
    <div className="flex flex-col px-10 py-5 gap-5 min-h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex flex-col gap-1">
          <h1 className="font-heading font-semibold text-2xl text-foreground m-0 leading-tight">
            Courses
          </h1>
          <p className="text-xs font-sans text-muted-foreground m-0">
            Manage and organize all courses on the platform.
          </p>
        </div>
        <Link href="/admin/courses/add">
          <Button className="flex items-center gap-2 h-8 px-4 py-2">
            <Plus className="size-4 shrink-0" strokeWidth={2.5} />
            <span className="font-sans text-xs font-medium">Add Course</span>
          </Button>
        </Link>
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between mb-1">
        {/* Tabs */}
        <Tabs defaultValue="all" className="w-[400px]">
          <TabsList className="bg-transparent border-b border-transparent p-0 h-auto gap-6 rounded-none justify-start w-full">
            {[
              { label: "All Courses", value: "all" },
              { label: "Published", value: "published" },
              { label: "Draft", value: "draft" },
              { label: "Archived", value: "archived" },
            ].map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="pb-2 pt-0 px-0 rounded-none border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:font-semibold font-sans text-sm font-medium text-muted-foreground data-[state=active]:text-foreground hover:text-foreground/80 transition-colors"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <div className="relative w-70">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground shrink-0" />
            <Input
              type="text"
              placeholder="Search courses..."
              className="pl-9 bg-white border-border h-9"
            />
          </div>
          <Button
            variant="outline"
            className="h-9 px-4 gap-2 bg-white border-border"
          >
            <Filter className="size-4 text-foreground/80 shrink-0" />
            <span className="font-sans font-medium text-sm text-foreground/80">
              Filter
            </span>
          </Button>
          <Button
            variant="outline"
            className="h-9 px-4 gap-2 bg-white border-border"
          >
            <Download className="size-4 text-foreground/80 shrink-0" />
            <span className="font-sans font-medium text-sm text-foreground/80">
              Export
            </span>
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="flex flex-col gap-5">
        <CoursesTable data={adminCoursesData} />
      </div>
    </div>
  );
}
