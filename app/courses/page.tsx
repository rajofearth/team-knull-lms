import { CoursesPageClient } from "@/components/pages/courses-page";
import { requireAuth } from "@/lib/session";

export default async function CoursesPage() {
  await requireAuth("/courses");

  return <CoursesPageClient />;
}
