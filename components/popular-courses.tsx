import Image from "next/image";
import { Star, ArrowRight, Clock, BarChart2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const courses = [
  {
    id: "uiux-design",
    image: "/course_uiux.png",
    badge: "Bestseller",
    title: "UI/UX Design Fundamentals",
    rating: 4.8,
    reviews: "1.2k",
    level: "Beginner",
    hours: 12,
    price: 49,
    desc: "Learn the basics of UI/UX design and create beautiful user interfaces.",
  },
  {
    id: "web-dev",
    image: "/course_webdev.png",
    badge: "New",
    title: "Web Development Bootcamp",
    rating: 4.7,
    reviews: "892",
    level: "Beginner → Advanced",
    hours: 25,
    price: 89,
    desc: "HTML, CSS, JavaScript and more to build real-world websites.",
  },
  {
    id: "graphics-design",
    image: "/course_graphics.png",
    badge: "Popular",
    title: "Graphics Design Masterclass",
    rating: 4.9,
    reviews: "1.1k",
    level: "All Levels",
    hours: 18,
    price: 49,
    desc: "Design stunning visuals and brand identities like a pro.",
  },
  {
    id: "digital-marketing",
    image: "/course_marketing.png",
    badge: "New",
    title: "Digital Marketing Strategy",
    rating: 4.6,
    reviews: "743",
    level: "Beginner",
    hours: 10,
    price: 39,
    desc: "Master digital marketing and grow any business online.",
  },
];

export function PopularCourses() {
  return (
    <section className="py-16 bg-canvas">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Section Header */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-ink">
            Popular Courses
          </h2>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-ink-deep hover:opacity-80"
          >
            View All Courses
            <ArrowRight className="size-3.5" strokeWidth={2.5} />
          </a>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <a
              key={course.id}
              href="#"
              id={`course-${course.id}`}
              className="group block overflow-hidden rounded-2xl border border-border bg-canvas shadow-subtle transition-all duration-200 hover:translate-y-[-2px] hover:shadow-float"
            >
              {/* Thumbnail */}
              <div className="relative h-40 bg-surface">
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
                  className="absolute left-2.5 top-2.5 bg-canvas/90 backdrop-blur-sm px-2 py-0.5 text-[10px] font-semibold text-ink hover:bg-canvas"
                >
                  {course.badge}
                </Badge>
              </div>

              {/* Content */}
              <div className="p-4 pt-3.5">
                {/* Rating */}
                <div className="mb-1.5 flex items-center gap-1">
                  <span className="text-xs font-bold text-ink">
                    {course.rating}
                  </span>
                  <Star
                    className="size-[11px] fill-amber-500 text-amber-500"
                    strokeWidth={0}
                  />
                  <span className="text-[11px] text-text-muted">
                    ({course.reviews})
                  </span>
                </div>

                <h3 className="mb-1.5 text-sm font-bold leading-[1.35] text-ink">
                  {course.title}
                </h3>
                <p className="mb-3 text-xs leading-normal text-text-secondary">
                  {course.desc}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between border-t border-border-subtle pt-2.5">
                  <div className="flex items-center gap-2.5">
                    <span className="flex items-center gap-1 text-[10px] text-text-muted">
                      <BarChart2 className="size-2.5" strokeWidth={2} />
                      {course.level}
                    </span>
                    <span className="flex items-center gap-1 text-[10px] text-text-muted">
                      <Clock className="size-2.5" strokeWidth={2} />
                      {course.hours}h
                    </span>
                  </div>
                  <span className="text-[15px] font-extrabold text-ink">
                    ${course.price}
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
