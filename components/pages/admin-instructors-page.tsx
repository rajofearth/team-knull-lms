"use client";

import { useQuery } from "convex/react";
import { Filter, Plus, Search } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { DashboardStatCard } from "@/components/admin/dashboard-stat-card";
import { InstructorsTable } from "@/components/admin/instructors/instructors-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { api } from "@/convex/_generated/api";
import type { AdminInstructorsPageData } from "@/lib/lms/types";

export function AdminInstructorsPageClient({
  initialData,
}: {
  initialData: AdminInstructorsPageData;
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  // Use proper Convex reactive query
  const liveData = useQuery(api.lms.getAdminInstructors);
  const data = liveData ?? initialData;

  const filteredInstructors = useMemo(() => {
    return data.instructors.filter((instructor) => {
      const matchesSearch =
        instructor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        instructor.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        instructor.handle.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesStatus =
        statusFilter === "all" ||
        instructor.status.toLowerCase() === statusFilter.toLowerCase();

      return matchesSearch && matchesStatus;
    });
  }, [data.instructors, searchQuery, statusFilter]);

  return (
    <div className="flex min-h-full min-w-0 flex-col gap-8 px-4 py-8 md:px-10">
      {/* Header section */}
      <div className="flex flex-wrap items-center justify-between gap-6">
        <div className="flex flex-col gap-1.5">
          <h1 className="m-0 text-3xl leading-tight font-heading font-bold text-foreground">
            Instructors
          </h1>
          <p className="m-0 text-sm font-sans text-muted-foreground">
            Manage and view all instructors on your platform.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative w-full sm:w-[320px]">
            <Search className="absolute top-1/2 left-3.5 size-4 shrink-0 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search instructors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-10 border-border bg-white pl-10 rounded-md"
            />
          </div>

          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="h-10 w-[130px] border-border bg-white rounded-md">
              <div className="flex items-center gap-2">
                <Filter className="size-4 shrink-0 text-muted-foreground" />
                <SelectValue placeholder="Filter" />
              </div>
            </SelectTrigger>
            <SelectContent className="rounded-md border-border">
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>

          <Link href="/admin/instructors/add">
            <Button className="flex h-10 items-center gap-2 px-5 py-2 rounded-md bg-foreground text-background hover:bg-foreground/90">
              <Plus className="size-4 shrink-0" strokeWidth={2.5} />
              <span className="text-sm font-semibold font-sans">
                Add Instructor
              </span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {data.statCards.map((card) => (
          <DashboardStatCard key={card.id} card={card} />
        ))}
      </div>

      {/* Table section */}
      <div className="flex min-w-0 flex-col">
        <InstructorsTable data={filteredInstructors} />
      </div>
    </div>
  );
}
