"use client";

import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import type { Lesson, Module } from "@/lib/data/courses";
import { cn } from "@/lib/utils";

interface CurriculumSidebarProps {
  modules: Module[];
  activeLessonId?: string;
  onLessonSelect?: (lesson: Lesson) => void;
}

export function CurriculumSidebar({
  modules,
  activeLessonId,
  onLessonSelect,
}: CurriculumSidebarProps) {
  const [expandedModules, setExpandedModules] = useState<string[]>(["m1"]);

  const toggleModule = (moduleId: string) => {
    setExpandedModules((prev) =>
      prev.includes(moduleId)
        ? prev.filter((id) => id !== moduleId)
        : [...prev, moduleId],
    );
  };

  return (
    <div className="w-80 shrink-0 flex flex-col gap-4">
      {modules.map((module) => {
        const isExpanded = expandedModules.includes(module.id);

        return (
          <div
            key={module.id}
            className="flex flex-col gap-0 rounded-xl overflow-clip bg-canvas border border-solid border-border-subtle shadow-subtle"
          >
            <Button
              type="button"
              variant="ghost"
              className={cn(
                "h-auto justify-between rounded-none bg-canvas px-5 py-4.5 hover:bg-surface",
                isExpanded && "border-b border-b-solid border-surface-dim",
              )}
              onClick={() => toggleModule(module.id)}
            >
              <div className="inline-block text-ink font-sans font-bold text-sm">
                {module.title}
              </div>
              <div className="flex items-center gap-2.5">
                <div className="inline-block text-text-dim font-sans font-semibold text-xs">
                  {module.lessonsCompleted} / {module.totalLessons}
                </div>
                {isExpanded ? (
                  <ChevronUp className="size-3.5 text-text-secondary" />
                ) : (
                  <ChevronDown className="size-3.5 text-text-muted" />
                )}
              </div>
            </Button>

            {isExpanded && (
              <div className="flex flex-col">
                {module.lessons.map((lesson) => {
                  const isActive = lesson.id === activeLessonId;

                  return (
                    <Button
                      type="button"
                      key={lesson.id}
                      variant="ghost"
                      className={cn(
                        "group h-auto w-full justify-between rounded-none border-b border-solid border-surface-dim px-5 py-4 text-left hover:bg-surface",
                        isActive && "bg-surface",
                      )}
                      onClick={() => onLessonSelect?.(lesson)}
                    >
                      <div className="flex items-center gap-3">
                        {lesson.isCompleted ? (
                          <Check
                            className="size-4 text-success shrink-0"
                            strokeWidth={2.5}
                          />
                        ) : (
                          <div className="size-4 rounded-full border-2 border-border-dark shrink-0" />
                        )}
                        <div
                          className={cn(
                            "inline-block font-sans text-sm group-hover:text-ink transition-colors",
                            isActive
                              ? "text-ink font-bold"
                              : "text-text-secondary font-medium",
                          )}
                        >
                          {lesson.title}
                        </div>
                      </div>
                      <div
                        className={cn(
                          "inline-block font-sans shrink-0 text-xs",
                          isActive
                            ? "text-text-muted font-semibold"
                            : "text-text-dim",
                        )}
                      >
                        {lesson.duration}
                      </div>
                    </Button>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
