import { connection } from "next/server";
import { CoursePageClient } from "@/components/pages/course-page";
import { getCourseDetailsOrThrow } from "@/lib/data-access";
import { requireAuth } from "@/lib/session";

export default async function CoursePage({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) {
  await connection();
  const { courseId } = await params;

  await requireAuth(`/courses/${courseId}`);
  const course = await getCourseDetailsOrThrow(courseId);

  return <CoursePageClient course={course} />;
}
