import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const title = "Flowly | AI Workflow Automation";
const description =
  "Flowly connects your tools and automates repetitive work so modern teams can ship faster with less operational drag.";

export const metadata: Metadata = {
  metadataBase: new URL("https://flowly-ai.vercel.app"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://flowly-ai.vercel.app",
    siteName: "Flowly",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Flowly AI workflow automation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
