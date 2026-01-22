import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import LenisScrollProvider from "./_provider/LenisProvider";
import "./globals.css";
import { GoogleTag } from "@/components/GoogleTag";
import { MetaPixel } from "@/components/MetaPixel";
import { YandexMetrika } from "@/components/YandexMetrika";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
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
        <MetaPixel/>
        <YandexMetrika/>
      </head>
      <body
        className={`${nunitoSans.variable} antialiased`}
      >
        <LenisScrollProvider>
          {children}
        </LenisScrollProvider>
      </body>
    </html>
  );
}
