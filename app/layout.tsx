import type { Metadata } from "next";
import { Cormorant, Jost } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import BottomNav from "./components/BottomNav";

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | SANCTUM",
    default: "SANCTUM — Private Members Club Melbourne",
  },
  description:
    "SANCTUM is a members-only club in Melbourne providing member facilities, benefits, events and experiences in one membership.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        <Nav />
        <main className="flex-1 pb-16 md:pb-0">{children}</main>
        <BottomNav />
      </body>
    </html>
  );
}
