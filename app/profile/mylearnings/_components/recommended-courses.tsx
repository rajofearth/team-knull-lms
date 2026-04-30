import Link from "next/link";
import { CourseCard } from "@/components/course-card";
import type { CourseListItem } from "@/lib/lms/types";

const recommendedCourses: CourseListItem[] = [
  {
    id: "1",
    title: "React Development Masterclass",
    slug: "react-development-masterclass",
    description: "Build modern web applications with React.",
    thumbnail:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=300&auto=format&fit=crop",
    rating: 4.8,
    reviewsCount: 1200,
    level: "Intermediate",
    duration: "18 Hours",
    price: 49,
    badge: "Popular",
    studentsCount: "5000",
  },
  {
    id: "2",
    title: "Next.js Full Stack Developer",
    slug: "nextjs-full-stack-developer",
    description: "Build full stack applications with Next.js and modern tools.",
    thumbnail:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=300&auto=format&fit=crop",
    rating: 4.7,
    reviewsCount: 892,
    level: "Advanced",
    duration: "20 Hours",
    price: 59,
    badge: "New",
    studentsCount: "3000",
  },
  {
    id: "3",
    title: "TypeScript for Developers",
    slug: "typescript-for-developers",
    description: "Master TypeScript and build better JavaScript applications.",
    thumbnail:
      "https://images.unsplash.com/photo-1627398225058-61874b94e581?q=80&w=300&auto=format&fit=crop",
    rating: 4.6,
    reviewsCount: 743,
    level: "Intermediate",
    duration: "12 Hours",
    price: 39,
    badge: "Popular",
    studentsCount: "4000",
  },
  {
    id: "4",
    title: "Node.js Backend Development",
    slug: "nodejs-backend-development",
    description: "Learn Node.js and build scalable backend systems.",
    thumbnail:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=300&auto=format&fit=crop",
    rating: 4.8,
    reviewsCount: 1100,
    level: "Intermediate",
    duration: "16 Hours",
    price: 49,
    badge: "Bestseller",
    studentsCount: "6000",
  },
];

export function RecommendedCourses() {
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-heading font-bold text-foreground m-0">
          Recommended for You
        </h2>
        <Link
          href="/courses?recommended=true"
          className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
        >
          View All &rarr;
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {recommendedCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
