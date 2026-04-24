"use client";

import Image from "next/image";
import { Search, ShoppingCart } from "lucide-react";

export function Navbar() {
  return (
    <header
      style={{
        borderBottom: "1px solid #e5e5e5",
        backgroundColor: "#ffffff",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 32,
        }}
      >
        {/* Logo */}
        <a
          href="/"
          style={{ display: "flex", alignItems: "center", flexShrink: 0 }}
        >
          <Image
            src="/teamknull-logo.svg"
            alt="Team Knull"
            width={130}
            height={26}
            priority
          />
        </a>

        {/* Nav Links */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
            flex: 1,
          }}
        >
          {["Courses", "Categories", "My Learning", "Certifications", "About"].map(
            (item) => (
              <a
                key={item}
                href="#"
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: "#0a0a0a",
                  transition: "color 0.2s ease",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "#6b7280")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "#0a0a0a")
                }
              >
                {item}
              </a>
            )
          )}
        </nav>

        {/* Actions */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            flexShrink: 0,
          }}
        >
          <button
            aria-label="Search"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#0a0a0a",
              display: "flex",
              alignItems: "center",
              padding: 4,
              transition: "opacity 0.2s",
            }}
          >
            <Search size={18} strokeWidth={1.75} />
          </button>
          <button
            aria-label="Cart"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#0a0a0a",
              display: "flex",
              alignItems: "center",
              padding: 4,
              transition: "opacity 0.2s",
            }}
          >
            <ShoppingCart size={18} strokeWidth={1.75} />
          </button>
          <a
            href="#"
            style={{
              backgroundColor: "#0a0a0a",
              color: "#ffffff",
              fontSize: 14,
              fontWeight: 600,
              padding: "10px 20px",
              borderRadius: 10,
              transition: "opacity 0.2s ease",
              display: "inline-block",
            }}
          >
            Sign In
          </a>
        </div>
      </div>
    </header>
  );
}

