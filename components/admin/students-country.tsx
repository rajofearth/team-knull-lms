"use client";

import { MoreHorizontal } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { ChartConfig } from "@/components/ui/chart";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { CountrySegmentData } from "@/lib/lms/types";

interface StudentsCountryProps {
  data: CountrySegmentData[];
  total: string;
}

function toConfigKey(country: string) {
  return country.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

export function StudentsCountry({ data, total }: StudentsCountryProps) {
  const chartData = data.map((segment) => ({
    ...segment,
    fill: segment.color,
    key: toConfigKey(segment.country),
  }));

  const chartConfig = chartData.reduce<ChartConfig>((config, segment) => {
    config[segment.key] = {
      label: segment.country,
      color: segment.color,
    };
    return config;
  }, {});

  return (
    <Card className="min-w-0 flex-[1.5] rounded-md border border-border bg-white p-0 shadow-none ring-0">
      <CardContent className="flex h-full flex-col gap-5 p-5">
        <div className="flex items-center justify-between">
          <h3 className="font-heading text-lg font-semibold text-foreground">
            Students by Country
          </h3>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-md border-border bg-white text-muted-foreground shadow-none transition-colors hover:bg-muted"
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

        <div className="mt-auto flex items-center justify-between gap-4">
          <ChartContainer
            config={chartConfig}
            className="mx-0 aspect-square size-40 shrink-0"
            initialDimension={{ width: 160, height: 160 }}
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={
                  <ChartTooltipContent
                    hideLabel
                    formatter={(value, name) => [`${value}%`, String(name)]}
                    nameKey="country"
                  />
                }
              />
              <Pie
                data={chartData}
                dataKey="percentage"
                nameKey="country"
                innerRadius={42}
                outerRadius={64}
                strokeWidth={0}
              >
                <Label
                  content={({ viewBox }) => {
                    if (!viewBox || !("cx" in viewBox) || !("cy" in viewBox)) {
                      return null;
                    }

                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy - 4}
                          className="fill-foreground font-heading text-xl font-bold"
                        >
                          {total}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy + 14}
                          className="fill-muted-foreground text-[10px]"
                        >
                          Students
                        </tspan>
                      </text>
                    );
                  }}
                  position="center"
                />
              </Pie>
            </PieChart>
          </ChartContainer>

          <div className="flex min-w-0 flex-1 flex-col gap-3">
            {chartData.map((segment) => (
              <div key={segment.country} className="flex items-center gap-2">
                <div
                  className="size-2 shrink-0 rounded-sm"
                  style={{ backgroundColor: segment.color }}
                />
                <span className="min-w-0 flex-1 truncate text-xs text-muted-foreground">
                  {segment.country}
                </span>
                <span className="text-xs font-medium text-foreground">
                  {segment.percentage}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
