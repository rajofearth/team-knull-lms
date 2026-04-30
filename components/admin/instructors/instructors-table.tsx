"use client";

import { ChevronLeft, ChevronRight, MoreHorizontal, Star } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { AdminInstructorListItem } from "@/lib/lms/types";
import { cn } from "@/lib/utils";

const avatarColors = [
  "bg-indigo-100 text-indigo-700",
  "bg-emerald-100 text-emerald-700",
  "bg-orange-100 text-orange-700",
  "bg-blue-100 text-blue-700",
  "bg-amber-100 text-amber-700",
];

export function InstructorsTable({
  data,
}: {
  data: AdminInstructorListItem[];
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.max(1, Math.ceil(data.length / itemsPerPage));
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = data.slice(startIndex, startIndex + itemsPerPage);

  const getAvatarColor = (_name: string, index: number) => {
    return avatarColors[index % avatarColors.length];
  };

  return (
    <div className="rounded-md border border-border bg-white shadow-sm overflow-hidden">
      <Table>
        <TableHeader className="bg-muted/30">
          <TableRow className="hover:bg-transparent border-b border-border">
            <TableHead className="w-[280px] h-11 text-[11px] font-bold font-sans text-muted-foreground uppercase tracking-wider">
              Instructor
            </TableHead>
            <TableHead className="h-11 text-[11px] font-bold font-sans text-muted-foreground uppercase tracking-wider">
              Email
            </TableHead>
            <TableHead className="h-11 text-center text-[11px] font-bold font-sans text-muted-foreground uppercase tracking-wider">
              Courses
            </TableHead>
            <TableHead className="h-11 text-center text-[11px] font-bold font-sans text-muted-foreground uppercase tracking-wider">
              Enrollments
            </TableHead>
            <TableHead className="h-11 text-center text-[11px] font-bold font-sans text-muted-foreground uppercase tracking-wider">
              Rating
            </TableHead>
            <TableHead className="h-11 text-center text-[11px] font-bold font-sans text-muted-foreground uppercase tracking-wider">
              Status
            </TableHead>
            <TableHead className="h-11 text-[11px] font-bold font-sans text-muted-foreground uppercase tracking-wider">
              Joined
            </TableHead>
            <TableHead className="w-[80px] h-11 text-right text-[11px] font-bold font-sans text-muted-foreground uppercase tracking-wider">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.length > 0 ? (
            paginatedData.map((instructor, index) => {
              const initials = instructor.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase();

              return (
                <TableRow
                  key={instructor.id}
                  className="hover:bg-muted/20 border-b border-border last:border-0 transition-colors"
                >
                  <TableCell className="py-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="size-10 rounded-full border border-border">
                        <AvatarImage
                          src={instructor.avatar}
                          alt={instructor.name}
                        />
                        <AvatarFallback
                          className={cn(
                            "text-xs font-bold",
                            getAvatarColor(instructor.name, index),
                          )}
                        >
                          {initials}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col gap-0.5">
                        <span className="text-sm font-semibold font-heading text-foreground">
                          {instructor.name}
                        </span>
                        <span className="text-[11px] font-sans text-muted-foreground font-medium">
                          {instructor.handle}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="py-4">
                    <span className="text-sm font-sans text-muted-foreground">
                      {instructor.email}
                    </span>
                  </TableCell>
                  <TableCell className="py-4 text-center">
                    <span className="text-sm font-sans font-medium text-foreground">
                      {instructor.courses}
                    </span>
                  </TableCell>
                  <TableCell className="py-4 text-center">
                    <span className="text-sm font-sans font-medium text-foreground">
                      {instructor.enrollments.toLocaleString()}
                    </span>
                  </TableCell>
                  <TableCell className="py-4 text-center">
                    <div className="flex items-center justify-center gap-1.5">
                      <span className="text-sm font-sans font-bold text-foreground">
                        {instructor.rating.toFixed(1)}
                      </span>
                      <Star className="size-3.5 fill-foreground text-foreground" />
                    </div>
                  </TableCell>
                  <TableCell className="py-4 text-center">
                    <Badge
                      className={cn(
                        "rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider border-none shadow-none",
                        instructor.status === "Active"
                          ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-100/80"
                          : "bg-red-100 text-red-700 hover:bg-red-100/80",
                      )}
                    >
                      {instructor.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="py-4">
                    <span className="text-sm font-sans text-muted-foreground whitespace-nowrap font-medium">
                      {instructor.joinedDate}
                    </span>
                  </TableCell>
                  <TableCell className="py-4 text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          className="size-8 p-0 hover:bg-muted"
                        >
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="size-4 text-muted-foreground" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        align="end"
                        className="rounded-md border-border"
                      >
                        <DropdownMenuItem className="text-xs font-medium font-sans rounded-sm">
                          View profile
                        </DropdownMenuItem>
                        <Link href={`/admin/instructors/${instructor.id}/edit`}>
                          <DropdownMenuItem className="text-xs font-medium font-sans rounded-sm cursor-pointer">
                            Edit instructor
                          </DropdownMenuItem>
                        </Link>
                        <DropdownMenuItem className="text-xs font-medium font-sans text-red-600 rounded-sm">
                          Deactivate
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              );
            })
          ) : (
            <TableRow>
              <TableCell
                colSpan={8}
                className="h-32 text-center text-muted-foreground text-sm"
              >
                No instructors found matching your search.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="flex items-center justify-between border-t border-border px-6 py-4 bg-muted/5">
        <span className="text-[11px] font-sans text-muted-foreground font-medium">
          Showing {data.length > 0 ? startIndex + 1 : 0} to{" "}
          {Math.min(startIndex + itemsPerPage, data.length)} of {data.length}{" "}
          results
        </span>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className="h-8 w-8 p-0 rounded-md border-border bg-white"
          >
            <ChevronLeft className="size-4" />
          </Button>
          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }).map((_, i) => {
              const pageNumber = i + 1;
              return (
                <Button
                  key={pageNumber}
                  variant={currentPage === pageNumber ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentPage(pageNumber)}
                  className={cn(
                    "h-8 w-8 p-0 rounded-md text-xs font-bold",
                    currentPage === pageNumber
                      ? "bg-foreground text-background"
                      : "border-border bg-white text-muted-foreground",
                  )}
                >
                  {pageNumber}
                </Button>
              );
            })}
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              setCurrentPage((prev) => Math.min(totalPages, prev + 1))
            }
            disabled={currentPage === totalPages}
            className="h-8 w-8 p-0 rounded-md border-border bg-white"
          >
            <ChevronRight className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
