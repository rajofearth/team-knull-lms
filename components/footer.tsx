import { Heart, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { InstagramIcon } from "./ui/svgs/instagramIcon";
import { Linkedin } from "./ui/svgs/linkedin";
import { X } from "./ui/svgs/x";
import { Youtube } from "./ui/svgs/youtube";

const footerLinks = {
  Platform: ["Courses", "Categories", "My Learning", "Certifications"],
  Company: ["About Us", "Blog", "Careers", "Contact Us"],
  Support: ["Help Center", "Terms of Use", "Privacy Policy", "Refund Policy"],
};

const socialLinks = [
  { href: "https://x.com", label: "X", Icon: X },
  { href: "https://www.linkedin.com", label: "LinkedIn", Icon: Linkedin },
  { href: "https://www.youtube.com", label: "YouTube", Icon: Youtube },
  {
    href: "https://www.instagram.com",
    label: "Instagram",
    Icon: InstagramIcon,
  },
];

export function Footer() {
  return (
    <footer className="bg-canvas pt-16 border-t border-border">
      <div className="mx-auto max-w-[1280px] px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2 max-w-[300px]">
            <Link
              href="/"
              className="mb-6 block transition-opacity hover:opacity-90"
            >
              <Image
                src="/teamknull-logo.svg"
                alt="Logo"
                width={140}
                height={140}
              />
            </Link>
            <p className="text-sm leading-relaxed text-text-description font-heading mb-8">
              Empowering learners worldwide with high-quality education and
              practical skills for a better future.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center justify-center size-6 rounded-lg text-text-muted hover:text-ink transition-all"
                  aria-label={label}
                >
                  <Icon strokeWidth={2} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-ink font-heading font-bold text-sm mb-6 uppercase tracking-wider">
                {heading}
              </h4>
              <ul className="flex flex-col gap-4 p-0 m-0 list-none">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-text-muted hover:text-ink font-heading transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h4 className="text-ink font-heading font-bold text-sm mb-6 uppercase tracking-wider">
              Stay Updated
            </h4>
            <p className="text-xs leading-relaxed text-text-description font-heading mb-6">
              Subscribe to our newsletter for the latest courses and
              professional tips.
            </p>
            <div className="relative group">
              <Input
                type="email"
                placeholder="Your email address"
                className="h-auto w-full rounded-xl border-border bg-surface-dim py-3 pr-12 pl-4 font-heading text-sm focus-visible:border-ink focus-visible:ring-0"
              />
              <Button
                type="button"
                size="icon"
                className="absolute top-1/2 right-2 size-8 -translate-y-1/2 rounded-lg bg-ink text-canvas hover:bg-ink-deep"
              >
                <Send size={14} />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-border gap-4">
          <p className="text-xs text-text-muted font-heading m-0">
            © 2024 Team Knull LMS. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-xs text-text-muted font-heading">
            <span>Made with</span>
            <Heart size={12} className="fill-red-500 text-red-500" />
            <span>by Team Knull</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
