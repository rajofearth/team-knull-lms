"use client";

import React from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function CoursePage({ params }: { params: { courseId: string } }) {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <div className="mx-auto max-w-[1440px] flex flex-col bg-white antialiased text-xs/4">
        <Navbar />
        
        {/* Breadcrumbs */}
        <div className="flex items-center pt-6 gap-2 px-20">
          <div className="inline-block text-text-muted font-sans text-[13px] leading-none">
            Home
          </div>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="stroke-ink-deep" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0' }}>
            <polyline points="9 18 15 12 9 6" />
          </svg>
          <div className="inline-block text-text-muted font-sans text-[13px] leading-none">
            Courses
          </div>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="stroke-ink-deep" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0' }}>
            <polyline points="9 18 15 12 9 6" />
          </svg>
          <div className="inline-block text-ink-secondary font-sans text-[13px] leading-none">
            Web Development Bootcamp
          </div>
        </div>

        {/* Hero Section */}
        <div className="flex items-start py-8 px-20 gap-12">
          <div className="relative w-85 h-52.5 shrink-0 rounded-xl overflow-clip items-center flex gap-1 shadow-card">
            <div className="w-full h-full bg-cover bg-center shrink-0" style={{ backgroundImage: 'url(https://app.paper.design/file-assets/01KPZPYK5DC63WHG4PEM01K24R/01KPZQXET8N4BBMV3ST7JMF0X5.png)' }} />
            <div className="absolute top-3 left-3 rounded-[50px] py-1 px-3 bg-canvas border border-solid border-black/5 shadow-subtle">
              <div className="text-ink-secondary font-sans font-bold text-[11px] leading-none">
                Bestseller
              </div>
            </div>
          </div>
          <div className="grow shrink basis-[0%] flex flex-col">
            <h1 className="text-[38px] tracking-tight leading-[1.2] text-ink-deep font-heading font-bold m-0">
              Web Development Bootcamp
            </h1>
            <div className="mt-3.5 mb-7 text-[16px] leading-[1.55] max-w-130 text-text-description font-sans mx-0">
              Learn HTML, CSS, JavaScript, and modern web development by building real-world projects.
            </div>
            <div className="flex items-center mb-9 gap-4">
              <div className="flex items-center gap-1.5">
                <div className="inline-block text-ink-deep font-sans font-bold text-sm leading-none">
                  4.7
                </div>
                <svg width="14" height="14" viewBox="0 0 24 24" className="fill-ink-deep" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0' }}>
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <div className="inline-block text-text-muted font-sans text-sm leading-none">
                  (892)
                </div>
              </div>
              <div className="text-border-dark font-sans text-sm leading-none">•</div>
              <div className="text-text-secondary font-sans text-sm leading-none">12,430 Students</div>
              <div className="text-border-dark font-sans text-sm leading-none">•</div>
              <div className="text-text-secondary font-sans text-sm leading-none">Beginner to Advanced</div>
              <div className="text-border-dark font-sans text-sm leading-none">•</div>
              <div className="text-text-secondary font-sans text-sm leading-none">25 Hours</div>
            </div>
            <div className="flex gap-4">
              <div className="rounded-lg py-3.5 px-8 bg-ink-deep cursor-pointer hover:opacity-90">
                <div className="tracking-tight text-canvas font-sans font-bold text-sm leading-none">
                  Continue Learning
                </div>
              </div>
              <div className="flex items-center rounded-lg py-3.5 px-8 gap-2.5 bg-canvas border-[1.5px] border-solid border-border-alt cursor-pointer hover:bg-surface">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="stroke-ink-deep" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0' }}>
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                </svg>
                <div className="inline-block text-ink-deep font-sans font-bold text-sm leading-none">
                   Save Course
                </div>
              </div>
            </div>
          </div>
          {/* Progress Card */}
          <div className="w-82.5 shrink-0 rounded-xl bg-canvas border-[1.5px] border-solid border-border p-7">
            <div className="flex justify-between items-baseline mb-3">
              <div className="tracking-tight inline-block text-ink font-sans font-extrabold text-[13px] leading-none">
                Your Progress
              </div>
              <div className="inline-block text-text-muted font-sans font-semibold text-[11px] leading-none">
                65% Complete
              </div>
            </div>
            <div className="w-full h-1.25 mb-8 relative rounded-md overflow-clip bg-border">
              <div className="w-[65%] h-full rounded-md bg-ink" />
            </div>
            <div className="flex flex-col gap-4.5">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3.5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="stroke-ink-deep" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0' }}>
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                  <div className="inline-block text-text-description font-sans font-medium text-[13px] leading-none">
                     Lessons Completed
                  </div>
                </div>
                <div className="inline-block text-ink font-sans font-semibold text-[13px] leading-none">
                  18 / 28
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3.5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="stroke-ink-deep" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0' }}>
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <line x1="3" y1="9" x2="21" y2="9" />
                    <line x1="9" y1="21" x2="9" y2="9" />
                  </svg>
                  <div className="inline-block text-text-description font-sans font-medium text-[13px] leading-none">
                     Projects Completed
                  </div>
                </div>
                <div className="inline-block text-ink font-sans font-semibold text-[13px] leading-none">
                  3 / 5
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3.5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="stroke-ink-deep" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0' }}>
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <div className="inline-block text-text-description font-sans font-medium text-[13px] leading-none">
                     Quiz Scores
                  </div>
                </div>
                <div className="inline-block text-ink font-sans font-semibold text-[13px] leading-none">
                  82%
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3.5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="stroke-ink-deep" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0' }}>
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                    <path d="M4 22h16" />
                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                  </svg>
                  <div className="inline-block text-text-description font-sans font-medium text-[13px] leading-none">
                     Certificate
                  </div>
                </div>
                <div className="inline-block text-success font-sans font-bold text-[13px] leading-none">
                  Available
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex mt-6 w-full px-20 gap-10 border-b border-b-solid border-border">
          <div className="relative py-4 cursor-pointer">
            <div className="text-text-muted font-sans font-medium text-sm leading-none">
              Overview
            </div>
          </div>
          <div className="relative py-4 border-b-[3px] border-b-solid border-ink-deep cursor-pointer">
            <div className="text-ink-deep font-sans font-semibold text-sm leading-none">
              Curriculum
            </div>
          </div>
          <div className="py-4 cursor-pointer">
            <div className="text-text-muted font-sans font-medium text-sm leading-none">
              Instructor
            </div>
          </div>
          <div className="py-4 cursor-pointer">
            <div className="text-text-muted font-sans font-medium text-sm leading-none">
              Reviews (892)
            </div>
          </div>
          <div className="py-4 cursor-pointer">
            <div className="text-text-muted font-sans font-medium text-sm leading-none">
              Q&A
            </div>
          </div>
        </div>     
        {/* Content Area */}
        <div className="flex w-full py-10 px-20 gap-10 bg-surface">
          {/* Curriculum Sidebar */}
          <div className="w-70 shrink-0 flex flex-col gap-4">
            <div className="rounded-xl overflow-clip bg-canvas border border-solid border-border-subtle shadow-subtle">
              <div className="flex justify-between items-center py-4.5 px-5 bg-canvas border-b border-b-solid border-surface-dim">
                <div className="inline-block text-ink font-sans font-bold text-[13px] leading-none">
                  Module 1 · Getting Started
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="inline-block text-text-muted font-sans font-semibold text-xs leading-none">
                    5 / 5
                  </div>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="stroke-text-secondary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0' }}>
                    <polyline points="18 15 12 9 6 15" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col">
                {[
                  "1. Introduction to Web Development",
                  "2. How the Web Works",
                  "3. Setting Up Your Environment",
                  "4. HTML Basics",
                ].map((lesson, i) => (
                  <div key={i} className="flex items-center justify-between py-3.75 px-5 border-b border-b-solid border-surface-dim cursor-pointer hover:bg-surface">
                    <div className="flex items-center gap-3">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="stroke-success" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0' }}>
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <div className="inline-block text-text-secondary font-sans font-medium text-[13px] leading-none">
                        {lesson}
                      </div>
                    </div>
                    <div className="inline-block text-text-dim font-sans shrink-0 text-xs leading-none">
                      {["04:32", "06:18", "05:45", "08:23"][i]}
                    </div>
                  </div>
                ))}
                <div className="flex items-center justify-between py-3.75 px-5 bg-surface cursor-pointer">
                  <div className="flex items-center gap-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="stroke-success" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0' }}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <div className="inline-block text-ink font-sans font-bold text-[13px] leading-none">
                      5. HTML Elements and Structure
                    </div>
                  </div>
                  <div className="inline-block text-text-muted font-sans font-semibold shrink-0 text-xs leading-none">
                    10:15
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center rounded-xl py-4.5 px-5 bg-canvas border border-solid border-border-subtle shadow-subtle cursor-pointer hover:shadow-subtle transition-shadow">
              <div className="inline-block text-ink-secondary font-sans font-bold text-[13px] leading-none">
                Module 2 · CSS Fundamentals
              </div>
              <div className="flex items-center gap-2.5">
                <div className="inline-block text-text-muted font-sans font-semibold text-xs leading-none">
                  0 / 6
                </div>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="stroke-text-muted" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0' }}>
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
            </div>
            <div className="flex justify-between items-center rounded-xl py-4.5 px-5 bg-canvas border border-solid border-border-subtle shadow-subtle cursor-pointer hover:shadow-subtle transition-shadow">
              <div className="inline-block text-ink-secondary font-sans font-bold text-[13px] leading-none">
                Module 3 · JavaScript Basics
              </div>
              <div className="flex items-center gap-2.5">
                <div className="inline-block text-text-muted font-sans font-semibold text-xs leading-none">
                  0 / 7
                </div>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="stroke-text-muted" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0' }}>
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
            </div>
          </div>

          {/* Video and Lesson Content */}
          <div className="grow shrink basis-[0%] flex flex-col gap-8">
            <div className="w-full aspect-video relative rounded-xl overflow-clip bg-video-bg shadow-float">
              <div className="flex items-center justify-between py-2.5 px-4 bg-video-header border-b border-b-solid border-video-border">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="rounded-[50%] bg-window-close shrink-0 size-2.5" />
                    <div className="rounded-[50%] bg-window-minimize shrink-0 size-2.5" />
                    <div className="rounded-[50%] bg-window-maximize shrink-0 size-2.5" />
                  </div>
                  <div className="flex items-center mb-[-11px] py-1.5 px-3 gap-2 bg-video-border border-b border-b-solid border-video-header rounded-t-sm">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="stroke-video-accent" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0' }}>
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                    <div className="inline-block text-text-dim font-sans text-[11px] leading-none">
                       index.html 
                    </div>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" className="stroke-text-secondary" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0' }}>
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </div>
                </div>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="stroke-text-secondary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0' }}>
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <line x1="9" y1="3" x2="9" y2="21" />
                </svg>
              </div>
              <div className="opacity-[0.9] p-6 font-mono text-[13px] leading-[1.6] text-video-text">
                <div>1 &lt;!DOCTYPE html&gt;</div>
                <div>2 &lt;html lang="en"&gt;</div>
                <div>3 &lt;head&gt;</div>
                <div>4 &nbsp;&nbsp;&lt;meta charset="UTF-8"&gt;</div>
                <div>5 &nbsp;&nbsp;&lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;</div>
                <div>6 &nbsp;&nbsp;&lt;title&gt;My Website&lt;/title&gt;</div>
                <div>7 &lt;/head&gt;</div>
                <div>8 &lt;body&gt;</div>
                <div>9 &nbsp;&nbsp;&lt;header&gt;</div>
                <div>10 &nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Welcome to Web Development&lt;/h1&gt;</div>
                <div>11 &nbsp;&nbsp;&lt;/header&gt;</div>
                <div>12 &nbsp;&nbsp;&lt;main&gt;</div>
                <div>13 &nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Building awesome websites, one line of code at a time.&lt;/p&gt;</div>
                <div>14 &nbsp;&nbsp;&lt;/main&gt;</div>
                <div>15 &lt;/body&gt;</div>
                <div>16 &lt;/html&gt;</div>
              </div>
              <div className="absolute bottom-0 h-16 flex items-center px-6 gap-5 inset-x-0 bg-linear-to-b from-transparent to-black/90">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0' }} className="cursor-pointer">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                <div className="grow shrink basis-[0%] h-1 relative rounded-md bg-white/20 cursor-pointer">
                  <div className="absolute left-0 w-[45%] rounded-md bg-canvas inset-y-0" />
                  <div className="absolute left-[45%] top-[50%] rounded-md bg-canvas shadow-float size-3" style={{ translate: '-50% -50%' }} />
                </div>
                <div className="opacity-[0.9] text-canvas font-sans font-medium text-[13px] leading-none">
                  05:12 / 10:15
                </div>
                <div className="flex items-center gap-4.5">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0' }} className="cursor-pointer">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                  </svg>
                  <div className="inline-block text-canvas font-sans font-bold text-[13px] leading-none cursor-pointer">
                    1x
                  </div>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0' }} className="cursor-pointer">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l-.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1Z" />
                  </svg>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0' }} className="cursor-pointer">
                    <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="">
              <h2 className="tracking-tight text-ink font-heading font-bold m-0 text-[26px] leading-8">
                5. HTML Elements and Structure
              </h2>
              <div className="mt-2.5 mb-0 text-[14px] leading-[1.65] max-w-160 text-text-secondary font-sans mx-0">
                Learn about common HTML elements and how to structure a basic webpage.
              </div>
            </div>
            <div className="flex justify-between mt-2">
              <div className="flex items-center rounded-lg py-3 px-6 gap-2.5 border-[1.5px] border-solid border-border-alt cursor-pointer hover:bg-surface">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="stroke-ink-deep" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0' }}>
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
                <div className="inline-block text-ink-secondary font-sans font-bold text-[13px] leading-none">
                   Previous Lesson
                </div>
              </div>
              <div className="flex items-center rounded-lg py-3 px-6 gap-2.5 bg-ink-deep cursor-pointer hover:opacity-90">
                <div className="inline-block text-canvas font-sans font-bold text-[13px] leading-none">
                  Next Lesson 
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0' }}>
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </div>
          </div>

          {/* Resources Card */}
          <div className="w-65 shrink-0 flex flex-col gap-6">
            <div className="rounded-xl bg-canvas border-[1.5px] border-solid border-surface-dim shadow-subtle p-7">
              <div className="mt-0 mb-6 text-ink font-sans font-bold mx-0 text-sm leading-none">
                Lesson Resources
              </div>
              <div className="flex flex-col gap-5">
                {[
                  { title: "Cheatsheet", type: "PDF", icon: "file" },
                  { title: "Starter Files", type: "ZIP", icon: "folder" },
                  { title: "Notes", type: "PDF", icon: "file" },
                ].map((res, i) => (
                  <div key={i} className="flex items-center justify-between cursor-pointer group">
                    <div className="flex items-center gap-3.5">
                      <div className="flex items-center justify-center rounded-md bg-surface border border-solid border-border-dark shrink-0 size-10 group-hover:bg-surface group-hover:border-border transition-colors">
                        {res.icon === "file" ? (
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
                      <div className="">
                        <div className="text-ink-secondary font-sans font-bold text-[13px] leading-none">
                          {res.title}
                        </div>
                        <div className="text-text-muted font-sans font-medium text-[11px] leading-none">
                          {res.type}
                        </div>
                      </div>
                    </div>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0' }} className="stroke-text-muted group-hover:stroke-ink transition-colors">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </main>
  );
}
