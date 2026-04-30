"use client";

import {
  Award,
  BookOpen,
  Gift,
  HelpCircle,
  LayoutDashboard,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

// Navigation items for the user profile area
const profileNavItems = [
  { label: "Overview", href: "/profile/overview", icon: LayoutDashboard },
  { label: "My Courses", href: "/profile/mylearnings", icon: BookOpen },
  { label: "Certificates", href: "/profile/certificates", icon: Award },
];

export function ProfileSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar
      className="border-r border-border bg-white"
      collapsible="offcanvas"
    >
      <SidebarHeader className="h-[70px] justify-center border-b border-border px-6">
        <Link href="/" className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 150 30"
            width="130"
            height="26"
            className="fill-foreground shrink-0"
          >
            <title>Team Knull</title>
            <path d="m45.8 11.4h-3.5v10.8h-2.9v-10.8h-3.3v-2.2h9.7v2.2z" />
            <path d="m56.3 11.3h-5.9v3h5v2.1h-5v3.5h6.1v2.3h-9v-13h8.6l0.2 2.1z" />
            <path d="m69.2 22.1h-2.7l-0.8-2.7h-4.4l-0.8 2.7h-2.7l4-12.9h3.3l4.1 12.9zm-5.7-10.9-1.6 5.8h3.2l-1.6-5.8z" />
            <path d="m83.7 22.1h-2.5l-0.1-9.7-2.8 9.7h-2.2l-2.7-9.5-0.1 9.5-2.4 0.1v-13h3.6l2.6 9.1 2.8-9.1h3.8v12.9z" />
            <path d="m97.8 14.4 4.2 7.7-3.1 0.1-2.8-5.9-1.6 2.2v3.6h-2.7l0.1-12.9h2.6v5.9l4.2-5.9h3.3l-4.2 5.2z" />
            <path d="m113.8 22.2h-2.5l-5-9-0.1 9h-2.5v-12.9l2.9-0.1 4.7 8.2 0.1-8.2h2.5l-0.1 13z" />
            <path d="m126.5 18.5c0 2.1-1.9 3.8-4.8 3.8-3 0-5.4-1.2-5.4-4.3v-8.9h2.7v9.1c0 1.8 1.2 2 2.2 2 0.9 0 2.5-0.5 2.5-2v-9l2.8-0.1v9.4z" />
            <path d="m131.7 20h5.5v2.2h-8v-13h2.8v10.8h-0.3z" />
            <path d="m141.3 20h5.4v2.2h-7.9v-13h2.6l-0.1 10.8z" />
            <path d="m9.1 1.8h-5.5v19.7h2l3.5-5.9v-13.8z" />
            <path d="m10.3 15.9-4.5 6.4-2.2 5.5h5.7l4.3-7.4-3.3-4.5z" />
            <path d="m17.5 12.9 7.3-11.1h-6.4l-8.1 11.8 0.7 1.6 1.1 0.4 7.2 12.4h7.1l-8.9-15.1z" />
          </svg>
        </Link>
      </SidebarHeader>

      <SidebarContent className="gap-6 overflow-y-auto px-4 py-8">
        <SidebarMenu className="gap-2">
          {profileNavItems.map((item) => {
            const Icon = item.icon;
            // Highlight 'My Courses' for '/profile/mylearnings'
            const isActive =
              pathname === item.href ||
              (item.label === "My Courses" &&
                pathname?.includes("mylearnings"));

            return (
              <SidebarMenuItem key={item.label}>
                <SidebarMenuButton
                  asChild
                  isActive={isActive}
                  className={cn(
                    "h-auto gap-4 rounded-xl px-4 py-3 text-sm font-heading font-semibold transition-colors",
                    isActive
                      ? "bg-muted text-foreground"
                      : "text-foreground/70 hover:bg-muted hover:text-foreground",
                  )}
                >
                  <Link href={item.href}>
                    <Icon
                      className={cn(
                        "size-5 shrink-0",
                        isActive ? "text-foreground" : "text-muted-foreground",
                      )}
                    />
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>

        <div className="mt-8 px-2">
          <div className="bg-[#F9FAFB] rounded-2xl p-5 border border-border flex flex-col gap-4">
            <Gift className="size-6 text-blue-500" />
            <div className="flex flex-col gap-1">
              <span className="font-heading font-semibold text-sm text-foreground">
                Refer & Earn
              </span>
              <span className="text-xs text-muted-foreground leading-relaxed">
                Invite your friends and earn exciting rewards.
              </span>
            </div>
            <Button
              variant="outline"
              className="w-full bg-white font-semibold text-xs py-2 h-auto rounded-lg shadow-subtle border-border"
            >
              Invite Friends
            </Button>
          </div>
        </div>
      </SidebarContent>

      <SidebarFooter className="border-t border-border px-6 py-6">
        <Link
          href="/help"
          className="flex items-center gap-3 text-foreground/80 hover:text-foreground transition-colors"
        >
          <HelpCircle className="size-5 shrink-0" />
          <span className="font-heading font-semibold text-sm">Need help?</span>
        </Link>
      </SidebarFooter>
    </Sidebar>
  );
}
