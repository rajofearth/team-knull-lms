import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { AboutMeForm } from "./_components/about-me-form";
import { ChangePasswordForm } from "./_components/change-password-form";
import { EditActions } from "./_components/edit-actions";
import { NotificationPreferencesForm } from "./_components/notification-preferences-form";
import { PersonalInfoForm } from "./_components/personal-info-form";
import { ProfilePhotoSection } from "./_components/profile-photo-section";

export default function EditProfilePage() {
  return (
    <div className="flex flex-col gap-8 p-6 md:p-10 max-w-[1200px] mx-auto w-full">
      <div className="flex flex-col gap-6">
        <Link
          href="/profile/overview"
          className="flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors w-fit"
        >
          <ArrowLeft className="size-4" />
          Back to Overview
        </Link>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-heading font-bold text-foreground m-0">
            Edit Profile
          </h1>
          <p className="text-sm text-muted-foreground m-0">
            Update your personal information and account settings.
          </p>
        </div>
      </div>

      <Card className="flex flex-col p-8 md:p-10 rounded-2xl border-border shadow-none bg-white">
        <ProfilePhotoSection />
        <div className="my-10 h-px w-full bg-border" />
        <PersonalInfoForm />
        <div className="my-10 h-px w-full bg-border" />
        <AboutMeForm />
        <div className="my-10 h-px w-full bg-border" />
        <ChangePasswordForm />
        <div className="my-10 h-px w-full bg-border" />
        <NotificationPreferencesForm />

        <EditActions />
      </Card>
    </div>
  );
}
