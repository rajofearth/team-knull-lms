import Image from "next/image";
import { Star, Bookmark } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface CourseHeaderProps {
  enrolled: boolean;
}

export function CourseHeader({ enrolled }: CourseHeaderProps) {
  return (
    <div className="flex flex-col gap-8 md:flex-row">
      {/* Course Image */}
      <div className="relative h-64 w-full shrink-0 overflow-hidden rounded-2xl bg-secondary md:w-80 lg:w-96">
        <Image
          src="/hero_chair.png"
          alt="Web Development Bootcamp"
          fill
          className="object-cover"
        />
        <Badge
          className="absolute left-4 top-4 bg-background text-xs font-semibold text-foreground hover:bg-background"
          variant="outline"
        >
          Bestseller
        </Badge>
      </div>

      {/* Course Info */}
      <div className="flex flex-1 flex-col justify-center py-2">
        <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-foreground">
          Web Development Bootcamp
        </h1>
        <p className="mb-6 max-w-lg text-sm leading-relaxed text-muted-foreground">
          Learn HTML, CSS, JavaScript, and modern web development by building real-world projects.
        </p>

        {/* Stats */}
        <div className="mb-8 flex flex-wrap items-center gap-3 text-sm font-medium text-muted-foreground">
          <div className="flex items-center gap-1.5 text-foreground">
            4.7 <Star className="size-4 fill-foreground" strokeWidth={0} />
            <span className="text-muted-foreground">(892)</span>
          </div>
          <span>•</span>
          <span>12,430 Students</span>
          <span>•</span>
          <span>Beginner to Advanced</span>
          <span>•</span>
          <span>25 Hours</span>
        </div>

        {/* Actions or Sign in Banner */}
        {enrolled ? (
          <div className="flex items-center gap-4">
            <Button className="h-12 rounded-lg bg-foreground px-8 text-sm font-semibold text-background hover:bg-foreground/90">
              Continue Learning
            </Button>
            <Button variant="outline" className="h-12 rounded-lg px-8 text-sm font-semibold">
              <Bookmark className="mr-2 size-4" />
              Save Course
            </Button>
          </div>
        ) : (
          <div className="flex items-center justify-between rounded-xl bg-secondary p-5">
            <div className="flex items-start gap-4">
              <div className="mt-1 shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <div>
                <p className="text-base font-bold text-foreground">Sign in to enroll in this course</p>
                <p className="text-sm text-muted-foreground mt-1">Join Team Knull to access this course and track your progress.</p>
              </div>
            </div>
            <Button id="enroll-signin-btn" className="h-11 rounded-lg px-6 text-sm font-semibold shrink-0 ml-4">
              Sign In to Continue
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
