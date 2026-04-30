"use client";

export function AboutMeForm() {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-base font-heading font-semibold text-foreground m-0">
        About Me
      </h3>

      <div className="flex flex-col gap-2">
        <label htmlFor="bio" className="text-sm font-medium text-foreground">
          Bio
        </label>
        <div className="relative">
          <textarea
            id="bio"
            defaultValue="I'm a UI/UX designer and front-end developer with 5+ years of experience crafting beautiful and user-friendly digital products. I love learning new technologies and sharing knowledge with the community."
            className="w-full min-h-[120px] rounded-xl border border-border bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 resize-y"
          />
          <span className="absolute bottom-3 right-3 text-xs text-muted-foreground">
            159/500
          </span>
        </div>
      </div>
    </div>
  );
}
