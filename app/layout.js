import "./globals.css";
import { Oswald, IBM_Plex_Mono } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";

const display = Oswald({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
});

const SITE_URL = "https://calcbid.com";
const SITE_NAME = "CalcBid";
const DEFAULT_TITLE = "CalcBid — Free Paint & Roofing Calculators + Contractor Quote Builder";
const DEFAULT_DESC =
  "Free trade calculators and a contractor quote builder in one place. Estimate paint and roofing materials plus job costs, then build and send a professional quote in minutes.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | CalcBid",
  },
  description: DEFAULT_DESC,
  keywords: [
    "paint calculator",
    "roofing calculator",
    "painting cost calculator",
    "roof replacement cost calculator",
    "contractor quote generator",
    "free quote builder for contractors",
    "painting estimate template",
    "how much paint do i need",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: { email: false, address: false, telephone: false },
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  description: DEFAULT_DESC,
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description: DEFAULT_DESC,
  inLanguage: "en-US",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable}`}>
      <body>
        <JsonLd data={orgJsonLd} />
        <JsonLd data={websiteJsonLd} />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
