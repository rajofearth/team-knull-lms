"use client";

import { Award, BookOpen, Calendar, Globe, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import type { StudentDashboardData } from "@/lib/lms/types";

interface ProfileSummaryProps {
  user: StudentDashboardData["user"];
  stats: StudentDashboardData["stats"];
}

export function ProfileSummary({ user, stats }: ProfileSummaryProps) {
  const progress = user.overallProgress;
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <Card className="flex flex-col lg:flex-row items-center gap-10 p-10 rounded-2xl border-border shadow-none bg-white">
      {/* Left: User Info */}
      <div className="flex flex-col md:flex-row gap-8 flex-1 w-full">
        <div className="relative size-[120px] rounded-full overflow-hidden shrink-0 border border-border">
          <Image
            src={user.avatar || "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=200&auto=format&fit=crop"}
            alt={user.name}
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        <div className="flex flex-col gap-5 flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h1 className="text-3xl font-heading font-bold text-foreground m-0">
              {user.name}
            </h1>
            <Link
              href="/profile/edit"
              className="text-sm font-semibold text-blue-500 hover:text-blue-600 transition-colors"
            >
              Edit Profile
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-sm text-muted-foreground font-medium">
              {user.email}
            </span>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="size-4" />
                <span>{user.location}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="size-4" />
                <span>Member since {user.joinedDate}</span>
              </div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed max-w-lg m-0">
            Passionate about UI/UX design and front-end development. Always
            eager to learn and build amazing digital experiences.
          </p>

          <div className="flex items-center gap-5 mt-1">
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Globe className="size-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Right: Progress Donut & Stats List */}
      <div className="flex flex-col sm:flex-row items-center gap-10 lg:gap-14 shrink-0 w-full lg:w-auto border-t lg:border-t-0 lg:border-l border-border pt-8 lg:pt-0 lg:pl-10">
        {/* Donut Chart */}
        <div className="relative size-[160px] flex items-center justify-center">
          <svg
            className="size-full -rotate-90 transform"
            viewBox="0 0 140 140"
            aria-hidden="true"
          >
            <circle
              cx="70"
              cy="70"
              r={radius}
              stroke="currentColor"
              strokeWidth="10"
              fill="transparent"
              className="text-muted/30"
            />
            <circle
              cx="70"
              cy="70"
              r={radius}
              stroke="currentColor"
              strokeWidth="10"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className="text-foreground transition-all duration-1000 ease-in-out"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute flex flex-col items-center justify-center text-center">
            <span className="text-3xl font-heading font-extrabold text-foreground">
              {progress}%
            </span>
            <span className="text-xs font-medium text-muted-foreground">
              Overall Progress
            </span>
          </div>
        </div>

        {/* Stats List */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-muted rounded-md">
              <BookOpen className="size-4 text-muted-foreground" />
            </div>
            <span className="text-sm font-medium text-muted-foreground">
              {stats.enrolledCourses} Courses Enrolled
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-2 bg-muted rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-muted-foreground"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <span className="text-sm font-medium text-muted-foreground">
              {stats.completedCourses} Courses Completed
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-2 bg-muted rounded-md">
              <Award className="size-4 text-muted-foreground" />
            </div>
            <span className="text-sm font-medium text-muted-foreground">
              {stats.certificatesEarned} Certificates Earned
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-2 bg-muted rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-muted-foreground"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <span className="text-sm font-medium text-muted-foreground">
              {stats.totalHoursLearned} Hours Learned
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}
