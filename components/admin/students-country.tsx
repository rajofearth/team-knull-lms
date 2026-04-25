import type { CountrySegment } from "@/lib/data/admin";

interface StudentsCountryProps {
  data: CountrySegment[];
  total: string;
}

export function StudentsCountry({ data, total }: StudentsCountryProps) {
  // Build SVG donut segments
  const radius = 70;
  const cx = 80;
  const cy = 80;
  const circumference = 2 * Math.PI * radius;

  let offset = 0;
  const segments = data.map((seg) => {
    const dash = (seg.percentage / 100) * circumference;
    const gap = circumference - dash;
    const currentOffset = offset;
    offset += dash;
    return { ...seg, dash, gap, offset: currentOffset };
  });

  return (
    <div className="flex flex-col rounded-md gap-5 bg-white border border-border p-5 w-[340px] shrink-0">
      <h3 className="font-heading font-semibold text-lg text-foreground">Students by Country</h3>

      <div className="flex items-center gap-5">
        {/* Donut */}
        <div className="relative size-[140px] shrink-0">
          <svg width="140" height="140" viewBox="0 0 160 160">
            {/* Track */}
            <circle cx={cx} cy={cy} r={radius} fill="none" stroke="#F3F4F6" strokeWidth="20" />
            {/* Segments */}
            {segments.map((seg) => (
              <circle
                key={seg.country}
                cx={cx}
                cy={cy}
                r={radius}
                fill="none"
                stroke={seg.color}
                strokeWidth="20"
                strokeDasharray={`${seg.dash} ${seg.gap}`}
                strokeDashoffset={-seg.offset}
                transform={`rotate(-90 ${cx} ${cy})`}
                strokeLinecap="butt"
              />
            ))}
          </svg>
          {/* Center text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="font-heading font-bold text-lg text-foreground leading-tight">{total}</span>
            <span className="text-[11px] text-muted-foreground font-sans">Total</span>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-col gap-3 flex-1 min-w-0">
          {data.map((seg) => (
            <div key={seg.country} className="flex items-center justify-between">
              <div className="flex items-center gap-2 min-w-0">
                <span
                  className="size-2 rounded-full shrink-0"
                  style={{ backgroundColor: seg.color }}
                />
                <span className="text-xs font-sans text-foreground/70 truncate">{seg.country}</span>
              </div>
              <span className="text-xs font-sans font-semibold text-foreground shrink-0 ml-2">
                {seg.percentage.toFixed(1)}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
