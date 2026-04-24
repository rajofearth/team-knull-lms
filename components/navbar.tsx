import Link from "next/link";
import { Search, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between w-full py-4 px-6 md:px-20 bg-canvas border-b border-border shadow-subtle">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-90">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 30" width="150" height="30" className="fill-ink shrink-0">
          <path d="m45.8 11.4h-3.5v10.8h-2.9v-10.8h-3.3v-2.2h9.7v2.2z" />
          <path d="m56.3 11.3h-5.9v3h5v2.1h-5v3.5h6.1v2.3h-9v-13h8.6l0.2 2.1z" />
          <path d="m69.2 22.1h-2.7l-0.8-2.7h-4.4l-0.8 2.7h-2.7l4-12.9h3.3l4.1 12.9zm-5.7-10.9-1.6 5.8h3.2l-1.6-5.8z" />
          <path d="m83.7 22.1h-2.5l-0.1-9.7-2.8 9.7h-2.2l-2.7-9.5-0.1 9.5-2.4 0.1v-13h3.6l2.6 9.1 2.8-9.1h3.8v12.9z" />
          <path d="m97.8 14.4 4.2 7.7-3.1 0.1-2.8-5.9-1.6 2.2v3.6h-2.7l0.1-12.9h2.6v5.9l4.2-5.9h3.3l-4.2 5.2z" />
          <path d="m113.8 22.2h-2.5l-5-9-0.1 9h-2.5v-12.9l2.9-0.1 4.7 8.2 0.1-8.2h2.5l-0.1 13z" />
          <path d="m126.5 18.5c0 2.1-1.9 3.8-4.8 3.8-3 0-5.4-1.2-5.4-4.3v-8.9h2.7v9.1c0 1.8 1.2 2 2.2 2 0.9 0 2.5-0.5 2.5-2v-9l2.8-0.1v9.4z" />
          <path d="m131.7 20h5.5v2.2h-8v-13h2.8v10.8h-0.3z" />
          <path d="m141.3 20h5.4v2.2h-7.9v-13h2.6l-0.1 10.8z" />
          <path d="m9.1 1.8h-5.5v19.7h2l3.5-5.9v-13.8z" />
          <path d="m10.3 15.9-4.5 6.4-2.2 5.5h5.7l4.3-7.4-3.3-4.5z" />
          <path d="m17.5 12.9 7.3-11.1h-6.4l-8.1 11.8 0.7 1.6 1.1 0.4 7.2 12.4h7.1l-8.9-15.1z" />
        </svg>
      </Link>

      {/* Navigation Links */}
      <div className="hidden lg:flex items-center gap-8">
        {["Courses", "Categories", "My Learning", "Certifications", "About"].map((item) => (
          <Link
            key={item}
            href={`/${item.toLowerCase().replace(" ", "-")}`}
            className="text-text-muted hover:text-ink font-heading font-medium text-sm transition-colors"
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2 md:gap-4">
        <Button variant="ghost" className="text-text-muted hover:text-ink transition-colors" aria-label="Search">
          <Search size={20} strokeWidth={2} />
        </Button>
        <Button variant="ghost" className="text-text-muted hover:text-ink transition-colors" aria-label="Cart">
          <ShoppingBag size={20} strokeWidth={2} />
        </Button>
        <Link href="/login">
          <Button className="hidden md:flex rounded-lg py-2.5 px-6 bg-ink-deep text-canvas hover:opacity-90 font-heading font-semibold text-sm">
            Sign In
          </Button>
        </Link>
      </div>
    </nav>
  );
}
