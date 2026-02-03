import type { Metadata } from "next";
import Script from "next/script";
import Analytics from "@/components/Analytics";
import "./globals.css";

export const metadata: Metadata = {
  title: "UI.Miami | Making Your Legacy Discoverable",
  description:
    "AI-powered digital authority for Cuban small businesses in Miami. We translate your years of expertise into digital gold.",
  keywords: [
    "Cuban business Miami",
    "AI marketing",
    "small business digital",
    "legacy business",
    "Miami marketing",
  ],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "UI.Miami | Making Your Legacy Discoverable",
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
      <body className="bg-dark text-white antialiased">
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-DX977ZP8FS"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DX977ZP8FS');
            gtag('config', 'AW-16510475658');
          `}
        </Script>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
