"use client";

import { EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";

export function ChangePasswordForm() {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-base font-heading font-semibold text-foreground m-0">
        Change Password
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {/* Current Password */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="current-password"
            className="text-sm font-medium text-foreground"
          >
            Current Password
          </label>
          <div className="relative">
            <Input
              id="current-password"
              type="password"
              placeholder="Enter current password"
              className="h-10 rounded-xl border-border pr-10"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <EyeOff className="size-4" />
            </button>
          </div>
        </div>

        {/* New Password */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="new-password"
            className="text-sm font-medium text-foreground"
          >
            New Password
          </label>
          <div className="relative">
            <Input
              id="new-password"
              type="password"
              placeholder="Enter new password"
              className="h-10 rounded-xl border-border pr-10"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <EyeOff className="size-4" />
            </button>
          </div>
        </div>

        {/* Confirm New Password */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="confirm-password"
            className="text-sm font-medium text-foreground"
          >
            Confirm New Password
          </label>
          <div className="relative">
            <Input
              id="confirm-password"
              type="password"
              placeholder="Confirm new password"
              className="h-10 rounded-xl border-border pr-10"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <EyeOff className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
