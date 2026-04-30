"use client";

import { useMutation } from "convex/react";
import { useState } from "react";
import { toast } from "sonner";
import { api } from "@/convex/_generated/api";
import type { UserProfileData } from "@/lib/lms/types";
import { AboutMeForm } from "./about-me-form";
import { EditActions } from "./edit-actions";
import { PersonalInfoForm } from "./personal-info-form";
import { SocialProfilesForm } from "./social-profiles-form";

export function ProfileEditForm({
  user,
  profile,
}: {
  user: UserProfileData["user"];
  profile: UserProfileData["profile"];
}) {
  const updateProfile = useMutation(api.lms.updateUserProfile);
  const [isSaving, setIsSaving] = useState(false);

  // Form states
  const [name, setName] = useState(user.name);
  const [location, setLocation] = useState(profile.location || "");
  const [bio, setBio] = useState(profile.bio || "");
  const [dateOfBirth, setDateOfBirth] = useState(profile.dateOfBirth || "");
  const [phoneNumber, setPhoneNumber] = useState(profile.phoneNumber || "");
  const [socials, setSocials] = useState({
    google: profile.socials?.google || user.email,
    github: profile.socials?.github || "",
    linkedin: profile.socials?.linkedin || "",
  });

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await updateProfile({
        name,
        location,
        bio,
        dateOfBirth,
        phoneNumber,
        socials,
      });
      toast.success("Profile updated successfully");
    } catch (error) {
      toast.error("Failed to update profile");
      console.error(error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="flex flex-col">
      <PersonalInfoForm
        user={user}
        data={{ name, location, dateOfBirth, phoneNumber }}
        onChange={(updates) => {
          if (updates.name !== undefined) setName(updates.name);
          if (updates.location !== undefined) setLocation(updates.location);
          if (updates.dateOfBirth !== undefined)
            setDateOfBirth(updates.dateOfBirth);
          if (updates.phoneNumber !== undefined)
            setPhoneNumber(updates.phoneNumber);
        }}
      />
      <div className="my-10 h-px w-full bg-border" />
      <AboutMeForm
        data={{ bio }}
        onChange={(updates) => {
          if (updates.bio !== undefined) setBio(updates.bio);
        }}
      />
      <div className="my-10 h-px w-full bg-border" />
      <SocialProfilesForm
        user={user}
        data={socials}
        onChange={(updates) => setSocials((prev) => ({ ...prev, ...updates }))}
      />

      <EditActions onSave={handleSave} isSaving={isSaving} />
    </div>
  );
}
