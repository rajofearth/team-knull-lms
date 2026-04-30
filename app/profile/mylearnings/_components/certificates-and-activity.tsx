import { Award, Download, Play } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const certificates = [
  {
    id: "1",
    title: "Web Development Bootcamp",
    date: "Issued on May 28, 2024",
    link: "/certificates/1",
  },
];

const activities = [
  {
    id: "1",
    type: "lesson",
    title: "Completed lesson 'CSS Flexbox'",
    context: "UI/UX Design Fundamentals • 2 hours ago",
    icon: Play,
  },
  {
    id: "2",
    type: "certificate",
    title: "Earned certificate",
    context: "Web Development Bootcamp • 1 day ago",
    icon: Award,
  },
];

export function CertificatesAndActivity() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
      {/* My Certificates */}
      <div className="flex flex-col gap-6 w-full">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-heading font-bold text-foreground m-0">
            My Certificates
          </h2>
          <Link
            href="/profile/certificates"
            className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
          >
            View All &rarr;
          </Link>
        </div>

        <Card className="flex flex-col gap-6 p-8 rounded-2xl border-border shadow-none bg-white">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-5 w-full"
            >
              <div className="flex items-center justify-center size-14 rounded-xl bg-foreground text-background shrink-0">
                <Award className="size-6" />
              </div>
              <div className="flex flex-col gap-1 flex-1 min-w-0">
                <h3 className="text-base font-heading font-bold text-foreground m-0 truncate">
                  {cert.title}
                </h3>
                <span className="text-sm text-muted-foreground truncate">
                  {cert.date}
                </span>
              </div>
              <div className="flex items-center gap-3 shrink-0 mt-2 sm:mt-0">
                <Button
                  variant="outline"
                  asChild
                  className="rounded-xl px-4 py-2 border-border shadow-none font-semibold text-sm h-auto bg-transparent hover:bg-muted"
                >
                  <Link href={cert.link}>View Certificate</Link>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-muted-foreground hover:text-foreground shrink-0 rounded-full"
                  aria-label="Download Certificate"
                >
                  <Download className="size-5" />
                </Button>
              </div>
            </div>
          ))}
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="flex flex-col gap-6 w-full">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-heading font-bold text-foreground m-0">
            Recent Activity
          </h2>
          <Link
            href="/profile/activity"
            className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
          >
            View All &rarr;
          </Link>
        </div>

        <Card className="flex flex-col gap-6 p-8 rounded-2xl border-border shadow-none bg-white">
          {activities.map((activity) => {
            const Icon = activity.icon;
            return (
              <div
                key={activity.id}
                className="flex items-start sm:items-center gap-5 w-full"
              >
                <div className="flex items-center justify-center size-12 rounded-full bg-muted text-muted-foreground shrink-0">
                  <Icon className="size-5" />
                </div>
                <div className="flex flex-col gap-1 flex-1 min-w-0">
                  <h3 className="text-base font-heading font-semibold text-foreground m-0 truncate">
                    {activity.title}
                  </h3>
                  <span className="text-sm text-muted-foreground truncate">
                    {activity.context}
                  </span>
                </div>
              </div>
            );
          })}
        </Card>
      </div>
    </div>
  );
}
