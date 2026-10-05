import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "CalcBid — Calculate the job. Send the quote. Get paid.",
  description:
    "Trade calculators plus client-ready quoting for contractors. Estimate materials, build a professional quote, and send it to your client in minutes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
