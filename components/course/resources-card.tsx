"use client";

import { FileText, FolderArchive, Download } from "lucide-react";
import { Resource } from "@/lib/data/courses";

interface ResourcesCardProps {
  resources: Resource[];
}

export function ResourcesCard({ resources }: ResourcesCardProps) {
  return (
    <div className="w-65 shrink-0 rounded-xl bg-canvas border-[1.5px] border-solid border-surface-dim shadow-subtle p-7">
      <div className="mt-0 mb-6 text-ink font-sans font-bold mx-0 text-sm leading-none">
        Lesson Resources
      </div>
      <div className="flex flex-col gap-5">
        {resources.map((resource, index) => (
          <div key={index} className="flex items-center justify-between group cursor-pointer">
            <div className="flex items-center gap-3.5">
              <div className="flex items-center justify-center rounded-md bg-surface border border-solid border-border-dark shrink-0 size-10 group-hover:bg-surface group-hover:border-border transition-colors">
                {resource.icon === "file" ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="stroke-ink-secondary" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0' }}>
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="stroke-ink-secondary" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0' }}>
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                  </svg>
                )}
              </div>
              <div>
                <div className="text-ink-secondary font-sans font-bold text-sm">
                  {resource.title}
                </div>
                <div className="text-text-muted font-sans font-medium text-xs mt-1">
                  {resource.type}
                </div>
              </div>
            </div>
            <Download className="size-[18px] text-text-muted group-hover:text-ink transition-colors" />
          </div>
        ))}
      </div>
    </div>
  );
}
