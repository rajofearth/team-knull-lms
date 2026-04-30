import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { ProfileSidebar } from "@/components/profile/profile-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export const metadata: Metadata = {
  title: "Profile — Team Knull LMS",
  description: "User profile and learning dashboard",
};

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider
      style={{ "--sidebar-width": "260px" } as React.CSSProperties}
    >
      <div className="flex min-h-screen w-full bg-[#F8F9FA]">
        <ProfileSidebar />
        <SidebarInset className="bg-[#F8F9FA] min-w-0">
          <div className="flex flex-col flex-1 min-w-0">
            {/* Reusing existing Navbar as the header */}
            <Navbar />
            <main className="flex-1 min-w-0">{children}</main>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
