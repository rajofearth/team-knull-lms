"use client";

import { Plus, Search, Filter, Download } from "lucide-react";
import { CoursesTable } from "@/components/admin/courses/courses-table";
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
        <button className="flex items-center gap-2 rounded-md h-8 justify-center bg-black hover:bg-black/80 transition-colors px-4 py-2">
          <Plus className="size-4 text-white shrink-0" strokeWidth={2.5} />
          <span className="text-white font-sans text-xs font-medium">Add Course</span>
        </button>
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between mb-1">
        {/* Tabs */}
        <div className="flex gap-6 border-b border-transparent">
          {["All Courses", "Published", "Draft", "Archived"].map((tab, i) => (
            <div
              key={tab}
              className={`pb-2 ${
                i === 0
                  ? "border-b-2 border-black"
                  : ""
              } cursor-pointer`}
            >
              <span
                className={`font-sans text-sm ${
                  i === 0
                    ? "font-semibold text-foreground"
                    : "font-medium text-muted-foreground hover:text-foreground/80"
                } transition-colors`}
              >
                {tab}
              </span>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <div className="flex items-center w-70 rounded-md gap-2.5 pl-3 pr-4 bg-white border border-border shrink-0 py-2">
            <Search className="size-4 text-muted-foreground shrink-0" />
            <input
              type="text"
              placeholder="Search courses..."
              className="bg-transparent border-none outline-none text-sm font-sans placeholder:text-muted-foreground w-full text-foreground"
            />
          </div>
          <button className="flex items-center rounded-md py-2 px-4 gap-2 bg-white border border-border hover:bg-muted transition-colors">
            <Filter className="size-4 text-foreground/80 shrink-0" />
            <span className="font-sans font-medium text-sm text-foreground/80">Filter</span>
          </button>
          <button className="flex items-center rounded-md py-2 px-4 gap-2 bg-white border border-border hover:bg-muted transition-colors">
            <Download className="size-4 text-foreground/80 shrink-0" />
            <span className="font-sans font-medium text-sm text-foreground/80">Export</span>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="flex flex-col gap-5">
        <CoursesTable data={adminCoursesData} />
      </div>
    </div>
  );
}
