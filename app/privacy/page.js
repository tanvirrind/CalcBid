export const metadata = {
  title: "Privacy Policy",
  description:
    "CalcBid's privacy policy: what data we collect, how we use it, Google AdSense and cookies, opt-out choices, and your rights.",
  alternates: { canonical: "https://calcbid.com/privacy" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "Privacy Policy | CalcBid",
    url: "https://calcbid.com/privacy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | CalcBid",
    description: "How CalcBid collects, uses, and protects your information.",
  },
};

const S = ({ children }) => (
  <p style={{ lineHeight: 1.75, fontSize: 17 }}>{children}</p>
);
const H = ({ children }) => (
  <h2 style={{ fontSize: 22, marginTop: 32, marginBottom: 8 }}>{children}</h2>
);
const LI = ({ children }) => (
  <li style={{ lineHeight: 1.75, fontSize: 17, marginBottom: 6 }}>{children}</li>
);

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="kicker">Legal</div>
        <h1 className="h2">Privacy policy</h1>
        <p className="sub">Last updated: October 12, 2026</p>
        <div style={{ maxWidth: 720 }}>
          <S>
            CalcBid (&ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your privacy.
            This policy explains what information we collect when you use
            calcbid.com, how we use it, and the choices you have — including
            how advertising cookies work on our site.
          </S>
          <H>Information we collect</H>
          <ul style={{ paddingLeft: 20 }}>
            <LI>
              <strong>Account information.</strong> If you create an account,
              we store your name, email address, and a securely hashed
              password. We never see or store your plain-text password.
            </LI>
            <LI>
              <strong>Your business data.</strong> Customers, quotes, and rate
              information you save while signed in are stored so the app can
              show them back to you. This data belongs to you.
            </LI>
            <LI>
              <strong>Calculator inputs.</strong> The free calculators run in
              your browser. What you type there is not sent to our servers
              unless you choose to send it into the quote builder.
            </LI>
            <LI>
              <strong>Contractor quote requests.</strong> If you ask for a
              quote through one of our contractor pages, we store the name,
              phone number, email, and project details you provide, and we
              share them with one local contractor in that trade and city so
              they can contact you about your project. That&apos;s the only
              case where we share information you submit with a third party,
              and it only happens when you explicitly ask us to.
            </LI>
            <LI>
              <strong>Analytics.</strong> We use Google Analytics to understand
              how visitors use the site (pages visited, time on site, device
              type). Google Analytics sets its own cookies and processes this
              data under Google&apos;s privacy policy.
            </LI>
          </ul>
          <H>Advertising and cookies</H>
          <S>
            We use <strong>Google AdSense</strong> to display advertisements
            on some pages. Google uses cookies — including the DoubleClick
            cookie — to serve ads based on your prior visits to our site and
            other sites on the internet. Google&apos;s use of advertising
            cookies enables it and its partners to serve ads to you based on
            your visit to our site and/or other sites.
          </S>
          <S>
            You may opt out of personalized advertising by visiting{" "}
            <a
              href="https://www.google.com/settings/ads"
              rel="noopener"
              style={{ color: "var(--accent-deep)", fontWeight: 700 }}
            >
              Google&apos;s Ads Settings
            </a>
            . You can also opt out of third-party vendors&apos; use of cookies
            for personalized advertising by visiting{" "}
            <a
              href="https://www.aboutads.info/choices/"
              rel="noopener"
              style={{ color: "var(--accent-deep)", fontWeight: 700 }}
            >
              aboutads.info/choices
            </a>
            .
          </S>
          <S>
            Beyond advertising, we use a small number of functional cookies: a
            session cookie to keep you signed in, and cookie-consent storage
            to remember your advertising preferences. You can block or delete
            cookies in your browser settings, though some parts of the site
            (like staying signed in) won&apos;t work without them.
          </S>
          <H>Consent</H>
          <S>
            Visitors from regions with cookie-consent requirements (including
            the EU/UK) are shown a consent notice before advertising cookies
            are set. By accepting, you consent to Google and its partners
            using cookies for personalized ads as described above. You can
            withdraw consent at any time by clearing your cookies or changing
            your browser settings, and through the opt-out links above.
          </S>
          <H>How we use your information</H>
          <S>
            We use your information to operate your account, save your work,
            respond to quote requests, and improve the product. We do not sell
            your personal information or your business data to anyone.
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
          <H>Children</H>
          <S>
            CalcBid is intended for adults running contracting businesses and
            homeowners managing projects. We do not knowingly collect personal
            information from children under 13.
          </S>
          <H>Changes</H>
          <S>
            If we change this policy in a meaningful way, we&apos;ll update
            the date above. Continued use of CalcBid after changes means you
            accept the updated policy.
          </S>
          <H>Contact</H>
          <S>
            Questions about this policy? Email{" "}
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
