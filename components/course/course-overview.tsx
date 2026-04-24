"use client";

import React from "react";
import { CheckCircle2, BookOpen, ClipboardList, ListChecks, Briefcase } from "lucide-react";
import { Overview } from "@/lib/data/courses";

interface CourseOverviewProps {
  overview: Overview;
}

export function CourseOverview({ overview }: CourseOverviewProps) {
  return (
    <div className="flex flex-col gap-10 max-w-4xl">
      {/* What you'll learn */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-ink-deep/5 text-ink-deep">
            <BookOpen className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-heading font-bold text-ink">What you'll learn</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          {overview.whatYouWillLearn.map((item, index) => (
            <div key={index} className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
              <p className="text-sm text-text-secondary leading-relaxed font-sans">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Syllabus */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-ink-deep/5 text-ink-deep">
            <ClipboardList className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-heading font-bold text-ink">Course Syllabus</h2>
        </div>
        <div className="flex flex-col gap-3">
          {overview.syllabus.map((item, index) => (
            <div key={index} className="flex items-center gap-3 p-4 rounded-xl border border-border bg-canvas/50">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-ink/5 text-xs font-bold text-ink-secondary">
                {index + 1}
              </div>
              <p className="text-sm font-medium text-ink font-sans">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Requirements */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-ink-deep/5 text-ink-deep">
            <ListChecks className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-heading font-bold text-ink">Requirements</h2>
        </div>
        <ul className="list-disc list-inside flex flex-col gap-3 ml-2">
          {overview.requirements.map((item, index) => (
            <li key={index} className="text-sm text-text-secondary leading-relaxed font-sans">
              <span className="ml-2">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Applications */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-ink-deep/5 text-ink-deep">
            <Briefcase className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-heading font-bold text-ink">Real-world Applications</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {overview.applications.map((item, index) => (
            <div key={index} className="px-4 py-2 rounded-full bg-ink/5 border border-border text-sm font-medium text-ink-secondary font-sans">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Description */}
      <section>
        <h2 className="text-xl font-heading font-bold text-ink mb-4">Description</h2>
        <p className="text-sm text-text-secondary leading-relaxed font-sans whitespace-pre-line">
          {overview.detailedDescription}
        </p>
      </section>
    </div>
  );
}
