import type { Metadata } from "next";
import localFont from "next/font/local"

import "./globals.css";

const ibmPlexSansArabic = localFont({
  src: [
    {
      path: "../fonts/IBMPlexSansArabic-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/IBMPlexSansArabic-Medium.ttf",
      weight: "500",
      style: "normal"
    },
    {
      path: "../fonts/IBMPlexSansArabic-SemiBold.ttf",
      weight: "600",
      style: "normal"
    },
    {
      path: "../fonts/IBMPlexSansArabic-Bold.ttf",
      weight: "700",
      style: "normal"
    },
  ],
  variable: "--font-ibm-plex-arabic"
});


export const metadata: Metadata = {
  title: "درب | منصة تشغيل وإدارة السناتر",
  description: "درب — منصة تشغيل وإدارة السناتر التعليمية في مكان واحد",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${ibmPlexSansArabic.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
