import React from "react";

export function Navbar() {
  return (
    <div className="flex items-center justify-between h-20 w-full px-20 bg-canvas border-b border-b-solid border-border shrink-0">
      <div className="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 30" width="150" height="30" style={{ flexShrink: '0' }}>
          <path d="m45.8 11.4h-3.5v10.8h-2.9v-10.8h-3.3v-2.2h9.7v2.2z" className="fill-ink-deep" />
          <path d="m56.3 11.3h-5.9v3h5v2.1h-5v3.5h6.1v2.3h-9v-13h8.6l0.2 2.1z" className="fill-ink-deep" />
          <path d="m69.2 22.1h-2.7l-0.8-2.7h-4.4l-0.8 2.7h-2.7l4-12.9h3.3l4.1 12.9zm-5.7-10.9-1.6 5.8h3.2l-1.6-5.8z" className="fill-ink-deep" />
          <path d="m83.7 22.1h-2.5l-0.1-9.7-2.8 9.7h-2.2l-2.7-9.5-0.1 9.5-2.4 0.1v-13h3.6l2.6 9.1 2.8-9.1h3.8v12.9z" className="fill-ink-deep" />
          <path d="m97.8 14.4 4.2 7.7-3.1 0.1-2.8-5.9-1.6 2.2v3.6h-2.7l0.1-12.9h2.6v5.9l4.2-5.9h3.3l-4.2 5.2z" className="fill-ink-deep" />
          <path d="m113.8 22.2h-2.5l-5-9-0.1 9h-2.5v-12.9l2.9-0.1 4.7 8.2 0.1-8.2h2.5l-0.1 13z" className="fill-ink-deep" />
          <path d="m126.5 18.5c0 2.1-1.9 3.8-4.8 3.8-3 0-5.4-1.2-5.4-4.3v-8.9h2.7v9.1c0 1.8 1.2 2 2.2 2 0.9 0 2.5-0.5 2.5-2v-9l2.8-0.1v9.4z" className="fill-ink-deep" />
          <path d="m131.7 20h5.5v2.2h-8v-13h2.8v10.8h-0.3z" className="fill-ink-deep" />
          <path d="m141.3 20h5.4v2.2h-7.9v-13h2.6l-0.1 10.8z" className="fill-ink-deep" />
          <path d="m9.1 1.8h-5.5v19.7h2l3.5-5.9v-13.8z" className="fill-ink-deep" />
          <path d="m10.3 15.9-4.5 6.4-2.2 5.5h5.7l4.3-7.4-3.3-4.5z" className="fill-ink-deep" />
          <path d="m17.5 12.9 7.3-11.1h-6.4l-8.1 11.8 0.7 1.6 1.1 0.4 7.2 12.4h7.1l-8.9-15.1z" className="fill-ink-deep" />
        </svg>
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
