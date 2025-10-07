import type { Metadata } from "next";
import {Plus_Jakarta_Sans } from "next/font/google";
import LenisScrollProvider from "./_provider/LenisProvider";
import "./globals.css";
import { GoogleTag } from "@/components/GoogleTag";

const jakartatSans = Plus_Jakarta_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prime Up LLC",
  description: "You have problems with leaking pipes, broken tiles, lost keys or want to tidy up the trees around you, of course you need our help!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <GoogleTag />
      </head>
      <body
        className={`${jakartatSans.variable} antialiased`}
      >
        <LenisScrollProvider>
          {children}
        </LenisScrollProvider>
      </body>
    </html>
  );
}
