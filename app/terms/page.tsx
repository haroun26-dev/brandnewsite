import Link from "next/link";

export const metadata = {
  title: "Terms of Use | Sweepstakes Central",
  description:
    "Terms of Use for Sweepstakes Central — how the site may be used and our limitations.",
};

const UPDATED = "September 12, 2026";

export default function TermsPage() {
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
      <h1 style={{ fontSize: "32px", margin: "16px 0 8px" }}>Terms of Use</h1>
      <p style={{ color: "#64748b", marginBottom: "32px" }}>Last updated: {UPDATED}</p>

      <p style={{ lineHeight: 1.75 }}>
        By using sweepstakescentral.org, you agree to these terms.
      </p>

      <h2 style={{ fontSize: "22px", marginTop: "32px" }}>What this site provides</h2>
      <p style={{ lineHeight: 1.75 }}>
        Sweepstakes Central publishes a curated list of sweepstakes and instant win games
        run by third-party sponsors. We link to the sponsors&apos; official entry pages. We
        do not operate the promotions ourselves, collect entries, or award prizes.
      </p>

      <h2 style={{ fontSize: "22px", marginTop: "32px" }}>Accuracy</h2>
      <p style={{ lineHeight: 1.75 }}>
        We verify listings before publishing and remove ended promotions, but details can
        change without notice. Always confirm the prize, eligibility, and end date in the
        sponsor&apos;s official rules before entering. We are not responsible for errors,
        omissions, or changes made by sponsors.
      </p>

      <h2 style={{ fontSize: "22px", marginTop: "32px" }}>Eligibility</h2>
      <p style={{ lineHeight: 1.75 }}>
        Each sweepstakes sets its own eligibility requirements (age, location, entry
        limits). It is your responsibility to make sure you are eligible before entering.
        Entering a sweepstakes you are not eligible for may disqualify you from winning.
      </p>

      <h2 style={{ fontSize: "22px", marginTop: "32px" }}>Acceptable use</h2>
      <ul style={{ lineHeight: 1.75, paddingLeft: "20px" }}>
        <li>Don&apos;t use the site for anything unlawful.</li>
        <li>
          Don&apos;t attempt to disrupt the site or scrape it aggressively in ways that
          degrade it for other visitors.
        </li>
        <li>
          You may share links to our pages, but don&apos;t copy our articles or listings
          wholesale onto another site.
        </li>
      </ul>

      <h2 style={{ fontSize: "22px", marginTop: "32px" }}>No guarantees</h2>
      <p style={{ lineHeight: 1.75 }}>
        The site is provided &quot;as is.&quot; We make no guarantees that any listed
        sweepstakes will remain open, that prizes will be awarded as described, or that
        using this site will result in winning anything.
      </p>

      <h2 style={{ fontSize: "22px", marginTop: "32px" }}>Limitation of liability</h2>
      <p style={{ lineHeight: 1.75 }}>
        To the fullest extent permitted by law, we are not liable for any loss or damage
        arising from your use of this site or your participation in third-party
        promotions.
      </p>

      <h2 style={{ fontSize: "22px", marginTop: "32px" }}>Changes</h2>
      <p style={{ lineHeight: 1.75 }}>
        We may update these terms at any time. Continued use of the site after changes
        means you accept the updated terms.
      </p>

      <h2 style={{ fontSize: "22px", marginTop: "32px" }}>Contact</h2>
      <p style={{ lineHeight: 1.75 }}>
        <Link href="/contact" style={{ color: "#2563eb" }}>Contact us</Link> with any questions about these terms.
      </p>
    </main>
  );
}
