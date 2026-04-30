import { notFound } from "next/navigation";
import { AddCoursePageClient } from "@/components/pages/add-course-page";
import { api } from "@/convex/_generated/api";
import type { Doc, Id } from "@/convex/_generated/dataModel";
import { fetchAuthQuery } from "@/lib/auth-server";
import { requireAdminAccess } from "@/lib/data-access";

export default async function EditCoursePage({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) {
  const { courseId } = await params;
  await requireAdminAccess(`/admin/courses/${courseId}/edit`);

  let course: Doc<"courses"> | null = null;
  try {
    course = await fetchAuthQuery(api.lms.getAdminCourse, {
      courseId: courseId as Id<"courses">,
    });
  } catch (error) {
    console.error(error);
  }

  if (!course) {
    notFound();
  }

  return <AddCoursePageClient initialData={course} isEditing={true} />;
}
