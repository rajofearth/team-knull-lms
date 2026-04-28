import { connection } from "next/server";
import { CoursesPageClient } from "@/components/pages/courses-page";
import { getCatalogCourses } from "@/lib/data-access";
import { requireAuth } from "@/lib/session";

export default async function CoursesPage() {
  await connection();
  await requireAuth("/courses");
  const courses = await getCatalogCourses();

  return <CoursesPageClient courses={courses} />;
}
