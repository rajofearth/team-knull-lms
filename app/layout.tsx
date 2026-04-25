import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Outfit } from "next/font/google";
import "./globals.css";
import { AppSessionProvider } from "@/components/auth/session-context";
import { ConvexClientProvider } from "@/components/ConvexClientProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { getToken } from "@/lib/auth-server";

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
  const token = await getToken();

  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-full antialiased font-sans">
        <ConvexClientProvider initialToken={token}>
          <AppSessionProvider>
            <TooltipProvider>{children}</TooltipProvider>
          </AppSessionProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
