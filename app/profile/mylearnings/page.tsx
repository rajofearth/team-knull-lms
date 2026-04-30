import { connection } from "next/server";
import { getCatalogCourses, getStudentDashboard } from "@/lib/data-access";
import { CertificatesAndActivity } from "./_components/certificates-and-activity";
import { EnrolledCourses } from "./_components/enrolled-courses";
import { FooterCta } from "./_components/footer-cta";
import { ProfileSummary } from "./_components/profile-summary";
import { QuickStats } from "./_components/quick-stats";
import { RecommendedCourses } from "./_components/recommended-courses";

export default async function MyLearningsPage() {
  await connection();
  const [dashboard, catalog] = await Promise.all([
    getStudentDashboard(),
    getCatalogCourses(),
  ]);

  return (
    <div className="flex flex-col gap-10 p-6 md:p-10 max-w-[1200px] mx-auto w-full">
      <ProfileSummary user={dashboard.user} stats={dashboard.stats} />
      <QuickStats stats={dashboard.stats} />
      <EnrolledCourses courses={dashboard.enrolledCourses} />
      <CertificatesAndActivity 
        certificates={dashboard.certificates} 
        activity={dashboard.recentActivity} 
      />
      <RecommendedCourses courses={catalog.slice(0, 4)} />
      <FooterCta user={dashboard.user} />
    </div>
  );
}
