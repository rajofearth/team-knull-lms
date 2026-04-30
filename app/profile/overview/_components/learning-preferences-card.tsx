import { BarChart2, Clock, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";

export function LearningPreferencesCard() {
  return (
    <Card className="flex flex-col gap-6 p-8 md:p-10 rounded-2xl border-border shadow-none bg-white">
      <h3 className="text-xl font-heading font-bold text-foreground m-0">
        Learning Preferences
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center size-10 rounded-full bg-muted text-muted-foreground shrink-0">
            <Clock className="size-4" />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs font-medium text-muted-foreground">
              Daily Goal
            </span>
            <span className="text-sm font-semibold text-foreground">
              1 hour
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center size-10 rounded-full bg-muted text-muted-foreground shrink-0">
            <BarChart2 className="size-4" />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs font-medium text-muted-foreground">
              Preferred Level
            </span>
            <span className="text-sm font-semibold text-foreground">
              Intermediate
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center size-10 rounded-full bg-muted text-muted-foreground shrink-0">
            <Mail className="size-4" />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs font-medium text-muted-foreground">
              Email Notifications
            </span>
            <span className="text-sm font-semibold text-foreground">
              Enabled
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center size-10 rounded-full bg-muted text-muted-foreground shrink-0">
            <Mail className="size-4" />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs font-medium text-muted-foreground">
              Marketing Emails
            </span>
            <span className="text-sm font-semibold text-foreground">
              Enabled
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}
