import type { Metadata } from "next";
import { Manrope, Cormorant_Garamond } from "next/font/google";
import LenisScrollProvider from "./_provider/LenisProvider";
import "./globals.css";
import { GoogleTag } from "@/components/GoogleTag";
import { MetaPixel } from "@/components/MetaPixel";
import { YandexMetrika } from "@/components/YandexMetrika";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prime Up — Licensed WA General Contractor",
  description:
    "Prime Up General Construction — transforming Washington homes with precision craftsmanship. Custom decks, siding & general improvements. Licensed, bonded & insured.",
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
        <MetaPixel/>
        <YandexMetrika/>
      </head>
      <body
        className={`${manrope.variable} ${cormorant.variable} antialiased`}
      >
        <LenisScrollProvider>
          {children}
        </LenisScrollProvider>
      </body>
    </html>
  );
}
