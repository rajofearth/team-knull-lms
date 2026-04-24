"use client";

import React, { useState, useMemo } from "react";
import { Navbar } from "@/components/navbar";
import { CourseHeader } from "@/components/course/course-header";
import { CourseProgressCard } from "@/components/course/course-progress-card";
import { CourseTabs } from "@/components/course/course-tabs";
import { CurriculumSidebar } from "@/components/course/curriculum-sidebar";
import { VideoPlayer } from "@/components/course/video-player";
import { ResourcesCard } from "@/components/course/resources-card";
import { CourseOverview } from "@/components/course/course-overview";
import { CourseInstructor } from "@/components/course/course-instructor";
import { courses } from "@/lib/data/courses";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function CoursePage({ params }: { params: Promise<{ courseId: string }> }) {
  const resolvedParams = React.use(params);
  const courseId = resolvedParams.courseId;
  const courseData = courses[courseId] || courses["web-dev"];

  const [activeTab, setActiveTab] = useState<string>("curriculum");
  const [activeLessonId, setActiveLessonId] = useState<string>("l5");

  const allLessons = useMemo(() => {
    return courseData.modules.flatMap(m => m.lessons);
  }, [courseData]);

  const activeLesson = useMemo(() => {
    return allLessons.find(l => l.id === activeLessonId) || allLessons[0];
  }, [allLessons, activeLessonId]);

  const handleNextLesson = () => {
    const currentIndex = allLessons.findIndex(l => l.id === activeLessonId);
    if (currentIndex < allLessons.length - 1) {
      setActiveLessonId(allLessons[currentIndex + 1].id);
    }
  };

  const handlePrevLesson = () => {
    const currentIndex = allLessons.findIndex(l => l.id === activeLessonId);
    if (currentIndex > 0) {
      setActiveLessonId(allLessons[currentIndex - 1].id);
    }
  };

  if (!courseData) return <div>Course not found</div>;

  return (
    <main className="min-h-screen bg-canvas overflow-x-hidden">
      <div className="mx-auto max-w-[1440px] flex flex-col bg-canvas antialiased text-sm">
        <Navbar />
        {/* Breadcrumbs */}
        <div className="flex items-center pt-6 gap-2 px-20">
          <Link href="/" className="inline-block text-text-muted font-sans text-sm leading-none hover:text-ink transition-colors">
            Home
          </Link>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="stroke-ink-deep" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0' }}>
            <polyline points="9 18 15 12 9 6" />
          </svg>
          <Link href="/courses" className="inline-block text-text-muted font-sans text-sm leading-none hover:text-ink transition-colors">
            Courses
          </Link>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="stroke-ink-deep" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0' }}>
            <polyline points="9 18 15 12 9 6" />
          </svg>
          <div className="inline-block text-text-muted font-sans text-sm leading-none">
            {courseData.title}
          </div>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="stroke-ink-deep" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0' }}>
            <polyline points="9 18 15 12 9 6" />
          </svg>
          <div className="inline-block text-ink-secondary font-sans text-sm leading-none">
            {activeLesson.title}
          </div>
        </div>

        <div className="[font-synthesis:none] flex items-start py-8 px-20 gap-12 antialiased">
          <CourseHeader course={courseData} />
          <CourseProgressCard progress={courseData.progress} />
        </div>

        <CourseTabs activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Content Area */}
        <div className="flex w-full py-12 px-20 gap-10 bg-surface min-h-[600px]">
          {activeTab === "curriculum" && (
            <>
              <CurriculumSidebar 
                modules={courseData.modules} 
                activeLessonId={activeLessonId}
                onLessonSelect={(lesson) => setActiveLessonId(lesson.id)}
              />

              {/* Video and Lesson Content */}
              <div className="grow shrink basis-[0%] flex flex-col gap-8">
                <VideoPlayer />

                <div className="">
                  <div className="tracking-tight text-ink font-heading font-bold m-0 text-2xl leading-8">
                    {activeLesson.title}
                  </div>
                  <div className="mt-2.5 mb-0 text-sm leading-relaxed max-w-2xl text-text-secondary font-sans mx-0">
                    {activeLesson.description || "Learn more about this topic in the video lecture above."}
                  </div>
                </div>

                <div className="flex justify-between mt-2">
                  <button 
                    className={cn(
                      "flex items-center rounded-lg py-3 px-6 gap-2.5 border-[1.5px] border-solid border-border transition-colors",
                      activeLessonId === allLessons[0].id ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:bg-canvas"
                    )}
                    onClick={handlePrevLesson}
                    disabled={activeLessonId === allLessons[0].id}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="stroke-ink" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0' }}>
                      <line x1="19" y1="12" x2="5" y2="12" />
                      <polyline points="12 19 5 12 12 5" />
                    </svg>
                    <div className="inline-block text-ink-secondary font-sans font-bold text-sm leading-none">
                      Previous Lesson
                    </div>
                  </button>
                  <button 
                    className={cn(
                      "flex items-center rounded-lg py-3 px-6 gap-2.5 bg-ink transition-opacity",
                      activeLessonId === allLessons[allLessons.length - 1].id ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:opacity-90"
                    )}
                    onClick={handleNextLesson}
                    disabled={activeLessonId === allLessons[allLessons.length - 1].id}
                  >
                    <div className="inline-block text-canvas font-sans font-bold text-sm leading-none">
                      Next Lesson
                    </div>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0' }}>
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <ResourcesCard resources={courseData.resources} />
              </div>
            </>
          )}

          {activeTab === "overview" && (
            <div className="w-full flex justify-center">
              <CourseOverview overview={courseData.overview} />
            </div>
          )}

          {activeTab === "instructor" && (
            <div className="w-full flex justify-center">
              <CourseInstructor instructors={courseData.instructors} />
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="w-full flex flex-col items-center justify-center py-20 text-text-muted font-sans italic">
              Reviews content coming soon...
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
