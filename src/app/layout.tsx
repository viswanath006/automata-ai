import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap", // Ensures font text paints immediately to prevent Flash of Invisible Text (FOIT)
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#172B36",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, // Ensures flawless accessibility zooming
};

export const metadata: Metadata = {
  title: {
    template: "%s | AI.Platform",
    default: "AI.Platform - Unmatched Velocity",
  },
  description: "Advanced AI-driven data automation platform. Deploy edge functions in 12ms.",
  metadataBase: new URL('https://aiplatform-hackathon.vercel.app'),
  authors: [{ name: "Elite Frontend Team" }],
  keywords: ["AI", "Automation", "Edge Computing", "SaaS Platform", "Data Pipelines"],
  manifest: "/site.webmanifest",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  appleWebApp: {
    title: "AI.Platform",
    statusBarStyle: "black-translucent",
  },
  openGraph: {
    title: "AI.Platform - Unmatched Velocity",
    description: "Build, deploy, and scale AI-native applications seamlessly.",
    url: "https://aiplatform-hackathon.vercel.app",
    siteName: "AI.Platform",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI.Platform Dashboard Preview",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI.Platform",
    description: "Build, deploy, and scale AI-native applications seamlessly.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "name": "AI.Platform",
      "url": "https://aiplatform-hackathon.vercel.app",
      "logo": "https://aiplatform-hackathon.vercel.app/logo.png"
    },
    {
      "@type": "WebSite",
      "url": "https://aiplatform-hackathon.vercel.app",
      "name": "AI.Platform",
      "description": "Advanced AI-driven data automation platform."
    },
    {
      "@type": "SoftwareApplication",
      "name": "AI.Platform",
      "applicationCategory": "DeveloperApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <noscript>
          <style>{`.animate-entrance { opacity: 1 !important; transform: none !important; filter: none !important; animation: none !important; }`}</style>
        </noscript>
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-4 bg-primary text-main px-5 py-3 font-sans font-bold rounded-lg outline-none focus-visible:ring-4 focus-visible:ring-secondary transition-micro"
        >
          Skip to main content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
