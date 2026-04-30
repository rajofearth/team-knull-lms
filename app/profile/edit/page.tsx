import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ProfileEditForm } from "@/components/profile/edit/profile-edit-form";
import { ProfilePhotoSection } from "@/components/profile/edit/profile-photo-section";
import { Card } from "@/components/ui/card";
import { api } from "@/convex/_generated/api";
import { getToken } from "@/lib/auth-server";

export default async function EditProfilePage() {
  const token = await getToken();
  const { fetchQuery } = await import("convex/nextjs");
  const data = await fetchQuery(api.lms.getUserProfile, {}, { token });

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
        <ProfilePhotoSection user={data.user} />
        <div className="my-10 h-px w-full bg-border" />

        <ProfileEditForm user={data.user} profile={data.profile} />
      </Card>
    </div>
  );
}
