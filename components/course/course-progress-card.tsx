"use client";

import type { SVGProps } from "react";
import { cn } from "@/lib/utils";

type StatIconProps = SVGProps<SVGSVGElement>;

interface CourseProgressCardProps {
  progress: {
    percentage: number;
    lessonsCompleted: number;
    totalLessons: number;
    projectsCompleted: number;
    totalProjects: number;
    quizScore: number;
    certificateAvailable: boolean;
  };
}

export function CourseProgressCard({ progress }: CourseProgressCardProps) {
  const stats = [
    {
      label: "Lessons Completed",
      value: `${progress.lessonsCompleted} / ${progress.totalLessons}`,
      icon: (props: StatIconProps) => (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <title>Lessons completed</title>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
    },
    {
      label: "Projects Completed",
      value: `${progress.projectsCompleted} / ${progress.totalProjects}`,
      icon: (props: StatIconProps) => (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <title>Projects completed</title>
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="9" y1="21" x2="9" y2="9" />
        </svg>
      ),
    },
    {
      label: "Quiz Scores",
      value: `${progress.quizScore}%`,
      icon: (props: StatIconProps) => (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <title>Quiz score</title>
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
    {
      label: "Certificate",
      value: progress.certificateAvailable ? "Available" : "Locked",
      icon: (props: StatIconProps) => (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <title>Certificate status</title>
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <path d="M4 22h16" />
          <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
          <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
          <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
        </svg>
      ),
      color: progress.certificateAvailable ? "text-success" : "text-text-muted",
    },
  ];

  return (
    <div className="w-82.5 shrink-0 rounded-xl bg-canvas border-[1.5px] border-solid border-border p-7">
      <div className="flex justify-between items-baseline mb-3">
        <div className="tracking-wide inline-block text-ink font-sans font-extrabold text-sm">
          Your Progress
        </div>
        <div className="inline-block text-text-muted font-sans font-semibold text-xs">
          {progress.percentage}% Complete
        </div>
      </div>

      <div className="w-full h-1.5 mb-8 relative rounded-full overflow-hidden bg-surface-dim">
        <div
          className="h-full rounded-full bg-ink transition-all duration-500"
          style={{ width: `${progress.percentage}%` }}
        />
      </div>

      <div className="flex flex-col gap-5">
        {stats.map((stat) => (
          <div key={stat.label} className="flex justify-between items-center">
            <div className="flex items-center gap-3.5">
              <stat.icon className="size-4 text-ink" />
              <div className="inline-block text-text-description font-sans font-medium text-sm">
                {stat.label}
              </div>
            </div>
            <div
              className={cn(
                "inline-block font-sans font-semibold text-sm",
                stat.color || "text-ink",
              )}
            >
              {stat.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
