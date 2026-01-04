import { Analytics } from "@vercel/analytics/next";
import { Navbar, ThemeProvider } from "@/components/layout";
import { TooltipProvider } from "@/components/ui";
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
        alt: `${PORTFOLIO.site.name} — ${PORTFOLIO.site.tagline}`,
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
    description: PORTFOLIO.site.tagline,
    card: "summary_large_image",
    creator: "@vaibhxdev",
    images: ["/og.png"],
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
  themeColor: "#0b0605",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PORTFOLIO.site.name,
    url: PORTFOLIO.site.url,
    jobTitle: PORTFOLIO.site.role,
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "G.B. Pant DSEU Campus-I",
    },
    sameAs: [
      PORTFOLIO.socialLinks.github.href,
      PORTFOLIO.socialLinks.linkedin.href,
      PORTFOLIO.socialLinks.x.href,
    ],
    knowsAbout: [
      "Backend Architecture",
      "AI Agent Systems",
      "PostgreSQL",
      "TypeScript",
      "Python",
      "Next.js",
      "FastAPI",
      "Distributed Systems",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`min-h-screen bg-background font-sans antialiased ${outfit.variable} ${jetbrainsMono.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <ThemeProvider attribute="class" defaultTheme="dark">
          <TooltipProvider delayDuration={0}>
            <a href="#main" className="skip-link">Skip to content</a>
            <div className="relative min-h-screen overflow-x-hidden selection:bg-neutral-600/30">
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

