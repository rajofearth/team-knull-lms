import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Team Knull LMS — Learn. Grow. Get Certified.",
  description:
    "Explore premium courses, learn at your own pace, and earn certificates to showcase your skills. Join thousands of learners on Team Knull LMS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
