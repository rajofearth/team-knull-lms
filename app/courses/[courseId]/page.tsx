"use client";

import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CourseHeader } from "@/components/course/course-header";
import { CourseSidebar } from "@/components/course/course-sidebar";
import { CourseTabs } from "@/components/course/course-tabs";
import { SignInModal } from "@/components/course/sign-in-modal";
import { useState, Suspense } from "react";

function CourseDetailsContent() {
  const searchParams = useSearchParams();
  const isEnrolled = searchParams.get("enrolled") === "true";
  
  const [modalOpen, setModalOpen] = useState(false);

  const handleWrapperClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest("#enroll-signin-btn")) {
      setModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-background" onClick={handleWrapperClick}>
      <Navbar />
      
      <main className="pb-24 pt-8">
        <div className="mx-auto max-w-[1200px] px-6">
          {/* Breadcrumbs */}
          <div className="mb-8 flex items-center gap-2 text-[11px] font-medium text-muted-foreground">
            <a href="/" className="hover:text-foreground">Home</a>
            <span>›</span>
            <a href="#" className="hover:text-foreground">Courses</a>
            <span>›</span>
            <span className="text-foreground">Web Development Bootcamp</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
            {/* Left Column: Header */}
            <div className="flex flex-col">
              <CourseHeader enrolled={isEnrolled} />
            </div>

            {/* Right Column: Top Sidebar */}
            <div>
              <CourseSidebar enrolled={isEnrolled} />
            </div>
          </div>

          {/* Bottom Section (Tabs) */}
          <div className="mt-12">
            <CourseTabs enrolled={isEnrolled} />
          </div>
        </div>
      </main>

      <Footer />
      
      <SignInModal open={modalOpen} onOpenChange={setModalOpen} />
    </div>
  );
}

export default function CourseDetailsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-background"><p>Loading...</p></div>}>
      <CourseDetailsContent />
    </Suspense>
  );
}
