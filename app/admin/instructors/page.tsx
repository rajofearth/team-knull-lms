import { connection } from "next/server";
import { AdminInstructorsPageClient } from "@/components/pages/admin-instructors-page";
import { getAdminInstructors, requireAdminAccess } from "@/lib/data-access";

export default async function AdminInstructorsPage() {
  await connection();
  await requireAdminAccess("/admin/instructors");
  const data = await getAdminInstructors();

  return <AdminInstructorsPageClient initialData={data} />;
}
