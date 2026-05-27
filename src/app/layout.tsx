import type { Metadata } from "next";
import { Press_Start_2P, Inter } from "next/font/google";
import "./globals.css";

const pressStart = Press_Start_2P({
  variable: "--font-press-start",
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arman Hansda — Portfolio",
  description: "Mathematics & Computing student at BIT Mesra. Building scalable full-stack and distributed systems with Rust, Node.js, and Next.js.",
  keywords: ["Portfolio", "Developer", "Arman Hansda", "Rust", "Distributed Systems"],
  authors: [{ name: "Arman Hansda" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${pressStart.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
