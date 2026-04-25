"use client";

import { Bell, ChevronDown } from "lucide-react";

export function AdminHeader() {
  return (
    <header className="fixed top-0 left-[260px] right-0 z-30 h-[70px] flex items-center justify-between px-10 bg-white border-b border-border">
      {/* Left: could show breadcrumbs or page title here */}
      <div />

      {/* Right: actions */}
      <div className="flex items-center gap-4">
        {/* Bell */}
        <button className="relative size-10 flex items-center justify-center rounded-md hover:bg-muted transition-colors" aria-label="Notifications">
          <Bell className="size-5 text-foreground/70" />
          <span className="absolute top-2 right-2.5 size-2 rounded-full bg-destructive border-2 border-white" />
        </button>

        {/* User */}
        <button className="flex items-center gap-3 rounded-md bg-white px-2 py-1.5 hover:bg-muted transition-colors">
          <div className="size-8.5 rounded-full bg-foreground flex items-center justify-center shrink-0">
            <span className="text-background font-heading font-semibold text-sm">A</span>
          </div>
          <div className="flex flex-col text-left pr-1">
            <span className="text-[13px] font-heading font-semibold text-foreground leading-tight">Admin</span>
            <span className="text-[11px] text-muted-foreground font-sans leading-tight">Super Admin</span>
          </div>
          <ChevronDown className="size-3.5 text-muted-foreground shrink-0" />
        </button>
      </div>
    </header>
  );
}
