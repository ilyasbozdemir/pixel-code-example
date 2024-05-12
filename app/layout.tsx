import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Custom Pixel Code Example | İlyas Bozdemir",
  description:
    "Create a custom pixel code for your website and track user interactions. Easily integratable and manageable.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <>{children}</>
      </body>
    </html>
  );
}
