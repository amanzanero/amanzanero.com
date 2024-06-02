import "../globals.css";
import { PHProvider } from "@/components/phProvider";
import { ThemeProvider } from "@/components/themeProvider";
import { Separator } from "@/components/ui/separator";
import { env } from "@/env";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import Link from "next/link";
import React from "react";

const font = Inter({ subsets: ["latin"] });

const PostHogPageView = dynamic(() => import("@/components/phPageView"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Andrew Manzanero",
  description: "Personal website, portfolio, and contact information.",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PHProvider enabled={env.NODE_ENV === "production"}>
      <PostHogPageView />
      <body
        className={cn(font.className, "flex min-h-[100dvh] w-full flex-col")}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <Separator />
          <main className="flex w-full flex-1 justify-center px-4">
            <section className="max-w-screen-md flex-1 flex-col">
              {children}
            </section>
          </main>
        </ThemeProvider>
      </body>
    </PHProvider>
  );
}

const Header = () => {
  return (
    <header className="flex w-full justify-center p-4">
      <div className="flex w-full max-w-screen-md flex-row items-center justify-end gap-2">
        <Link
          className="font-medium text-blue-600 underline-offset-4 hover:underline dark:text-blue-500"
          href="/"
        >
          Home
        </Link>
        <div className="block h-6 w-px bg-gray-300 dark:bg-gray-700" />
        <Link
          className="font-medium text-blue-600 underline-offset-4 hover:underline dark:text-blue-500"
          href="/work"
        >
          Work
        </Link>
        <div className="block h-6 w-px bg-gray-300 dark:bg-gray-700" />
        <Link
          className="font-medium text-blue-600 underline-offset-4 hover:underline dark:text-blue-500"
          href="/blog"
        >
          Blog
        </Link>
      </div>
    </header>
  );
};
