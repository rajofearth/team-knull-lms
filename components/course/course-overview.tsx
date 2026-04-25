"use client";

import type { LucideIcon } from "lucide-react";
import {
  Award,
  Briefcase,
  CheckCircle2,
  Clock,
  Code,
  Laptop,
  Users,
} from "lucide-react";
import type { Overview } from "@/lib/data/courses";

interface CourseOverviewProps {
  overview: Overview;
}

const iconMap: Record<string, LucideIcon> = {
  briefcase: Briefcase,
  users: Users,
  clock: Clock,
  award: Award,
  code: Code,
  laptop: Laptop,
};

export function CourseOverview({ overview }: CourseOverviewProps) {
  return (
    <div className="[font-synthesis:none] flex flex-col w-full antialiased text-xs/4">
      {/* About This Course Section */}
      <div className="flex mt-0 rounded-xl gap-10 border border-solid border-border p-10 bg-canvas">
        <div className="grow shrink basis-[0%] flex flex-col gap-6">
          <div className="text-ink font-heading font-bold text-2xl/7.5 m-0">
            About This Course
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-[16px] leading-relaxed text-text-description font-sans m-0 whitespace-pre-line">
              {overview.detailedDescription}
            </div>
          </div>
        </div>

        {/* Features Sidebar */}
        <div className="w-95 flex flex-col rounded-xl gap-6 bg-canvas border border-solid border-border shrink-0 p-6">
          {overview.features?.map((feature) => {
            const Icon = iconMap[feature.icon] || Briefcase;
            return (
              <div key={feature.title} className="flex items-start gap-4">
                <div className="flex items-center justify-center rounded-lg bg-muted shrink-0 size-10 border border-border">
                  <Icon className="size-5 text-ink" />
                </div>
                <div className="">
                  <div className="text-ink font-sans font-semibold text-base/5">
                    {feature.title}
                  </div>
                  <div className="mt-1 text-text-muted font-sans text-sm/4.5">
                    {feature.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* What You'll Learn & Requirements Grid */}
      <div className="flex mt-10 gap-10">
        <div className="grow shrink basis-[0%] rounded-xl bg-canvas border border-solid border-border p-10">
          <div className="mt-0 mb-6 text-ink font-heading font-bold text-xl/6 mx-0">
            What You'll Learn
          </div>
          <div className="flex flex-col gap-4">
            {overview.whatYouWillLearn.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="size-5 text-success shrink-0" />
                <div className="inline-block text-text-description font-sans text-base/5">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-95 rounded-xl bg-canvas border border-solid border-border shrink-0 p-10">
          <div className="mt-0 mb-6 text-ink font-heading font-bold text-xl/6 mx-0">
            Requirements
          </div>
          <div className="flex flex-col gap-4 m-0">
            {overview.requirements.map((item) => (
              <div key={item} className="flex gap-3">
                <div className="inline-block text-text-muted font-sans text-base/5">
                  •
                </div>
                <div className="inline-block text-text-description font-sans text-base/5">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Who This Course Is For */}
      <div className="flex flex-col mt-10 rounded-xl gap-6 border border-solid border-border p-10 bg-canvas">
        <div className="text-ink font-heading font-bold text-xl/6 m-0">
          Who This Course Is For
        </div>
        <div className="flex gap-6">
          {overview.whoThisCourseIsFor?.map((item) => {
            const Icon = iconMap[item.icon] || Code;
            return (
              <div
                key={item.title}
                className="grow shrink basis-[0%] flex flex-col rounded-xl gap-4 bg-canvas border border-solid border-border p-8 hover:shadow-card transition-all group"
              >
                <div className="flex items-center justify-center rounded-xl bg-muted shrink-0 size-12 group-hover:bg-ink group-hover:text-canvas transition-colors">
                  <Icon className="size-6 text-ink group-hover:text-canvas" />
                </div>
                <div className="">
                  <div className="text-ink font-sans font-semibold text-lg/5.5">
                    {item.title}
                  </div>
                  <div className="text-[15px] mt-2 leading-relaxed text-text-muted font-sans">
                    {item.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
