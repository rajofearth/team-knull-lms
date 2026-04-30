import { CertificatesAndActivity } from "./_components/certificates-and-activity";
import { EnrolledCourses } from "./_components/enrolled-courses";
import { FooterCta } from "./_components/footer-cta";
import { ProfileSummary } from "./_components/profile-summary";
import { QuickStats } from "./_components/quick-stats";
import { RecommendedCourses } from "./_components/recommended-courses";

export default function MyLearningsPage() {
  return (
    <div className="flex flex-col gap-10 p-6 md:p-10 max-w-[1200px] mx-auto w-full">
      <ProfileSummary />
      <QuickStats />
      <EnrolledCourses />
      <CertificatesAndActivity />
      <RecommendedCourses />
      <FooterCta />
    </div>
  );
}
