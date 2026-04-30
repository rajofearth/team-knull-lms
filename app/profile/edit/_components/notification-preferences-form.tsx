"use client";

import { Checkbox } from "@/components/ui/checkbox";

export function NotificationPreferencesForm() {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-base font-heading font-semibold text-foreground m-0">
        Notification Preferences
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {/* Email Notifications */}
        <div className="flex items-start gap-3">
          <Checkbox
            id="email-notifications"
            defaultChecked
            className="mt-0.5 rounded border-border data-[state=checked]:bg-foreground data-[state=checked]:text-background"
          />
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email-notifications"
              className="text-sm font-semibold text-foreground cursor-pointer"
            >
              Email Notifications
            </label>
            <p className="text-sm text-muted-foreground m-0">
              Receive important updates via email
            </p>
          </div>
        </div>

        {/* Marketing Emails */}
        <div className="flex items-start gap-3">
          <Checkbox
            id="marketing-emails"
            defaultChecked
            className="mt-0.5 rounded border-border data-[state=checked]:bg-foreground data-[state=checked]:text-background"
          />
          <div className="flex flex-col gap-1">
            <label
              htmlFor="marketing-emails"
              className="text-sm font-semibold text-foreground cursor-pointer"
            >
              Marketing Emails
            </label>
            <p className="text-sm text-muted-foreground m-0">
              Receive emails about new courses and offers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
