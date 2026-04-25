import { MoreHorizontal } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { NewInstructor } from "@/lib/data/admin";

interface NewInstructorsProps {
  instructors: NewInstructor[];
}

export function NewInstructors({ instructors }: NewInstructorsProps) {
  return (
    <Card className="flex-[1.5] min-w-0 rounded-md bg-white border border-border shadow-none ring-0 p-0">
      <CardContent className="flex flex-col gap-5 p-5">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h3 className="font-heading font-semibold text-lg text-foreground">
            New Instructors
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
              <DropdownMenuItem>View all instructors</DropdownMenuItem>
              <DropdownMenuItem>Export list</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* List */}
        <div className="flex flex-col gap-4">
          {instructors.map((instructor) => (
            <div
              key={instructor.id}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="size-8 rounded-full bg-muted overflow-hidden shrink-0">
                  {instructor.avatar ? (
                    <Image
                      src={instructor.avatar}
                      alt={instructor.name}
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  ) : (
                    <div className="size-full flex items-center justify-center bg-foreground/10">
                      <span className="text-xs font-semibold text-foreground">
                        {instructor.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex flex-col gap-0.5 min-w-0">
                  <span className="text-sm font-sans font-semibold text-foreground truncate">
                    {instructor.name}
                  </span>
                  <span className="text-xs font-sans text-muted-foreground truncate">
                    {instructor.courses} Courses
                  </span>
                </div>
              </div>
              <span className="text-[13px] font-sans text-muted-foreground shrink-0 pl-2">
                {instructor.joinedDate}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
