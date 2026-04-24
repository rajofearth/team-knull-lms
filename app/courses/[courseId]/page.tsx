"use client";

import React from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CourseHeader } from "@/components/course/course-header";
import { CourseProgressCard } from "@/components/course/course-progress-card";
import { CourseTabs } from "@/components/course/course-tabs";
import { CurriculumSidebar } from "@/components/course/curriculum-sidebar";
import { VideoPlayer } from "@/components/course/video-player";
import { ResourcesCard } from "@/components/course/resources-card";
import { courses } from "@/lib/data/courses";

export default function CoursePage({ params }: { params: Promise<{ courseId: string }> }) {
  const resolvedParams = React.use(params);
  const courseId = resolvedParams.courseId === "web-dev-bootcamp" ? "web-dev-bootcamp" : "web-dev-bootcamp";
  const courseData = courses[courseId];

  if (!courseData) return <div>Course not found</div>;

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <div className="mx-auto max-w-[1440px] flex flex-col bg-white antialiased text-xs/4">
        <Navbar />
        
        {/* Breadcrumbs */}
        <div className="flex items-center pt-6 gap-2 px-20">
          <div className="inline-block text-text-muted font-sans text-[13px] leading-none">
            Home
          </div>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="stroke-ink-deep" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0' }}>
            <polyline points="9 18 15 12 9 6" />
          </svg>
          <div className="inline-block text-text-muted font-sans text-[13px] leading-none">
            Courses
          </div>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="stroke-ink-deep" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0' }}>
            <polyline points="9 18 15 12 9 6" />
          </svg>
          <div className="inline-block text-ink-secondary font-sans text-[13px] leading-none">
            {courseData.title}
          </div>
        </div>

        <div className="[font-synthesis:none] flex items-start py-8 px-20 gap-12 antialiased">
          <CourseHeader course={courseData} />
          <CourseProgressCard progress={courseData.progress} />
        </div>

        <CourseTabs activeTab="curriculum" />

        {/* Content Area */}
        <div className="flex w-full py-10 px-20 gap-10 bg-surface">
          <CurriculumSidebar modules={courseData.modules} />

          {/* Video and Lesson Content */}
          <div className="grow shrink basis-[0%] flex flex-col gap-8">
            <VideoPlayer />
            
            <div className="">
              <h2 className="tracking-tight text-ink font-heading font-bold m-0 text-[26px] leading-8">
                5. HTML Elements and Structure
              </h2>
              <div className="mt-2.5 mb-0 text-[14px] leading-[1.65] max-w-160 text-text-secondary font-sans mx-0">
                Learn about common HTML elements and how to structure a basic webpage.
              </div>
            </div>

            <div className="flex justify-between mt-2">
              <div className="flex items-center rounded-lg py-3 px-6 gap-2.5 border-[1.5px] border-solid border-border-alt cursor-pointer hover:bg-surface">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="stroke-ink-deep" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0' }}>
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
                <div className="inline-block text-ink-secondary font-sans font-bold text-[13px] leading-none">
                   Previous Lesson
                </div>
              </div>
              <div className="flex items-center rounded-lg py-3 px-6 gap-2.5 bg-ink-deep cursor-pointer hover:opacity-90">
                <div className="inline-block text-canvas font-sans font-bold text-[13px] leading-none">
                  Next Lesson 
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0' }}>
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <ResourcesCard resources={courseData.resources} />
          </div>
        </div>
        
        <Footer />
      </div>
    </main>
  );
}
