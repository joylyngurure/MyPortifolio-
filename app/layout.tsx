import type { Metadata, Viewport } from "next";
import { profile } from "@/content/portfolio";
import "./globals.css";

const title = "Joylyn Gurure | UI/UX & Frontend Developer";
const description =
  "Portfolio of Joylyn K. Gurure, a UI/UX-focused frontend developer building clear, responsive web and mobile interfaces with React, Next.js and React Native.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title,
  description,
  applicationName: "Joylyn Gurure Portfolio",
  authors: [{ name: profile.name }],
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Joylyn Gurure Portfolio",
    title,
    description,
    locale: "en",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0b192b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
