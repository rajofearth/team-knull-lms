import { CalendarDays, Globe, Phone, User } from "lucide-react";
import { Card } from "@/components/ui/card";

export function AboutMeCard() {
  return (
    <Card className="flex flex-col gap-6 p-8 md:p-10 rounded-2xl border-border shadow-none bg-white">
      <h3 className="text-xl font-heading font-bold text-foreground m-0">
        About Me
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed m-0">
        I&apos;m a UI/UX designer and front-end developer with 5+ years of
        experience crafting beautiful and user-friendly digital products. I love
        learning new technologies and sharing knowledge with the community.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-2 w-full">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center size-10 rounded-full bg-muted text-muted-foreground shrink-0">
            <User className="size-4" />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs font-medium text-muted-foreground">
              Full Name
            </span>
            <span className="text-sm font-semibold text-foreground">
              Rohit Sharma
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center size-10 rounded-full bg-muted text-muted-foreground shrink-0">
            <CalendarDays className="size-4" />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs font-medium text-muted-foreground">
              Date of Birth
            </span>
            <span className="text-sm font-semibold text-foreground">
              Feb 14, 1995
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center size-10 rounded-full bg-muted text-muted-foreground shrink-0">
            <Phone className="size-4" />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs font-medium text-muted-foreground">
              Phone Number
            </span>
            <span className="text-sm font-semibold text-foreground">
              +91 98765 43210
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center size-10 rounded-full bg-muted text-muted-foreground shrink-0">
            <Globe className="size-4" />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs font-medium text-muted-foreground">
              Language
            </span>
            <span className="text-sm font-semibold text-foreground">
              English
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}
