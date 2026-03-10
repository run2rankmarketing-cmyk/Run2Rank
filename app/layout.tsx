import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://run2rank.com"),

  title: {
    default: "Run2Rank — From Zero to Ranked",
    template: "%s | Run2Rank",
  },

  description:
    "From Zero to Ranked. From Idea to Impact. We help small businesses build powerful websites and scale sustainably with result-driven SEO strategies.",

  keywords: [
    "SEO agency",
    "website development",
    "technical SEO",
    "local SEO",
    "international SEO",
    "digital marketing agency",
    "SEO services for small business",
    "Run2Rank",
  ],

  authors: [{ name: "Run2Rank Team", url: "https://run2rank.com" }],

  creator: "Run2Rank",
  publisher: "Run2Rank",

  openGraph: {
    title: "Run2Rank — From Zero to Ranked",
    description:
      "We help small businesses build powerful websites and scale sustainably with result-driven SEO strategies.",
    url: "https://run2rank.com",
    siteName: "Run2Rank",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Run2Rank SEO & Web Development",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Run2Rank — From Zero to Ranked",
    description:
      "We help small businesses build powerful websites and scale sustainably with result-driven SEO strategies.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}