"use client";

import { InfoIcon } from "lucide-react";
import { Field } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";

export function AboutMeForm({
  data,
  onChange,
}: {
  data: {
    bio: string;
  };
  onChange: (updates: Partial<typeof data>) => void;
}) {
  const maxLength = 500;

  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-base font-heading font-semibold text-foreground m-0">
        About Me
      </h3>

      <Field className="w-full">
        <InputGroup className="rounded-xl border-border">
          <InputGroupTextarea
            placeholder="Tell us a bit about yourself..."
            value={data.bio}
            onChange={(e) => onChange({ bio: e.target.value })}
            maxLength={maxLength}
            className="min-h-32 pb-12 rounded-xl text-sm"
          />
          <InputGroupAddon
            align="block-end"
            className="px-4 py-2 border-t border-border"
          >
            <InputGroupText className="text-muted-foreground text-xs">
              {data.bio.length}/{maxLength} characters
            </InputGroupText>
            <InfoIcon className="text-muted-foreground ml-auto size-4" />
          </InputGroupAddon>
        </InputGroup>
      </Field>
    </div>
  );
}
