import { Categories } from "@/components/categories";
import { CTASection } from "@/components/cta-section";
import { FeaturesBar } from "@/components/features-bar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import { PopularCourses } from "@/components/popular-courses";
import { Testimonials } from "@/components/testimonials";
import { getCatalogCourses } from "@/lib/data-access";

export default async function Home() {
  const courses = await getCatalogCourses();

  return (
    <main className="bg-canvas min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesBar />
      <PopularCourses courses={courses.slice(0, 4)} />
      <Categories />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  );
}
