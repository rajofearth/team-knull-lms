import Image from "next/image";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.262 5.636L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

const footerLinks = {
  Platform: ["Courses", "Categories", "My Learning", "Certifications"],
  Company: ["About Us", "Blog", "Careers", "Contact Us"],
  Support: ["Help Center", "Terms of Use", "Privacy Policy", "Refund Policy"],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-background pt-12">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.4fr]">
          {/* Brand */}
          <div>
            <a href="/" className="mb-3.5 inline-block">
              <Image
                src="/teamknull-logo.svg"
                alt="Team Knull"
                width={120}
                height={24}
              />
            </a>
            <p className="mb-5 max-w-[200px] text-[13px] leading-[1.65] text-muted-foreground">
              Empowering learners worldwide with high-quality education and
              practical skills for a better future.
            </p>
            <div className="flex gap-3">
              {[
                { Component: XIcon, label: "Twitter", id: "footer-twitter" },
                { Component: LinkedinIcon, label: "LinkedIn", id: "footer-linkedin" },
                { Component: YoutubeIcon, label: "YouTube", id: "footer-youtube" },
                { Component: InstagramIcon, label: "Instagram", id: "footer-instagram" },
              ].map(({ Component, label, id }) => (
                <a
                  key={id}
                  href="#"
                  id={id}
                  aria-label={label}
                  className="flex size-[30px] items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Component />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <p className="mb-4 text-[13px] font-bold text-foreground">
                {heading}
              </p>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[13px] text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <p className="mb-2 text-[13px] font-bold text-foreground">
              Stay Updated
            </p>
            <p className="mb-3.5 text-xs leading-normal text-muted-foreground">
              Subscribe to our newsletter for the latest courses and offers.
            </p>
            <div className="flex">
              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 rounded-l-md border border-r-0 border-border bg-background px-3 py-2.5 text-xs text-foreground outline-none transition-colors focus:border-foreground"
              />
              <Button
                id="newsletter-subscribe-btn"
                className="h-auto rounded-l-none rounded-r-md px-3.5 py-2.5 text-xs font-semibold"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex items-center justify-between border-t border-border py-5">
          <p className="text-xs text-muted-foreground">
            © 2024 Team Knull. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-xs text-muted-foreground">
            Made with{" "}
            <Heart className="size-3 fill-destructive text-destructive" strokeWidth={0} />{" "}
            by Team Knull
          </p>
        </div>
      </div>
    </footer>
  );
}
