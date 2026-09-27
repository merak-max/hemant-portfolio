import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hemant-portfolio-hazel.vercel.app"),
  title: "Hemant Kumar Singh — Full-stack Developer",
  description:
    "Hemant Kumar Singh builds developer tools and backend systems with TypeScript, Node.js, Go, and React. Explore HookLens and measured auction-engine results.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hemant Kumar Singh — Full-stack Developer",
    description:
      "Developer tools, reliable APIs, and reproducible backend measurements.",
    url: "/",
    siteName: "Hemant Kumar Singh",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
