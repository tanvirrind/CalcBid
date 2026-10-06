export const metadata = {
  title: "Terms of Service",
  description:
    "CalcBid's terms of service: acceptable use, estimates disclaimer, accounts, and liability. Contact info@calcbid.com with questions.",
  alternates: { canonical: "https://calcbid.com/terms" },
  openGraph: {
    title: "Terms of Service | CalcBid",
    url: "https://calcbid.com/terms",
  },
};

const S = ({ children }) => (
  <p style={{ lineHeight: 1.75, fontSize: 17 }}>{children}</p>
);
const H = ({ children }) => (
  <h2 style={{ fontSize: 22, marginTop: 32, marginBottom: 8 }}>{children}</h2>
);

export default function TermsPage() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="kicker">Legal</div>
        <h1 className="h2">Terms of service</h1>
        <p className="sub">Last updated: October 6, 2026</p>
        <div style={{ maxWidth: 720 }}>
          <S>
            By using calcbid.com (&ldquo;CalcBid&rdquo;), you agree to these
            terms. If you don&apos;t agree, please don&apos;t use the service.
          </S>
          <H>Estimates, not gospel</H>
          <S>
            Our calculators produce <strong>estimates</strong> based on the
            numbers you enter. They are a starting point, not a substitute for
            your professional judgment, on-site measurements, or supplier
            specifications. Always verify quantities and costs before ordering
            materials or signing contracts. CalcBid is not responsible for
            losses arising from reliance on calculator outputs.
          </S>
          <H>Accounts</H>
          <S>
            You must provide accurate information when creating an account and
            keep your password confidential. You&apos;re responsible for
            activity under your account. We may suspend accounts that abuse
            the service.
          </S>
          <H>Acceptable use</H>
          <S>
            Don&apos;t misuse the service: no scraping at abusive rates, no
            attempting to breach security, no uploading unlawful content, and
            no reselling the service as your own without permission.
          </S>
          <H>Plans and payment</H>
          <S>
            The calculators are free. Paid plans (Solo, Crew) add features
            like unlimited branded quotes. Paid plans are billed in advance
            and can be cancelled at any time; cancellations take effect at the
            end of the current billing period.
          </S>
          <H>Intellectual property</H>
          <S>
            CalcBid&apos;s design, calculators, and content are ours. Your
            business data — customers, quotes, rates — is yours, and we claim
            no ownership over it.
          </S>
          <H>Limitation of liability</H>
          <S>
            To the maximum extent permitted by law, CalcBid is provided
            &ldquo;as is&rdquo; without warranties of any kind, and our
            liability is limited to the amount you paid us in the 12 months
            before the claim (or $100 if you paid nothing).
          </S>
          <H>Changes</H>
          <S>
            We may update these terms as the product evolves. We&apos;ll
            update the date above when we do; continued use after changes
            means you accept the new terms.
          </S>
          <H>Contact</H>
          <S>
            Questions about these terms? Email{" "}
            <a
              href="mailto:info@calcbid.com"
              style={{ color: "var(--accent-deep)", fontWeight: 700 }}
            >
              info@calcbid.com
            </a>
            .
          </S>
        </div>
      </div>
    </section>
  );
}
