import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "InCubando | Making Your Legacy Discoverable",
  description:
    "AI-powered digital authority for Cuban small businesses in Miami. We translate 40 years of expertise into digital gold.",
  keywords: [
    "Cuban business Miami",
    "AI marketing",
    "small business digital",
    "legacy business",
    "Miami marketing",
  ],
  openGraph: {
    title: "InCubando | Making Your Legacy Discoverable",
    description:
      "AI-powered digital authority for Cuban small businesses in Miami.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-dark text-white antialiased">{children}</body>
    </html>
  );
}
