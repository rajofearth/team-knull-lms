import { AppSessionProvider } from "@/components/auth/session-context";
import { TooltipProvider } from "@/components/ui/tooltip";
import { getToken } from "@/lib/auth-server";
import { ConvexClientProvider } from "./ConvexClientProvider";

export async function ConvexProviderWithToken({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = await getToken();

  return (
    <ConvexClientProvider initialToken={token}>
      <AppSessionProvider>
        <TooltipProvider>{children}</TooltipProvider>
      </AppSessionProvider>
    </ConvexClientProvider>
  );
}
