import Link from "next/link";

export const metadata = {
  title: "About | Sweepstakes Central",
  description:
    "What Sweepstakes Central is, how we verify listings, and why you can trust the sweepstakes and instant win games we publish.",
};

export default function AboutPage() {
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
      <h1 style={{ fontSize: "32px", margin: "16px 0 8px" }}>About Sweepstakes Central</h1>
      <p style={{ color: "#64748b", marginBottom: "32px" }}>
        Free sweepstakes and instant win games, verified by a human before they go live.
      </p>

      <h2 style={{ fontSize: "22px", marginTop: "32px" }}>What this site is</h2>
      <p style={{ lineHeight: 1.75 }}>
        Sweepstakes Central is a curated list of legitimate, free-to-enter sweepstakes and
        instant win games from real brands. Every listing links directly to the sponsor&apos;s
        official entry page — we never ask you to sign up through us, pay anything, or hand
        over information to enter.
      </p>

      <h2 style={{ fontSize: "22px", marginTop: "32px" }}>How we verify listings</h2>
      <p style={{ lineHeight: 1.75 }}>
        Before a sweepstakes appears on the homepage, we check that:
      </p>
      <ul style={{ lineHeight: 1.75, paddingLeft: "20px" }}>
        <li>The promotion is run by a real, identifiable brand or company.</li>
        <li>Entry is genuinely free — no purchase necessary.</li>
        <li>The official rules are published and accessible on the sponsor&apos;s page.</li>
        <li>The promotion is still open (we remove ended sweepstakes).</li>
      </ul>
      <p style={{ lineHeight: 1.75 }}>
        Listings are reviewed and refreshed every few days. If you spot a dead link or an
        ended promotion we missed, <Link href="/contact" style={{ color: "#2563eb" }}>let us know</Link>.
      </p>

      <h2 style={{ fontSize: "22px", marginTop: "32px" }}>What we don&apos;t do</h2>
      <ul style={{ lineHeight: 1.75, paddingLeft: "20px" }}>
        <li>We don&apos;t run the sweepstakes ourselves — the sponsors do.</li>
        <li>We don&apos;t collect your entries or your personal information.</li>
        <li>We don&apos;t charge for anything on this site.</li>
        <li>We don&apos;t guarantee anyone will win.</li>
      </ul>

      <h2 style={{ fontSize: "22px", marginTop: "32px" }}>How the site makes money</h2>
      <p style={{ lineHeight: 1.75 }}>
        Sweepstakes Central is free to use and supported by advertising. Ads help cover the
        time spent finding and verifying legitimate promotions. Editorial listings are never
        influenced by advertisers — a sponsor can&apos;t pay to appear here.
      </p>
    </main>
  );
}
