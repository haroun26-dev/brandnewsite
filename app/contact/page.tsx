import Link from "next/link";

export const metadata = {
  title: "Contact | Sweepstakes Central",
  description:
    "Get in touch with Sweepstakes Central — report a dead link, suggest a sweepstakes, or send feedback.",
};

export default function ContactPage() {
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
      <h1 style={{ fontSize: "32px", margin: "16px 0 8px" }}>Contact Us</h1>
      <p style={{ color: "#64748b", marginBottom: "32px" }}>
        Questions, corrections, or a sweepstakes we should list? We read everything.
      </p>

      <h2 style={{ fontSize: "22px", marginTop: "32px" }}>Email</h2>
      <p style={{ lineHeight: 1.75 }}>
        <a href="mailto:haroun26@gmail.com" style={{ color: "#2563eb" }}>
          haroun26@gmail.com
        </a>
      </p>

      <h2 style={{ fontSize: "22px", marginTop: "32px" }}>What to include</h2>
      <ul style={{ lineHeight: 1.75, paddingLeft: "20px" }}>
        <li>
          <strong>Reporting a problem:</strong> tell us which listing is wrong and what you saw.
        </li>
        <li>
          <strong>Suggesting a sweepstakes:</strong> include the official entry URL and the
          end date if you know it. We&apos;ll verify it before listing.
        </li>
        <li>
          <strong>Privacy requests:</strong> see our <Link href="/privacy" style={{ color: "#2563eb" }}>Privacy Policy</Link> for
          how we handle your data.
        </li>
      </ul>
      <p style={{ lineHeight: 1.75 }}>
        We aim to reply within a few days. Please don&apos;t send sensitive personal
        information like Social Security numbers or bank details — we&apos;ll never ask for
        those, and neither should any legitimate sweepstakes.
      </p>
    </main>
  );
}
