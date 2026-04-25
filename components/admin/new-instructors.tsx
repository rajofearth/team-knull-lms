import Image from "next/image";
import type { NewInstructor } from "@/lib/data/admin";

interface NewInstructorsProps {
  instructors: NewInstructor[];
}

export function NewInstructors({ instructors }: NewInstructorsProps) {
  return (
    <div className="flex-1 flex flex-col rounded-md bg-white border border-border p-5 gap-5 min-w-0">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="font-heading font-semibold text-lg text-foreground">New Instructors</h3>
        <button className="rounded-md py-1.5 px-3 border border-border hover:bg-muted transition-colors">
          <span className="text-xs font-sans font-semibold text-foreground/70">View All</span>
        </button>
      </div>

      {/* List */}
      <div className="flex flex-col gap-4">
        {instructors.map((instructor) => (
          <div key={instructor.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Avatar */}
              <div className="size-9 rounded-full bg-muted overflow-hidden shrink-0">
                {instructor.avatar ? (
                  <Image
                    src={instructor.avatar}
                    alt={instructor.name}
                    width={36}
                    height={36}
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
              <div className="flex flex-col">
                <span className="text-sm font-sans font-semibold text-foreground">{instructor.name}</span>
                <span className="text-xs font-sans text-muted-foreground">{instructor.courses} Courses</span>
              </div>
            </div>
            <span className="text-xs font-sans text-muted-foreground shrink-0">{instructor.joinedDate}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
