"use client";

import React from "react";
import { Check, ChevronUp, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Module } from "@/lib/data/courses";

interface CurriculumSidebarProps {
  modules: Module[];
}

export function CurriculumSidebar({ modules }: CurriculumSidebarProps) {
  return (
    <div className="w-80 shrink-0 flex flex-col gap-4">
      {modules.map((module) => (
        <div key={module.id} className="flex flex-col gap-4">
          {module.lessons.length > 0 ? (
            <div className="rounded-xl overflow-clip bg-canvas border border-solid border-border-subtle shadow-subtle">
              <div className="flex justify-between items-start py-4.5 px-5 bg-canvas border-b border-b-solid border-surface-dim">
                <div className="inline-block text-ink font-sans font-bold text-[13px] leading-[1.3] pt-0.5">
                  {module.title}
                </div>
                <div className="flex items-center gap-2.5 pt-0.5">
                  <div className="inline-block text-text-muted font-sans font-semibold text-xs">
                    {module.lessonsCompleted} / {module.totalLessons}
                  </div>
                  <ChevronUp className="size-3.5 text-text-secondary" />
                </div>
              </div>
              <div className="flex flex-col">
                {module.lessons.map((lesson) => (
                  <div 
                    key={lesson.id} 
                    className={cn(
                      "flex items-start justify-between py-3.75 px-5 border-b border-b-solid border-surface-dim cursor-pointer hover:bg-surface",
                      lesson.isActive && "bg-surface"
                    )}
                  >
                    <div className="flex items-start gap-3">
                      {lesson.isCompleted ? (
                        <Check className="size-4 text-success mt-0.5" strokeWidth={2.5} />
                      ) : (
                        <div className="size-4 rounded-full border-2 border-border-dark mt-0.5" />
                      )}
                      <div className={cn(
                        "inline-block font-sans text-[13px] leading-[1.4]",
                        lesson.isActive ? "text-ink font-bold" : "text-text-secondary font-medium"
                      )}>
                        {lesson.title}
                      </div>
                    </div>
                    <div className={cn(
                      "inline-block font-sans shrink-0 text-xs mt-0.5",
                      lesson.isActive ? "text-text-muted font-semibold" : "text-text-dim"
                    )}>
                      {lesson.duration}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex justify-between items-start rounded-xl py-4.5 px-5 bg-canvas border border-solid border-border-subtle shadow-subtle cursor-pointer hover:shadow-subtle transition-shadow">
              <div className="inline-block text-ink-secondary font-sans font-bold text-[13px] leading-[1.3]">
                {module.title}
              </div>
              <div className="flex items-center gap-2.5 pt-0.5">
                <div className="inline-block text-text-muted font-sans font-semibold text-xs">
                  {module.lessonsCompleted} / {module.totalLessons}
                </div>
                <ChevronDown className="size-3.5 text-text-muted" />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
