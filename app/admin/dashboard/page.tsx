"use client";

import { useState } from "react";
import { Calendar, ChevronDown } from "lucide-react";
import {
  statCards,
  enrollmentOverview,
  topCourses,
  studentsByCountry,
  totalStudents,
  newInstructors,
  recentActivity,
} from "@/lib/data/admin";
import { DashboardStatCard } from "@/components/admin/dashboard-stat-card";
import { EnrollmentChart } from "@/components/admin/enrollment-chart";
import { TopCourses } from "@/components/admin/top-courses";
import { StudentsCountry } from "@/components/admin/students-country";
import { NewInstructors } from "@/components/admin/new-instructors";
import { RecentActivity } from "@/components/admin/recent-activity";

export default function AdminDashboardPage() {
  const [dateRange] = useState("May 1 – May 31, 2024");

  return (
    <div className="flex flex-col px-10 py-5 gap-5 min-h-full">
      {/* Page header */}
      <div className="flex items-center justify-between h-[50px] shrink-0">
        <div className="flex flex-col gap-1">
          <h1 className="font-heading font-semibold text-2xl text-foreground m-0 leading-tight">
            Dashboard
          </h1>
          <p className="text-xs font-sans text-muted-foreground m-0">
            Welcome back! Here&apos;s what&apos;s happening with your learning platform.
          </p>
        </div>

        {/* Date range picker (decorative) */}
        <button className="flex items-center gap-2.5 rounded-md py-2.5 px-4 bg-white border border-border hover:bg-muted transition-colors h-[35px]">
          <Calendar className="size-[18px] text-muted-foreground shrink-0" />
          <span className="text-sm font-sans font-medium text-foreground/80">{dateRange}</span>
          <ChevronDown className="size-4 text-muted-foreground shrink-0" />
        </button>
      </div>

      {/* ── Row 1: Stat Cards ── */}
      <div className="flex gap-5">
        {statCards.map((card) => (
          <DashboardStatCard key={card.id} card={card} />
        ))}
      </div>

      {/* ── Row 2: Enrollment chart + Top Courses ── */}
      <div className="flex gap-5">
        <div className="w-[703px] shrink-0">
          <EnrollmentChart data={enrollmentOverview} />
        </div>
        <TopCourses courses={topCourses} />
      </div>

      {/* ── Row 3: Students by Country + New Instructors + Recent Activity ── */}
      <div className="flex gap-5 pb-5">
        <StudentsCountry data={studentsByCountry} total={totalStudents} />
        <NewInstructors instructors={newInstructors} />
        <RecentActivity items={recentActivity} />
      </div>
    </div>
  );
}
