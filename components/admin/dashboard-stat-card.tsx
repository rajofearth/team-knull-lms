import {
  BookOpen,
  Database,
  DollarSign,
  Mail,
  Monitor,
  Star,
  TrendingDown,
  TrendingUp,
  User,
  Users,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { DashboardStatCardData } from "@/lib/lms/types";
import { cn } from "@/lib/utils";

const iconMap = {
  users: Users,
  book: BookOpen,
  user: User,
  monitor: Monitor,
  dollar: DollarSign,
  star: Star,
  database: Database,
  mail: Mail,
};

interface StatCardProps {
  card: DashboardStatCardData;
}

export function DashboardStatCard({ card }: StatCardProps) {
  const Icon = iconMap[card.icon];

  return (
    <Card className="flex-1 min-w-0 rounded-md bg-white border border-border shadow-none ring-0 p-0">
      <CardContent className="flex flex-col gap-4 p-5">
        {/* Label row */}
        <div className="flex items-center gap-2.5">
          <div className="size-8 rounded-lg bg-muted flex items-center justify-center shrink-0">
            <Icon className="size-[18px] text-foreground" />
          </div>
          <span className="text-sm font-sans font-medium text-muted-foreground">
            {card.label}
          </span>
        </div>

        {/* Value + badge */}
        <div className="flex flex-col gap-2">
          <span className="text-2xl font-heading font-bold text-foreground">
            {card.value}
          </span>
          <div className="flex items-center gap-2">
            <span
              className={cn(
                "flex items-center gap-1 rounded-sm py-0.5 px-1.5 text-xs font-semibold font-sans",
                card.trend === "up"
                  ? "bg-emerald-50 text-emerald-700"
                  : "bg-red-50 text-red-600",
              )}
            >
              {card.trend === "up" ? (
                <TrendingUp className="size-3 shrink-0" />
              ) : (
                <TrendingDown className="size-3 shrink-0" />
              )}
              {card.badge}
            </span>
            <span className="text-xs font-sans font-medium text-emerald-700">
              {card.secondary}
            </span>
          </div>
        </div>

        {/* Comparison */}
        <span className="text-xs font-sans font-medium text-muted-foreground">
          {card.comparison}
        </span>
      </CardContent>
    </Card>
  );
}
