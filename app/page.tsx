import { Categories } from "@/components/categories";
import { CTASection } from "@/components/cta-section";
import { FeaturesBar } from "@/components/features-bar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import { PopularCourses } from "@/components/popular-courses";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <main className="bg-canvas min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesBar />
      <PopularCourses />
      <Categories />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  );
}
