import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Outfit } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import { ConvexProviderWithToken } from "@/components/ConvexProviderWithToken";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Team Knull LMS — Learn. Grow. Get Certified.",
  description:
    "Explore premium courses, learn at your own pace, and earn certificates to showcase your skills. Join thousands of learners on Team Knull LMS.",
};
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-full antialiased font-sans">
        <Suspense fallback={null}>
          <ConvexProviderWithToken>{children}</ConvexProviderWithToken>
        </Suspense>
      </body>
    </html>
  );
}
