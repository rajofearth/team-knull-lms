import { connection } from "next/server";
import { CoursesPageClient } from "@/components/pages/courses-page";
import { getCatalogCourses } from "@/lib/data-access";

export default async function CoursesPage() {
  await connection();
  const courses = await getCatalogCourses();

  return <CoursesPageClient courses={courses} />;
}
