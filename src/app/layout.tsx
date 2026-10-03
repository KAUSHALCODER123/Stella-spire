import type { Metadata, Viewport } from "next";
import { Newsreader, Public_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileBar } from "@/components/MobileBar";
import { Analytics } from "@/components/Analytics";
import { JsonLd } from "@/components/JsonLd";
import { services } from "@/content/services";
import { locations } from "@/content/locations";
import { organizationLd, websiteLd } from "@/lib/seo";
import { site } from "@/lib/site";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Finance Recruitment Agency in Bangalore | Stellaspire",
    template: "%s | Stellaspire",
  },
  description: site.description,
  applicationName: site.name,
  // Keeps the existing Google Search Console verification working after migration.
  verification: { google: "3aJsahZx8WyHz5LglAzt0j6D9Ablf3NPJV2iEIR8kXg" },
  openGraph: { siteName: site.name, locale: "en_IN", type: "website" },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#16193a",
};

const nav = [
  {
    label: "Services",
    href: "/services",
    children: services.map((s) => ({ label: s.name, href: `/services/${s.slug}`, note: s.card })),
  },
  {
    label: "Locations",
    href: "/locations",
    children: locations.map((l) => ({ label: l.city, href: `/locations/${l.slug}` })),
  },
  { label: "Women returnship", href: "/women-returnship" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/resources/blog" },
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={`${newsreader.variable} ${publicSans.variable} h-full`}>
      <body className="flex min-h-full flex-col">
        <JsonLd data={[organizationLd(), websiteLd()]} />
        <Header nav={nav} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileBar />
        <Analytics />
      </body>
    </html>
  );
}
