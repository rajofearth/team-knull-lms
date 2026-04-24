"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ChevronDown, Star } from "lucide-react";

interface CourseFiltersProps {
  activeFilters: {
    levels: string[];
    price: "all" | "free" | "paid";
    durations: string[];
    ratings: number[];
  };
  filterCounts: {
    levels: Record<string, number>;
    price: { free: number; paid: number };
    durations: Record<string, number>;
    ratings: Record<number, number>;
  };
  onFilterChange: (type: string, value: any) => void;
  onClearFilters: () => void;
}

export function CourseFilters({ activeFilters, filterCounts, onFilterChange, onClearFilters }: CourseFiltersProps) {
  
  const toggleArrayFilter = (type: "levels" | "durations" | "ratings", value: string | number) => {
    // Fix: Cast to any[] to avoid union array issues, then re-cast for type safety
    const current = activeFilters[type] as any[];
    const updated = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    onFilterChange(type, updated);
  };

  return (
    <div className="flex flex-col w-64 gap-8 shrink-0">
      {/* Filters Header */}
      <div className="flex justify-between items-center pb-4 border-b border-border">
        <h2 className="text-ink font-heading font-semibold text-lg">Filters</h2>
        <button 
          onClick={onClearFilters}
          className="text-text-muted hover:text-ink font-sans text-sm transition-colors cursor-pointer"
        >
          Clear All
        </button>
      </div>

      {/* Categories */}
      <div className="flex flex-col gap-3">
        <h3 className="text-ink font-sans font-semibold text-sm">Categories</h3>
        <div className="flex items-center justify-between rounded-md py-2.5 px-3.5 bg-muted/50 border border-border group cursor-pointer hover:bg-muted transition-colors">
          <span className="text-text-description font-sans text-sm">All Categories</span>
          <ChevronDown className="size-4 text-text-muted group-hover:text-ink transition-colors" />
        </div>
      </div>

      {/* Level */}
      <div className="flex flex-col gap-4">
        <h3 className="text-ink font-sans font-semibold text-sm">Level</h3>
        <div className="flex flex-col gap-3">
          {["Beginner", "Intermediate", "Advanced"].map((level) => (
            <div key={level} className="flex items-center gap-3">
              <Checkbox 
                id={`level-${level}`} 
                checked={activeFilters.levels.includes(level)}
                onCheckedChange={() => toggleArrayFilter("levels", level)}
              />
              <Label htmlFor={`level-${level}`} className="text-text-description font-sans text-sm cursor-pointer grow">
                {level}
              </Label>
              <span className="text-text-muted font-sans text-sm">({filterCounts.levels[level] || 0})</span>
            </div>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="flex flex-col gap-4">
        <h3 className="text-ink font-sans font-semibold text-sm">Price</h3>
        <RadioGroup 
          value={activeFilters.price} 
          onValueChange={(val) => onFilterChange("price", val)}
          className="flex flex-col gap-3"
        >
          <div className="flex items-center gap-3">
            <RadioGroupItem value="all" id="price-all" />
            <Label htmlFor="price-all" className="text-ink font-medium font-sans text-sm cursor-pointer">
              All Courses
            </Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="free" id="price-free" />
            <Label htmlFor="price-free" className="text-text-description font-sans text-sm cursor-pointer grow">
              Free Courses
            </Label>
            <span className="text-text-muted font-sans text-sm">({filterCounts.price.free})</span>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="paid" id="price-paid" />
            <Label htmlFor="price-paid" className="text-text-description font-sans text-sm cursor-pointer grow">
              Paid Courses
            </Label>
            <span className="text-text-muted font-sans text-sm">({filterCounts.price.paid})</span>
          </div>
        </RadioGroup>
      </div>

      {/* Duration */}
      <div className="flex flex-col gap-4">
        <h3 className="text-ink font-sans font-semibold text-sm">Duration</h3>
        <div className="flex flex-col gap-3">
          {["0-5 Hours", "5-15 Hours", "15+ Hours"].map((duration) => (
            <div key={duration} className="flex items-center gap-3">
              <Checkbox 
                id={`duration-${duration}`} 
                checked={activeFilters.durations.includes(duration)}
                onCheckedChange={() => toggleArrayFilter("durations", duration)}
              />
              <Label htmlFor={`duration-${duration}`} className="text-text-description font-sans text-sm cursor-pointer grow">
                {duration}
              </Label>
              <span className="text-text-muted font-sans text-sm">({filterCounts.durations[duration] || 0})</span>
            </div>
          ))}
        </div>
      </div>

      {/* Rating */}
      <div className="flex flex-col gap-4">
        <h3 className="text-ink font-sans font-semibold text-sm">Rating</h3>
        <div className="flex flex-col gap-3">
          {[5, 4, 3, 2].map((rating) => (
            <div key={rating} className="flex items-center gap-3">
              <Checkbox 
                id={`rating-${rating}`} 
                checked={activeFilters.ratings.includes(rating)}
                onCheckedChange={() => toggleArrayFilter("ratings", rating)}
              />
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < rating ? "fill-amber-400 text-amber-400" : "fill-border text-border"}
                  />
                ))}
              </div>
              <span className="text-text-muted font-sans text-sm ml-auto">
                ({filterCounts.ratings[rating] || 0})
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Apply Button */}
      <button 
        onClick={onClearFilters}
        className="flex items-center justify-center w-full rounded-lg bg-canvas border border-border py-3 hover:bg-muted transition-colors font-sans font-semibold text-sm text-ink cursor-pointer"
      >
        Clear Filters
      </button>
    </div>
  );
}
