import Link from "next/link";
import { POSTS } from "../lib/posts";

export const metadata = {
  title: "Sweepstakes Tips & Guides | Sweepstakes Central",
  description:
    "Practical guides to entering sweepstakes: how to improve your odds, avoid scams, build a daily entry routine, and what winners should know about taxes.",
};

export default function BlogPage() {
  return (
    <main
      style={{
        maxWidth: "760px",
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
      <h1 style={{ fontSize: "32px", margin: "16px 0 8px" }}>Sweepstakes Tips & Guides</h1>
      <p style={{ color: "#64748b", marginBottom: "32px" }}>
        Practical advice for entering sweepstakes smarter — and avoiding the traps.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {POSTS.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            style={{
              textDecoration: "none",
              color: "inherit",
              border: "1px solid #e2e8f0",
              borderRadius: "12px",
              padding: "20px 22px",
              display: "block",
            }}
          >
            <div style={{ fontSize: "13px", color: "#64748b", marginBottom: "6px" }}>
              {post.date} &middot; {post.readTime}
            </div>
            <div style={{ fontSize: "20px", fontWeight: 700, marginBottom: "8px" }}>
              {post.title}
            </div>
            <div style={{ color: "#475569", lineHeight: 1.6 }}>{post.description}</div>
          </Link>
        ))}
      </div>
    </main>
  );
}
