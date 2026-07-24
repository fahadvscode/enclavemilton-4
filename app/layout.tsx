import type { Metadata } from "next";
import { DM_Serif_Display, IBM_Plex_Sans } from "next/font/google";
import TopNav from "@/components/TopNav";
import SiteFooter from "@/components/SiteFooter";
import MobileStickyCta from "@/components/MobileStickyCta";
import { buildMetadata, defaultDescription, homePageTitle } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const display = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-display",
});

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...buildMetadata({
    pageTitle: homePageTitle,
    description: defaultDescription,
  }),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA" className={`${display.variable} ${sans.variable}`}>
      <body>
        <TopNav />
        <main>{children}</main>
        <SiteFooter />
        <MobileStickyCta />
      </body>
    </html>
  );
}
