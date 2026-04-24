import Image from "next/image";
import Link from "next/link";
import React from "react";

export function Navbar() {
  return (
    <div className="flex items-center justify-between h-20 w-full px-20 bg-canvas border-b border-b-solid border-border shrink-0">
      <div className="flex items-center gap-2">
        <Link href="/">
          <Image src="/teamknull-logo.svg" alt="Logo" width={140} height={140} />
        </Link>
        <div className="h-6" />
      </div>
      <div className="flex items-center gap-8">
        <div className="inline-block text-text-secondary font-sans font-medium text-sm leading-[1.125]">
          Courses
        </div>
        <div className="inline-block text-text-secondary font-sans font-medium text-sm leading-[1.125]">
          Categories
        </div>
        <div className="inline-block text-text-secondary font-sans font-medium text-sm leading-[1.125]">
          My Learning
        </div>
        <div className="inline-block text-text-secondary font-sans font-medium text-sm leading-[1.125]">
          Certifications
        </div>
        <div className="inline-block text-text-secondary font-sans font-medium text-sm leading-[1.125]">
          About
        </div>
      </div>
      <div className="flex items-center gap-7">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="stroke-ink-secondary" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0' }}>
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="stroke-ink-secondary" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0' }}>
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center rounded-[50%] bg-ink shrink-0 size-8">
            <div className="flex text-canvas font-sans font-semibold text-[13px] leading-none">
              R
            </div>
          </div>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="stroke-ink-secondary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0' }}>
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>
    </div>
  );
}
