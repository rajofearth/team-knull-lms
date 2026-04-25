"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { EnrollmentDataPoint } from "@/lib/data/admin";

interface EnrollmentChartProps {
  data: EnrollmentDataPoint[];
}

// Converts data points to SVG polyline points within a 0-100 coordinate space
function toPolylinePoints(data: EnrollmentDataPoint[]): string {
  const maxVal = Math.max(...data.map((d) => d.value));
  const len = data.length - 1;
  return data
    .map((d, i) => {
      const x = (i / len) * 100;
      const y = 100 - (d.value / maxVal) * 100;
      return `${x},${y}`;
    })
    .join(" ");
}

const xLabels = ["May 1", "May 8", "May 15", "May 22", "May 29"];

export function EnrollmentChart({ data }: EnrollmentChartProps) {
  const [period, setPeriod] = useState<"Daily" | "Weekly" | "Monthly">("Daily");
  const [open, setOpen] = useState(false);

  const polylinePoints = toPolylinePoints(data);
  const yLabels = ["8K", "6K", "4K", "2K", "0"];

  return (
    <div className="flex flex-col rounded-md gap-5 bg-white border border-border p-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="font-heading font-semibold text-lg text-foreground">Enrollment Overview</h3>
        <div className="relative">
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex items-center gap-2 rounded-md py-1.5 px-3 bg-white border border-border hover:bg-muted transition-colors"
          >
            <span className="text-[13px] font-sans font-medium text-foreground/80">{period}</span>
            <ChevronDown className="size-3.5 text-muted-foreground shrink-0" />
          </button>
          {open && (
            <div className="absolute right-0 top-full mt-1 w-32 bg-white border border-border rounded-md shadow-card z-10 overflow-hidden">
              {(["Daily", "Weekly", "Monthly"] as const).map((p) => (
                <button
                  key={p}
                  onClick={() => { setPeriod(p); setOpen(false); }}
                  className="w-full text-left px-3 py-2 text-sm font-sans hover:bg-muted transition-colors text-foreground/80"
                >
                  {p}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Chart area */}
      <div className="relative flex flex-col h-65">
        <div className="flex grow relative">
          {/* Y-axis labels */}
          <div className="flex flex-col justify-between h-full pr-3 shrink-0 w-10">
            {yLabels.map((label) => (
              <span key={label} className="text-[11px] text-muted-foreground font-sans leading-none">
                {label}
              </span>
            ))}
          </div>

          {/* Grid + polyline */}
          <div className="grow relative border-l border-b border-border">
            {/* Horizontal gridlines */}
            {[0, 25, 50, 75].map((pct) => (
              <div
                key={pct}
                className="absolute w-full border-t border-border/50"
                style={{ top: `${pct}%` }}
              />
            ))}
            <svg
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              viewBox="0 0 100 100"
              className="absolute inset-0"
            >
              {/* Gradient fill */}
              <defs>
                <linearGradient id="enrollmentGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#111827" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#111827" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Area fill */}
              <polygon
                points={`0,100 ${polylinePoints} 100,100`}
                fill="url(#enrollmentGrad)"
              />
              {/* Line */}
              <polyline
                points={polylinePoints}
                fill="none"
                stroke="#111827"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* X-axis labels */}
        <div className="flex justify-between mt-3 pl-10">
          {xLabels.map((label) => (
            <span key={label} className="text-[11px] text-muted-foreground font-sans">
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
