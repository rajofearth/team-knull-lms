import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { FeaturesBar } from "@/components/features-bar";
import { PopularCourses } from "@/components/popular-courses";
import { Categories } from "@/components/categories";
import { Testimonials } from "@/components/testimonials";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

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
