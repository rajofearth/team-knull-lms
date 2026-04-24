import Image from "next/image";
import { Search, ShoppingCart, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-8 px-6">
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
        <nav className="flex flex-1 items-center gap-8">
          {["Courses", "Categories", "My Learning", "Certifications", "About"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className="whitespace-nowrap text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
              >
                {item}
              </a>
            )
          )}
        </nav>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="size-8 text-foreground hover:bg-transparent hover:opacity-70"
            aria-label="Search"
          >
            <Search className="size-[18px]" strokeWidth={1.75} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="size-8 text-foreground hover:bg-transparent hover:opacity-70"
            aria-label="Cart"
          >
            <ShoppingCart className="size-[18px]" strokeWidth={1.75} />
          </Button>
          <div className="ml-2 flex items-center gap-1.5 cursor-pointer hover:opacity-80 transition-opacity">
            <div className="flex size-8 items-center justify-center rounded-full bg-foreground text-sm font-bold text-background">
              R
            </div>
            <ChevronDown className="size-4 text-foreground" strokeWidth={2} />
          </div>
        </div>
      </div>
    </header>
  );
}
