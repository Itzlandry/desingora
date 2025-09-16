import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import { Suspense } from "react";
import "./globals.css";
import * as vars from "@/lib/vars";

export const metadata: Metadata = {
  title: "Desingora - Entreprise BTP au Cameroun",
  description:
    "Spécialiste en finitions, forages, rigoles, poteaux et construction de maisons avec modélisation 3D",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <meta
          name="description"
          content="Spécialiste en finitions, forages, rigoles, poteaux et construction de maisons avec modélisation 3D"
        />
        <meta
          property="og:title"
          content="Desingora - Entreprise BTP au Cameroun"
        />
        <meta
          property="og:description"
          content="Spécialiste en finitions, forages, rigoles, poteaux et construction de maisons avec modélisation 3D"
        />
        <meta property="og:image" content="/banner.jpg" />
        <meta property="og:url" content={vars.url} />
        <link rel="icon" href="/logo-2.png" type="image/png" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  );
}
