"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Search, ChevronDown, Star } from "lucide-react";

export function CourseFilters() {
  return (
    <div className="flex flex-col w-64 gap-8 shrink-0">
      {/* Filters Header */}
      <div className="flex justify-between items-center pb-4 border-b border-border">
        <h2 className="text-ink font-heading font-semibold text-lg">Filters</h2>
        <button className="text-text-muted hover:text-ink font-sans text-sm transition-colors cursor-pointer">
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
          {[
            { label: "Beginner", count: 124 },
            { label: "Intermediate", count: 89 },
            { label: "Advanced", count: 45 },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <Checkbox id={`level-${item.label}`} />
              <Label htmlFor={`level-${item.label}`} className="text-text-description font-sans text-sm cursor-pointer grow">
                {item.label}
              </Label>
              <span className="text-text-muted font-sans text-sm">({item.count})</span>
            </div>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="flex flex-col gap-4">
        <h3 className="text-ink font-sans font-semibold text-sm">Price</h3>
        <RadioGroup defaultValue="all" className="flex flex-col gap-3">
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
            <span className="text-text-muted font-sans text-sm">(23)</span>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="paid" id="price-paid" />
            <Label htmlFor="price-paid" className="text-text-description font-sans text-sm cursor-pointer grow">
              Paid Courses
            </Label>
            <span className="text-text-muted font-sans text-sm">(235)</span>
          </div>
        </RadioGroup>
      </div>

      {/* Duration */}
      <div className="flex flex-col gap-4">
        <h3 className="text-ink font-sans font-semibold text-sm">Duration</h3>
        <div className="flex flex-col gap-3">
          {[
            { label: "0-5 Hours", count: 45 },
            { label: "5-15 Hours", count: 120 },
            { label: "15+ Hours", count: 89 },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <Checkbox id={`duration-${item.label}`} />
              <Label htmlFor={`duration-${item.label}`} className="text-text-description font-sans text-sm cursor-pointer grow">
                {item.label}
              </Label>
              <span className="text-text-muted font-sans text-sm">({item.count})</span>
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
              <Checkbox id={`rating-${rating}`} />
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
                ({rating === 5 ? 89 : rating === 4 ? 120 : rating === 3 ? 45 : 12})
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Apply Button */}
      <button className="flex items-center justify-center w-full rounded-lg bg-canvas border border-border py-3 hover:bg-muted transition-colors font-sans font-semibold text-sm text-ink cursor-pointer">
        Apply Filters
      </button>
    </div>
  );
}
