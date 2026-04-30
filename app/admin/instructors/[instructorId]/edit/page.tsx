import { notFound } from "next/navigation";
import { InstructorForm } from "@/components/admin/instructors/instructor-form";
import { api } from "@/convex/_generated/api";
import type { Id } from "@/convex/_generated/dataModel";
import { fetchAuthQuery } from "@/lib/auth-server";
import { requireAdminAccess } from "@/lib/data-access";
import type { AdminInstructorDetails } from "@/lib/lms/types";

export default async function EditInstructorPage({
  params,
}: {
  params: Promise<{ instructorId: string }>;
}) {
  const { instructorId } = await params;
  await requireAdminAccess(`/admin/instructors/${instructorId}/edit`);

  let instructor: AdminInstructorDetails | null = null;
  try {
    instructor = (await fetchAuthQuery(api.lms.getAdminInstructor, {
      instructorId: instructorId as Id<"instructors">,
    })) as AdminInstructorDetails | null;
  } catch (error) {
    console.error(error);
  }

  if (!instructor) {
    notFound();
  }

  return (
    <div className="flex min-h-full min-w-0 flex-col gap-8 px-4 py-8 md:px-10">
      <InstructorForm initialData={instructor} isEditing={true} />
    </div>
  );
}
