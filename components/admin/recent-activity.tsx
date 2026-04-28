import {
  Award,
  BookOpen,
  FileText,
  MoreHorizontal,
  RefreshCw,
  UserPlus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { ActivityItemData } from "@/lib/lms/types";

interface RecentActivityProps {
  activities: ActivityItemData[];
}

const activityIconMap = {
  course: BookOpen,
  enrollment: UserPlus,
  certificate: Award,
  instructor: UserPlus,
  update: RefreshCw,
};

export function RecentActivity({ activities }: RecentActivityProps) {
  return (
    <Card className="flex-[1.5] min-w-0 rounded-md bg-white border border-border shadow-none ring-0 p-0">
      <CardContent className="flex flex-col gap-5 p-5">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h3 className="font-heading font-semibold text-lg text-foreground">
            Recent Activity
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
              <DropdownMenuItem>View all activity</DropdownMenuItem>
              <DropdownMenuItem>Export logs</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* List */}
        <div className="flex flex-col gap-5">
          {activities.map((item) => {
            const Icon = activityIconMap[item.type] ?? FileText;
            return (
              <div key={item.id} className="flex gap-3 items-start">
                <div className="size-8 rounded-lg bg-muted flex items-center justify-center shrink-0">
                  <Icon className="size-4 text-foreground/70" />
                </div>
                <div className="flex flex-col gap-0.5 min-w-0">
                  <span className="text-[13px] font-sans font-medium text-foreground leading-snug">
                    {item.message}
                  </span>
                  <span className="text-xs font-sans text-muted-foreground">
                    {item.time}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
