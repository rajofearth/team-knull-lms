import type { Metadata } from "next";
import { AdminSidebar } from "@/components/admin/admin-sidebar";
import { AdminHeader } from "@/components/admin/admin-header";

export const metadata: Metadata = {
  title: "Admin — Team Knull LMS",
  description: "Admin panel for Team Knull LMS",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#F9FAFB]">
      <AdminSidebar />
      <div className="flex flex-col flex-1 pl-[260px]">
        <AdminHeader />
        <main className="flex-1 pt-[70px]">{children}</main>
      </div>
    </div>
  );
}
