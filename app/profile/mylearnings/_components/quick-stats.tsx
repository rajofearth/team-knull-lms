import { ArrowRight, Award, BookOpen } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import type { StudentDashboardData } from "@/lib/lms/types";

export function QuickStats({ stats }: { stats: StudentDashboardData["stats"] }) {
  const statItems = [
    {
      label: "Enrolled Courses",
      value: stats.enrolledCourses.toString(),
      icon: BookOpen,
      linkText: "Continue learning",
      linkHref: "/profile/mylearnings",
    },
    {
      label: "Completed Courses",
      value: stats.completedCourses.toString(),
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
      linkText: "View all completed",
      linkHref: "/profile/mylearnings?status=completed",
    },
    {
      label: "Certificates Earned",
      value: stats.certificatesEarned.toString(),
      icon: Award,
      linkText: "View all certificates",
      linkHref: "/profile/certificates",
    },
    {
      label: "Total Hours Learned",
      value: stats.totalHoursLearned.toString(),
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      linkText: "Keep learning!",
      linkHref: "/courses",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
      {statItems.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card
            key={stat.label}
            className="flex flex-col gap-5 p-6 rounded-2xl border-border shadow-none bg-white transition-all duration-300 hover:shadow-subtle hover:-translate-y-1"
          >
            <div className="flex flex-col gap-3">
              <Icon className="size-6 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">
                {stat.label}
              </span>
              <span className="text-3xl font-heading font-bold text-foreground leading-none">
                {stat.value}
              </span>
            </div>
            <Link
              href={stat.linkHref}
              className="flex items-center gap-2 mt-auto text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors group w-fit"
            >
              {stat.linkText}
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Card>
        );
      })}
    </div>
  );
}
