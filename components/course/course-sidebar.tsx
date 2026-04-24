import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { FileText, Briefcase, Target, Award, PlaySquare, Folder, FileCheck, Clock } from "lucide-react";

interface CourseSidebarProps {
  enrolled: boolean;
}

export function CourseSidebar({ enrolled }: CourseSidebarProps) {
  return (
    <div className="flex flex-col gap-8 w-full h-full">
      {enrolled ? (
        <Card className="rounded-xl border-border p-6 shadow-subtle">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-sm font-bold text-foreground">Your Progress</h3>
            <span className="text-xs font-semibold text-muted-foreground">65% Complete</span>
          </div>
          <Progress value={65} className="mb-8 h-2 bg-secondary [&>div]:bg-foreground" />
          
          <div className="flex flex-col gap-5">
            {[
              { icon: FileText, label: "Lessons Completed", val: "18 / 28" },
              { icon: Briefcase, label: "Projects Completed", val: "3 / 5" },
              { icon: Target, label: "Quiz Scores", val: "82%" },
              { icon: Award, label: "Certificate", val: "Available", valColor: "text-success" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between border-b border-border/50 pb-5 last:border-0 last:pb-0">
                <div className="flex items-center gap-4">
                  <item.icon className="size-5 text-muted-foreground" strokeWidth={1.5} />
                  <span className="text-sm text-foreground font-medium">{item.label}</span>
                </div>
                <span className={`text-sm font-medium ${item.valColor || "text-muted-foreground"}`}>
                  {item.val}
                </span>
              </div>
            ))}
          </div>
        </Card>
      ) : (
        <Card className="rounded-xl border-border p-6 shadow-subtle">
          <h3 className="mb-6 text-base font-bold text-foreground">This Course Includes</h3>
          <div className="flex flex-col gap-5">
            {[
              { icon: PlaySquare, label: "28 Lessons" },
              { icon: Folder, label: "5 Projects" },
              { icon: FileCheck, label: "Quizzes & Assignments" },
              { icon: Award, label: "Certificate of Completion" },
              { icon: Clock, label: "Lifetime Access" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <item.icon className="size-5 text-muted-foreground" strokeWidth={1.5} />
                <span className="text-sm text-foreground font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
}
