/* eslint-disable @next/next/no-sync-scripts */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

import { cn } from "@/lib/utils";
import FloatingButton from "@/components/FloatButton";

const als = Inter({
  weight: ["500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gustavo Sperandio",
  description: "Desenvolvedor Full Stack",
  icons: "/sharingan2.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </head>
      <body className={cn("h-screen bg-background bg-[#020617] antialiased", als.className)}>
        {children}
      </body>
    </html>
  );
}
