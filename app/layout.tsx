import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "AVELISSE — A voice journal that never rushes you",
  description:
    "AVELISSE is an offline voice journal for people managing a long-term illness. Two buttons, no timeouts, nothing leaves your phone.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${dmSans.variable} antialiased`}>
      <body className="font-sans text-[17px] leading-[1.55] text-text-primary bg-background">
        {children}
      </body>
    </html>
  );
}
