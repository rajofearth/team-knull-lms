"use client";

import { Check, ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";
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
            <div
              className={cn(
                "flex justify-between items-center py-4.5 px-5 bg-canvas cursor-pointer hover:bg-surface transition-colors",
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
            </div>

            {isExpanded && (
              <div className="flex flex-col">
                {module.lessons.map((lesson) => {
                  const isActive = lesson.id === activeLessonId;

                  return (
                    <div
                      key={lesson.id}
                      className={cn(
                        "flex items-center justify-between py-4 px-5 border-b border-solid border-surface-dim cursor-pointer hover:bg-surface group",
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
                    </div>
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
