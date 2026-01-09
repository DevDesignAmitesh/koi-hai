import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProviderComp } from "../provider/ThemeProvider";
import { Toaster } from "sonner";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Koi Hai",
  description: "Koi Hai, private space for couples",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThemeProviderComp>
        <body
          className={`${geistSans.variable} ${geistMono.variable} 
          bg-neutral-50 dark:bg-neutral-900`}
        >
          <main className="mx-auto w-full max-w-xl">{children}</main>
        </body>
        <Toaster position="top-right" />
      </ThemeProviderComp>
    </html>
  );
}
