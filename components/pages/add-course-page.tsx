"use client";

import { ChevronRight, Eye, FileCode } from "lucide-react";
import { useState } from "react";
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

export function AddCoursePageClient() {
  const [activeTab, setActiveTab] = useState("details");
  const [status, setStatus] = useState("draft");
  const [outcomes] = useState([
    "Add key learning outcome",
    "Add key learning outcome",
    "Add key learning outcome",
  ]);

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
                Add Course
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex flex-col gap-1.5">
          <h1 className="m-0 text-3xl font-heading font-semibold text-ink-deep">
            Add Course
          </h1>
          <p className="m-0 text-sm font-sans text-text-secondary">
            Create a new course and add all the necessary details.
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
              className="h-10 gap-2 border border-border bg-background px-6 text-sm font-medium font-sans text-ink-deep transition-colors hover:bg-surface-dim"
            >
              <Eye className="size-4" />
              Preview Course
            </Button>
            <Button
              variant="outline"
              className="h-10 gap-2 border border-border bg-background px-6 text-sm font-medium font-sans text-ink-deep transition-colors hover:bg-surface-dim"
            >
              <FileCode className="size-4" />
              Save as Draft
            </Button>
          </div>
        </div>

        <TabsContent value="details" className="mt-0 outline-none">
          <DetailsTab
            status={status}
            setStatus={setStatus}
            outcomes={outcomes}
            setActiveTab={setActiveTab}
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
