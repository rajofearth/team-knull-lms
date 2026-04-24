"use client";

import { FileText, Grid, Clock, Trophy, Check } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface ProgressStat {
  label: string;
  value: string | number;
  icon: React.ElementType;
  color?: string;
}

interface CourseProgressCardProps {
  progress: number;
  stats: ProgressStat[];
}

export function CourseProgressCard({ progress, stats }: CourseProgressCardProps) {
  return (
    <div className="w-[330px] shrink-0 rounded-xl bg-canvas border-[1.5px] border-border shadow-subtle p-7">
      <div className="flex justify-between items-baseline mb-3">
        <h3 className="tracking-wider text-ink font-sans font-extrabold text-[13px] uppercase">
          Your Progress
        </h3>
        <span className="text-text-muted font-sans font-semibold text-[11px]">
          {progress}% Complete
        </span>
      </div>
      
      <Progress value={progress} className="h-1.25 mb-8 bg-border" />

      <div className="flex flex-col gap-4.5">
        {stats.map((stat, index) => (
          <div key={index} className="flex justify-between items-center">
            <div className="flex items-center gap-3.5">
              <stat.icon className="size-[18px] text-ink" strokeWidth={1.5} />
              <span className="text-text-secondary font-sans font-medium text-[13px]">
                {stat.label}
              </span>
            </div>
            <span className={`font-sans font-semibold text-[13px] ${stat.color || "text-ink-deep"}`}>
              {stat.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
