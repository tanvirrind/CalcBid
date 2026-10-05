import "./globals.css";
import { Oswald, IBM_Plex_Mono } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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

export const metadata = {
  title: "CalcBid — Calculate the job. Send the quote. Get paid.",
  description:
    "Trade calculators plus client-ready quoting for contractors. Estimate materials, build a professional quote, and send it to your client in minutes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
