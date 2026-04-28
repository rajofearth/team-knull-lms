import { connection } from "next/server";
import { AdminCoursesPageClient } from "@/components/pages/admin-courses-page";
import { getAdminCourses, requireAdminAccess } from "@/lib/data-access";

export default async function AdminCoursesPage() {
  await connection();
  await requireAdminAccess("/admin/courses");
  const courses = await getAdminCourses();

  return <AdminCoursesPageClient courses={courses} />;
}
