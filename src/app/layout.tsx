import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { PORTFOLIO } from "@/data/portfolio";
import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(PORTFOLIO.site.url),
  title: {
    default: PORTFOLIO.site.name,
    template: `%s | ${PORTFOLIO.site.name}`,
  },
  description: PORTFOLIO.site.metaDescription,
  openGraph: {
    title: PORTFOLIO.site.name,
    description: PORTFOLIO.site.metaDescription,
    url: PORTFOLIO.site.url,
    siteName: PORTFOLIO.site.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: PORTFOLIO.site.name,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: PORTFOLIO.site.name,
    card: "summary_large_image",
    creator: "@vbhvdev",
    images: ["/og.png"],
  },
  verification: {
    google: "",
    yandex: "",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export const viewport: import("next").Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`min-h-screen bg-background font-sans antialiased ${outfit.variable} ${jetbrainsMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <TooltipProvider delayDuration={0}>
            <div className="relative min-h-screen overflow-x-hidden bg-grid-tech selection:bg-amber-500/20 selection:text-amber-200">
              <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(14,165,233,0.08),transparent_70%)]" />
              <Navbar />
              {children}
            </div>
          </TooltipProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
