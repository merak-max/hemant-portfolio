import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hemant-portfolio-hazel.vercel.app"),
  title: "Hemant Kumar Singh — Full-stack Developer",
  description:
    "Portfolio of Hemant Kumar Singh, building AI-powered web applications with React, TypeScript, Node.js, and Express.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hemant Kumar Singh — Full-stack Developer",
    description:
      "Practical full-stack web products with reliable AI integrations.",
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
