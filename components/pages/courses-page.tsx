"use client";

import { ChevronDown, ChevronLeft, ChevronRight, Search } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { CourseCard } from "@/components/course-card";
import { CourseFilters } from "@/components/course-filters";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { CourseListItem } from "@/lib/lms/types";
import { cn } from "@/lib/utils";

const ITEMS_PER_PAGE = 6;

type ActiveFilters = {
  levels: string[];
  price: "all" | "free" | "paid";
  durations: string[];
  ratings: number[];
};

export function CoursesPageClient({ courses }: { courses: CourseListItem[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("Most Popular");
  const [currentPage, setCurrentPage] = useState(1);
  const [activeFilters, setActiveFilters] = useState<ActiveFilters>({
    levels: [],
    price: "all",
    durations: [],
    ratings: [],
  });

  const allCourses = courses;

  const filterCounts = useMemo(() => {
    const counts = {
      levels: { Beginner: 0, Intermediate: 0, Advanced: 0 } as Record<
        string,
        number
      >,
      price: { free: 0, paid: 0 },
      durations: { "0-5 Hours": 0, "5-15 Hours": 0, "15+ Hours": 0 } as Record<
        string,
        number
      >,
      ratings: { 5: 0, 4: 0, 3: 0, 2: 0 } as Record<number, number>,
    };

    allCourses.forEach((course) => {
      if (course.level in counts.levels) {
        counts.levels[course.level]++;
      }

      if (course.price === 0) counts.price.free++;
      else counts.price.paid++;

      const hours = Number.parseInt(course.duration, 10);
      if (hours <= 5) counts.durations["0-5 Hours"]++;
      else if (hours <= 15) counts.durations["5-15 Hours"]++;
      else counts.durations["15+ Hours"]++;

      const rating = course.rating;
      if (rating >= 5) counts.ratings[5]++;
      if (rating >= 4) counts.ratings[4]++;
      if (rating >= 3) counts.ratings[3]++;
      if (rating >= 2) counts.ratings[2]++;
    });

    return counts;
  }, [allCourses]);

  const filteredCourses = useMemo(() => {
    const result = allCourses.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase());

      if (!matchesSearch) return false;

      if (
        activeFilters.levels.length > 0 &&
        !activeFilters.levels.includes(course.level)
      ) {
        return false;
      }

      if (activeFilters.price === "free" && course.price !== 0) return false;
      if (activeFilters.price === "paid" && course.price === 0) return false;

      if (activeFilters.durations.length > 0) {
        const courseDurationHours = Number.parseInt(course.duration, 10);
        const matchesDuration = activeFilters.durations.some((duration) => {
          if (duration === "0-5 Hours") return courseDurationHours <= 5;
          if (duration === "5-15 Hours") {
            return courseDurationHours > 5 && courseDurationHours <= 15;
          }
          if (duration === "15+ Hours") return courseDurationHours > 15;
          return false;
        });

        if (!matchesDuration) return false;
      }

      if (activeFilters.ratings.length > 0) {
        const matchesRating = activeFilters.ratings.some(
          (rating) => Math.floor(course.rating) >= rating,
        );

        if (!matchesRating) return false;
      }

      return true;
    });

    result.sort((a, b) => {
      if (sortBy === "Price: Low to High") return a.price - b.price;
      if (sortBy === "Price: High to Low") return b.price - a.price;
      if (sortBy === "Newest") return a.badge === "New" ? -1 : 1;
      return Number(b.reviewsCount) - Number(a.reviewsCount);
    });

    return result;
  }, [activeFilters, allCourses, searchQuery, sortBy]);

  const totalPages = Math.ceil(filteredCourses.length / ITEMS_PER_PAGE);
  const currentCourses = filteredCourses.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const handleFilterChange = <K extends keyof ActiveFilters>(
    type: K,
    value: ActiveFilters[K],
  ) => {
    setActiveFilters((previous) => ({
      ...previous,
      [type]: value,
    }));
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    setActiveFilters({
      levels: [],
      price: "all",
      durations: [],
      ratings: [],
    });
    setSearchQuery("");
    setCurrentPage(1);
  };

  return (
    <div className="flex min-h-screen flex-col bg-canvas">
      <Navbar />

      <main className="flex grow flex-col">
        <div className="px-6 py-6 md:px-20">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Courses</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <section className="flex w-full flex-col items-start justify-between gap-6 px-6 pb-10 md:flex-row md:items-end md:px-20">
          <div className="flex max-w-2xl flex-col gap-3">
            <h1 className="m-0 text-4xl leading-tight font-heading font-semibold text-ink md:text-5xl">
              All Courses
            </h1>
            <p className="m-0 text-base leading-relaxed font-sans text-text-description">
              Explore our comprehensive library of courses and start learning
              new skills today.
            </p>
          </div>
          <div className="flex w-full flex-col items-center gap-4 sm:flex-row md:w-auto">
            <div className="flex w-full shrink-0 items-center gap-3 rounded-lg border border-border bg-canvas px-4 py-3 transition-all focus-within:ring-2 focus-within:ring-ink/20 sm:w-80">
              <Search className="size-5 text-text-muted" />
              <Input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                className="h-auto border-0 bg-transparent px-0 py-0 text-sm text-ink font-sans shadow-none focus-visible:border-0 focus-visible:ring-0"
              />
            </div>
            <div className="group relative flex w-full items-center gap-3 sm:w-auto">
              <span className="shrink-0 text-sm font-sans text-text-description">
                Sort by
              </span>
              <div className="flex w-full shrink-0 cursor-pointer items-center justify-between gap-2 rounded-lg border border-border bg-canvas px-4 py-3 transition-colors hover:bg-muted sm:w-48">
                <span className="text-sm font-medium font-sans text-ink">
                  {sortBy}
                </span>
                <ChevronDown className="size-4 text-ink" />
              </div>
              <div className="absolute top-full left-0 z-10 mt-1 hidden w-full overflow-hidden rounded-lg border border-border bg-canvas shadow-float group-hover:block">
                {[
                  "Most Popular",
                  "Newest",
                  "Price: Low to High",
                  "Price: High to Low",
                ].map((option) => (
                  <Button
                    type="button"
                    key={option}
                    variant="ghost"
                    onClick={() => setSortBy(option)}
                    className="h-auto w-full justify-start rounded-none p-3 text-left text-sm font-sans text-ink hover:bg-muted"
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="flex w-full flex-col gap-10 px-6 pb-20 lg:flex-row md:px-20">
          <CourseFilters
            activeFilters={activeFilters}
            filterCounts={filterCounts}
            onFilterChange={handleFilterChange}
            onClearFilters={handleClearFilters}
          />

          <div className="flex grow flex-col">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-sm font-sans text-text-muted">
                Showing{" "}
                {Math.min(
                  (currentPage - 1) * ITEMS_PER_PAGE + 1,
                  filteredCourses.length,
                )}
                -
                {Math.min(currentPage * ITEMS_PER_PAGE, filteredCourses.length)}{" "}
                of {filteredCourses.length} courses
              </span>
            </div>

            {currentCourses.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {currentCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
                <div className="flex size-16 items-center justify-center rounded-full bg-muted">
                  <Search className="size-8 text-text-muted" />
                </div>
                <h3 className="text-xl font-heading font-bold text-ink">
                  No courses found
                </h3>
                <p className="max-w-xs font-sans text-text-description">
                  We couldn&apos;t find any courses matching your current
                  filters. Try clearing them to see more options.
                </p>
                <Button
                  type="button"
                  variant="ghost"
                  onClick={handleClearFilters}
                  className="mt-2 h-auto px-0 py-0 font-semibold text-ink-deep hover:bg-transparent hover:underline"
                >
                  Clear all filters
                </Button>
              </div>
            )}

            {totalPages > 1 && (
              <div className="mt-12 flex items-center justify-center gap-2">
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  disabled={currentPage === 1}
                  onClick={() =>
                    setCurrentPage((page) => Math.max(1, page - 1))
                  }
                  className="group size-9 rounded-md border-border text-text-muted transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-30"
                  aria-label="Previous page"
                >
                  <ChevronLeft className="size-4 transition-colors group-hover:text-ink" />
                </Button>
                {Array.from({ length: totalPages }).map((_, index) => (
                  <Button
                    type="button"
                    key={`page-${index + 1}`}
                    variant={currentPage === index + 1 ? "default" : "outline"}
                    size="icon"
                    onClick={() => setCurrentPage(index + 1)}
                    className={cn(
                      "size-9 rounded-md text-sm font-semibold transition-colors",
                      currentPage === index + 1
                        ? "bg-ink text-canvas"
                        : "border border-border text-text-description hover:bg-muted",
                    )}
                  >
                    {index + 1}
                  </Button>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  disabled={currentPage === totalPages}
                  onClick={() =>
                    setCurrentPage((page) => Math.min(totalPages, page + 1))
                  }
                  className="group size-9 rounded-md border-border text-text-muted transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-30"
                  aria-label="Next page"
                >
                  <ChevronRight className="size-4 transition-colors group-hover:text-ink" />
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
