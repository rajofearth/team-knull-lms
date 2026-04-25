"use client";

import { cn } from "@/lib/utils";

interface CourseTabsProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export function CourseTabs({ activeTab, onTabChange }: CourseTabsProps) {
  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "curriculum", label: "Curriculum" },
    { id: "instructor", label: "Instructor" },
    { id: "reviews", label: "Reviews (892)" },
    { id: "qa", label: "Q&A" },
  ];

  return (
    <div className="flex mt-6 w-full px-20 gap-10 border-b border-b-solid border-border bg-canvas">
      {tabs.map((tab) => (
        <button
          type="button"
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={cn(
            "relative py-4 cursor-pointer border-none bg-transparent transition-all",
            activeTab === tab.id &&
              "after:absolute after:-bottom-px after:left-0 after:right-0 after:h-[3px] after:bg-ink-deep",
          )}
        >
          <div
            className={cn(
              "font-sans text-sm leading-none transition-colors",
              activeTab === tab.id
                ? "text-ink-deep font-bold"
                : "text-text-muted font-medium hover:text-ink",
            )}
          >
            {tab.label}
          </div>
        </button>
      ))}
    </div>
  );
}
