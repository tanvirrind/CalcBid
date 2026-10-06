export const metadata = {
  title: "Privacy Policy",
  description:
    "CalcBid's privacy policy: what data we collect, how we use it, and your rights. Contact info@calcbid.com with questions.",
  alternates: { canonical: "https://calcbid.com/privacy" },
  openGraph: {
    title: "Privacy Policy | CalcBid",
    url: "https://calcbid.com/privacy",
  },
};

const S = ({ children }) => (
  <p style={{ lineHeight: 1.75, fontSize: 17 }}>{children}</p>
);
const H = ({ children }) => (
  <h2 style={{ fontSize: 22, marginTop: 32, marginBottom: 8 }}>{children}</h2>
);

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="kicker">Legal</div>
        <h1 className="h2">Privacy policy</h1>
        <p className="sub">Last updated: October 6, 2026</p>
        <div style={{ maxWidth: 720 }}>
          <S>
            CalcBid (&ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your privacy.
            This policy explains what information we collect when you use
            calcbid.com and how we handle it.
          </S>
          <H>Information we collect</H>
          <S>
            <strong>Account information.</strong> If you create an account, we
            store your name, email address, and a securely hashed password.
            We never see or store your plain-text password.
          </S>
          <S>
            <strong>Your business data.</strong> Customers, quotes, and rate
            information you save while signed in are stored so the app can
            show them back to you. This data belongs to you.
          </S>
          <S>
            <strong>Calculator inputs.</strong> The free calculators run in
            your browser. What you type there is not sent to our servers
            unless you choose to send it into the quote builder.
          </S>
          <H>How we use it</H>
          <S>
            We use your information to operate your account, save your work,
            and improve the product. We do not sell your personal information
            or your business data to anyone, and we don&apos;t share it with
            advertisers.
          </S>
          <H>Cookies</H>
          <S>
            We use a session cookie to keep you signed in. That&apos;s it —
            no advertising or cross-site tracking cookies.
          </S>
          <H>Data security</H>
          <S>
            Passwords are hashed with bcrypt, traffic is encrypted with HTTPS,
            and access to production data is restricted. No system is perfect,
            but we take reasonable steps to protect your information.
          </S>
          <H>Your rights</H>
          <S>
            You can ask us to export or delete your account data at any time
            by emailing{" "}
            <a
              href="mailto:info@calcbid.com"
              style={{ color: "var(--accent-deep)", fontWeight: 700 }}
            >
              info@calcbid.com
            </a>
            . We&apos;ll handle your request promptly.
          </S>
          <H>Changes</H>
          <S>
            If we change this policy in a meaningful way, we&apos;ll update
            the date above. Continued use of CalcBid after changes means you
            accept the updated policy.
          </S>
        </div>
      </div>
    </section>
  );
}
