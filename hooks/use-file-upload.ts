"use client";

import { useCallback, useRef, useState } from "react";

export interface FileWithPreview extends File {
  preview: string;
  id: string;
}

interface UseFileUploadProps {
  maxFiles?: number;
  maxSize?: number;
  accept?: string;
  multiple?: boolean;
  onFilesChange?: (files: FileWithPreview[]) => void;
}

export function formatBytes(bytes: number, decimals = 2) {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / k ** i).toFixed(dm))} ${sizes[i]}`;
}

export function useFileUpload({
  maxFiles = 1,
  maxSize = 2 * 1024 * 1024,
  accept,
  multiple = false,
  onFilesChange,
}: UseFileUploadProps) {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const processFiles = useCallback(
    (newFiles: FileList | File[]) => {
      const validFiles: FileWithPreview[] = [];
      const newErrors: string[] = [];

      const fileArray = Array.from(newFiles);

      if (files.length + fileArray.length > maxFiles) {
        newErrors.push(`Maximum ${maxFiles} files allowed.`);
      }

      for (const file of fileArray) {
        if (file.size > maxSize) {
          newErrors.push(
            `${file.name} is too large. Max size is ${formatBytes(maxSize)}.`,
          );
          continue;
        }

        if (accept && !file.type.match(accept.replace("*", ".*"))) {
          newErrors.push(`${file.name} is not a supported file type.`);
          continue;
        }

        const fileWithPreview = Object.assign(file, {
          preview: URL.createObjectURL(file),
          id: Math.random().toString(36).substring(7),
        }) as FileWithPreview;

        validFiles.push(fileWithPreview);
      }

      if (newErrors.length > 0) {
        setErrors(newErrors);
        return;
      }

      setErrors([]);
      const updatedFiles = multiple ? [...files, ...validFiles] : validFiles;
      setFiles(updatedFiles);
      onFilesChange?.(updatedFiles);
    },
    [files, maxFiles, maxSize, accept, multiple, onFilesChange],
  );

  const removeFile = useCallback(
    (id: string) => {
      const updatedFiles = files.filter((f) => f.id !== id);
      setFiles(updatedFiles);
      onFilesChange?.(updatedFiles);
    },
    [files, onFilesChange],
  );

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files) {
      processFiles(e.dataTransfer.files);
    }
  };

  const openFileDialog = () => {
    inputRef.current?.click();
  };

  const getInputProps = () => ({
    type: "file",
    accept,
    multiple,
    ref: inputRef,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        processFiles(e.target.files);
      }
    },
  });

  return [
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
  ] as const;
}
