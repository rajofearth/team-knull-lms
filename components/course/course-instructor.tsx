"use client";

import React from "react";
import { Star, Users, PlayCircle, GraduationCap } from "lucide-react";
import { Instructor } from "@/lib/data/courses";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface CourseInstructorProps {
  instructors: Instructor[];
}

export function CourseInstructor({ instructors }: CourseInstructorProps) {
  return (
    <div className="flex flex-col gap-12 max-w-4xl">
      {instructors.map((instructor) => (
        <div key={instructor.id} className="flex flex-col gap-6">
          {/* Header */}
          <div className="flex items-start gap-5">
            <Avatar className="size-20 rounded-2xl border border-border">
              <AvatarImage src={instructor.avatar} alt={instructor.name} className="rounded-2xl" />
              <AvatarFallback className="rounded-2xl bg-ink/5 text-ink-secondary">
                {instructor.name.split(" ").map(n => n[0]).join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1 pt-1">
              <h2 className="text-xl font-heading font-bold text-ink">{instructor.name}</h2>
              <p className="text-sm font-sans font-medium text-ink-deep">{instructor.role}</p>
              
              <div className="flex items-center gap-4 mt-2">
                <div className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 fill-chart-4 text-chart-4" />
                  <span className="text-sm font-bold text-ink font-sans">{instructor.stats.rating} Instructor Rating</span>
                </div>
                <div className="flex items-center gap-1.5 text-text-secondary">
                  <Users className="w-4 h-4" />
                  <span className="text-sm font-sans">{instructor.stats.students} Students</span>
                </div>
                <div className="flex items-center gap-1.5 text-text-secondary">
                  <PlayCircle className="w-4 h-4" />
                  <span className="text-sm font-sans">{instructor.stats.courses} Courses</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="flex flex-col gap-3">
            <h3 className="text-base font-heading font-bold text-ink">About Instructor</h3>
            <p className="text-sm text-text-secondary leading-relaxed font-sans">
              {instructor.bio}
            </p>
          </div>

          {/* Courses on Platform */}
          {instructor.coursesOnPlatform.length > 0 && (
            <div className="flex flex-col gap-4">
              <h3 className="text-base font-heading font-bold text-ink flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-ink-deep" />
                Other Courses on Platform
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {instructor.coursesOnPlatform.map((course) => (
                  <div key={course.id} className="flex gap-4 p-3 rounded-xl border border-border bg-canvas/50 hover:border-ink-deep/20 hover:bg-ink-deep/5 transition-all cursor-pointer group">
                    <div className="size-20 shrink-0 rounded-lg overflow-hidden bg-muted">
                      <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    </div>
                    <div className="flex flex-col justify-center gap-1">
                      <h4 className="text-sm font-bold text-ink line-clamp-2 leading-snug group-hover:text-ink-deep transition-colors">
                        {course.title}
                      </h4>
                      <div className="flex items-center gap-2 mt-0.5">
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 fill-chart-4 text-chart-4" />
                          <span className="text-xs font-bold text-ink">{course.rating}</span>
                        </div>
                        <span className="text-xs font-bold text-ink-deep">${course.price}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Separator */}
          {instructors.indexOf(instructor) < instructors.length - 1 && (
            <div className="h-px w-full bg-border mt-6" />
          )}
        </div>
      ))}
    </div>
  );
}
