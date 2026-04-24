"use client";

import { FileText, FolderArchive, Download } from "lucide-react";

interface Resource {
  title: string;
  type: string;
  icon: React.ElementType;
}

interface ResourcesCardProps {
  resources: Resource[];
}

export function ResourcesCard({ resources }: ResourcesCardProps) {
  return (
    <div className="w-65 shrink-0 rounded-xl bg-canvas border-[1.5px] border-surface-dim shadow-subtle p-7">
      <h3 className="mb-6 text-ink font-sans font-bold text-sm">
        Lesson Resources
      </h3>
      <div className="flex flex-col gap-5">
        {resources.map((resource, index) => (
          <div key={index} className="flex items-center justify-between group cursor-pointer">
            <div className="flex items-center gap-3.5">
              <div className="size-10 flex items-center justify-center rounded-md bg-surface border border-border-dark group-hover:bg-surface group-hover:border-border transition-colors">
                <resource.icon className="size-5 text-ink-secondary" strokeWidth={1.8} />
              </div>
              <div>
                <div className="text-ink-secondary font-sans font-bold text-[13px]">
                  {resource.title}
                </div>
                <div className="text-text-muted font-sans font-medium text-[11px]">
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
