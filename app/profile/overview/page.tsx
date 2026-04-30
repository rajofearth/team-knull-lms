import { AboutMeCard } from "./_components/about-me-card";
import { DangerZoneCard } from "./_components/danger-zone-card";
import { LearningPreferencesCard } from "./_components/learning-preferences-card";
import { OverviewProfileCard } from "./_components/overview-profile-card";
import { SocialAccountsCard } from "./_components/social-accounts-card";

export default function ProfileOverviewPage() {
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
        <OverviewProfileCard />
        <AboutMeCard />
        <LearningPreferencesCard />
        <SocialAccountsCard />
        <DangerZoneCard />
      </div>
    </div>
  );
}
