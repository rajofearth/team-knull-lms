import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function EditActions({
  onSave,
  isSaving,
}: {
  onSave: () => void;
  isSaving: boolean;
}) {
  return (
    <div className="flex items-center justify-end gap-4 pt-6 mt-4">
      <Button
        variant="outline"
        disabled={isSaving}
        className="rounded-xl px-6 py-5 bg-white border-border text-foreground hover:bg-muted font-semibold text-sm shadow-none"
      >
        Cancel
      </Button>
      <Button
        onClick={onSave}
        disabled={isSaving}
        className="rounded-xl px-6 py-5 bg-foreground text-background hover:bg-foreground/90 font-semibold text-sm shadow-none"
      >
        {isSaving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        Save Changes
      </Button>
    </div>
  );
}
