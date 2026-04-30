import { Button } from "@/components/ui/button";

export function DangerZoneCard() {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-6 md:p-8 rounded-2xl bg-red-50/50 border border-red-100 w-full">
      <div className="flex flex-col gap-1">
        <h3 className="text-base font-heading font-semibold text-red-600 m-0">
          Danger Zone
        </h3>
        <p className="text-sm text-muted-foreground m-0">
          Once you delete your account, there is no going back. Please be
          certain.
        </p>
      </div>
      <Button
        variant="outline"
        className="shrink-0 rounded-xl px-6 py-5 bg-white border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700 font-semibold text-sm shadow-sm"
      >
        Delete Account
      </Button>
    </div>
  );
}
