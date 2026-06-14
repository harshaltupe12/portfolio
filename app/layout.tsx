import type { Metadata, Viewport } from "next";
import { Instrument_Serif } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { GeistPixelSquare } from "geist/font/pixel";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import SchemaMarkup from "@/components/SchemaMarkup"
import Navbar from "./_Components/Navbar";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://harshal-tupe-portfolio.vercel.app/'), 
  title: {
    default: "Harshal Tupe | Web Developer & Software Engineer",
    template: "%s | Harshal Tupe"
  },
  description: "Harshal Tupe is a web developer and software engineer specializing in React, Next.js, and modern web technologies. View portfolio, projects, and contact information.",
  keywords: ["Harshal Tupe", "web developer", "software engineer", "portfolio", "React developer", "Next.js developer"],
  authors: [{ name: "Harshal Tupe" }],
  creator: "Harshal Tupe",
  publisher: "Harshal Tupe",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://harshal-tupe-portfolio.vercel.app/", 
    title: "Harshal Tupe | Web Developer & Software Engineer",
    description: "Harshal Tupe is a web developer and software engineer specializing in React, Next.js, and modern web technologies.",
    siteName: "Harshal Tupe Portfolio",
    images: [
      {
        url: "https://harshal-tupe-portfolio.vercel.app/", 
        width: 1200,
        height: 630,
        alt: "Harshal Tupe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harshal Tupe | Web Developer & Software Engineer",
    description: "Harshal Tupe is a web developer and software engineer specializing in React, Next.js, and modern web technologies.",
    images: ["https://harshal-tupe-portfolio.vercel.app/"], 
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png", 
    other: {
      rel: "icon",
      url: "/favicon-16x16.png",
      sizes: "16x16",
    },
  },
  manifest: "/site.webmanifest", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} ${instrumentSerif.variable} ${GeistPixelSquare.variable}`}>
      <body className="font-sans bg-cream text-ink antialiased">
      <SchemaMarkup />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          <main className="pt-16">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}