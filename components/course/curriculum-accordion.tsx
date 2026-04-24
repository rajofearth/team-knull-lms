"use client";

import { Check, ChevronUp, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

interface Lesson {
  id: string;
  title: string;
  duration: string;
  isCompleted: boolean;
  isActive?: boolean;
}

interface Module {
  id: string;
  title: string;
  lessonsCompleted: number;
  totalLessons: number;
  lessons: Lesson[];
}

interface CurriculumAccordionProps {
  modules: Module[];
}

export function CurriculumAccordion({ modules }: CurriculumAccordionProps) {
  return (
    <Accordion type="multiple" defaultValue={[modules[0].id]} className="w-70 shrink-0 flex flex-col gap-4">
      {modules.map((module) => (
        <AccordionItem 
          key={module.id} 
          value={module.id}
          className="rounded-xl overflow-hidden bg-white border border-border shadow-subtle data-[state=open]:shadow-md transition-shadow"
        >
          <AccordionTrigger hideIcon className="flex justify-between items-center py-4.5 px-5 bg-white hover:no-underline group">
            <div className="flex justify-between items-center w-full pr-4">
              <span className="text-ink font-sans font-bold text-[13px]">
                {module.title}
              </span>
              <div className="flex items-center gap-2.5">
                <span className="text-text-dim font-sans font-semibold text-xs">
                  {module.lessonsCompleted} / {module.totalLessons}
                </span>
                <ChevronDown className="size-3.5 text-text-muted transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-0">
            <div className="flex flex-col">
              {module.lessons.map((lesson) => (
                <div 
                  key={lesson.id}
                  className={cn(
                    "flex items-center justify-between py-3.75 px-5 border-t border-surface",
                    lesson.isActive && "bg-surface"
                  )}
                >
                  <div className="flex items-center gap-3">
                    {lesson.isCompleted ? (
                      <Check className="size-4 text-success" strokeWidth={2.5} />
                    ) : (
                      <div className="size-4 rounded-full border-2 border-border-dark" />
                    )}
                    <span className={cn(
                      "font-sans text-[13px]",
                      lesson.isActive ? "text-ink font-bold" : "text-text-secondary font-medium"
                    )}>
                      {lesson.title}
                    </span>
                  </div>
                  <span className={cn(
                    "w-10 font-sans text-xs shrink-0 text-right",
                    lesson.isActive ? "text-text-muted font-semibold" : "text-text-dim"
                  )}>
                    {lesson.duration}
                  </span>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
