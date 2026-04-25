"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
  const [period, setPeriod] = useState<string>("Daily");

  const polylinePoints = toPolylinePoints(data);
  const yLabels = ["8K", "6K", "4K", "2K", "0"];

  return (
    <Card className="flex flex-col rounded-md bg-white border border-border shadow-none ring-0 p-0">
      <CardContent className="flex flex-col gap-5 p-5">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h3 className="font-heading font-semibold text-lg text-foreground">
            Enrollment Overview
          </h3>
          <Select value={period} onValueChange={setPeriod}>
            <SelectTrigger className="w-[100px] h-8 text-[13px] font-sans font-medium text-foreground/80 bg-white border-border">
              <SelectValue placeholder="Period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Daily">Daily</SelectItem>
              <SelectItem value="Weekly">Weekly</SelectItem>
              <SelectItem value="Monthly">Monthly</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Chart area */}
        <div className="relative flex flex-col h-65">
          <div className="flex grow relative">
            {/* Y-axis labels */}
            <div className="flex flex-col justify-between h-full pr-3 shrink-0 w-10">
              {yLabels.map((label) => (
                <span
                  key={label}
                  className="text-[11px] text-muted-foreground font-sans leading-none"
                >
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
                <title>Enrollment trend</title>
                {/* Gradient fill */}
                <defs>
                  <linearGradient
                    id="enrollmentGrad"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
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
              <span
                key={label}
                className="text-[11px] text-muted-foreground font-sans"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
