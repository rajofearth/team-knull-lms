import type { Metadata } from "next";
import { AdminHeader } from "@/components/admin/admin-header";
import { AdminSidebar } from "@/components/admin/admin-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export const metadata: Metadata = {
  title: "Admin — Team Knull LMS",
  description: "Admin panel for Team Knull LMS",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider
      style={{ "--sidebar-width": "260px" } as React.CSSProperties}
    >
      <div className="flex min-h-screen w-full bg-[#F9FAFB]">
        <AdminSidebar />
        <SidebarInset className="bg-[#F9FAFB] min-w-0">
          <div className="flex flex-col flex-1 min-w-0">
            <AdminHeader />
            <main className="flex-1 min-w-0">{children}</main>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
