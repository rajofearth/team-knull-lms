"use client";

import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Field } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import type { UserProfileData } from "@/lib/lms/types";
import { DOBPicker } from "./dob-picker";

export function PersonalInfoForm({
  user,
  data,
  onChange,
}: {
  user: UserProfileData["user"];
  data: {
    name: string;
    location: string;
    dateOfBirth: string;
    phoneNumber: string;
  };
  onChange: (updates: Partial<typeof data>) => void;
}) {
  const [countryCode, setCountryCode] = useState("+91");

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
          <InputGroup className="h-10 rounded-xl border-border">
            <InputGroupInput
              id="full-name"
              value={data.name}
              onChange={(e) => onChange({ name: e.target.value })}
              className="text-sm"
            />
          </InputGroup>
        </div>

        {/* Email Address */}
        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium text-foreground">
            Email Address
          </span>
          <div className="h-10 flex items-center px-3 rounded-xl border border-border bg-muted/50 text-sm text-muted-foreground select-none cursor-not-allowed">
            {user.email}
          </div>
        </div>

        {/* Date of Birth */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="dob-picker"
            className="text-sm font-medium text-foreground"
          >
            Date of Birth
          </label>
          <DOBPicker
            id="dob-picker"
            value={data.dateOfBirth}
            onChange={(val) => onChange({ dateOfBirth: val })}
          />
        </div>

        {/* Phone Number */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="phone"
            className="text-sm font-medium text-foreground"
          >
            Phone Number
          </label>
          <Field className="w-full">
            <InputGroup className="h-10 rounded-xl border-border">
              <InputGroupAddon asChild className="px-0">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <InputGroupButton
                      variant="ghost"
                      className="h-full px-3 gap-1 rounded-none border-r border-border hover:bg-muted/50 transition-colors"
                    >
                      <span className="tabular-nums text-sm font-medium">
                        {countryCode}
                      </span>
                      <ChevronDownIcon className="size-3.5 text-muted-foreground" />
                    </InputGroupButton>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="start"
                    className="min-w-32 rounded-xl border-border"
                  >
                    <DropdownMenuItem
                      onClick={() => setCountryCode("+91")}
                      className="rounded-lg"
                    >
                      +91 (IN)
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => setCountryCode("+1")}
                      className="rounded-lg"
                    >
                      +1 (US)
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => setCountryCode("+44")}
                      className="rounded-lg"
                    >
                      +44 (UK)
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => setCountryCode("+61")}
                      className="rounded-lg"
                    >
                      +61 (AU)
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </InputGroupAddon>
              <InputGroupInput
                type="tel"
                placeholder="123 456 7890"
                value={data.phoneNumber}
                maxLength={10}
                onChange={(e) => {
                  const val = e.target.value.replace(/\D/g, "");
                  onChange({ phoneNumber: val });
                }}
                className="text-sm pl-3"
              />
            </InputGroup>
          </Field>
        </div>

        {/* Location */}
        <div className="flex flex-col gap-2 md:col-span-2">
          <label
            htmlFor="location"
            className="text-sm font-medium text-foreground"
          >
            Location
          </label>
          <InputGroup className="h-10 rounded-xl border-border">
            <InputGroupInput
              id="location"
              value={data.location}
              onChange={(e) => onChange({ location: e.target.value })}
              placeholder="e.g. Bangalore, India"
              className="text-sm"
            />
          </InputGroup>
        </div>
      </div>
    </div>
  );
}
