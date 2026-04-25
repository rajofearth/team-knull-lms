"use client";

import { Folder, Globe, Star, Users } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { Instructor } from "@/lib/data/courses";
import { GithubLight } from "../ui/svgs/githubLight";
import { Linkedin } from "../ui/svgs/linkedin";
import { X } from "../ui/svgs/x";

interface CourseInstructorProps {
  instructors: Instructor[];
}

export function CourseInstructor({ instructors }: CourseInstructorProps) {
  const instructor = instructors[0];
  if (!instructor) return null;

  return (
    <div className="[font-synthesis:none] flex flex-col w-full antialiased text-xs/4">
      <div className="flex mt-0 items-start gap-10">
        {/* Instructor Sidebar */}
        <div className="w-100 flex flex-col rounded-xl gap-8 bg-canvas border border-solid border-border shrink-0 p-10">
          <div className="flex flex-col items-center gap-4">
            <div className="self-start text-ink font-heading font-bold text-xl/6 m-0">
              Your Instructor
            </div>
            <div className="rounded-full overflow-hidden bg-muted shrink-0 size-40 border-4 border-muted">
              <Image
                src={instructor.avatar}
                alt={instructor.name}
                width={160}
                height={160}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <div className="text-[#111827] font-sans font-bold text-2xl/7.5">
                {instructor.name}
              </div>
              <div className="mt-1 text-text-muted font-sans text-base/5">
                {instructor.role}
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-6">
            <div className="flex items-center gap-2">
              <Folder className="size-4 text-ink" />
              <div className="inline-block text-text-description font-sans text-sm/4.5">
                {instructor.stats.yearsExperience} Years Experience
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Users className="size-4 text-ink" />
              <div className="inline-block text-text-description font-sans text-sm/4.5">
                {instructor.stats.students.toLocaleString()}+ Students
              </div>
            </div>
          </div>

          <div className="text-[15px] leading-relaxed text-text-description font-sans m-0">
            {instructor.bio}
          </div>

          <div className="flex flex-col gap-4">
            <div className="text-ink font-sans font-semibold text-base/5">
              Connect
            </div>
            <div className="flex gap-3">
              {[Globe, Linkedin, GithubLight, X].map((Icon, i) => (
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  key={`social-${i + 1}`}
                  className="size-10 rounded-lg border-border text-ink hover:bg-muted"
                >
                  <Icon className="size-5" />
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="grow shrink basis-[0%] flex flex-col rounded-xl gap-8 bg-canvas border border-solid border-border p-10">
          <div className="flex flex-col gap-6">
            <div className="text-ink font-heading font-bold text-xl/6 m-0">
              Instructor Statistics
            </div>
            <div className="flex gap-4">
              {[
                {
                  label: "Years Experience",
                  value: instructor.stats.yearsExperience,
                },
                {
                  label: "Students Taught",
                  value: instructor.stats.students.toLocaleString(),
                },
                { label: "Courses Created", value: instructor.stats.courses },
                { label: "Average Rating", value: instructor.stats.rating },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="grow shrink basis-[0%] flex flex-col items-center rounded-xl border border-solid border-border p-6 bg-muted/20"
                >
                  <div className="text-ink font-sans font-bold text-[32px]/10">
                    {stat.value}
                    {stat.label.includes("Students") ? "+" : ""}
                  </div>
                  <div className="mt-2 text-text-muted font-sans text-sm/4.5 text-center">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col pt-8 gap-6 border-t border-solid border-border">
            <div className="text-ink font-heading font-bold text-xl/6 m-0">
              Top Courses by {instructor.name}
            </div>
            <div className="flex flex-col gap-4">
              {instructor.coursesOnPlatform.map((course) => (
                <div
                  key={course.id}
                  className="flex items-center transition-all rounded-xl gap-4 p-3 hover:bg-muted/30 cursor-pointer group"
                >
                  <div className="w-20 h-15 rounded-lg overflow-hidden bg-muted shrink-0">
                    <Image
                      src={course.thumbnail}
                      alt={course.title}
                      width={80}
                      height={60}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="grow shrink basis-[0%]">
                    <div className="text-ink font-sans font-semibold text-base/5 group-hover:text-ink-deep transition-colors">
                      {course.title}
                    </div>
                    <div className="mt-1 text-text-muted font-sans text-sm/4.5">
                      {course.studentsCount ?? "—"} students
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="size-4 fill-amber-400 text-amber-400" />
                    <div className="inline-block text-ink font-sans font-semibold text-sm/4.5">
                      {course.rating}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Have Questions? CTA */}
      <div className="mt-10 flex justify-between items-center rounded-xl py-8 px-10 bg-muted/30 border border-solid border-border">
        <div className="flex flex-col gap-2">
          <div className="text-ink font-heading font-bold text-xl/6 m-0">
            Have Questions?
          </div>
          <div className="text-text-muted font-sans text-[15px]/4.5 m-0">
            Ask your questions in the Q&A section and get help from the
            instructor and community.
          </div>
        </div>
        <Button className="rounded-lg py-3 px-8 bg-ink text-canvas font-bold text-sm hover:opacity-90 transition-opacity">
          Go to Q&A
        </Button>
      </div>
    </div>
  );
}
