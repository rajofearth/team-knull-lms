"use client";

import { Star, Users, Globe } from "lucide-react";
import { Instructor } from "@/lib/data/courses";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { GithubLight } from "../ui/svgs/githubLight";
import { X } from "../ui/svgs/x";
import { Linkedin } from "../ui/svgs/linkedin";
interface CourseInstructorProps {
  instructors: Instructor[];
}

export function CourseInstructor({ instructors }: CourseInstructorProps) {
  // Assuming we show the primary instructor
  const instructor = instructors[0];
  if (!instructor) return null;

  return (
    <div className="flex flex-col gap-16 w-full max-w-[1280px]">
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        {/* Left: Instructor Profile */}
        <div className="flex flex-col gap-8 lg:w-[40%]">
          <h2 className="text-2xl font-heading font-bold text-ink m-0">Your Instructor</h2>
          
          <div className="flex flex-col items-center p-10 rounded-2xl border border-border bg-canvas shadow-subtle">
            <Avatar className="size-32 rounded-full border-4 border-muted overflow-hidden">
              <AvatarImage src={instructor.avatar} alt={instructor.name} className="object-cover" />
              <AvatarFallback className="text-2xl font-bold bg-muted text-text-muted">
                {instructor.name.split(" ").map(n => n[0]).join("")}
              </AvatarFallback>
            </Avatar>
            
            <div className="flex flex-col items-center gap-2 mt-6">
              <h3 className="text-xl font-heading font-bold text-ink m-0">{instructor.name}</h3>
              <p className="text-sm text-text-muted font-sans m-0">{instructor.role}</p>
            </div>

            <div className="flex items-center gap-6 mt-6 pt-6 border-t border-border w-full justify-center">
              <div className="flex items-center gap-2 text-text-description">
                <Star className="size-4 fill-amber-400 text-amber-400" />
                <span className="text-xs font-sans font-bold">{instructor.stats.yearsExperience} Years Experience</span>
              </div>
              <div className="flex items-center gap-2 text-text-description">
                <Users className="size-4" />
                <span className="size-4 inline-flex items-center justify-center text-[10px] font-bold leading-none" />
                <span className="text-xs font-sans font-bold">{instructor.stats.students} Students</span>
              </div>
            </div>

            <p className="text-sm text-text-description leading-relaxed font-sans mt-6 text-center whitespace-pre-line">
              {instructor.bio}
            </p>

            <div className="flex flex-col gap-4 mt-8 w-full">
              <h4 className="text-xs font-bold text-ink uppercase tracking-wider">Connect</h4>
              <div className="flex gap-3">
                {[Globe, Linkedin, GithubLight, X].map((Icon, i) => (
                  <button key={i} className="size-10 rounded-lg border border-border flex items-center justify-center text-text-muted hover:bg-muted hover:text-ink transition-all cursor-pointer">
                    <Icon className="size-5" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Statistics and Top Courses */}
        <div className="flex flex-col gap-12 lg:w-[60%]">
          {/* Instructor Statistics */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-heading font-bold text-ink m-0">Instructor Statistics</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: "Years Experience", value: instructor.stats.yearsExperience },
                { label: "Students Taught", value: instructor.stats.students },
                { label: "Courses Created", value: instructor.stats.courses },
                { label: "Average Rating", value: instructor.stats.rating },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center justify-center p-6 rounded-2xl border border-border bg-muted/20 gap-2">
                  <span className="text-2xl font-heading font-bold text-ink">{stat.value}</span>
                  <span className="text-[11px] text-text-muted font-sans uppercase font-bold tracking-tight text-center">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Top Courses */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-heading font-bold text-ink m-0">Top Courses by {instructor.name}</h2>
            <div className="flex flex-col gap-4">
              {instructor.coursesOnPlatform.map((course) => (
                <div key={course.id} className="flex items-center gap-5 p-4 rounded-2xl border border-border bg-canvas hover:shadow-card transition-all cursor-pointer group">
                  <div className="size-20 rounded-xl overflow-hidden bg-muted shrink-0">
                    <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="flex flex-col gap-1 grow">
                    <h4 className="text-base font-sans font-bold text-ink group-hover:text-ink-deep transition-colors">{course.title}</h4>
                    <p className="text-xs text-text-muted font-sans">{course.studentsCount} students</p>
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    <Star className="size-4 fill-amber-400 text-amber-400" />
                    <span className="text-sm font-sans font-bold text-ink">{course.rating}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Have Questions? CTA */}
      <div className="flex items-center justify-between p-8 rounded-2xl bg-muted/30 border border-border">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-heading font-bold text-ink m-0">Have Questions?</h3>
          <p className="text-sm text-text-description font-sans m-0">Ask your questions in the Q&A section and get help from the instructor and community.</p>
        </div>
        <Button className="rounded-lg py-3 px-8 bg-ink text-canvas font-bold text-sm hover:opacity-90 transition-opacity">
          Go to Q&A
        </Button>
      </div>
    </div>
  );
}
