"use client";

import React from "react";
import { CheckCircle2, Briefcase, Users, Clock, Award, Code, RefreshCw, Laptop } from "lucide-react";
import { Overview } from "@/lib/data/courses";

interface CourseOverviewProps {
  overview: Overview;
}

const iconMap: Record<string, any> = {
  briefcase: Briefcase,
  users: Users,
  clock: Clock,
  award: Award,
  code: Code,
  "refresh-cw": RefreshCw,
  laptop: Laptop,
};

export function CourseOverview({ overview }: CourseOverviewProps) {
  return (
    <div className="flex flex-col gap-16 w-full max-w-[1280px]">
      {/* About This Course */}
      <section className="flex flex-col lg:flex-row gap-12 items-start">
        <div className="flex flex-col gap-6 lg:w-[60%]">
          <h2 className="text-2xl font-heading font-bold text-ink m-0">About This Course</h2>
          <p className="text-sm text-text-description leading-relaxed font-sans m-0 whitespace-pre-line max-w-2xl">
            {overview.detailedDescription}
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 lg:w-[40%] bg-muted/30 p-8 rounded-2xl border border-border/50">
          {overview.features?.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Briefcase;
            return (
              <div key={index} className="flex gap-4">
                <div className="size-10 shrink-0 rounded-xl bg-canvas border border-border flex items-center justify-center text-ink shadow-subtle">
                  <Icon className="size-5" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-sm font-sans font-bold text-ink m-0">{feature.title}</h3>
                  <p className="text-xs text-text-muted font-sans m-0 leading-tight">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* What You'll Learn & Requirements */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* What You'll Learn */}
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-heading font-bold text-ink m-0">What You'll Learn</h2>
          <div className="flex flex-col gap-4">
            {overview.whatYouWillLearn.map((item, index) => (
              <div key={index} className="flex gap-3 items-start">
                <CheckCircle2 className="size-5 text-success shrink-0 mt-0.5" />
                <p className="text-sm text-text-description leading-relaxed font-sans m-0">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Requirements */}
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-heading font-bold text-ink m-0">Requirements</h2>
          <ul className="flex flex-col gap-4 m-0 p-0 list-none">
            {overview.requirements.map((item, index) => (
              <li key={index} className="flex gap-3 items-center">
                <div className="size-1.5 rounded-full bg-ink shrink-0" />
                <span className="text-sm text-text-description font-sans">{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Who This Course Is For */}
      <section className="flex flex-col gap-8">
        <h2 className="text-2xl font-heading font-bold text-ink m-0">Who This Course Is For</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {overview.whoThisCourseIsFor?.map((item, index) => {
            const Icon = iconMap[item.icon] || Code;
            return (
              <div key={index} className="flex flex-col gap-4 p-8 rounded-2xl border border-border bg-canvas hover:shadow-card transition-all group">
                <div className="size-12 rounded-xl bg-muted flex items-center justify-center text-ink-secondary group-hover:bg-ink-deep group-hover:text-canvas transition-colors">
                  <Icon className="size-6" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-base font-sans font-bold text-ink m-0">{item.title}</h3>
                  <p className="text-sm text-text-muted font-sans m-0 leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
