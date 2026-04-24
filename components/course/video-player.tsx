"use client";

import { Play, Volume2, Settings, Maximize, FileCode, X, Layout } from "lucide-react";
import { cn } from "@/lib/utils";

export function VideoPlayer() {
  return (
    <div className="w-full aspect-video relative rounded-xl overflow-hidden bg-video-bg shadow-float border border-video-border/20">
      {/* Window Header */}
      <div className="flex items-center justify-between py-2.5 px-4 bg-video-header border-b border-video-border">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="size-2.5 rounded-full bg-window-close" />
            <div className="size-2.5 rounded-full bg-window-minimize" />
            <div className="size-2.5 rounded-full bg-window-maximize" />
          </div>
          <div className="flex items-center mb-[-10px] py-1.5 px-3 gap-2 bg-video-border border-b border-video-header rounded-t-sm">
            <FileCode className="size-3 text-video-accent" />
            <span className="text-text-dim font-sans text-[11px]">index.html</span>
            <X className="size-2.5 text-text-secondary cursor-pointer hover:text-canvas" />
          </div>
        </div>
        <Layout className="size-3.5 text-text-secondary cursor-pointer hover:text-canvas" />
      </div>

      {/* Code Content */}
      <div className="p-6 font-mono text-[13px] leading-relaxed text-video-text opacity-90 overflow-hidden">
        <div className="flex gap-4">
          <span className="text-text-secondary text-right w-6 select-none pr-2">1</span>
          <span><span className="text-code-tag">&lt;!DOCTYPE</span> <span className="text-code-attr">html</span>&gt;</span>
        </div>
        <div className="flex gap-4">
          <span className="text-text-secondary text-right w-6 select-none pr-2">2</span>
          <span>&lt;<span className="text-code-tag">html</span> <span className="text-code-attr">lang</span>=<span className="text-code-string">"en"</span>&gt;</span>
        </div>
        <div className="flex gap-4">
          <span className="text-text-secondary text-right w-6 select-none pr-2">3</span>
          <span>&lt;<span className="text-code-tag">head</span>&gt;</span>
        </div>
        <div className="flex gap-4 pl-4">
          <span className="text-text-secondary text-right w-6 select-none pr-2">4</span>
          <span>&lt;<span className="text-code-tag">meta</span> <span className="text-code-attr">charset</span>=<span className="text-code-string">"UTF-8"</span>&gt;</span>
        </div>
        <div className="flex gap-4 pl-4">
          <span className="text-text-secondary text-right w-6 select-none pr-2">5</span>
          <span>&lt;<span className="text-code-tag">meta</span> <span className="text-code-attr">name</span>=<span className="text-code-string">"viewport"</span> <span className="text-code-attr">content</span>=<span className="text-code-string">"width=device-width, initial-scale=1.0"</span> /&gt;</span>
        </div>
        <div className="flex gap-4 pl-4">
          <span className="text-text-secondary text-right w-6 select-none pr-2">6</span>
          <span>&lt;<span className="text-code-tag">title</span>&gt;My Website&lt;/<span className="text-code-tag">title</span>&gt;</span>
        </div>
        <div className="flex gap-4">
          <span className="text-text-secondary text-right w-6 select-none pr-2">7</span>
          <span>&lt;/<span className="text-code-tag">head</span>&gt;</span>
        </div>
        <div className="flex gap-4">
          <span className="text-text-secondary text-right w-6 select-none pr-2">8</span>
          <span>&lt;<span className="text-code-tag">body</span>&gt;</span>
        </div>
        <div className="flex gap-4 pl-4">
          <span className="text-text-secondary text-right w-6 select-none pr-2">9</span>
          <span>&lt;<span className="text-code-tag">header</span>&gt;</span>
        </div>
        <div className="flex gap-4 pl-8">
          <span className="text-text-secondary text-right w-6 select-none pr-2">10</span>
          <span>&lt;<span className="text-code-tag">h1</span>&gt;Welcome to Web Development&lt;/<span className="text-code-tag">h1</span>&gt;</span>
        </div>
        <div className="flex gap-4 pl-4">
          <span className="text-text-secondary text-right w-6 select-none pr-2">11</span>
          <span>&lt;/<span className="text-code-tag">header</span>&gt;</span>
        </div>
        <div className="flex gap-4 pl-4">
          <span className="text-text-secondary text-right w-6 select-none pr-2">12</span>
          <span>&lt;<span className="text-code-tag">main</span>&gt;</span>
        </div>
        <div className="flex gap-4 pl-8">
          <span className="text-text-secondary text-right w-6 select-none pr-2">13</span>
          <span>&lt;<span className="text-code-tag">p</span>&gt;Building awesome websites, one line of code at a time.&lt;/<span className="text-code-tag">p</span>&gt;</span>
        </div>
        <div className="flex gap-4 pl-4">
          <span className="text-text-secondary text-right w-6 select-none pr-2">14</span>
          <span>&lt;/<span className="text-code-tag">main</span>&gt;</span>
        </div>
        <div className="flex gap-4">
          <span className="text-text-secondary text-right w-6 select-none pr-2">15</span>
          <span>&lt;/<span className="text-code-tag">body</span>&gt;</span>
        </div>
        <div className="flex gap-4">
          <span className="text-text-secondary text-right w-6 select-none pr-2">16</span>
          <span>&lt;/<span className="text-code-tag">html</span>&gt;</span>
        </div>
      </div>

      {/* Video Controls Overlay */}
      <div className="absolute bottom-0 inset-x-0 h-24 flex items-end px-6 pb-6 gap-5 bg-linear-to-t from-black/90 to-transparent">
        <Play className="size-6 text-canvas fill-canvas cursor-pointer hover:scale-110 transition-transform mb-1" />
        
        <div className="flex-1 flex flex-col gap-3 mb-2">
          <div className="h-1 w-full relative rounded-full bg-white/20 overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-[45%] bg-canvas" />
            <div className="absolute left-[45%] top-1/2 -translate-y-1/2 size-3 rounded-full bg-canvas shadow-lg cursor-pointer" />
          </div>
          <div className="flex justify-between items-center">
            <span className="text-canvas font-sans font-medium text-[13px] opacity-90">
              05:12 / 10:15
            </span>
            <div className="flex items-center gap-4.5">
              <Volume2 className="size-[22px] text-canvas cursor-pointer hover:opacity-80" />
              <span className="text-canvas font-sans font-bold text-[13px] cursor-pointer hover:opacity-80">1x</span>
              <Settings className="size-[22px] text-canvas cursor-pointer hover:opacity-80" />
              <Maximize className="size-[22px] text-canvas cursor-pointer hover:opacity-80" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
