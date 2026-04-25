import { CoursePageClient } from "@/components/pages/course-page";
import { requireAuth } from "@/lib/session";

export default async function CoursePage({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) {
  const { courseId } = await params;

  await requireAuth(`/courses/${courseId}`);

  return <CoursePageClient courseId={courseId} />;
}
