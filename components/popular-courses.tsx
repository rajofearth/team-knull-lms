import Image from "next/image";
import { Star, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const courses = [
  {
    id: "uiux-design",
    image: "/course_uiux.png",
    badge: "Bestseller",
    title: "UI/UX Design Fundamentals",
    rating: 4.8,
    reviews: "1.2k",
  },
  {
    id: "web-dev",
    image: "/course_webdev.png",
    badge: "New",
    title: "Web Development Bootcamp",
    rating: 4.7,
    reviews: "892",
  },
  {
    id: "graphics-design",
    image: "/course_graphics.png",
    badge: "Popular",
    title: "Graphics Design Masterclass",
    rating: 4.9,
    reviews: "1.1k",
  },
  {
    id: "digital-marketing",
    image: "/course_marketing.png",
    badge: "New",
    title: "Digital Marketing Strategy",
    rating: 4.6,
    reviews: "743",
  },
];

export function PopularCourses() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Section Header */}
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-[33px] font-semibold text-foreground">
            Popular Courses
          </h2>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-foreground/80 hover:text-foreground"
          >
            View All Courses
            <ArrowRight className="size-3.5" strokeWidth={2.5} />
          </a>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <a
              key={course.id}
              href="#"
              id={`course-${course.id}`}
              className="group block overflow-hidden rounded-lg border border-border bg-background transition-all duration-200 hover:translate-y-[-1px]"
            >
              {/* Thumbnail */}
              <div className="relative h-[140px] bg-secondary">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  sizes="(max-width: 1200px) 25vw, 300px"
                  className="object-cover"
                />
                {/* Badge */}
                <Badge
                  variant="outline"
                  className="absolute left-2.5 top-2.5 bg-background px-2 py-0.5 text-[10px] font-semibold text-foreground hover:bg-background"
                >
                  {course.badge}
                </Badge>
              </div>

              {/* Content */}
              <div className="p-3">
                <h3 className="mb-1 text-[20px] font-medium leading-[1.3] text-foreground">
                  {course.title}
                </h3>
                <div className="flex justify-end">
                  <span className="inline-flex items-center gap-1 text-[11px] text-muted-foreground">
                    <span className="font-medium text-foreground">{course.rating}</span>
                    <Star
                      className="size-[10px] fill-foreground text-foreground"
                      strokeWidth={0}
                    />
                    <span>({course.reviews})</span>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
