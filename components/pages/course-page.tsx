"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { CourseHeader } from "@/components/course/course-header";
import { CourseInstructor } from "@/components/course/course-instructor";
import { CourseOverview } from "@/components/course/course-overview";
import { CourseProgressCard } from "@/components/course/course-progress-card";
import { CourseTabs } from "@/components/course/course-tabs";
import { CurriculumSidebar } from "@/components/course/curriculum-sidebar";
import { ResourcesCard } from "@/components/course/resources-card";
import { VideoPlayer } from "@/components/course/video-player";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { courses } from "@/lib/data/courses";
import { cn } from "@/lib/utils";

export function CoursePageClient({ courseId }: { courseId: string }) {
  const courseData = courses[courseId] || courses["web-dev"];
  const [activeTab, setActiveTab] = useState("curriculum");
  const [activeLessonId, setActiveLessonId] = useState("l5");

  const allLessons = useMemo(
    () => courseData.modules.flatMap((module) => module.lessons),
    [courseData],
  );

  const activeLesson = useMemo(
    () =>
      allLessons.find((lesson) => lesson.id === activeLessonId) ||
      allLessons[0],
    [activeLessonId, allLessons],
  );

  const handleNextLesson = () => {
    const currentIndex = allLessons.findIndex(
      (lesson) => lesson.id === activeLessonId,
    );

    if (currentIndex < allLessons.length - 1) {
      setActiveLessonId(allLessons[currentIndex + 1].id);
    }
  };

  const handlePrevLesson = () => {
    const currentIndex = allLessons.findIndex(
      (lesson) => lesson.id === activeLessonId,
    );

    if (currentIndex > 0) {
      setActiveLessonId(allLessons[currentIndex - 1].id);
    }
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-canvas">
      <div className="mx-auto flex max-w-[1440px] flex-col bg-canvas text-sm antialiased">
        <Navbar />

        <div className="flex items-center gap-2 px-20 pt-6">
          <Link
            href="/"
            className="inline-block text-sm leading-none font-sans text-text-muted transition-colors hover:text-ink"
          >
            Home
          </Link>
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            className="stroke-ink-deep"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
            style={{ flexShrink: "0" }}
          >
            <title>Breadcrumb separator</title>
            <polyline points="9 18 15 12 9 6" />
          </svg>
          <Link
            href="/courses"
            className="inline-block text-sm leading-none font-sans text-text-muted transition-colors hover:text-ink"
          >
            Courses
          </Link>
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            className="stroke-ink-deep"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
            style={{ flexShrink: "0" }}
          >
            <title>Breadcrumb separator</title>
            <polyline points="9 18 15 12 9 6" />
          </svg>
          <div className="inline-block text-sm leading-none font-sans text-text-muted">
            {courseData.title}
          </div>
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            className="stroke-ink-deep"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
            style={{ flexShrink: "0" }}
          >
            <title>Breadcrumb separator</title>
            <polyline points="9 18 15 12 9 6" />
          </svg>
          <div className="inline-block text-sm leading-none font-sans text-ink-secondary">
            {activeLesson.title}
          </div>
        </div>

        <div className="flex items-start gap-12 px-20 py-8 antialiased [font-synthesis:none]">
          <CourseHeader course={courseData} />
          <CourseProgressCard progress={courseData.progress} />
        </div>

        <CourseTabs activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="flex min-h-[600px] w-full gap-10 bg-surface px-20 py-12">
          {activeTab === "curriculum" && (
            <>
              <CurriculumSidebar
                modules={courseData.modules}
                activeLessonId={activeLessonId}
                onLessonSelect={(lesson) => setActiveLessonId(lesson.id)}
              />

              <div className="flex grow basis-[0%] flex-col gap-8">
                <VideoPlayer />

                <div>
                  <div className="m-0 text-2xl leading-8 tracking-tight font-heading font-bold text-ink">
                    {activeLesson.title}
                  </div>
                  <div className="mx-0 mt-2.5 mb-0 max-w-2xl text-sm leading-relaxed font-sans text-text-secondary">
                    {activeLesson.description ||
                      "Learn more about this topic in the video lecture above."}
                  </div>
                </div>

                <div className="mt-2 flex justify-between">
                  <Button
                    type="button"
                    variant="outline"
                    className={cn(
                      "flex items-center gap-2.5 rounded-lg border-[1.5px] border-border px-6 py-3 transition-colors",
                      activeLessonId === allLessons[0].id
                        ? "cursor-not-allowed opacity-50"
                        : "cursor-pointer hover:bg-canvas",
                    )}
                    onClick={handlePrevLesson}
                    disabled={activeLessonId === allLessons[0].id}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="stroke-ink"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ flexShrink: "0" }}
                    >
                      <title>Previous lesson</title>
                      <line x1="19" y1="12" x2="5" y2="12" />
                      <polyline points="12 19 5 12 12 5" />
                    </svg>
                    <div className="inline-block text-sm leading-none font-bold font-sans text-ink-secondary">
                      Previous Lesson
                    </div>
                  </Button>
                  <Button
                    type="button"
                    className={cn(
                      "flex items-center gap-2.5 rounded-lg bg-ink px-6 py-3 transition-opacity",
                      activeLessonId === allLessons[allLessons.length - 1].id
                        ? "cursor-not-allowed opacity-50"
                        : "cursor-pointer hover:opacity-90",
                    )}
                    onClick={handleNextLesson}
                    disabled={
                      activeLessonId === allLessons[allLessons.length - 1].id
                    }
                  >
                    <div className="inline-block text-sm leading-none font-bold font-sans text-canvas">
                      Next Lesson
                    </div>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ flexShrink: "0" }}
                    >
                      <title>Next lesson</title>
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Button>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <ResourcesCard resources={courseData.resources} />
              </div>
            </>
          )}

          {activeTab === "overview" && (
            <div className="w-full">
              <CourseOverview overview={courseData.overview} />
            </div>
          )}

          {activeTab === "instructor" && (
            <div className="w-full">
              <CourseInstructor instructors={courseData.instructors} />
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="flex w-full flex-col items-center justify-center py-20 font-sans italic text-text-muted">
              Reviews content coming soon...
            </div>
          )}

          {activeTab === "qa" && (
            <div className="flex w-full flex-col items-center justify-center py-20 font-sans italic text-text-muted">
              Q&amp;A content coming soon...
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
