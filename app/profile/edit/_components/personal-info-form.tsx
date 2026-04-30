"use client";

import { Calendar as CalendarIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function PersonalInfoForm() {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-base font-heading font-semibold text-foreground m-0">
        Personal Information
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {/* Full Name */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="full-name"
            className="text-sm font-medium text-foreground"
          >
            Full Name
          </label>
          <Input
            id="full-name"
            defaultValue="Rohit Sharma"
            className="h-10 rounded-xl border-border"
          />
        </div>

        {/* Email Address */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-sm font-medium text-foreground"
          >
            Email Address
          </label>
          <Input
            id="email"
            defaultValue="rohit.sharma@example.com"
            type="email"
            className="h-10 rounded-xl border-border"
          />
        </div>

        {/* Date of Birth */}
        <div className="flex flex-col gap-2">
          <label htmlFor="dob" className="text-sm font-medium text-foreground">
            Date of Birth
          </label>
          <div className="relative">
            <Input
              id="dob"
              defaultValue="02/14/1995"
              className="h-10 rounded-xl border-border pr-10"
            />
            <CalendarIcon className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
          </div>
        </div>

        {/* Phone Number */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="phone"
            className="text-sm font-medium text-foreground"
          >
            Phone Number
          </label>
          <div className="flex items-center gap-2">
            <Select defaultValue="+91">
              <SelectTrigger
                aria-label="Country Code"
                className="w-[90px] h-10 rounded-xl border-border shrink-0 text-sm"
              >
                <SelectValue placeholder="Code" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="+91">+91</SelectItem>
                <SelectItem value="+1">+1</SelectItem>
                <SelectItem value="+44">+44</SelectItem>
                <SelectItem value="+61">+61</SelectItem>
              </SelectContent>
            </Select>
            <Input
              id="phone"
              defaultValue="98765 43210"
              className="h-10 rounded-xl border-border flex-1"
            />
          </div>
        </div>

        {/* Location */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="location"
            className="text-sm font-medium text-foreground"
          >
            Location
          </label>
          <Input
            id="location"
            defaultValue="Bangalore, India"
            className="h-10 rounded-xl border-border"
          />
        </div>

        {/* Language */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="language"
            className="text-sm font-medium text-foreground"
          >
            Language
          </label>
          <Select defaultValue="english">
            <SelectTrigger
              id="language"
              aria-label="Language"
              className="w-full h-10 rounded-xl border-border text-sm"
            >
              <SelectValue placeholder="Select Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="spanish">Spanish</SelectItem>
              <SelectItem value="french">French</SelectItem>
              <SelectItem value="hindi">Hindi</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
