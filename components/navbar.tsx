import Image from "next/image";
import { Search, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="border-b border-border/80 bg-background">
      <div className="mx-auto flex h-[58px] max-w-[1200px] items-center justify-between gap-8 px-6">
        {/* Logo */}
        <a href="/" className="flex shrink-0 items-center">
          <Image
            src="/teamknull-logo.svg"
            alt="Team Knull"
            width={130}
            height={26}
            priority
          />
        </a>

        {/* Nav Links */}
        <nav className="flex flex-1 items-center gap-9">
          {["Courses", "Categories", "My Learning", "Certifications", "About"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className="whitespace-nowrap text-[13px] font-medium text-foreground/80 transition-colors hover:text-foreground"
              >
                {item}
              </a>
            )
          )}
        </nav>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-1.5">
          <Button
            variant="ghost"
            size="icon"
            className="size-8 text-foreground/90 hover:bg-transparent hover:opacity-70"
            aria-label="Search"
          >
            <Search className="size-[18px]" strokeWidth={1.75} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="size-8 text-foreground/90 hover:bg-transparent hover:opacity-70"
            aria-label="Cart"
          >
            <ShoppingCart className="size-[18px]" strokeWidth={1.75} />
          </Button>
          <Button className="ml-2 h-8 rounded-md px-4 text-[13px] font-semibold">
            Sign In
          </Button>
        </div>
      </div>
    </header>
  );
}
