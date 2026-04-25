"use client";

import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  FileCode,
} from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

interface SettingsTabProps {
  setActiveTab: (tab: string) => void;
}

export function SettingsTab({ setActiveTab }: SettingsTabProps) {
  return (
    <div className="flex flex-col w-full max-w-6xl pt-6 gap-6 antialiased text-sm pb-24">
      {/* Header Area */}
      <div className="flex flex-col gap-2">
        <h3 className="text-ink-deep font-heading font-semibold text-lg m-0">
          Settings
        </h3>
        <p className="text-text-secondary font-sans text-sm m-0">
          Configure additional settings for your course.
        </p>
      </div>

      {/* Settings Grid Area */}
      <div className="flex rounded-lg gap-10 bg-white border border-border p-8 items-stretch">
        {/* Course Visibility */}
        <div className="flex flex-col grow shrink basis-0 gap-5">
          <Label className="text-ink-deep font-sans font-semibold text-sm">
            Course Visibility
          </Label>
          <RadioGroup defaultValue="public" className="flex flex-col gap-4">
            {/* Public */}
            <div className="flex items-start gap-3">
              <RadioGroupItem value="public" id="public" className="mt-0.5" />
              <div className="flex flex-col gap-0.5">
                <Label
                  htmlFor="public"
                  className="text-ink-deep font-sans font-semibold text-sm cursor-pointer"
                >
                  Public
                </Label>
                <span className="text-text-secondary font-sans text-xs">
                  Anyone can view and enroll in this course
                </span>
              </div>
            </div>

            {/* Unlisted */}
            <div className="flex items-start gap-3">
              <RadioGroupItem
                value="unlisted"
                id="unlisted"
                className="mt-0.5"
              />
              <div className="flex flex-col gap-0.5">
                <Label
                  htmlFor="unlisted"
                  className="text-ink-deep font-sans font-medium text-sm cursor-pointer"
                >
                  Unlisted
                </Label>
                <span className="text-text-secondary font-sans text-xs">
                  Only people with the link can view this course
                </span>
              </div>
            </div>

            {/* Private */}
            <div className="flex items-start gap-3">
              <RadioGroupItem value="private" id="private" className="mt-0.5" />
              <div className="flex flex-col gap-0.5">
                <Label
                  htmlFor="private"
                  className="text-ink-deep font-sans font-medium text-sm cursor-pointer"
                >
                  Private
                </Label>
                <span className="text-text-secondary font-sans text-xs">
                  Only assigned users can view this course
                </span>
              </div>
            </div>
          </RadioGroup>
        </div>

        <div className="w-px bg-surface-dim shrink-0" />

        {/* Certificate */}
        <div className="flex flex-col grow shrink basis-0 gap-5">
          <Label className="text-ink-deep font-sans font-semibold text-sm/4.5">
            Certificate
          </Label>
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-3">
              <Checkbox id="enable-cert" defaultChecked className="mt-0.5" />
              <div className="flex flex-col gap-0.5">
                <Label
                  htmlFor="enable-cert"
                  className="text-ink-deep font-sans font-semibold text-sm cursor-pointer"
                >
                  Enable certificate
                </Label>
                <span className="text-text-secondary font-sans text-xs">
                  Students will get a certificate on completion
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Label className="text-ink-deep font-sans font-medium text-sm">
                Certificate Template
              </Label>
              <Select defaultValue="default">
                <SelectTrigger className="h-9 rounded-md border-border bg-white px-3 text-sm font-sans focus:ring-0">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default Certificate</SelectItem>
                  <SelectItem value="professional">
                    Professional Template
                  </SelectItem>
                </SelectContent>
              </Select>
              <button className="flex items-center gap-1 text-text-secondary hover:text-ink-deep transition-colors group">
                <span className="text-xs font-sans">Preview Certificate</span>
                <ExternalLink className="size-3" />
              </button>
            </div>

            <div className="flex flex-col gap-2">
              <Label className="text-ink-deep font-sans font-medium text-sm">
                Passing Percentage
              </Label>
              <div className="flex gap-2">
                <Input
                  defaultValue="70"
                  className="h-9 grow shrink basis-0 rounded-md border-border bg-white px-3 text-sm font-sans focus-visible:ring-0"
                />
                <div className="flex items-center justify-center rounded-md border border-border shrink-0 size-9 bg-surface-dim/30">
                  <span className="text-text-secondary font-sans text-sm">
                    %
                  </span>
                </div>
              </div>
              <span className="text-text-secondary font-sans text-[10px]">
                Minimum percentage required to pass
              </span>
            </div>
          </div>
        </div>

        <div className="w-px bg-surface-dim shrink-0" />

        {/* Course Access */}
        <div className="flex flex-col grow shrink basis-0 gap-5">
          <Label className="text-ink-deep font-sans font-semibold text-sm">
            Course Access
          </Label>
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-3">
              <Checkbox id="lifetime" defaultChecked className="mt-0.5" />
              <div className="flex flex-col gap-0.5">
                <Label
                  htmlFor="lifetime"
                  className="text-ink-deep font-sans font-semibold text-sm cursor-pointer"
                >
                  Lifetime Access
                </Label>
                <span className="text-text-secondary font-sans text-xs">
                  Students can access the course forever
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Checkbox id="resources" defaultChecked className="mt-0.5" />
              <div className="flex flex-col gap-0.5">
                <Label
                  htmlFor="resources"
                  className="text-ink-deep font-sans font-semibold text-sm cursor-pointer"
                >
                  Downloadable Resources
                </Label>
                <span className="text-text-secondary font-sans text-xs">
                  Allow students to download resources
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Checkbox id="discussion" className="mt-0.5" />
              <div className="flex flex-col gap-0.5">
                <Label
                  htmlFor="discussion"
                  className="text-ink-deep font-sans font-medium text-sm cursor-pointer"
                >
                  Discussion
                </Label>
                <span className="text-text-secondary font-sans text-xs">
                  Enable discussion forum for this course
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-px bg-surface-dim shrink-0" />

        {/* SEO Settings */}
        <div className="flex flex-col grow-[1.5] shrink basis-0 gap-5">
          <Label className="text-ink-deep font-sans font-semibold text-sm">
            SEO Settings
          </Label>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <Label className="text-ink-deep font-sans font-medium text-sm">
                Meta Title
              </Label>
              <Input
                defaultValue="Web Development Bootcamp"
                className="h-9 rounded-md border-border bg-white px-3 text-sm font-sans focus-visible:ring-0"
              />
              <span className="text-text-secondary font-sans text-[10px]">
                Recommended: 50-60 characters
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <Label className="text-ink-deep font-sans font-medium text-sm">
                Meta Description
              </Label>
              <Textarea
                defaultValue="Learn HTML, CSS, JavaScript, and more to build real-world websites."
                className="min-h-20 rounded-md border-border bg-white p-3 text-sm leading-relaxed font-sans resize-none focus-visible:ring-0"
              />
              <span className="text-text-secondary font-sans text-[10px]">
                Recommended: 150-160 characters
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <Label className="text-ink-deep font-sans font-medium text-sm">
                URL Slug
              </Label>
              <Input
                defaultValue="web-development-bootcamp"
                className="h-9 rounded-md border-border bg-white px-3 text-sm font-sans focus-visible:ring-0"
              />
              <span className="text-text-secondary font-sans text-[10px] break-all">
                https://teamknull.com/courses/web-development-bootcamp
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-[260px] right-0 h-20 bg-background border-t border-border px-10 flex items-center justify-between z-10 shadow-lg">
        <Button
          variant="outline"
          onClick={() => setActiveTab("pricing")}
          className="flex items-center rounded-md py-2.5 px-6 gap-2 bg-background border border-border text-ink-deep transition-colors font-medium text-sm hover:bg-surface-dim"
        >
          <ChevronLeft className="size-4" />
          Previous: Pricing
        </Button>
        <div className="flex items-center gap-3">
          <Button className="h-10 px-6 gap-2 bg-black hover:bg-ink-deep text-white text-sm font-semibold transition-colors">
            <FileCode className="size-4" />
            Save as Draft
          </Button>
          <Button className="h-10 px-6 gap-2 bg-primary hover:bg-ink-deep text-white text-sm font-semibold transition-colors shadow-lg">
            Publish Course
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
