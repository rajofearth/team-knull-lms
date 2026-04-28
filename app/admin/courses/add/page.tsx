import { connection } from "next/server";
import { AddCoursePageClient } from "@/components/pages/add-course-page";
import { requireAdminAccess } from "@/lib/data-access";

export default async function AddCoursePage() {
  await connection();
  await requireAdminAccess("/admin/courses/add");

  return <AddCoursePageClient />;
}
