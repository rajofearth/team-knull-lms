import { AddCoursePageClient } from "@/components/pages/add-course-page";
import { requireAuth } from "@/lib/session";

export default async function AddCoursePage() {
  await requireAuth("/admin/courses/add");

  return <AddCoursePageClient />;
}
