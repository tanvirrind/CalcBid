import Link from "next/link";

export default function Footer() {
  const link = { color: "inherit" };
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div>
          <strong style={{ color: "var(--ink)" }}>CalcBid</strong>
          <div>Calculate the job. Send the quote. Get paid.</div>
          <div style={{ marginTop: 8 }}>
            <a href="mailto:info@calcbid.com" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
              info@calcbid.com
            </a>
          </div>
        </div>
        <div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
          <Link href="/calculators" style={link}>Calculators</Link>
          <Link href="/guides" style={link}>Guides</Link>
          <Link href="/quote" style={link}>Quote generator</Link>
          <Link href="/about" style={link}>About</Link>
          <Link href="/contact" style={link}>Contact</Link>
        </div>
        <div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
          <Link href="/privacy" style={link}>Privacy</Link>
          <Link href="/terms" style={link}>Terms</Link>
        </div>
        <div>© {new Date().getFullYear()} CalcBid. All rights reserved.</div>
      </div>
    </footer>
  );
}
