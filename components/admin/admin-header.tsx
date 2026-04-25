"use client";

import { Bell, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function AdminHeader() {
  return (
    <header className="sticky top-0 z-30 flex h-[70px] items-center justify-between border-b border-border bg-white px-6 md:px-10">
      {/* Left: could show breadcrumbs or page title here */}
      <div className="flex items-center gap-3">
        <SidebarTrigger className="size-10 rounded-md text-foreground/70 hover:bg-muted" />
      </div>

      {/* Right: actions */}
      <div className="flex items-center gap-4">
        {/* Bell */}
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="relative size-10 rounded-md hover:bg-muted"
          aria-label="Notifications"
        >
          <Bell className="size-5 text-foreground/70" />
          <span className="absolute top-2 right-2.5 size-2 rounded-full bg-destructive border-2 border-white" />
        </Button>

        {/* User */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              type="button"
              variant="ghost"
              className="h-auto rounded-md bg-white px-2 py-1.5 hover:bg-muted"
            >
              <div className="size-8.5 rounded-full bg-foreground flex items-center justify-center shrink-0">
                <span className="text-background font-heading font-semibold text-sm">
                  A
                </span>
              </div>
              <div className="flex flex-col text-left pr-1">
                <span className="text-[13px] font-heading font-semibold text-foreground leading-tight">
                  Admin
                </span>
                <span className="text-[11px] text-muted-foreground font-sans leading-tight">
                  Super Admin
                </span>
              </div>
              <ChevronDown className="size-3.5 text-muted-foreground shrink-0" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-44">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Sign out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
