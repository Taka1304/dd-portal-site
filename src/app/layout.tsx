import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { UIProvider } from "@yamada-ui/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home - Data Dreamers",
  description: "Data Dreamers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <UIProvider>
          {children}
        </UIProvider>
      </body>
    </html>
  );
}
