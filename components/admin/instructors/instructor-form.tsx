"use client";

import { useMutation, useQuery } from "convex/react";
import { ChevronDown, ChevronLeft, Globe, Upload, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { api } from "@/convex/_generated/api";
import type { Id } from "@/convex/_generated/dataModel";
import { useFileUpload } from "@/hooks/use-file-upload";
import type {
  AdminCourseListItem,
  AdminInstructorDetails,
} from "@/lib/lms/types";
import { cn } from "@/lib/utils";

interface InstructorFormProps {
  initialData?: AdminInstructorDetails;
  isEditing?: boolean;
}

export function InstructorForm({
  initialData,
  isEditing = false,
}: InstructorFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const addInstructor = useMutation(api.lms.addInstructor);
  const updateInstructor = useMutation(api.lms.updateInstructor);
  const generateUploadUrl = useMutation(api.files.generateUploadUrl);
  const allCourses =
    (useQuery(api.lms.listAdminCourses) as AdminCourseListItem[]) || [];

  const [formData, setFormData] = useState({
    name: initialData?.name || "",
    slug: initialData?.slug || "",
    email: initialData?.email || "",
    role: initialData?.role || "",
    bio: initialData?.bio || "",
    avatar: initialData?.avatar || "",
    status: initialData?.status || "Active",
    phoneNumber: initialData?.phoneNumber || "",
    website: initialData?.website || "",
    assignedCourseIds: initialData?.assignedCourses?.map((c) => c.id) || [],
  });

  const [
    { files, isDragging },
    { handleDrop, openFileDialog, removeFile, getInputProps },
  ] = useFileUpload({
    maxFiles: 1,
    accept: "image/*",
    multiple: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.slug) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    try {
      let avatarUrl = formData.avatar;

      // Upload image if a new one is selected
      if (files.length > 0) {
        const postUrl = await generateUploadUrl();
        const result = await fetch(postUrl, {
          method: "POST",
          headers: { "Content-Type": files[0].type },
          body: files[0],
        });

        if (!result.ok) throw new Error("Upload failed");

        const { storageId } = await result.json();
        avatarUrl = storageId;
      }

      const payload = {
        ...formData,
        avatar: avatarUrl,
        status: formData.status as "Active" | "Inactive",
        assignedCourseIds: formData.assignedCourseIds as Id<"courses">[],
      };

      if (isEditing && initialData) {
        await updateInstructor({
          instructorId: initialData.id as Id<"instructors">,
          ...payload,
        });
        toast.success("Instructor updated successfully");
      } else {
        await addInstructor(payload);
        toast.success("Instructor created successfully");
      }
      router.push("/admin/instructors");
    } catch (error) {
      console.error(error);
      toast.error(
        isEditing
          ? "Failed to update instructor"
          : "Failed to create instructor",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8 pb-20">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-xs font-sans text-muted-foreground">
            <Link href="/admin/instructors" className="hover:text-foreground">
              Instructors
            </Link>
            <span>›</span>
            <span className="text-foreground font-medium">
              {isEditing ? "Edit Instructor" : "Add Instructor"}
            </span>
          </div>
          <h1 className="text-2xl font-heading font-bold text-foreground mt-2">
            {isEditing ? "Edit Instructor" : "Add Instructor"}
          </h1>
          <p className="text-sm font-sans text-muted-foreground">
            {isEditing
              ? "Update instructor account and set their details."
              : "Create a new instructor account and set their details."}
          </p>
        </div>
        <Link href="/admin/instructors">
          <Button
            variant="outline"
            type="button"
            className="h-9 gap-2 border-border bg-white rounded-md"
          >
            <ChevronLeft className="size-4" />
            <span className="text-sm font-medium">Back to Instructors</span>
          </Button>
        </Link>
      </div>

      {/* Instructor Information */}
      <Card className="border-border shadow-none rounded-md">
        <CardHeader className="pb-4 border-b border-border bg-muted/5">
          <CardTitle className="text-base font-bold font-heading">
            Instructor Information
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label
                htmlFor="name"
                className="text-xs font-bold uppercase tracking-wider text-muted-foreground"
              >
                Full Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="name"
                placeholder="Enter full name"
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                className="h-10 rounded-md border-border"
              />
            </div>

            <div className="grid gap-2">
              <Label
                htmlFor="email"
                className="text-xs font-bold uppercase tracking-wider text-muted-foreground"
              >
                Email Address <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter email address"
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
                className="h-10 rounded-md border-border"
              />
            </div>

            <div className="grid gap-2">
              <Label
                htmlFor="bio"
                className="text-xs font-bold uppercase tracking-wider text-muted-foreground"
              >
                Bio
              </Label>
              <Textarea
                id="bio"
                placeholder="Write a short bio about the instructor..."
                value={formData.bio}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, bio: e.target.value }))
                }
                className="min-h-[120px] rounded-md border-border resize-none"
              />
              <p className="text-[11px] text-muted-foreground">
                Briefly describe the instructor's background and expertise.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label
                htmlFor="slug"
                className="text-xs font-bold uppercase tracking-wider text-muted-foreground"
              >
                Username <span className="text-red-500">*</span>
              </Label>
              <Input
                id="slug"
                placeholder="Enter username"
                value={formData.slug}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, slug: e.target.value }))
                }
                className="h-10 rounded-md border-border"
              />
              <p className="text-[11px] text-muted-foreground">
                This will be used to log in to the platform.
              </p>
            </div>

            <div className="grid gap-2">
              <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Profile Picture
              </Label>
              <button
                type="button"
                className={cn(
                  "relative flex flex-col items-center justify-center border-2 border-dashed border-border rounded-md py-8 transition-colors cursor-pointer w-full",
                  isDragging
                    ? "border-foreground bg-muted/50"
                    : "hover:bg-muted/30",
                )}
                onClick={openFileDialog}
                onDragOver={(e) => {
                  e.preventDefault();
                }}
                onDrop={handleDrop}
              >
                <input {...getInputProps()} />
                {files[0] ? (
                  <div className="flex items-center gap-4">
                    <Image
                      src={files[0].preview}
                      alt="Preview"
                      width={64}
                      height={64}
                      className="size-16 rounded-full object-cover border border-border"
                      unoptimized
                    />
                    <div className="flex flex-col">
                      <span className="text-xs font-bold">{files[0].name}</span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeFile(files[0].name);
                        }}
                        className="text-[10px] text-red-500 font-bold mt-1"
                      >
                        Remove image
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <Upload className="size-6 text-muted-foreground mb-2" />
                    <span className="text-xs font-bold">Upload image</span>
                    <span className="text-[10px] text-muted-foreground mt-1">
                      PNG, JPG up to 2MB
                    </span>
                  </>
                )}
              </button>
            </div>

            <div className="grid gap-2">
              <Label
                htmlFor="phone"
                className="text-xs font-bold uppercase tracking-wider text-muted-foreground"
              >
                Phone Number
              </Label>
              <InputGroup>
                <InputGroupAddon className="px-3 border-r-0 rounded-l-md bg-muted/30">
                  <div className="flex items-center gap-1">
                    <span className="text-xs">🇺🇸</span>
                    <span className="text-xs font-bold">+1</span>
                    <ChevronDown className="size-3" />
                  </div>
                </InputGroupAddon>
                <InputGroupInput
                  id="phone"
                  placeholder="Enter phone number"
                  value={formData.phoneNumber}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      phoneNumber: e.target.value,
                    }))
                  }
                  className="rounded-r-md border-border"
                />
              </InputGroup>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Details */}
      <Card className="border-border shadow-none rounded-md">
        <CardHeader className="pb-4 border-b border-border bg-muted/5">
          <CardTitle className="text-base font-bold font-heading">
            Additional Details
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
          <div className="grid gap-2">
            <Label
              htmlFor="role"
              className="text-xs font-bold uppercase tracking-wider text-muted-foreground"
            >
              Expertise / Specialization
            </Label>
            <Input
              id="role"
              placeholder="e.g., Web Development, Graphic Design"
              value={formData.role}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, role: e.target.value }))
              }
              className="h-10 rounded-md border-border"
            />
            <p className="text-[11px] text-muted-foreground">
              Enter instructor's primary expertise or skills (optional).
            </p>
          </div>

          <div className="grid gap-2">
            <Label
              htmlFor="website"
              className="text-xs font-bold uppercase tracking-wider text-muted-foreground"
            >
              Website (Optional)
            </Label>
            <InputGroup>
              <InputGroupAddon className="px-3 border-r-0 rounded-l-md bg-muted/30">
                <Globe className="size-3.5 text-muted-foreground" />
              </InputGroupAddon>
              <InputGroupInput
                id="website"
                placeholder="https://example.com"
                value={formData.website}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, website: e.target.value }))
                }
                className="rounded-r-md border-border"
              />
            </InputGroup>
            <p className="text-[11px] text-muted-foreground">
              Instructor's personal or professional website.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Account Settings */}
      <Card className="border-border shadow-none rounded-md">
        <CardHeader className="pb-4 border-b border-border bg-muted/5">
          <CardTitle className="text-base font-bold font-heading">
            Account Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
          <div className="grid gap-2">
            <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Assign Courses (Optional)
            </Label>
            <div className="flex flex-wrap gap-2 mb-2">
              {formData.assignedCourseIds.map((id) => {
                const course = allCourses.find((c) => c.id === id);
                if (!course) return null;
                return (
                  <div
                    key={id}
                    className="flex items-center gap-1 bg-muted px-2 py-1 rounded-md border border-border"
                  >
                    <span className="text-xs font-medium">{course.title}</span>
                    <button
                      type="button"
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          assignedCourseIds: prev.assignedCourseIds.filter(
                            (cid) => cid !== id,
                          ),
                        }))
                      }
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <X className="size-3" />
                    </button>
                  </div>
                );
              })}
            </div>
            <Select
              onValueChange={(val) => {
                if (!formData.assignedCourseIds.includes(val)) {
                  setFormData((prev) => ({
                    ...prev,
                    assignedCourseIds: [...prev.assignedCourseIds, val],
                  }));
                }
              }}
            >
              <SelectTrigger className="h-10 rounded-md border-border">
                <SelectValue placeholder="Add courses..." />
              </SelectTrigger>
              <SelectContent className="rounded-md border-border">
                {allCourses
                  .filter((c) => !formData.assignedCourseIds.includes(c.id))
                  .map((course) => (
                    <SelectItem key={course.id} value={course.id}>
                      {course.title}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
            <p className="text-[11px] text-muted-foreground">
              Assign one or more courses to this instructor.
            </p>
          </div>

          <div className="grid gap-2">
            <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Status <span className="text-red-500">*</span>
            </Label>
            <Select
              value={formData.status}
              onValueChange={(val) =>
                setFormData((prev) => ({ ...prev, status: val }))
              }
            >
              <SelectTrigger className="h-10 rounded-md border-border">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent className="rounded-md border-border">
                <SelectItem value="Active">Active</SelectItem>
                <SelectItem value="Inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-[11px] text-muted-foreground">
              Set instructor account status.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Footer Buttons */}
      <div className="flex items-center justify-end gap-3 mt-4">
        <Link href="/admin/instructors">
          <Button
            variant="ghost"
            type="button"
            className="h-10 px-8 font-bold text-sm hover:bg-muted rounded-md"
          >
            Cancel
          </Button>
        </Link>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="h-10 px-8 font-bold text-sm bg-foreground text-background hover:bg-foreground/90 rounded-md"
        >
          {isEditing
            ? isSubmitting
              ? "Updating..."
              : "Update Instructor"
            : isSubmitting
              ? "Creating..."
              : "Create Instructor"}
        </Button>
      </div>
    </form>
  );
}
