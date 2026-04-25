"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PricingTabProps {
  setActiveTab: (tab: string) => void;
}

export function PricingTab({ setActiveTab }: PricingTabProps) {
  return (
    <div className="flex w-full max-w-6xl pt-6 gap-10 antialiased text-sm pb-24">
      {/* Main Content Area */}
      <div className="flex grow shrink basis-0 rounded-lg gap-8 bg-white border border-border p-6 h-fit">
        {/* Left Column: Pricing & Model */}
        <div className="flex flex-col grow shrink basis-0 gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-ink-deep font-heading font-semibold text-lg m-0">
              Pricing
            </h3>
            <p className="text-text-secondary font-sans text-sm m-0">
              Set the price and enrollment options for your course.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <Label className="text-ink-deep font-sans font-medium text-sm">
              Pricing Model
            </Label>

            <RadioGroup defaultValue="one-time" className="flex flex-col gap-4">
              {/* Free */}
              <div className="flex items-start gap-3">
                <RadioGroupItem value="free" id="free" className="mt-0.5" />
                <div className="flex flex-col gap-0.5">
                  <Label
                    htmlFor="free"
                    className="text-ink-deep font-sans font-medium text-sm cursor-pointer"
                  >
                    Free
                  </Label>
                  <span className="text-text-secondary font-sans text-xs">
                    Offer this course for free
                  </span>
                </div>
              </div>

              {/* One-time Payment */}
              <div className="flex items-start gap-3">
                <RadioGroupItem
                  value="one-time"
                  id="one-time"
                  className="mt-0.5"
                />
                <div className="flex flex-col gap-0.5">
                  <Label
                    htmlFor="one-time"
                    className="text-ink-deep font-sans font-semibold text-sm cursor-pointer"
                  >
                    One-time Payment
                  </Label>
                  <span className="text-text-secondary font-sans text-xs">
                    Charge a one-time fee to access this course
                  </span>
                </div>
              </div>

              {/* Subscription */}
              <div className="flex items-start gap-3">
                <RadioGroupItem
                  value="subscription"
                  id="subscription"
                  className="mt-0.5"
                />
                <div className="flex flex-col gap-0.5">
                  <Label
                    htmlFor="subscription"
                    className="text-ink-deep font-sans font-medium text-sm cursor-pointer"
                  >
                    Subscription
                  </Label>
                  <span className="text-text-secondary font-sans text-xs">
                    Charge recurring fee for access
                  </span>
                </div>
              </div>

              {/* Multiple Tiers */}
              <div className="flex items-start gap-3">
                <RadioGroupItem
                  value="multiple"
                  id="multiple"
                  className="mt-0.5"
                />
                <div className="flex flex-col gap-0.5">
                  <Label
                    htmlFor="multiple"
                    className="text-ink-deep font-sans font-medium text-sm cursor-pointer"
                  >
                    Multiple Tiers
                  </Label>
                  <span className="text-text-secondary font-sans text-xs">
                    Offer different pricing tiers
                  </span>
                </div>
              </div>
            </RadioGroup>
          </div>

          <div className="flex flex-col pt-6 gap-4 border-t border-surface-dim">
            <Label className="text-ink-deep font-sans font-medium text-sm">
              Enrollment Options
            </Label>

            <div className="flex items-start gap-3">
              <Checkbox id="approval" className="mt-0.5" />
              <div className="flex flex-col gap-0.5">
                <Label
                  htmlFor="approval"
                  className="text-ink-deep font-sans font-medium text-sm cursor-pointer"
                >
                  Require enrollment approval
                </Label>
                <span className="text-text-secondary font-sans text-xs">
                  Manually approve students before granting access
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Checkbox id="dates" className="mt-0.5" />
              <div className="flex flex-col gap-0.5">
                <Label
                  htmlFor="dates"
                  className="text-ink-deep font-sans font-medium text-sm cursor-pointer"
                >
                  Set enrollment start and end date
                </Label>
                <span className="text-text-secondary font-sans text-xs">
                  Limit the time period for enrollment
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Column: Inputs */}
        <div className="flex flex-col grow-[1.2] shrink basis-0 pt-14 gap-6">
          <div className="flex flex-col gap-2">
            <Label className="text-ink-deep font-sans font-medium text-sm">
              Price *
            </Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-deep font-sans text-base/5">
                $
              </span>
              <Input
                defaultValue="59.00"
                className="pl-7 h-10 rounded-md border-border bg-white text-base/5 font-sans focus-visible:ring-0 focus-visible:border-ink-deep"
              />
            </div>
            <span className="text-text-secondary font-sans text-xs">
              Enter the course price
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <Label className="text-ink-deep font-sans font-medium text-sm">
              Compare At Price (Optional)
            </Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-deep font-sans text-base/5">
                $
              </span>
              <Input
                defaultValue="89.00"
                className="pl-7 h-10 rounded-md border-border bg-white text-base/5 font-sans focus-visible:ring-0 focus-visible:border-ink-deep"
              />
            </div>
            <span className="text-text-secondary font-sans text-xs">
              Shown as the original price (e.g., for discounts)
            </span>
          </div>

          <div className="flex items-end gap-3">
            <div className="flex flex-col grow shrink basis-0 gap-2">
              <Label className="text-ink-deep font-sans font-medium text-sm">
                Discount (Optional)
              </Label>
              <Input
                defaultValue="20"
                className="h-10 rounded-md border-border bg-white text-base/5 font-sans focus-visible:ring-0 focus-visible:border-ink-deep"
              />
            </div>
            <Select defaultValue="percentage">
              <SelectTrigger className="h-10 min-w-[60px] rounded-md border-border bg-white text-base/5 px-3">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="percentage">%</SelectItem>
                <SelectItem value="fixed">$</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <span className="text-green-600 font-sans font-medium text-sm">
            You save $30.00
          </span>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="flex flex-col w-[320px] gap-6 shrink-0">
        <Card className="border border-border bg-white shadow-none rounded-lg p-6">
          <div className="text-ink-deep font-heading font-semibold text-base/5 m-0 mb-4">
            Price Preview
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <span className="text-text-secondary font-sans text-sm">
                Price
              </span>
              <span className="text-ink-deep font-sans font-semibold text-sm">
                $59.00
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-text-secondary font-sans text-sm">
                Discount
              </span>
              <span className="text-green-600 font-sans font-semibold text-sm">
                - $30.00
              </span>
            </div>
            <div className="h-px bg-surface-dim shrink-0" />
            <div className="flex justify-between items-center">
              <span className="text-ink-deep font-sans font-semibold text-sm">
                Students Pay
              </span>
              <span className="text-ink-deep font-sans font-bold text-sm">
                $29.00
              </span>
            </div>
          </div>
        </Card>

        <Card className="bg-[#F8FAFF] border-[#E0E7FF] shadow-none rounded-lg p-5 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center rounded-full border-[1.5px] border-primary shrink-0 size-5">
              <span className="text-primary font-heading font-bold text-xs/4">
                i
              </span>
            </div>
            <h4 className="text-ink-deep font-heading font-semibold text-[15px]/4.5 m-0">
              Pricing Tips
            </h4>
          </div>
          <ul className="flex flex-col pl-5 gap-2 m-0 list-disc">
            <li className="text-[13px] leading-relaxed text-text-secondary font-sans">
              Use compare-at price to show discounts and increase conversions.
            </li>
            <li className="text-[13px] leading-relaxed text-text-secondary font-sans">
              Limited time discounts and coupons can be added after publishing.
            </li>
          </ul>
        </Card>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-[260px] right-0 h-20 bg-background border-t border-border px-10 flex items-center justify-between z-10 shadow-lg">
        <Button
          variant="outline"
          onClick={() => setActiveTab("curriculum")}
          className="flex items-center rounded-md py-2.5 px-6 gap-2 bg-background border border-border text-ink-deep transition-colors font-medium text-sm hover:bg-surface-dim"
        >
          <ChevronLeft className="size-4" />
          Previous: Curriculum
        </Button>
        <Button
          variant="outline"
          onClick={() => setActiveTab("settings")}
          className="flex items-center rounded-md py-2.5 px-6 gap-2 bg-white border border-border text-ink-deep transition-colors font-medium text-sm hover:bg-surface-dim"
        >
          Next: Settings
          <ChevronRight className="size-4" />
        </Button>
      </div>
    </div>
  );
}
