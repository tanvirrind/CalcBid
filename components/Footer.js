import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div>
          <strong style={{ color: "var(--ink)" }}>CalcBid</strong>
          <div>Calculate the job. Send the quote. Get paid.</div>
        </div>
        <div style={{ display: "flex", gap: 18 }}>
          <Link href="/calculators" style={{ color: "inherit" }}>Calculators</Link>
          <Link href="/quote" style={{ color: "inherit" }}>Quote generator</Link>
        </div>
        <div>© {new Date().getFullYear()} CalcBid. All rights reserved.</div>
      </div>
    </footer>
  );
}
