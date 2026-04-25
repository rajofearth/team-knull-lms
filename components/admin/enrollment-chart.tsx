"use client";

import { useState } from "react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import type { ChartConfig } from "@/components/ui/chart";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
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

const chartConfig = {
  value: {
    label: "Enrollments",
    color: "var(--color-chart-1)",
  },
} satisfies ChartConfig;

export function EnrollmentChart({ data }: EnrollmentChartProps) {
  const [period, setPeriod] = useState<string>("Daily");

  return (
    <Card className="flex flex-col rounded-md border border-border bg-white p-0 shadow-none ring-0">
      <CardContent className="flex flex-col gap-5 p-5">
        <div className="flex items-center justify-between">
          <h3 className="font-heading text-lg font-semibold text-foreground">
            Enrollment Overview
          </h3>
          <Select value={period} onValueChange={setPeriod}>
            <SelectTrigger className="h-8 w-[100px] border-border bg-white text-[13px] font-medium text-foreground/80">
              <SelectValue placeholder="Period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Daily">Daily</SelectItem>
              <SelectItem value="Weekly">Weekly</SelectItem>
              <SelectItem value="Monthly">Monthly</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <ChartContainer
          config={chartConfig}
          className="h-65 w-full aspect-auto"
          initialDimension={{ width: 703, height: 260 }}
        >
          <AreaChart
            accessibilityLayer
            data={data}
            margin={{ top: 8, right: 8, left: 0, bottom: 8 }}
          >
            <defs>
              <linearGradient id="fill-enrollments" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-value)"
                  stopOpacity={0.2}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-value)"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <YAxis
              axisLine={false}
              tickLine={false}
              tickMargin={10}
              tickFormatter={(value) => `${Number(value) / 1000}K`}
              domain={[0, 8000]}
              ticks={[0, 2000, 4000, 6000, 8000]}
            />
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tickMargin={10}
              minTickGap={24}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(label) => String(label)}
                  formatter={(value) => [
                    typeof value === "number"
                      ? value.toLocaleString()
                      : String(value),
                    "Enrollments",
                  ]}
                />
              }
            />
            <Area
              dataKey="value"
              type="monotone"
              fill="url(#fill-enrollments)"
              fillOpacity={1}
              stroke="var(--color-value)"
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
