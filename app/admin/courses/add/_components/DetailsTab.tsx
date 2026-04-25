"use client";

import {
  AlignCenter,
  Bold,
  ChevronRight,
  ChevronUp,
  Code,
  Edit2,
  FileCode,
  FileText,
  GripVertical,
  Image as ImageIcon,
  Italic,
  Link as LinkIcon,
  List,
  ListOrdered,
  Plus,
  Quote,
  Trash2,
  Underline,
  Upload,
  Video,
} from "lucide-react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface DetailsTabProps {
  status: string;
  setStatus: (status: string) => void;
  outcomes: string[];
  setActiveTab: (tab: string) => void;
}

export function DetailsTab({
  status,
  setStatus,
  outcomes,
  setActiveTab,
}: DetailsTabProps) {
  return (
    <div className="flex items-start w-full gap-6 pb-24">
      {/* COLUMN 1: Content (approx 46%) */}
      <div className="flex flex-col flex-[1.8] shrink-0 gap-6 min-w-0">
        {/* Title */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1">
            <Label className="text-ink-deep font-sans font-medium text-xs">
              Course Title
            </Label>
            <span className="text-red-500 text-xs">*</span>
          </div>
          <Input
            placeholder="Enter course title"
            className="h-10 rounded-md px-3 bg-background border border-border text-ink-deep text-sm focus-visible:ring-0 focus-visible:border-ink-deep placeholder:text-text-muted"
          />
        </div>

        {/* Short Description */}
        <div className="flex flex-col gap-2 relative">
          <div className="flex items-center gap-1">
            <Label className="text-ink-deep font-sans font-medium text-xs">
              Short Description
            </Label>
            <span className="text-red-500 text-xs">*</span>
          </div>
          <Textarea
            placeholder="Write a short description about the course"
            className="min-h-[100px] rounded-md px-3 py-2 bg-background border border-border text-ink-deep text-sm focus-visible:ring-0 focus-visible:border-ink-deep placeholder:text-text-muted resize-none"
          />
          <span className="absolute bottom-2 right-3 text-[10px] text-text-muted">
            0/160
          </span>
        </div>

        {/* Full Description */}
        <div className="flex flex-col gap-2 relative">
          <div className="flex items-center gap-1">
            <Label className="text-ink-deep font-sans font-medium text-xs">
              Full Description
            </Label>
            <span className="text-red-500 text-xs">*</span>
          </div>
          <div className="flex flex-col rounded-md border border-border bg-background overflow-hidden">
            <div className="flex items-center justify-between p-2 border-b border-border bg-surface-dim">
              <div className="flex items-center gap-2">
                <Select defaultValue="p">
                  <SelectTrigger className="h-8 w-24 bg-transparent border-0 focus:ring-0 text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="p">Paragraph</SelectItem>
                    <SelectItem value="h1">Heading 1</SelectItem>
                    <SelectItem value="h2">Heading 2</SelectItem>
                  </SelectContent>
                </Select>
                <div className="w-px h-4 bg-border mx-1" />
                <div className="flex items-center gap-1">
                  <Button variant="ghost" size="icon" className="size-7">
                    <Bold className="size-3.5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="size-7">
                    <Italic className="size-3.5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="size-7">
                    <Underline className="size-3.5" />
                  </Button>
                </div>
                <div className="w-px h-4 bg-border mx-1" />
                <div className="flex items-center gap-1">
                  <Button variant="ghost" size="icon" className="size-7">
                    <List className="size-3.5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="size-7">
                    <ListOrdered className="size-3.5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="size-7">
                    <AlignCenter className="size-3.5" />
                  </Button>
                </div>
                <div className="w-px h-4 bg-border mx-1" />
                <div className="flex items-center gap-1">
                  <Button variant="ghost" size="icon" className="size-7">
                    <LinkIcon className="size-3.5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="size-7">
                    <ImageIcon className="size-3.5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="size-7">
                    <Quote className="size-3.5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="size-7">
                    <Code className="size-3.5" />
                  </Button>
                </div>
              </div>
            </div>
            <Textarea
              placeholder="Write a detailed description about the course..."
              className="min-h-[250px] border-0 rounded-none focus-visible:ring-0 text-sm placeholder:text-text-muted resize-none"
            />
          </div>
          <span className="absolute bottom-2 right-3 text-[10px] text-text-muted">
            0/2000
          </span>
        </div>

        {/* Outcomes */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-1">
            <Label className="text-ink-deep font-sans font-medium text-xs">
              What will students learn?
            </Label>
            <span className="text-red-500 text-xs">*</span>
          </div>
          <div className="flex flex-col gap-2 bg-surface-dim/30 p-4 rounded-lg border border-border/50">
            {outcomes.map((outcome) => (
              <div key={outcome} className="flex items-center gap-3">
                <div className="size-1 rounded-full bg-text-secondary" />
                <Input
                  defaultValue={outcome}
                  className="h-9 bg-transparent border-0 border-b border-border/40 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary text-sm italic"
                />
              </div>
            ))}
            <Button
              variant="outline"
              className="flex items-center w-fit rounded-md py-1.5 px-3 gap-2 bg-background border border-border text-ink-deep font-sans font-medium text-xs hover:bg-surface-dim transition-colors mt-2"
            >
              <Plus className="size-3.5" />
              Add Outcome
            </Button>
          </div>
        </div>

        {/* Instructors */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1">
            <Label className="text-ink-deep font-sans font-medium text-xs">
              Course Instructors
            </Label>
            <span className="text-red-500 text-xs">*</span>
          </div>
          <div className="flex flex-col gap-3">
            <Select>
              <SelectTrigger className="h-10 rounded-md px-3 bg-background border border-border text-text-muted text-sm focus:ring-0 focus:border-ink-deep">
                <SelectValue placeholder="Search instructors..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="john">John Smith</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex items-center gap-2 p-2 rounded-lg border border-border bg-surface-dim w-fit">
              <Avatar className="size-8">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <span className="text-ink-deep font-sans font-medium text-xs pr-2">
                John Smith
              </span>
              <button
                type="button"
                className="text-text-muted hover:text-red-500 transition-colors"
              >
                <Plus className="size-3.5 rotate-45" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* COLUMN 2: Settings (approx 26%) */}
      <div className="flex flex-col flex-1 shrink-0 gap-6 min-w-0">
        {/* Cover Image */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1">
            <Label className="text-ink-deep font-sans font-medium text-xs">
              Course Cover Image
            </Label>
            <span className="text-red-500 text-xs">*</span>
          </div>
          <div className="relative aspect-4/3 rounded-lg border border-dashed border-border bg-surface-dim flex flex-col items-center justify-center gap-4 group hover:border-primary transition-colors cursor-pointer overflow-hidden p-6 text-center">
            <div className="size-10 rounded-full bg-background flex items-center justify-center border border-border shadow-sm">
              <Upload className="size-5 text-text-secondary" />
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-ink-deep font-sans font-medium text-xs">
                Upload course cover image
              </span>
              <p className="text-text-secondary font-sans text-[10px] max-w-[150px]">
                Recommended size: 1280x720px JPG, PNG or WebP (Max 5MB)
              </p>
            </div>
            <Button variant="outline" className="h-8 px-4 text-xs">
              Upload Image
            </Button>
          </div>
        </div>

        {/* Preview */}
        <div className="flex flex-col gap-2">
          <Label className="text-ink-deep font-sans font-medium text-xs">
            Preview
          </Label>
          <div className="relative aspect-video rounded-lg overflow-hidden border border-border">
            <Image
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800"
              alt="Preview"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Preview Video */}
        <div className="flex flex-col gap-2">
          <Label className="text-ink-deep font-sans font-medium text-xs">
            Course Preview Video (Optional)
          </Label>
          <Input
            placeholder="Enter YouTube or Vimeo link"
            className="h-10 rounded-md px-3 bg-background border border-border text-ink-deep text-sm focus-visible:ring-0 focus-visible:border-ink-deep placeholder:text-text-muted"
          />
          <p className="text-text-muted font-sans text-[10px]">
            Add a preview video link (YouTube or Vimeo).
          </p>
        </div>

        {/* Status */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-1">
            <Label className="text-ink-deep font-sans font-medium text-xs">
              Course Status
            </Label>
            <span className="text-red-500 text-xs">*</span>
          </div>
          <div className="flex flex-col rounded-lg border border-border bg-background overflow-hidden">
            <button
              type="button"
              onClick={() => setStatus("draft")}
              className={cn(
                "flex items-start gap-3 p-3 border-b border-border transition-colors text-left",
                status === "draft" ? "bg-white" : "bg-surface-dim/50",
              )}
            >
              <div
                className={cn(
                  "size-4 rounded-full border mt-0.5 flex items-center justify-center transition-all",
                  status === "draft"
                    ? "border-primary border-4"
                    : "border-border",
                )}
              />
              <div className="flex flex-col gap-0.5">
                <span className="text-ink-deep font-sans font-medium text-xs">
                  Draft
                </span>
                <p className="text-text-secondary font-sans text-[10px]">
                  Save as draft and continue editing later
                </p>
              </div>
            </button>
            <button
              type="button"
              onClick={() => setStatus("published")}
              className={cn(
                "flex items-start gap-3 p-3 border-b border-border transition-colors text-left",
                status === "published" ? "bg-white" : "bg-surface-dim/50",
              )}
            >
              <div
                className={cn(
                  "size-4 rounded-full border mt-0.5 flex items-center justify-center transition-all",
                  status === "published"
                    ? "border-primary border-4"
                    : "border-border",
                )}
              />
              <div className="flex flex-col gap-0.5">
                <span className="text-ink-deep font-sans font-medium text-xs">
                  Published
                </span>
                <p className="text-text-secondary font-sans text-[10px]">
                  Make course available to students
                </p>
              </div>
            </button>
            <button
              type="button"
              onClick={() => setStatus("scheduled")}
              className={cn(
                "flex items-start gap-3 p-3 transition-colors text-left",
                status === "scheduled" ? "bg-white" : "bg-surface-dim/50",
              )}
            >
              <div
                className={cn(
                  "size-4 rounded-full border mt-0.5 flex items-center justify-center transition-all",
                  status === "scheduled"
                    ? "border-primary border-4"
                    : "border-border",
                )}
              />
              <div className="flex flex-col gap-0.5">
                <span className="text-ink-deep font-sans font-medium text-xs">
                  Scheduled
                </span>
                <p className="text-text-secondary font-sans text-[10px]">
                  Publish course at a specific date and time
                </p>
              </div>
            </button>
          </div>
        </div>

        {/* Language */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1">
            <Label className="text-ink-deep font-sans font-medium text-xs">
              Course Language
            </Label>
            <span className="text-red-500 text-xs">*</span>
          </div>
          <Select defaultValue="en">
            <SelectTrigger className="h-10 rounded-md bg-background border border-border text-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Tags */}
        <div className="flex flex-col gap-2">
          <Label className="text-ink-deep font-sans font-medium text-xs">
            Tags
          </Label>
          <Input
            placeholder="Add tags..."
            className="h-10 rounded-md px-3 bg-background border border-border text-sm"
          />
          <p className="text-text-muted font-sans text-[10px]">
            Press Enter to add multiple tags
          </p>
        </div>
      </div>

      {/* COLUMN 3: Sidebar (approx 28%) */}
      <div className="flex flex-col flex-[1.1] shrink-0 gap-6 min-w-0">
        {/* Curriculum Sidebar */}
        <Card className="border border-border bg-background shadow-none overflow-hidden">
          <CardHeader className="px-4 py-3 border-b border-border flex flex-row items-center justify-between space-y-0">
            <div className="flex items-center gap-2">
              <GripVertical className="size-4 text-text-muted" />
              <CardTitle className="text-ink-deep font-sans font-semibold text-sm">
                Course Curriculum
              </CardTitle>
            </div>
            <ChevronUp className="size-4 text-text-muted" />
          </CardHeader>
          <CardContent className="p-4 flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <span className="text-ink-deep font-sans font-medium text-xs">
                Modules
              </span>
              <Button className="h-8 px-3 gap-1.5 bg-black hover:bg-ink-deep text-white text-[10px] font-semibold transition-colors">
                <Plus className="size-3" />
                Add Module
              </Button>
            </div>

            <div className="flex flex-col gap-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="flex flex-col rounded-md border border-border overflow-hidden"
                >
                  <div className="flex items-center justify-between p-2.5 bg-surface-dim/50 border-b border-border/50">
                    <div className="flex items-center gap-2">
                      <GripVertical className="size-3.5 text-text-muted" />
                      <span className="text-ink-deep font-sans font-semibold text-[11px]">
                        Module {i}:{" "}
                        {i === 1 ? "Getting Started" : "Content Section"}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Edit2 className="size-3 text-text-muted cursor-pointer" />
                      <Trash2 className="size-3 text-text-muted cursor-pointer" />
                    </div>
                  </div>
                  {i === 1 && (
                    <div className="flex flex-col p-2 gap-2 bg-white">
                      <div className="flex flex-col gap-1.5">
                        <span className="text-ink-deep font-sans font-medium text-[10px]">
                          Lessons (3)
                        </span>
                        <div className="flex flex-col gap-1.5 pl-4 border-l border-border/50">
                          <div className="flex flex-col gap-0.5">
                            <span className="text-ink-deep font-sans font-medium text-[10px]">
                              1. Introduction to the Course
                            </span>
                            <div className="flex items-center gap-3 text-text-muted text-[9px]">
                              <span className="flex items-center gap-1">
                                <Video className="size-2.5" /> Video
                              </span>
                              <span>08:45</span>
                            </div>
                          </div>
                          <div className="flex flex-col gap-0.5 opacity-60">
                            <span className="text-ink-deep font-sans font-medium text-[10px]">
                              2. Course Overview
                            </span>
                            <div className="flex items-center gap-3 text-text-muted text-[9px]">
                              <span className="flex items-center gap-1">
                                <FileText className="size-2.5" /> Article
                              </span>
                              <span>05:30</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        className="h-7 w-fit px-3 gap-1 text-[9px] border-dashed"
                      >
                        <Plus className="size-2.5" /> Add Lesson
                      </Button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Resources Sidebar */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <span className="text-ink-deep font-sans font-medium text-sm">
              Lesson Resources
            </span>
            <p className="text-text-secondary font-sans text-[10px]">
              Add resources that will be available to students in this course.
            </p>
          </div>
          <Button
            variant="outline"
            className="h-9 w-fit px-4 gap-2 border-border text-ink-deep text-xs font-medium"
          >
            <Plus className="size-3.5" /> Add Resource
          </Button>
          <div className="flex flex-col gap-3">
            <span className="text-ink-deep font-sans font-medium text-[10px]">
              Resource Types
            </span>
            <div className="grid grid-cols-4 gap-4">
              {[
                { icon: FileText, label: "Document", sub: "PDF, DOC, PPT" },
                { icon: FileCode, label: "File", sub: "ZIP, RAR, etc." },
                { icon: LinkIcon, label: "Link", sub: "External URL" },
                { icon: ImageIcon, label: "Code", sub: "Source Code" },
              ].map((res) => {
                const Icon = res.icon;
                return (
                  <div
                    key={res.label}
                    className="flex flex-col items-center text-center gap-1"
                  >
                    <div className="size-8 rounded-lg border border-border flex items-center justify-center text-text-secondary">
                      <Icon className="size-4" />
                    </div>
                    <span className="text-ink-deep font-sans font-medium text-[9px]">
                      {res.label}
                    </span>
                    <p className="text-text-muted font-sans text-[8px] leading-tight">
                      {res.sub}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="fixed bottom-0 left-[260px] right-0 h-20 bg-background border-t border-border px-10 flex items-center justify-end gap-3 z-10 shadow-lg">
        <Button
          variant="outline"
          className="h-10 px-6 font-medium text-sm border-border text-ink-deep"
        >
          Cancel
        </Button>
        <Button className="h-10 px-6 font-medium text-sm bg-ink-deep hover:bg-black text-white flex items-center gap-2">
          <FileCode className="size-4" /> Save as Draft
        </Button>
        <Button
          onClick={() => setActiveTab("curriculum")}
          className="h-10 px-6 font-medium text-sm bg-primary hover:bg-ink-deep text-white flex items-center gap-2"
        >
          Continue to Curriculum <ChevronRight className="size-4" />
        </Button>
      </div>
    </div>
  );
}
