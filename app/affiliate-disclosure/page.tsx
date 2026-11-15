import Link from "next/link";

export const metadata = {
  title: "Affiliate Disclosure | Sweepstakes Central",
  description:
    "How Sweepstakes Central makes money — affiliate links and sponsored listings, and why they never influence which sweepstakes we list.",
};

const UPDATED = "November 15, 2026";

export default function AffiliateDisclosurePage() {
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
      <h1 style={{ fontSize: "32px", margin: "16px 0 8px" }}>Affiliate Disclosure</h1>
      <p style={{ color: "#64748b", marginBottom: "32px" }}>Last updated: {UPDATED}</p>

      <p style={{ lineHeight: 1.75 }}>
        Sweepstakes Central is free to use. To help cover the time spent finding and
        verifying legitimate sweepstakes, some links on this site are affiliate links.
        If you click one and sign up or buy something, we may earn a small commission
        — at no extra cost to you.
      </p>

      <h2 style={{ fontSize: "22px", marginTop: "32px" }}>What that means in practice</h2>
      <ul style={{ lineHeight: 1.75, paddingLeft: "20px" }}>
        <li>
          <strong>Listings are never influenced by affiliate deals.</strong> Every
          sweepstakes on this site passes the same verification check — real sponsor,
          free entry, published official rules, still open — whether or not it has an
          affiliate link attached. A listing is never added, kept, or ranked higher
          because it pays us.
        </li>
        <li>
          <strong>Affiliate links are labeled.</strong> Where a link may earn us a
          commission, it says so right next to the link.
        </li>
        <li>
          <strong>Sponsored listings are labeled too.</strong> If a brand pays for a
          featured placement, the listing is clearly marked &quot;Sponsored.&quot; Paid
          placement never skips the verification check — a giveaway that fails
          verification doesn&apos;t get listed, paid or not.
        </li>
      </ul>

      <p style={{ lineHeight: 1.75 }}>
        Questions? Contact us at{" "}
        <a href="mailto:haroun26@gmail.com" style={{ color: "#2563eb" }}>
          haroun26@gmail.com
        </a>
        .
      </p>
    </main>
  );
}
