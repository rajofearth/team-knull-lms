"use client";

import * as React from "react";
import { ChevronRight, Eye, FileCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

// Modular Components
import { DetailsTab } from "./_components/DetailsTab";
import { CurriculumTab } from "./_components/CurriculumTab";
import { PricingTab } from "./_components/PricingTab";
import { SettingsTab } from "./_components/SettingsTab";

export default function AddCoursePage() {
  const [activeTab, setActiveTab] = React.useState("details");
  const [status, setStatus] = React.useState("draft");
  const [outcomes, _setOutcomes] = React.useState([
    "Add key learning outcome",
    "Add key learning outcome",
    "Add key learning outcome",
  ]);

  return (
    <div className="[font-synthesis:none] min-h-screen flex flex-col py-8 px-10 gap-8 bg-white antialiased text-sm">
      {/* HEADER SECTION */}
      <div className="flex flex-col gap-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/admin/courses" className="text-text-secondary hover:text-ink-deep transition-colors text-[13px]">
                Courses
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <ChevronRight className="size-3" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage className="text-text-secondary text-[13px]">Add Course</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex flex-col gap-1.5">
          <h1 className="text-ink-deep font-heading font-semibold m-0 text-3xl">
            Add Course
          </h1>
          <p className="text-text-secondary font-sans m-0 text-sm">
            Create a new course and add all the necessary details.
          </p>
        </div>
      </div>

      <Tabs
        defaultValue="details"
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full flex flex-col gap-8"
      >
        <div className="flex gap-8 justify-between items-end border-b border-border">
          <TabsList className="bg-transparent h-auto p-0 gap-8 rounded-none border-b-0">
            {[
              { id: "details", label: "Course Details" },
              { id: "curriculum", label: "Curriculum" },
              { id: "pricing", label: "Pricing" },
              { id: "settings", label: "Settings" }
            ].map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="px-0 pb-3 rounded-none border-b-2 border-transparent data-[state=active]:bg-transparent data-[state=active]:border-primary data-[state=active]:text-ink-deep data-[state=active]:shadow-none font-sans font-medium text-sm transition-colors relative outline-none text-text-secondary hover:text-ink-deep"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          
          <div className="flex items-center gap-3 mb-2">
            <Button
              variant="outline"
              className="h-10 px-6 gap-2 bg-background border border-border text-ink-deep font-sans font-medium text-sm hover:bg-surface-dim transition-colors"
            >
              <Eye className="size-4" />
              Preview Course
            </Button>
            <Button
              variant="outline"
              className="h-10 px-6 gap-2 bg-background border border-border text-ink-deep font-sans font-medium text-sm hover:bg-surface-dim transition-colors"
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
