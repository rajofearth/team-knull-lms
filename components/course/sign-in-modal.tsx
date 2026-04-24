import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface SignInModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SignInModal({ open, onOpenChange }: SignInModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="gap-6 rounded-[20px] p-8 outline-none sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle className="text-center text-[19px] font-bold text-foreground">
            Sign in or create your account
          </DialogTitle>
          <p className="mt-2 text-center text-[13px] text-muted-foreground">
            Unlock this course and track your learning progress.
          </p>
        </DialogHeader>
        
        <div className="flex flex-col gap-3">
          <Button className="h-auto rounded-md bg-[#0a0a0a] py-3 text-[13px] font-semibold text-white hover:bg-[#0a0a0a]/90">
            Continue with Google
          </Button>
          <Button variant="outline" className="h-auto rounded-md border-border py-3 text-[13px] font-semibold">
            Continue with GitHub
          </Button>
        </div>

        <div className="relative flex items-center py-2">
          <div className="grow border-t border-border/60"></div>
          <span className="mx-4 shrink-0 text-[11px] uppercase text-muted-foreground">or</span>
          <div className="grow border-t border-border/60"></div>
        </div>

        <div className="flex flex-col gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-md border border-border px-4 py-3 text-[13px] text-foreground outline-none transition-colors focus:border-foreground"
          />
          <Button className="h-auto rounded-md bg-[#0a0a0a] py-3 text-[13px] font-semibold text-white hover:bg-[#0a0a0a]/90">
            Continue with Email
          </Button>
        </div>
        
        <p className="mt-2 text-center text-xs text-muted-foreground">
          Don&apos;t have an account? <a href="#" className="font-semibold text-foreground hover:underline">Sign up</a>
        </p>
      </DialogContent>
    </Dialog>
  );
}
