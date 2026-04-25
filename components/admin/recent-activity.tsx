import { FileText, User, Award, Users, RefreshCw } from "lucide-react";
import type { ActivityItem } from "@/lib/data/admin";

interface RecentActivityProps {
  items: ActivityItem[];
}

const activityIconMap = {
  course:      FileText,
  enrollment:  User,
  certificate: Award,
  instructor:  Users,
  update:      RefreshCw,
};

export function RecentActivity({ items }: RecentActivityProps) {
  return (
    <div className="flex-1 flex flex-col rounded-md bg-white border border-border p-5 gap-5 min-w-0">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="font-heading font-semibold text-lg text-foreground">Recent Activity</h3>
        <button className="rounded-md py-1.5 px-3 border border-border hover:bg-muted transition-colors">
          <span className="text-xs font-sans font-semibold text-foreground/70">View All</span>
        </button>
      </div>

      {/* List */}
      <div className="flex flex-col gap-5">
        {items.map((item) => {
          const Icon = activityIconMap[item.type] ?? FileText;
          return (
            <div key={item.id} className="flex gap-3 items-start">
              <div className="size-8 rounded-lg bg-muted flex items-center justify-center shrink-0">
                <Icon className="size-4 text-foreground/70" />
              </div>
              <div className="flex flex-col gap-0.5 min-w-0">
                <span className="text-[13px] font-sans font-medium text-foreground leading-snug">{item.message}</span>
                <span className="text-xs font-sans text-muted-foreground">{item.time}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
