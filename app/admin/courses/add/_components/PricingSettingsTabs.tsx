"use client";

import * as React from "react";
import { 
  DollarSign, 
  ChevronRight, 
  Settings2, 
  ArrowRight,
  Eye,
  Settings as SettingsIcon,
  Plus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface PricingTabProps {
  setActiveTab: (tab: string) => void;
}

export function PricingTab({ setActiveTab }: PricingTabProps) {
  return (
    <div className="flex flex-col gap-8 pb-24">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-ink-deep font-heading font-semibold m-0 text-lg">
            Course Pricing
          </h2>
          <p className="text-text-secondary font-sans m-0 text-xs">
            Set your course price, currency, and configure enrollment options.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="border border-border bg-background hover:border-primary transition-colors cursor-pointer group">
            <CardContent className="p-6 flex flex-col items-center text-center gap-4">
              <div className="size-12 rounded-full bg-surface-dim flex items-center justify-center border border-border group-hover:bg-primary/5 transition-colors">
                <DollarSign className="size-6 text-text-secondary group-hover:text-primary transition-colors" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-ink-deep font-sans font-semibold text-base">Standard Pricing</h3>
                <p className="text-text-secondary font-sans text-xs">
                  Set a one-time purchase price for lifetime access.
                </p>
              </div>
              <Button variant="outline" className="w-full mt-2 h-9 text-xs">Configure</Button>
            </CardContent>
          </Card>

          <Card className="border border-border bg-background hover:border-primary transition-colors cursor-pointer group opacity-60">
            <CardContent className="p-6 flex flex-col items-center text-center gap-4">
              <div className="size-12 rounded-full bg-surface-dim flex items-center justify-center border border-border">
                <SettingsIcon className="size-6 text-text-secondary" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-ink-deep font-sans font-semibold text-base">Subscription Plan</h3>
                <p className="text-text-secondary font-sans text-xs">
                  Offer this course as part of a recurring monthly/yearly plan.
                </p>
              </div>
              <Button variant="outline" disabled className="w-full mt-2 h-9 text-xs">Coming Soon</Button>
            </CardContent>
          </Card>

          <Card className="border border-border bg-background hover:border-primary transition-colors cursor-pointer group">
            <CardContent className="p-6 flex flex-col items-center text-center gap-4">
              <div className="size-12 rounded-full bg-surface-dim flex items-center justify-center border border-border group-hover:bg-primary/5 transition-colors">
                <Plus className="size-6 text-text-secondary group-hover:text-primary transition-colors" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-ink-deep font-sans font-semibold text-base">Free Course</h3>
                <p className="text-text-secondary font-sans text-xs">
                  Make this course available to all students for free.
                </p>
              </div>
              <Button variant="outline" className="w-full mt-2 h-9 text-xs">Activate Free</Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="fixed bottom-0 right-0 left-[260px] h-20 bg-background border-t border-border px-10 flex items-center justify-between z-10">
        <Button
          variant="outline"
          onClick={() => setActiveTab("curriculum")}
          className="flex items-center rounded-md py-2.5 px-6 gap-2 bg-background border border-border text-ink-deep transition-colors"
        >
          <ChevronRight className="size-4 rotate-180" />
          <span className="font-sans font-medium text-sm">Previous: Curriculum</span>
        </Button>
        <Button
          onClick={() => setActiveTab("settings")}
          className="flex items-center rounded-md py-2.5 px-6 gap-2 bg-primary hover:bg-ink-deep text-white transition-colors"
        >
          <span className="font-sans font-medium text-sm">Next: Settings</span>
          <ChevronRight className="size-4" />
        </Button>
      </div>
    </div>
  );
}

export function SettingsTab({ setActiveTab }: { setActiveTab: (tab: string) => void }) {
  return (
    <div className="flex flex-col gap-8 pb-24">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-ink-deep font-heading font-semibold m-0 text-lg">
            Course Settings
          </h2>
          <p className="text-text-secondary font-sans m-0 text-xs">
            Manage advanced visibility, SEO, and enrollment settings.
          </p>
        </div>

        <div className="flex flex-col gap-4 max-w-2xl">
          <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-background hover:bg-surface-dim transition-colors group cursor-pointer">
            <div className="size-12 rounded-lg bg-surface-dim flex items-center justify-center border border-border group-hover:bg-white transition-colors">
              <Eye className="size-6 text-text-secondary" />
            </div>
            <div className="flex flex-col grow">
              <span className="text-ink-deep font-sans font-semibold text-sm">Course Visibility</span>
              <p className="text-text-secondary font-sans text-xs">Public, Private, or Hidden from search results.</p>
            </div>
            <ChevronRight className="size-5 text-text-muted" />
          </div>

          <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-background hover:bg-surface-dim transition-colors group cursor-pointer">
            <div className="size-12 rounded-lg bg-surface-dim flex items-center justify-center border border-border group-hover:bg-white transition-colors">
              <Settings2 className="size-6 text-text-secondary" />
            </div>
            <div className="flex flex-col grow">
              <span className="text-ink-deep font-sans font-semibold text-sm">SEO Configuration</span>
              <p className="text-text-secondary font-sans text-xs">Custom meta title, description and social media tags.</p>
            </div>
            <ChevronRight className="size-5 text-text-muted" />
          </div>

          <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-background hover:bg-surface-dim transition-colors group cursor-pointer">
            <div className="size-12 rounded-lg bg-surface-dim flex items-center justify-center border border-border group-hover:bg-white transition-colors">
              <SettingsIcon className="size-6 text-text-secondary" />
            </div>
            <div className="flex flex-col grow">
              <span className="text-ink-deep font-sans font-semibold text-sm">Advanced Access</span>
              <p className="text-text-secondary font-sans text-xs">Set prerequisites, expiration dates, and certificates.</p>
            </div>
            <ChevronRight className="size-5 text-text-muted" />
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 right-0 left-[260px] h-20 bg-background border-t border-border px-10 flex items-center justify-between z-10">
        <Button
          variant="outline"
          onClick={() => setActiveTab("pricing")}
          className="flex items-center rounded-md py-2.5 px-6 gap-2 bg-background border border-border text-ink-deep transition-colors"
        >
          <ChevronRight className="size-4 rotate-180" />
          <span className="font-sans font-medium text-sm">Previous: Pricing</span>
        </Button>
        <Button className="flex items-center rounded-md py-2.5 px-6 gap-2 bg-primary hover:bg-ink-deep text-white transition-colors shadow-lg">
          <span className="font-sans font-medium text-sm">Publish Course</span>
          <ArrowRight className="size-4" />
        </Button>
      </div>
    </div>
  );
}
