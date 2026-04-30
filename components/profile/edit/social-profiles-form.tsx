"use client";

import { Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { GithubLight } from "@/components/ui/svgs/githubLight";
import { Linkedin } from "@/components/ui/svgs/linkedin";

import type { UserProfileData } from "@/lib/lms/types";

export function SocialProfilesForm({
  user,
  data,
  onChange,
}: {
  user: UserProfileData["user"];
  data: {
    google?: string;
    github?: string;
    linkedin?: string;
  };
  onChange: (updates: Partial<typeof data>) => void;
}) {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-base font-heading font-semibold text-foreground m-0">
        Social Profiles
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {/* Google */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="google"
            className="text-sm font-medium text-foreground"
          >
            Google Email
          </label>
          <div className="relative">
            <Input
              id="google"
              value={data.google || ""}
              onChange={(e) => onChange({ google: e.target.value })}
              placeholder={user.email}
              className="h-10 rounded-xl border-border pl-10"
            />
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
          </div>
        </div>

        {/* GitHub */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="github"
            className="text-sm font-medium text-foreground"
          >
            GitHub Username
          </label>
          <div className="relative">
            <Input
              id="github"
              value={data.github || ""}
              onChange={(e) => onChange({ github: e.target.value })}
              placeholder="username"
              className="h-10 rounded-xl border-border pl-10"
            />
            <GithubLight className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
          </div>
        </div>

        {/* LinkedIn */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="linkedin"
            className="text-sm font-medium text-foreground"
          >
            LinkedIn Handle
          </label>
          <div className="relative">
            <Input
              id="linkedin"
              value={data.linkedin || ""}
              onChange={(e) => onChange({ linkedin: e.target.value })}
              placeholder="profile-id"
              className="h-10 rounded-xl border-border pl-10"
            />
            <Linkedin className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}
