"use client";

import { Upload } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function ProfilePhotoSection() {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-base font-heading font-semibold text-foreground m-0">
        Profile Photo
      </h3>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
        <div className="relative size-[100px] rounded-full overflow-hidden shrink-0 border border-border">
          <Image
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=200&auto=format&fit=crop"
            alt="Rohit Sharma"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Button
              variant="outline"
              className="rounded-xl px-4 py-2 border-border bg-white hover:bg-muted font-semibold text-sm shadow-none gap-2 h-auto"
            >
              <Upload className="size-4" />
              Upload New Photo
            </Button>
            <span className="text-xs text-muted-foreground">
              JPG, PNG or WebP. Max size 2MB.
            </span>
          </div>
          <button
            type="button"
            className="text-sm font-semibold text-red-600 hover:text-red-700 transition-colors text-left w-fit"
          >
            Remove Photo
          </button>
        </div>
      </div>
    </div>
  );
}
