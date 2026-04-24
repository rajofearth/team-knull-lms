"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface CourseTabsProps {
  activeTab: string;
}

export function CourseTabs({ activeTab }: CourseTabsProps) {
  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "curriculum", label: "Curriculum" },
    { id: "instructor", label: "Instructor" },
    { id: "reviews", label: "Reviews (892)" },
    { id: "qa", label: "Q&A" },
  ];

  return (
    <div className="flex mt-6 w-full px-20 gap-10 border-b border-b-solid border-border">
      {tabs.map((tab) => (
        <div 
          key={tab.id} 
          className={cn(
            "relative py-4 cursor-pointer",
            activeTab === tab.id && "border-b-[3px] border-b-solid border-ink-deep"
          )}
        >
          <div className={cn(
            "font-sans text-sm leading-none",
            activeTab === tab.id ? "text-ink-deep font-semibold" : "text-text-muted font-medium"
          )}>
            {tab.label}
          </div>
        </div>
      ))}
    </div>
  );
}
