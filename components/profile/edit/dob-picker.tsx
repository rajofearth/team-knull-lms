"use client";

import {
  eachMonthOfInterval,
  eachYearOfInterval,
  endOfYear,
  format,
  isAfter,
  isBefore,
  parse,
  startOfYear,
} from "date-fns";
import { CalendarIcon, ChevronDownIcon } from "lucide-react";
import {
  type Dispatch,
  type HTMLAttributes,
  type ReactNode,
  type SetStateAction,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import type { CaptionLabelProps, MonthGridProps } from "react-day-picker";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

export function DOBPicker({
  value,
  onChange,
  id: externalId,
}: {
  value: string;
  onChange: (value: string) => void;
  id?: string;
}) {
  const internalId = useId();
  const id = externalId || internalId;
  const today = new Date();

  // Parse existing value or default to today
  const initialDate = value ? parse(value, "LLL dd, y", new Date()) : undefined;
  const safeInitialDate =
    initialDate && !Number.isNaN(initialDate.getTime())
      ? initialDate
      : undefined;

  const [month, setMonth] = useState(safeInitialDate || today);
  const [date, setDate] = useState<Date | undefined>(safeInitialDate);
  const [isYearView, setIsYearView] = useState(false);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const startYear = 1940;
  const endYear = today.getFullYear();
  const startDate = startOfYear(new Date(startYear, 0));
  const endDate = endOfYear(new Date(endYear, 11));

  const years = eachYearOfInterval({
    end: endOfYear(endDate),
    start: startOfYear(startDate),
  }).reverse(); // Reverse so most recent years are at top

  useEffect(() => {
    if (date) {
      onChange(format(date, "LLL dd, y"));
    }
  }, [date, onChange]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className="group/pick-date w-full justify-between h-10 rounded-xl border-border"
          id={id}
          variant={"outline"}
        >
          <span
            className={cn(
              "truncate font-normal",
              !date && "text-muted-foreground",
            )}
          >
            {date ? format(date, "LLL dd, y") : "Pick a date"}
          </span>
          <CalendarIcon
            aria-hidden="true"
            className="text-muted-foreground/80 group-hover:text-foreground shrink-0 transition-colors size-4"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="w-auto p-0 rounded-xl border-border shadow-lg"
      >
        <Card className="p-0 border-none shadow-none">
          <CardContent className="p-0">
            <Calendar
              classNames={{
                month_caption: "justify-start px-4 pt-4",
                nav: "flex items-center w-full absolute inset-x-0 justify-end pointer-events-none [&>button]:pointer-events-auto px-4 pt-4",
              }}
              components={{
                CaptionLabel: (props: CaptionLabelProps) => (
                  <CaptionLabel
                    isYearView={isYearView}
                    setIsYearView={(val) => {
                      setIsYearView(val);
                      if (!val) setSelectedYear(null);
                    }}
                    {...props}
                  />
                ),
                MonthGrid: (props: MonthGridProps) => {
                  return (
                    <MonthGrid
                      className={props.className}
                      currentMonth={month.getMonth()}
                      currentYear={month.getFullYear()}
                      endDate={endDate}
                      isYearView={isYearView}
                      onMonthSelect={(selectedMonth: Date) => {
                        setMonth(selectedMonth);
                        setIsYearView(false);
                        setSelectedYear(null);
                      }}
                      setIsYearView={setIsYearView}
                      startDate={startDate}
                      years={years}
                      selectedYear={selectedYear}
                      setSelectedYear={setSelectedYear}
                    >
                      {props.children}
                    </MonthGrid>
                  );
                },
              }}
              defaultMonth={month}
              endMonth={endDate}
              mode="single"
              month={month}
              onMonthChange={setMonth}
              onSelect={setDate}
              selected={date}
              startMonth={startDate}
              initialFocus
            />
          </CardContent>
        </Card>
      </PopoverContent>
    </Popover>
  );
}

function MonthGrid({
  className,
  children,
  isYearView,
  years,
  currentYear,
  currentMonth,
  onMonthSelect,
  selectedYear,
  setSelectedYear,
  startDate,
  endDate,
}: {
  className?: string;
  children: ReactNode;
  isYearView: boolean;
  setIsYearView: Dispatch<SetStateAction<boolean>>;
  startDate: Date;
  endDate: Date;
  years: Date[];
  currentYear: number;
  currentMonth: number;
  onMonthSelect: (date: Date) => void;
  selectedYear: number | null;
  setSelectedYear: Dispatch<SetStateAction<number | null>>;
}) {
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isYearView && scrollAreaRef.current) {
      const activeElement = scrollAreaRef.current.querySelector(
        "[data-active='true']",
      ) as HTMLElement | null;

      if (activeElement) {
        activeElement.scrollIntoView({ block: "center" });
      }
    }
  }, [isYearView]);

  return (
    <div className="relative">
      <table className={className}>{children}</table>
      {isYearView && (
        <div className="bg-background absolute inset-0 z-20">
          <div className="h-full" ref={scrollAreaRef}>
            <ScrollArea className="h-[300px]">
              <div className="px-3 pt-1 pb-3">
                {selectedYear === null ? (
                  <div className="grid grid-cols-4 gap-2">
                    {years.map((year) => {
                      const y = year.getFullYear();
                      const isCurrent = y === currentYear;
                      return (
                        <Button
                          key={y}
                          variant={isCurrent ? "default" : "outline"}
                          size="sm"
                          className="h-8 text-xs rounded-lg"
                          data-active={isCurrent}
                          onClick={() => setSelectedYear(y)}
                        >
                          {y}
                        </Button>
                      );
                    })}
                  </div>
                ) : (
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="px-2 h-8 text-xs"
                        onClick={() => setSelectedYear(null)}
                      >
                        <ChevronDownIcon className="mr-1 size-3.5 rotate-90" />
                        {selectedYear}
                      </Button>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {eachMonthOfInterval({
                        start: startOfYear(new Date(selectedYear, 0)),
                        end: endOfYear(new Date(selectedYear, 0)),
                      }).map((month) => {
                        const isCurrent =
                          month.getMonth() === currentMonth &&
                          selectedYear === currentYear;

                        const isDisabled =
                          isBefore(month, startOfYear(startDate)) ||
                          isAfter(month, endOfYear(endDate));

                        return (
                          <Button
                            key={month.getTime()}
                            variant={isCurrent ? "default" : "outline"}
                            size="sm"
                            className="h-8 text-xs rounded-lg"
                            data-active={isCurrent}
                            disabled={isDisabled}
                            onClick={() => onMonthSelect(month)}
                          >
                            {format(month, "MMM")}
                          </Button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
          </div>
        </div>
      )}
    </div>
  );
}

function CaptionLabel({
  children,
  isYearView,
  setIsYearView,
}: {
  isYearView: boolean;
  setIsYearView: Dispatch<SetStateAction<boolean>>;
} & HTMLAttributes<HTMLSpanElement>) {
  return (
    <Button
      className="data-[state=open]:text-muted-foreground/80 -ms-2 flex items-center gap-2 text-sm font-semibold hover:bg-transparent [&[data-state=open]>svg]:rotate-180 transition-none"
      data-state={isYearView ? "open" : "closed"}
      onClick={() => setIsYearView((prev) => !prev)}
      size="sm"
      variant="ghost"
    >
      {children}
      <ChevronDownIcon
        aria-hidden="true"
        className="text-muted-foreground/80 shrink-0 transition-transform duration-200 size-4"
      />
    </Button>
  );
}
