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
import { courses } from "@/lib/data/courses";
import { cn } from "@/lib/utils";

const ITEMS_PER_PAGE = 6;

export default function CoursesPage() {
  // State
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("Most Popular");
  const [currentPage, setCurrentPage] = useState(1);
  const [activeFilters, setActiveFilters] = useState({
    levels: [] as string[],
    price: "all" as "all" | "free" | "paid",
    durations: [] as string[],
    ratings: [] as number[],
  });

  // Derived Data
  const allCourses = Object.values(courses);

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
      // Levels
      if (course.level in counts.levels) {
        counts.levels[course.level]++;
      }

      // Price
      if (course.price === 0) counts.price.free++;
      else counts.price.paid++;

      // Duration
      const hours = parseInt(course.duration);
      if (hours <= 5) counts.durations["0-5 Hours"]++;
      else if (hours <= 15) counts.durations["5-15 Hours"]++;
      else counts.durations["15+ Hours"]++;

      // Rating
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
      // Search Filter
      const matchesSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase());

      if (!matchesSearch) return false;

      // Level Filter
      if (
        activeFilters.levels.length > 0 &&
        !activeFilters.levels.includes(course.level)
      ) {
        return false;
      }

      // Price Filter
      if (activeFilters.price === "free" && course.price !== 0) return false;
      if (activeFilters.price === "paid" && course.price === 0) return false;

      // Duration Filter
      if (activeFilters.durations.length > 0) {
        // Simplified duration check for demo
        const courseDurationHours = parseInt(course.duration);
        const matchesDuration = activeFilters.durations.some((d) => {
          if (d === "0-5 Hours") return courseDurationHours <= 5;
          if (d === "5-15 Hours")
            return courseDurationHours > 5 && courseDurationHours <= 15;
          if (d === "15+ Hours") return courseDurationHours > 15;
          return false;
        });
        if (!matchesDuration) return false;
      }

      // Rating Filter
      if (activeFilters.ratings.length > 0) {
        const matchesRating = activeFilters.ratings.some(
          (r) => Math.floor(course.rating) >= r,
        );
        if (!matchesRating) return false;
      }

      return true;
    });

    // Sorting
    result.sort((a, b) => {
      if (sortBy === "Price: Low to High") return a.price - b.price;
      if (sortBy === "Price: High to Low") return b.price - a.price;
      if (sortBy === "Newest") return a.badge === "New" ? -1 : 1;
      return (b.reviewsCount as number) - (a.reviewsCount as number); // Default to "Most Popular" (reviews count)
    });

    return result;
  }, [allCourses, searchQuery, activeFilters, sortBy]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredCourses.length / ITEMS_PER_PAGE);
  const currentCourses = filteredCourses.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const handleFilterChange = (type: string, value: any) => {
    setActiveFilters((prev) => ({
      ...prev,
      [type]: value,
    }));
    setCurrentPage(1); // Reset to first page on filter change
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
    <div className="flex flex-col min-h-screen bg-canvas">
      <Navbar />

      <main className="flex flex-col grow">
        {/* Breadcrumbs */}
        <div className="py-6 px-6 md:px-20">
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

        {/* Header Section */}
        <section className="flex flex-col md:flex-row justify-between items-start md:items-end w-full pb-10 px-6 md:px-20 gap-6">
          <div className="flex flex-col max-w-2xl gap-3">
            <h1 className="text-ink font-heading font-semibold text-4xl md:text-5xl m-0 leading-tight">
              All Courses
            </h1>
            <p className="text-base leading-relaxed text-text-description font-sans m-0">
              Explore our comprehensive library of courses and start learning
              new skills today.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <div className="flex items-center w-full sm:w-80 rounded-lg py-3 px-4 gap-3 bg-canvas border border-border shrink-0 focus-within:ring-2 focus-within:ring-ink/20 transition-all">
              <Search className="size-5 text-text-muted" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none outline-none text-ink font-sans text-sm w-full placeholder:text-text-muted"
              />
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto group relative">
              <span className="text-text-description font-sans text-sm shrink-0">
                Sort by
              </span>
              <div className="flex items-center w-full sm:w-48 justify-between rounded-lg py-3 px-4 gap-2 bg-canvas border border-border shrink-0 cursor-pointer hover:bg-muted transition-colors">
                <span className="text-ink font-sans font-medium text-sm">
                  {sortBy}
                </span>
                <ChevronDown className="size-4 text-ink" />
              </div>
              {/* Simple Sort Dropdown */}
              <div className="absolute top-full left-0 w-full bg-canvas border border-border rounded-lg mt-1 hidden group-hover:block z-10 shadow-float overflow-hidden">
                {[
                  "Most Popular",
                  "Newest",
                  "Price: Low to High",
                  "Price: High to Low",
                ].map((option) => (
                  <div
                    key={option}
                    onClick={() => setSortBy(option)}
                    className="p-3 hover:bg-muted cursor-pointer text-sm font-sans text-ink"
                  >
                    {option}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="flex flex-col lg:flex-row w-full px-6 md:px-20 gap-10 pb-20">
          {/* Sidebar */}
          <CourseFilters
            activeFilters={activeFilters}
            filterCounts={filterCounts}
            onFilterChange={handleFilterChange}
            onClearFilters={handleClearFilters}
          />

          {/* Grid Area */}
          <div className="flex flex-col grow">
            <div className="mb-6 flex justify-between items-center">
              <span className="text-text-muted font-sans text-sm">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {currentCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 gap-4 text-center">
                <div className="size-16 rounded-full bg-muted flex items-center justify-center">
                  <Search className="size-8 text-text-muted" />
                </div>
                <h3 className="text-xl font-heading font-bold text-ink">
                  No courses found
                </h3>
                <p className="text-text-description font-sans max-w-xs">
                  We couldn't find any courses matching your current filters.
                  Try clearing them to see more options.
                </p>
                <button
                  onClick={handleClearFilters}
                  className="mt-2 text-ink-deep font-semibold hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-12">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  className="size-9 rounded-md border border-border flex items-center justify-center text-text-muted hover:bg-muted transition-colors cursor-pointer group disabled:opacity-30 disabled:cursor-not-allowed"
                  aria-label="Previous page"
                >
                  <ChevronLeft className="size-4 group-hover:text-ink transition-colors" />
                </button>
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={cn(
                      "size-9 rounded-md font-semibold text-sm flex items-center justify-center cursor-pointer transition-colors",
                      currentPage === i + 1
                        ? "bg-ink text-canvas"
                        : "border border-border text-text-description hover:bg-muted",
                    )}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  disabled={currentPage === totalPages}
                  onClick={() =>
                    setCurrentPage((p) => Math.min(totalPages, p + 1))
                  }
                  className="size-9 rounded-md border border-border flex items-center justify-center text-text-muted hover:bg-muted transition-colors cursor-pointer group disabled:opacity-30 disabled:cursor-not-allowed"
                  aria-label="Next page"
                >
                  <ChevronRight className="size-4 group-hover:text-ink transition-colors" />
                </button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
