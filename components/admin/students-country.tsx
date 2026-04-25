import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { CountrySegment } from "@/lib/data/admin";

interface StudentsCountryProps {
  data: CountrySegment[];
  total: string;
}

export function StudentsCountry({ data, total }: StudentsCountryProps) {
  // Calculation for SVG donut chart
  let cumulativePercent = 0;
  const segments = data.map((segment) => {
    const dasharray = `${segment.percentage} ${100 - segment.percentage}`;
    const dashoffset = -cumulativePercent;
    cumulativePercent += segment.percentage;
    return { ...segment, dasharray, dashoffset };
  });

  return (
    <Card className="flex-[1.5] min-w-0 rounded-md bg-white border border-border shadow-none ring-0 p-0">
      <CardContent className="flex flex-col gap-5 p-5 h-full">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h3 className="font-heading font-semibold text-lg text-foreground">
            Students by Country
          </h3>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-md border-border bg-white hover:bg-muted text-muted-foreground transition-colors shadow-none"
              >
                <MoreHorizontal className="size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>View all regions</DropdownMenuItem>
              <DropdownMenuItem>Export data</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Content */}
        <div className="flex items-center justify-between mt-auto">
          {/* Donut Chart */}
          <div className="relative size-32 shrink-0">
            <svg viewBox="0 0 36 36" className="size-full transform -rotate-90">
              {segments.map((s, i) => (
                <circle
                  key={i}
                  cx="18"
                  cy="18"
                  r="15.91549430918954"
                  fill="transparent"
                  stroke={s.color}
                  strokeWidth="4"
                  strokeDasharray={s.dasharray}
                  strokeDashoffset={s.dashoffset}
                  className="transition-all duration-300"
                />
              ))}
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-xl font-heading font-bold text-foreground leading-none">
                {total}
              </span>
              <span className="text-[10px] font-sans text-muted-foreground mt-0.5">
                Students
              </span>
            </div>
          </div>

          {/* Legend */}
          <div className="flex flex-col gap-3">
            {segments.map((s, i) => (
              <div key={i} className="flex items-center gap-2">
                <div
                  className="size-2 rounded-sm shrink-0"
                  style={{ backgroundColor: s.color }}
                />
                <span className="text-xs font-sans text-muted-foreground w-20">
                  {s.country}
                </span>
                <span className="text-xs font-sans font-medium text-foreground">
                  {s.percentage}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
