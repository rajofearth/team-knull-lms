import Image from "next/image";
import { Star, ArrowRight } from "lucide-react";

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
    image: "https://app.paper.design/file-assets/01KPZWMJ3H4NEREG0PQ8WG2GWM/57D02ZX8T4T6X7YR0XTTDXRA9J.jpg",
    badge: "New",
    title: "Web Development Bootcamp",
    rating: 4.7,
    reviews: "892",
    level: "Beginner to Advanced",
    hours: 25,
    price: 59,
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
    image: "https://app.paper.design/file-assets/01KPZWMJ3H4NEREG0PQ8WG2GWM/711RZMR1A20C05JSNQGKYSNPWR.jpg",
    badge: "New",
    title: "Digital Marketing Strategy",
    rating: 4.8,
    reviews: "743",
    level: "Beginner",
    hours: 10,
    price: 39,
    desc: "Master digital marketing and grow any business online.",
  },
];

export function PopularCourses() {
  return (
    <section className="bg-canvas py-12 md:py-20 px-6 md:px-20">
      <div className="mx-auto max-w-[1280px]">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-ink font-heading font-bold text-[32px] leading-tight m-0">
            Popular Courses
          </h2>
          <div className="flex items-center gap-2 group cursor-pointer">
            <span className="text-text-muted group-hover:text-ink font-heading font-semibold text-sm transition-colors">
              View All Courses
            </span>
            <ArrowRight className="size-4 text-text-muted group-hover:text-ink transition-colors" strokeWidth={2} />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div 
              key={course.id} 
              className="flex flex-col group rounded-2xl overflow-hidden border border-border transition-all duration-300 hover:shadow-card hover:-translate-y-1 bg-canvas"
            >
              {/* Image Container */}
              <div className="h-[180px] relative bg-surface-dim overflow-hidden shrink-0">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 rounded-sm py-1 px-2 bg-white/90 backdrop-blur-sm">
                  <span className="text-ink font-heading font-bold text-[10px] uppercase tracking-wider">
                    {course.badge}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 p-5 grow">
                <div className="flex justify-between items-start gap-2">
                  <h3 className="grow text-ink font-heading font-bold text-base m-0 leading-snug group-hover:text-ink-deep transition-colors">
                    {course.title}
                  </h3>
                  <div className="flex items-center gap-1 shrink-0">
                    <span className="text-ink font-heading font-semibold text-xs leading-none">
                      {course.rating}
                    </span>
                    <Star size={12} className="fill-amber-400 text-amber-400" />
                    <span className="text-text-muted font-heading text-[10px]">
                      ({course.reviews})
                    </span>
                  </div>
                </div>
                <p className="text-xs leading-relaxed text-text-description font-heading m-0 line-clamp-2">
                  {course.desc}
                </p>
                <div className="flex justify-between items-center pt-3 mt-auto border-t border-border-subtle">
                  <div className="flex gap-3">
                    <span className="text-text-muted font-heading text-[10px]">
                      {course.level}
                    </span>
                    <span className="text-text-muted font-heading text-[10px]">
                      • {course.hours} Hours
                    </span>
                  </div>
                  <span className="text-ink font-heading font-extrabold text-base">
                    ${course.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
