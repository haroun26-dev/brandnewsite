import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Sweepstakes Central",
  description:
    "Privacy Policy for Sweepstakes Central — what data we collect, how advertising works, and your choices.",
};

const UPDATED = "September 12, 2026";

export default function PrivacyPage() {
  return (
    <main
      style={{
        maxWidth: "720px",
        margin: "0 auto",
        padding: "48px 20px 64px",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        color: "#1e293b",
      }}
    >
      <Link href="/" style={{ color: "#2563eb", fontSize: "14px" }}>
        &larr; Back to sweepstakes
      </Link>
      <h1 style={{ fontSize: "32px", margin: "16px 0 8px" }}>Privacy Policy</h1>
      <p style={{ color: "#64748b", marginBottom: "32px" }}>Last updated: {UPDATED}</p>

      <p style={{ lineHeight: 1.75 }}>
        Sweepstakes Central (&quot;we&quot;) operates sweepstakescentral.org. This policy
        explains what information we collect when you visit, and how it is used.
      </p>

      <h2 style={{ fontSize: "22px", marginTop: "32px" }}>Information we collect</h2>
      <p style={{ lineHeight: 1.75 }}>
        We do <strong>not</strong> require you to create an account, and we do not collect
        your name, email address, or other personal information in order to browse the site.
        You enter sweepstakes on the sponsors&apos; own websites — we never see or store
        your entries.
      </p>
      <p style={{ lineHeight: 1.75 }}>
        Like most websites, our hosting and analytics providers may automatically log basic
        technical information such as your IP address, browser type, and pages visited, for
        security and to understand how the site is used.
      </p>

      <h2 style={{ fontSize: "22px", marginTop: "32px" }}>Cookies and advertising</h2>
      <p style={{ lineHeight: 1.75 }}>
        We use cookies and similar technologies to operate the site and to show advertising.
        Third-party vendors, including Google, use cookies to serve ads based on your prior
        visits to this and other websites. Google&apos;s use of advertising cookies enables
        it and its partners to serve ads to you based on your visit to our site and/or other
        sites on the Internet.
      </p>
      <p style={{ lineHeight: 1.75 }}>
        You may opt out of personalized advertising by visiting{" "}
        <a
          href="https://www.google.com/settings/ads"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#2563eb" }}
        >
          Google Ads Settings
        </a>
        . You can also control cookies through your browser settings.
      </p>

      <h2 style={{ fontSize: "22px", marginTop: "32px" }}>Children</h2>
      <p style={{ lineHeight: 1.75 }}>
        This site is intended for adults. We do not knowingly collect personal information
        from children under 13. Most sweepstakes listed here require entrants to be 18 or
        older — always check the sponsor&apos;s official rules.
      </p>

      <h2 style={{ fontSize: "22px", marginTop: "32px" }}>External links</h2>
      <p style={{ lineHeight: 1.75 }}>
        Our listings link to third-party sweepstakes pages. We are not responsible for the
        privacy practices of those sites — review each sponsor&apos;s privacy policy before
        entering.
      </p>

      <h2 style={{ fontSize: "22px", marginTop: "32px" }}>Changes to this policy</h2>
      <p style={{ lineHeight: 1.75 }}>
        We may update this policy from time to time. The &quot;last updated&quot; date at
        the top will reflect the most recent changes.
      </p>

      <h2 style={{ fontSize: "22px", marginTop: "32px" }}>Contact</h2>
      <p style={{ lineHeight: 1.75 }}>
        Questions about this policy? <Link href="/contact" style={{ color: "#2563eb" }}>Contact us</Link>.
      </p>
    </main>
  );
}
