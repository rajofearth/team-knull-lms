import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import type { CourseData } from "@/lib/data/courses";

interface CourseCardProps {
  course: CourseData;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Link
      href={`/courses/${course.id}`}
      className="flex flex-col group rounded-xl overflow-hidden border border-border transition-all duration-300 hover:shadow-card hover:-translate-y-1 bg-canvas cursor-pointer no-underline"
    >
      {/* Image Container */}
      <div className="h-[160px] relative bg-surface-dim overflow-hidden shrink-0">
        <Image
          src={course.thumbnail}
          alt={course.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {course.badge && (
          <div className="absolute top-3 left-3">
            <Badge
              variant="secondary"
              className="bg-white/90 backdrop-blur-sm text-ink font-bold text-xs uppercase tracking-wider border-none shadow-subtle"
            >
              {course.badge}
            </Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 p-4 grow">
        <div className="flex justify-between items-start gap-2">
          <h3 className="grow text-ink font-heading font-semibold text-base m-0 leading-tight group-hover:text-ink-deep transition-colors line-clamp-1">
            {course.title}
          </h3>
          <div className="flex items-center gap-1 shrink-0">
            <span className="text-ink font-heading font-semibold text-xs leading-none">
              {course.rating}
            </span>
            <Star size={12} className="fill-amber-400 text-amber-400" />
            <span className="text-text-muted font-heading text-xs">
              ({course.reviewsCount})
            </span>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-text-description font-sans m-0 line-clamp-2 h-10">
          {course.description}
        </p>
        <div className="flex justify-between items-center pt-3 mt-1 border-t border-border">
          <div className="flex gap-2">
            <span className="text-text-muted font-sans text-xs">
              {course.level}
            </span>
            <span className="text-text-muted font-sans text-xs">•</span>
            <span className="text-text-muted font-sans text-xs">
              {course.duration}
            </span>
          </div>
          <span className="text-ink font-sans font-bold text-base">
            ${course.price}
          </span>
        </div>
      </div>
    </Link>
  );
}
