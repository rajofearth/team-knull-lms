import { Button } from "@/components/ui/button";

export function EditActions() {
  return (
    <div className="flex items-center justify-end gap-4 pt-6 mt-4">
      <Button
        variant="outline"
        className="rounded-xl px-6 py-5 bg-white border-border text-foreground hover:bg-muted font-semibold text-sm shadow-none"
      >
        Cancel
      </Button>
      <Button className="rounded-xl px-6 py-5 bg-foreground text-background hover:bg-foreground/90 font-semibold text-sm shadow-none">
        Save Changes
      </Button>
    </div>
  );
}
