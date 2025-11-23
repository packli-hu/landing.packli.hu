import { ReactNode, Suspense } from "react";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { TooltipProvider } from "@radix-ui/react-tooltip";

const inter = Inter({ subsets: ["latin"] });

import "@/styles/globals.css";
import { Toaster } from "@/components/ui/sonner";

const siteUrl = "https://packli.hu";
const ogImage = `${siteUrl}/og.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: "%s | Packli - Hatékony csomagszállítás webshopoknak",
    default: "Packli - Hatékony csomagszállítás webshopoknak",
  },
  description:
    "A Packlival webshopod csomagszállítása olcsóbbá és akár teljesen automatikussá válhat. Kezeld a futárszolgálatokat egyetlen, áttekinthető felületen.",
  keywords: [
    "csomagszállítás",
    "webshop",
    "futárszolgálat",
    "logisztika",
    "Packli",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Packli",
    locale: "hu_HU",
    title: "Packli - hatékony csomagszállítás webshopoknak",
    description:
      "A Packlival webshopod csomagszállítása olcsóbbá és akár teljesen automatikussá válhat. Kezeld a futárszolgálatokat egyetlen, áttekinthető felületen.",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Packli dashboard - csomagszállítás kezelése egy felületen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Packli - hatékony csomagszállítás webshopoknak",
    description:
      "A Packlival webshopod csomagszállítása olcsóbbá és akár teljesen automatikussá válhat. Kezeld a futárszolgálatokat egyetlen, áttekinthető felületen.",
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html className="h-full" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-MZ3XWCGB');
              `,
          }}
        />
      </head>
      <body
        className={cn(
          "antialiased text-base text-foreground bg-background",
          inter.className
        )}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MZ3XWCGB"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          storageKey="saas-theme"
          enableSystem
          disableTransitionOnChange
          enableColorScheme
        >
          <Toaster />
          <TooltipProvider>
            <Suspense>{children}</Suspense>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
