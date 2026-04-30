"use client";

import { CircleAlertIcon, UserIcon, XIcon } from "lucide-react";
import Image from "next/image";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { formatBytes, useFileUpload } from "@/hooks/use-file-upload";
import type { UserProfileData } from "@/lib/lms/types";
import { cn } from "@/lib/utils";

export function ProfilePhotoSection({
  user,
}: {
  user: UserProfileData["user"];
}) {
  const maxSize = 2 * 1024 * 1024; // 2MB
  const defaultAvatar =
    user.image || `https://api.dicebear.com/7.x/initials/svg?seed=${user.name}`;

  const [
    { files, isDragging, errors },
    {
      removeFile,
      handleDragEnter,
      handleDragLeave,
      handleDragOver,
      handleDrop,
      openFileDialog,
      getInputProps,
    },
  ] = useFileUpload({
    maxFiles: 1,
    maxSize,
    accept: "image/*",
    multiple: false,
    onFilesChange: (files) => {
      // In a real app, you would handle the upload to Convex/Storage here
      console.log("File changed:", files[0]);
    },
  });

  const currentFile = files[0];
  const previewUrl = currentFile?.preview || defaultAvatar;

  const handleRemove = () => {
    if (currentFile) {
      removeFile(currentFile.id);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openFileDialog();
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-base font-heading font-semibold text-foreground m-0">
        Profile Photo
      </h3>

      <div className={cn("flex flex-col items-start gap-4")}>
        <div className="flex flex-col sm:flex-row items-center gap-6">
          {/* Avatar Preview */}
          <div className="relative">
            <button
              type="button"
              className={cn(
                "group/avatar relative h-24 w-24 cursor-pointer overflow-hidden rounded-full border border-dashed transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                isDragging
                  ? "border-primary bg-primary/5"
                  : "border-muted-foreground/25 hover:border-muted-foreground/20",
                previewUrl && "border-solid",
              )}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onClick={openFileDialog}
              onKeyDown={handleKeyDown}
            >
              <input {...getInputProps()} className="sr-only" />

              {previewUrl ? (
                <Image
                  src={previewUrl}
                  alt="Avatar"
                  fill
                  className="object-cover"
                  unoptimized={previewUrl.startsWith("blob:")}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-muted/30">
                  <UserIcon className="text-muted-foreground size-6" />
                </div>
              )}
            </button>

            {/* Remove Button - only show when file is uploaded */}
            {currentFile && (
              <Button
                size="icon"
                variant="outline"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemove();
                }}
                className="absolute end-0.5 top-0.5 z-10 size-6 rounded-full bg-background hover:bg-muted shadow-sm"
                aria-label="Remove avatar"
              >
                <XIcon className="size-3.5" />
              </Button>
            )}
          </div>

          {/* Upload Instructions */}
          <div className="space-y-1.5 text-left">
            <p className="text-sm font-semibold text-foreground">
              {currentFile ? "Avatar uploaded" : "Upload avatar"}
            </p>
            <p className="text-muted-foreground text-xs leading-relaxed max-w-[200px]">
              PNG, JPG or WebP up to {formatBytes(maxSize)}. Drag and drop or
              click to select.
            </p>
            {!currentFile && user.image && (
              <button
                type="button"
                className="text-xs font-semibold text-red-600 hover:text-red-700 transition-colors mt-2"
              >
                Remove Current Photo
              </button>
            )}
          </div>
        </div>

        {/* Error Messages */}
        {errors.length > 0 && (
          <Alert variant="destructive" className="mt-2 rounded-xl">
            <CircleAlertIcon className="size-4" />
            <AlertTitle className="text-sm font-semibold">
              File upload error(s)
            </AlertTitle>
            <AlertDescription className="text-xs">
              {errors.map((error) => (
                <p key={error} className="last:mb-0">
                  {error}
                </p>
              ))}
            </AlertDescription>
          </Alert>
        )}
      </div>
    </div>
  );
}
