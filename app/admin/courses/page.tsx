import { AdminCoursesPageClient } from "@/components/pages/admin-courses-page";
import { requireAuth } from "@/lib/session";

export default async function AdminCoursesPage() {
  await requireAuth("/admin/courses");

  return <AdminCoursesPageClient />;
}
