"use client";

import { Button } from "@/components/ui/button";

interface CourseHeaderProps {
  course: {
    title: string;
    description: string;
    rating: number;
    reviewsCount: number;
    studentsCount: string;
    level: string;
    duration: string;
    thumbnail: string;
    badge?: string;
  };
}

export function CourseHeader({ course }: CourseHeaderProps) {
  return (
    <div className="flex-1 flex items-start gap-12">
      <div className="relative w-85 h-52.5 shrink-0 rounded-xl overflow-clip items-center flex gap-1 shadow-card">
        <div 
          className="w-full h-full bg-cover bg-center shrink-0" 
          style={{ backgroundImage: `url(${course.thumbnail})` }} 
        />
        {course.badge && (
          <div className="absolute top-3 left-3 rounded-[50px] py-1 px-3 bg-canvas border border-solid border-black/5 shadow-subtle">
            <div className="text-ink-secondary font-sans font-bold text-[11px] leading-[14px]">
              {course.badge}
            </div>
          </div>
        )}
      </div>
      
      <div className="grow shrink basis-[0%] flex flex-col">
        <h1 className="text-[38px] tracking-[-0.01em] leading-[round(up,120%,1px)] text-ink font-heading font-bold m-0">
          {course.title}
        </h1>
        <div className="mt-3.5 mb-7 text-[16px] leading-[round(up,155%,1px)] max-w-130 text-text-description font-sans mx-0">
          {course.description}
        </div>
        <div className="flex items-center mb-9 gap-4 w-131">
          <div className="flex items-center gap-1.5">
            <div className="inline-block text-ink font-sans font-bold text-sm leading-[18px]">
              {course.rating}
            </div>
            <svg width="14" height="14" viewBox="0 0 24 24" className="fill-ink" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0' }}>
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <div className="inline-block text-text-muted font-sans text-sm leading-[18px]">
              ({course.reviewsCount})
            </div>
          </div>
          <div className="text-text-dim font-sans text-sm leading-[18px]">•</div>
          <div className="text-text-secondary font-sans text-sm leading-[18px]">{course.studentsCount} Students</div>
          <div className="text-text-dim font-sans text-sm leading-[18px]">•</div>
          <div className="text-text-secondary font-sans text-sm leading-[18px]">{course.level}</div>
          <div className="text-text-dim font-sans text-sm leading-[18px]">•</div>
          <div className="text-text-secondary font-sans text-sm leading-[18px]">{course.duration}</div>
        </div>
        
        <div className="flex gap-4">
          <Button className="rounded-lg py-3.5 px-8 h-auto bg-ink text-canvas cursor-pointer hover:opacity-90 font-sans font-bold text-sm leading-[18px] tracking-[0.01em]">
            Continue Learning
          </Button>
          <Button variant="outline" className="flex items-center rounded-lg py-3.5 px-8 h-auto gap-2.5 bg-canvas border-[1.5px] border-solid border-border-alt cursor-pointer hover:bg-surface font-sans font-bold text-sm leading-[18px] text-ink">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="stroke-ink" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0' }}>
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
            </svg>
             Save Course
          </Button>
        </div>
      </div>
    </div>
  );
}
