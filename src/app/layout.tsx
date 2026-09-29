import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SANGYAN — Investor Resilience Hackathon | SNTC IIT (BHU) × SEBI × NSDL",
  description:
    "SANGYAN is a national 7-day hackathon organised by SNTC, IIT (BHU) Varanasi in collaboration with SEBI and NSDL. Build technology that helps Indians become harder to fool, safer, and more resilient in their financial decisions.",
  keywords: [
    "SANGYAN hackathon",
    "NSDL hackathon",
    "SEBI hackathon",
    "IIT BHU hackathon",
    "investor resilience",
    "fintech hackathon India",
    "financial literacy hackathon",
    "SNTC IIT BHU",
  ],
  authors: [{ name: "SNTC, IIT (BHU) Varanasi" }],
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon-32.png",
  },
  openGraph: {
    title: "SANGYAN — Investor Resilience Hackathon",
    description:
      "A national hackathon to build tech that protects Indian investors. Organised by SNTC, IIT (BHU) in collaboration with SEBI & NSDL.",
    type: "website",
    locale: "en_IN",
    siteName: "SANGYAN Hackathon",
  },
  twitter: {
    card: "summary_large_image",
    title: "SANGYAN — Investor Resilience Hackathon | SNTC IIT BHU",
    description:
      "Build technology to protect Indian investors. National hackathon by SNTC, IIT BHU × SEBI × NSDL.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <head>
        <link rel="canonical" href="https://hackathon.copsiitbhu.co.in" />
        <meta name="theme-color" content="#f6eeda" />
      </head>
      <body className="min-h-screen flex flex-col antialiased">{children}</body>
    </html>
  );
}
