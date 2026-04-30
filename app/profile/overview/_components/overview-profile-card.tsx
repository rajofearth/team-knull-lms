import { Calendar, CheckCircle2, Globe, MapPin, Pencil } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function OverviewProfileCard() {
  return (
    <Card className="flex flex-col lg:flex-row gap-10 p-8 md:p-10 rounded-2xl border-border shadow-none bg-white">
      {/* Left Column: User Info */}
      <div className="flex flex-col md:flex-row gap-8 flex-1">
        <div className="relative size-[120px] rounded-full overflow-hidden shrink-0 border border-border">
          <Image
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=200&auto=format&fit=crop"
            alt="Rohit Sharma"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        <div className="flex flex-col gap-4 flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <h2 className="text-2xl font-heading font-bold text-foreground m-0">
              Rohit Sharma
            </h2>
            <Link
              href="/profile/edit"
              className="flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
            >
              Edit Profile
              <Pencil className="size-3.5" />
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-sm text-muted-foreground font-medium">
              rohit.sharma@example.com
            </span>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="size-4" />
                <span>Bangalore, India</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="size-4" />
                <span>Member since May 2024</span>
              </div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed max-w-lg m-0">
            Passionate about UI/UX design and front-end development. Always
            eager to learn and build amazing digital experiences.
          </p>

          <div className="flex items-center gap-5 mt-2">
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Globe className="size-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Right Column: Account Status */}
      <div className="flex flex-col gap-6 w-full lg:w-[280px] shrink-0 border-t lg:border-t-0 lg:border-l border-border pt-8 lg:pt-0 lg:pl-10">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-foreground">
            Account Status
          </span>
          <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 rounded-md font-semibold px-2 py-0.5 border-none shadow-none">
            Active
          </Badge>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-muted-foreground">
            Plan
          </span>
          <span className="text-sm font-semibold text-foreground">Premium</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-muted-foreground">
            Member ID
          </span>
          <span className="text-sm font-semibold text-foreground">
            TK-98456
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-muted-foreground">
            Email Verified
          </span>
          <div className="flex items-center gap-1.5 text-emerald-600">
            <CheckCircle2 className="size-4" />
            <span className="text-sm font-semibold">Verified</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-muted-foreground">
            Phone Verified
          </span>
          <div className="flex items-center gap-1.5 text-emerald-600">
            <CheckCircle2 className="size-4" />
            <span className="text-sm font-semibold">Verified</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
