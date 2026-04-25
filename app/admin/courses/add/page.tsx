"use client";

import {
  AlignCenter,
  ArrowRight,
  Bold,
  ChevronRight,
  ChevronUp,
  Code,
  Edit2,
  FileText,
  GripVertical,
  Image as ImageIcon,
  Italic,
  Link as LinkIcon,
  List,
  ListOrdered,
  PlayCircle,
  Plus,
  Quote,
  Trash2,
  Underline,
  Upload,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
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

export default function AddCoursePage() {
  const [status, setStatus] = React.useState("draft");
  const [outcomes, _setOutcomes] = React.useState([
    "Learn the fundamentals of web development",
    "Build responsive layouts with Tailwind CSS",
    "Master React hooks and state management",
  ]);
  const [instructors, _setInstructors] = React.useState([
    { name: "John Smith", avatar: "https://i.pravatar.cc/150?u=john" },
  ]);

  const handleKeyDown = (e: React.KeyboardEvent, value: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setStatus(value);
    }
  };

  return (
    <div className="[font-synthesis:none] w-full min-h-full flex flex-col py-8 px-10 gap-8 bg-background antialiased text-xs relative pb-32">
      {/* Breadcrumbs */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <Link
            href="/admin/courses"
            className="text-text-secondary font-sans text-xs hover:text-ink-deep transition-colors"
          >
            Courses
          </Link>
          <ChevronRight className="size-3 text-text-secondary" />
          <span className="text-text-secondary font-sans text-xs">
            Add Course
          </span>
        </div>
        <div className="flex flex-col gap-1.5">
          <h1 className="text-ink-deep font-heading font-semibold m-0 text-3xl">
            Add Course
          </h1>
          <p className="text-text-secondary font-sans m-0 text-sm">
            Create a new course and add all the necessary details.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-8 border-b border-border">
        <div className="pb-3 border-b-2 border-primary cursor-pointer">
          <span className="text-ink-deep font-sans font-medium text-sm">
            Course Details
          </span>
        </div>
        <div className="pb-3 cursor-pointer group">
          <span className="text-text-secondary font-sans font-medium text-sm group-hover:text-ink-deep transition-colors">
            Curriculum
          </span>
        </div>
        <div className="pb-3 cursor-pointer group">
          <span className="text-text-secondary font-sans font-medium text-sm group-hover:text-ink-deep transition-colors">
            Pricing
          </span>
        </div>
        <div className="pb-3 cursor-pointer group">
          <span className="text-text-secondary font-sans font-medium text-sm group-hover:text-ink-deep transition-colors">
            Settings
          </span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex items-start w-full gap-6 h-fit">
        {/* COLUMN 1: Basic Details (w-125 -> 500px) */}
        <div className="flex flex-col w-[500px] shrink-0 gap-6">
          {/* Title */}
          <div className="flex flex-col gap-2">
            <Label className="text-ink-deep font-sans font-medium text-xs">
              Course Title *
            </Label>
            <Input
              placeholder="Enter course title"
              className="h-9 rounded-md px-3 bg-background border border-border text-ink-deep text-sm focus-visible:ring-0 focus-visible:border-ink-deep placeholder:text-text-muted"
            />
          </div>

          {/* Short Description */}
          <div className="flex flex-col gap-2">
            <Label className="text-ink-deep font-sans font-medium text-xs">
              Short Description *
            </Label>
            <div className="flex flex-col rounded-md bg-background border border-border p-3 focus-within:border-ink-deep transition-colors">
              <Textarea
                placeholder="Write a short description about the course"
                className="min-h-12 border-0 p-0 text-ink-deep text-sm focus-visible:ring-0 resize-none placeholder:text-text-muted"
              />
              <div className="text-right mt-2 text-text-muted font-sans text-xs">
                0/160
              </div>
            </div>
          </div>

          {/* Full Description */}
          <div className="flex flex-col gap-2">
            <Label className="text-ink-deep font-sans font-medium text-xs">
              Full Description *
            </Label>
            <div className="flex flex-col rounded-md bg-background border border-border overflow-hidden focus-within:border-ink-deep transition-all">
              <div className="flex items-center py-2 px-3 gap-3 border-b border-border overflow-x-auto no-scrollbar">
                <div className="flex items-center gap-1 cursor-pointer shrink-0">
                  <span className="text-ink-deep font-sans font-medium text-xs">
                    Paragraph
                  </span>
                  <ChevronUp className="size-3 rotate-90 text-ink-deep" />
                </div>
                <div className="w-px h-4 bg-border shrink-0" />
                <div className="flex items-center gap-2 shrink-0">
                  <Bold className="size-4 text-text-description cursor-pointer" />
                  <Italic className="size-4 text-text-description cursor-pointer" />
                  <Underline className="size-4 text-text-description cursor-pointer" />
                </div>
                <div className="w-px h-4 bg-border shrink-0" />
                <div className="flex items-center gap-2 shrink-0">
                  <List className="size-4 text-text-description cursor-pointer" />
                  <ListOrdered className="size-4 text-text-description cursor-pointer" />
                  <AlignCenter className="size-4 text-text-description cursor-pointer" />
                </div>
                <div className="w-px h-4 bg-border shrink-0" />
                <div className="flex items-center gap-2 shrink-0">
                  <LinkIcon className="size-4 text-text-description cursor-pointer" />
                  <ImageIcon className="size-4 text-text-description cursor-pointer" />
                  <Quote className="size-4 text-text-description cursor-pointer" />
                  <Code className="size-4 text-text-description cursor-pointer" />
                </div>
              </div>
              <div className="min-h-30 flex flex-col justify-between p-3">
                <Textarea
                  placeholder="Write a detailed description about the course..."
                  className="border-0 p-0 text-ink-deep text-sm focus-visible:ring-0 resize-none placeholder:text-text-muted"
                />
                <div className="text-right text-text-muted font-sans text-xs mt-2">
                  0/2000
                </div>
              </div>
            </div>
          </div>

          {/* Category & Level */}
          <div className="flex gap-4">
            <div className="flex flex-col grow shrink basis-[0%] gap-2">
              <Label className="text-ink-deep font-sans font-medium text-xs">
                Category *
              </Label>
              <Select>
                <SelectTrigger className="h-9 rounded-md px-3 bg-background border border-border text-text-muted text-sm focus:ring-0 focus:border-ink-deep">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="web">Web Development</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col grow shrink basis-[0%] gap-2">
              <Label className="text-ink-deep font-sans font-medium text-xs">
                Level *
              </Label>
              <Select>
                <SelectTrigger className="h-9 rounded-md px-3 bg-background border border-border text-text-muted text-sm focus:ring-0 focus:border-ink-deep">
                  <SelectValue placeholder="Select level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Beginner</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Learning Outcomes */}
          <div className="flex flex-col gap-2">
            <Label className="text-ink-deep font-sans font-medium text-xs">
              What will students learn? *
            </Label>
            <div className="flex flex-col gap-2 items-center justify-center rounded-md bg-surface-dim border border-border p-2.5">
              {outcomes.map((outcome) => (
                <div
                  key={outcome}
                  className="flex items-center gap-2 self-stretch"
                >
                  <div className="rounded-full bg-ink-deep shrink-0 size-1" />
                  <span className="text-text-secondary font-sans text-sm">
                    {outcome}
                  </span>
                </div>
              ))}
            </div>
            <Button
              variant="outline"
              className="flex items-center w-fit mt-1 rounded-md py-1.5 px-3 gap-1.5 bg-background border border-border text-ink-deep font-sans font-medium text-xs"
            >
              <Plus className="size-3.5" />
              Add Outcome
            </Button>
          </div>

          {/* Instructors */}
          <div className="flex flex-col gap-2">
            <Label className="text-ink-deep font-sans font-medium text-xs">
              Course Instructors *
            </Label>
            <div className="flex flex-col gap-2">
              <div className="relative">
                <Input
                  placeholder="Search instructors..."
                  className="h-9 rounded-md pl-3 pr-9 bg-background border border-border text-text-muted text-sm focus-visible:ring-0 focus-visible:border-ink-deep"
                />
                <ChevronUp className="absolute right-3 top-1/2 -translate-y-1/2 size-3.5 rotate-180 text-text-secondary" />
              </div>
              <div className="flex items-center w-fit rounded-full pr-2 pl-1 gap-1.5 bg-surface py-1 border border-border">
                <Avatar className="size-5">
                  <AvatarImage src={instructors[0].avatar} />
                  <AvatarFallback>
                    {instructors[0].name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <span className="text-ink-deep font-sans text-xs font-medium">
                  {instructors[0].name}
                </span>
                <X className="size-3 text-text-secondary cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        {/* COLUMN 2: Media & Status (w-75 -> 300px) */}
        <div className="flex flex-col w-[300px] shrink-0 gap-6">
          {/* Cover Image */}
          <div className="flex flex-col gap-2">
            <Label className="text-ink-deep font-sans font-medium text-xs">
              Course Cover Image *
            </Label>
            <div className="flex flex-col items-center justify-center rounded-md gap-3 bg-background border border-dashed border-border p-6 hover:bg-surface-dim transition-colors cursor-pointer">
              <Upload className="size-6 text-text-secondary" />
              <div className="flex flex-col gap-1 text-center">
                <span className="text-ink-deep font-sans font-medium text-xs">
                  Upload course cover image
                </span>
                <span className="text-text-muted font-sans whitespace-pre-wrap text-[10px]">
                  Recommended size: 1280x720px{"\n"}JPG, PNG or WebP (Max 5MB)
                </span>
              </div>
              <Button
                variant="outline"
                className="mt-1 rounded-md py-2 px-4 border border-border text-ink-deep font-sans font-medium text-xs"
              >
                Upload Image
              </Button>
            </div>
            <div className="mt-2 flex flex-col gap-2">
              <span className="text-ink-deep font-sans font-medium text-[10px]">
                Preview
              </span>
              <div className="w-full aspect-video flex items-center justify-center rounded-md overflow-hidden bg-surface-dim border border-border relative">
                <Image
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600"
                  alt="Preview"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
                  priority
                  className="object-cover opacity-50"
                />
              </div>
            </div>
          </div>

          {/* Preview Video */}
          <div className="flex flex-col gap-2">
            <Label className="text-ink-deep font-sans font-medium text-xs">
              Course Preview Video (Optional)
            </Label>
            <Input
              placeholder="Enter YouTube or Vimeo link"
              className="h-9 rounded-md px-3 bg-background border border-border text-ink-deep text-sm focus-visible:ring-0 focus-visible:border-ink-deep placeholder:text-text-muted"
            />
            <p className="text-text-secondary font-sans text-[10px]">
              Add a preview video link (YouTube or Vimeo).
            </p>
          </div>

          {/* Status */}
          <div className="flex flex-col gap-2">
            <Label className="text-ink-deep font-sans font-medium text-xs">
              Course Status *
            </Label>
            <div className="flex flex-col rounded-md overflow-hidden bg-background border border-border">
              <button
                type="button"
                className={cn(
                  "flex gap-3 border-b border-border p-3 text-left transition-colors outline-none focus:bg-surface-dim",
                  status === "draft"
                    ? "bg-background"
                    : "bg-surface-dim opacity-60",
                )}
                onClick={() => setStatus("draft")}
                onKeyDown={(e) => handleKeyDown(e, "draft")}
              >
                <div
                  className={cn(
                    "shrink-0 mt-0.5 rounded-full border-4 size-4 transition-all",
                    status === "draft"
                      ? "border-primary bg-background"
                      : "border-border bg-background border",
                  )}
                />
                <div className="flex flex-col gap-0.5">
                  <span className="text-ink-deep font-sans font-medium text-xs">
                    Draft
                  </span>
                  <span className="text-text-secondary font-sans text-[10px]">
                    Save as draft and continue editing later
                  </span>
                </div>
              </button>
              <button
                type="button"
                className={cn(
                  "flex gap-3 border-b border-border p-3 text-left transition-colors outline-none focus:bg-surface-dim",
                  status === "published"
                    ? "bg-background"
                    : "bg-surface-dim opacity-60",
                )}
                onClick={() => setStatus("published")}
                onKeyDown={(e) => handleKeyDown(e, "published")}
              >
                <div
                  className={cn(
                    "shrink-0 mt-0.5 rounded-full border size-4 transition-all",
                    status === "published"
                      ? "border-primary border-4"
                      : "border-border bg-background",
                  )}
                />
                <div className="flex flex-col gap-0.5">
                  <span className="text-ink-deep font-sans font-medium text-xs">
                    Published
                  </span>
                  <span className="text-text-secondary font-sans text-[10px]">
                    Make course available to students
                  </span>
                </div>
              </button>
              <button
                type="button"
                className={cn(
                  "flex gap-3 p-3 text-left transition-colors outline-none focus:bg-surface-dim",
                  status === "scheduled"
                    ? "bg-background"
                    : "bg-surface-dim opacity-60",
                )}
                onClick={() => setStatus("scheduled")}
                onKeyDown={(e) => handleKeyDown(e, "scheduled")}
              >
                <div
                  className={cn(
                    "shrink-0 mt-0.5 rounded-full border size-4 transition-all",
                    status === "scheduled"
                      ? "border-primary border-4"
                      : "border-border bg-background",
                  )}
                />
                <div className="flex flex-col gap-0.5">
                  <span className="text-ink-deep font-sans font-medium text-xs">
                    Scheduled
                  </span>
                  <span className="text-text-secondary font-sans text-[10px]">
                    Publish course at a specific date and time
                  </span>
                </div>
              </button>
            </div>
          </div>

          {/* Language */}
          <div className="flex flex-col gap-2">
            <Label className="text-ink-deep font-sans font-medium text-xs">
              Course Language *
            </Label>
            <Select>
              <SelectTrigger className="h-9 rounded-md px-3 bg-background border border-border text-text-muted text-sm focus:ring-0 focus:border-ink-deep">
                <SelectValue placeholder="Select language" />
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
              className="h-9 rounded-md px-3 bg-background border border-border text-ink-deep text-sm focus-visible:ring-0 focus-visible:border-ink-deep placeholder:text-text-muted"
            />
            <p className="text-text-secondary font-sans text-[10px]">
              Press Enter to add multiple tags
            </p>
          </div>
        </div>

        {/* COLUMN 3: Curriculum (grow) */}
        <div className="flex flex-col grow shrink basis-[0%] gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex flex-col gap-0.5">
                  <div className="size-1 rounded-full bg-text-secondary" />
                  <div className="size-1 rounded-full bg-text-secondary" />
                  <div className="size-1 rounded-full bg-text-secondary" />
                </div>
                <span className="text-ink-deep font-sans font-medium text-sm">
                  Course Curriculum
                </span>
              </div>
              <ChevronUp className="size-4 text-text-secondary" />
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-ink-deep font-sans font-medium text-xs">
                Modules
              </span>
              <Button className="h-8 px-3 gap-1.5 bg-primary hover:bg-ink-deep text-primary-foreground text-xs font-medium transition-colors">
                <Plus className="size-3.5" />
                Add Module
              </Button>
            </div>

            {/* Module 1 */}
            <div className="flex flex-col rounded-md overflow-clip bg-background border border-border">
              <div className="flex items-center justify-between bg-surface-dim border-b border-border p-3">
                <div className="flex items-center gap-2">
                  <GripVertical className="size-3.5 text-text-muted" />
                  <span className="text-ink-deep font-sans font-medium text-xs">
                    Module 1: Getting Started
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Edit2 className="size-3.5 text-ink-deep cursor-pointer hover:opacity-70 transition-opacity" />
                  <Trash2 className="size-3.5 text-ink-deep cursor-pointer hover:opacity-70 transition-opacity" />
                </div>
              </div>
              <div className="flex flex-col gap-3 p-3 bg-background">
                <span className="text-text-secondary font-sans font-medium text-[10px] mb-1">
                  Lessons (3)
                </span>

                <div className="flex gap-3">
                  <PlayCircle className="size-3.5 text-text-secondary mt-0.5 shrink-0" />
                  <div className="flex flex-col gap-0.5">
                    <span className="text-ink-deep font-sans font-medium text-xs leading-tight">
                      1. Introduction to the Course
                    </span>
                    <span className="text-text-secondary font-sans text-[10px]">
                      Video • 08:45
                    </span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <FileText className="size-3.5 text-text-secondary mt-0.5 shrink-0" />
                  <div className="flex flex-col gap-0.5">
                    <span className="text-ink-deep font-sans font-medium text-xs leading-tight">
                      2. Course Overview
                    </span>
                    <span className="text-text-secondary font-sans text-[10px]">
                      Article • 05:30
                    </span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <PlayCircle className="size-3.5 text-text-secondary mt-0.5 shrink-0" />
                  <div className="flex flex-col gap-0.5">
                    <span className="text-ink-deep font-sans font-medium text-xs leading-tight">
                      3. Tools and Setup
                    </span>
                    <span className="text-text-secondary font-sans text-[10px]">
                      Video • 12:15
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-center mt-1 rounded-md gap-1.5 border border-dashed border-border p-2 cursor-pointer hover:bg-surface-dim transition-colors group">
                  <Plus className="size-3.5 text-text-secondary group-hover:text-ink-deep transition-colors" />
                  <span className="text-text-secondary group-hover:text-ink-deep font-sans font-medium text-xs transition-colors">
                    Add Lesson
                  </span>
                </div>
              </div>
            </div>

            {/* Other Modules List */}
            {[
              "Module 2: HTML Fundamentals",
              "Module 3: CSS Fundamentals",
              "Module 4: JavaScript Basics",
              "Module 5: Projects & Practice",
            ].map((mod) => (
              <div
                key={mod}
                className="flex items-center justify-between rounded-md bg-background border border-border p-3 hover:bg-surface-dim transition-colors group"
              >
                <div className="flex items-center gap-2">
                  <GripVertical className="size-3.5 text-text-muted" />
                  <span className="text-ink-deep font-sans font-medium text-xs">
                    {mod}
                  </span>
                </div>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Edit2 className="size-3.5 text-ink-deep cursor-pointer" />
                  <Trash2 className="size-3.5 text-ink-deep cursor-pointer" />
                </div>
              </div>
            ))}
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-ink-deep font-sans font-medium text-sm">
                Lesson Resources
              </span>
              <p className="text-text-secondary font-sans text-[10px]">
                Add resources that will be available to students in this course.
              </p>
            </div>
            <Button
              variant="outline"
              className="flex items-center w-fit rounded-md py-1.5 px-3 gap-1.5 bg-background border border-border text-ink-deep font-sans font-medium text-xs"
            >
              <Plus className="size-3.5" />
              Add Resource
            </Button>
            <div className="flex flex-col gap-2">
              <span className="text-ink-deep font-sans font-medium text-[10px]">
                Resource Types
              </span>
              <div className="flex gap-4">
                <div className="flex flex-col items-center gap-1 min-w-[60px]">
                  <FileText className="size-5 text-text-secondary" />
                  <span className="text-ink-deep font-sans font-medium text-[10px]">
                    Document
                  </span>
                  <span className="text-text-muted font-sans text-[10px] text-center">
                    PDF, DOC, PPT
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1 min-w-[60px]">
                  <div className="size-5 flex items-center justify-center">
                    <div className="size-full border-2 border-text-secondary rounded-xs" />
                  </div>
                  <span className="text-ink-deep font-sans font-medium text-[10px]">
                    File
                  </span>
                  <span className="text-text-muted font-sans text-[10px] text-center">
                    ZIP, RAR, etc.
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1 min-w-[60px]">
                  <LinkIcon className="size-5 text-text-secondary" />
                  <span className="text-ink-deep font-sans font-medium text-[10px]">
                    Link
                  </span>
                  <span className="text-text-muted font-sans text-[10px] text-center">
                    External URL
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1 min-w-[60px]">
                  <Code className="size-5 text-text-secondary" />
                  <span className="text-ink-deep font-sans font-medium text-[10px]">
                    Code
                  </span>
                  <span className="text-text-muted font-sans text-[10px] text-center">
                    Source Code
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="fixed bottom-0 left-[260px] right-0 flex items-center justify-end h-20 bg-background border-t border-border px-10 gap-3 z-10">
        <Button
          variant="outline"
          className="rounded-md py-2 px-6 border border-border text-ink-deep font-sans font-medium text-sm hover:bg-surface-dim transition-colors"
        >
          Cancel
        </Button>
        <Button className="flex items-center rounded-md py-2 px-6 gap-2 bg-primary hover:bg-ink-deep text-primary-foreground transition-colors">
          <span className="font-sans font-medium text-sm">Save as Draft</span>
        </Button>
        <Button className="flex items-center rounded-md py-2 px-6 gap-2 bg-primary hover:bg-ink-deep text-primary-foreground transition-colors">
          <span className="font-sans font-medium text-sm">
            Continue to Curriculum
          </span>
          <ArrowRight className="size-4" />
        </Button>
      </div>
    </div>
  );
}
