"use client";

import {
  Award,
  BarChart2,
  BookOpen,
  ChevronDown,
  Clock,
  DollarSign,
  ExternalLink,
  FileText,
  Folder,
  Home,
  MessageSquare,
  Monitor,
  Settings,
  Shield,
  User,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { adminNavSections } from "@/lib/data/admin";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  book: BookOpen,
  users: Users,
  user: User,
  monitor: Monitor,
  folder: Folder,
  award: Award,
  "bar-chart": BarChart2,
  "dollar-sign": DollarSign,
  "message-square": MessageSquare,
  "file-text": FileText,
  shield: Shield,
  settings: Settings,
  clock: Clock,
};

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-40 flex flex-col w-[260px] bg-white border-r border-border">
      {/* Logo */}
      <div className="h-[70px] flex items-center px-4 border-b border-border shrink-0">
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
      </div>

      {/* Scrollable nav */}
      <nav className="flex flex-col flex-1 overflow-y-auto py-6 px-4 gap-6">
        {/* Dashboard link */}
        <Link
          href="/admin/dashboard"
          className={cn(
            "flex items-center gap-3 rounded-md py-2.5 px-3 transition-colors",
            pathname === "/admin/dashboard"
              ? "bg-muted text-foreground font-semibold"
              : "text-muted-foreground hover:bg-muted hover:text-foreground",
          )}
        >
          <Home className="size-[18px] shrink-0" />
          <span className="font-heading font-semibold text-sm">Dashboard</span>
        </Link>

        {/* Nav sections */}
        {adminNavSections.map((section) => (
          <div key={section.title} className="flex flex-col gap-1">
            <div className="px-2 mb-1">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-muted-foreground">
                {section.title}
              </span>
            </div>
            {section.items.map((item) => {
              const Icon = iconMap[item.icon] ?? BookOpen;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg py-2.5 px-3 text-sm font-heading font-semibold transition-colors",
                    isActive
                      ? "bg-muted text-foreground"
                      : "text-foreground/80 hover:bg-muted hover:text-foreground",
                  )}
                >
                  <Icon className="size-[18px] shrink-0 text-muted-foreground" />
                  {item.label}
                </Link>
              );
            })}
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="flex flex-col gap-3 px-4 py-5 border-t border-border shrink-0">
        <Link
          href="/"
          className="flex items-center justify-between rounded-md py-2.5 px-3 bg-white border border-border hover:bg-muted transition-colors"
        >
          <span className="text-sm font-heading font-medium text-foreground/80">
            View Site
          </span>
          <ExternalLink className="size-4 text-muted-foreground shrink-0" />
        </Link>
        <Button
          type="button"
          variant="ghost"
          className="h-auto w-full justify-between rounded-md bg-muted p-3 hover:bg-muted/70"
        >
          <div className="flex items-center gap-3">
            <div className="size-9 rounded-full bg-foreground flex items-center justify-center shrink-0">
              <span className="text-background font-heading font-semibold text-sm">
                A
              </span>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm font-heading font-semibold text-foreground">
                Admin
              </span>
              <span className="text-xs text-muted-foreground font-sans">
                Super Admin
              </span>
            </div>
          </div>
          <ChevronDown className="size-4 text-muted-foreground shrink-0" />
        </Button>
      </div>
    </aside>
  );
}
