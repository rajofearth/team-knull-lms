"use client";

import { useMutation } from "convex/react";
import { ChevronRight, Eye, FileCode } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { CurriculumTab } from "@/app/admin/courses/add/_components/CurriculumTab";
import { DetailsTab } from "@/app/admin/courses/add/_components/DetailsTab";
import { PricingTab } from "@/app/admin/courses/add/_components/PricingTab";
import { SettingsTab } from "@/app/admin/courses/add/_components/SettingsTab";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { api } from "@/convex/_generated/api";
import type { Doc, Id } from "@/convex/_generated/dataModel";

interface AddCoursePageClientProps {
  initialData?: Doc<"courses">;
  isEditing?: boolean;
}

export function AddCoursePageClient({
  initialData,
  isEditing = false,
}: AddCoursePageClientProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("details");
  const [status, setStatus] = useState(initialData?.status || "draft");
  const [title, setTitle] = useState(initialData?.title || "");
  const [description, setDescription] = useState(
    initialData?.description || "",
  );
  const [selectedInstructorIds, setSelectedInstructorIds] = useState<string[]>(
    initialData?.instructorIds || [],
  );
  const [outcomes, setOutcomes] = useState(
    initialData?.whatYouWillLearn?.map((text, i) => ({
      id: `initial-${i}`,
      text,
    })) || [
      { id: "1", text: "Add key learning outcome" },
      { id: "2", text: "Add key learning outcome" },
      { id: "3", text: "Add key learning outcome" },
    ],
  );
  const [isSaving, setIsSaving] = useState(false);

  const addCourse = useMutation(api.lms.addCourse);
  const updateCourse = useMutation(api.lms.updateCourse);

  const handleInstructorToggle = (id: string) => {
    setSelectedInstructorIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  const handleSave = async (isDraft = true) => {
    if (!title) {
      toast.error("Course title is required");
      return;
    }

    setIsSaving(true);
    const promise = (async () => {
      const payload = {
        title,
        description,
        status: (isDraft ? "draft" : status) as Doc<"courses">["status"],
        instructorIds: selectedInstructorIds as Id<"instructors">[],
        slug: title
          .toLowerCase()
          .trim()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-+|-+$/g, ""),
        whatYouWillLearn: outcomes.map((o) => o.text),
      };

      if (isEditing && initialData) {
        await updateCourse({
          courseId: initialData.id,
          ...payload,
        });
        return "Course updated successfully";
      } else {
        await addCourse(payload);
        return "Course created successfully";
      }
    })();

    toast.promise(promise, {
      loading: isEditing ? "Updating course..." : "Creating course...",
      success: (data) => {
        router.push("/admin/courses");
        return data;
      },
      error: "Something went wrong",
    });

    try {
      await promise;
    } catch (error) {
      console.error(error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col gap-8 bg-white px-10 py-8 text-sm antialiased [font-synthesis:none]">
      <div className="flex flex-col gap-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/admin/courses"
                className="text-[13px] text-text-secondary transition-colors hover:text-ink-deep"
              >
                Courses
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <ChevronRight className="size-3" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage className="text-[13px] text-text-secondary">
                {isEditing ? "Edit Course" : "Add Course"}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex flex-col gap-1.5">
          <h1 className="m-0 text-3xl font-heading font-semibold text-ink-deep">
            {isEditing ? "Edit Course" : "Add Course"}
          </h1>
          <p className="m-0 text-sm font-sans text-text-secondary">
            {isEditing
              ? "Update course details and curriculum."
              : "Create a new course and add all the necessary details."}
          </p>
        </div>
      </div>

      <Tabs
        defaultValue="details"
        value={activeTab}
        onValueChange={setActiveTab}
        className="flex w-full flex-col gap-8"
      >
        <div className="flex items-end justify-between gap-8 border-b border-border">
          <TabsList className="h-auto gap-8 rounded-none border-b-0 bg-transparent p-0">
            {[
              { id: "details", label: "Course Details" },
              { id: "curriculum", label: "Curriculum" },
              { id: "pricing", label: "Pricing" },
              { id: "settings", label: "Settings" },
            ].map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="relative rounded-none border-b-2 border-transparent px-0 pb-3 text-sm font-medium font-sans text-text-secondary transition-colors outline-none hover:text-ink-deep data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-ink-deep data-[state=active]:shadow-none"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="mb-2 flex items-center gap-3">
            <Button
              variant="outline"
              disabled={isSaving}
              className="h-10 gap-2 border border-border bg-background px-6 text-sm font-medium font-sans text-ink-deep transition-colors hover:bg-surface-dim"
            >
              <Eye className="size-4" />
              Preview Course
            </Button>
            <Button
              variant="outline"
              disabled={isSaving}
              onClick={() => handleSave(true)}
              className="h-10 gap-2 border border-border bg-background px-6 text-sm font-medium font-sans text-ink-deep transition-colors hover:bg-surface-dim"
            >
              <FileCode className="size-4" />
              {isSaving
                ? "Saving..."
                : isEditing
                  ? "Save Changes"
                  : "Save as Draft"}
            </Button>
            <Button
              disabled={isSaving}
              onClick={() => handleSave(false)}
              className="h-10 gap-2 bg-primary px-6 text-sm font-medium font-sans text-white transition-colors hover:bg-ink-deep"
            >
              {isSaving ? "Publishing..." : "Publish Course"}
            </Button>
          </div>
        </div>

        <TabsContent value="details" className="mt-0 outline-none">
          <DetailsTab
            status={status}
            setStatus={setStatus}
            outcomes={outcomes}
            setOutcomes={setOutcomes}
            setActiveTab={setActiveTab}
            selectedInstructorIds={selectedInstructorIds}
            onInstructorToggle={handleInstructorToggle}
            title={title}
            setTitle={setTitle}
            description={description}
            setDescription={setDescription}
            onSaveDraft={() => handleSave(true)}
            onPublish={() => handleSave(false)}
            isSaving={isSaving}
          />
        </TabsContent>

        <TabsContent value="curriculum" className="mt-0 outline-none">
          <CurriculumTab setActiveTab={setActiveTab} />
        </TabsContent>

        <TabsContent value="pricing" className="mt-0 outline-none">
          <PricingTab setActiveTab={setActiveTab} />
        </TabsContent>

        <TabsContent value="settings" className="mt-0 outline-none">
          <SettingsTab setActiveTab={setActiveTab} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
