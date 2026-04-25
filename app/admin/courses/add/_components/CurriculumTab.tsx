"use client";

import * as React from "react";
import Image from "next/image";
import { 
  Plus, 
  GripVertical, 
  Video, 
  FileText, 
  PlayCircle, 
  Link as LinkIcon, 
  Edit2, 
  Trash2, 
  ChevronRight,
  ChevronUp,
  FileCode,
  CheckCircle2,
  Circle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

interface CurriculumTabProps {
  setActiveTab: (tab: string) => void;
}

const lessons = [
  {
    id: 1,
    title: "1. Introduction to the Course",
    type: "Video",
    icon: <Video className="size-4 text-text-secondary" />,
    duration: "08:45",
    resources: 2,
    preview: true,
  },
  {
    id: 2,
    title: "2. Course Overview",
    type: "Article",
    icon: <FileText className="size-4 text-text-secondary" />,
    duration: "05:30",
    resources: 1,
    preview: true,
  },
  {
    id: 3,
    title: "3. Tools and Setup",
    type: "Video",
    icon: <Video className="size-4 text-text-secondary" />,
    duration: "12:15",
    resources: 3,
    preview: true,
  },
];

export function CurriculumTab({ setActiveTab }: CurriculumTabProps) {
  return (
    <div className="flex items-start w-full gap-8 pb-24">
      {/* Main Content */}
      <div className="flex flex-col flex-2 shrink-0 gap-6">
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-1">
            <h2 className="text-ink-deep font-heading font-semibold m-0 text-lg">
              Curriculum
            </h2>
            <p className="text-text-secondary font-sans m-0 text-xs">
              Build your course by organizing modules, lessons, videos and resources.
            </p>
          </div>
          <div className="flex gap-3">
            <Button
              variant="outline"
              className="h-9 px-4 bg-background border border-border text-ink-deep font-sans font-medium text-xs"
            >
              Expand All
            </Button>
            <Button className="h-9 px-4 gap-1.5 bg-black hover:bg-ink-deep text-white text-xs font-medium transition-colors">
              <Plus className="size-3.5" />
              Add Module
            </Button>
          </div>
        </div>

        <Accordion type="multiple" defaultValue={["module-1"]} className="flex flex-col gap-4">
          {[1, 2, 3, 4, 5].map((moduleIndex) => (
            <AccordionItem
              key={moduleIndex}
              value={`module-${moduleIndex}`}
              className="border border-border rounded-lg bg-background overflow-hidden px-0"
            >
              <div className="flex items-center justify-between bg-surface-dim/30 border-b border-border py-3 px-4">
                <div className="flex items-center gap-3">
                  <GripVertical className="size-4 text-text-muted cursor-grab" />
                  <span className="text-ink-deep font-sans font-semibold text-sm">
                    Module {moduleIndex}: {moduleIndex === 1 ? "Getting Started" : moduleIndex === 2 ? "HTML Fundamentals" : "Advanced Concepts"}
                  </span>
                  <Badge variant="secondary" className="bg-background text-text-secondary font-sans font-medium text-[10px] h-5 px-2">
                    {moduleIndex === 1 ? "3" : "4"} Lessons
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
                  <Edit2 className="size-4 text-text-muted cursor-pointer hover:text-ink-deep" />
                  <Trash2 className="size-4 text-text-muted cursor-pointer hover:text-red-500" />
                  <AccordionTrigger className="p-0 hover:no-underline" />
                </div>
              </div>

              <AccordionContent className="p-0">
                <div className="flex flex-col p-4 bg-background">
                  <Table>
                    <TableHeader className="bg-transparent border-b border-border/50">
                      <TableRow className="hover:bg-transparent border-0 h-10">
                        <TableHead className="w-[300px] text-text-secondary font-sans font-medium text-xs pl-7">
                          Lesson
                        </TableHead>
                        <TableHead className="w-24 text-text-secondary font-sans font-medium text-xs">
                          Type
                        </TableHead>
                        <TableHead className="w-24 text-text-secondary font-sans font-medium text-xs">
                          Duration
                        </TableHead>
                        <TableHead className="w-24 text-text-secondary font-sans font-medium text-xs">
                          Preview
                        </TableHead>
                        <TableHead className="w-24 text-text-secondary font-sans font-medium text-xs">
                          Resources
                        </TableHead>
                        <TableHead className="text-right text-text-secondary font-sans font-medium text-xs pr-4">
                          Actions
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {lessons.map((lesson) => (
                        <TableRow key={lesson.id} className="group hover:bg-surface-dim/50 border-border/50 transition-colors h-14">
                          <TableCell className="py-2 pl-7">
                            <div className="flex items-center gap-3">
                              <GripVertical className="size-3.5 text-text-muted cursor-grab opacity-0 group-hover:opacity-100 transition-opacity absolute left-2" />
                              <span className="text-ink-deep font-sans font-medium text-xs">
                                {lesson.title}
                              </span>
                            </div>
                          </TableCell>
                          <TableCell className="text-text-secondary font-sans text-xs">
                            <div className="flex items-center gap-2">
                              {lesson.icon}
                              <span>{lesson.type}</span>
                            </div>
                          </TableCell>
                          <TableCell className="text-text-secondary font-sans text-xs">
                            {lesson.duration}
                          </TableCell>
                          <TableCell>
                            <PlayCircle className="size-4 text-text-muted hover:text-primary cursor-pointer" />
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-1.5 text-text-secondary font-sans text-xs">
                              <LinkIcon className="size-3.5 text-text-muted" />
                              {lesson.resources}
                            </div>
                          </TableCell>
                          <TableCell className="text-right pr-4">
                            <div className="flex items-center justify-end gap-2">
                              <Edit2 className="size-3.5 text-text-muted cursor-pointer hover:text-ink-deep" />
                              <Trash2 className="size-3.5 text-text-muted cursor-pointer hover:text-red-500" />
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  <Button
                    variant="outline"
                    className="flex items-center w-fit rounded-md py-1.5 px-3 gap-1.5 bg-background border border-border text-ink-deep font-sans font-medium text-xs hover:bg-surface-dim transition-colors mt-4 ml-7"
                  >
                    <Plus className="size-3.5" />
                    Add Lesson
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
          
          <Button
            variant="outline"
            className="flex items-center justify-center rounded-lg gap-2 border border-dashed border-border p-8 bg-background hover:bg-surface-dim transition-colors cursor-pointer text-text-secondary hover:text-ink-deep w-full"
          >
            <Plus className="size-5" />
            <span className="font-sans font-medium text-sm">Add Module</span>
          </Button>
        </Accordion>
      </div>

      {/* Right Sidebar */}
      <div className="flex flex-col flex-1 shrink-0 gap-6">
        <Card className="border border-border bg-background shadow-none">
          <CardHeader className="p-5 pb-3">
            <CardTitle className="text-ink-deep font-sans font-semibold text-sm">Course Overview</CardTitle>
          </CardHeader>
          <CardContent className="p-5 pt-0 flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <div className="relative size-16 rounded overflow-hidden border border-border shrink-0">
                <Image 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800"
                  alt="Thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-text-muted font-sans text-[10px]">Course Title</span>
                <span className="text-ink-deep font-sans font-semibold text-xs">Web Development Bootcamp</span>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <span className="text-text-secondary font-sans text-xs">Total Modules</span>
                <span className="text-ink-deep font-sans font-semibold text-xs">5</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-text-secondary font-sans text-xs">Total Lessons</span>
                <span className="text-ink-deep font-sans font-semibold text-xs">23</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-text-secondary font-sans text-xs">Total Duration</span>
                <span className="text-ink-deep font-sans font-semibold text-xs">5h 32m</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#f0f7ff] border-[#e1eefc] shadow-none">
          <CardContent className="p-5 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="size-5 rounded-full bg-primary text-white flex items-center justify-center text-[10px] font-bold">i</div>
              <span className="text-ink-deep font-sans font-semibold text-xs">Tips</span>
            </div>
            <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
              {[
                "Start with a clear learning path from basics to advanced.",
                "Keep lessons focused and under 15 minutes when possible.",
                "Add resources like notes, code files, and cheatsheets.",
                "Preview your course to ensure everything looks perfect."
              ].map((tip, idx) => (
                <li key={idx} className="flex items-start gap-2 text-text-secondary font-sans text-xs leading-relaxed">
                  <span className="text-primary mt-1">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="border border-border bg-background shadow-none">
          <CardHeader className="p-5 pb-3">
            <CardTitle className="text-ink-deep font-sans font-semibold text-sm">Curriculum Checklist</CardTitle>
          </CardHeader>
          <CardContent className="p-5 pt-0 flex flex-col gap-3">
            {[
              { text: "Add at least one module", done: true },
              { text: "Add lessons to all modules", done: true },
              { text: "Add preview video", done: true },
              { text: "Add lesson resources", done: false },
              { text: "Review course duration", done: false },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5">
                {item.done ? (
                  <CheckCircle2 className="size-4 text-green-500" />
                ) : (
                  <Circle className="size-4 text-text-muted" />
                )}
                <span className={cn(
                  "font-sans text-xs",
                  item.done ? "text-ink-deep" : "text-text-secondary"
                )}>
                  {item.text}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-[260px] right-0 h-20 bg-background border-t border-border px-10 flex items-center justify-between z-10 shadow-lg">
        <Button
          variant="outline"
          onClick={() => setActiveTab("details")}
          className="flex items-center rounded-md py-2.5 px-6 gap-2 bg-background border border-border text-ink-deep transition-colors font-medium text-sm"
        >
          <ChevronRight className="size-4 rotate-180" />
          Previous: Course Details
        </Button>
        <Button
          onClick={() => setActiveTab("pricing")}
          className="flex items-center rounded-md py-2.5 px-6 gap-2 bg-white border border-border text-ink-deep hover:bg-surface-dim transition-colors font-medium text-sm"
        >
          Next: Pricing <ChevronRight className="size-4" />
        </Button>
      </div>
    </div>
  );
}
