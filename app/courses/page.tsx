import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Search, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { CourseFilters } from "@/components/course-filters";
import { CourseCard } from "@/components/course-card";
import { courses } from "@/lib/data/courses";
import Link from "next/link";

export default function CoursesPage() {
  const allCourses = Object.values(courses);

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
              Explore our comprehensive library of courses and start learning new skills today.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <div className="flex items-center w-full sm:w-80 rounded-lg py-3 px-4 gap-3 bg-canvas border border-border shrink-0 focus-within:ring-2 focus-within:ring-ink/20 transition-all">
              <Search className="size-5 text-text-muted" />
              <input 
                type="text" 
                placeholder="Search courses..." 
                className="bg-transparent border-none outline-none text-ink font-sans text-sm w-full placeholder:text-text-muted"
              />
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <span className="text-text-description font-sans text-sm shrink-0">
                Sort by
              </span>
              <div className="flex items-center w-full sm:w-48 justify-between rounded-lg py-3 px-4 gap-2 bg-canvas border border-border shrink-0 cursor-pointer hover:bg-muted transition-colors">
                <span className="text-ink font-sans font-medium text-sm">
                  Most Popular
                </span>
                <ChevronDown className="size-4 text-ink" />
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="flex flex-col lg:flex-row w-full px-6 md:px-20 gap-10 pb-20">
          {/* Sidebar */}
          <CourseFilters />

          {/* Grid Area */}
          <div className="flex flex-col grow">
            <div className="mb-6">
              <span className="text-text-muted font-sans text-sm">
                Showing 1-{allCourses.length} of 258 courses
              </span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {allCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-12">
               <button className="size-9 rounded-md border border-border flex items-center justify-center text-text-muted hover:bg-muted transition-colors cursor-pointer group" aria-label="Previous page">
                  <ChevronLeft className="size-4 group-hover:text-ink transition-colors" />
               </button>
               <button className="size-9 rounded-md bg-ink text-canvas font-semibold text-sm flex items-center justify-center cursor-pointer">
                  1
               </button>
               <button className="size-9 rounded-md border border-border flex items-center justify-center text-text-description hover:bg-muted transition-colors cursor-pointer font-medium text-sm">
                  2
               </button>
               <button className="size-9 rounded-md border border-border flex items-center justify-center text-text-description hover:bg-muted transition-colors cursor-pointer font-medium text-sm">
                  3
               </button>
               <span className="text-text-muted px-2 font-sans text-sm">...</span>
               <button className="size-9 rounded-md border border-border flex items-center justify-center text-text-description hover:bg-muted transition-colors cursor-pointer font-medium text-sm">
                  22
               </button>
               <button className="size-9 rounded-md border border-border flex items-center justify-center text-text-muted hover:bg-muted transition-colors cursor-pointer group" aria-label="Next page">
                  <ChevronRight className="size-4 group-hover:text-ink transition-colors" />
               </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
