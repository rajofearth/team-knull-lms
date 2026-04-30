import { InstructorForm } from "@/components/admin/instructors/instructor-form";
import { requireAdminAccess } from "@/lib/data-access";

export default async function AddInstructorPage() {
  await requireAdminAccess("/admin/instructors/add");

  return (
    <div className="flex min-h-full min-w-0 flex-col gap-8 px-4 py-8 md:px-10">
      <InstructorForm />
    </div>
  );
}
