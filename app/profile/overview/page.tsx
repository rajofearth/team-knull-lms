import { DangerZoneCard } from "@/components/profile/overview/danger-zone-card";
import { OverviewProfileCard } from "@/components/profile/overview/overview-profile-card";
import { ProfileCompletionAlert } from "@/components/profile/overview/profile-completion-alert";
import { api } from "@/convex/_generated/api";
import { getToken } from "@/lib/auth-server";

export default async function ProfileOverviewPage() {
  const token = await getToken();
  const { fetchQuery } = await import("convex/nextjs");
  const data = await fetchQuery(api.lms.getUserProfile, {}, { token });

  return (
    <div className="flex flex-col gap-10 p-6 md:p-10 max-w-[1200px] mx-auto w-full">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-heading font-bold text-foreground m-0">
          Profile Overview
        </h1>
        <p className="text-sm text-muted-foreground m-0">
          View and manage your account information and preferences.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <ProfileCompletionAlert isComplete={data.isProfileComplete} />
        <OverviewProfileCard user={data.user} profile={data.profile} />
        <DangerZoneCard />
      </div>
    </div>
  );
}
