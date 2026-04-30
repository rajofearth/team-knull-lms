import { AlertCircle } from "lucide-react";
import Link from "next/link";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function ProfileCompletionAlert({
  isComplete,
}: {
  isComplete: boolean;
}) {
  if (isComplete) return null;

  return (
    <Alert className="bg-amber-50 border-amber-200 text-amber-800 rounded-2xl mb-2">
      <AlertCircle className="size-5 text-amber-600" />
      <AlertTitle className="font-semibold text-amber-900 text-base">
        Your profile is incomplete
      </AlertTitle>
      <AlertDescription className="text-amber-800/90 mt-1.5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <span>
          Please complete your profile to get the most out of your learning
          experience.
        </span>
        <Link
          href="/profile/edit"
          className="text-sm font-semibold bg-amber-100 hover:bg-amber-200 text-amber-900 px-4 py-2 rounded-xl transition-colors whitespace-nowrap text-center"
        >
          Complete Profile
        </Link>
      </AlertDescription>
    </Alert>
  );
}
