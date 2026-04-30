import { Award, Download, Play } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import type { StudentDashboardData } from "@/lib/lms/types";

interface CertificatesAndActivityProps {
  certificates: StudentDashboardData["certificates"];
  activity: StudentDashboardData["recentActivity"];
}

export function CertificatesAndActivity({
  certificates,
  activity,
}: CertificatesAndActivityProps) {
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
          {certificates.length > 0 ? (
            certificates.map((cert) => (
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
            ))
          ) : (
            <div className="flex flex-col items-center justify-center p-6 text-center text-muted-foreground">
              <Award className="size-10 mb-2 opacity-20" />
              <p>You haven't earned any certificates yet.</p>
            </div>
          )}
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
          {activity.length > 0 ? (
            activity.map((act) => {
              const Icon = act.type === "certificate" ? Award : Play;
              return (
                <div
                  key={act.id}
                  className="flex items-start sm:items-center gap-5 w-full"
                >
                  <div className="flex items-center justify-center size-12 rounded-full bg-muted text-muted-foreground shrink-0">
                    <Icon className="size-5" />
                  </div>
                  <div className="flex flex-col gap-1 flex-1 min-w-0">
                    <h3 className="text-base font-heading font-semibold text-foreground m-0 truncate">
                      {act.message}
                    </h3>
                    <span className="text-sm text-muted-foreground truncate">
                      {act.time}
                    </span>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="flex flex-col items-center justify-center p-6 text-center text-muted-foreground">
              <Play className="size-10 mb-2 opacity-20" />
              <p>No recent activity found.</p>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
